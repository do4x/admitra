// Convert common Unicode math symbols / superscripts / subscripts to LaTeX.
// Used as a best-effort fallback when the source string contains math-looking
// characters but no $...$ delimiters.

const SUPERSCRIPT_MAP = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4",
  "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
  "⁺": "+", "⁻": "-", "⁼": "=", "⁽": "(", "⁾": ")",
  "ⁿ": "n"
};

const SUBSCRIPT_MAP = {
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4",
  "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
  "₊": "+", "₋": "-", "₌": "=", "₍": "(", "₎": ")"
};

const SYMBOL_MAP = {
  "∞": "\\infty",
  "→": "\\to",
  "←": "\\leftarrow",
  "↔": "\\leftrightarrow",
  "⇒": "\\Rightarrow",
  "⇐": "\\Leftarrow",
  "⇔": "\\Leftrightarrow",
  "≤": "\\leq",
  "≥": "\\geq",
  "≠": "\\neq",
  "≈": "\\approx",
  "≡": "\\equiv",
  "±": "\\pm",
  "∓": "\\mp",
  "×": "\\times",
  "÷": "\\div",
  "·": "\\cdot",
  "√": "\\sqrt",
  "∑": "\\sum",
  "∏": "\\prod",
  "∫": "\\int",
  "∂": "\\partial",
  "∇": "\\nabla",
  "∈": "\\in",
  "∉": "\\notin",
  "⊂": "\\subset",
  "⊆": "\\subseteq",
  "⊃": "\\supset",
  "⊇": "\\supseteq",
  "∪": "\\cup",
  "∩": "\\cap",
  "∅": "\\emptyset",
  "ℕ": "\\mathbb{N}",
  "ℤ": "\\mathbb{Z}",
  "ℚ": "\\mathbb{Q}",
  "ℝ": "\\mathbb{R}",
  "ℂ": "\\mathbb{C}",
  "α": "\\alpha",
  "β": "\\beta",
  "γ": "\\gamma",
  "δ": "\\delta",
  "ε": "\\varepsilon",
  "θ": "\\theta",
  "λ": "\\lambda",
  "μ": "\\mu",
  "π": "\\pi",
  "ρ": "\\rho",
  "σ": "\\sigma",
  "τ": "\\tau",
  "φ": "\\varphi",
  "ω": "\\omega",
  "Δ": "\\Delta",
  "Σ": "\\Sigma",
  "Π": "\\Pi",
  "Ω": "\\Omega"
};

const SUPERSCRIPT_REGEX = /[\u2070\u00B9\u00B2\u00B3\u2074-\u2079\u207A-\u207E\u207F]+/g;
const SUBSCRIPT_REGEX = /[\u2080-\u208E]+/g;

const MATH_DETECT_REGEX = new RegExp(
  "[" +
    Object.keys(SYMBOL_MAP).join("") +
    Object.keys(SUPERSCRIPT_MAP).join("") +
    Object.keys(SUBSCRIPT_MAP).join("") +
    "]"
);

export function hasUnicodeMath(text) {
  if (!text || typeof text !== "string") return false;
  return MATH_DETECT_REGEX.test(text);
}

export function unicodeToLatex(text) {
  if (!text || typeof text !== "string") return text;

  let out = text;

  // Group consecutive superscript chars and wrap them as ^{...}
  out = out.replace(SUPERSCRIPT_REGEX, (match) => {
    const inner = [...match].map((c) => SUPERSCRIPT_MAP[c] ?? c).join("");
    return `^{${inner}}`;
  });

  // Group consecutive subscript chars and wrap them as _{...}
  out = out.replace(SUBSCRIPT_REGEX, (match) => {
    const inner = [...match].map((c) => SUBSCRIPT_MAP[c] ?? c).join("");
    return `_{${inner}}`;
  });

  // Replace remaining symbols.
  for (const [unicodeChar, latex] of Object.entries(SYMBOL_MAP)) {
    if (out.includes(unicodeChar)) {
      // Add spaces around macros so they don't fuse with adjacent letters.
      out = out.split(unicodeChar).join(`${latex} `);
    }
  }

  return out;
}

// Wrap whitespace-separated tokens that contain Unicode math characters
// in $...$ delimiters, leaving prose untouched. Trailing punctuation is
// kept outside the math region so it renders in the normal text font.
export function autoWrapMath(text) {
  if (!text || typeof text !== "string") return text;
  return text
    .split(/(\s+)/)
    .map((token) => {
      if (!token || /^\s+$/.test(token)) return token;
      if (!hasUnicodeMath(token)) return token;
      const punctMatch = token.match(/[?.,;:!]+$/);
      const tail = punctMatch ? punctMatch[0] : "";
      const core = tail ? token.slice(0, -tail.length) : token;
      if (!core) return token;
      return `$${unicodeToLatex(core)}$${tail}`;
    })
    .join("");
}
