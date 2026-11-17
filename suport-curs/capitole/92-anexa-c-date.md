# Anexa C. Setul de date „Cămara de la Dunăre”

Toate cifrele din această anexă sunt **fictive**, construite pentru exercițiu. Fișierul sursă este `date/camara_saptamanal.csv`: 48 de rânduri, câte unul pentru fiecare combinație de săptămână (1-12) și canal (4 canale).

## C.1 Coloanele fișierului

| Coloană | Ce conține |
|---|---|
| `saptamana` | Numărul săptămânii, de la 1 la 12 |
| `luna` | septembrie (săptămânile 1-4), octombrie (5-8), noiembrie (9-12) |
| `canal` | Căutare, Reclame, Email sau Direct; canalul unei comenzi este ultimul clic dinaintea ei |
| `vizite` | Numărul de vizite pe site venite prin acel canal |
| `comenzi` | Numărul de comenzi |
| `venit` | Valoarea comenzilor, în lei |
| `marja_bruta` | Venitul minus costul mărfii, în lei |
| `cost_marketing` | Cheltuiala de marketing a canalului, în lei |
| `cost_ambalare_livrare` | 14 lei pentru fiecare comandă |
| `contributie` | Marja brută minus marketing, minus ambalare și livrare |

## C.2 Ipotezele modelului

- Marja brută la preț întreg: 45%.
- Ambalare și livrare: 14 lei pe comandă, suportați de magazin.
- Costuri fixe: 2.500 lei pe săptămână, adică 10.000 lei pe lună. Nu sunt împărțite pe canale.
- Rezultat simplificat = contribuția tuturor canalelor minus costurile fixe. Nu include taxe, retururi, comisioane de plată sau stoc nevândut.
- Din săptămâna 5, canalul Reclame primește un buget mult mai mare și un cod de reducere de 20%.

## C.3 Totaluri pe luni

| Luna | Vizite | Comenzi | Rata de conversie | Venit (lei) | Valoarea medie a comenzii (lei) | Marja brută (lei) | Marketing (lei) | Ambalare și livrare (lei) | Costuri fixe (lei) | Rezultat simplificat (lei) |
|---|---|---|---|---|---|---|---|---|---|---|
| Septembrie | 18.860 | 553 | 2,93% | 85.400 | 154,4 | 38.430 | 2.600 | 7.742 | 10.000 | 18.088 |
| Octombrie | 26.380 | 688 | 2,61% | 97.779 | 142,1 | 41.235 | 11.400 | 9.632 | 10.000 | 10.203 |
| Noiembrie | 32.140 | 796 | 2,48% | 109.125 | 137,1 | 44.902 | 17.000 | 11.144 | 10.000 | 6.758 |

## C.4 Canalele în septembrie

| Canal | Vizite | Comenzi | Rata de conversie | Valoarea medie a comenzii (lei) | Marja brută | Marketing pe comandă (lei) | Contribuție (lei) | Contribuție pe comandă (lei) |
|---|---|---|---|---|---|---|---|---|
| Căutare | 9.640 | 241 | 2,5% | 150,0 | 45% | 0,0 | 12.894 | 53,5 |
| Reclame | 3.220 | 64 | 2,0% | 150,0 | 45% | 37,5 | 1.024 | 16,0 |
| Email | 2.400 | 121 | 5,0% | 165,0 | 45% | 1,7 | 7.090 | 58,6 |
| Direct | 3.600 | 127 | 3,5% | 155,0 | 45% | 0,0 | 7.080 | 55,8 |

## C.5 Canalele în octombrie

| Canal | Vizite | Comenzi | Rata de conversie | Valoarea medie a comenzii (lei) | Marja brută | Marketing pe comandă (lei) | Contribuție (lei) | Contribuție pe comandă (lei) |
|---|---|---|---|---|---|---|---|---|
| Căutare | 9.820 | 246 | 2,5% | 150,0 | 45% | 0,0 | 13.161 | 53,5 |
| Reclame | 10.400 | 188 | 1,8% | 107,8 | 31% | 59,6 | -7.481 | -39,8 |
| Email | 2.480 | 125 | 5,0% | 165,0 | 45% | 1,6 | 7.331 | 58,6 |
| Direct | 3.680 | 129 | 3,5% | 155,0 | 45% | 0,0 | 7.192 | 55,8 |

