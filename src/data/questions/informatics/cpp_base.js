// Bazele C++ — 20 questions
export const cppBaseQuestions = [
  {
    id: "cpp_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    prompt: "Care este tipul de date C++ potrivit pentru a stoca valoarea 3.14?",
    options: ["double", "int", "char", "bool"],
    correctIndex: 0,
    explanation: "3.14 este un numar real. 'double' (sau 'float') este tipul potrivit."
  },
  {
    id: "cpp_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    prompt: "Ce afiseaza codul: cout << 5 / 2; (impartire de intregi in C++)",
    options: ["2", "2.5", "3", "0"],
    correctIndex: 0,
    explanation: "In C++, impartirea intre doi intregi da impartire intreaga. 5/2 = 2 (restul se pierde)."
  },
  {
    id: "cpp_mc_003", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    prompt: "Ce operator se foloseste in C++ pentru restul impartirii?",
    options: ["%", "/", "//", "mod"],
    correctIndex: 0,
    explanation: "Operatorul modulo (%) returneaza restul impartirii. Ex: 7 % 3 = 1."
  },
  {
    id: "cpp_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    prompt: "Care este valoarea lui x dupa executia: int x = 10; x += 3; x *= 2;",
    options: ["26", "23", "60", "16"],
    correctIndex: 0,
    explanation: "x = 10; x += 3 ⟹ x = 13; x *= 2 ⟹ x = 26."
  },
  {
    id: "cpp_mc_005", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    prompt: "Ce afiseaza: int a = 5, b = 3; cout << (a > b ? a : b);",
    options: ["5", "3", "true", "1"],
    correctIndex: 0,
    explanation: "Operatorul ternar: a > b este adevarat, deci se afiseaza a = 5."
  },
  {
    id: "cpp_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 20,
    prompt: "Ce reprezinta overflow-ul unui tip intreg?",
    options: ["Depasirea valorii maxime cu revenire la valoarea minima", "Eroare de compilare", "Avertisment de runtime", "Impartire la zero"],
    correctIndex: 0,
    explanation: "Overflow-ul apare cand valoarea depaseste maximul tipului. In C++, comportamentul e nedefinit pentru signed, dar pentru unsigned se face modulo."
  },
  {
    id: "cpp_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int x = 7;
    cout << x % 3;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "1",
    explanation: "7 % 3 = 1 (restul impartirii lui 7 la 3)."
  },
  {
    id: "cpp_ct_002", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int a = 4, b = 6;
    cout << a + b << " " << a * b;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10 24",
    explanation: "a+b = 10, a*b = 24. Se afiseaza: 10 24."
  },
  {
    id: "cpp_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int x = 5;
    x++;
    cout << x;
    x--;
    x--;
    cout << " " << x;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "6 4",
    explanation: "x=5; x++=6; afiseaza 6. x--=5; x--=4; afiseaza 4. Output: '6 4'."
  },
  {
    id: "cpp_ct_004", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    bool a = true, b = false;
    cout << (a && b) << " " << (a || b);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "0 1",
    explanation: "true && false = false (0). true || false = true (1). Output: '0 1'."
  },
  {
    id: "cpp_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int x = 10;
    cout << x++ << " ";
    cout << ++x;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10 12",
    explanation: "x++ afiseaza valoarea curenta (10) apoi incrementeaza (x=11). ++x incrementeaza inainte (x=12) si afiseaza 12. Output: '10 12'."
  },
  {
    id: "cpp_ct_006", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int a = 15;
    cout << (a & 7);
    return 0;
}`,
    prompt: "Ce afiseaza programul? (& este AND pe biti)",
    answer: "7",
    explanation: "15 in binar: 1111. 7 in binar: 0111. AND: 0111 = 7."
  },
  {
    id: "cpp_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    prompt: "In C++, tipul care stocheaza un singur caracter (ex: 'A') este ___",
    answer: "char",
    explanation: "char este tipul de date pentru un caracter in C++."
  },
  {
    id: "cpp_fb_002", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    prompt: "Codul ASCII al caracterului 'A' este ___",
    answer: "65", tolerance: 0,
    explanation: "Codul ASCII al lui 'A' (majuscula) este 65."
  },
  {
    id: "cpp_fb_003", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    prompt: "Valoarea expresiei C++: 2 + 3 * 4 - 1 este ___",
    answer: "13", tolerance: 0,
    explanation: "Precedenta: * inainte de + si -. 2 + 12 - 1 = 13."
  },
  {
    id: "cpp_fb_004", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    prompt: "Valoarea int(3.9) in C++ este ___",
    answer: "3", tolerance: 0,
    explanation: "Conversie explicita la int trunchieaza spre zero. int(3.9) = 3."
  },
  {
    id: "cpp_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    statement: "In C++, variabilele trebuie declarate inainte de a fi folosite.",
    correct: true,
    explanation: "C++ este un limbaj cu tipizare statica, variabilele trebuie declarate cu tipul lor."
  },
  {
    id: "cpp_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 10,
    statement: "In C++, operatorul = este operatorul de comparatie.",
    correct: false,
    explanation: "= este operatorul de atribuire. Operatorul de comparatie este ==."
  },
  {
    id: "cpp_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    statement: "Un program C++ poate compila cu erori si totusi sa ruleze.",
    correct: false,
    explanation: "Erorile de compilare opresc procesul de compilare. Un program cu erori de compilare nu poate fi rulat."
  },
  {
    id: "cpp_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "cpp_base", subject: "informatics", xpValue: 15,
    statement: "In C++, int are garantat exact 4 bytes pe orice platforma.",
    correct: false,
    explanation: "Standardul C++ garanteaza ca int are cel putin 2 bytes. In practica e adesea 4 bytes, dar nu e garantat pe toate platformele."
  }
];
