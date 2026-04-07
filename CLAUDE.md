# Admitra – Claude Code Context

## What is this?
**Admitra** is a React + Vite web app for BAC/university entrance exam prep. The frontend is a comprehensive study system with adaptive difficulty, spaced repetition, gamification, and now a full mistakes journal with image uploads.

## Current State (after session 2)

### Completed Features
- **Placement system**: Initial diagnostic quiz to set chapter levels.
- **Skill Tree**: Browse 24 chapters (math + informatics) with progress tracking, level indicators, XP bars.
- **Study Sessions**: Adaptive question difficulty, hearts system, instant feedback with explanations.
- **Gamification**: XP tracking, daily streaks, activity heatmap.
- **Roadmap**: 7-phase progression milestones (Bac → advanced algo/theory).
- **Weekly Coach**: Time-distribution planner based on weak chapters.
- **Assessment Matrix**: Manual chapter-scoring interface.
- **Statistics Dashboard**: Diagnostic progress tracker.

### Phase 3: Mistakes Redesign (DONE)
New full-featured mistakes page (replacing old inline editor):
- **MistakeCard** — View mode: date badge, color-coded error type tag, discipline pill, image thumbnails with lightbox zoom, summary/correction blocks.
- **MistakeEditor** — Create/edit form: pill toggles for discipline, CustomSelect for error type, two ImageUploader fields (problem/solution), text areas.
- **ImageUploader** — Drag/drop + click, auto-compresses to 800px/70% quality, preview with remove button.
- **MistakesPage** — Grid layout, discipline/type filters, empty states.
- **State changes**: Mistakes now include `problemImage` and `solutionImage` (both null by default). `ADD_MISTAKE` accepts a `mistake` payload; `UPDATE_MISTAKE` accepts either `patch` or field-by-field.
- **Migration**: `STATE_VERSION` bumped to 4. `migrateV3toV4` adds image fields retroactively.

### Phase 4: KaTeX Math Rendering (DONE)
Questions and explanations now render mathematical notation:
- **Explicit math**: Wrap in `$...$` (inline) or `$$...$$` (display).
- **Unicode fallback**: Automatically wraps whitespace-separated tokens containing superscripts (²), subscripts (₁), or symbols (∞, →, ±, etc.) in `$...$` delimiters. Converts to LaTeX macros on the fly.
- **Components updated**: MultipleChoiceQ, TrueFalseQ, FillBlankQ, CodeTraceQ (prompt only), AnswerFeedback.
- **CSS**: KaTeX font colors inherit from page theme; font-size 1.05em.

### Tech Stack
- **React 19.1** + **Vite 7** (dev server).
- **Styling**: Custom CSS with CSS variables (dark theme, glassmorphism).
- **State**: useReducer hook + localStorage (migratable).
- **Dependencies**: react, react-dom, katex.
- **Data**: JSON blueprint (24 chapters, 300+ questions across question types).

### Question Types
- **MultipleChoice**: 4 options, pick one.
- **TrueFalse**: Adevarat/Fals.
- **FillBlank**: Text input, exact-match or fuzzy eval.
- **CodeTrace**: C++ code snippet + output prediction.

## Where We Picked Off (end of Session 2)

Completed Phase 3 (Mistakes redesign) + Phase 4 (KaTeX) fully:
1. Created 4 new Mistakes components (ImageUploader, MistakeCard, MistakeEditor, MistakesPage).
2. Updated reducer to support payload-based ADD_MISTAKE and patch-based UPDATE_MISTAKE.
3. Fixed critical migration bug: `migrateV1toV2` was hardcoding `STATE_VERSION`, causing v1 users to skip v3/v4 migrations. Now steps through all migrations in chain.
4. Installed katex, created MathText component with auto-wrap for Unicode math.
5. Wrapped question prompts + options + explanations with MathText.
6. Full CSS for mistakes page, editor, image uploader, pill toggles, lightbox, KaTeX.
7. **Build passes clean** (640 kB JS, typical for app size + KaTeX fonts).

### Known Non-Breaking Issues
- Pre-existing vite 7.0.0 has 1 high-severity audit warning (path traversal). Not from KaTeX. Harmless in dev/build.
- Dead code: `activeTab === "assessment"` branch in App.jsx is unreachable (TopBar doesn't list it). Kept for now.
- Session history cap uses `.slice(0, 500)` (front-cap) instead of `.slice(-500)` (rear-cap); works by accident since entries are unshifted. Logic is sound but non-obvious.

## Next Steps (if needed)
1. **Deploy**: Set up GitHub/Vercel, configure git remote, push.
2. **Content**: Add more questions (currently ~300 spread across 24 chapters).
3. **Performance**: Consider code-splitting (warnings show ~640 kB JS).
4. **Admin panel**: Bulk question upload, analytics dashboard.
5. **Backend**: Optional node/express for user accounts, progress sync.

## Key Files
- `src/App.jsx` — Main router/shell.
- `src/hooks/useAppState.js` — Reducer, all actions.
- `src/state/migrations.js` — State version migration logic.
- `src/components/mistakes/` — New Mistakes page ecosystem.
- `src/components/ui/MathText.jsx` — Math rendering wrapper.
- `src/utils/mathAutoConvert.js` — Unicode → LaTeX converter.
- `src/styles.css` — All styling (2400+ lines).
- `data/exam_blueprint.json` — Chapter/topic metadata + error labels.
- `data/questions/` — ~300 questions organized by topic.

## How to Resume
1. Read this file first.
2. Check git log to see what was built in the last commit.
3. Run `npm run dev` to start dev server, test Mistakes tab, try creating/editing a mistake with images.
4. Check console for any runtime errors.
5. If you're ready to push: `git remote add origin <URL>` then `git push -u origin master`.
