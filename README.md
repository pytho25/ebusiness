# E-Business și Vizualizarea Datelor

Materiale de curs pentru disciplina E-Business și Vizualizarea Datelor (titular: Marius Geru): o lecție interactivă, suportul de curs și conceptul unei platforme de simulare.

Versiune: noiembrie 2026.

## Ce găsești aici

| Cale | Conținut |
|---|---|
| `lectia-1-interactiva/` | Lecția 1 în format HTML, cu note pentru profesor |
| `suport-curs/` | Suportul de curs: nouă capitole, trei anexe, setul de date |
| `concept-platforma-simulare-ebusiness.md` | Conceptul platformei de simulare folosite la curs |

## Lecția 1 interactivă

- `lectia-1-interactiva/lectia-1-ebusiness.html`: lecția de deschis direct în browser.
- `lectia-1-interactiva/sursa-artefact.html`: sursa artefactului publicat.

Deschidere din terminal:

```sh
open lectia-1-interactiva/lectia-1-ebusiness.html
```

Pentru găzduire, folderul are un server static minimal (`server.js`, fără dependențe, Node.js 18 sau mai nou). Pornește pe portul din variabila `PORT`, implicit 3000. Se poate porni din rădăcina repo-ului:

```sh
npm start
```

Setări pentru o platformă de găzduire Node.js: calea aplicației `.` (rădăcina repo-ului), build `npm run build`, pornire `npm start`, director de ieșire `lectia-1-interactiva`.

## Suportul de curs

Documentul complet există în două formate:

- `suport-curs/suport-curs-ebusiness-vizualizarea-datelor.pdf`: versiunea gata de citit sau tipărit (317 pagini, A4).
- `suport-curs/suport-curs-ebusiness-vizualizarea-datelor.md`: sursa în Markdown.

Aceleași capitole există și separat, în `suport-curs/capitole/`:

| Fișier | Capitol |
|---|---|
| `00-introducere.md` | Introducere și mod de folosire |
| `01-ebusiness-concepte.md` | 1. eBusiness și economia digitală: concepte de bază |
| `02-modele-de-afaceri.md` | 2. Modele de afaceri online |
| `03-ecosistemul-digital.md` | 3. Ecosistemul digital: site, căutare, rețele sociale, email |
| `04-digital-customer-support.md` | 4. Digital Customer Support |
| `05-datele-in-decizie.md` | 5. Datele în decizie: indicatori, pâlnia de conversie, economia unei comenzi |
| `06-principiile-vizualizarii.md` | 6. Principiile vizualizării datelor |
| `07-tipuri-de-grafice.md` | 7. Tipuri de grafice folosite în business și construirea unui dashboard |
| `08-python-analiza-datelor.md` | 8. Python pentru analiza datelor |
| `09-de-la-analiza-la-decizie.md` | 9. De la analiză la decizie: experimente, cauzalitate, proiect aplicat |
| `90-anexa-a-glosar.md` | Anexa A. Glosar |
| `91-anexa-b-formule.md` | Anexa B. Formule esențiale |
| `92-anexa-c-date.md` | Anexa C. Setul de date „Cămara de la Dunăre” |

Primele patru capitole explică felul în care funcționează o afacere digitală. Următoarele patru arată cum măsori ce se întâmplă în ea și cum prezinți datele. Ultimul leagă totul de decizie.

Setul de date `suport-curs/date/camara_saptamanal.csv` conține datele săptămânale pe canale (vizite, comenzi, venit, marjă, costuri, contribuție) folosite în exemple și exerciții.

### Magazinul din exemple

Aproape toate exemplele folosesc aceeași afacere: Cămara de la Dunăre, un mic magazin online din Galați. Magazinul este fictiv, iar toate cifrele lui sunt construite pentru exercițiu.

## Platforma de simulare

`concept-platforma-simulare-ebusiness.md` descrie o piață digitală simulată, condusă de profesor: echipele administrează firme concurente, iau decizii simultan și folosesc datele pentru a-și adapta strategia între runde. Este un concept, nu o implementare.

## Date personale

Repo-ul nu conține date despre studenți. Materialele originale, fișierele de prezență și notițele despre studenți stau doar local și sunt excluse prin `.gitignore`. Nu le adăuga în repo.
