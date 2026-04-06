// Recursivitate — 18 questions
export const recursionQuestions = [
  {
    id: "rec_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    prompt: "Conditia care opreste recursivitatea se numeste:",
    options: ["Caz de baza", "Caz recursiv", "Return general", "Stop flag"],
    correctIndex: 0,
    explanation: "Cazul de baza este conditia care termina recursivitatea. Fara el, functia ar apela la infinit."
  },
  {
    id: "rec_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    prompt: "Factorialul lui n se poate defini recursiv ca: n! =",
    options: ["n × (n-1)!", "n + (n-1)!", "n × n!", "(n-1) × n"],
    correctIndex: 0,
    explanation: "n! = n × (n-1)! cu cazul de baza 0! = 1 (sau 1! = 1)."
  },
  {
    id: "rec_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    prompt: "Apelul recursiv fara caz de baza duce la:",
    options: ["Stack overflow", "Returnarea lui 0", "Eroare de compilare", "Rulare corecta"],
    correctIndex: 0,
    explanation: "Fara caz de baza, recursivitatea continua la infinit, epuizand stiva de apeluri (stack overflow)."
  },
  {
    id: "rec_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    prompt: "Algoritmul de cautare binara recursiva are complexitate:",
    options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
    correctIndex: 0,
    explanation: "La fiecare apel, cautarea binara injumatateste spatiul de cautare. Complexitate: O(log n)."
  },
  {
    id: "rec_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    prompt: "Sirul Fibonacci definit recursiv: fib(n) = fib(n-1) + fib(n-2). fib(6) =",
    options: ["8", "13", "5", "11"],
    correctIndex: 0,
    explanation: "fib: 1,1,2,3,5,8,... Indexat de la 1: fib(6) = 8."
  },
  {
    id: "rec_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    prompt: "Tail recursion (recursivitate de coada) este preferata deoarece:",
    options: ["Poate fi optimizata de compilator sa foloseasca stiva constant", "Este mai usor de scris", "Este mai rapida intotdeauna", "Poate accesa variabile globale"],
    correctIndex: 0,
    explanation: "Tail recursion poate fi transformata de compilator in iteratie, evitand cresterea stivei."
  },
  {
    id: "rec_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int fact(int n) {
    if(n <= 1) return 1;
    return n * fact(n-1);
}
int main() {
    cout << fact(5);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "120",
    explanation: "5! = 5×4×3×2×1 = 120."
  },
  {
    id: "rec_ct_002", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
void countdown(int n) {
    if(n == 0) { cout << "Go!"; return; }
    cout << n << " ";
    countdown(n-1);
}
int main() {
    countdown(3);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "3 2 1 Go!",
    explanation: "Se afiseaza 3, 2, 1, apoi 'Go!' cand n=0."
  },
  {
    id: "rec_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int f(int n) {
    if(n == 0) return 0;
    return f(n-1) + 2*n - 1;
}
int main() {
    cout << f(4);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "16",
    explanation: "f(n) = 1+3+5+7+...+(2n-1) = n². f(4) = 4² = 16."
  },
  {
    id: "rec_ct_004", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int fib(int n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
int main() {
    cout << fib(7);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "13",
    explanation: "Sirul Fibonacci (indexat de la 0): 0,1,1,2,3,5,8,13. fib(7) = 13."
  },
  {
    id: "rec_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int g(int n, int k) {
    if(k == 0 || k == n) return 1;
    return g(n-1, k-1) + g(n-1, k);
}
int main() {
    cout << g(5, 2);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10",
    explanation: "g(n,k) calculeaza C(n,k) (combinari). C(5,2) = 10."
  },
  {
    id: "rec_ct_006", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
void hanoi(int n, char from, char to, char aux) {
    if(n == 0) return;
    hanoi(n-1, from, aux, to);
    cout << from << "->" << to << " ";
    hanoi(n-1, aux, to, from);
}
int main() {
    hanoi(2, 'A', 'C', 'B');
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "A->B A->C B->C",
    explanation: "Hanoi cu 2 discuri: A→B, A→C, B→C. Trei mutari."
  },
  {
    id: "rec_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    prompt: "Numarul minim de mutari pentru Turnurile Hanoi cu n discuri este ___",
    answer: "2^n - 1",
    explanation: "Numarul minim de mutari este 2ⁿ - 1."
  },
  {
    id: "rec_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    prompt: "Numarul de apeluri recursive ale functiei fib(n) (naive) creste ___",
    answer: "exponential",
    explanation: "Fibonacci naiv are complexitate exponentiala: O(2ⁿ)."
  },
  {
    id: "rec_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    prompt: "CMMDC(12, 8) calculat recursiv prin algoritmul lui Euclid (cmmdc(a,b)=cmmdc(b,a%b)) este ___",
    answer: "4", tolerance: 0,
    explanation: "cmmdc(12,8)=cmmdc(8,4)=cmmdc(4,0)=4."
  },
  {
    id: "rec_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 10,
    statement: "Orice algoritm recursiv poate fi rescris iterativ.",
    correct: true,
    explanation: "Orice functie recursiva poate fi convertita iterativ (folosind explicit o stiva daca e nevoie)."
  },
  {
    id: "rec_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 15,
    statement: "Algoritmul recursiv pentru factorial are complexitate O(n) spatial.",
    correct: true,
    explanation: "Fiecare apel adauga un frame pe stiva. Adancimea maxima a stivei este n, deci complexitate spatiala O(n)."
  },
  {
    id: "rec_tf_003", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "recursion", subject: "informatics", xpValue: 20,
    statement: "Fibonacci calculat recursiv naiv are complexitate O(n) timp.",
    correct: false,
    explanation: "Fibonacci naiv recalculeaza subprobleme de multe ori. Complexitate exponentiala O(2ⁿ), nu O(n)."
  }
];
