/* Úvod do ekonomie, podle přednášek ZS 2026.
   Pojmy: [pojem, definice, 'tN'], otázky: [otázka, správně, [3× špatně], proč, 'qN'].
   ID (poslední prvek) se nikdy nemění ani znovu nepřiděluje, jinak se ztratí pokrok. */
(() => {
// Malé grafy do lekcí: SVG s barvami z CSS proměnných (třídy svg.gr v index.html).
function gr(label, xmax, ymax, xl, yl, draw) {
  const L = 34, R = 300, T = 14, B = 186;
  const X = x => +(L + (R - L) * x / xmax).toFixed(1), Y = y => +(B - (B - T) * y / ymax).toFixed(1);
  const ln = (pts, c) => `<polyline class="${c}" points="${pts.map(([x, y]) => X(x) + ',' + Y(y)).join(' ')}"/>`;
  const dot = (x, y, t, dx = 6, dy = -7, c = 'pt') => `<circle class="${c}" cx="${X(x)}" cy="${Y(y)}" r="4"/>${t ? `<text class="b" x="${X(x) + dx}" y="${Y(y) + dy}">${t}</text>` : ''}`;
  const tx = (x, y, t, c = '') => `<text${c ? ` class="${c}"` : ''} x="${X(x)}" y="${Y(y)}">${t}</text>`;
  const gd = (x, y) => ln([[0, y], [x, y], [x, 0]], 'gd') + `<text x="${X(x)}" y="${B + 14}" text-anchor="middle">${KR.num(x)}</text><text x="${L - 5}" y="${Y(y) + 4}" text-anchor="end">${KR.num(y)}</text>`;
  return `<svg class="gr" viewBox="0 0 320 216" role="img" aria-label="${label}"><path class="ax" d="M${L} ${T - 6}V${B}H${R + 10}"/><text x="${L + 5}" y="${T - 1}">${yl}</text><text x="${R + 10}" y="${B + 28}" text-anchor="end">${xl}</text>${draw({ X, Y, ln, dot, tx, gd })}</svg>`;
}
const tbl = (head, rows) => `<div class="tbl"><table><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${typeof c === 'number' ? KR.num(c) : c}</td>`).join('')}</tr>`).join('')}</table></div>`;
// trh se zmrzlinou z přednášky: cena 0–36 Kč, poptávané 18–0, nabízené 0–18
const ZP = [0, 6, 12, 18, 24, 30, 36];
const PPF = [[0, 30], [30, 25], [50, 20], [60, 15], [65, 10], [68, 5], [70, 0]];
KR.predmet({
  id: 'ude', name: 'Úvod do ekonomie', short: 'ÚDE', icon: 'graf',
  lead: 'Deset principů, grafy, potřeby a výroba, trh. Podle přednášek ZS 2026.',
  exams: [{ date: '2026-10-26', to: '2026-10-30', what: 'Zápočtový test z ÚDE', note: 'na semináři, max 50 b., zápočet od 30 b.' }],
  test: { label: 'Zápočet', n: 25, min: 0, ok: 2, bad: 0, max: 50, pass: 30, note: 'Přesný formát testu zatím neznáme, počítáme 25 otázek po 2 bodech.' },
  // Posuň křivku (Herna): d = posun poptávky, sh = posun nabídky (+1 doprava, −1 doleva, 0 nic)
  shifts: [
    { s: 'Lidé začnou mít zmrzlinu radši než sorbet.', d: 1, sh: 0 },
    { s: 'Zlevní mléko, ze kterého se zmrzlina vyrábí.', d: 0, sh: 1 },
    { s: 'Zdraží smetana na výrobu zmrzliny.', d: 0, sh: -1 },
    { s: 'Zdraží sorbet, který zmrzlinu nahrazuje.', d: 1, sh: 0, why: 'Sorbet je substitut: když zdraží, lidé přejdou ke zmrzlině.' },
    { s: 'Zdraží poleva, kterou si lidé na zmrzlinu dávají.', d: -1, sh: 0, why: 'Poleva je komplement: když zdraží, poptávka po zmrzlině klesne.' },
    { s: 'Spotřebitelům klesne důchod. Zmrzlina je normální statek.', d: -1, sh: 0 },
    { s: 'V létě náhle klesne teplota.', d: -1, sh: 0, why: 'Změna preferencí: v chladnu chuť na zmrzlinu klesne.' },
    { s: 'Do turistické oblasti přijede v létě víc rodin s dětmi.', d: 1, sh: 0, why: 'Víc spotřebitelů = vyšší poptávka.' },
    { s: 'Výrobce začne používat lepší technologii.', d: 0, sh: 1 },
    { s: 'Na trh vstoupí další výrobci zmrzliny.', d: 0, sh: 1 },
    { s: 'Spotřebitelé čekají, že zmrzlina příští měsíc zdraží.', d: 1, sh: 0, why: 'Očekávání: radši koupí teď, dokud je levnější.' },
    { s: 'Výrobci čekají mnohem studenější léto než obvykle.', d: 0, sh: -1, why: 'Očekávání výrobců: připraví méně zmrzliny.' },
    { s: 'Zlevní nanuky (substitut) a zároveň ubude výrobců zmrzliny.', d: -1, sh: -1, why: 'Příklad z přednášky: obě křivky doleva. Množství jistě klesne, cena záleží na tom, která se posune víc.' },
    { s: 'Zmrzlina zmódní a zároveň zlevní mléko na její výrobu.', d: 1, sh: 1 },
    { s: 'Lidé zbohatnou (zmrzlina je normální statek) a zároveň zdraží smetana.', d: 1, sh: -1 }
  ],
  sorts: [
    { topic: 'p2', title: 'Stav, nebo tok?', bins: ['Stavová', 'Toková'], items: [['Hrubý domácí produkt', 1], ['Veřejný dluh', 0], ['Množství peněz v ekonomice', 0], ['Kurz koruny k euru', 0], ['Tržby za rok', 1], ['Náklady za čtvrtletí', 1], ['Zůstatek na účtu k 31. 12.', 0], ['Výnosy ve výkazu zisku a ztráty', 1]] },
    { topic: 'p1', title: 'Pozitivní, nebo normativní?', bins: ['Pozitivní', 'Normativní'], items: [['Minimální mzda by měla být vyšší.', 1], ['Nezaměstnanost loni klesla.', 0], ['Stát by měl zdanit bohaté víc.', 1], ['Vyšší clo zdraží dovoz.', 0], ['Je správné dotovat zemědělce.', 1], ['Ceny potravin rostly rychleji než mzdy.', 0], ['Je třeba snížit inflaci.', 1], ['Když zdraží benzin, lidé jezdí méně.', 0]] },
    { topic: 'p1', title: 'Mikro, nebo makro?', bins: ['Mikroekonomie', 'Makroekonomie'], items: [['Inflace v ČR', 1], ['Cena másla na jednom trhu', 0], ['Nezaměstnanost v celé ekonomice', 1], ['Firma maximalizující zisk', 0], ['Rozhodování spotřebitele', 0], ['Výkon ekonomiky (HDP)', 1], ['Hospodářská politika vlády', 1], ['Cena nového výrobku firmy', 0]] },
    { topic: 'p3', title: 'Který výrobní faktor?', bins: ['Půda', 'Práce', 'Kapitál'], items: [['Ložisko uhlí', 0], ['Výrobní linka', 2], ['Účetní v kanceláři', 1], ['Les', 0], ['Nákladní auto firmy', 2], ['Pekař při práci', 1], ['Tovární hala', 2], ['Řeka jako zdroj vody', 0], ['Zásoby materiálu', 2]] },
    { topic: 'p4', title: 'Posun poptávky, nebo nabídky?', bins: ['Poptávka', 'Nabídka'], items: [['Zdraží substitut', 0], ['Zdraží vstupy do výroby', 1], ['Změní se preference', 0], ['Nová technologie', 1], ['Vzrostou důchody', 0], ['Přibudou prodejci', 1], ['Přibudou spotřebitelé', 0], ['Výrobci čekají horší sezónu', 1]] }
  ],
  errs: [
    { topic: 'p1', title: 'Náklady obětované příležitosti', q: 'V sobotu můžeš na brigádu (1 000 Kč), na doučování (600 Kč), nebo na výlet. Zvolíš výlet. Jaké jsou náklady obětované příležitosti?', steps: ['Nejlepší zvolená varianta je výlet.', 'Zbylé varianty jsou brigáda za 1 000 Kč a doučování za 600 Kč.', 'Náklady obětované příležitosti = 1 000 + 600 = 1 600 Kč.', 'Výlet tě tedy stojí 1 600 Kč.'], bad: 2, fix: 'Počítá se jen druhá nejlepší varianta, nic se nesčítá: 1 000 Kč (brigáda).' },
    { topic: 'p2', title: 'Směrnice přímky', q: 'Přímka prochází body [100; 150] a [300; 250]. Jaká je směrnice?', steps: ['Směrnice β = Δy / Δx.', 'Δy = 250 − 150 = 100.', 'Δx = 300 − 100 = 200.', 'β = 200 / 100 = 2.'], bad: 3, fix: 'Prohozený zlomek: β = Δy / Δx = 100 / 200 = 0,5.' },
    { topic: 'p2', title: 'Mezní náklady', q: 'Celkové náklady jsou při 2 ks 363 Kč a při 3 ks 400 Kč. Jaké jsou mezní náklady 3. kusu?', steps: ['Mezní náklady = přírůstek celkových nákladů při změně o jeden kus.', 'MC = TC(3) / 3.', 'MC = 400 / 3 ≈ 133,3 Kč.', 'Mezní náklady 3. kusu jsou asi 133,3 Kč.'], bad: 1, fix: 'To jsou průměrné náklady. Mezní: MC = ΔTC / ΔQ = (400 − 363) / 1 = 37 Kč.' },
    { topic: 'p3', title: 'Hranice produkčních možností', q: 'Z bodu B (30 motorek, 25 aut) se přesuneme do bodu C (50 motorek, 20 aut). Kolik aut stojí jedna motorka navíc?', steps: ['Přínos: 50 − 30 = 20 motorek.', 'Náklady obětované příležitosti: 25 − 20 = 5 aut.', 'Na jednu motorku: 20 / 5 = 4 auta.', 'Jedna motorka navíc stojí 4 auta.'], bad: 2, fix: 'Dělí se obráceně: 5 aut / 20 motorek = 0,25 auta na jednu motorku.' },
    { topic: 'p4', title: 'Přebytek na trhu', q: 'Při ceně 30 Kč je poptávané množství 3 a nabízené 15. Co je na trhu?', steps: ['Rovnovážná cena je 18 Kč.', 'Cena 30 Kč je nad rovnovážnou úrovní.', 'Poptávané množství je vyšší než nabízené.', 'Na trhu je nedostatek 12 zmrzlin.'], bad: 2, fix: 'Nabízené (15) je vyšší než poptávané (3). Je to přebytek 15 − 3 = 12 zmrzlin.' }
  ],
  // Memes: k = neano | mozek | nikdo | tlacitka | kdyz, l = texty panelů, why = co si z toho zapamatovat
  memes: [
    { topic: 'p1', k: 'neano', l: ['Sečíst všechno, o co jsem přišla', 'Počítat jen druhou nejlepší variantu'], why: 'Náklady obětované příležitosti jsou jen jedna, ta druhá nejlepší varianta. Nic se nesčítá.' },
    { topic: 'p1', k: 'kdyz', l: ['Kurz za 3 000 Kč už je zaplacený a nebaví tě', 'Utopené náklady: „Mě do toho netahej.“'], why: 'Utopené náklady zaplatíš v každém případě, takže do rozhodování nepatří.' },
    { topic: 'p1', k: 'nikdo', l: ['Já, když ve větě slyším „stát by měl“: normativní ekonomie, poznám tě na sto honů.'], why: '„Měl by“, „je správné“, „je třeba“ = hodnotový soud. Normativní výrok nejde ověřit, pozitivní ano.' },
    { topic: 'p1', k: 'mozek', l: ['Lidé se nějak rozhodují', 'Lidé reagují na pobídky', 'Pás v autě → jezdím rychleji', 'Peltzmanův efekt'], why: 'Princip 4: lidé reagují na pobídky. Pás sníží „cenu“ rizika, a tak někdo riskuje víc.' },
    { topic: 'p2', k: 'neano', l: ['Čokoláda dělá z lidí nobelisty', 'Korelace není kauzalita'], why: 'Falešná korelace: dvě čísla rostou spolu, ale jedno nezpůsobuje druhé. Výsledek musí podložit teorie.' },
    { topic: 'p2', k: 'mozek', l: ['HDP je prostě číslo', 'HDP se měří za rok', 'Veřejný dluh je k 31. 12.', 'Stav je fotka, tok je video'], why: 'Toková veličina je za období (HDP), stavová k okamžiku (dluh, peníze v ekonomice, kurz).' },
    { topic: 'p3', k: 'tlacitka', l: ['Víc aut', 'Víc motorek'], cap: 'Ekonomika na hranici produkčních možností', why: 'Na hranici nejde mít víc obojího. Víc motorek stojí auta: to jsou náklady obětované příležitosti.' },
    { topic: 'p3', k: 'kdyz', l: ['Barter:', '„Dám ti kozu, ale jen když máš přesně to, co chci já.“'], why: 'Barter vyžaduje oboustrannou shodu potřeb. Proto vznikly peníze jako všeobecně přijímaný prostředek směny.' },
    { topic: 'p3', k: 'mozek', l: ['Mušle a sůl', 'Zlaté mince', 'Papír směnitelný za zlato', 'Fiat od roku 1971: prostě mi věř'], why: 'Komoditní peníze → zlato → zlatý standard (1871–1914) a Bretton Woods (1944–1971) → fiat měny: nekryje je žádné aktivum, přijímají se, protože to stanoví zákon.' },
    { topic: 'p4', k: 'neano', l: ['Zmrzlina zdraží, posouvám poptávkovou křivku', 'Zmrzlina zdraží, jen jedu po křivce'], why: 'Změna ceny samotného statku = pohyb po křivce. Křivku posouvají jiné faktory: důchody, preference, ceny příbuzných statků…' },
    { topic: 'p4', k: 'kdyz', l: ['Cena 30 Kč, nad rovnováhou', 'Zmrzlinář a 12 kornoutů, které nikdo nechce'], why: 'Cena nad rovnováhou = přebytek. Při 30 Kč se poptávají 3 zmrzliny a nabízí 15.' },
    { topic: 'p4', k: 'tlacitka', l: ['Cena klesne', 'Cena vzroste'], cap: 'Poptávka i nabídka klesly zároveň', why: 'Jisté je jen to, že klesne množství. Cena záleží na tom, která křivka se posune víc.' }
  ],
  topics: [
    {
      id: 'p1', label: '1. Deset principů ekonomie',
      terms: [
        ['Ekonomie', 'Věda o tom, jak lidé a společnost rozhodují o využití vzácných zdrojů s alternativním užitím a jak se vyrobené statky rozdělují pro současnou i budoucí spotřebu.', 't1'],
        ['Mikroekonomie', 'Analýza chování jednotlivých subjektů: spotřebitel, cena na trhu jednoho výrobku, firma maximalizující zisk.', 't2'],
        ['Makroekonomie', 'Zkoumání ekonomiky jako celku: výkon ekonomiky, nezaměstnanost, inflace, hospodářská politika.', 't3'],
        ['Pozitivní ekonomie', 'Popis ekonomické reality, jaká je. Výroky jde ověřit.', 't4'],
        ['Normativní ekonomie', 'Hodnotové soudy o tom, jaká by realita měla být. Výroky nejde ověřit.', 't5'],
        ['Náklady obětované příležitosti', 'Náklady druhé nejlepší varianty, kterou jsme nezvolili, ale vybrali bychom ji, kdyby první nešla.', 't6'],
        ['Mezní veličiny', 'Malé dodatečné změny už naplánovaných kroků. Variantu volíme, když mezní přínos převýší mezní náklad.', 't7'],
        ['Utopené náklady', 'Náklady vynaložené v každém případě, proto neovlivní rozhodování mezi alternativami.', 't8'],
        ['Tržní selhání', 'Situace, kdy trh nedokáže zajistit efektivní alokaci zdrojů. Stát pak může být efektivnější.', 't9'],
        ['Centrálně plánovaná ekonomika', 'Rozhodnutí centra jsou pro subjekty závazná a dominuje státní vlastnictví.', 't10']
      ],
      qs: [
        ['Výrok „Minimální mzda by měla být vyšší.“ patří do ekonomie…', 'normativní', ['pozitivní', 'popisné', 'ověřitelné'], 'Říká, jaká by realita měla být. Je to hodnotový soud a nejde ho ověřit.', 'q1'],
        ['Který princip patří do skupiny „Jak se lidé rozhodují“?', 'Lidé reagují na pobídky.', ['Obchodováním si mohou polepšit obě strany.', 'Tiskne-li vláda příliš mnoho peněz, ceny stoupají.', 'Trhy jsou obvykle dobrým způsobem organizace ekonomické aktivity.'], 'Rozhodování: alternativy, cena = čeho se vzdáme, mezní veličiny, pobídky (principy 1–4).', 'q2'],
        ['Kdo napsal „Pojednání o podstatě a původu bohatství národů“ (1776)?', 'Adam Smith', ['Milton Friedman', 'Gregory Mankiw', 'Vojtěch Jurečka'], 'Smithova kniha se bere jako začátek ekonomie jako vědy.', 'q3'],
        ['Místo koncertu, na který bys jinak šla, jdeš na brigádu. Co jsou náklady obětované příležitosti brigády?', 'Koncert, o který přijdeš', ['Mzda z brigády', 'Všechny ostatní akce toho večera dohromady', 'Brigáda, kterou sis vybrala'], 'Jsou to náklady jen druhé nejlepší varianty, ne součet všech možností.', 'q4'],
        ['Kdy se racionální člověk pro variantu rozhodne?', 'Když mezní přínos převýší mezní náklad', ['Když celkový přínos převýší utopené náklady', 'Když jsou mezní náklady nulové', 'Když se tak rozhodne většina ostatních'], 'Racionální lidé myslí v mezních veličinách.', 'q5'],
        ['Kurzovné už je zaplacené a vrátit nejde. Má ovlivnit, jestli kurz dokončíš?', 'Ne, jsou to utopené náklady', ['Ano, jsou to náklady obětované příležitosti', 'Ano, jsou to mezní náklady', 'Ne, protože jde o normativní výrok'], 'Utopené náklady zaplatíš v každém případě, takže do rozhodování nepatří.', 'q6'],
        ['„Inflace je vždy a všude peněžním jevem.“ Ke kterému principu se citát Miltona Friedmana váže?', 'Tiskne-li vláda příliš mnoho peněz, ceny stoupají.', ['Lidé reagují na pobídky.', 'Vlády mohou někdy zlepšit výsledky fungování trhů.', 'Lidé volí mezi alternativami.'], 'Je to 9. princip ze skupiny „Jak funguje ekonomika jako celek“.', 'q7'],
        ['Společnost je krátkodobě vystavena volbě mezi…', 'inflací a nezaměstnaností', ['inflací a ekonomickým růstem', 'daněmi a dotacemi', 'exportem a importem'], '10. princip. Na přednášce k němu byla Phillipsova křivka.', 'q8'],
        ['Proč byla centrálně plánovaná ekonomika méně efektivní než tržní?', 'Centrum neznalo preference domácností', ['Firmy v ní maximalizovaly hlavně zisk', 'Ceny v ní určovala nabídka a poptávka', 'Převládalo v ní soukromé vlastnictví'], 'Dál: zkreslené informace o výrobních možnostech, pomalá reakce na změny a chybějící motivace ke zlepšování.', 'q9'],
        ['Co je podle přednášky předpokladem směny?', 'Dělba práce a soukromé vlastnictví', ['Centrální plán a státní vlastnictví', 'Zlatý standard', 'Tržní selhání'], 'Dobrovolná směna je výhodná pro obě strany, obě jsou na tom po ní lépe.', 'q10'],
        ['Firmy v tržní ekonomice maximalizují…', 'zisk', ['užitek', 'mzdy', 'spotřebu'], 'Domácnosti maximalizují užitek.', 'q11'],
        // z lekce 1
        ["Proč musí lidé v ekonomii vůbec volit mezi alternativami?", "Protože zdroje jsou omezené vůči potřebám.", ["Protože stát určuje, co se bude vyrábět.", "Protože ceny na trzích neustále rostou.", "Protože lidé nemají dost informací o trhu."], "Princip 1 vychází ze vzácnosti: zdrojů je méně, než by lidé chtěli. Proto víc jednoho = méně druhého.", "q12"],
        ["Který výrok je normativní?", "Stát by měl zdanit bohaté výrazně více.", ["Nezaměstnanost v ČR loni klesla o 0,3 p. b.", "Vyšší clo zdraží dovážené zboží v obchodech.", "Ceny potravin rostly rychleji než mzdy."], "„By měl“ je hodnotový soud – nejde ho ověřit daty. Ostatní výroky popisují realitu a jdou ověřit (pozitivní).", "q13"],
        ["Které téma patří do makroekonomie?", "Proč v celé ekonomice roste nezaměstnanost.", ["Jak firma volí cenu svého nového výrobku.", "Jak se rozhoduje spotřebitel v obchodě.", "Proč roste cena másla na jednom trhu."], "Makro zkoumá ekonomiku jako celek: výkon, nezaměstnanost, inflaci. Ostatní jsou o jednotlivých subjektech nebo trzích (mikro).", "q14"],
        ["V sobotu můžeš: brigáda (1 000 Kč), doučování (600 Kč), nebo výlet. Zvolíš výlet. Jaký je náklad obětované příležitosti?", "1 000 Kč", ["1 600 Kč", "600 Kč", "0 Kč"], "Počítá se jen druhá nejlepší varianta – tady brigáda za 1 000 Kč. Obě varianty se nesčítají, nemůžeš je dělat najednou.", "q15"],
        ["Řidiči s bezpečnostním pásem začnou jezdit rychleji. Který princip to ilustruje?", "Lidé reagují na pobídky.", ["Lidé volí mezi alternativami.", "Trhy jsou dobrou organizací.", "Obchodem si polepší obě strany."], "Peltzmanův efekt: pás snížil „cenu“ rizikové jízdy, takže lidé reagují riskantnější jízdou – princip 4, pobídky.", "q16"],
        ["Proč je dobrovolná směna výhodná pro obě strany?", "Protože každá strana je po směně na tom lépe.", ["Protože stát zaručí, že ceny jsou férové.", "Protože jedna strana vždy získá, co druhá ztratí.", "Protože obě strany platí stejnou cenu."], "Do dobrovolné směny jde každý jen tehdy, když si polepší. Směna není hra, kde jeden získá, co druhý ztratí.", "q17"],
        ["Jak se nazývá situace, kdy trh nezajistí efektivní alokaci zdrojů?", "tržní selhání", ["tržní rovnováha", "utopený náklad", "dělba práce"], "Tržní selhání – tehdy může vláda (princip 7) někdy výsledek zlepšit.", "q18"],
        ["Co měří ekonomická úroveň země (na rozdíl od ekonomické síly)?", "HDP připadající na obyvatele", ["celkový HDP země za jeden rok", "objem exportu za jeden rok", "míru inflace za jeden rok"], "Úroveň = HDP na obyvatele (1. Lucembursko). Síla = celkový HDP (nominálně 1. USA, v paritě kupní síly 1. Čína).", "q19"],
        ["Vláda začne tisknout velké množství peněz. Co podle principu 9 nastane?", "Ceny v ekonomice porostou.", ["Klesne nezaměstnanost natrvalo.", "Klesnou ceny dovozového zboží.", "Vzroste životní úroveň země."], "Příliš mnoho peněz → inflace. „Inflace je vždy a všude peněžním jevem“ (Friedman).", "q20"],
        ["Princip 10 říká, že společnost volí mezi inflací a nezaměstnaností. V jakém období?", "v krátkém období", ["v dlouhém období", "jen během války", "jen při deflaci"], "Jde o krátkodobou volbu (Phillipsova křivka). Slovo „krátkodobá“ je přímo v principu.", "q21"],
        ["Do které skupiny patří princip „Lidé reagují na pobídky“?", "Jak se lidé rozhodují", ["Ekonomika jako celek", "Interakce mezi lidmi", "Hospodářská politika"], "Principy 1–4 (alternativy, NOP, mezní uvažování, pobídky) jsou o tom, jak se rozhoduje jednotlivec.", "q22"]
      ],
      tips: [
        '<b>Pozitivní vs. normativní:</b> když ve výroku slyšíš „měl by“, „je správné“, „je třeba“, je to normativní.',
        '<b>Deset principů ve třech skupinách:</b> 1–4 jak se lidé rozhodují, 5–7 jak spolu jednají, 8–10 jak funguje ekonomika jako celek.',
        '<b>Náklady obětované příležitosti</b> jsou vždycky jen jedna, ta druhá nejlepší varianta.'
      ]
    },
    {
      id: 'p2', label: '2. Interpretace grafů a veličiny',
      terms: [
        ['Ceteris paribus', 'Za jinak stejných podmínek. Mění se jen jedna veličina, ostatní zůstávají stejné.', 't1'],
        ['Ekonomický model', 'Zjednodušený popis ekonomické reality postavený na předpokladech.', 't2'],
        ['Směrnice přímky', 'Podíl změny na svislé ose a změny na vodorovné ose: Δy / Δx.', 't3'],
        ['Korelace', 'Vzájemný lineární vztah mezi dvěma veličinami.', 't4'],
        ['Kauzalita', 'Příčinný vztah, kdy jedna proměnná ovlivňuje druhou.', 't5'],
        ['Stavová veličina', 'Velikost veličiny k určitému okamžiku, třeba veřejný dluh nebo množství peněz v ekonomice.', 't6'],
        ['Toková veličina', 'Velikost veličiny za určité období, třeba HDP nebo položky výkazu zisku a ztráty.', 't7'],
        ['Endogenní veličina', 'Proměnná, kterou v modelu ovlivňují jiné proměnné, třeba cena a množství v tržní poptávce.', 't8'],
        ['Exogenní veličina', 'Proměnná z vnějšího prostředí, která ovlivňuje ostatní, ale sama ovlivněná není, třeba počasí.', 't9'],
        ['Mezní veličina', 'Přírůstek celkové veličiny při změně o jednotku (mezní produkt, mezní náklady).', 't10'],
        ['Průměrná veličina', 'Celková veličina na jednotku (průměrný produkt, průměrné náklady).', 't11'],
        ['Nominální veličina', 'Veličina vyjádřená v běžných (tržních) cenách, třeba nominální mzda nebo nominální HDP.', 't12'],
        ['Reálná veličina', 'Hodnota očištěná o vliv inflace, třeba reálná mzda nebo HDP v cenách roku 2020.', 't13'],
        ['Opačná kauzalita', 'Chyba výkladu: příčina a následek jsou obráceně, než si myslíme. Ve skutečnosti Y ovlivňuje X.', 't14'],
        ['Opomenutá proměnná', 'Chyba výkladu: obě veličiny ve skutečnosti ovlivňuje třetí, se kterou jsme nepočítali.', 't15']
      ],
      qs: [
        ['Která veličina je toková?', 'Hrubý domácí produkt', ['Velikost veřejného dluhu', 'Množství peněz v ekonomice', 'Kurz koruny k euru'], 'HDP se měří za období (rok, čtvrtletí), ostatní jsou stav k okamžiku.', 'q1'],
        ['Přímka y = 100 + β · x prochází body [0; 100] a [100; 150]. Jaká je směrnice β?', '0,5', ['50', '1,5', '2'], 'β = Δy / Δx = (150 − 100) / (100 − 0) = 0,5.', 'q2'],
        ['Země, kde se jí víc čokolády, mají víc nobelistů. Jaká chyba hrozí, když z toho vyvodíš, že čokoláda dělá génie?', 'Falešná korelace', ['Opačná kauzalita', 'Ceteris paribus', 'Exogenní veličina'], 'Korelace není kauzalita. Výsledek musí podložit ekonomická teorie.', 'q3'],
        ['Celkové náklady stoupnou při zvýšení výroby ze 2 na 3 kusy z 363 na 400. Jaké jsou mezní náklady třetího kusu?', '37', ['400', '133,3', '363'], 'MC = ΔTC / ΔQ = 400 − 363 = 37.', 'q4'],
        ['Počasí ovlivňuje tržní poptávku po zmrzlině, ale samo ovlivněné není. Je to veličina…', 'exogenní', ['endogenní', 'mezní', 'nominální'], 'Exogenní přichází z vnějšího prostředí modelu.', 'q5'],
        ['Jaký je základní předpoklad všech ekonomických modelů?', 'Ceteris paribus', ['Kauzalita', 'Falešná korelace', 'Opomenutá proměnná'], 'Mění se jedna veličina a ostatní necháme stejné.', 'q6'],
        ['Průměrný příjem firmy je stejný jako…', 'cena', ['mezní náklady', 'celkový produkt', 'zisk'], 'Celkový příjem / množství = cena (pokud se všechno prodává za stejnou cenu).', 'q7'],
        ['Co v rovnici přímky y = α + β · x vyjadřuje α?', 'konstantu', ['směrnici', 'vysvětlující proměnnou', 'vysvětlovanou proměnnou'], 'α je hodnota y, když x = 0. β je směrnice, x vysvětlující a y vysvětlovaná proměnná.', 'q8'],
        ['S růstem x roste i y. Jaký je to vztah?', 'pozitivní', ['negativní', 'žádný', 'opačná kauzalita'], 'Rostoucí křivka = pozitivní vztah, klesající = negativní. Vodorovná nebo svislá přímka = žádný vztah.', 'q9'],
        ['V létě roste prodej zmrzliny i počet utonutí. Jaká chyba hrozí ve výkladu „zmrzlina způsobuje utonutí“?', 'Opomenutá proměnná', ['Opačná kauzalita', 'Ceteris paribus', 'Exogenní veličina'], 'Za obojím je ve skutečnosti teplé počasí, se kterým výklad nepočítá. Na přednášce: zapalovače a riziko rakoviny, za kterými je kouření.', 'q10'],
        ['Ve městech s vyšší kriminalitou je víc policistů. Kdo z toho vyvodí, že policie zvyšuje kriminalitu, dělá chybu…', 'opačné kauzality', ['falešné korelace', 'ceteris paribus', 'tokové veličiny'], 'Příklad z přednášky (Mankiw): spíš kriminalita vede k tomu, že město najme víc policistů, ne naopak.', 'q11'],
        ['Mzda očištěná o vliv inflace je…', 'reálná mzda', ['nominální mzda', 'mezní mzda', 'průměrná mzda'], 'Nominální je v běžných cenách, reálná říká, kolik si za mzdu opravdu koupíš.', 'q12'],
        ['Celkový produkt 4 pracovníků je 54,7. Jaký je průměrný produkt?', '13,7', ['15,7', '54,7', '218,8'], 'AP = TP / L = 54,7 / 4 ≈ 13,7. Čísla jsou z tabulky na přednášce.', 'q13'],
        ['Kurz koruny k euru je veličina…', 'stavová', ['toková', 'mezní', 'celková'], 'Kurz platí k určitému okamžiku, stejně jako veřejný dluh nebo množství peněz v ekonomice.', 'q14'],
        ['Bodový graf se jinak nazývá…', 'korelační diagram', ['koláčový graf', 'časová řada', 'sloupcový graf'], 'Ukazuje vztah dvou proměnných. Koláčový, sloupcový graf a časová řada mají jen jednu proměnnou.', 'q15'],
        ['HDP vyjádřený v cenách roku 2020 je…', 'reálný', ['nominální', 'mezní', 'stavový'], 'Stálé ceny jednoho roku odstraní vliv inflace, proto je reálný. HDP je navíc tokový.', 'q16'],
        ['Celkové náklady jsou při 9 ks 600 Kč a při 10 ks 700 Kč. Jaké jsou mezní náklady 10. kusu?', '100 Kč', ['700 Kč', '70 Kč', '60 Kč'], 'MC = ΔTC / ΔQ = (700 − 600) / 1 = 100 Kč. 70 Kč jsou průměrné náklady.', 'q17']
      ],
      tips: [
        '<b>Stav vs. tok:</b> stav je fotka (k 31. 12.), tok je video (za rok).',
        '<b>Směrnice</b> = o kolik se změní y, když x vzroste o jedna. Δy / Δx.',
        '<b>Tři pasti výkladu grafů:</b> falešná korelace, opomenutá proměnná a opačná kauzalita.'
      ]
    },
    {
      id: 'p3', label: '3. Potřeby a výroba',
      terms: [
        ['Potřeba', 'Pocit nedostatku. Je proměnlivá, subjektivní a různě naléhavá.', 't1'],
        ['Ekonomický statek', 'Výsledek předchozí hospodářské činnosti. Je vzácný a užitečný.', 't2'],
        ['Půda', 'Všechny přírodní zdroje. Je nehomogenní a liší se kvalitou. Odměnou je renta.', 't3'],
        ['Práce', 'Oběť, kterou vykonáváme, abychom mohli spotřebovávat. Odměnou je mzda.', 't4'],
        ['Kapitál', 'Vyrobené statky, kterými se vyrábějí jiné statky. Do spotřeby nevstupují. Odměnou je úrok.', 't5'],
        ['Dělba práce', 'Specializace účastníků výroby na jednotlivé činnosti. Zvyšuje produktivitu a je předpokladem směny.', 't6'],
        ['Hranice produkčních možností', 'Všechny kombinace dvou výrobků, které lze vyrobit při daných zdrojích a technologiích.', 't7'],
        ['Barter', 'Naturální směna výrobku za výrobek. Vyžaduje oboustrannou shodu potřeb.', 't8'],
        ['Fiat měna', 'Peníze s nuceným oběhem, nekryté žádným aktivem. Přijímají se, protože to stanoví zákon. Od roku 1971 všechny měny.', 't9'],
        ['Peníze', 'Prostředek směny, který subjekty ve směně všeobecně přijímají.', 't10'],
        ['Produktivita práce', 'Účinnost vynakládané práce. Zvyšuje ji dělba práce.', 't11'],
        ['Méněcenný statek', 'Statek, po kterém s růstem důchodu poptávka klesá. Opakem je normální statek (nezbytný nebo luxusní).', 't12'],
        ['Ekonomický koloběh', 'Zjednodušený pohled na interakce mezi domácnostmi, firmami a případně státem na trhu výrobků a služeb a na trhu výrobních faktorů.', 't13']
      ],
      qs: [
        ['Jaká je odměna za výrobní faktor kapitál?', 'úrok', ['renta', 'mzda', 'dotace'], 'Půda → renta, práce → mzda, kapitál → úrok.', 'q1'],
        ['Jaká je odměna za výrobní faktor půda?', 'renta', ['úrok', 'mzda', 'dotace'], 'Za půdu se považují všechny přírodní zdroje.', 'q2'],
        ['Kombinace uvnitř hranice produkčních možností je…', 'výrobně neefektivní', ['výrobně efektivní', 'výrobně nedostupná', 'nejlepší možná'], 'Zdroje se nevyužívají naplno, šlo by vyrobit víc obojího.', 'q3'],
        ['Kombinace za hranicí produkčních možností (vně) je…', 'výrobně nedostupná', ['výrobně neefektivní', 'výrobně efektivní', 'vždycky optimální'], 'Při daných zdrojích a technologiích ji nevyrobíš. Dosáhnout se na ni dá jen ekonomickým růstem.', 'q4'],
        ['Přesunem z bodu B do C získáme 20 motorek a přijdeme o 5 aut. Co je těch 5 aut?', 'Náklady obětované příležitosti 20 motorek', ['Přínos přesunu z bodu B do bodu C', 'Utopené náklady výroby motorek', 'Mezní užitek z dvaceti motorek'], 'Přínos jsou motorky, NOP jsou auta, kterých se vzdáme.', 'q5'],
        ['Co posune hranici produkčních možností směrem ven?', 'Zlepšení technologie', ['Nevyužití části pracovníků', 'Přesun po hranici z B do C', 'Zdražení aut'], 'Ven ji posune i víc zapojených výrobních faktorů (pracovníci, stroje).', 'q6'],
        ['Která funkce peněz umožňuje statky srovnávat?', 'prostředek oceňování', ['prostředek směny', 'uchovatel hodnoty', 'zákonné platidlo'], 'Funkce peněz: prostředek směny, prostředek oceňování, uchovatel hodnoty.', 'q7'],
        ['Která vlastnost peněz znamená, že jednotlivé kusy mají stejnou kvalitu?', 'stejnorodost', ['dělitelnost', 'trvanlivost', 'velká hodnota'], 'Vlastnosti: dělitelnost, trvanlivost, stejnorodost, velká hodnota.', 'q8'],
        ['Od kterého roku jsou všechny existující měny fiat měnami?', '1971', ['1914', '1944', '1871'], 'Zlatý standard 1871–1914, brettonwoodský systém 1944–1971.', 'q9'],
        ['Kdo v ČR vydává bezhotovostní peníze?', 'ČNB i komerční banky', ['jen ČNB', 'jen komerční banky', 'ministerstvo financí'], 'Mince a bankovky vydává jen ČNB.', 'q10'],
        ['Z kterých sektorů se skládá třísektorová ekonomika?', 'domácnosti, firmy a stát', ['domácnosti, firmy a banky', 'firmy, stát a zahraničí', 'domácnosti, stát a centrální banka'], 'Dvousektorová má jen domácnosti a firmy.', 'q11'],
        ['Co domácnosti dělají na trhu výrobních faktorů?', 'nabízejí práci, půdu a kapitál', ['nakupují výrobky a služby', 'vyplácejí mzdy', 'dostávají dotace'], 'Za to dostávají mzdy, renty, úroky a zisky.', 'q12'],
        ['Která vlastnost k potřebě nepatří?', 'objektivní', ['proměnlivá', 'subjektivní', 'různě naléhavá'], 'Potřeba je pocit nedostatku: proměnlivá, subjektivní a různě naléhavá.', 'q13'],
        ['Jaké dvě vlastnosti má ekonomický statek?', 'vzácnost a užitečnost', ['dostupnost a levnost', 'trvanlivost a dělitelnost', 'stálost a stejnorodost'], 'Trvanlivost, dělitelnost a stejnorodost jsou vlastnosti peněz.', 'q14'],
        ['Kam patří budovy, stroje, dopravní prostředky a zásoby?', 'kapitál', ['půda', 'práce', 'spotřeba'], 'Kapitál jsou vyrobené statky, kterými se vyrábějí jiné statky. Do spotřeby nevstupují.', 'q15'],
        ['Proč lidé přešli od barteru k penězům?', 'Barter vyžaduje shodu potřeb.', ['Zlato nešlo ničím nahradit.', 'Stát barter zakázal zákonem.', 'Banky chtěly půjčovat.'], 'Při barteru musí oba chtít přesně to, co nabízí ten druhý (oboustranná shoda potřeb). Peníze to obejdou.', 'q16'],
        ['Čeho je dělba práce předpokladem?', 'vzniku a rozvoje směny', ['zlatého standardu', 'tržního selhání', 'fiat měny'], 'Když se každý specializuje, musí si ostatní věci směnit. Dělba práce navíc zvyšuje produktivitu.', 'q17'],
        ['Jaký byl v roce 2022 podíl hotovosti na peněžní zásobě v ČR?', '13,8 %', ['5,8 %', '1,2 %', '3,9 %'], 'Eurozóna 5,8 %, Velká Británie 3,9 %, Švédsko 1,2 %, USA 11,7 %.', 'q18'],
        ['Mzdy, renty, úroky a zisky v ekonomickém koloběhu jsou…', 'peněžní tok od firem k domácnostem', ['reálný tok od domácností k firmám', 'peněžní tok od domácností k firmám', 'reálný tok od firem k domácnostem'], 'Reálný tok jde opačně: domácnosti dávají firmám práci, půdu a kapitál.', 'q19'],
        ['Co v třísektorové ekonomice plyne od státu k firmám?', 'dotace', ['daně', 'transfery', 'renty'], 'Firmy státu platí daně. Domácnosti od státu dostávají transfery a mzdy státních zaměstnanců.', 'q20'],
        ['Firma zapojí do výroby další stroje. Co se stane s hranicí produkčních možností?', 'posune se ven', ['posune se dovnitř', 'nezmění se', 'zůstane, jen se po ní pohneme'], 'Víc kapitálu zvýší produktivitu. Ven ji posune i víc pracovníků nebo lepší technologie.', 'q21']
      ],
      tips: [
        '<b>PPK (půda, práce, kapitál) → RMÚ:</b> renta, mzda, úrok.',
        '<b>Hranice produkčních možností:</b> na křivce efektivně, uvnitř neefektivně, venku nedostupné.',
        '<b>Funkce peněz:</b> směna, oceňování, uchovávání. Tři slova, tři funkce.',
        '<b>Vlastnosti peněz „DTSV“:</b> dělitelnost, trvanlivost, stejnorodost, velká hodnota.',
        '<b>Peníze tečou v kruhu:</b> domácnosti dávají firmám práci a dostávají mzdy, firmy dávají výrobky a dostávají tržby.'
      ]
    },
    {
      id: 'p4', label: '4. Fungování tržního mechanismu',
      terms: [
        ['Tržní mechanismus', 'Proces vzájemného ovlivňování tvorby poptávky, nabídky a ceny.', 't1'],
        ['Poptávka', 'Vztah mezi cenou statku a množstvím, které spotřebitelé chtějí a jsou schopni koupit.', 't2'],
        ['Poptávané množství', 'Množství statku, které spotřebitelé chtějí koupit při dané ceně.', 't3'],
        ['Zákon poptávky', 'Ceteris paribus s růstem ceny poptávané množství klesá a s poklesem ceny roste.', 't4'],
        ['Substituty', 'Statky, které se ve spotřebě nahrazují. Zdražení substitutu zvýší poptávku po daném statku.', 't5'],
        ['Komplementy', 'Statky, které se ve spotřebě doplňují. Zdražení komplementu sníží poptávku po daném statku.', 't6'],
        ['Méněcenný (inferiorní) statek', 'S růstem důchodu poptávka po něm klesá.', 't7'],
        ['Tržní rovnováha', 'Situace, kdy se poptávka rovná nabídce. Při rovnovážné ceně se poptávané množství rovná nabízenému.', 't8'],
        ['Přebytek', 'Převis nabídky nad poptávkou. Nastává, když je cena nad rovnovážnou úrovní.', 't9'],
        ['Nedostatek', 'Převis poptávky nad nabídkou. Nastává, když je cena pod rovnovážnou úrovní.', 't10'],
        ['Nabídka', 'Vztah mezi cenou statku a množstvím, které prodávající chtějí a jsou schopni prodat.', 't11'],
        ['Zákon nabídky', 'Ceteris paribus s růstem ceny nabízené množství roste a s poklesem ceny klesá.', 't12'],
        ['Normální statek', 'S růstem důchodu poptávka po něm roste. Může být nezbytný, nebo luxusní.', 't13'],
        ['Konkurence', 'Soutěž ekonomických subjektů, ve které se střetávají jejich zpravidla protikladné zájmy.', 't14']
      ],
      qs: [
        ['Zdraží sorbet, který zmrzlinu nahrazuje. Co se stane s poptávkou po zmrzlině?', 'vzroste', ['klesne', 'nezmění se', 'klesne jen poptávané množství'], 'Sorbet je substitut. Zdražení substitutu zvýší poptávku.', 'q1'],
        ['Zlevní poleva na zmrzlinu. Co se stane s poptávkou po zmrzlině?', 'vzroste', ['klesne', 'nezmění se', 'klesne nabídka'], 'Poleva je komplement. Zlevnění komplementu poptávku zvýší.', 'q2'],
        ['Spotřebitelům klesne důchod a zmrzlina je normální statek. Poptávka po zmrzlině…', 'klesne', ['vzroste', 'nezmění se', 'vzroste jen v létě'], 'U normálního statku jde poptávka s důchodem stejným směrem.', 'q3'],
        ['Zmrzlina zdraží z 18 na 24 Kč. Co nastane?', 'Pohyb po křivce, poptávané množství klesne', ['Posun celé poptávkové křivky doleva', 'Růst poptávky, křivka se posune doprava', 'Pokles poptávky, křivka se posune doleva'], 'Změna vlastní ceny = pohyb po křivce. Křivku posouvají jiné faktory: ceny příbuzných statků, důchody, preference, očekávání, počet spotřebitelů.', 'q4'],
        ['Která funkce ceny rozděluje statky mezi spotřebitele?', 'distribuční', ['alokační', 'informační', 'motivační'], 'Alokační funkce znamená, že výrobci přesouvají výrobní faktory.', 'q5'],
        ['Cena je nad rovnovážnou úrovní. Co na trhu nastane?', 'Přebytek', ['Nedostatek', 'Rovnováha', 'Růst poptávky'], 'Při vysoké ceně se nabízí víc, než se poptává.', 'q6'],
        ['Lidé začnou mít zmrzlinu radši než sorbet. Co se stane s rovnovážnou cenou a množstvím zmrzliny?', 'Cena i množství vzrostou', ['Cena vzroste, množství klesne', 'Cena klesne, množství vzroste', 'Cena i množství klesnou'], 'Růst poptávky → ↑P a ↑Q.', 'q7'],
        ['Zlevní mléko, ze kterého se zmrzlina vyrábí. Co se stane na trhu zmrzliny?', 'Cena klesne, množství vzroste', ['Cena i množství vzrostou', 'Cena vzroste, množství klesne', 'Cena i množství klesnou'], 'Levnější vstup → růst nabídky → ↓P a ↑Q.', 'q8'],
        ['Která tržní struktura nepatří mezi nedokonalou konkurenci?', 'dokonalá konkurence', ['monopol', 'oligopol', 'monopolistická konkurence'], 'Nedokonalá konkurence: monopol, oligopol, monopolistická konkurence.', 'q9'],
        ['Současně klesne poptávka i nabídka. Co se dá říct jistě?', 'Rovnovážné množství klesne', ['Rovnovážná cena klesne', 'Rovnovážná cena vzroste', 'Nic se nezmění'], 'Cena závisí na tom, která křivka se posune víc, množství klesne vždy.', 'q10'],
        ['Výrobci přesouvají výrobní faktory tam, kde ceny rostou. Kterou funkci ceny to ukazuje?', 'alokační', ['distribuční', 'informační', 'motivační'], 'Distribuční rozděluje statky mezi spotřebitele, informační dává subjektům informace, motivační je motivuje nebo demotivuje.', 'q11'],
        ['Zmrzlina zdraží z 18 na 24 Kč. Co udělá nabízené množství?', 'vzroste', ['klesne', 'nezmění se', 'klesne nabídka'], 'Zákon nabídky: vyšší cena = víc nabízeného množství. Je to pohyb po nabídkové křivce.', 'q12'],
        ['Zdraží smetana, ze které se zmrzlina vyrábí. Co se stane s nabídkou zmrzliny?', 'klesne', ['vzroste', 'nezmění se', 'vzroste poptávka'], 'Dražší vstup = vyšší náklady výroby, nabídková křivka se posune doleva.', 'q13'],
        ['Lidé čekají, že zmrzlina příští měsíc zdraží. Co se dnes stane s poptávkou po zmrzlině?', 'vzroste', ['klesne', 'nezmění se', 'klesne nabídka'], 'Očekávání je jeden z faktorů poptávky: radši si koupí teď, dokud je levnější.', 'q14'],
        ['Při ceně 30 Kč chtějí lidé koupit 3 zmrzliny a firmy prodat 15. Co je na trhu?', 'přebytek 12 zmrzlin', ['nedostatek 12 zmrzlin', 'rovnováha', 'přebytek 18 zmrzlin'], 'Nabízené − poptávané = 15 − 3 = 12. Cena je nad rovnovážnou úrovní, proto přebytek.', 'q15'],
        ['Poptávané i nabízené množství je 9 zmrzlin při ceně 18 Kč. Čím je těch 18 Kč?', 'rovnovážnou cenou', ['minimální cenou', 'utopeným nákladem', 'cenou přebytku'], 'Rovnovážná cena je ta, při které se poptávané množství rovná nabízenému.', 'q16'],
        ['Zlevní nanuky (substitut zmrzliny) a zároveň ubude výrobců zmrzliny. Co se stane jistě?', 'Množství zmrzliny klesne', ['Cena zmrzliny klesne', 'Cena zmrzliny vzroste', 'Množství zmrzliny vzroste'], 'Poptávka i nabídka klesnou, takže množství klesne. Co udělá cena, záleží na tom, která křivka se posune víc.', 'q17'],
        ['Výrobce začne používat lepší technologii. Co se stane na trhu zmrzliny?', 'Cena klesne, množství vzroste', ['Cena i množství vzrostou', 'Cena vzroste, množství klesne', 'Cena i množství klesnou'], 'Technologie zvýší nabídku, křivka se posune doprava: ↓P a ↑Q.', 'q18'],
        ['Která tržní struktura patří mezi nedokonalou konkurenci?', 'oligopol', ['dokonalá konkurence', 'cenová konkurence', 'tržní rovnováha'], 'Nedokonalá konkurence: monopol, oligopol a monopolistická konkurence. Cenová a necenová konkurence je dělení podle prostředků, ne tržní struktura.', 'q19'],
        ['Současně vzroste poptávka i nabídka. Co se dá říct jistě?', 'Rovnovážné množství vzroste', ['Rovnovážná cena vzroste', 'Rovnovážná cena klesne', 'Množství klesne'], 'Obě změny zvyšují množství. Cena závisí na tom, která křivka se posune víc.', 'q20']
      ],
      tips: [
        '<b>Pohyb vs. posun:</b> změna ceny daného statku = pohyb po křivce. Všechno ostatní posouvá celou křivku.',
        '<b>Rovnováha ve třech krocích:</b> 1) poptávka, nebo nabídka? 2) doprava, nebo doleva? 3) co to udělá s P a Q.',
        '<b>Substitut zdraží → poptávka roste. Komplement zdraží → poptávka klesá.</b>'
      ]
    }
  ],
  lessons: [
    {
      id: 'l1', topic: 'p1', title: 'Deset principů ekonomie', min: 6,
      steps: [
        { h: 'Co je ekonomie', html: '<p>Ekonomie zkoumá, jak lidé a společnost rozhodují o využití <b>vzácných zdrojů</b>, které mají <b>alternativní užití</b>. Klíčová slova jsou dvě: vzácnost (zdrojů je méně, než bychom chtěli) a alternativy (každý zdroj jde použít víc způsoby).</p><p><b>Mikroekonomie</b> zkoumá jednotlivé subjekty (spotřebitel, firma, trh jednoho výrobku), <b>makroekonomie</b> ekonomiku jako celek (výkon, nezaměstnanost, inflace).</p><p><b>Pozitivní</b> výrok popisuje realitu a jde ověřit. <b>Normativní</b> říká, jaká by realita měla být („měl by“), a ověřit nejde.</p>' },
        { h: 'Tři skupiny principů', html: '<p>Deset principů je z učebnice G. N. Mankiwa. Nejdřív si zapamatuj skupiny:</p><p><b>1–4 Jak se lidé rozhodují</b> (jeden člověk a jeho volba), <b>5–7 Jak probíhá interakce mezi lidmi</b> (směna, trh, stát), <b>8–10 Jak funguje ekonomika jako celek</b> (růst, inflace, nezaměstnanost).</p>' },
        { h: 'Jak se lidé rozhodují (1–4)', html: '<p><b>1) Lidé volí mezi alternativami,</b> protože zdroje jsou vzácné. 24 hodin = práce + volný čas.</p><p><b>2) Cena věci = to, čeho se vzdáš.</b> Náklad obětované příležitosti je jen druhá nejlepší varianta, ne součet všech ostatních.</p><p><b>3) Racionální lidé myslí v mezních veličinách:</b> udělej další krok, když mezní přínos převýší mezní náklad. Utopené náklady do rozhodování nepatří.</p><p><b>4) Lidé reagují na pobídky:</b> Ford a vyšší mzdy (1914), bezpečnostní pásy a Peltzmanův efekt.</p>' },
        { h: 'Interakce mezi lidmi (5–7)', html: '<p><b>5) Obchodováním si mohou polepšit obě strany.</b> Dobrovolná směna je výhodná pro oba, předpokladem je dělba práce a soukromé vlastnictví.</p><p><b>6) Trhy jsou obvykle dobrým způsobem organizace.</b> Firmy maximalizují zisk, domácnosti užitek. Centrální plán selhává, protože centrum nezná preference domácností a pomalu reaguje.</p><p><b>7) Vlády mohou někdy zlepšit výsledky trhů,</b> hlavně při tržním selhání. Pozor na slovo „někdy“.</p>' },
        { h: 'Ekonomika jako celek (8–10)', html: '<p><b>8) Životní úroveň závisí na schopnosti vyrábět.</b> Ekonomická síla = celkový HDP (nominálně 1. USA, v paritě kupní síly 1. Čína), ekonomická úroveň = HDP na obyvatele (1. Lucembursko).</p><p><b>9) Tiskne-li vláda příliš mnoho peněz, ceny stoupají.</b> „Inflace je vždy a všude peněžním jevem“ (Friedman).</p><p><b>10) Krátkodobá volba mezi inflací a nezaměstnaností</b> (Phillipsova křivka). Důležité je slovo „krátkodobá“.</p>' }
      ],
      quiz: ['q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q6']
    },
    {
      id: 'l2', topic: 'p2', title: 'Jak číst ekonomické grafy', min: 6,
      warm: ['p1.q15', 'p1.q13'],
      steps: [
        { h: 'Model a ceteris paribus', html: '<p><b>Ekonomický model</b> je zjednodušený popis reality postavený na předpokladech. Díky nim jde použít matematiku a statistiku a soustředit se jen na klíčové vztahy.</p><p>Základní předpoklad všech modelů je <b>ceteris paribus</b>, „za jinak stejných podmínek“: mění se jen jedna veličina a všechno ostatní necháme stejné.</p>', check: 'q6' },
        { h: 'Jaké grafy potkáš', html: '<p><b>Graf s jednou proměnnou</b> ukazuje jednu veličinu: <b>časová řada</b> (meziroční změny reálného HDP), <b>koláčový graf</b> (obyvatelstvo podle ekonomické aktivity, zaměstnaní 51 %) nebo <b>sloupcový graf</b> (zaměstnaní podle odvětví).</p><p><b>Bodový graf</b> neboli korelační diagram ukazuje vztah dvou proměnných.</p><p>Vztah je <b>pozitivní</b> (křivka roste), nebo <b>negativní</b> (klesá). Může být lineární, konvexní, nebo konkávní. Vodorovná nebo svislá přímka znamená, že vztah <b>neexistuje</b>. Na křivce hledáme i maximum, minimum a plochu pod ní.</p>', check: 'q9' },
        { h: 'Směrnice přímky', html: '<p>Přímku zapíšeš rovnicí <b>y = α + β · x</b>. y je vysvětlovaná proměnná, x vysvětlující, α konstanta (y při x = 0) a β <b>směrnice</b>.</p><p><b>β = Δy / Δx</b>, tedy o kolik se změní y, když x vzroste o jedna.</p>' + gr('Přímka y = 100 + 0,5 · x se změnou Δx = 200 a Δy = 100', 400, 320, 'x', 'y', g => g.ln([[0, 100], [400, 300]], 'cd') + g.gd(100, 150) + g.gd(300, 250) + g.ln([[100, 150], [300, 150], [300, 250]], 'ar') + g.tx(150, 128, 'Δx = 200') + g.tx(310, 205, 'Δy = 100') + g.dot(0, 100, '') + g.dot(100, 150, '') + g.dot(300, 250, '')) + '<p><b>Řešený příklad z přednášky:</b> y = 100 + ½ · x. Pro x = 100 je y = 150, pro x = 300 je y = 250. Směrnice = (250 − 150) / (300 − 100) = 100 / 200 = <b>0,5</b>.</p>', check: 'q8' },
        { h: 'Korelace není kauzalita', html: '<p><b>Korelace</b> je vzájemný lineární vztah dvou veličin. <b>Kauzalita</b> je příčinný vztah: jedna veličina ovlivňuje druhou. Výsledek grafu nebo statistiky musí vždycky podložit <b>ekonomická teorie</b>.</p><p>Tři časté chyby:</p><ul><li><b>Falešná korelace:</b> víc čokolády, víc nobelistů. Souvislost je náhodná.</li><li><b>Opomenutá proměnná:</b> obě veličiny ovlivňuje třetí, se kterou nepočítáš. Víc zapalovačů v domě, vyšší riziko rakoviny: za obojím je kouření.</li><li><b>Opačná kauzalita:</b> ve skutečnosti Y ovlivňuje X, ne naopak. Města s vyšší kriminalitou mají víc policistů, protože si je kvůli kriminalitě najmou.</li></ul>' }
      ],
      quiz: ['q2', 'q3', 'q10', 'q11', 'q15']
    },
    {
      id: 'l3', topic: 'p2', title: 'Druhy ekonomických veličin', min: 6,
      warm: ['p2.q3', 'p1.q5'],
      steps: [
        { h: 'Stav, nebo tok?', html: '<p><b>Stavová veličina</b> je velikost k určitému okamžiku: množství peněz v ekonomice, veřejný dluh, kurz koruny k euru.</p><p><b>Toková veličina</b> je velikost za určité období: HDP, položky výkazu zisku a ztráty.</p><p>Pomůcka: stav je fotka (k 31. 12.), tok je video (za rok).</p>', check: 'q14' },
        { h: 'Endogenní a exogenní', html: '<p><b>Endogenní</b> veličiny model sám vysvětluje, ovlivňují je jiné proměnné. Třeba cena a množství na trhu.</p><p><b>Exogenní</b> veličiny přicházejí zvenku: ovlivňují ostatní, ale samy ovlivněné nejsou. Třeba počasí a poptávka po zmrzlině.</p>', check: 'q5' },
        { h: 'Celkové, mezní a průměrné', html: '<p><b>Celková</b> veličina je celá velikost (celkový produkt, tržby, celkové náklady). <b>Mezní</b> je přírůstek celkové veličiny při změně o jednotku. <b>Průměrná</b> je celková veličina na jednotku, průměrný příjem je cena.</p><p>Tabulka nákladů z přednášky:</p>' + tbl(['Q', 'TC', 'MC'], [[0, 200, '–'], [1, 300, 100], [2, 363, 63], [3, 400, 37], [4, 433, 33], [5, 458, 25]]) + '<p><b>Řešený příklad:</b> MC 3. kusu = ΔTC / ΔQ = (400 − 363) / 1 = <b>37</b>. Průměrné náklady 3 kusů = 400 / 3 ≈ 133,3.</p>', check: 'q4' },
        { h: 'Nominální a reálné', html: '<p><b>Nominální</b> veličiny jsou v běžných (tržních) cenách: nominální HDP, mzda, úroková sazba.</p><p><b>Reálné</b> veličiny jsou očištěné o vliv inflace. Reálný HDP ČR se počítá v cenách roku 2020. Když nominální mzda roste pomaleji než ceny, reálná mzda klesá.</p>', check: 'q12' }
      ],
      quiz: ['q1', 'q7', 'q13', 'q16', 'q17']
    },
    {
      id: 'l4', topic: 'p3', title: 'Potřeby, výrobní faktory a hranice produkčních možností', min: 8,
      warm: ['p1.q12', 'p2.q1'],
      steps: [
        { h: 'Potřeby a statky', html: '<p><b>Potřeba</b> je pocit nedostatku. Je <b>proměnlivá, subjektivní a různě naléhavá</b>. Uspokojujeme ji spotřebou výrobků a služeb.</p><p><b>Ekonomický statek</b> je výsledek předchozí hospodářské činnosti a má dvě vlastnosti: <b>vzácnost a užitečnost</b>. Podle reakce na důchod je <b>normální</b> (nezbytný, luxusní), nebo <b>méněcenný</b>.</p>', check: 'q13' },
        { h: 'Výrobní faktory', html: '<p><b>Půda</b> jsou všechny přírodní zdroje. Je nehomogenní a liší se kvalitou. Odměna: <b>renta</b>.</p><p><b>Práce</b> je oběť, kterou děláme, abychom mohli spotřebovávat. <b>Dělba práce</b> zvyšuje produktivitu a je předpokladem směny. Odměna: <b>mzda</b>.</p><p><b>Kapitál</b> jsou vyrobené statky, kterými se vyrábí další: budovy, stroje, dopravní prostředky, zásoby. Odměna: <b>úrok</b>.</p>', check: 'q15' },
        { h: 'Hranice produkčních možností', html: '<p>Hranice ukazuje všechny kombinace dvou výrobků, které jde vyrobit <b>při daných zdrojích a technologiích</b>.</p>' + gr('Hranice produkčních možností aut a motorek s body A až G na křivce, H uvnitř a I vně', 80, 34, 'motorky', 'auta', g => g.ln(PPF, 'cd') + PPF.map(([x, y], i) => g.dot(x, y, 'ABCDEFG'[i], 6, -6)).join('') + g.dot(30, 10, 'H', 6, -6, 'ptg') + g.dot(65, 25, 'I', 6, -6, 'ptg')) + '<ul><li><b>Na křivce</b> (B, E): výrobně efektivní.</li><li><b>Uvnitř</b> (H): neefektivní, zdroje se nevyužívají naplno.</li><li><b>Vně</b> (I): při daných zdrojích nedostupné.</li></ul>', check: 'q3' },
        { h: 'Náklady obětované příležitosti na hranici', html: '<p>Při přesunu po hranici získáš víc jednoho výrobku, ale musíš se vzdát části druhého.</p><p><b>Řešený příklad z přednášky:</b> z bodu B (30 motorek, 25 aut) do bodu C (50 motorek, 20 aut).</p><ul><li>Přínos: 50 − 30 = <b>20 motorek</b>.</li><li>Náklady obětované příležitosti: 25 − 20 = <b>5 aut</b>.</li><li>Na jednu motorku: 5 / 20 = <b>0,25 auta</b>.</li></ul><p>Čím víc motorek vyrábíš, tím víc aut tě každá další stojí. Proto je hranice vypouklá.</p>', check: 'q5' },
        { h: 'Ekonomický růst', html: '<p>Hranice se posune <b>ven</b>, když se zapojí víc výrobních faktorů (další pracovníci, další stroje, ty zvýší produktivitu) nebo se zlepší <b>technologie</b>. Když se technologie zlepší jen u aut, posune se hranice jen na ose aut.</p>' + gr('Původní hranice produkčních možností a nová hranice posunutá ven po zapojení dalších pracovníků', 90, 55, 'motorky', 'auta', g => g.ln(PPF, 'cd') + g.ln([[0, 50], [15, 48.5], [30, 45], [50, 37], [65, 25], [75, 16], [85, 0]], 'cx') + g.tx(8, 19, 'původní') + g.tx(44, 45, 'po růstu')) + '<p>Volba mezi spotřebními a kapitálovými statky dnes rozhoduje o tom, jak rychle hranice poroste v budoucnu.</p>', check: 'q21' }
      ],
      quiz: ['q1', 'q2', 'q4', 'q6', 'q14']
    },
    {
      id: 'l5', topic: 'p3', title: 'Peníze a ekonomický koloběh', min: 6,
      warm: ['p3.q3', 'p3.q1'],
      steps: [
        { h: 'Od barteru k penězům', html: '<p><b>Barter</b> je směna výrobku za výrobek. Vyžaduje <b>oboustrannou shodu potřeb</b>: oba musí chtít přesně to, co nabízí druhý. Proto vznikl univerzální prostředek směny.</p><p><b>Peníze</b> jsou prostředek směny, který subjekty všeobecně přijímají. Mají tři funkce: <b>prostředek směny</b>, <b>prostředek oceňování</b> (statky jde srovnat) a <b>uchovatel hodnoty</b> (použiješ je i později).</p>', check: 'q16' },
        { h: 'Vlastnosti a vývoj peněz', html: '<p>Nejdřív sloužilo jako peníze zboží: plátno, mušle, čaj, sůl, dobytek. Pak drahé kovy. Peníze mají mít čtyři vlastnosti: <b>dělitelnost, trvanlivost, stejnorodost a velkou hodnotu</b>.</p><p>Lidé ukládali zlato u zlatníků a dostávali papírová potvrzení, ze kterých se staly <b>papírové peníze</b>. Pak je začala vydávat centrální autorita se směnitelností za zlato: <b>zlatý standard 1871–1914</b> a <b>brettonwoodský systém 1944–1971</b>.</p><p>Od roku <b>1971</b> jsou všechny měny <b>fiat</b>: nekryje je žádné aktivum a přijímají se, protože to stanoví zákon.</p>', check: 'q8' },
        { h: 'Peníze v Česku', html: '<p><b>Oběživo</b> (bankovky a mince) vydává jen <b>ČNB</b>. <b>Bezhotovostní peníze</b> jsou záznamy na účtech v bankách a vydává je ČNB i <b>komerční banky</b>.</p><p>Podíl hotovosti na peněžní zásobě byl v roce 2022 v ČR <b>13,8 %</b>, v USA 11,7 %, v eurozóně 5,8 %, ve Velké Británii 3,9 % a ve Švédsku 1,2 %.</p>', check: 'q10' },
        { h: 'Ekonomický koloběh', html: '<p>Koloběh je zjednodušený pohled na vztahy mezi subjekty. <b>Dvousektorová</b> ekonomika má domácnosti a firmy, <b>třísektorová</b> ještě stát. Potkávají se na dvou trzích: <b>trhu výrobků a služeb</b> a <b>trhu výrobních faktorů</b>.</p>' + tbl(['Kdo → komu', 'Reálný tok', 'Peněžní tok'], [['domácnosti → firmy', 'práce, půda, kapitál', 'výdaje na výrobky'], ['firmy → domácnosti', 'výrobky a služby', 'mzdy, renty, úroky, zisky'], ['stát → firmy', '', 'dotace, státní výdaje'], ['stát → domácnosti', '', 'transfery, mzdy'], ['firmy, domácnosti → stát', '', 'daně']]) + '<p>Na obou trzích jdou reálné a peněžní toky proti sobě. Daně, transfery a dotace jsou jen peněžní toky.</p>', check: 'q19' }
      ],
      quiz: ['q7', 'q9', 'q11', 'q12', 'q18', 'q20']
    },
    {
      id: 'l6', topic: 'p4', title: 'Trh: cena, konkurence, poptávka a nabídka', min: 8,
      warm: ['p3.q5', 'p2.q6'],
      steps: [
        { h: 'Tržní mechanismus a cena', html: '<p><b>Tržní mechanismus</b> je vzájemné ovlivňování poptávky, nabídky a ceny. Firmy (nabídka) maximalizují <b>zisk</b>, domácnosti (poptávka) maximalizují <b>užitek</b>.</p><p>Cena má čtyři funkce: <b>informační</b> (dává informace), <b>motivační</b> (motivuje nebo demotivuje), <b>alokační</b> (výrobci přesouvají výrobní faktory) a <b>distribuční</b> (rozděluje statky mezi spotřebitele).</p>', check: 'q11' },
        { h: 'Konkurence', html: '<p><b>Konkurence</b> je soutěž, ve které se střetávají zpravidla protikladné zájmy. Probíhá napříč trhem, na straně poptávky i na straně nabídky.</p><p>Na straně nabídky je <b>cenová</b> a <b>necenová</b>. Podle tržní struktury rozlišujeme <b>dokonalou konkurenci</b> a <b>nedokonalou</b>: monopol, oligopol a monopolistickou konkurenci.</p>', check: 'q9' },
        { h: 'Poptávka a zákon poptávky', html: '<p><b>Poptávka</b> je vztah mezi cenou a množstvím, které spotřebitelé chtějí a jsou schopni koupit. <b>Tržní poptávka</b> je součet individuálních (Marie + Jolana).</p><p><b>Zákon poptávky:</b> ceteris paribus s růstem ceny poptávané množství klesá.</p>' + gr('Poptávka po zmrzlině, pohyb z bodu A při 18 Kč do bodu B při 24 Kč', 20, 40, 'množství (Q)', 'cena (P)', g => g.ln([[0, 36], [18, 0]], 'cd') + g.gd(9, 18) + g.gd(6, 24) + g.dot(9, 18, 'A') + g.dot(6, 24, 'B') + g.tx(17, 6, 'D', 'b')) + '<p><b>Příklad z přednášky:</b> zmrzlina zdraží z 18 na 24 Kč, poptávané množství klesne z 9 na 6. Je to <b>pohyb po křivce</b>, ne její posun.</p>', check: 'q4' },
        { h: 'Co posouvá poptávku', html: '<p>Celou křivku posune pět faktorů: <b>ceny příbuzných statků, důchody, preference, očekávání a počet spotřebitelů</b>.</p><ul><li><b>Substitut</b> zdraží (sorbet) → poptávka po zmrzlině <b>roste</b>.</li><li><b>Komplement</b> zlevní (poleva) → poptávka <b>roste</b>.</li><li>Důchod roste → u <b>normálního</b> statku poptávka roste, u <b>méněcenného</b> klesá.</li><li>Víc turistů v létě → poptávka roste.</li></ul>', check: 'q1' },
        { h: 'Nabídka', html: '<p><b>Nabídka</b> je vztah mezi cenou a množstvím, které prodávající chtějí a jsou schopni prodat. <b>Zákon nabídky:</b> s růstem ceny nabízené množství roste.</p><p>Křivku nabídky posouvají <b>ceny vstupů</b> (smetana zdraží → nabídka klesne), <b>technologie</b> (lepší stroje → nabídka roste), <b>očekávání</b> výrobců a <b>počet prodejců</b>.</p>', check: 'q13' }
      ],
      quiz: ['q2', 'q3', 'q5', 'q12', 'q14']
    },
    {
      id: 'l7', topic: 'p4', title: 'Tržní rovnováha a její změny', min: 7,
      warm: ['p4.q4', 'p4.q1'],
      steps: [
        { h: 'Rovnováha', html: '<p><b>Tržní rovnováha</b> nastane, když se poptávka rovná nabídce. <b>Rovnovážná cena</b> je ta, při které se poptávané množství rovná nabízenému.</p>' + tbl(['Cena (Kč)', 'Poptávané', 'Nabízené'], ZP.map((p, i) => [p, 18 - 3 * i, 3 * i])) + gr('Rovnováha na trhu se zmrzlinou v bodě E při ceně 18 Kč a množství 9', 20, 40, 'množství (Q)', 'cena (P)', g => g.ln([[0, 36], [18, 0]], 'cd') + g.ln([[0, 0], [18, 36]], 'cs') + g.gd(9, 18) + g.dot(9, 18, 'E', 8, 4) + g.tx(17, 6, 'D', 'b') + g.tx(17, 37, 'S', 'b')) + '<p>Rovnováha je při <b>18 Kč a 9 zmrzlinách</b>.</p>', check: 'q16' },
        { h: 'Přebytek a nedostatek', html: '<p>Když je cena <b>nad</b> rovnováhou, vzniká <b>přebytek</b> (převis nabídky). Při 30 Kč chtějí lidé 3 zmrzliny, firmy nabízejí 15: přebytek 12.</p><p>Když je cena <b>pod</b> rovnováhou, vzniká <b>nedostatek</b> (převis poptávky). Při 6 Kč chtějí lidé 15, firmy nabízejí 3: nedostatek 12.</p>', check: 'q6' },
        { h: 'Změna rovnováhy ve třech krocích', html: '<p>1) Ovlivní změna poptávku, nebo nabídku? 2) Posune se křivka doprava, nebo doleva? 3) Co to udělá s rovnovážnou cenou a množstvím?</p><p><b>Příklad z přednášky:</b> lidé začnou mít zmrzlinu radši než sorbet. 1) Poptávka. 2) Doprava. 3) Cena i množství vzrostou.</p>' + gr('Posun poptávky doprava z D0 na D1, rovnováha se přesune z E0 do E1', 26, 40, 'množství (Q)', 'cena (P)', g => g.ln([[0, 36], [18, 0]], 'cd') + g.ln([[6, 36], [24, 0]], 'cx') + g.ln([[0, 0], [20, 40]], 'cs') + g.dot(9, 18, 'E0', 8, 10) + g.dot(12, 24, 'E1', 8, -2) + g.tx(16, 9, 'D0', 'b') + g.tx(23, 8, 'D1', 'b') + g.tx(19, 37, 'S', 'b')) + '<p>Růst poptávky → <b>↑P a ↑Q</b>. Pokles poptávky → ↓P a ↓Q.</p>', check: 'q7' },
        { h: 'Posun nabídky', html: '<p><b>Příklad z přednášky:</b> zlevní mléko. 1) Nabídka. 2) Doprava (vyrábět je levnější). 3) Cena klesne, množství vzroste.</p>' + tbl(['Změna', 'Cena', 'Množství'], [['růst poptávky', '↑', '↑'], ['pokles poptávky', '↓', '↓'], ['růst nabídky', '↓', '↑'], ['pokles nabídky', '↑', '↓']]), check: 'q8' },
        { h: 'Když se posunou obě křivky', html: '<p>Když se poptávka i nabídka posunou <b>stejným směrem</b>, je jisté jen <b>množství</b>. Cena záleží na tom, která křivka se posune víc.</p><ul><li>Obě klesnou (zlevní nanuky a ubude výrobců) → množství <b>klesne</b>, cena ?</li><li>Obě vzrostou → množství <b>vzroste</b>, cena ?</li></ul>', check: 'q17' }
      ],
      quiz: ['q15', 'q18', 'q10', 'q20', 'q19']
    }
  ],
  gens: [

    {
      id: 'mc', topic: 'p2', title: 'Mezní náklady z tabulky',
      make(r) {
        const q0 = r.int(1, 6), tc0 = r.int(15, 40) * 10 + r.int(40, 90) * q0, tc1 = tc0 + r.int(2, 9) * 10 + r.int(0, 9);
        return {
          q: `Celkové náklady jsou při výrobě ${q0} ks <b>${KR.num(tc0)} Kč</b> a při výrobě ${q0 + 1} ks <b>${KR.num(tc1)} Kč</b>. Jaké jsou mezní náklady ${q0 + 1}. kusu?`,
          a: tc1 - tc0, unit: 'Kč',
          steps: [`MC = ΔTC / ΔQ`, `ΔTC = ${KR.num(tc1)} − ${KR.num(tc0)} = ${KR.num(tc1 - tc0)} Kč`, `ΔQ = 1 ks, takže MC = <b>${KR.num(tc1 - tc0)} Kč</b>`]
        };
      }
    },
    {
      id: 'smer', topic: 'p2', title: 'Směrnice přímky',
      make(r) {
        const a = r.int(2, 30) * 10, b = r.pick([0.2, 0.25, 0.5, 1.5, 2, 3, 4]), x1 = r.int(1, 4) * 100, x2 = x1 + r.int(1, 3) * 100;
        const y1 = a + b * x1, y2 = a + b * x2;
        return {
          q: `Přímka prochází body [${KR.num(x1)}; ${KR.num(y1)}] a [${KR.num(x2)}; ${KR.num(y2)}]. Jaká je její směrnice β?`,
          a: b, dec: 2,
          steps: [`β = Δy / Δx`, `Δy = ${KR.num(y2)} − ${KR.num(y1)} = ${KR.num(y2 - y1)}`, `Δx = ${KR.num(x2)} − ${KR.num(x1)} = ${KR.num(x2 - x1)}`, `β = ${KR.num(y2 - y1)} / ${KR.num(x2 - x1)} = <b>${KR.num(b)}</b>`]
        };
      }
    },
    {
      id: 'nop', topic: 'p3', title: 'Náklady obětované příležitosti na hranici produkčních možností',
      make(r) {
        const cB = r.int(20, 40), dA = r.int(2, 8), mB = r.int(3, 8) * 10, dM = r.pick([5, 10, 20, 25]);
        const cC = cB - dA, mC = mB + dM, v = dA / dM;
        return {
          q: `V bodě B se vyrábí ${cB} aut a ${mB} motorek, v bodě C ${cC} aut a ${mC} motorek. Kolik aut stojí při přesunu z B do C <b>jedna</b> motorka navíc?`,
          a: v, dec: 2, unit: 'auta',
          steps: [`Přínos: ${mC} − ${mB} = ${dM} motorek`, `Náklady obětované příležitosti: ${cB} − ${cC} = ${dA} aut`, `Na jednu motorku: ${dA} / ${dM} = <b>${KR.num(Math.round(v * 100) / 100)}</b> auta`]
        };
      }
    },
    {
      id: 'ap', topic: 'p2', title: 'Průměrný produkt',
      make(r) {
        const L = r.int(2, 8), ap = r.int(80, 160) / 10, tp = Math.round(ap * L * 10) / 10;
        return {
          q: `Celkový produkt ${L} pracovníků je <b>${KR.num(tp)}</b> jednotek. Jaký je průměrný produkt jednoho pracovníka?`,
          a: tp / L, dec: 1,
          steps: [`AP = TP / L`, `AP = ${KR.num(tp)} / ${L}`, `AP = <b>${KR.num(Math.round(tp / L * 10) / 10)}</b>`]
        };
      }
    },
    {
      id: 'trh', topic: 'p4', title: 'Rovnováha, přebytek a nedostatek z tabulky',
      make(r) {
        // lineární poptávka a nabídka, rovnováha na jednom z prostředních řádků
        const st = r.pick([5, 6, 8, 10]), k = r.int(2, 4), n = r.int(2, 5), d = r.int(2, 5), rows = [];
        for (let i = 0; i <= 6; i++) rows.push([i * st, n * k + d * (k - i), n * i]);
        const ok = rows.filter(x => x[1] >= 0), eq = ok[k];
        if (r.int(0, 1)) {
          return {
            q: `Tabulka trhu:${tbl(['Cena (Kč)', 'Poptávané', 'Nabízené'], ok)}Jaká je rovnovážná cena?`,
            a: eq[0], unit: 'Kč',
            steps: [`Rovnováha je tam, kde se poptávané množství rovná nabízenému.`, `Při ceně ${KR.num(eq[0])} Kč je poptávané i nabízené množství ${KR.num(eq[1])}.`, `Rovnovážná cena je <b>${KR.num(eq[0])} Kč</b>.`]
          };
        }
        const j = r.pick(ok.map((x, i) => i).filter(i => i !== k)), x = ok[j], gap = Math.abs(x[2] - x[1]), over = x[2] > x[1];
        return {
          q: `Tabulka trhu:${tbl(['Cena (Kč)', 'Poptávané', 'Nabízené'], ok)}Kolik kusů činí ${over ? 'přebytek' : 'nedostatek'} při ceně ${KR.num(x[0])} Kč?`,
          a: gap, unit: 'ks',
          steps: [`Při ceně ${KR.num(x[0])} Kč: poptávané ${KR.num(x[1])}, nabízené ${KR.num(x[2])}.`, `Cena je ${over ? 'nad rovnováhou, nabízí se víc, než se poptává' : 'pod rovnováhou, poptává se víc, než se nabízí'}.`, `${over ? 'Přebytek' : 'Nedostatek'} = ${over ? `${KR.num(x[2])} − ${KR.num(x[1])}` : `${KR.num(x[1])} − ${KR.num(x[2])}`} = <b>${KR.num(gap)} ks</b>`]
        };
      }
    }
  ]
});
})();
