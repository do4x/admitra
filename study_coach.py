import argparse
import json
from copy import deepcopy
from datetime import date
from pathlib import Path
from statistics import mean


ROOT = Path(__file__).resolve().parent
DATA_FILE = ROOT / "data" / "exam_blueprint.json"
WORKSPACE = ROOT / "workspace"
PROFILE_FILE = WORKSPACE / "student_profile.json"
STATE_FILE = WORKSPACE / "assessment_state.json"
WEEKLY_FILE = WORKSPACE / "weekly_sheet.md"
ERROR_LOG_FILE = WORKSPACE / "error_log.md"

DAY_THEMES = {
    1: "fundament",
    2: "probleme grele",
    3: "antrenament cronometrat mixt",
    4: "reparatie pe capitole slabe",
    5: "admitere-focused",
    6: "Bac-focused",
    7: "evaluare saptamanala"
}


def load_blueprint():
    return json.loads(DATA_FILE.read_text(encoding="utf-8"))


def ensure_workspace():
    WORKSPACE.mkdir(exist_ok=True)


def chapter_score(chapter):
    avg = mean([chapter["knowledge"], chapter["speed"], chapter["confidence"]])
    return round(avg / 4 * 100, 2)


def chapter_color(score):
    if score < 70:
        return "red"
    if score < 85:
        return "yellow"
    return "green"


def default_profile(blueprint):
    return {
        "student_name": "Elev",
        "language": blueprint["meta"]["language"],
        "target_cycle": "2026",
        "daily_hours": blueprint["meta"]["study_defaults"]["hours_per_day"],
        "days_per_week": blueprint["meta"]["study_defaults"]["days_per_week"],
        "primary_informatics_track": "C++ algoritmic",
        "targets": blueprint["meta"]["targets"],
        "notes": [
            "Saptamana 1 este rezervata diagnosticului complet.",
            "UPB ramane configurat implicit pentru nivel ACS/CTI/IS."
        ]
    }


def default_chapters(blueprint):
    def build_entry(topic, subject):
        return {
            "subject": subject,
            "id": topic["id"],
            "name": topic["name"],
            "weight": topic["weight"],
            "tags": topic["tags"],
            "knowledge": 0,
            "speed": 0,
            "confidence": 0,
            "last_percent": 0,
            "streak_above_85": 0,
            "priority": "high",
            "notes": ""
        }

    return {
        "math": [build_entry(topic, "math") for topic in blueprint["math_topics"]],
        "informatics": [
            build_entry(topic, "informatics")
            for topic in blueprint["informatics_topics"]
        ]
    }


def default_state(blueprint):
    return {
        "generated_on": str(date.today()),
        "phase": "diagnostic + fundament",
        "assessment_week": 1,
        "diagnostic_days": [
            {
                "day": 1,
                "name": "Test matematica Bac M1 + corectare ghidata",
                "status": "pending"
            },
            {
                "day": 2,
                "name": "Test informatica Bac/admitere in C++ + corectare ghidata",
                "status": "pending"
            },
            {
                "day": 3,
                "name": "Mini-proba de admitere mixta + profil personalizat",
                "status": "pending"
            }
        ],
        "chapters": default_chapters(blueprint),
        "history": [],
        "estimated_scores": {
            "bac_m1": 0,
            "fmi_entrance": 0,
            "upb_acs_entrance": 0
        }
    }


def load_profile(blueprint):
    if not PROFILE_FILE.exists():
        return default_profile(blueprint)
    return json.loads(PROFILE_FILE.read_text(encoding="utf-8"))


def load_state(blueprint):
    if not STATE_FILE.exists():
        return default_state(blueprint)
    return json.loads(STATE_FILE.read_text(encoding="utf-8"))


