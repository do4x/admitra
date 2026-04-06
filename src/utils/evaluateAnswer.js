export function evaluateAnswer(question, rawAnswer) {
  switch (question.type) {
    case "multiple_choice":
      return Number(rawAnswer) === question.correctIndex;
    case "true_false":
      return rawAnswer === question.correct;
    case "fill_blank": {
      const norm = (s) => String(s).trim().toLowerCase().replace(/\s+/g, " ");
      if (question.tolerance != null) {
        const diff = Math.abs(Number(rawAnswer) - Number(question.answer));
        return diff <= question.tolerance;
      }
      return norm(rawAnswer) === norm(question.answer);
    }
    case "code_trace": {
      const norm = (s) => String(s).trim().replace(/\r\n/g, "\n");
      return norm(rawAnswer) === norm(question.answer);
    }
    default:
      return false;
  }
}