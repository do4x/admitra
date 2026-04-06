// Tablouri si matrici — 22 questions (weight 1.1)
export const arraysQuestions = [
  {
    id: "arr_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    prompt: "Declaratia corecta a unui vector de 10 intregi in C++ este:",
    options: ["int v[10];", "int v(10);", "vector v[10];", "array<int> v;"],
    correctIndex: 0,
    explanation: "Sintaxa C++ pentru vector static: tip_date nume[dimensiune]. Deci: int v[10];"
  },
  {
    id: "arr_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    prompt: "Primul element al unui vector v declarat ca int v[5] are indicele:",
    options: ["0", "1", "5", "-1"],
    correctIndex: 0,
    explanation: "In C++, indicii vectorilor incep de la 0. Primul element este v[0]."
  },
  {
    id: "arr_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    prompt: "Ce face codul: int v[5]={1,2,3,4,5}; int s=0; for(int i=0;i<5;i++) s+=v[i];",
    options: ["Calculeaza suma elementelor", "Calculeaza produsul", "Sorteaza vectorul", "Cauta minimul"],
    correctIndex: 0,
    explanation: "Bucla adauga fiecare element la s. La final, s = 1+2+3+4+5 = 15 (suma)."
  },
  {
    id: "arr_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    prompt: "Elementul din linia i, coloana j al unei matrice m[N][M] se acceseaza ca:",
    options: ["m[i][j]", "m[j][i]", "m(i,j)", "m{i,j}"],
    correctIndex: 0,
    explanation: "In C++, elementele matricei bidimensionale se acceseaza cu m[linie][coloana]."
  },
  {
    id: "arr_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    prompt: "Complexitatea timp a cautarii liniare intr-un vector nesortata de n elemente este:",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctIndex: 0,
    explanation: "In cazul cel mai rau, trebuie sa verificam toate n elementele. Complexitate: O(n)."
  },
  {
    id: "arr_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    prompt: "Ce tehnica folosim pentru a calcula suma subarrayurilor de dimensiune k intr-un array de n elemente cu complexitate O(n)?",
    options: ["Sliding window", "Binary search", "Recursie", "Backtracking"],
    correctIndex: 0,
    explanation: "Sliding window (fereastra glisanta) permite calculul eficient in O(n) fata de O(n·k) brut."
  },
  {
    id: "arr_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {3, 1, 4, 1, 5};
    cout << v[2];
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "4",
    explanation: "v[2] este al treilea element (indice 2): 4."
  },
  {
    id: "arr_ct_002", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {10, 20, 30, 40, 50};
    int n = 5, maxi = v[0];
    for(int i=1; i<n; i++)
        if(v[i] > maxi) maxi = v[i];
    cout << maxi;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "50",
    explanation: "Algoritmul gaseste maximul din vector. Maximul este 50."
  },
  {
    id: "arr_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {5, 3, 8, 1, 9, 2};
    int n = 6, cnt = 0;
    for(int i=0; i<n; i++)
        if(v[i] % 2 != 0) cnt++;
    cout << cnt;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "4",
    explanation: "Numerele impare din vector: 5, 3, 1, 9. cnt = 4."
  },
  {
    id: "arr_ct_004", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int s = 0;
    for(int i=0; i<3; i++)
        s += a[i][i];
    cout << s;
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "15",
    explanation: "Se calculeaza suma elementelor de pe diagonala principala: a[0][0]+a[1][1]+a[2][2] = 1+5+9 = 15."
  },
  {
    id: "arr_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {4, 2, 7, 1, 8, 3};
    int n = 6;
    for(int i=0; i<n-1; i++)
        for(int j=i+1; j<n; j++)
            if(v[i] > v[j]) swap(v[i], v[j]);
    cout << v[0] << " " << v[n-1];
    return 0;
}`,
    prompt: "Ce afiseaza programul dupa sortare?",
    answer: "1 8",
    explanation: "Algoritmul sorteaza vectorul crescator (selection-like). Primul element e 1 (minimul), ultimul e 8 (maximul)."
  },
  {
    id: "arr_ct_006", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {1, 2, 3, 4, 5};
    int n = 5;
    for(int i=0; i<n/2; i++)
        swap(v[i], v[n-1-i]);
    for(int i=0; i<n; i++)
        cout << v[i] << " ";
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "5 4 3 2 1",
    explanation: "Algoritmul inverseaza vectorul. Rezultat: 5 4 3 2 1."
  },
  {
    id: "arr_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    prompt: "Ultimul element al unui vector v de n elemente are indicele ___",
    answer: "n-1",
    explanation: "Indicii merg de la 0 la n-1. Ultimul element este v[n-1]."
  },
  {
    id: "arr_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    prompt: "Dupa executia: int v[]={1,2,3}; swap(v[0], v[2]); elementul v[0] este ___",
    answer: "3", tolerance: 0,
    explanation: "swap schimba v[0] si v[2]. v[0] devine 3, v[2] devine 1."
  },
  {
    id: "arr_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    prompt: "Numarul de perechi (i,j) cu i<j si v[i]>v[j] intr-un sir se numeste numarul de ___",
    answer: "inversiuni",
    explanation: "O pereche (i,j) cu i<j si v[i]>v[j] se numeste inversiune. Numarul de inversiuni masoara cat de 'nesortat' este sirul."
  },
  {
    id: "arr_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 10,
    statement: "In C++, dimensiunea unui array declarata static nu poate fi modificata in timpul executiei.",
    correct: true,
    explanation: "Arrayurile statice au dimensiune fixa la compilare. Pentru dimensiuni dinamice se foloseste vector<T> sau new[]."
  },
  {
    id: "arr_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    statement: "Accesarea elementului v[n] dintr-un vector int v[n] este valida in C++.",
    correct: false,
    explanation: "Indicii valizi sunt 0 la n-1. v[n] este acces in afara limitelor (undefined behavior)."
  },
  {
    id: "arr_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 15,
    statement: "O matrice bidimensionala m[3][4] are 12 elemente.",
    correct: true,
    explanation: "3 linii × 4 coloane = 12 elemente."
  },
  {
    id: "arr_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "arrays", subject: "informatics", xpValue: 20,
    statement: "Complexitatea timp a sortarii prin selectie este O(n log n).",
    correct: false,
    explanation: "Sortarea prin selectie are complexitate O(n²). Algoritmii O(n log n) includ mergesort si heapsort."
  }
];