def save_json(path, payload):
    path.parent.mkdir(exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def topic_lookup(blueprint):
    lookup = {}
    for topic in blueprint["math_topics"] + blueprint["informatics_topics"]:
        lookup[topic["id"]] = topic
    return lookup


def flatten_chapters(state):
    return state["chapters"]["math"] + state["chapters"]["informatics"]


def weighted_average(chapters, required_tags=None):
    required_tags = required_tags or []
    eligible = []
    for chapter in chapters:
        if all(tag in chapter["tags"] for tag in required_tags):
            eligible.append(chapter)
    if not eligible:
        return 0.0
    total_weight = sum(chapter["weight"] for chapter in eligible)
    weighted_sum = sum(chapter_score(chapter) * chapter["weight"] for chapter in eligible)
    return round(weighted_sum / total_weight, 2)


def estimate_exam_scores(state):
    chapters = flatten_chapters(state)
    math_chapters = state["chapters"]["math"]
    info_chapters = state["chapters"]["informatics"]

    bac_readiness = round((weighted_average(math_chapters, ["bac"]) * 0.6 + weighted_average(info_chapters, ["bac"]) * 0.4) / 10, 2)
    fmi_readiness = round((weighted_average(math_chapters, ["fmi"]) * 0.5 + weighted_average(info_chapters, ["fmi"]) * 0.5) / 10, 2)
    upb_readiness = round((weighted_average(math_chapters, ["upb"]) * 0.55 + weighted_average(info_chapters, ["upb"]) * 0.45) / 10, 2)

    state["estimated_scores"] = {
        "bac_m1": min(bac_readiness, 10),
        "fmi_entrance": min(fmi_readiness, 10),
        "upb_acs_entrance": min(upb_readiness, 10)
    }
    for chapter in chapters:
        score = chapter_score(chapter)
        chapter["last_percent"] = score
        if score >= 85:
            chapter["streak_above_85"] += 1
        else:
            chapter["streak_above_85"] = 0
        if score < 70:
            chapter["priority"] = "high"
        elif chapter["streak_above_85"] >= 2:
            chapter["priority"] = "maintenance"
        else:
            chapter["priority"] = "medium"
    return state


def build_overview(state):
    lines = []
    estimates = state["estimated_scores"]
    lines.append("Estimari curente:")
    lines.append(f"- Bac M1: {estimates['bac_m1']:.2f}/10")
    lines.append(f"- UB FMI: {estimates['fmi_entrance']:.2f}/10")
    lines.append(f"- UPB ACS/CTI/IS: {estimates['upb_acs_entrance']:.2f}/10")

    ranked = sorted(flatten_chapters(state), key=chapter_score)
    weakest = ranked[:5]
    strongest = list(reversed(ranked[-5:]))
    lines.append("")
    lines.append("Capitole critice:")
    for chapter in weakest:
        lines.append(f"- {chapter['name']}: {chapter_score(chapter):.2f}% ({chapter_color(chapter_score(chapter))})")
    lines.append("")
    lines.append("Capitole forte:")
    for chapter in strongest:
        lines.append(f"- {chapter['name']}: {chapter_score(chapter):.2f}% ({chapter_color(chapter_score(chapter))})")
    return "\n".join(lines)


def build_weekly_sheet(profile, state):
    ranked = sorted(flatten_chapters(state), key=chapter_score)
    priorities = [chapter for chapter in ranked if chapter["priority"] == "high"][:4]
    maintenance = [chapter for chapter in ranked if chapter["priority"] == "maintenance"][:4]

    math_share = 50
    info_share = 50
    math_red = sum(1 for chapter in state["chapters"]["math"] if chapter_color(chapter_score(chapter)) == "red")
    info_red = sum(1 for chapter in state["chapters"]["informatics"] if chapter_color(chapter_score(chapter)) == "red")
    if math_red > info_red:
        math_share = 60
        info_share = 40
    elif info_red > math_red:
        math_share = 40
        info_share = 60

    lines = [
        f"# Fisa saptamanala - saptamana {state['assessment_week']}",
        "",
        "## Scoruri estimate",
        f"- Bac M1: {state['estimated_scores']['bac_m1']:.2f}/10",
        f"- UB FMI: {state['estimated_scores']['fmi_entrance']:.2f}/10",
        f"- UPB ACS/CTI/IS: {state['estimated_scores']['upb_acs_entrance']:.2f}/10",
        "",
        "## Capitole in prioritate mare",
    ]
    for chapter in priorities:
        lines.append(f"- {chapter['name']} - {chapter_score(chapter):.2f}% - {chapter_color(chapter_score(chapter))}")

    lines.extend([
        "",
        "## Capitole in mentenanta",
    ])
    for chapter in maintenance:
        lines.append(f"- {chapter['name']} - {chapter_score(chapter):.2f}% - green")

    lines.extend([
        "",
        "## Repartizarea recomandata a timpului",
        f"- Matematica: {math_share}%",
        f"- Informatica: {info_share}%",
        "",
        "## Ritm saptamanal fix",
    ])
    blueprint = load_blueprint()
    for item in blueprint["weekly_rhythm"]:
        lines.append(f"- {item}")

    lines.extend([
        "",
        "## Reguli de recalibrare",
        "- Sub 70% pe un capitol: prioritate mare in saptamana urmatoare.",
        "- Peste 85% doua saptamani la rand: capitol mutat in mentenanta.",
        "- Daca acelasi capitol ramane rosu 2 saptamani: revino la fundament si rezolvari ghidate.",
        "- Daca saptamana a fost ratata partial: reia cu un micro-diagnostic inainte de a continua progresia.",
        "",
        "## Greseli-tip de urmarit",
        "- teorie",
        "- executie",
        "- viteza",
        "- atentie",
        "- strategie"
    ])
    return "\n".join(lines) + "\n"


def select_exercises(blueprint, state, subject, limit=3):
    lookup = topic_lookup(blueprint)
    chapters = sorted(state["chapters"][subject], key=chapter_score)
    picks = []
    for chapter in chapters[:limit]:
        topic = lookup[chapter["id"]]
        bank = topic["exercise_bank"]
        index = min(len(bank) - 1, int(chapter_score(chapter) >= 70) + int(chapter_score(chapter) >= 85))
        picks.append((chapter, bank[index]))
    return picks


def pass_rule_for_day(day, math_picks, info_picks):
    if day == 7:
        return "Promovezi daca obtii minimum 70% la ambele mini-teste si etichetezi toate greselile."
    weakest_math = math_picks[0][0]["name"]
    weakest_info = info_picks[0][0]["name"]
    return (
        f"Promovezi daca rezolvi cel putin 70% din set in timpul tinta si nu ramane rosu "
        f"niciun exercitiu-cheie din {weakest_math} sau {weakest_info}."
    )


def build_daily_brief(profile, state, blueprint, day):
    math_picks = select_exercises(blueprint, state, "math")
    info_picks = select_exercises(blueprint, state, "informatics")
    objective = f"Ridica stabilitatea pe capitolele cele mai slabe in ziua de {DAY_THEMES[day]}."
    lines = [
        f"# Brief zilnic - Ziua {day}",
        "",
        f"## Obiectiv",
        objective,
        "",
        "## Matematica (80-90 min)"
    ]
    for idx, (_, text) in enumerate(math_picks, start=1):
        lines.append(f"{idx}. {text}")

    lines.extend([
        "",
        "## Informatica (60-75 min)"
    ])
    for idx, (_, text) in enumerate(info_picks, start=1):
        lines.append(f"{idx}. {text}")

    lines.extend([
        "",
        "## Timp tinta",
        "- Matematica: 80-90 min",
        "- Informatica: 60-75 min",
        "- Jurnal de greseli + recapitulare activa: 15-20 min",
        "",
        "## Barem scurt",
        "- 2 puncte: idee buna, executie incompleta",
        "- 3 puncte: rezolvare corecta cu ezitari sau depasire moderata de timp",
        "- 4 puncte: rezolvare corecta, clara si in timpul tinta",
        "",
        "## Regula de promovare pentru ziua urmatoare",
        f"- {pass_rule_for_day(day, math_picks, info_picks)}"
    ])
    return "\n".join(lines) + "\n"


def build_error_log_template():
    return (
        "# Jurnal de greseli\n\n"
        "| Data | Disciplina | Capitol | Tip greseala | Ce s-a intamplat | Corectie |\n"
        "| --- | --- | --- | --- | --- | --- |\n"
    )


def write_workspace_outputs(profile, state, blueprint):
    save_json(STATE_FILE, state)
    WEEKLY_FILE.write_text(build_weekly_sheet(profile, state), encoding="utf-8")
    for day in range(1, 8):
        daily_file = WORKSPACE / f"daily_brief_day{day}.md"
        daily_file.write_text(build_daily_brief(profile, state, blueprint, day), encoding="utf-8")


def cmd_init(_args):
    blueprint = load_blueprint()
    ensure_workspace()
    if _args.force or not PROFILE_FILE.exists():
        save_json(PROFILE_FILE, default_profile(blueprint))
    if _args.force or not STATE_FILE.exists():
        state = estimate_exam_scores(default_state(blueprint))
        save_json(STATE_FILE, state)
    if _args.force or not ERROR_LOG_FILE.exists():
        ERROR_LOG_FILE.write_text(build_error_log_template(), encoding="utf-8")
    profile = load_profile(blueprint)
    state = estimate_exam_scores(load_state(blueprint))
    write_workspace_outputs(profile, state, blueprint)
    print(f"Workspace initializat in {WORKSPACE}")


def cmd_overview(_args):
    blueprint = load_blueprint()
    ensure_workspace()
    state = estimate_exam_scores(load_state(blueprint))
    save_json(STATE_FILE, state)
    print(build_overview(state))


def cmd_weekly(_args):
    blueprint = load_blueprint()
    ensure_workspace()
    profile = load_profile(blueprint)
    state = estimate_exam_scores(load_state(blueprint))
    WEEKLY_FILE.write_text(build_weekly_sheet(profile, state), encoding="utf-8")
    save_json(STATE_FILE, state)
    print(f"Generat: {WEEKLY_FILE}")


def cmd_daily(args):
    blueprint = load_blueprint()
    ensure_workspace()
    profile = load_profile(blueprint)
    state = estimate_exam_scores(load_state(blueprint))
    save_json(STATE_FILE, state)
    day = args.day
    if day not in DAY_THEMES:
        raise SystemExit("Ziua trebuie sa fie intre 1 si 7.")
    output = WORKSPACE / f"daily_brief_day{day}.md"
    output.write_text(build_daily_brief(profile, state, blueprint, day), encoding="utf-8")
    print(f"Generat: {output}")


def cmd_sample_update(_args):
    blueprint = load_blueprint()
    ensure_workspace()
    state = default_state(blueprint)
    for idx, chapter in enumerate(state["chapters"]["math"]):
        chapter["knowledge"] = min(4, (idx % 4) + 1)
        chapter["speed"] = min(4, (idx % 3) + 1)
        chapter["confidence"] = min(4, (idx % 2) + 1)
    for idx, chapter in enumerate(state["chapters"]["informatics"]):
        chapter["knowledge"] = min(4, ((idx + 1) % 4) + 1)
        chapter["speed"] = min(4, ((idx + 2) % 3) + 1)
        chapter["confidence"] = min(4, ((idx + 1) % 2) + 1)
    state["history"].append(
        {
            "week": 1,
            "notes": "Exemplu de completare automata pentru verificare locala."
        }
    )
    state = estimate_exam_scores(state)
    write_workspace_outputs(load_profile(blueprint), state, blueprint)
    print("State-ul a fost populat cu un exemplu de diagnostic.")


def main():
    parser = argparse.ArgumentParser(description="Study coach pentru Bac M1 si admitere.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    init_parser = subparsers.add_parser("init", help="Initializeaza workspace-ul si fisierele implicite.")
    init_parser.add_argument("--force", action="store_true", help="Rescrie fisierele implicite si reseteaza starea.")
    init_parser.set_defaults(func=cmd_init)

    overview_parser = subparsers.add_parser("overview", help="Afiseaza o privire de ansamblu asupra nivelului curent.")
    overview_parser.set_defaults(func=cmd_overview)

    weekly_parser = subparsers.add_parser("weekly", help="Genereaza fisa saptamanala.")
    weekly_parser.set_defaults(func=cmd_weekly)

    daily_parser = subparsers.add_parser("daily", help="Genereaza brief-ul zilnic.")
    daily_parser.add_argument("--day", type=int, default=1, help="Ziua din ritmul saptamanal, intre 1 si 7.")
    daily_parser.set_defaults(func=cmd_daily)

    sample_parser = subparsers.add_parser("sample-update", help="Populeaza state-ul cu scoruri exemplu pentru verificare.")
    sample_parser.set_defaults(func=cmd_sample_update)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
