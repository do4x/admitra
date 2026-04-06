import { useMemo } from "react";
import katex from "katex";
import { autoWrapMath, hasUnicodeMath } from "../../utils/mathAutoConvert.js";

function renderLatex(latex, displayMode = false) {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode,
      strict: "ignore",
      output: "html"
    });
  } catch {
    return latex;
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Splits "text $a^2$ text $$x$$" into runs of plain text and rendered KaTeX HTML.
function buildHtml(source) {
  if (!source) return "";

  // No dollar delimiters → auto-wrap any Unicode-math tokens, then re-process.
  if (!source.includes("$")) {
    if (hasUnicodeMath(source)) {
      return buildHtml(autoWrapMath(source));
    }
    return escapeHtml(source);
  }

  // Walk the string, splitting on $$...$$ and $...$ delimiters.
  let html = "";
  let i = 0;
  while (i < source.length) {
    if (source[i] === "$") {
      const isDisplay = source[i + 1] === "$";
      const delim = isDisplay ? "$$" : "$";
      const end = source.indexOf(delim, i + delim.length);
      if (end === -1) {
        // Unclosed delimiter — treat the rest as plain text.
        html += escapeHtml(source.slice(i));
        break;
      }
      const inner = source.slice(i + delim.length, end);
      html += renderLatex(inner, isDisplay);
      i = end + delim.length;
    } else {
      const next = source.indexOf("$", i);
      if (next === -1) {
        html += escapeHtml(source.slice(i));
        break;
      }
      html += escapeHtml(source.slice(i, next));
      i = next;
    }
  }
  return html;
}

export function MathText({ children, as: Tag = "span", className }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const html = useMemo(() => buildHtml(text), [text]);
  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
