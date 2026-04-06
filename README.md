# Bac + Admitere Study Coach

Aplicatie React pentru PC, construita ca un coach vizual modern pentru:
- evaluare initiala la matematica si informatica;
- dashboard cu semnal rapid pe capitole;
- fisa saptamanala personalizata;
- brief zilnic cu exercitii;
- jurnal de greseli.

## Stack

- React
- Vite
- localStorage pentru persistenta locala

## Pornire

```powershell
npm install
npm run dev
```

Aplicatia ruleaza local, de obicei la [http://localhost:5173](http://localhost:5173).

## Zone principale

- `Dashboard`: estimari pentru Bac M1, UB FMI si UPB ACS/CTI/IS
- `Assessment`: matrice diagnostica pe capitole, cu scoruri `0-4`
- `Weekly Coach`: prioritati, mentenanta si distributia timpului
- `Daily Brief`: brief zilnic pe ritmul de 7 zile
- `Mistake Log`: jurnal de greseli cu etichete si corectii

## Fisiere importante

- `src/App.jsx` - logica principala a aplicatiei
- `src/styles.css` - UI desktop modern
- `data/exam_blueprint.json` - capitole, ponderi si banci de exercitii
- `study_coach.py` - engine-ul CLI initial, pastrat ca fallback

## Observatii

- Datele aplicatiei se salveaza in browser, nu in fisierele din `workspace`.
- Blueprint-ul include maparea practica pentru Bac M1, UB FMI si UPB ACS/CTI/IS.
- Pot extinde imediat cu profile multiple, export PDF/JSON, autentificare sau generator automat de teste.
