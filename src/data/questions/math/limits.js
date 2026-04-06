// Limite — 20 questions
export const limitsQuestions = [
  {
    id: "limits_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    prompt: "lim(x→2) (x² - 4)/(x - 2) este:",
    options: ["4", "0", "2", "Nedefinita"],
    correctIndex: 0,
    explanation: "x² - 4 = (x-2)(x+2). Dupa simplificare: lim(x→2)(x+2) = 4."
  },
  {
    id: "limits_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    prompt: "lim(x→∞) 1/x este:",
    options: ["0", "1", "∞", "-∞"],
    correctIndex: 0,
    explanation: "Pe masura ce x → ∞, 1/x → 0."
  },
  {
    id: "limits_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "lim(x→0) sin(x)/x este:",
    options: ["1", "0", "∞", "Nedefinita"],
    correctIndex: 0,
    explanation: "Limita remarcabila fundamentala: lim(x→0) sin(x)/x = 1."
  },
  {
    id: "limits_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "lim(x→∞) (3x² + 2x)/(x² - 1) este:",
    options: ["3", "2", "0", "∞"],
    correctIndex: 0,
    explanation: "Impartind numaratorul si numitorul cu x²: (3 + 2/x)/(1 - 1/x²) → 3/1 = 3."
  },
  {
    id: "limits_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "lim(x→0) (eˣ - 1)/x este:",
    options: ["1", "0", "e", "∞"],
    correctIndex: 0,
    explanation: "Limita remarcabila: lim(x→0) (eˣ-1)/x = 1."
  },
  {
    id: "limits_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "limits", subject: "math", xpValue: 20,
    prompt: "lim(x→∞) (1 + 1/x)ˣ este:",
    options: ["e", "1", "∞", "0"],
    correctIndex: 0,
    explanation: "Limita remarcabila: lim(x→∞)(1+1/x)ˣ = e ≈ 2.718..."
  },
  {
    id: "limits_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "limits", subject: "math", xpValue: 20,
    prompt: "lim(x→0) (1 - cos(x))/x² este:",
    options: ["1/2", "1", "0", "∞"],
    correctIndex: 0,
    explanation: "Folosind cos(x) ≈ 1 - x²/2 pentru x mic: (1-cos(x))/x² ≈ (x²/2)/x² = 1/2."
  },
  {
    id: "limits_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    prompt: "lim(x→3) (2x + 1) = ___",
    answer: "7", tolerance: 0,
    explanation: "Functia este continua, deci lim(x→3)(2x+1) = 2·3+1 = 7."
  },
  {
    id: "limits_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    prompt: "lim(x→∞) (x + 5)/(2x) = ___",
    answer: "1/2",
    explanation: "Impartind cu x: (1 + 5/x)/2 → 1/2 cand x → ∞."
  },
  {
    id: "limits_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "lim(x→1) (x² - 1)/(x - 1) = ___",
    answer: "2", tolerance: 0,
    explanation: "(x²-1)/(x-1) = (x-1)(x+1)/(x-1) = x+1. Limita cand x→1 este 2."
  },
  {
    id: "limits_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "lim(x→∞) x/(x² + 1) = ___",
    answer: "0", tolerance: 0,
    explanation: "Impartind cu x²: (1/x)/(1 + 1/x²) → 0/1 = 0."
  },
  {
    id: "limits_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "limits", subject: "math", xpValue: 20,
    prompt: "lim(x→0) (tg(x) - sin(x))/x³ = ___",
    answer: "1/2",
    explanation: "tg(x) - sin(x) = sin(x)(1/cos(x) - 1) = sin(x)(1-cos(x))/cos(x). Folosind sin(x)~x, 1-cos(x)~x²/2, limita este x·(x²/2)/x³ = 1/2."
  },
  {
    id: "limits_fb_006", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "limits", subject: "math", xpValue: 20,
    prompt: "lim(x→∞) (√(x² + x) - x) = ___",
    answer: "1/2",
    explanation: "Amplificam cu conjugata: x/( √(x²+x)+x ) = x/(x(√(1+1/x)+1)) → 1/(1+1) = 1/2."
  },
  {
    id: "limits_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    statement: "lim(x→0) x² = 0.",
    correct: true,
    explanation: "x² este continua in 0, deci limita este 0² = 0. Adevarat."
  },
  {
    id: "limits_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    statement: "lim(x→∞) eˣ = 0.",
    correct: false,
    explanation: "eˣ creste la infinit cand x → +∞. Limita este +∞, nu 0."
  },
  {
    id: "limits_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    statement: "Daca lim(x→a) f(x) = L, atunci f(a) = L in mod necesar.",
    correct: false,
    explanation: "Limita descrie comportamentul aproape de a, nu la a. Functia poate fi nedefinita sau diferita in a."
  },
  {
    id: "limits_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    statement: "lim(x→0) sin(x)/x = 1, unde x este in radiani.",
    correct: true,
    explanation: "Limita remarcabila fundamentala. Este valabila cand x este in radiani."
  },
  {
    id: "limits_mc_008", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 10,
    prompt: "lim(x→-∞) eˣ este:",
    options: ["0", "∞", "-∞", "1"],
    correctIndex: 0,
    explanation: "eˣ → 0 cand x → -∞ (functia exponentiala se apropie de 0 pe stanga)."
  },
  {
    id: "limits_mc_009", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "limits", subject: "math", xpValue: 15,
    prompt: "Care este forma nedeterminata a limitei lim(x→∞) (x+1)/x?",
    options: ["∞/∞", "0/0", "0·∞", "∞-∞"],
    correctIndex: 0,
    explanation: "Atat numaratorul cat si numitorul tind spre ∞, deci avem forma ∞/∞."
  },
  {
    id: "limits_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "limits", subject: "math", xpValue: 20,
    prompt: "lim(x→0⁺) x · ln(x) este:",
    options: ["0", "-∞", "1", "Nedefinita"],
    correctIndex: 0,
    explanation: "Forma 0·(-∞). Rescriind ln(x)/(1/x), prin L'Hopital: (1/x)/(-1/x²) = -x → 0."
  }
];
