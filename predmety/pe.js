/* Podniková ekonomika I, podle přednášek 1–4: podnik, majetek a kapitál, výrobní činnost, zásoby (dalších 5 zatím chybí). */
KR.predmet({
  id: 'pe', name: 'Podniková ekonomika I', short: 'PE', icon: 'tovarna',
  lead: 'Podnik a právní formy, majetek a kapitál, odpisy, výrobní kapacita a zásoby. Podle přednášek ZS 2026.',
  exams: [],
  // Memes: k = neano | mozek | nikdo | tlacitka | kdyz, l = texty panelů, why = co si z toho zapamatovat
  memes: [
    { topic: 'p1', k: 'tlacitka', l: ['s.r.o. za 1 Kč', 'a.s. za 2 miliony'], cap: 'Zakládám firmu', why: 'Minimální základní kapitál: s.r.o. 1 Kč, a.s. 2 mil. Kč nebo 80 tis. EUR. Obě stačí založit jediné osobě.' },
    { topic: 'p1', k: 'nikdo', l: ['Akcionář, když akciovka nezaplatí dluhy: „Ručit? Já? Neručím. Nanejvýš přijdu o hodnotu akcií.“'], why: 'Akcionář za závazky a.s. neručí. Celým majetkem ručí společníci v.o.s. a komplementář v k.s.' },
    { topic: 'p1', k: 'neano', l: ['Komanditista řídí komanditní společnost', 'Řídí komplementář, komanditista jen vloží vklad'], why: 'Komplementář ručí celým majetkem a řídí, komanditista ručí do výše nesplaceného vkladu.' },
    { topic: 'p2', k: 'kdyz', l: ['Pozemek se používáním neopotřebí', 'Odpisy: „Tak to se tu nevidíme.“'], why: 'Pozemky, umělecká díla ani zlato se neodepisují, protože se používáním neopotřebují.' },
    { topic: 'p2', k: 'neano', l: ['Aktiva jsou o kousek větší než pasiva', 'Aktiva = pasiva. Vždycky. Do koruny.'], why: 'Bilanční rovnice: každý majetek (aktiva) má svůj zdroj krytí (pasiva).' },
    { topic: 'p2', k: 'mozek', l: ['Stroj za 1 milion', 'Odpis 200 tisíc ročně', 'Oprávky 400 tisíc po 2 letech', 'Zůstatek 600 tisíc'], why: 'Roční odpis (každý rok stejný) = vstupní cena / doba použitelnosti. Zůstatková hodnota = vstupní cena − oprávky.' },
    { topic: 'p3', k: 'kdyz', l: ['Linka za sebou: kapacitu určuje hlavní výrobní článek', 'Úzký profil: „Já na tu čáru nedosáhnu.“'], why: 'Při sériovém řazení se kapacita linky stanoví na úrovni hlavního výrobního článku. Úzký profil je článek s nižší kapacitou, než má linka. Vedle sebe se kapacity sčítají.' },
    { topic: 'p3', k: 'tlacitka', l: ['Pracovat déle', 'Pracovat rychleji'], cap: 'Chci líp využít kapacitu', why: 'Déle = extenzivně (větší využití časového fondu), rychleji = intenzivně (větší využití výkonnosti). k_c = (T_s / T_p) · (V_s / V_p).' },
    { topic: 'p4', k: 'mozek', l: ['Nějaké zásoby', 'Obratová zásoba', 'Obratová + pojistná', 'Časová norma c/2 + p + t'], why: 'Obratová zásoba klesá z plné výše k nule, v průměru je jí polovina. Přidává se pojistná a technologická.' }
  ],
  topics: [
    {
      id: 'p1', label: '1. Úvod do podnikové ekonomiky',
      terms: [
        ['Podnikatel (§ 420 OZ)', 'Kdo samostatně vykonává na vlastní účet a odpovědnost výdělečnou činnost živnostenským nebo obdobným způsobem se záměrem činit tak soustavně za účelem dosažení zisku.', 't1'],
        ['Obchodní závod (§ 502 OZ)', 'Organizovaný soubor jmění, který podnikatel vytvořil a který z jeho vůle slouží k provozování jeho činnosti.', 't2'],
        ['Živnost', 'Soustavná činnost provozovaná samostatně, vlastním jménem, na vlastní odpovědnost, za účelem zisku a za podmínek živnostenského zákona.', 't3'],
        ['Všeobecné podmínky provozování živnosti', 'Plná svéprávnost a bezúhonnost.', 't4'],
        ['Stakeholders (zájmové skupiny)', 'Skupiny se zájmem na podniku: vlastníci, manažeři, zaměstnanci, zákazníci, dodavatelé, investoři, stát a obce.', 't5'],
        ['Komplementář', 'Společník komanditní společnosti, který ručí za její závazky celým svým majetkem a řídí ji.', 't6'],
        ['Komanditista', 'Společník komanditní společnosti, který ručí jen do výše svého nesplaceného vkladu.', 't7'],
        ['Družstvo', 'Společenství neuzavřeného počtu osob (nejméně 3) založené k vzájemné podpoře členů, třetích osob nebo k podnikání.', 't8'],
        ['Životní cyklus podniku', 'Založení a vznik → růst → stabilizace → krize → zánik.', 't9']
      ],
      qs: [
        ['Kolik zakladatelů nejméně potřebuje s.r.o.?', '1', ['2', '3', '5'], 's.r.o. i a.s. stačí 1 osoba. v.o.s. a k.s. potřebují aspoň 2, družstvo 3.', 'q1'],
        ['Jaký je minimální základní kapitál akciové společnosti?', '2 mil. Kč (80 tis. EUR)', ['200 tis. Kč (8 tis. EUR)', '1 mil. Kč (40 tis. EUR)', 'Zákon ho nestanovuje'], 'Minimum a.s. je 2 mil. Kč, nebo 80 tis. EUR. s.r.o. má minimum 1 Kč, u v.o.s., k.s. a družstva minimum stanovené není.', 'q2'],
        ['Kdo ve veřejné obchodní společnosti ručí za závazky?', 'Všichni společníci celým majetkem', ['Jen jednatelé, do výše vkladu', 'Nikdo, ručí jen společnost sama', 'Jen komplementáři, celým majetkem'], 'v.o.s. je osobní společnost: společníci ručí společně a nerozdílně celým svým majetkem.', 'q3'],
        ['Jak ručí akcionář za závazky akciové společnosti?', 'Neručí', ['Celým svým majetkem', 'Do výše nesplaceného vkladu', 'Společně a nerozdílně s představenstvem'], 'Riziko akcionáře je jen ztráta hodnoty akcií.', 'q4'],
        ['Kdo řídí s.r.o.?', 'jednatelé', ['představenstvo', 'komplementáři', 'každý společník'], 'a.s. řídí představenstvo, k.s. komplementáři, v.o.s. každý společník.', 'q5'],
        ['Kolik členů nejméně potřebuje družstvo?', '3', ['1', '2', '5'], 'Družstvo musí mít nejméně 3 členy. Každý z nich se podílí stejně vysokým základním členským vkladem.', 'q6'],
        ['Kterou činnost živnostenský zákon nepovažuje za živnost?', 'Advokacie', ['Kadeřnictví', 'Maloobchod', 'Truhlářství'], 'Podle zvláštních předpisů podnikají třeba lékaři, advokáti, notáři, auditoři nebo daňoví poradci.', 'q7'],
        ['Mezi ohlašovací živnosti patří řemeslné, vázané a…', 'volné', ['koncesované', 'zvláštní', 'státní'], 'Koncesované stojí mimo ohlašovací, potřebují koncesi.', 'q8'],
        ['Čím vzniká obchodní společnost?', 'Zápisem do obchodního rejstříku', ['Podpisem společenské smlouvy', 'Splacením základního kapitálu', 'Ohlášením živnosti'], 'Společenská smlouva ji vymezuje, vzniká ale až zápisem.', 'q9'],
        ['Komanditista ručí za závazky k.s. …', 'do výše nesplaceného vkladu', ['celým svým osobním majetkem', 'neručí, ručí jen společnost', 'do výše splaceného vkladu'], 'Komanditista ručí do výše svého nesplaceného vkladu, komplementář celým majetkem.', 'q10'],
        ['Která společnost je kapitálová?', 's.r.o.', ['v.o.s.', 'k.s.', 'družstvo'], 'Kapitálové jsou s.r.o. a a.s., osobní v.o.s. a k.s.', 'q11']
      ],
      tips: [
        '<b>Osobní vs. kapitálové:</b> v osobních ručí celým majetkem všichni společníci v.o.s. a komplementář k.s. (komanditista jen do výše nesplaceného vkladu), v kapitálových (s.r.o., a.s.) se ručí jen omezeně, nebo vůbec.',
        '<b>Minimum zakladatelů:</b> 1 (s.r.o., a.s.), 2 (v.o.s., k.s.), 3 (družstvo).',
        '<b>Kdo řídí:</b> v.o.s. každý, k.s. komplementáři, s.r.o. jednatelé, a.s. představenstvo.'
      ]
    },
    {
      id: 'p2', label: '2. Majetková a kapitálová výstavba',
      terms: [
        ['Aktiva', 'Majetek podniku, tedy co podnik vlastní.', 't1'],
        ['Pasiva', 'Finanční zdroje (kapitál), tedy komu majetek patří: vlastní a cizí zdroje.', 't2'],
        ['Rozvaha', 'Přehled o majetku podniku a jeho finančním krytí k určitému datu.', 't3'],
        ['Bilanční rovnice', 'Součet aktiv se rovná součtu pasiv.', 't4'],
        ['Účetní závěrka', 'Rozvaha, výkaz zisku a ztráty a příloha (u vybraných jednotek i přehled o peněžních tocích a o změnách vlastního kapitálu).', 't5'],
        ['Dlouhodobý majetek', 'Stálá aktiva s dobou použitelnosti přes 1 rok: hmotný, nehmotný a finanční.', 't6'],
        ['Odpisy', 'Peněžně vyjádřené opotřebení dlouhodobého majetku za určité období.', 't7'],
        ['Oprávky', 'Součet (kumulace) dosavadních ročních odpisů majetku.', 't8'],
        ['Morální opotřebení', 'Zastarání majetku vlivem technického pokroku, i když fyzicky slouží.', 't9'],
        ['Pohledávka', 'Nárok věřitele na úhradu peněžní částky od dlužníka v určené lhůtě.', 't10'],
        ['Reprodukční pořizovací cena', 'Cena, za kterou by byl majetek pořízen v době, kdy se o něm účtuje.', 't11'],
        ['Účetní a daňové odpisy', 'Účetní odpisy mají funkci nákladovou, střádací a oceňovací a jsou výkonové, nebo časové. Daňové odpisy slouží ke snížení základu daně z příjmu a jsou rovnoměrné, nebo zrychlené.', 't12'],
        ['Likvidnost', 'Schopnost daného majetku přeměnit se rychle a bez větších ztrát na peněžní prostředky. Od nejlikvidnějšího: peníze, krátkodobý finanční majetek, pohledávky, zásoby, dlouhodobý majetek.', 't13'],
        ['Likvidita', 'Schopnost podniku dostát svým finančním závazkům v blízké budoucnosti.', 't14'],
        ['Platební neschopnost (insolvence)', 'Neschopnost podniku platit dluhy ve stanovených termínech splatnosti: splatné dluhy převyšují realizovatelnou hodnotu aktiv.', 't15'],
        ['Ážio', 'Rozdíl mezi emisním kurzem akcie (podílu) a její nominální hodnotou. Patří do kapitálových fondů.', 't16'],
        ['Finanční páka', 'Když je výnosnost celkového kapitálu vyšší než náklady na cizí kapitál (úrok), cizí kapitál zvedá výnosnost vlastního kapitálu.', 't17'],
        ['Daňový štít', 'Když podnik dosahuje zisku, úroky snižují základ daně, a tím jeho daňové zatížení.', 't18'],
        ['WACC', 'Vážený průměr nákladů kapitálu: WACC = VK/C · rE + CK/C · rD · (1 − t). Jeho minimum ukazuje optimální kapitálovou strukturu.', 't19']
      ],
      qs: [
        ['Co platí v rozvaze vždycky?', 'Aktiva se rovnají pasivům', ['Aktiva jsou větší než pasiva', 'Vlastní kapitál se rovná cizímu', 'Zisk se rovná tržbám'], 'Bilanční princip: každý majetek má svůj zdroj krytí.', 'q1'],
        ['Rozvaha zachycuje veličiny…', 'stavové (k určitému dni)', ['tokové (za období)', 'mezní (na jednotku)', 'průměrné (na kus)'], 'Tokové veličiny (výnosy, náklady) jsou ve výkazu zisku a ztráty.', 'q2'],
        ['Od jaké vstupní ceny je hmotný majetek dlouhodobý z pohledu zákona o daních z příjmů?', 'nad 80 000 Kč', ['nad 40 000 Kč', 'nad 60 000 Kč', 'nad 100 000 Kč'], 'Účetní limit si podnik určí sám vnitropodnikovou směrnicí.', 'q3'],
        ['Stroj za 1 mil. Kč se odepisuje 5 let, každý rok stejnou částkou. Jaká je jeho účetní zůstatková hodnota po 2 letech?', '600 000 Kč', ['400 000 Kč', '800 000 Kč', '200 000 Kč'], 'Roční odpis 200 000 Kč, oprávky po 2 letech 400 000 Kč, zůstatek 1 000 000 − 400 000.', 'q4'],
        ['Který majetek se neodepisuje?', 'Pozemek', ['Budova', 'Nákladní auto', 'Výrobní linka'], 'Neodepisují se také umělecká díla nebo zlato, protože se používáním neopotřebovávají.', 'q5'],
        ['Kam v rozvaze patří zásoby?', 'Oběžná aktiva', ['Dlouhodobý majetek', 'Vlastní kapitál', 'Cizí zdroje'], 'Oběžná aktiva: zásoby, pohledávky, krátkodobý finanční majetek, peněžní prostředky.', 'q6'],
        ['Kam v rozvaze patří základní kapitál?', 'Vlastní zdroje (pasiva)', ['Dlouhodobý majetek', 'Oběžná aktiva', 'Cizí zdroje'], 'Vlastní zdroje: základní kapitál, ážio a kapitálové fondy, fondy ze zisku, výsledek hospodaření.', 'q7'],
        ['Kterou funkci mají odpisy, když z tržeb „střádají“ peníze na obnovu majetku?', 'střádací', ['nákladovou', 'oceňovací', 'daňovou'], 'Nákladová: opotřebení jde do nákladů. Oceňovací: dávají zůstatkovou cenu.', 'q8'],
        ['Kam patří stravenky a dálniční známky v pokladně?', 'Peněžní prostředky (ceniny)', ['Zásoby (drobný materiál)', 'Pohledávky (vůči státu)', 'Dlouhodobý majetek (nehmotný)'], 'Ceniny jsou součástí peněžních prostředků v pokladně.', 'q9'],
        ['Zboží je…', 'nakoupené věci k dalšímu prodeji', ['výrobky z vlastní výroby', 'nedokončená vlastní výroba', 'materiál nakoupený pro výrobu'], 'Zboží podnik nakoupí a prodá v nezměněném stavu. Hotové výrobky vyrobil sám.', 'q10'],
        ['Podnik pořídí majetek vlastní činností. Jak se tomu říká?', 've vlastní režii', ['dodavatelsky', 'vkladem', 'bezúplatným nabytím'], 'Ve vlastní režii = vytvořením vlastní činností. Ocení se vlastními náklady.', 'q11'],
        ['Které odpisy slouží ke snížení základu daně z příjmu?', 'daňové', ['účetní', 'výkonové', 'oceňovací'], 'Účetní odpisy mají funkci nákladovou, střádací a oceňovací.', 'q12'],
        ['Daňové odpisy se podle přednášky dělí na rovnoměrné a…', 'zrychlené', ['výkonové', 'časové', 'oceňovací'], 'Daňové odpisy jsou rovnoměrné, nebo zrychlené. Výkonové a časové jsou druhy účetních odpisů, oceňovací je funkce účetních odpisů.', 'q13'],
        ['Který majetek je z nabízených nejméně likvidní?', 'Stroj', ['Pohledávka', 'Zásoba materiálu', 'Krátkodobé akcie'], 'Pořadí likvidnosti: peníze, krátkodobý finanční majetek, pohledávky, zásoby, dlouhodobý majetek.', 'q14'],
        ['Likvidita je schopnost…', 'podniku splácet závazky včas', ['majetku rychle se změnit v peníze', 'podniku dosahovat zisku', 'podniku vydávat nové akcie'], 'Přeměna majetku na peníze je likvidnost. Likvidita je schopnost dostát závazkům v blízké budoucnosti.', 'q15'],
        ['Podnik vydá 1 000 akcií s nominální hodnotou 2 000 Kč za emisní cenu 2 500 Kč, tržní cena je 3 000 Kč. Jaké je emisní ážio?', '500 000 Kč', ['1 000 000 Kč', '2 000 000 Kč', '2 500 000 Kč'], 'Ážio = (emisní cena − nominální hodnota) × počet akcií = 500 × 1 000. Tržní cena do ážia nevstupuje.', 'q16'],
        ['Kdy cizí kapitál zvedá výnosnost vlastního kapitálu?', 'Když výnosnost aktiv převyšuje úrok', ['Když úrok převyšuje výnosnost aktiv', 'Vždy, když si podnik půjčí', 'Jen když podnik neplatí daň'], 'To je finanční páka. Při úroku vyšším než výnosnost aktiv výnosnost vlastního kapitálu naopak klesne.', 'q17'],
        ['Úrok z úvěru je 10 %, daň z příjmu 19 %. Kolik podnik z úroku skutečně nese?', '8,1 %', ['10 %', '1,9 %', '11,9 %'], 'Daňový štít: rD · (1 − t) = 0,1 · 0,81 = 0,081. O 19 % úroku zaplatí podnik méně na dani.', 'q18'],
        ['Který kapitál je podle přednášky levnější?', 'cizí', ['vlastní', 'oba stejně', 'nelze je porovnat'], 'Cizí kapitál je levnější, ale s růstem zadluženosti roste úroková míra i požadovaná výnosnost vlastního kapitálu.', 'q19']
      ],
      tips: [
        '<b>Aktiva = co mám, pasiva = odkud to mám.</b> Obě strany jsou vždy stejně velké.',
        '<b>Roční odpis (každý rok stejný)</b> = vstupní cena / doba použitelnosti. Zůstatková hodnota = vstupní cena − oprávky.',
        '<b>Účetní odpisy</b> jsou výkonové, nebo časové, <b>daňové</b> rovnoměrné, nebo zrychlené.',
        '<b>Likvidnost má majetek, likviditu podnik.</b> Pořadí od nejlikvidnějšího: peníze → krátkodobý finanční majetek → pohledávky → zásoby → dlouhodobý majetek.',
        '<b>Páka funguje, jen když aktiva vydělají víc, než stojí úrok.</b> Štít: když je podnik v zisku, úrok snižuje daň, takže skutečně stojí rD · (1 − t).'
      ]
    },
    {
      id: 'p3', label: '3. Výrobní činnost podniku',
      terms: [
        ['Výrobní faktory (podnikohospodářsky)', 'Řídící práce, výkonná práce, dlouhodobý hmotný majetek a materiál.', 't1'],
        ['Efektivnost výroby', 'Výstup / vstup, tedy výrobky (služby) / výrobní faktory.', 't2'],
        ['Produktivita výrobních faktorů', 'Efektivnost využití výrobních faktorů ve výrobě: množství produkce / objem použitých vstupů.', 't3'],
        ['Parciální produktivita', 'Produktivita jednoho faktoru, např. práce: množství produkce / počet pracovníků nebo odpracované hodiny.', 't4'],
        ['Celková produktivita', 'Produktivita souhrnu faktorů: množství produkce / (práce + kapitál + energie + materiál).', 't5'],
        ['Výrobní kapacita', 'Maximální objem produkce, který může výrobní jednotka (podnik, závod, dílna, stroj) vyrobit za určitou dobu. Závisí na výkonu jednotky a době její činnosti.', 't6'],
        ['Kapacitní norma výrobnosti', 'Výkon výrobního zařízení: maximální množství výrobků za časovou jednotku při normované jakosti surovin a přesném dodržení technologického postupu.', 't7'],
        ['Výrobnost (V) a pracnost (t)', 'Výrobnost = výrobky za časovou jednotku, pracnost = čas na jednotku výrobku. V = 1 / t.', 't8'],
        ['Časový fond výrobního zařízení', 'Kalendářní T_k → nominální T_n (bez nepracovních dnů) → využitelný T_p (bez plánovaných prostojů).', 't9'],
        ['Úzký profil', 'Při sériovém řazení (za sebou) článek, jehož kapacita je nižší než výrobní kapacita linky. Tu podle přednášky určuje hlavní výrobní článek.', 't10'],
        ['Koeficient využití výrobní kapacity', 'k_c = q_s / q_p, tedy skutečný (plánovaný) objem výroby / výrobní kapacita. Rozkládá se na časové a výkonové využití: (T_s / T_p) · (V_s / V_p).', 't11'],
        ['Kapacitní rezerva', 'q_p − q_s, rozdíl mezi výrobní kapacitou a skutečným objemem výroby.', 't12']
      ],
      qs: [
        ['Výrobnost stroje je 6 ks za hodinu. Jaká je pracnost?', '10 min/ks', ['6 min/ks', '0,6 min/ks', '60 min/ks'], 'Pracnost = 1 / výrobnost = 1/6 h na kus = 60 / 6 = 10 min.', 'q1'],
        ['Jaká je výrobní kapacita při paralelním řazení strojů (vedle sebe)?', 'součet kapacit strojů', ['kapacita nejslabšího stroje', 'kapacita hlavního článku', 'průměr kapacit strojů'], 'Stroje vedle sebe vyrábějí současně, kapacity se sčítají. Hlavní výrobní článek rozhoduje při sériovém řazení.', 'q2'],
        ['Co určuje kapacitu linky při sériovém řazení strojů (za sebou)?', 'hlavní výrobní článek', ['nejvýkonnější stroj', 'součet kapacit strojů', 'průměr kapacit strojů'], 'Na slajdu vede čára kapacity linky po úrovni hlavního výrobního článku. Úzký profil je článek, jehož kapacita na ni nedosahuje. Součet kapacit platí pro řazení vedle sebe.', 'q3'],
        ['Výrobní kapacita je 5 000 ks, skutečně se vyrobilo 4 000 ks. Jaký je koeficient využití kapacity?', '0,8', ['1,25', '0,2', '1 000'], 'k_c = q_s / q_p = 4 000 / 5 000 = 0,8. Kapacitní rezerva je 1 000 ks.', 'q4'],
        ['Podnik zavede druhou směnu, stroje běží déle. Jak zvyšuje využití kapacity?', 'extenzivně', ['intenzivně', 'parciálně', 'nominálně'], 'Extenzivně = větší využití časového fondu, intenzivně = větší využití výkonnosti.', 'q5'],
        ['Stroj začne za hodinu vyrábět víc kusů. Jak se zvýšilo využití kapacity?', 'intenzivně', ['extenzivně', 'nominálně', 'kalendářně'], 'Intenzivní využití = větší využití výkonnosti výrobních jednotek, v k_c je to poměr V_s / V_p.', 'q6'],
        ['Stroj běží 270 dnů ve dvou osmihodinových směnách, údržba vezme 5 % provozní doby. Jaký je využitelný časový fond?', '4 104 h', ['4 320 h', '2 052 h', '6 480 h'], 'T_p = 270 · 2 · 8 · 0,95 = 4 104 h. Bez ztrát by to bylo 4 320 h.', 'q7'],
        ['Podle proporce výrobních faktorů jsou výroby kapitálově, pracovně a…', 'materiálově náročné', ['odbytově náročné', 'časově náročné', 'prostorově náročné'], 'Klasifikace výrob podle proporce faktorů: investičně (kapitálově), pracovně a materiálově náročné.', 'q8'],
        ['Čím se dělí množství produkce u celkové produktivity?', 'součtem všech vstupů', ['počtem pracovníků', 'odpracovanými hodinami', 'hodnotou tržeb'], 'Celková produktivita: produkce / (práce + kapitál + energie + materiál). Pracovníci a hodiny patří k parciální produktivitě práce.', 'q9'],
        ['Jaký je vztah pracnosti a výrobnosti?', 'převrácená hodnota', ['stejná hodnota', 'dvojnásobek', 'doplněk do jedné'], 'V = 1 / t. Pracnost (vstup / výstup) je obrácený ukazatel produktivity.', 'q10'],
        ['Plocha dílny je 600 m², výrobek potřebuje 20 m², využitelný fond je 4 000 h a výrobek trvá 50 h. Jaká je kapacita ploch?', '2 400 ks', ['1 200 ks', '4 800 ks', '120 000 ks'], 'q_p = M / m · T_p / t_k = 600 / 20 · 4 000 / 50 = 30 · 80.', 'q11'],
        ['Co patří do plánování výrobního procesu?', 'plánování výrobních kapacit', ['plánování sortimentní skladby', 'zajištění výrobních faktorů', 'plánování objemu výroby'], 'Výrobní proces: velikost výrobní dávky, lhůtové plánování, výrobní kapacity. Sortiment a objem patří do výrobního programu.', 'q12'],
        ['Podniková norma výrobnosti je 48 ks/h. Jaká je podniková norma pracnosti?', '1,25 min/ks', ['0,48 min/ks', '1,5 min/ks', '0,8 min/ks'], '1 / 48 h = 0,020833 h/ks = 60 / 48 min = 1,25 min/ks.', 'q13'],
        ['Jak se jmenuje kalendářní časový fond bez nepracovních dnů?', 'nominální časový fond', ['využitelný časový fond', 'skutečný časový fond', 'kapacitní časový fond'], 'Využitelný fond je až nominální fond bez plánovaných prostojů.', 'q14']
      ],
      tips: [
        '<b>V = 1 / t:</b> výrobnost a pracnost jsou převrácené hodnoty. 6 ks/h = 10 min/ks, 60 ks/h = 1 min/ks.',
        '<b>Kapacita = čas × výkon</b> (q<sub>p</sub> = T<sub>p</sub> · V<sub>p</sub>). Čas: kalendářní → nominální (bez volna) → využitelný (bez prostojů).',
        '<b>Extenzivně = déle, intenzivně = rychleji.</b> Stroje vedle sebe se sčítají, za sebou rozhoduje hlavní výrobní článek. Úzký profil na jeho úroveň nedosahuje.'
      ]
    },
    {
      id: 'p4', label: '4. Zásoby',
      terms: [
        ['Zásoby ve výrobě', 'Materiál nakoupený od dodavatelů, nedokončená výroba a hotové výrobky.', 't1'],
        ['Důvody pro vytváření zásob', 'Vyrovnávací, technologické a spekulativní.', 't2'],
        ['Náklady spojené se zásobami', 'Náklady na zajištění jedné objednávky, skladovací náklady a náklady nedostatku.', 't3'],
        ['Oceňování zásob', 'Při pořízení: pořizovací cena, vlastní náklady, reprodukční pořizovací cena. Při vyskladnění: skutečné pořizovací ceny, vážený aritmetický průměr, FIFO (LIFO).', 't4'],
        ['Výrobní spotřeba materiálu', 'S = Σ q_i · s_i, plánovaný objem výroby každého výrobku × norma spotřeby materiálu na něj.', 't5'],
        ['Potřeba dodávek', 'D = S + K − P: výrobní spotřeba + konečná zásoba − počáteční zásoba.', 't6'],
        ['Dodávkový cyklus (c)', 'Časový úsek mezi dvěma bezprostředně následujícími dodávkami.', 't7'],
        ['Obratová (běžná) zásoba', 'Zajišťuje očekávanou spotřebu v průběhu jednoho dodávkového cyklu. Na začátku cyklu Z_O = S_d · c, v průměru S_d · c/2.', 't8'],
        ['Pojistná zásoba', 'Kryje odchylky ve spotřebě, ve výši dodávek a v délce dodávkového cyklu. Z_P = S_d · p (p = počet dní pojistné zásoby).', 't9'],
        ['Technologická zásoba', 'Pokrývá dobu technologických či přírodních procesů před spotřebou (sušení, stárnutí, zrání). Z_T = S_d · t.', 't10'],
        ['Časová norma zásob', 'Počet dní, na které vydrží průměrná zásoba: c/2 + p + t. Průměrná zásoba = (c/2 + p + t) · S_d.', 't11'],
        ['Inventura', 'Zjištění skutečného stavu zásob. Při inventarizaci se pak skutečný stav porovná s účetním a vyčíslí se inventarizační rozdíly: manka, škody a přebytky.', 't12']
      ],
      qs: [
        ['Jak se počítá průměrná obratová zásoba?', 'S_d · c / 2', ['S_d · c', 'S_d · p', 'c / 2 + p + t'], 'Zásoba klesá rovnoměrně z S_d · c na nulu, v průměru je jí polovina. S_d · c je zásoba na začátku cyklu.', 'q1'],
        ['Denní spotřeba je 40 ks, dodávkový cyklus 20 dní. Jaká je obratová zásoba na začátku cyklu?', '800 ks', ['400 ks', '60 ks', '2 ks'], 'Z_O = S_d · c = 40 · 20. Průměrná obratová zásoba by byla 400 ks.', 'q2'],
        ['Co kryje pojistná zásoba?', 'odchylky ve spotřebě a dodávkách', ['spotřebu během běžného cyklu', 'dobu sušení či zrání', 'spekulaci na růst cen'], 'Běžnou spotřebu kryje obratová zásoba, sušení a zrání technologická.', 'q3'],
        ['Dřevo musí před zpracováním několik týdnů schnout. Jaká zásoba to pokrývá?', 'technologická', ['pojistná', 'obratová', 'spekulativní'], 'Z_T = S_d · t, kde t je doba trvání technologického procesu.', 'q4'],
        ['Výrobní spotřeba je 10 000 kg, chceš skončit se zásobou 1 500 kg a na začátku máš 2 000 kg. Kolik musí dodavatel dodat?', '9 500 kg', ['13 500 kg', '10 500 kg', '8 500 kg'], 'D = S + K − P = 10 000 + 1 500 − 2 000.', 'q5'],
        ['Dodávkový cyklus je 30 dní, pojistná zásoba na 5 dní, technologická na 3 dny. Jaká je časová norma zásob?', '23 dní', ['38 dní', '20 dní', '8 dní'], 'c/2 + p + t = 15 + 5 + 3. Obratová zásoba se počítá jen polovinou cyklu.', 'q6'],
        ['Denní spotřeba je 50 ks, c = 20 dní, p = 4 dny, t = 2 dny. Jaká je průměrná zásoba?', '800 ks', ['1 300 ks', '500 ks', '300 ks'], '(c/2 + p + t) · S_d = (10 + 4 + 2) · 50 = 16 · 50.', 'q7'],
        ['Důvody pro vytváření zásob jsou vyrovnávací, technologické a…', 'spekulativní', ['daňové', 'inventurní', 'odpisové'], 'Spekulativní zásoba se drží třeba kvůli očekávanému růstu cen.', 'q8'],
        ['Zásoba dojde a výroba se zastaví. Jaké náklady vzniknou?', 'náklady nedostatku', ['skladovací náklady', 'náklady na objednávku', 'odpisy zásob'], 'Náklady se zásobami: na zajištění jedné objednávky, skladovací a náklady nedostatku.', 'q9'],
        ['Která metoda oceňování při vyskladnění je na slajdu jen v závorce?', 'LIFO', ['FIFO', 'vážený aritmetický průměr', 'skutečné pořizovací ceny'], 'LIFO česká účetní pravidla nepovolují. Používá se FIFO, vážený průměr nebo skutečné ceny.', 'q10'],
        ['Jak se oceňuje nedokončená výroba, kterou podnik vytvořil sám?', 'vlastními náklady', ['pořizovací cenou', 'nominální hodnotou', 'prodejní cenou'], 'Pořizovací cenou se oceňuje nakoupený materiál, vlastními náklady zásoby z vlastní činnosti.', 'q11'],
        ['Co jsou inventarizační rozdíly?', 'manka, škody a přebytky', ['odpisy a oprávky', 'jen chybějící zásoby', 'rozdíly mezi FIFO a průměrem'], 'Inventura zjistí skutečný stav, ten se porovná s účetním a rozdíly se vyčíslí, zdůvodní a vypořádají.', 'q12'],
        ['Výrobek A: 200 ks po 3 kg materiálu, výrobek B: 100 ks po 5 kg. Jaká je výrobní spotřeba materiálu?', '1 100 kg', ['800 kg', '1 500 kg', '2 400 kg'], 'S = Σ q_i · s_i = 200 · 3 + 100 · 5 = 600 + 500.', 'q13'],
        ['Co je dodávkový cyklus?', 'doba mezi dvěma po sobě jdoucími dodávkami', ['doba od objednávky po zaplacení faktury', 'počet dodávek materiálu za jeden rok', 'doba, na kterou vydrží pojistná zásoba'], 'Počet dodávek za období je frekvence dodávek.', 'q14']
      ],
      tips: [
        '<b>Všechny tři zásoby = S<sub>d</sub> × dny:</b> obratová (na začátku cyklu) × c, pojistná × p, technologická × t.',
        '<b>Pila:</b> obratová zásoba klesá z plné výše k nule, v průměru je jí polovina. Proto časová norma = c/2 + p + t.',
        '<b>D = S + K − P:</b> dodat musíš, co spotřebuješ, plus co chceš mít na konci, minus co už na začátku máš.'
      ]
    }
  ],
  gens: [
    {
      id: 'odpis', topic: 'p2', title: 'Roční odpis a zůstatková hodnota',
      make(r) {
        const n = r.pick([3, 4, 5, 6, 8, 10]), y = r.int(10, 60) * n * 1000, k = r.int(1, n - 1), o = y / n;
        return {
          q: `Podnik koupil stroj za <b>${KR.num(y)} Kč</b>, doba použitelnosti je ${n} ${n < 5 ? 'roky' : 'let'} a každý rok se odepisuje stejnou částkou. Jaká je účetní zůstatková hodnota na konci ${k}. roku?`,
          a: y - k * o, unit: 'Kč',
          steps: [`Roční odpis = ${KR.num(y)} / ${n} = ${KR.num(o)} Kč`, `Oprávky po ${k} ${k === 1 ? 'roce' : 'letech'} = ${k} × ${KR.num(o)} = ${KR.num(k * o)} Kč`, `Zůstatková hodnota = ${KR.num(y)} − ${KR.num(k * o)} = <b>${KR.num(y - k * o)} Kč</b>`]
        };
      }
    },
    {
      id: 'azio', topic: 'p2', title: 'Emisní ážio',
      make(r) {
        const n = r.int(1, 20) * 500, nom = r.pick([100, 500, 1000, 2000, 5000]), em = nom + r.int(1, 10) * nom / 10, tr = em + r.int(1, 5) * nom / 10;
        const a = (em - nom) * n;
        return {
          q: `Základní kapitál je rozvržen do <b>${KR.num(n)}</b> akcií s nominální hodnotou <b>${KR.num(nom)} Kč</b>. Emisní cena akcie je <b>${KR.num(em)} Kč</b>, tržní cena ${KR.num(tr)} Kč. Jaké je emisní ážio?`,
          a, unit: 'Kč',
          steps: [`Ážio = (emisní cena − nominální hodnota) × počet akcií, tržní cena se nepoužije`, `Na jednu akcii: ${KR.num(em)} − ${KR.num(nom)} = ${KR.num(em - nom)} Kč`, `Ážio = ${KR.num(em - nom)} × ${KR.num(n)} = <b>${KR.num(a)} Kč</b>`]
        };
      }
    },
    {
      id: 'paka', topic: 'p2', title: 'Finanční páka a výnosnost vlastního kapitálu',
      make(r) {
        const vk = r.int(4, 10) * 1000, ck = r.int(2, 10) * 1000, ra = r.pick([12, 15, 20, 25]), i = r.pick([5, 8, 10, 12]);
        const ebit = (vk + ck) * ra / 100, u = ck * i / 100, z = ebit - u, d = z * 0.19, zc = z - d, roe = zc / vk * 100;
        return {
          q: `Podnik má vlastní kapitál <b>${KR.num(vk)} Kč</b> a cizí kapitál <b>${KR.num(ck)} Kč</b> s úrokem ${i} %. Zisk před započtením úroků je <b>${KR.num(ebit)} Kč</b>, daň z příjmu 19 %. Jaká je výnosnost vlastního kapitálu?`,
          a: roe, unit: '%', dec: 2,
          steps: [`Úroky = ${KR.num(ck)} × ${KR.num(i / 100)} = ${KR.num(u)} Kč`, `Zisk před zdaněním = ${KR.num(ebit)} − ${KR.num(u)} = ${KR.num(z)} Kč`, `Daň = 0,19 × ${KR.num(z)} = ${KR.num(d)} Kč, zisk po zdanění = ${KR.num(zc)} Kč`, `Výnosnost VK = ${KR.num(zc)} / ${KR.num(vk)} · 100 = <b>${KR.num(roe)} %</b>`]
        };
      }
    },
    {
      id: 'wacc', topic: 'p2', title: 'Vážený průměr nákladů kapitálu (WACC)',
      make(r) {
        const e = r.int(2, 8), dd = r.int(1, 6), c = e + dd, re = r.int(10, 20), rd = r.int(4, 10), w = e / c * re + dd / c * rd * 0.81;
        return {
          q: `Vlastní kapitál je <b>${e} mil. Kč</b> s náklady ${re} %, cizí kapitál <b>${dd} mil. Kč</b> s úrokem ${rd} %. Daň z příjmu je 19 %. Jaký je WACC?`,
          a: w, unit: '%', dec: 2,
          steps: [`WACC = VK/C · rE + CK/C · rD · (1 − t), C = ${e} + ${dd} = ${c} mil. Kč`, `Vlastní: ${e}/${c} · ${re} = ${KR.num(e / c * re)} %`, `Cizí: ${dd}/${c} · ${rd} · 0,81 = ${KR.num(dd / c * rd * 0.81)} %`, `WACC = <b>${KR.num(w)} %</b>`]
        };
      }
    },
    {
      id: 'pracnost', topic: 'p3', title: 'Pracnost z výrobnosti',
      make(r) {
        const v = r.pick([4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 25, 30, 40, 48, 50, 60, 75, 80, 100, 120]), t = 60 / v;
        return {
          q: `Norma výrobnosti stroje je <b>${KR.num(v)} ks/h</b>. Jaká je norma pracnosti v minutách na kus?`,
          a: t, unit: 'min/ks', dec: 2,
          steps: [`Pracnost = 1 / výrobnost = 1 / ${KR.num(v)} h/ks`, `V minutách: 60 / ${KR.num(v)} = <b>${KR.num(t)} min/ks</b>`]
        };
      }
    },
    {
      id: 'kapacita', topic: 'p3', title: 'Výrobní kapacita stroje',
      make(r) {
        const dny = r.int(48, 54) * 5, s = r.pick([1, 2, 3]), h = 8, z = r.pick([0, 5, 10]), v = r.int(4, 60);
        const tp = dny * s * h * (100 - z) / 100, q = tp * v;
        return {
          q: `Stroj je v provozu <b>${dny} pracovních dnů</b> v roce, ${s === 1 ? 'jednosměnně' : s === 2 ? 'dvousměnně' : 'třísměnně'} po 8 hodinách${z ? `, ztráty na opravy a údržbu jsou ${z} % provozní doby` : ' a ztráty času nejsou'}. Kapacitní norma výrobnosti je <b>${v} ks/h</b>. Jaká je roční výrobní kapacita?`,
          a: q, unit: 'ks',
          steps: [`Využitelný časový fond T<sub>p</sub> = ${dny} · ${s} · ${h}${z ? ` · ${KR.num((100 - z) / 100)}` : ''} = ${KR.num(tp)} h`, `q<sub>p</sub> = T<sub>p</sub> · V<sub>p</sub> = ${KR.num(tp)} · ${v}`, `q<sub>p</sub> = <b>${KR.num(q)} ks</b>`]
        };
      }
    },
    {
      id: 'vyuziti', topic: 'p3', title: 'Koeficient využití výrobní kapacity',
      make(r) {
        const tp = r.int(30, 45) * 100, vp = r.int(10, 30) * 2, ts = tp - r.int(1, 8) * 100, vs = vp - r.int(1, 5) * 2;
        const qp = tp * vp, qs = ts * vs, kc = qs / qp;
        return {
          q: `Využitelný časový fond stroje je <b>${KR.num(tp)} h</b> a kapacitní norma výrobnosti <b>${vp} ks/h</b>. Skutečně stroj běžel <b>${KR.num(ts)} h</b> s výkonem <b>${vs} ks/h</b>. Jaký je koeficient využití výrobní kapacity?`,
          a: kc, dec: 2,
          steps: [`q<sub>p</sub> = ${KR.num(tp)} · ${vp} = ${KR.num(qp)} ks, q<sub>s</sub> = ${KR.num(ts)} · ${vs} = ${KR.num(qs)} ks`, `Časové (extenzivní) využití T<sub>s</sub>/T<sub>p</sub> = ${KR.num(ts / tp)}, výkonové (intenzivní) V<sub>s</sub>/V<sub>p</sub> = ${KR.num(vs / vp)}`, `k<sub>c</sub> = q<sub>s</sub> / q<sub>p</sub> = <b>${KR.num(kc)}</b>, kapacitní rezerva ${KR.num(qp - qs)} ks`]
        };
      }
    },
    {
      id: 'plochy', topic: 'p3', title: 'Výrobní kapacita ploch',
      make(r) {
        const m = r.pick([5, 10, 12, 15, 20, 25, 40]), k = r.int(10, 60), M = m * k, tk = r.pick([2, 4, 5, 8, 10, 20, 25, 40, 50]), j = r.int(20, 100) * 2, tp = tk * j, q = k * j;
        return {
          q: `Výrobní plocha je <b>${KR.num(M)} m²</b>, jeden výrobek potřebuje <b>${m} m²</b>. Využitelný časový fond je <b>${KR.num(tp)} h</b> a kapacitní norma pracnosti výrobku <b>${tk} h</b>. Jaká je výrobní kapacita ploch?`,
          a: q, unit: 'ks',
          steps: [`q<sub>p</sub> = M / m · T<sub>p</sub> / t<sub>k</sub>`, `M / m = ${KR.num(M)} / ${m} = ${k} výrobků najednou, T<sub>p</sub> / t<sub>k</sub> = ${KR.num(tp)} / ${tk} = ${KR.num(j)} cyklů`, `q<sub>p</sub> = ${k} · ${KR.num(j)} = <b>${KR.num(q)} ks</b>`]
        };
      }
    },
    {
      id: 'spotreba', topic: 'p4', title: 'Výrobní spotřeba materiálu',
      make(r) {
        const n = r.int(2, 3), names = ['A', 'B', 'C'], it = [];
        for (let i = 0; i < n; i++) it.push([names[i], r.int(2, 40) * 50, r.int(1, 12)]);
        const S = it.reduce((x, y) => x + y[1] * y[2], 0);
        return {
          q: `Materiál se používá na výrobky ${it.map(x => `${x[0]} (plán <b>${KR.num(x[1])} ks</b>, norma ${x[2]} kg/ks)`).join(', ')}. Jaká je výrobní spotřeba materiálu za období?`,
          a: S, unit: 'kg',
          steps: [`S = Σ q<sub>i</sub> · s<sub>i</sub>`, it.map(x => `${KR.num(x[1])} · ${x[2]} = ${KR.num(x[1] * x[2])}`).join(', '), `S = <b>${KR.num(S)} kg</b>`]
        };
      }
    },
    {
      id: 'dodavky', topic: 'p4', title: 'Potřeba dodávek materiálu',
      make(r) {
        const S = r.int(20, 200) * 100, K = r.int(2, 40) * 100, P = r.int(2, 15) * 100, D = S + K - P;
        return {
          q: `Výrobní spotřeba materiálu v období je <b>${KR.num(S)} kg</b>. Na začátku období je na skladě <b>${KR.num(P)} kg</b>, na konci tam má zůstat <b>${KR.num(K)} kg</b>. Kolik materiálu je potřeba dodat?`,
          a: D, unit: 'kg',
          steps: [`D = S + K − P`, `D = ${KR.num(S)} + ${KR.num(K)} − ${KR.num(P)}`, `D = <b>${KR.num(D)} kg</b>`]
        };
      }
    },
    {
      id: 'prumzas', topic: 'p4', title: 'Průměrná zásoba a časová norma',
      make(r) {
        const sd = r.int(2, 40) * 5, c = r.int(3, 20) * 2, p = r.int(1, 10), t = r.pick([0, 0, 1, 2, 3, 5, 7]), n = c / 2 + p + t, z = n * sd;
        const dn = x => x === 1 ? 'den' : x < 5 ? 'dny' : 'dní';
        return {
          q: `Průměrná denní spotřeba je <b>${sd} ks</b>, dodávkový cyklus <b>${c} dní</b>, pojistná zásoba na <b>${p} ${dn(p)}</b>${t ? ` a technologická na <b>${t} ${dn(t)}</b>` : ', technologická zásoba se netvoří'}. Jaká je průměrná zásoba materiálu?`,
          a: z, unit: 'ks',
          steps: [`Časová norma = c/2 + p + t = ${c / 2} + ${p} + ${t} = ${n} ${dn(n)}`, `Průměrná zásoba = časová norma · S<sub>d</sub> = ${n} · ${sd}`, `= Z̄<sub>O</sub> + Z<sub>P</sub> + Z<sub>T</sub> = ${KR.num(c / 2 * sd)} + ${KR.num(p * sd)} + ${KR.num(t * sd)} = <b>${KR.num(z)} ks</b>`]
        };
      }
    }
  ],
  // Roztřiď: items = [text, index přihrádky]
  sorts: [
    {
      topic: 'p2', title: 'Aktiva, vlastní, nebo cizí zdroje?', bins: ['Aktiva', 'Vlastní zdroje', 'Cizí zdroje'],
      items: [
        ['Zásoby materiálu', 0], ['Pohledávky za odběrateli', 0], ['Peníze na bankovním účtu', 0], ['Licence na software', 0],
        ['Základní kapitál', 1], ['Emisní ážio', 1], ['Fondy ze zisku', 1], ['Výsledek hospodaření běžného roku', 1],
        ['Krátkodobý bankovní úvěr', 2], ['Nevyplacené mzdy', 2], ['Rezervy', 2], ['Nezaplacené daně', 2]
      ]
    },
    {
      topic: 'p2', title: 'Dlouhodobý, nebo oběžný majetek?', bins: ['Dlouhodobý majetek', 'Oběžná aktiva'],
      items: [
        ['Výrobní hala', 0], ['Pozemek pod továrnou', 0], ['Patent', 0], ['Podíl v jiném podniku', 0], ['Dlouhodobá půjčka poskytnutá podnikem', 0], ['Výrobní linka', 0],
        ['Materiál na skladě', 1], ['Hotové výrobky', 1], ['Zboží k dalšímu prodeji', 1], ['Pohledávka z vydané faktury', 1], ['Stravenky v pokladně', 1], ['Krátkodobé cenné papíry k obchodování', 1]
      ]
    },
    {
      topic: 'p1', title: 'Osobní, nebo kapitálová společnost?', bins: ['Osobní (v.o.s., k.s.)', 'Kapitálová (s.r.o., a.s.)'],
      items: [
        ['Veřejná obchodní společnost', 0], ['Komanditní společnost', 0], ['Komplementář', 0], ['Komanditista', 0],
        ['Společnost s ručením omezeným', 1], ['Akciová společnost', 1], ['Jednatelé', 1], ['Představenstvo', 1], ['Akcionář', 1], ['Základní kapitál aspoň 1 Kč', 1]
      ]
    },
    {
      topic: 'p3', title: 'Extenzivně, nebo intenzivně?', bins: ['Extenzivně (déle)', 'Intenzivně (rychleji)'],
      items: [
        ['Zavést druhou směnu', 0], ['Pracovat i o sobotách', 0], ['Zkrátit neplánované prostoje', 0], ['Méně poruch stroje', 0], ['Víc hodin z časového fondu', 0],
        ['Vyšší výkon stroje za hodinu', 1], ['Zrychlit takt linky', 1], ['Nižší pracnost jednoho kusu', 1], ['Seřídit stroj na vyšší výrobnost', 1], ['Víc kusů za hodinu provozu', 1]
      ]
    }
  ],
  // Najdi chybu: bad = index chybného kroku, další kroky počítají z chybné hodnoty
  errs: [
    {
      topic: 'p2', title: 'Zůstatková hodnota stroje',
      q: 'Stroj za 1 200 000 Kč má dobu použitelnosti 6 let a každý rok se odepisuje stejnou částkou. Jaká je jeho účetní zůstatková hodnota po 4 letech?',
      steps: ['Roční odpis = 1 200 000 / 4 = 300 000 Kč', 'Oprávky po 4 letech = 4 × 300 000 = 1 200 000 Kč', 'Zůstatková hodnota = 1 200 000 − 1 200 000 = 0 Kč'],
      bad: 0,
      fix: 'Roční odpis se dělí dobou použitelnosti, ne počtem uplynulých let: 1 200 000 / 6 = 200 000 Kč. Oprávky po 4 letech jsou 800 000 Kč a zůstatková hodnota 400 000 Kč.'
    },
    {
      topic: 'p3', title: 'Výrobní kapacita stroje',
      q: 'Stroj pracuje 250 dnů v roce ve dvou směnách po 8 hodinách, ztráty času na opravy a údržbu jsou 10 % provozní doby. Kapacitní norma výrobnosti je 30 ks/h. Jaká je roční výrobní kapacita?',
      steps: ['Provozní doba = 250 · 2 · 8 = 4 000 h', 'Využitelný časový fond = 4 000 h', 'Výrobní kapacita = 4 000 · 30 = 120 000 ks'],
      bad: 1,
      fix: 'Využitelný časový fond je bez plánovaných prostojů, ztráty 10 % se musí odečíst: 4 000 · 0,9 = 3 600 h. Kapacita je pak 3 600 · 30 = 108 000 ks.'
    },
    {
      topic: 'p3', title: 'Využití výrobní kapacity',
      q: 'Využitelný časový fond stroje je 4 000 h, kapacitní norma výrobnosti 50 ks/h. Skutečně stroj běžel 3 600 h s výkonem 45 ks/h. Jaký je koeficient využití výrobní kapacity?',
      steps: ['Výrobní kapacita = 4 000 · 50 = 200 000 ks', 'Skutečná výroba = 3 600 · 45 = 162 000 ks', 'Koeficient využití = 200 000 / 162 000 = 1,23', 'Kapacita je využitá na 123 %, stroj vyrábí nad svou kapacitu.'],
      bad: 2,
      fix: 'Koeficient je skutečná výroba děleno kapacitou: 162 000 / 200 000 = 0,81, tedy časové 0,9 krát výkonové 0,9. Kapacita je maximum, využití tedy vyjde 81 % a kapacitní rezerva 38 000 ks.'
    },
    {
      topic: 'p4', title: 'Průměrná zásoba',
      q: 'Denní spotřeba materiálu je 60 ks, dodávkový cyklus 20 dní, pojistná zásoba na 5 dní a technologická na 2 dny. Jaká je průměrná zásoba?',
      steps: ['Průměrná obratová zásoba = 60 · 20 = 1 200 ks', 'Pojistná zásoba = 60 · 5 = 300 ks', 'Technologická zásoba = 60 · 2 = 120 ks', 'Průměrná zásoba = 1 200 + 300 + 120 = 1 620 ks'],
      bad: 0,
      fix: 'Obratová zásoba klesá z plné výše k nule, v průměru je jí polovina: 60 · 20 / 2 = 600 ks. Průměrná zásoba je 600 + 300 + 120 = 1 020 ks (časová norma 10 + 5 + 2 = 17 dní).'
    }
  ],
  lessons: [
    {
      id: 'l1', topic: 'p1', title: 'Právní formy podnikání', min: 4,
      warm: ['p2.q1', 'p4.q9'],
      steps: [
        { h: 'Proč na právní formě záleží', html: '<p>Když zakládáš firmu, vybíráš si <b>právní formu</b>. Rozhoduje o tom, kolik kapitálu potřebuješ, kolik lidí musí firmu založit a hlavně <b>jak ručíš</b>, když firma nezaplatí dluhy.</p><p>Dál se podle ní liší zdanění, podíl na zisku, administrativa a co musíš zveřejňovat.</p>' },
        { h: 'Osobní společnosti: v.o.s. a k.s.', html: '<p><b>Veřejná obchodní společnost</b> potřebuje aspoň 2 společníky. Ručí všichni <b>společně a nerozdílně celým svým majetkem</b> a řídí ji každý společník. Zisk se dělí rovným dílem.</p><p><b>Komanditní společnost</b> má dva druhy společníků: <b>komplementář</b> ručí celým majetkem a řídí, <b>komanditista</b> ručí jen do výše nesplaceného vkladu.</p>', check: 'q3' },
        { h: 'Kapitálové společnosti: s.r.o. a a.s.', html: '<p><b>s.r.o.</b> založí i jediná osoba, základní kapitál je aspoň <b>1 Kč</b>. Společníci ručí společně a nerozdílně do výše souhrnu nesplacených vkladů, řídí ji <b>jednatelé</b>.</p><p><b>a.s.</b> také stačí 1 zakladatel, ale kapitál je aspoň <b>2 mil. Kč nebo 80 tis. EUR</b>. Akcionář <b>neručí</b>, řídí ji <b>představenstvo</b> a o dividendě rozhoduje valná hromada.</p>', check: 'q11' },
        { h: 'Družstvo a vznik', html: '<p><b>Družstvo</b> potřebuje aspoň 3 členy, každý vloží stejný základní členský vklad a minimum kapitálu zákon nestanoví.</p><p>Všechny obchodní společnosti <b>vznikají zápisem do obchodního rejstříku</b>.</p>' }
      ],
      quiz: ['q1', 'q2', 'q4', 'q5', 'q6', 'q9', 'q10']
    },
    {
      id: 'l4', topic: 'p2', title: 'Majetek, kapitál a finanční páka', min: 7,
      warm: ['p1.q11', 'p3.q10'],
      steps: [
        { h: 'Rozvaha: co mám a odkud to mám', html: '<p><b>Rozvaha</b> je přehled o majetku podniku a jeho finančním krytí k určitému datu. Vlevo jsou <b>aktiva</b> (co podnik vlastní), vpravo <b>pasiva</b> (komu to patří, tedy z jakých zdrojů je majetek pořízený).</p><p>Platí <b>bilanční rovnice</b>: součet aktiv = součet pasiv. Rozvaha ukazuje <b>stavové veličiny</b>, třeba stav zásob k 31. 12. Výnosy za rok jsou tokové a patří do výkazu zisku a ztráty.</p>', check: 'q2' },
        { h: 'Aktiva: dlouhodobý a oběžný majetek', html: '<p><b>Dlouhodobý majetek</b> slouží déle než rok. Je <b>hmotný</b> (stroje, budovy, pozemky), <b>nehmotný</b> (patenty, licence, software) a <b>finanční</b> (podíly v jiných podnicích, dlouhodobé půjčky). Podle zákona o daních z příjmů je hmotný majetek dlouhodobý při vstupní ceně nad 80 000 Kč, účetní limit si podnik stanoví sám.</p><p><b>Oběžná aktiva</b> neustále obíhají: <b>zásoby</b>, <b>pohledávky</b>, <b>krátkodobý finanční majetek</b> a <b>peněžní prostředky</b> včetně cenin.</p>', check: 'q6' },
        { h: 'Řešený příklad: odpisy', html: '<p>Dlouhodobý majetek se opotřebovává postupně. <b>Odpisy</b> jsou toto opotřebení vyjádřené v penězích za určité období, jejich součet jsou <b>oprávky</b>.</p><p>Stroj za 1 000 000 Kč s dobou použitelnosti 5 let: roční odpis = 1 000 000 / 5 = <b>200 000 Kč</b>. Po 3 letech jsou oprávky 600 000 Kč a <b>zůstatková hodnota</b> 1 000 000 − 600 000 = <b>400 000 Kč</b>. Po 5 letech je to 0.</p><p>Podle přednášky jsou odpisy <b>účetní</b> (výkonové, nebo časové) a <b>daňové</b> (rovnoměrné, nebo zrychlené). Pozemky, umělecká díla ani zlato se používáním neopotřebují, a proto se <b>neodepisují</b>.</p>', check: 'q5' },
        { h: 'Likvidnost a likvidita', html: '<p><b>Likvidnost</b> má majetek: jak rychle a bez větších ztrát se dá proměnit v peníze. Od nejlikvidnějšího: peněžní prostředky → krátkodobý finanční majetek → pohledávky → zásoby → dlouhodobý majetek.</p><p><b>Likvidita</b> má podnik: schopnost dostát svým závazkům v blízké budoucnosti. Když splatné dluhy převýší realizovatelnou hodnotu aktiv, jde o <b>platební neschopnost</b>.</p>', check: 'q15' },
        { h: 'Pasiva: vlastní a cizí zdroje', html: '<p><b>Vlastní zdroje</b> podnik získal od majitelů (základní kapitál, kapitálové fondy včetně <b>ážia</b>) nebo je vydělal (fondy ze zisku, výsledek hospodaření). <b>Cizí zdroje</b> jsou rezervy, krátkodobé a dlouhodobé závazky: úvěry, dluhy dodavatelům, nevyplacené mzdy, nezaplacené daně, obligace.</p><p>Věřitelé nemají právo podnik přímo řídit a cizí kapitál je <b>levnější</b>. Jenže zvyšuje zadluženost a každý další dluh je dražší.</p>', check: 'q19' },
        { h: 'Řešený příklad: finanční páka a daňový štít', html: '<p>Podniky A a B mají kapitál 10 000 a zisk před úroky 2 000. A má jen vlastní kapitál, B má 5 000 vlastního a 5 000 cizího s úrokem 10 %.</p><p>A: výnosnost vlastního kapitálu = 2 000 / 10 000 = <b>20 %</b>. B: úroky 500, zbývá 1 500, výnosnost = 1 500 / 5 000 = <b>30 %</b>. To je <b>finanční páka</b>. Funguje jen proto, že aktiva vydělají 20 % a úrok stojí 10 %. Při úroku 30 % by B mělo jen 10 %.</p><p>S daní 19 % vyjde A 16,2 % a B 24,3 %: úroky snižují základ daně, to je <b>daňový štít</b>. Optimální poměr zdrojů hledáš podle nejnižšího <b>WACC</b>.</p>', check: 'q18' }
      ],
      quiz: ['q1', 'q3', 'q4', 'q7', 'q8', 'q14', 'q16', 'q17']
    },
    {
      id: 'l2', topic: 'p3', title: 'Výrobní kapacita', min: 6,
      warm: ['p1.q3', 'p2.q4'],
      steps: [
        { h: 'Vstupy, výstupy a produktivita', html: '<p>Výroba mění <b>vstupy</b> (řídící a výkonnou práci, dlouhodobý majetek, materiál) na <b>výstupy</b> (výrobky a služby). <b>Efektivnost</b> je obecně výstup / vstup.</p><p><b>Produktivita</b> je efektivnost využití výrobních faktorů. <b>Parciální</b> bere jeden faktor (třeba produkce na pracovníka), <b>celková</b> souhrn práce, kapitálu, energie a materiálu. Obrácený ukazatel vstup / výstup je <b>pracnost</b>.</p>', check: 'q9' },
        { h: 'Výrobnost a pracnost', html: '<p><b>Výrobnost</b> V říká, kolik kusů zařízení vyrobí za hodinu. <b>Pracnost</b> t říká, kolik času potřebuje jeden kus. Jsou to převrácené hodnoty: <b>V = 1 / t</b>.</p><p>Stroj, který zvládne 60 ks/h, má pracnost 1 min/ks. Při 48 ks/h je to 60 / 48 = 1,25 min/ks. Rozlišuješ <b>kapacitní</b> normu (maximum), <b>podnikovou</b> normu a <b>skutečnou</b> výrobnost.</p>', check: 'q13' },
        { h: 'Řešený příklad: kapacita stroje', html: '<p><b>Výrobní kapacita</b> je maximální objem produkce za určitou dobu: <b>q<sub>p</sub> = T<sub>p</sub> · V<sub>p</sub></b>.</p><p>Časový fond se zužuje: kalendářní → <b>nominální</b> (bez nepracovních dnů) → <b>využitelný</b> (bez plánovaných prostojů).</p><p>Stroj jede 270 dnů, dvě směny po 8 h, údržba vezme 5 %: T<sub>p</sub> = 270 · 2 · 8 · 0,95 = <b>4 104 h</b>. S kapacitní normou 60 ks/h je kapacita 4 104 · 60 = <b>246 240 ks</b> za rok.</p>' },
        { h: 'Stroje vedle sebe a za sebou', html: '<p>Když stroje stojí <b>vedle sebe</b> (paralelně) a dělají totéž, jejich kapacity se <b>sčítají</b>.</p><p>Když stojí <b>za sebou</b> (sériově) v lince, výrobek musí projít všemi. Na slajdu je výrobní kapacita linky čára na úrovni <b>hlavního výrobního článku</b>. Některé stroje ji převyšují, <b>úzký profil</b> pod ní zůstává: má nižší kapacitu, než má linka.</p>' },
        { h: 'Využití kapacity', html: '<p><b>k<sub>c</sub> = q<sub>s</sub> / q<sub>p</sub></b>: skutečná výroba děleno kapacitou. Kapacita 5 000 ks a výroba 4 000 ks dají k<sub>c</sub> = 0,8 a <b>kapacitní rezervu</b> 1 000 ks.</p><p>Koeficient se rozkládá na (T<sub>s</sub> / T<sub>p</sub>) · (V<sub>s</sub> / V<sub>p</sub>). Využití zvýšíš <b>extenzivně</b> (stroj běží déle) nebo <b>intenzivně</b> (za hodinu vyrobí víc).</p>', check: 'q6' }
      ],
      quiz: ['q1', 'q2', 'q3', 'q4', 'q5', 'q7', 'q14']
    },
    {
      id: 'l3', topic: 'p4', title: 'Zásoby a jejich normy', min: 6,
      warm: ['p2.q6', 'p3.q4'],
      steps: [
        { h: 'Proč podnik drží zásoby', html: '<p>Ve výrobě jsou zásoby <b>materiálu</b>, <b>nedokončené výroby</b> a <b>hotových výrobků</b>. Důvody jsou <b>vyrovnávací</b>, <b>technologické</b> a <b>spekulativní</b>.</p><p>Vysoká zásoba znamená skladovací náklady, nízká riziko <b>nákladů nedostatku</b>. Třetí položkou jsou náklady na zajištění jedné objednávky.</p>', check: 'q8' },
        { h: 'Kolik materiálu objednat', html: '<p>Nejdřív normy spotřeby na výrobky, pak <b>výrobní spotřeba</b> S = Σ q<sub>i</sub> · s<sub>i</sub> a nakonec <b>potřeba dodávek D = S + K − P</b>.</p><p>Příklad: 200 ks výrobku A po 3 kg a 100 ks B po 5 kg dá S = 1 100 kg. Když máš na začátku 300 kg a na konci chceš 500 kg, dodat se musí 1 100 + 500 − 300 = <b>1 300 kg</b>.</p>', check: 'q13' },
        { h: 'Obratová zásoba a pila', html: '<p><b>Obratová</b> zásoba kryje spotřebu během jednoho <b>dodávkového cyklu</b> c (doba mezi dvěma dodávkami). Na začátku cyklu je <b>Z<sub>O</sub> = S<sub>d</sub> · c</b>.</p><p>Čerpá se rovnoměrně až k nule, graf vypadá jako pila. V průměru je jí tedy jen polovina: <b>S<sub>d</sub> · c/2</b>.</p>' },
        { h: 'Pojistná a technologická', html: '<p><b>Pojistná</b> zásoba Z<sub>P</sub> = S<sub>d</sub> · p kryje odchylky ve spotřebě, ve výši dodávek a v délce cyklu.</p><p><b>Technologická</b> zásoba Z<sub>T</sub> = S<sub>d</sub> · t pokrývá dobu, kdy materiál musí sušit, stárnout nebo zrát.</p>' },
        { h: 'Řešený příklad: průměrná zásoba', html: '<p><b>Časová norma zásob</b> = c/2 + p + t, tedy na kolik dní vydrží průměrná zásoba. Průměrná zásoba = časová norma · S<sub>d</sub>.</p><p>Spotřeba 50 ks denně, c = 20 dní, p = 4, t = 2: norma = 10 + 4 + 2 = <b>16 dní</b>, průměrná zásoba = 16 · 50 = <b>800 ks</b>.</p><p>Při inventarizaci se inventurou zjistí skutečný stav zásob, porovná se s účetním a vyčíslí se manka, škody a přebytky.</p>', check: 'q12' }
      ],
      quiz: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q14']
    }
  ]
});
