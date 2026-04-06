// Derivate si studiu de functie — 22 questions (highest weight 1.2)
export const derivQuestions = [
  {
    id: "deriv_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "Derivata functiei f(x) = x³ este:",
    options: ["3x²", "x²/3", "3x", "x³/3"],
    correctIndex: 0,
    explanation: "(xⁿ)' = n·xⁿ⁻¹. Deci (x³)' = 3x²."
  },
  {
    id: "deriv_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "Derivata functiei f(x) = sin(x) este:",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correctIndex: 0,
    explanation: "(sin x)' = cos x."
  },
  {
    id: "deriv_mc_003", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "Derivata functiei f(x) = eˣ este:",
    options: ["eˣ", "x·eˣ⁻¹", "eˣ/x", "1/eˣ"],
    correctIndex: 0,
    explanation: "(eˣ)' = eˣ. Exponentiala este propria sa derivata."
  },
  {
    id: "deriv_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Derivata functiei f(x) = x²·sin(x) este:",
    options: ["2x·sin(x) + x²·cos(x)", "2x·cos(x)", "x²·cos(x)", "2x·sin(x)"],
    correctIndex: 0,
    explanation: "Regula produsului: (u·v)' = u'·v + u·v'. Deci (x²·sin x)' = 2x·sin x + x²·cos x."
  },
  {
    id: "deriv_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Derivata functiei f(x) = ln(x) este:",
    options: ["1/x", "x", "eˣ", "ln(x)/x"],
    correctIndex: 0,
    explanation: "(ln x)' = 1/x, pentru x > 0."
  },
  {
    id: "deriv_mc_006", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Panta tangentei la graficul lui f(x) = x² in punctul x = 3 este:",
    options: ["6", "9", "3", "1"],
    correctIndex: 0,
    explanation: "f'(x) = 2x. In x = 3: f'(3) = 6. Panta tangentei este 6."
  },
  {
    id: "deriv_mc_007", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Daca f'(x₀) = 0 si f''(x₀) > 0, atunci x₀ este:",
    options: ["Punct de minim local", "Punct de maxim local", "Punct de inflexiune", "Nimic special"],
    correctIndex: 0,
    explanation: "Criteriul derivatei a doua: f'(x₀)=0 si f''(x₀)>0 ⟹ minim local."
  },
  {
    id: "deriv_mc_008", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "deriv", subject: "math", xpValue: 20,
    prompt: "Derivata functiei f(x) = ln(sin(x)) este:",
    options: ["cos(x)/sin(x)", "1/sin(x)", "cos(x)·ln(sin(x))", "ln(cos(x))"],
    correctIndex: 0,
    explanation: "Regula lantului: (ln(u))' = u'/u. Deci (ln(sin x))' = cos(x)/sin(x) = ctg(x)."
  },
  {
    id: "deriv_mc_009", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "deriv", subject: "math", xpValue: 20,
    prompt: "Functia f(x) = x³ - 3x este crescatoare pe intervalul:",
    options: ["(-∞, -1) ∪ (1, +∞)", "(-1, 1)", "(-∞, 0)", "(0, +∞)"],
    correctIndex: 0,
    explanation: "f'(x) = 3x²-3 = 3(x-1)(x+1) > 0 ⟺ x < -1 sau x > 1."
  },
  {
    id: "deriv_mc_010", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "deriv", subject: "math", xpValue: 20,
    prompt: "Asimptota orizontala a functiei f(x) = (2x+1)/(x-3) este:",
    options: ["y = 2", "y = 1", "y = -1/3", "Nu exista"],
    correctIndex: 0,
    explanation: "lim(x→±∞) (2x+1)/(x-3) = 2. Asimptota orizontala: y = 2."
  },
  {
    id: "deriv_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "Derivata functiei f(x) = 5x² - 3x + 7 este f'(x) = ___x - 3",
    answer: "10", tolerance: 0,
    explanation: "f'(x) = 10x - 3. Coeficientul lui x este 10."
  },
  {
    id: "deriv_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "f(x) = cos(x). f'(π) = ___",
    answer: "0", tolerance: 0,
    explanation: "(cos x)' = -sin x. f'(π) = -sin(π) = 0. Deci f'(π) = 0."
  },
  {
    id: "deriv_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Derivata lui f(x) = √x este f'(x) = 1/(2√x). Valoarea f'(4) = ___",
    answer: "1/4",
    explanation: "f'(4) = 1/(2√4) = 1/(2·2) = 1/4."
  },
  {
    id: "deriv_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Daca f(x) = x⁴, atunci f''(x) = ___x²",
    answer: "12", tolerance: 0,
    explanation: "f'(x) = 4x³. f''(x) = 12x²."
  },
  {
    id: "deriv_fb_005", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "deriv", subject: "math", xpValue: 20,
    prompt: "Punctul de inflexiune al functiei f(x) = x³ - 6x² + 9x + 1 este la x = ___",
    answer: "2", tolerance: 0,
    explanation: "f'(x) = 3x²-12x+9, f''(x) = 6x-12. f''=0 ⟹ x=2. Verificam schimbare semn: inflexiune la x=2."
  },
  {
    id: "deriv_fb_006", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "deriv", subject: "math", xpValue: 20,
    prompt: "Maximul local al functiei f(x) = -x² + 4x - 1 este la x = ___",
    answer: "2", tolerance: 0,
    explanation: "f'(x) = -2x+4 = 0 ⟹ x=2. f''(2) = -2 < 0 ⟹ maxim. x_max = 2."
  },
  {
    id: "deriv_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    statement: "Derivata unei constante este 0.",
    correct: true,
    explanation: "Daca f(x) = c (constanta), atunci f'(x) = 0."
  },
  {
    id: "deriv_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    statement: "Daca f'(x₀) = 0, atunci x₀ este neaparat un punct de extrem local.",
    correct: false,
    explanation: "Un exemplu: f(x) = x³ are f'(0) = 0 dar x=0 este punct de inflexiune, nu extrem."
  },
  {
    id: "deriv_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    statement: "Daca f este crescatoare pe (a,b), atunci f'(x) ≥ 0 pe (a,b).",
    correct: true,
    explanation: "Functie crescatoare implica derivata nenegativa. Reciproca necesita f' > 0."
  },
  {
    id: "deriv_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    statement: "(f/g)' = (f'·g - f·g')/g².",
    correct: true,
    explanation: "Aceasta este regula catului. Corecta."
  },
  {
    id: "deriv_mc_011", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 10,
    prompt: "Derivata functiei f(x) = cos(x) este:",
    options: ["-sin(x)", "sin(x)", "-cos(x)", "tg(x)"],
    correctIndex: 0,
    explanation: "(cos x)' = -sin x."
  },
  {
    id: "deriv_mc_012", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "deriv", subject: "math", xpValue: 15,
    prompt: "Ecuatia tangentei la graficul lui f(x) = x² in punctul (1, 1) este:",
    options: ["y = 2x - 1", "y = x + 1", "y = 2x + 1", "y = x - 1"],
    correctIndex: 0,
    explanation: "f'(1) = 2·1 = 2. Tangenta: y - 1 = 2(x-1) ⟹ y = 2x - 1."
  }
];
