// Structuri de control — 20 questions
export const controlQuestions = [
  {
    id: "ctrl_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    prompt: "Ce structura de control se foloseste pentru a repeta o bucla de cel putin o data?",
    options: ["do-while", "while", "for", "if-else"],
    correctIndex: 0,
    explanation: "do-while executa corpul buclei cel putin o data, chiar daca conditia este falsa de la inceput."
  },
  {
    id: "ctrl_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    prompt: "Instructiunea break dintr-un for:",
    options: ["Iese din bucla curent", "Sare la urmatoarea iteratie", "Ruleaza o iteratie in plus", "Nu face nimic"],
    correctIndex: 0,
    explanation: "break termina imediat bucla (for, while sau do-while) si continua executia dupa bucla."
  },
  {
    id: "ctrl_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    prompt: "Ce afiseaza: for(int i=0; i<3; i++) cout << i << \" \";",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
    correctIndex: 0,
    explanation: "i porneste de la 0 si creste pana la 2 (conditia i<3). Se afiseaza: 0 1 2."
  },
  {
    id: "ctrl_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    prompt: "Instructiunea continue intr-o bucla:",
    options: ["Sare la urmatoarea iteratie", "Opreste bucla", "Repeta iteratia curenta", "Iese din program"],
    correctIndex: 0,
    explanation: "continue sare la urmatoarea iteratie a buclei, omitand restul codului din iteratia curenta."
  },
  {
    id: "ctrl_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "control", subject: "informatics", xpValue: 20,
    prompt: "Cate iteratii executa bucla: for(int i=1; i<=100; i*=2)?",
    options: ["7", "6", "100", "50"],
    correctIndex: 0,
    explanation: "i ia valorile 1,2,4,8,16,32,64. La i=128 > 100, opreste. 7 iteratii."
  },
  {
    id: "ctrl_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "control", subject: "informatics", xpValue: 20,
    prompt: "Care este complexitatea timp a unui while cu conditia mereu adevarata (fara break)?",
    options: ["O(∞) — bucla infinita", "O(1)", "O(n)", "O(log n)"],
    correctIndex: 0,
    explanation: "Un while(true) fara break este o bucla infinita — programul nu se termina niciodata."
  },
  {
    id: "ctrl_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int s = 0;
    for(int i = 1; i <= 4; i++)
        s += i;
    cout << s;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "10",
    explanation: "s = 1+2+3+4 = 10."
  },
  {
    id: "ctrl_ct_002", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int n = 5;
    if(n % 2 == 0)
        cout << "par";
    else
        cout << "impar";
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "impar",
    explanation: "5 % 2 = 1 ≠ 0, deci ramura else se executa. Se afiseaza 'impar'."
  },
  {
    id: "ctrl_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int x = 10;
    while(x > 0) {
        x -= 3;
    }
    cout << x;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "-2",
    explanation: "x: 10→7→4→1→-2. La -2, conditia x>0 e falsa. Se afiseaza -2."
  },
  {
    id: "ctrl_ct_004", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    for(int i=1; i<=5; i++) {
        if(i == 3) continue;
        cout << i << " ";
    }
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "1 2 4 5",
    explanation: "Cand i=3, continue sare peste cout. Se afiseaza: 1 2 4 5."
  },
  {
    id: "ctrl_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "control", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int n = 16, p = 0;
    while(n > 1) {
        n /= 2;
        p++;
    }
    cout << p;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "4",
    explanation: "16→8→4→2→1. Patru impartiri, deci p=4. (log₂ 16 = 4)."
  },
  {
    id: "ctrl_ct_006", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "control", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int s = 0;
    for(int i=1; i<=100; i++)
        if(i % 3 == 0) s++;
    cout << s;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "33",
    explanation: "Multiplii lui 3 de la 1 la 100: 3,6,...,99. Sunt 100/3 = 33 astfel de numere."
  },
  {
    id: "ctrl_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    prompt: "Numarul de iteratii ale buclei for(int i=0; i<10; i++) este ___",
    answer: "10", tolerance: 0,
    explanation: "i ia valorile 0,1,...,9. Exact 10 iteratii."
  },
  {
    id: "ctrl_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    prompt: "Valoarea lui s dupa: int s=0; for(int i=1; i<=10; i+=2) s+=i; este ___",
    answer: "25", tolerance: 0,
    explanation: "i = 1,3,5,7,9. s = 1+3+5+7+9 = 25."
  },
  {
    id: "ctrl_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "control", subject: "informatics", xpValue: 20,
    prompt: "Cate iteratii face bucla: int i=1; while(i*i <= 100) i++; Valoarea finala a lui i este ___",
    answer: "11", tolerance: 0,
    explanation: "i creste pana cand i²>100, adica i>10. La i=11: 121>100, bucla se opreste. i=11."
  },
  {
    id: "ctrl_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    statement: "O bucla for poate fi intotdeauna rescrisat ca while.",
    correct: true,
    explanation: "Orice for(init; cond; update) echivaleaza cu: init; while(cond) { corp; update; }."
  },
  {
    id: "ctrl_tf_002", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 10,
    statement: "Instructiunea if-else este o structura de control repetitiva.",
    correct: false,
    explanation: "if-else este o structura de control decizionala (conditionala), nu repetitiva."
  },
  {
    id: "ctrl_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    statement: "In C++, switch functioneaza doar cu valori intregi si caractere.",
    correct: true,
    explanation: "switch necesita expresii constante de tip intreg (int, char, enum). Nu functioneaza cu float sau string."
  },
  {
    id: "ctrl_tf_004", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "control", subject: "informatics", xpValue: 15,
    statement: "Un program cu o bucla while(false) {corp} nu executa niciodata corpul buclei.",
    correct: true,
    explanation: "Conditia false este evaluata inainte de prima executie. Corpul nu se executa niciodata."
  }
];
