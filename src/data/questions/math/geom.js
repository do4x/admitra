// Geometrie analitica, vectori si numere complexe — 18 questions
export const geomQuestions = [
  {
    id: "geom_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    prompt: "Distanta dintre punctele A(1, 2) si B(4, 6) este:",
    options: ["5", "7", "3", "√7"],
    correctIndex: 0,
    explanation: "d = √((4-1)² + (6-2)²) = √(9+16) = √25 = 5."
  },
  {
    id: "geom_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    prompt: "Modulul numarului complex z = 3 + 4i este:",
    options: ["5", "7", "4", "3"],
    correctIndex: 0,
    explanation: "|z| = √(3² + 4²) = √(9+16) = √25 = 5."
  },
  {
    id: "geom_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Ecuatia dreptei care trece prin A(0,3) cu panta m = 2 este:",
    options: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "y = x + 3"],
    correctIndex: 0,
    explanation: "Forma y = mx + b: b = 3 (ordonata la origine), m = 2. Deci y = 2x + 3."
  },
  {
    id: "geom_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Produsul scalar al vectorilor a⃗ = (1, 2) si b⃗ = (3, -1) este:",
    options: ["1", "3", "5", "-1"],
    correctIndex: 0,
    explanation: "a⃗ · b⃗ = 1·3 + 2·(-1) = 3 - 2 = 1."
  },
  {
    id: "geom_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Conjugatul numarului complex z = 2 - 5i este:",
    options: ["2 + 5i", "-2 + 5i", "2 - 5i", "-2 - 5i"],
    correctIndex: 0,
    explanation: "Conjugatul lui a + bi este a - bi. Conjugatul lui 2 - 5i este 2 + 5i."
  },
  {
    id: "geom_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "geom", subject: "math", xpValue: 20,
    prompt: "Aria triunghiului cu varfuri A(0,0), B(4,0), C(0,3) este:",
    options: ["6", "12", "7", "5"],
    correctIndex: 0,
    explanation: "Aria = (1/2) · baza · inaltime = (1/2) · 4 · 3 = 6."
  },
  {
    id: "geom_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "geom", subject: "math", xpValue: 20,
    prompt: "i⁴ (unitatea imaginara la puterea 4) este egal cu:",
    options: ["1", "-1", "i", "-i"],
    correctIndex: 0,
    explanation: "i² = -1, i⁴ = (i²)² = (-1)² = 1."
  },
  {
    id: "geom_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    prompt: "Mijlocul segmentului AB cu A(2, 4) si B(6, 8) este M(___, ___). Coordonata x a lui M este ___",
    answer: "4", tolerance: 0,
    explanation: "x_M = (2+6)/2 = 4."
  },
  {
    id: "geom_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    prompt: "Modulul vectorului v⃗ = (0, 5) este ___",
    answer: "5", tolerance: 0,
    explanation: "|v⃗| = √(0² + 5²) = 5."
  },
  {
    id: "geom_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Panta dreptei ce trece prin A(1, 3) si B(3, 7) este ___",
    answer: "2", tolerance: 0,
    explanation: "m = (y₂-y₁)/(x₂-x₁) = (7-3)/(3-1) = 4/2 = 2."
  },
  {
    id: "geom_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Suma numerelor complexe (3 + 2i) + (1 - 4i) are partea imaginara ___",
    answer: "-2", tolerance: 0,
    explanation: "(3+1) + (2-4)i = 4 - 2i. Partea imaginara este -2."
  },
  {
    id: "geom_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "geom", subject: "math", xpValue: 20,
    prompt: "Numarul de puncte comune ale cercului x² + y² = 25 cu dreapta y = 0 este ___",
    answer: "2", tolerance: 0,
    explanation: "y = 0 ⟹ x² = 25 ⟹ x = ±5. Doua puncte: (5,0) si (-5,0)."
  },
  {
    id: "geom_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    statement: "Doua drepte paralele au aceeasi panta.",
    correct: true,
    explanation: "Dreptele paralele au pantele egale: m₁ = m₂."
  },
  {
    id: "geom_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    statement: "Doua drepte perpendiculare au pante cu produsul egal cu 1.",
    correct: false,
    explanation: "Conditia de perpendicularitate este m₁ · m₂ = -1, nu 1."
  },
  {
    id: "geom_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    statement: "i² = -1, unde i este unitatea imaginara.",
    correct: true,
    explanation: "Prin definitie, unitatea imaginara satisface i² = -1."
  },
  {
    id: "geom_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "geom", subject: "math", xpValue: 20,
    statement: "Vectorii a⃗ = (1, 2) si b⃗ = (-2, 1) sunt perpendiculari.",
    correct: true,
    explanation: "a⃗ · b⃗ = 1·(-2) + 2·1 = -2 + 2 = 0. Produsul scalar 0 ⟹ perpendiculari."
  },
  {
    id: "geom_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 10,
    prompt: "Centrul cercului cu ecuatia (x-3)² + (y+1)² = 16 este:",
    options: ["(3, -1)", "(-3, 1)", "(3, 1)", "(-3, -1)"],
    correctIndex: 0,
    explanation: "Forma generala (x-a)² + (y-b)² = r² da centrul (a, b) = (3, -1)."
  },
  {
    id: "geom_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "geom", subject: "math", xpValue: 15,
    prompt: "Produsul (2+i)(2-i) este:",
    options: ["5", "4", "3+2i", "4-i"],
    correctIndex: 0,
    explanation: "(2+i)(2-i) = 4 - i² = 4 - (-1) = 5."
  }
];
