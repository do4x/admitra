// Siruri de caractere — 18 questions
export const stringsQuestions = [
  {
    id: "str_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 10,
    prompt: "Functia C++ pentru lungimea unui sir de caractere tip char[] este:",
    options: ["strlen(s)", "s.size()", "length(s)", "sizeof(s)"],
    correctIndex: 0,
    explanation: "strlen() din <cstring> returneaza lungimea unui sir C (char[]) fara caracterul '\\0'."
  },
  {
    id: "str_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 10,
    prompt: "Sirul de caractere 'Hello' are ultimul caracter la indicele:",
    options: ["4", "5", "0", "6"],
    correctIndex: 0,
    explanation: "'Hello' are 5 caractere, indicele ultimului este 4 (de la 0 la 4)."
  },
  {
    id: "str_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    prompt: "Ce afiseaza: char s[] = \"abc\"; cout << s[1];",
    options: ["b", "a", "c", "1"],
    correctIndex: 0,
    explanation: "s[0]='a', s[1]='b', s[2]='c'. s[1] = 'b'."
  },
  {
    id: "str_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    prompt: "Functia care compara doua siruri char[] in C++ este:",
    options: ["strcmp(s1, s2)", "s1 == s2", "compare(s1, s2)", "equal(s1, s2)"],
    correctIndex: 0,
    explanation: "strcmp() din <cstring> compara doua siruri lexicografic. Returneaza 0 daca sunt egale."
  },
  {
    id: "str_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "strings", subject: "informatics", xpValue: 20,
    prompt: "Ce face strcpy(dest, src)?",
    options: ["Copiaza sirul src in dest", "Compara src cu dest", "Concateneaza src la dest", "Returneaza lungimea lui src"],
    correctIndex: 0,
    explanation: "strcpy copiaza continutul sirului sursa (src) in sirul destinatie (dest), inclusiv '\\0'."
  },
  {
    id: "str_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "strings", subject: "informatics", xpValue: 20,
    prompt: "Caracterul nul '\\0' dintr-un sir C are codul ASCII:",
    options: ["0", "32", "48", "255"],
    correctIndex: 0,
    explanation: "'\\0' are codul ASCII 0. El marcheaza sfarsitul unui sir C."
  },
  {
    id: "str_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char s[] = "Romania";
    cout << strlen(s);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "7",
    explanation: "'Romania' are 7 caractere. strlen nu numara '\\0'."
  },
  {
    id: "str_ct_002", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    char s[] = "hello";
    int cnt = 0;
    for(int i=0; s[i]; i++)
        if(s[i] == 'l') cnt++;
    cout << cnt;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "2",
    explanation: "'hello' contine 'l' de doua ori (pozitiile 2 si 3). cnt = 2."
  },
  {
    id: "str_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    char s[] = "abcde";
    int n = 5;
    for(int i=0; i<n/2; i++)
        swap(s[i], s[n-1-i]);
    cout << s;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "edcba",
    explanation: "Sirul este inversat: 'abcde' devine 'edcba'."
  },
  {
    id: "str_ct_004", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "strings", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    char s[] = "Hello World";
    int vowels = 0;
    for(int i=0; s[i]; i++) {
        char c = tolower(s[i]);
        if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') vowels++;
    }
    cout << vowels;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "3",
    explanation: "Vocalele in 'Hello World': e, o, o. Trei vocale."
  },
  {
    id: "str_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "strings", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char s[] = "abcabc";
    int n = strlen(s), cnt = 0;
    for(int i=0; i<n; i++)
        if(s[i] == 'a') cnt++;
    cout << cnt;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "2",
    explanation: "'abcabc' contine 'a' de doua ori. cnt = 2."
  },
  {
    id: "str_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 10,
    prompt: "Codul ASCII al caracterului '0' (cifra zero) este ___",
    answer: "48", tolerance: 0,
    explanation: "Codul ASCII al cifrei '0' este 48."
  },
  {
    id: "str_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    prompt: "strlen(\"Bac 2026\") = ___",
    answer: "8", tolerance: 0,
    explanation: "'Bac 2026' are caracterele: B,a,c,' ',2,0,2,6 = 8 caractere."
  },
  {
    id: "str_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "strings", subject: "informatics", xpValue: 20,
    prompt: "Diferenta codata ASCII: 'a' - 'A' = ___",
    answer: "32", tolerance: 0,
    explanation: "'a' are codul 97, 'A' are codul 65. 97 - 65 = 32."
  },
  {
    id: "str_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 10,
    statement: "Un sir char[] in C++ se termina intotdeauna cu caracterul '\\0'.",
    correct: true,
    explanation: "Sirurile C au terminatorul nul '\\0' la sfarsit. Functiile din <cstring> se bazeaza pe aceasta conventie."
  },
  {
    id: "str_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    statement: "strcmp(\"abc\", \"abc\") returneaza 0.",
    correct: true,
    explanation: "strcmp returneaza 0 cand sirurile sunt identice."
  },
  {
    id: "str_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "strings", subject: "informatics", xpValue: 15,
    statement: "In C++, doua variabile de tip char[] pot fi comparate direct cu ==.",
    correct: false,
    explanation: "== compara adresele de memorie (pointeri), nu continutul. Se foloseste strcmp() pentru continut."
  }
];
