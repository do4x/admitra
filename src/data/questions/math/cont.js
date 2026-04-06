// Continuitate — 16 questions
export const contQuestions = [
  {
    id: "cont_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    prompt: "Functia f(x) = x² este continua pe ℝ?",
    options: ["Da, pe intregul ℝ", "Nu, are discontinuitati", "Continua doar pe [0,∞)", "Continua numai in x=0"],
    correctIndex: 0,
    explanation: "Polinoamele sunt continue pe ℝ. f(x) = x² este continua pe intregul ℝ."
  },
  {
    id: "cont_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    prompt: "Functia f(x) = 1/x este discontinua in:",
    options: ["x = 0", "x = 1", "x = -1", "Niciunde"],
    correctIndex: 0,
    explanation: "f(x) = 1/x este nedefinita in x=0, unde are o discontinuitate de speta intai (infinit)."
  },
  {
    id: "cont_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    prompt: "Daca f este continua pe [a,b] si f(a) < 0 < f(b), atunci prin teorema lui Bolzano-Cauchy:",
    options: ["Exista c ∈ (a,b) cu f(c) = 0", "f este monotona pe [a,b]", "f(a) + f(b) = 0", "Nu putem concluziona nimic"],
    correctIndex: 0,
    explanation: "Teorema valorilor intermediare (Bolzano): o functie continua pe [a,b] cu f(a) si f(b) de semne opuse are un zero in (a,b)."
  },
  {
    id: "cont_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    prompt: "O functie derivabila in x₀ este:",
    options: ["Continua in x₀", "Discontinua in x₀", "Poate fi discontinua in x₀", "Niciuna"],
    correctIndex: 0,
    explanation: "Derivabilitatea implica continuitate. Orice functie derivabila intr-un punct este si continua in acel punct."
  },
  {
    id: "cont_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cont", subject: "math", xpValue: 20,
    prompt: "Functia f(x) = { sin(x)/x, x≠0; 1, x=0 } este:",
    options: ["Continua in x=0", "Discontinua in x=0", "Derivabila dar nu continua in x=0", "Discontinua pe ℝ"],
    correctIndex: 0,
    explanation: "lim(x→0) sin(x)/x = 1 = f(0). Limita egala cu valoarea functiei ⟹ continua in x=0."
  },
  {
    id: "cont_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cont", subject: "math", xpValue: 20,
    prompt: "Daca f este continua pe compactul [a,b], atunci f:",
    options: ["Atinge maximul si minimul pe [a,b]", "Este derivabila pe (a,b)", "Este monotona pe [a,b]", "Nu are zerouri"],
    correctIndex: 0,
    explanation: "Teorema Weierstrass: o functie continua pe un compact atinge valorile maxima si minima."
  },
  {
    id: "cont_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    prompt: "f(x) = x³ - x + 1. f este continua in x = 2 si f(2) = ___",
    answer: "7", tolerance: 0,
    explanation: "f(2) = 8 - 2 + 1 = 7."
  },
  {
    id: "cont_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    prompt: "Valoarea lui a pentru care f(x) = {ax + 1, x < 1; 3, x ≥ 1} este continua in x=1 este a = ___",
    answer: "2", tolerance: 0,
    explanation: "Continuitate in x=1: lim(x→1⁻) f = a·1+1 = a+1 trebuie sa fie egal cu f(1) = 3. Deci a+1 = 3 ⟹ a = 2."
  },
  {
    id: "cont_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    prompt: "Numarul de puncte de discontinuitate ale functiei f(x) = 1/(x² - 1) pe ℝ este ___",
    answer: "2", tolerance: 0,
    explanation: "x² - 1 = 0 ⟹ x = ±1. Doua puncte de discontinuitate."
  },
  {
    id: "cont_fb_004", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cont", subject: "math", xpValue: 20,
    prompt: "Prin teorema Bolzano, ecuatia x³ - 3x + 1 = 0 are cel putin o radacina in intervalul (0, ___)",
    answer: "1",
    explanation: "f(0) = 1 > 0, f(1) = 1-3+1 = -1 < 0. Semne diferite ⟹ radacina in (0,1)."
  },
  {
    id: "cont_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    statement: "Suma a doua functii continue este continua.",
    correct: true,
    explanation: "Daca f si g sunt continue in x₀, atunci f+g este continua in x₀. Adevarat."
  },
  {
    id: "cont_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    statement: "Orice functie continua este si derivabila.",
    correct: false,
    explanation: "Continuitatea nu implica derivabilitate. Ex: |x| este continua in x=0 dar nu derivabila acolo."
  },
  {
    id: "cont_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    statement: "Functia f(x) = |x| este continua pe ℝ.",
    correct: true,
    explanation: "lim(x→0⁺)|x| = lim(x→0⁻)|x| = |0| = 0. Continua pe tot ℝ."
  },
  {
    id: "cont_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    statement: "Daca f este discontinua in x₀, atunci nu poate fi derivabila in x₀.",
    correct: true,
    explanation: "Derivabilitatea implica continuitate. Daca nu e continua, nu poate fi derivabila."
  },
  {
    id: "cont_mc_007", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 10,
    prompt: "Functia f(x) = sin(x) este continua pe:",
    options: ["ℝ", "Numai pe [0, 2π]", "Numai pe (-π, π)", "Niciunde"],
    correctIndex: 0,
    explanation: "sin(x) este o functie elementara continua pe intregul ℝ."
  },
  {
    id: "cont_mc_008", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cont", subject: "math", xpValue: 15,
    prompt: "Conditia necesara si suficienta ca f sa fie continua in x₀ este:",
    options: ["lim(x→x₀) f(x) = f(x₀)", "f'(x₀) exista", "f este marginita", "f(x₀) = 0"],
    correctIndex: 0,
    explanation: "Prin definitie: f este continua in x₀ daca si numai daca limita este egala cu valoarea functiei."
  }
];
