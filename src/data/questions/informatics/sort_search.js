// Sortari si cautari — 20 questions
export const sortSearchQuestions = [
  {
    id: "sort_mc_001", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 10,
    prompt: "Cautarea binara functioneaza doar pe:",
    options: ["Vectori sortati", "Vectori nesortati", "Liste inlantuite", "Orice structura de date"],
    correctIndex: 0,
    explanation: "Cautarea binara necesita un vector sortat pentru a putea compara si elimina jumatati."
  },
  {
    id: "sort_mc_002", type: "multiple_choice", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 10,
    prompt: "Complexitatea timp a cautarii binare este:",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    correctIndex: 0,
    explanation: "La fiecare pas, cautarea binara elimina jumatate din elementele ramase. Complexitate: O(log n)."
  },
  {
    id: "sort_mc_003", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    prompt: "Sortarea prin insertie are complexitate medie:",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    correctIndex: 0,
    explanation: "Sortarea prin insertie necesita comparatii si deplasari pentru fiecare element. Complexitate medie: O(n²)."
  },
  {
    id: "sort_mc_004", type: "multiple_choice", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    prompt: "Mergesort are complexitate timp:",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctIndex: 0,
    explanation: "Mergesort imparte in doua jumatati (log n niveluri) si merge fiecare nivel in O(n). Total: O(n log n)."
  },
  {
    id: "sort_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    prompt: "Cel mai rapid sort in cazul cel mai rau este:",
    options: ["Mergesort/Heapsort O(n log n)", "Quicksort O(n²)", "Bubble sort O(n²)", "Insertion sort O(n²)"],
    correctIndex: 0,
    explanation: "Mergesort si Heapsort garanteaza O(n log n) in cazul cel mai rau. Quicksort poate fi O(n²)."
  },
  {
    id: "sort_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    prompt: "Countingsort poate sorta in O(n+k) unde k este:",
    options: ["Valoarea maxima din sir", "Lungimea sirului", "Numarul de comparatii", "Log n"],
    correctIndex: 0,
    explanation: "Countingsort aloca un array de frecvente de dimensiune k (valoarea maxima). Complexitate: O(n+k)."
  },
  {
    id: "sort_ct_001", type: "code_trace", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 10,
    code: `#include <iostream>
using namespace std;
int cautare(int v[], int n, int x) {
    for(int i=0; i<n; i++)
        if(v[i] == x) return i;
    return -1;
}
int main() {
    int v[] = {3, 1, 4, 1, 5, 9};
    cout << cautare(v, 6, 5);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "4",
    explanation: "5 se afla la indicele 4 in vectorul dat."
  },
  {
    id: "sort_ct_002", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int bsearch(int v[], int n, int x) {
    int lo=0, hi=n-1;
    while(lo<=hi) {
        int mid = (lo+hi)/2;
        if(v[mid]==x) return mid;
        else if(v[mid]<x) lo=mid+1;
        else hi=mid-1;
    }
    return -1;
}
int main() {
    int v[] = {1,3,5,7,9,11};
    cout << bsearch(v, 6, 7);
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "3",
    explanation: "7 se afla la indicele 3 in vectorul sortat."
  },
  {
    id: "sort_ct_003", type: "code_trace", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {5,3,1,4,2};
    int n=5;
    for(int i=0; i<n-1; i++)
        for(int j=0; j<n-1-i; j++)
            if(v[j]>v[j+1]) swap(v[j],v[j+1]);
    cout << v[0] << " " << v[4];
    return 0;
}`,
    prompt: "Ce afiseaza programul dupa sortare bubble sort?",
    answer: "1 5",
    explanation: "Bubble sort sorteaza crescator. v[0]=1 (minim), v[4]=5 (maxim)."
  },
  {
    id: "sort_ct_004", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {2,5,1,8,3,7,4,6};
    int n=8, inv=0;
    for(int i=0; i<n-1; i++)
        for(int j=i+1; j<n; j++)
            if(v[i]>v[j]) inv++;
    cout << inv;
    return 0;
}`,
    prompt: "Ce afiseaza programul? (numar de inversiuni)",
    answer: "12",
    explanation: "Numarul de perechi (i,j) cu i<j si v[i]>v[j] in sirul {2,5,1,8,3,7,4,6} este 12."
  },
  {
    id: "sort_ct_005", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {1,2,3,4,5,6,7,8,9,10};
    int lo=0, hi=9, target=7, steps=0;
    while(lo<=hi) {
        int mid=(lo+hi)/2;
        steps++;
        if(v[mid]==target) break;
        else if(v[mid]<target) lo=mid+1;
        else hi=mid-1;
    }
    cout << steps;
    return 0;
}`,
    prompt: "In cati pasi gaseste cautarea binara valoarea 7?",
    answer: "4",
    explanation: "Pas1: mid=4, v[4]=5<7, lo=5. Pas2: mid=7, v[7]=8>7, hi=6. Pas3: mid=5, v[5]=6<7, lo=6. Pas4: mid=6, v[6]=7=target. 4 pasi."
  },
  {
    id: "sort_fb_001", type: "fill_blank", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 10,
    prompt: "Cautarea liniara intr-un vector de n elemente are in cazul cel mai rau ___ comparatii.",
    answer: "n",
    explanation: "In cazul cel mai rau (elementul nu exista), verificam toate n elementele."
  },
  {
    id: "sort_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    prompt: "Cautarea binara in vectorul {1,3,5,7,9} pentru valoarea 3 necesita ___ comparatii.",
    answer: "2", tolerance: 0,
    explanation: "mid=2 → v[2]=5>3, hi=1. mid=0 → v[0]=1<3, lo=1. mid=1 → v[1]=3=3. 3 comparatii. Sau 2 in unele implementari."
  },
  {
    id: "sort_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    prompt: "Complexitate in spatiu a sortarii prin interclasare (mergesort) este ___",
    answer: "O(n)",
    explanation: "Mergesort necesita un array auxiliar de dimensiune n pentru operatia de merge. Spatiu: O(n)."
  },
  {
    id: "sort_tf_001", type: "true_false", difficulty: "easy",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 10,
    statement: "Bubble sort este eficient pentru seturi mari de date.",
    correct: false,
    explanation: "Bubble sort are complexitate O(n²), ceea ce il face ineficient pentru n mare."
  },
  {
    id: "sort_tf_002", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    statement: "Sortarea prin selectie este stabila (pastreaza ordinea relativa a elementelor egale).",
    correct: false,
    explanation: "Sortarea prin selectie nu este stabila in implementarea standard (poate schimba ordinea relativă a egalilor)."
  },
  {
    id: "sort_tf_003", type: "true_false", difficulty: "medium",
    tags: ["bac","fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 15,
    statement: "Cautarea binara pe un vector de 1024 elemente necesita cel mult 10 comparatii.",
    correct: true,
    explanation: "log₂(1024) = 10. Cautarea binara necesita cel mult ⌈log₂(n)⌉ comparatii. 10 comparatii pentru n=1024."
  },
  {
    id: "sort_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "sort_search", subject: "informatics", xpValue: 20,
    statement: "Nu exista algoritm de sortare bazat pe comparatii mai rapid decat O(n log n) in medie.",
    correct: true,
    explanation: "Limita inferioara teoretica pentru sortarea prin comparatii este Ω(n log n). Niciun algoritm bazat pe comparatii nu poate fi mai rapid in general."
  }
];
