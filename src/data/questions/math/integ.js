// Integrale — 20 questions
export const integQuestions = [
  {
    id: "integ_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    prompt: "∫x dx este egal cu:",
    options: ["x²/2 + C", "x² + C", "2x + C", "1 + C"],
    correctIndex: 0,
    explanation: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Pentru n=1: ∫x dx = x²/2 + C."
  },
  {
    id: "integ_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    prompt: "∫eˣ dx este egal cu:",
    options: ["eˣ + C", "eˣ/x + C", "x·eˣ + C", "ln(eˣ) + C"],
    correctIndex: 0,
    explanation: "Primitiva lui eˣ este eˣ + C."
  },
  {
    id: "integ_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫₀¹ x² dx este egal cu:",
    options: ["1/3", "1/2", "1", "2/3"],
    correctIndex: 0,
    explanation: "[x³/3]₀¹ = 1/3 - 0 = 1/3."
  },
  {
    id: "integ_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫cos(x) dx este egal cu:",
    options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
    correctIndex: 0,
    explanation: "Primitiva lui cos(x) este sin(x) + C."
  },
  {
    id: "integ_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫1/x dx este egal cu (pentru x > 0):",
    options: ["ln|x| + C", "1/x² + C", "x² + C", "eˣ + C"],
    correctIndex: 0,
    explanation: "Primitiva lui 1/x este ln|x| + C."
  },
  {
    id: "integ_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "integ", subject: "math", xpValue: 20,
    prompt: "Aria suprafetei dintre f(x) = x² si axa Ox pe [0, 2] este:",
    options: ["8/3", "4", "2", "4/3"],
    correctIndex: 0,
    explanation: "Aria = ∫₀² x² dx = [x³/3]₀² = 8/3."
  },
  {
    id: "integ_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "integ", subject: "math", xpValue: 20,
    prompt: "∫x·eˣ dx (prin integrare prin parti) este:",
    options: ["eˣ(x-1) + C", "x²·eˣ/2 + C", "eˣ(x+1) + C", "x·eˣ + C"],
    correctIndex: 0,
    explanation: "Integrare prin parti: u=x, dv=eˣdx. ∫x·eˣ dx = x·eˣ - ∫eˣ dx = x·eˣ - eˣ + C = eˣ(x-1)+C."
  },
  {
    id: "integ_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    prompt: "∫3 dx = ___x + C",
    answer: "3", tolerance: 0,
    explanation: "Primitiva unei constante c este c·x + C."
  },
  {
    id: "integ_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    prompt: "∫₀² 2x dx = ___",
    answer: "4", tolerance: 0,
    explanation: "∫₀² 2x dx = [x²]₀² = 4 - 0 = 4."
  },
  {
    id: "integ_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫sin(x) dx = ___cos(x) + C",
    answer: "-1",
    explanation: "Primitiva lui sin(x) este -cos(x) + C."
  },
  {
    id: "integ_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫₁ᵉ 1/x dx = ___",
    answer: "1", tolerance: 0,
    explanation: "[ln|x|]₁ᵉ = ln(e) - ln(1) = 1 - 0 = 1."
  },
  {
    id: "integ_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "integ", subject: "math", xpValue: 20,
    prompt: "Aria dintre f(x) = x si g(x) = x² pe [0,1] este ___",
    answer: "1/6",
    explanation: "∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6."
  },
  {
    id: "integ_fb_006", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "integ", subject: "math", xpValue: 20,
    prompt: "∫₀^(π/2) sin(x) dx = ___",
    answer: "1", tolerance: 0,
    explanation: "[-cos(x)]₀^(π/2) = -cos(π/2) + cos(0) = 0 + 1 = 1."
  },
  {
    id: "integ_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    statement: "∫₀¹ f(x) dx = -∫₁⁰ f(x) dx.",
    correct: true,
    explanation: "Proprietatea interschimbarii capetelor: ∫ₐᵇ = -∫ᵦₐ."
  },
  {
    id: "integ_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    statement: "Primitiva unei functii este unica.",
    correct: false,
    explanation: "Primitiva nu e unica: orice F(x) + C (constanta arbitrara) este primitiva. Exista infinit de multe."
  },
  {
    id: "integ_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    statement: "Daca f(x) ≥ 0 pe [a,b], atunci ∫ₐᵇ f(x) dx ≥ 0.",
    correct: true,
    explanation: "Integrala unei functii nenegative pe un interval este nenegativa."
  },
  {
    id: "integ_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    statement: "∫ₐᵃ f(x) dx = 0 pentru orice functie f.",
    correct: true,
    explanation: "Cand capetele sunt egale, integrala definita este 0."
  },
  {
    id: "integ_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 10,
    prompt: "∫x³ dx este egal cu:",
    options: ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x³ + C"],
    correctIndex: 0,
    explanation: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Pentru n=3: x⁴/4 + C."
  },
  {
    id: "integ_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "integ", subject: "math", xpValue: 15,
    prompt: "∫₀^π sin(x) dx este egal cu:",
    options: ["2", "0", "1", "-2"],
    correctIndex: 0,
    explanation: "[-cos(x)]₀^π = -cos(π) + cos(0) = 1 + 1 = 2."
  },
  {
    id: "integ_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "integ", subject: "math", xpValue: 20,
    prompt: "∫(2x)/(x² + 1) dx este egal cu:",
    options: ["ln(x² + 1) + C", "2·arctan(x) + C", "2x·ln(x²+1) + C", "(x²+1)² + C"],
    correctIndex: 0,
    explanation: "Substitutie u = x²+1, du = 2x dx: ∫du/u = ln|u| + C = ln(x²+1) + C."
  }
];
