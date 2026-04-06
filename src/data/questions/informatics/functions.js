// Functii si modularizare C++ — 18 questions
export const functionsQuestions = [
  {
    id: "fn_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 10,
    prompt: "O functie void in C++ returneaza:",
    options: ["Nimic", "0", "NULL", "False"],
    correctIndex: 0,
    explanation: "O functie void nu returneaza nicio valoare. Instructiunea return; (fara valoare) este optionala."
  },
  {
    id: "fn_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 10,
    prompt: "Parametrii transmisi prin valoare in C++:",
    options: ["Sunt copii locale, modificarea lor nu afecteaza originalul", "Modifica variabilele originale", "Sunt pointeri automat", "Nu pot fi modificati"],
    correctIndex: 0,
    explanation: "In transmiterea prin valoare, functia primeste o copie. Modificarile nu afecteaza variabila din afara."
  },
  {
    id: "fn_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    prompt: "Ce afiseaza: int f(int x) { return x*x; } cout << f(4);",
    options: ["16", "4", "8", "2"],
    correctIndex: 0,
    explanation: "f(4) = 4*4 = 16."
  },
  {
    id: "fn_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    prompt: "Transmiterea prin referinta (int& x) permite functiei sa:",
    options: ["Modifice variabila originala", "Primeasca o copie", "Returna doua valori direct", "Ignora parametrul"],
    correctIndex: 0,
    explanation: "Referinta (int& x) leaga parametrul direct la variabila originala. Modificarile se reflecta in apelant."
  },
  {
    id: "fn_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "functions", subject: "informatics", xpValue: 20,
    prompt: "Ce reprezinta supraincarcarea (overloading) functiilor in C++?",
    options: ["Functii cu acelasi nume dar parametri diferiti", "Functii cu acelasi corp", "Functii mostenite", "Functii inline"],
    correctIndex: 0,
    explanation: "Overloading permite definirea mai multor functii cu acelasi nume, diferentiate prin tipul/numarul parametrilor."
  },
  {
    id: "fn_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "functions", subject: "informatics", xpValue: 20,
    prompt: "O functie inline in C++:",
    options: ["Sugereaza compilatorului sa inlocuiasca apelul cu corpul functiei", "Nu poate returna valori", "Ruleza in alt thread", "Este obligatorie in clasa"],
    correctIndex: 0,
    explanation: "inline e o sugestie pentru compilator sa expandeze corpul functiei la locul apelului, eliminand overhead-ul apelului."
  },
  {
    id: "fn_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int suma(int a, int b) { return a + b; }
int main() {
    cout << suma(3, 7);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10",
    explanation: "suma(3,7) = 3+7 = 10."
  },
  {
    id: "fn_ct_002", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
void dubla(int& x) { x *= 2; }
int main() {
    int n = 5;
    dubla(n);
    cout << n;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10",
    explanation: "n este transmis prin referinta. dubla(n) face n = 5*2 = 10. Se afiseaza 10."
  },
  {
    id: "fn_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int maxim(int a, int b) { return a > b ? a : b; }
int main() {
    cout << maxim(maxim(3, 7), maxim(5, 2));
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "7",
    explanation: "maxim(3,7)=7, maxim(5,2)=5. maxim(7,5)=7."
  },
  {
    id: "fn_ct_004", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "functions", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int f(int n) {
    if(n <= 0) return 0;
    return n + f(n-1);
}
int main() {
    cout << f(5);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "15",
    explanation: "f(5) = 5+f(4) = 5+4+3+2+1+0 = 15."
  },
  {
    id: "fn_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "functions", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
void swap_vals(int a, int b) {
    int tmp = a; a = b; b = tmp;
}
int main() {
    int x = 3, y = 7;
    swap_vals(x, y);
    cout << x << " " << y;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "3 7",
    explanation: "Parametrii sunt transmisi prin valoare. swap_vals nu modifica x si y din main. Se afiseaza 3 7."
  },
  {
    id: "fn_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 10,
    prompt: "Cuvantul cheie C++ pentru a iesi dintr-o functie si a returna o valoare este ___",
    answer: "return",
    explanation: "return valoare; termina executia functiei si returneaza valoarea specificata."
  },
  {
    id: "fn_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    prompt: "O functie cu semnatura 'int f(int a, int b)' are ___ parametri.",
    answer: "2", tolerance: 0,
    explanation: "Functia are doi parametri: a si b, ambii de tip int."
  },
  {
    id: "fn_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "functions", subject: "informatics", xpValue: 20,
    prompt: "Rezultatul lui: int f(int x) {return x%2==0?x/2:3*x+1;} Valoarea f(6) este ___",
    answer: "3", tolerance: 0,
    explanation: "6 % 2 == 0, deci returneaza 6/2 = 3."
  },
  {
    id: "fn_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 10,
    statement: "O functie C++ poate returna mai mult de o valoare direct prin return.",
    correct: false,
    explanation: "return returneaza o singura valoare. Pentru mai multe valori se folosesc parametri prin referinta, structuri sau pair."
  },
  {
    id: "fn_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    statement: "Variabilele locale declarate intr-o functie sunt accesibile din alte functii.",
    correct: false,
    explanation: "Variabilele locale au scop limitat la functia in care sunt declarate. Nu sunt vizibile in exterior."
  },
  {
    id: "fn_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "functions", subject: "informatics", xpValue: 15,
    statement: "In C++, functia main trebuie sa returneze un int.",
    correct: true,
    explanation: "Standardul C++ cere ca main sa returneze int. return 0 indica terminare cu succes."
  }
];
