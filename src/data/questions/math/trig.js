// Trigonometrie — 18 questions
export const trigQuestions = [
  {
    id: "trig_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    prompt: "sin(30°) este egal cu:",
    options: ["1/2", "√2/2", "√3/2", "1"],
    correctIndex: 0,
    explanation: "sin(30°) = 1/2. Valoare standard de memorat."
  },
  {
    id: "trig_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    prompt: "cos(60°) este egal cu:",
    options: ["1/2", "√3/2", "√2/2", "0"],
    correctIndex: 0,
    explanation: "cos(60°) = 1/2. Valoare standard."
  },
  {
    id: "trig_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "Solutia generala a ecuatiei sin(x) = 0 este:",
    options: ["x = kπ, k ∈ ℤ", "x = π/2 + kπ, k ∈ ℤ", "x = 2kπ, k ∈ ℤ", "x = kπ/2, k ∈ ℤ"],
    correctIndex: 0,
    explanation: "sin(x) = 0 ⟺ x = kπ, k ∈ ℤ."
  },
  {
    id: "trig_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "Valoarea sin²(x) + cos²(x) este intotdeauna:",
    options: ["1", "0", "sin(2x)/2", "Depinde de x"],
    correctIndex: 0,
    explanation: "Identitatea fundamentala: sin²(x) + cos²(x) = 1 pentru orice x."
  },
  {
    id: "trig_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "Expresia sin(2x) este egala cu:",
    options: ["2sin(x)cos(x)", "sin²(x) - cos²(x)", "cos²(x) - sin²(x)", "2cos(x)"],
    correctIndex: 0,
    explanation: "Formula dublului unghi: sin(2x) = 2sin(x)cos(x)."
  },
  {
    id: "trig_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "trig", subject: "math", xpValue: 20,
    prompt: "Numarul de solutii ale ecuatiei cos(x) = 1/2 pe intervalul [0, 2π] este:",
    options: ["2", "1", "3", "0"],
    correctIndex: 0,
    explanation: "cos(x) = 1/2 ⟹ x = π/3 sau x = 5π/3. Doua solutii pe [0, 2π]."
  },
  {
    id: "trig_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "trig", subject: "math", xpValue: 20,
    prompt: "tg(45°) + ctg(45°) este egal cu:",
    options: ["2", "1", "0", "√2"],
    correctIndex: 0,
    explanation: "tg(45°) = 1 si ctg(45°) = 1. Suma = 2."
  },
  {
    id: "trig_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    prompt: "cos(0°) = ___",
    answer: "1", tolerance: 0,
    explanation: "Valoare standard: cos(0°) = 1."
  },
  {
    id: "trig_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    prompt: "sin(90°) = ___",
    answer: "1", tolerance: 0,
    explanation: "Valoare standard: sin(90°) = 1."
  },
  {
    id: "trig_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "cos(2x) exprimat prin cos(x) este cos(2x) = 2cos²(x) - ___",
    answer: "1", tolerance: 0,
    explanation: "Formula dublului unghi: cos(2x) = 2cos²(x) - 1."
  },
  {
    id: "trig_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "Daca sin(x) = 3/5 si x ∈ (0, π/2), atunci cos(x) = ___",
    answer: "4/5",
    explanation: "cos²(x) = 1 - sin²(x) = 1 - 9/25 = 16/25. In primul cadran cos > 0, deci cos(x) = 4/5."
  },
  {
    id: "trig_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "trig", subject: "math", xpValue: 20,
    prompt: "Daca tg(x) = 2, atunci sin(2x) = ___",
    answer: "4/5",
    explanation: "sin(2x) = 2tg(x)/(1+tg²(x)) = 4/5."
  },
  {
    id: "trig_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    statement: "Functia sinus este periodica cu perioada 2π.",
    correct: true,
    explanation: "sin(x + 2π) = sin(x) pentru orice x. Perioada minima este 2π."
  },
  {
    id: "trig_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    statement: "cos(π - x) = cos(x) pentru orice x.",
    correct: false,
    explanation: "cos(π - x) = -cos(x). Formula corecta implica schimbare de semn."
  },
  {
    id: "trig_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    statement: "sin(x + π) = sin(x) pentru orice x.",
    correct: false,
    explanation: "sin(x + π) = -sin(x). Nu este egala cu sin(x)."
  },
  {
    id: "trig_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "trig", subject: "math", xpValue: 20,
    statement: "Ecuatia sin(x) = 2 nu are solutii reale.",
    correct: true,
    explanation: "-1 ≤ sin(x) ≤ 1 pentru orice x real, deci sin(x) = 2 nu are solutii."
  },
  {
    id: "trig_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 10,
    prompt: "tg(0°) este egal cu:",
    options: ["0", "1", "Nedefinit", "∞"],
    correctIndex: 0,
    explanation: "tg(0°) = sin(0°)/cos(0°) = 0/1 = 0."
  },
  {
    id: "trig_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "trig", subject: "math", xpValue: 15,
    prompt: "sin(π/6) este egal cu:",
    options: ["1/2", "√3/2", "√2/2", "1"],
    correctIndex: 0,
    explanation: "π/6 = 30°, sin(30°) = 1/2."
  }
];
