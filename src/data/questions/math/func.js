// Functii si grafice — 20 questions
export const funcQuestions = [
  {
    id: "func_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    prompt: "Domeniul de definitie al functiei f(x) = 1/(x - 2) este:",
    options: ["ℝ \\ {2}", "ℝ", "[2, +∞)", "(-∞, 2)"],
    correctIndex: 0,
    explanation: "Numitorul nu poate fi zero, deci x ≠ 2. Domeniul este ℝ \\ {2}."
  },
  {
    id: "func_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    prompt: "Functia f(x) = x² este:",
    options: ["Para", "Impara", "Nici para, nici impara", "Bijectiva pe ℝ"],
    correctIndex: 0,
    explanation: "f(-x) = (-x)² = x² = f(x), deci f este para."
  },
  {
    id: "func_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Daca f(x) = 2x + 1, atunci f⁻¹(x) =",
    options: ["(x-1)/2", "(x+1)/2", "2x-1", "x/2 + 1"],
    correctIndex: 0,
    explanation: "y = 2x+1 ⟹ x = (y-1)/2. Deci f⁻¹(x) = (x-1)/2."
  },
  {
    id: "func_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Daca f(x) = x² si g(x) = x + 1, atunci (f∘g)(x) =",
    options: ["(x+1)²", "x² + 1", "x² + x + 1", "x³ + x²"],
    correctIndex: 0,
    explanation: "(f∘g)(x) = f(g(x)) = f(x+1) = (x+1)²."
  },
  {
    id: "func_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Functia f: ℝ → ℝ, f(x) = 3x - 5 este:",
    options: ["Bijectiva", "Numai injectiva", "Numai surjectiva", "Niciuna"],
    correctIndex: 0,
    explanation: "Orice functie liniara de forma ax+b cu a≠0 este bijectiva pe ℝ."
  },
  {
    id: "func_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "func", subject: "math", xpValue: 20,
    prompt: "Domeniul de definitie al functiei f(x) = √(x² - 4) este:",
    options: ["(-∞,-2] ∪ [2,+∞)", "[-2, 2]", "(−2, 2)", "ℝ"],
    correctIndex: 0,
    explanation: "Conditia: x² - 4 ≥ 0 ⟺ (x-2)(x+2) ≥ 0 ⟺ x ≤ -2 sau x ≥ 2."
  },
  {
    id: "func_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "func", subject: "math", xpValue: 20,
    prompt: "Fie f: [0,∞) → ℝ, f(x) = √x. Imaginea functiei este:",
    options: ["[0, +∞)", "ℝ", "(0, +∞)", "[-∞, 0]"],
    correctIndex: 0,
    explanation: "f(0)=0 si f creste la infinit, deci Im(f) = [0, +∞)."
  },
  {
    id: "func_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    prompt: "Daca f(x) = 5x - 3, atunci f(2) = ___",
    answer: "7", tolerance: 0,
    explanation: "f(2) = 5·2 - 3 = 10 - 3 = 7."
  },
  {
    id: "func_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    prompt: "Intersectia graficului lui f(x) = 2x + 4 cu axa Oy are ordonata ___",
    answer: "4", tolerance: 0,
    explanation: "La x=0: f(0) = 4. Punctul de intersectie este (0, 4)."
  },
  {
    id: "func_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Daca f(x) = x² - 4 si f(a) = 0, atunci o valoare pozitiva a lui a este ___",
    answer: "2", tolerance: 0,
    explanation: "x² - 4 = 0 ⟹ x = ±2. Valoarea pozitiva este a = 2."
  },
  {
    id: "func_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Functia f(x) = |x| are minimul in x = ___",
    answer: "0", tolerance: 0,
    explanation: "|x| ≥ 0 pentru orice x, cu egalitate la x=0. Minimul este in x=0."
  },
  {
    id: "func_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "func", subject: "math", xpValue: 20,
    prompt: "Daca f(f(x)) = x si f(2) = 5, atunci f(5) = ___",
    answer: "2", tolerance: 0,
    explanation: "f(f(x)) = x inseamna ca f este propria inversa (involutie). Deci f(f(2)) = 2, adica f(5) = 2."
  },
  {
    id: "func_fb_006", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "func", subject: "math", xpValue: 20,
    prompt: "Numarul de puncte fixe ale functiei f(x) = x² - 2 (unde f(x) = x) este ___",
    answer: "2", tolerance: 0,
    explanation: "x² - 2 = x ⟹ x² - x - 2 = 0 ⟹ (x-2)(x+1) = 0 ⟹ x=2 sau x=-1. Doua puncte fixe."
  },
  {
    id: "func_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    statement: "Functia f(x) = x³ este impara.",
    correct: true,
    explanation: "f(-x) = (-x)³ = -x³ = -f(x). Adevarat, f este impara."
  },
  {
    id: "func_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    statement: "Orice functie crescatoare este si injectiva.",
    correct: true,
    explanation: "Daca x₁ < x₂ ⟹ f(x₁) < f(x₂), deci f(x₁) ≠ f(x₂). Injectivitate confirmata."
  },
  {
    id: "func_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    statement: "Functia f(x) = 1/x este bijectiva pe ℝ \\ {0}.",
    correct: false,
    explanation: "f: ℝ\\ {0} → ℝ\\ {0} este bijectiva, dar codomeniul declarat ℝ nu e egal cu imaginea. Pe ℝ\\{0} → ℝ nu e surjectiva (0 nu e atins)."
  },
  {
    id: "func_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    statement: "Daca f si g sunt functii pare, atunci f + g este si ea para.",
    correct: true,
    explanation: "(f+g)(-x) = f(-x)+g(-x) = f(x)+g(x) = (f+g)(x). Adevarat."
  },
  {
    id: "func_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 10,
    prompt: "Functia f(x) = eˣ este:",
    options: ["Strict crescatoare pe ℝ", "Strict descrescatoare pe ℝ", "Constanta", "Para"],
    correctIndex: 0,
    explanation: "Derivata eˣ > 0 pentru orice x, deci f este strict crescatoare pe ℝ."
  },
  {
    id: "func_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "func", subject: "math", xpValue: 15,
    prompt: "Zeroul functiei f(x) = ln(x) este:",
    options: ["x = 1", "x = 0", "x = e", "Nu are zerouri"],
    correctIndex: 0,
    explanation: "ln(1) = 0, deci zeroul lui ln(x) este x = 1."
  },
  {
    id: "func_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "func", subject: "math", xpValue: 20,
    prompt: "Daca f: A → B este bijectiva, atunci f⁻¹: B → A este:",
    options: ["Bijectiva", "Numai injectiva", "Numai surjectiva", "Nu exista"],
    correctIndex: 0,
    explanation: "Inversa unei bijectii este bijectiva: injectivitatea si surjectivitatea se transfera."
  }
];
