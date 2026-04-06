// Algebra si calcule algebrice — 20 questions
export const algQuestions = [
  {
    id: "alg_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    prompt: "Care este factorizarea corecta a expresiei x² - 9?",
    options: ["(x - 3)(x + 3)", "(x - 3)²", "(x + 9)(x - 1)", "Nu se poate factoriza"],
    correctIndex: 0,
    explanation: "x² - 9 este o diferenta de patrate: a² - b² = (a-b)(a+b), deci x² - 9 = (x-3)(x+3)."
  },
  {
    id: "alg_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    prompt: "Cate solutii reale are ecuatia x² + 4 = 0?",
    options: ["0", "1", "2", "4"],
    correctIndex: 0,
    explanation: "x² = -4 nu are solutii reale, deoarece patratul oricarui numar real este ≥ 0."
  },
  {
    id: "alg_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Care este suma solutiilor ecuatiei 2x² - 6x + 4 = 0?",
    options: ["3", "2", "6", "1"],
    correctIndex: 0,
    explanation: "Prin formula lui Vieta: x₁ + x₂ = -b/a = 6/2 = 3."
  },
  {
    id: "alg_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Daca x₁ si x₂ sunt radacinile ecuatiei x² - 5x + 6 = 0, atunci x₁ · x₂ =",
    options: ["6", "5", "-6", "30"],
    correctIndex: 0,
    explanation: "Prin formula lui Vieta: x₁ · x₂ = c/a = 6/1 = 6."
  },
  {
    id: "alg_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Multimea solutiilor inecuatiei x² - x - 6 < 0 este:",
    options: ["(-2, 3)", "(-∞, -2) ∪ (3, +∞)", "[-2, 3]", "(-3, 2)"],
    correctIndex: 0,
    explanation: "x² - x - 6 = (x-3)(x+2). Produsul e negativ intre radacini: x ∈ (-2, 3)."
  },
  {
    id: "alg_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "alg", subject: "math", xpValue: 20,
    prompt: "Numarul de solutii reale ale sistemului { x + y = 3, xy = 5 } este:",
    options: ["0", "1", "2", "Infinit"],
    correctIndex: 0,
    explanation: "Din sistem: x si y sunt radacinile lui t² - 3t + 5 = 0. Discriminantul Δ = 9 - 20 = -11 < 0, deci sistemul nu are solutii reale."
  },
  {
    id: "alg_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "alg", subject: "math", xpValue: 20,
    prompt: "Valoarea expresiei (1 + √2)⁴ - (1 - √2)⁴ este:",
    options: ["24√2", "16√2", "8√2", "12√2"],
    correctIndex: 0,
    explanation: "Fie a = 1+√2, b = 1-√2. a⁴ - b⁴ = (a²-b²)(a²+b²). a²=3+2√2, b²=3-2√2. a²-b²=4√2, a²+b²=6. Rezultat: 4√2·6 = 24√2."
  },
  {
    id: "alg_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    prompt: "Discriminantul ecuatiei 3x² - 6x + 3 = 0 este Δ = ___",
    answer: "0", tolerance: 0,
    explanation: "Δ = b² - 4ac = 36 - 4·3·3 = 36 - 36 = 0. Ecuatia are o radacina dubla."
  },
  {
    id: "alg_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    prompt: "Solutia ecuatiei 2x - 8 = 0 este x = ___",
    answer: "4", tolerance: 0,
    explanation: "2x = 8, deci x = 4."
  },
  {
    id: "alg_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Daca x₁ = 2 si x₂ = -3 sunt radacinile unui polinom de gradul 2 cu coeficientul lui x² egal cu 1, atunci termenul liber este ___",
    answer: "-6", tolerance: 0,
    explanation: "x₁·x₂ = 2·(-3) = -6. Polinomul este (x-2)(x+3) = x² + x - 6, deci termenul liber este -6."
  },
  {
    id: "alg_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Simplificati fractia (x² - 1)/(x - 1). Rezultatul (pentru x ≠ 1) este ___",
    answer: "x+1",
    explanation: "x² - 1 = (x-1)(x+1). Dupa simplificare ramane x+1."
  },
  {
    id: "alg_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "alg", subject: "math", xpValue: 20,
    prompt: "Numarul intreg pozitiv k pentru care ecuatia x² - kx + 9 = 0 are radacini reale egale este k = ___",
    answer: "6",
    explanation: "Radacini egale ⟹ Δ = 0 ⟹ k² - 36 = 0 ⟹ k = ±6. Intregul pozitiv este k = 6."
  },
  {
    id: "alg_fb_006", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "alg", subject: "math", xpValue: 20,
    prompt: "Valoarea expresiei log₂(8) + log₂(2) este ___",
    answer: "4", tolerance: 0,
    explanation: "log₂(8) = 3, log₂(2) = 1. Suma = 4."
  },
  {
    id: "alg_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    statement: "Ecuatia x² + 2x + 1 = 0 are exact doua radacini reale distincte.",
    correct: false,
    explanation: "x² + 2x + 1 = (x+1)². Are o singura radacina reala dubla: x = -1."
  },
  {
    id: "alg_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    statement: "Produsul radacinilor ecuatiei x² - 7x + 10 = 0 este 10.",
    correct: true,
    explanation: "Prin Vieta: x₁·x₂ = c/a = 10/1 = 10. Adevarat."
  },
  {
    id: "alg_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    statement: "Inecuatia x² - 4 > 0 are solutii in intervalul (-2, 2).",
    correct: false,
    explanation: "x² - 4 > 0 ⟺ (x-2)(x+2) > 0 ⟺ x ∈ (-∞, -2) ∪ (2, +∞). In (-2, 2) expresia e negativa."
  },
  {
    id: "alg_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    statement: "Daca x₁ si x₂ sunt radacinile ecuatiei ax² + bx + c = 0, atunci x₁ + x₂ = b/a.",
    correct: false,
    explanation: "Formula lui Vieta da x₁ + x₂ = -b/a (cu minus). Enuntul omite minusul — fals."
  },
  {
    id: "alg_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 10,
    prompt: "Care dintre urmatoarele expresii este un patrat perfect?",
    options: ["x² + 6x + 9", "x² + 6x + 8", "x² + 5x + 6", "x² - 5x + 4"],
    correctIndex: 0,
    explanation: "x² + 6x + 9 = (x+3)². Celelalte nu sunt patrate perfecte."
  },
  {
    id: "alg_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "alg", subject: "math", xpValue: 15,
    prompt: "Solutia sistemului { 2x + y = 7, x - y = 2 } este:",
    options: ["x=3, y=1", "x=1, y=5", "x=2, y=3", "x=5, y=-3"],
    correctIndex: 0,
    explanation: "Adunand cele doua ecuatii: 3x = 9 ⟹ x = 3. Din a doua: y = x - 2 = 1."
  },
  {
    id: "alg_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "alg", subject: "math", xpValue: 20,
    prompt: "Cati divisori naturali are numarul 2³ · 3² · 5?",
    options: ["24", "12", "30", "18"],
    correctIndex: 0,
    explanation: "Numarul de divizori = (3+1)(2+1)(1+1) = 4·3·2 = 24."
  }
];