## C.6 Canalele în noiembrie

| Canal | Vizite | Comenzi | Rata de conversie | Valoarea medie a comenzii (lei) | Marja brută | Marketing pe comandă (lei) | Contribuție (lei) | Contribuție pe comandă (lei) |
|---|---|---|---|---|---|---|---|---|
| Căutare | 9.920 | 249 | 2,5% | 150,0 | 45% | 0,0 | 13.322 | 53,5 |
| Reclame | 15.900 | 286 | 1,8% | 105,0 | 31% | 58,7 | -11.495 | -40,2 |
| Email | 2.560 | 129 | 5,0% | 165,0 | 45% | 1,6 | 7.572 | 58,7 |
| Direct | 3.760 | 132 | 3,5% | 155,0 | 45% | 0,0 | 7.359 | 55,8 |

## C.7 Date săptămânale, toate canalele la un loc

| Săptămâna | Luna | Vizite | Comenzi | Venit (lei) | Marketing (lei) | Contribuție (lei) | Rezultat după costuri fixe (lei) |
|---|---|---|---|---|---|---|---|
| 1 | septembrie | 4.670 | 138 | 21.310 | 650 | 7.008 | 4.508 |
| 2 | septembrie | 4.720 | 138 | 21.310 | 650 | 7.008 | 4.508 |
| 3 | septembrie | 4.750 | 139 | 21.470 | 650 | 7.066 | 4.566 |
| 4 | septembrie | 4.720 | 138 | 21.310 | 650 | 7.008 | 4.508 |
| 5 | octombrie | 5.580 | 154 | 22.765 | 1.550 | 6.113 | 3.613 |
| 6 | octombrie | 6.390 | 168 | 24.019 | 2.650 | 5.156 | 2.656 |
| 7 | octombrie | 6.990 | 180 | 25.215 | 3.350 | 4.683 | 2.183 |
| 8 | octombrie | 7.420 | 186 | 25.780 | 3.850 | 4.250 | 1.750 |
| 9 | noiembrie | 7.840 | 195 | 26.835 | 4.250 | 4.096 | 1.596 |
| 10 | noiembrie | 8.060 | 200 | 27.405 | 4.250 | 4.224 | 1.724 |
| 11 | noiembrie | 8.170 | 202 | 27.630 | 4.250 | 4.268 | 1.768 |
| 12 | noiembrie | 8.070 | 199 | 27.255 | 4.250 | 4.170 | 1.670 |

## C.8 Canalul Reclame, săptămână cu săptămână

| Săptămâna | Vizite | Comenzi | Venit (lei) | Valoarea medie a comenzii (lei) | Marja brută | Marketing (lei) | Contribuție (lei) |
|---|---|---|---|---|---|---|---|
| 1 | 790 | 16 | 2.400 | 150 | 45% | 600 | 256 |
| 2 | 810 | 16 | 2.400 | 150 | 45% | 600 | 256 |
| 3 | 800 | 16 | 2.400 | 150 | 45% | 600 | 256 |
| 4 | 820 | 16 | 2.400 | 150 | 45% | 600 | 256 |
| 5 | 1.600 | 30 | 3.540 | 118 | 33% | 1.500 | -752 |
| 6 | 2.400 | 43 | 4.644 | 108 | 31% | 2.600 | -1.762 |
| 7 | 3.000 | 54 | 5.670 | 105 | 31% | 3.300 | -2.298 |
| 8 | 3.400 | 61 | 6.405 | 105 | 31% | 3.800 | -2.668 |
| 9 | 3.800 | 68 | 7.140 | 105 | 31% | 4.200 | -2.939 |
| 10 | 4.000 | 72 | 7.560 | 105 | 31% | 4.200 | -2.864 |
| 11 | 4.100 | 74 | 7.770 | 105 | 31% | 4.200 | -2.827 |
| 12 | 4.000 | 72 | 7.560 | 105 | 31% | 4.200 | -2.864 |
