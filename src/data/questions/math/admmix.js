// Probleme mixte de admitere — 20 questions (weight 1.3, FMI+UPB only)
export const admmixQuestions = [
  {
    id: "admmix_mc_001", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Se da f: ℝ → ℝ, f(x) = xeˣ. Care este intervalul pe care f este convexă?",
    options: ["(-2, +∞)", "(-∞, -2)", "(-1, +∞)", "ℝ"],
    correctIndex: 0,
    explanation: "f''(x) = eˣ(x+2) > 0 ⟺ x > -2 (deoarece eˣ > 0 mereu). Deci f este convexa pe (-2, +∞)."
  },
  {
    id: "admmix_mc_002", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Multimea solutiilor inecuatiei ln(x) < 1 este:",
    options: ["(0, e)", "(0, 1)", "(1, e)", "(-∞, e)"],
    correctIndex: 0,
    explanation: "ln(x) < 1 ⟺ x < e¹ = e (ln strict crescator). Domeniu: x > 0. Solutii: (0, e)."
  },
  {
    id: "admmix_mc_003", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Fie f(x) = x³ - 3x. Numarul de puncte de extrem ale lui f este:",
    options: ["2", "0", "1", "3"],
    correctIndex: 0,
    explanation: "f'(x) = 3x²-3 = 3(x-1)(x+1) = 0 ⟹ x=±1. Doua puncte de extrem (maxim local la x=-1, minim local la x=1)."
  },
  {
    id: "admmix_mc_004", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Suma ∑ₖ₌₁ⁿ k = n(n+1)/2. Valoarea ∑ₖ₌₁¹⁰⁰ k este:",
    options: ["5050", "5000", "4950", "10100"],
    correctIndex: 0,
    explanation: "∑ₖ₌₁¹⁰⁰ k = 100·101/2 = 5050."
  },
  {
    id: "admmix_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Daca f'(x) = 2x si f(1) = 3, atunci f(2) = ___",
    options: ["6", "4", "7", "5"],
    correctIndex: 0,
    explanation: "f(x) = x² + C. f(1)=1+C=3 ⟹ C=2. f(2) = 4+2 = 6."
  },
  {
    id: "admmix_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Numarul natural n pentru care n! > 100 este cel mai mic atunci cand n =",
    options: ["5", "4", "6", "10"],
    correctIndex: 0,
    explanation: "4! = 24, 5! = 120 > 100. Cel mai mic n este 5."
  },
  {
    id: "admmix_fb_001", type: "fill_blank", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Valoarea maximă a funcției f(x) = -x² + 2x + 3 este ___",
    answer: "4", tolerance: 0,
    explanation: "f'(x) = -2x+2 = 0 ⟹ x=1. f(1) = -1+2+3 = 4."
  },
  {
    id: "admmix_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Fie f(x) = x/(x+1) pentru x≠-1. f este injectiva? Raspunde cu 'da' sau 'nu'.",
    answer: "da",
    explanation: "f(x₁) = f(x₂) ⟹ x₁(x₂+1) = x₂(x₁+1) ⟹ x₁ = x₂. Deci f este injectiva."
  },
  {
    id: "admmix_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "∫₀¹ (x² + eˣ) dx = 1/3 + ___",
    answer: "e-1",
    explanation: "∫₀¹ eˣ dx = [eˣ]₀¹ = e-1. Rezultatul total: 1/3 + (e-1)."
  },
  {
    id: "admmix_fb_004", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Limita lim(x→0) (eˣ - 1 - x)/x² = ___",
    answer: "1/2",
    explanation: "Prin Taylor: eˣ ≈ 1 + x + x²/2 + ... Deci (eˣ-1-x)/x² ≈ x²/2 / x² = 1/2."
  },
  {
    id: "admmix_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Numarul de solutii intregi ale inecuatiei |x - 3| < 2 este ___",
    answer: "3", tolerance: 0,
    explanation: "|x-3| < 2 ⟺ 1 < x < 5 ⟺ x ∈ {2, 3, 4}. Trei solutii intregi."
  },
  {
    id: "admmix_tf_001", type: "true_false", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    statement: "Orice sir monoton si marginit este convergent.",
    correct: true,
    explanation: "Teorema sirurilor monotone marginite: convergenta este garantata."
  },
  {
    id: "admmix_tf_002", type: "true_false", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    statement: "Daca f si g sunt derivabile, atunci f∘g este derivabila si (f∘g)' = f'(g)·g'.",
    correct: true,
    explanation: "Regula lantului: (f(g(x)))' = f'(g(x))·g'(x). Adevarat."
  },
  {
    id: "admmix_tf_003", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    statement: "Daca f este convexa si are un punct de extrem, atunci acel punct este minim global.",
    correct: true,
    explanation: "O functie convexa nu poate avea maxim local strict (care nu e global). Orice extrem al unei functii convexe este minim global."
  },
  {
    id: "admmix_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    statement: "lim(n→∞) n^(1/n) = 1.",
    correct: true,
    explanation: "Prin logaritm: ln(n^(1/n)) = ln(n)/n → 0. Deci limita = e⁰ = 1."
  },
  {
    id: "admmix_mc_007", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Ecuatia x² + y² = 1 reprezinta in plan:",
    options: ["Un cerc de raza 1 centrat in origine", "O elipsa", "O parabola", "O dreapta"],
    correctIndex: 0,
    explanation: "x² + y² = r² cu r=1, centrul (0,0). Este un cerc unitar."
  },
  {
    id: "admmix_mc_008", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Fie A = {1,2,3}. Numarul de subseturi ale lui A este:",
    options: ["8", "6", "9", "3"],
    correctIndex: 0,
    explanation: "O multime cu n elemente are 2ⁿ subseturi. 2³ = 8."
  },
  {
    id: "admmix_mc_009", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Derivata de ordin 2 a lui f(x) = x⁵ este:",
    options: ["20x³", "5x⁴", "60x²", "x⁴"],
    correctIndex: 0,
    explanation: "f'(x)=5x⁴, f''(x)=20x³."
  },
  {
    id: "admmix_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 20,
    prompt: "Inegalitatea √(ab) ≤ (a+b)/2 pentru a,b > 0 se numeste:",
    options: ["Inegalitatea mediilor", "Inegalitatea Cauchy-Schwarz", "Inegalitatea Bernoulli", "Inegalitatea triunghiului"],
    correctIndex: 0,
    explanation: "Media geometrica ≤ media aritmetica. Aceasta este inegalitatea AM-GM (inegalitatea mediilor)."
  },
  {
    id: "admmix_mc_011", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "admmix", subject: "math", xpValue: 15,
    prompt: "Rangul matricei [[1,2],[2,4]] este:",
    options: ["1", "2", "0", "Nedefinit"],
    correctIndex: 0,
    explanation: "Linia 2 = 2 × Linia 1, deci liniile sunt dependente liniar. Rangul = 1."
  }
];
