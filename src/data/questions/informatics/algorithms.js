// Tehnici algoritmice de admitere — 20 questions (weight 1.3, FMI+UPB only)
export const algorithmsQuestions = [
  {
    id: "algo_mc_001", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    prompt: "Tehnica Greedy alege la fiecare pas:",
    options: ["Optimul local sperând să obtina optimul global", "Toate solutiile posibile", "Solutia cu cel mai mic cost total", "Solutia aleatoare"],
    correctIndex: 0,
    explanation: "Greedy face alegerea local-optima la fiecare pas. Nu garanteaza intotdeauna optimul global, dar functioneaza pentru anumite clase de probleme."
  },
  {
    id: "algo_mc_002", type: "multiple_choice", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    prompt: "Programarea dinamica este eficienta cand problema are:",
    options: ["Subprobleme suprapuse si substructura optima", "Subprobleme independente", "O singura solutie", "Complexitate exponentiala inevitabila"],
    correctIndex: 0,
    explanation: "PD memoreaza solutiile subproblemelor (memoization/tabulation) pentru a evita recalculul subproblemelor suprapuse."
  },
  {
    id: "algo_mc_003", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Complexitatea algoritmului Dijkstra cu priority_queue este:",
    options: ["O((V+E) log V)", "O(V²)", "O(E log E)", "O(V+E)"],
    correctIndex: 0,
    explanation: "Cu min-heap (priority_queue), Dijkstra are complexitate O((V+E) log V)."
  },
  {
    id: "algo_mc_004", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Backtracking genereaza solutii prin:",
    options: ["Explorare sistematica cu renuntare la ramuri invalide", "Alegere greedy", "Memorizare DP", "Sortare si cautare binara"],
    correctIndex: 0,
    explanation: "Backtracking construieste solutii incrementale si 'renunta' (backtracks) cand o cale nu poate duce la solutie valida."
  },
  {
    id: "algo_mc_005", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Longest Common Subsequence (LCS) al 'ABCDE' si 'ACE' are lungimea:",
    options: ["3", "2", "5", "4"],
    correctIndex: 0,
    explanation: "LCS este 'ACE' cu lungimea 3. Se calculeaza prin programare dinamica."
  },
  {
    id: "algo_mc_006", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Un arbore binar de cautare (BST) cu n noduri are inaltimea in cazul cel mai rau:",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctIndex: 0,
    explanation: "In cazul cel mai rau (sir sortat), BST degenereaza intr-o lista. Inaltimea devine O(n)."
  },
  {
    id: "algo_ct_001", type: "code_trace", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {1,2,3,4,5};
    int n=5, prefix[5];
    prefix[0] = v[0];
    for(int i=1; i<n; i++)
        prefix[i] = prefix[i-1] + v[i];
    cout << prefix[3];
    return 0;
}`,
    prompt: "Ce afiseaza programul? (sume prefix)",
    answer: "10",
    explanation: "prefix[3] = 1+2+3+4 = 10."
  },
  {
    id: "algo_ct_002", type: "code_trace", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    code: `#include <iostream>
#include <algorithm>
using namespace std;
int main() {
    int v[] = {3,1,4,1,5,9,2,6};
    int n=8;
    sort(v, v+n);
    cout << v[0] << " " << v[n-1];
    return 0;
}`,
    prompt: "Ce afiseaza programul?",
    answer: "1 9",
    explanation: "Dupa sortare, primul element este minimul (1) si ultimul este maximul (9)."
  },
  {
    id: "algo_ct_003", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int dp[100];
int main() {
    int coins[] = {1,3,4};
    int target = 6;
    dp[0] = 0;
    for(int i=1; i<=target; i++) dp[i] = 1e9;
    for(int i=1; i<=target; i++)
        for(int c : coins)
            if(c <= i && dp[i-c]+1 < dp[i])
                dp[i] = dp[i-c]+1;
    cout << dp[6];
    return 0;
}`,
    prompt: "Ce afiseaza programul? (coin change - numar minim de monede pentru suma 6)",
    answer: "2",
    explanation: "Suma 6 se obtine cu 2 monede: 3+3 = 6. dp[6] = 2."
  },
  {
    id: "algo_ct_004", type: "code_trace", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    code: `#include <iostream>
using namespace std;
int main() {
    int v[] = {-2,1,-3,4,-1,2,1,-5,4};
    int n=9, maxS=v[0], cur=v[0];
    for(int i=1; i<n; i++) {
        cur = max(v[i], cur+v[i]);
        maxS = max(maxS, cur);
    }
    cout << maxS;
    return 0;
}`,
    prompt: "Ce afiseaza programul? (Kadane's algorithm - maximum subarray sum)",
    answer: "6",
    explanation: "Subarrayul cu suma maxima este [4,-1,2,1] cu suma 6. Algoritmul Kadane gaseste acest maxim."
  },
  {
    id: "algo_fb_001", type: "fill_blank", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    prompt: "Tehnica de a imparti problema in doua jumatati si a combina solutiile se numeste ___",
    answer: "divide et impera",
    explanation: "Divide et impera (divide and conquer) rezolva recursiv subprobleme mai mici si combina solutiile."
  },
  {
    id: "algo_fb_002", type: "fill_blank", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    prompt: "Cel mai lung subsir crescator (LIS) al sirului {3,1,4,1,5,9,2,6} are lungimea ___",
    answer: "4", tolerance: 0,
    explanation: "Un LIS de lungime 4: {1,4,5,9} sau {1,4,5,6} etc."
  },
  {
    id: "algo_fb_003", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Numarul de drumuri de la coltul stanga-sus la coltul dreapta-jos al unui grid 3×3 (doar la dreapta sau jos) este ___",
    answer: "6", tolerance: 0,
    explanation: "C(m+n-2, m-1) = C(4,2) = 6. Sau prin DP: dp[3][3] = 6."
  },
  {
    id: "algo_fb_004", type: "fill_blank", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Valoarea maxima a rucsacului 0/1 cu capacitate 5 si obiecte {(wt=2,val=6),(wt=2,val=10),(wt=3,val=12)} este ___",
    answer: "22", tolerance: 0,
    explanation: "Luam obiectele 2 si 3 (wt=2+3=5, val=10+12=22). DP confirma dp[5]=22."
  },
  {
    id: "algo_tf_001", type: "true_false", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    statement: "Algoritmul greedy pentru problema rucsacului fractional da intotdeauna solutia optima.",
    correct: true,
    explanation: "Pentru rucsacul fractional (putem lua fractiuni din obiecte), greedy sortat dupa valoare/greutate este optim."
  },
  {
    id: "algo_tf_002", type: "true_false", difficulty: "medium",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 15,
    statement: "Algoritmul greedy pentru problema rucsacului 0/1 (fara fractiuni) da intotdeauna solutia optima.",
    correct: false,
    explanation: "Rucsacul 0/1 necesita programare dinamica. Greedy nu garanteaza optimul pentru aceasta varianta."
  },
  {
    id: "algo_tf_003", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    statement: "Orice problema din clasa NP poate fi rezolvata in timp polinomial.",
    correct: false,
    explanation: "Nu se stie daca P=NP. Problemele NP-complete nu au algoritmi polinomiali cunoscuti (si se presupune ca nu au)."
  },
  {
    id: "algo_tf_004", type: "true_false", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    statement: "BFS (Breadth-First Search) gaseste drumul minim intr-un graf neponderat.",
    correct: true,
    explanation: "BFS exploreaza nodurile nivel cu nivel. In grafuri neponderate, primul drum gasit catre un nod este cel mai scurt."
  },
  {
    id: "algo_mc_007", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Structura de date potrivita pentru implementarea BFS este:",
    options: ["Coada (queue)", "Stiva (stack)", "Heap", "Arbore binar"],
    correctIndex: 0,
    explanation: "BFS foloseste o coada FIFO pentru a procesa nodurile in ordinea descoperirii lor."
  },
  {
    id: "algo_mc_008", type: "multiple_choice", difficulty: "hard",
    tags: ["fmi","upb"], topic: "algorithms", subject: "informatics", xpValue: 20,
    prompt: "Numarul maxim de muchii intr-un graf neorientat complet cu n noduri este:",
    options: ["n(n-1)/2", "n(n-1)", "n²", "2n"],
    correctIndex: 0,
    explanation: "In graful complet, fiecare nod este conectat cu celelalte n-1 noduri. Impartind la 2 (muchii, nu arce): n(n-1)/2."
  }
];
