/* Právo pro ekonomy, podle prezentací modulů 1–4 (teorie práva, základy občanského práva, věcná a závazková práva) a přednášky Dědění (stav 14. 10. 2026). */
KR.predmet({
  id: 'pravo', name: 'Právo pro ekonomy', short: 'Právo', icon: 'vahy',
  lead: 'Teorie práva, základy občanského práva, věcná a závazková práva a dědění. Spousta modelových případů.',
  exams: [],
  // Memes: k = neano | mozek | nikdo | tlacitka | kdyz, l = texty panelů, why = co si z toho zapamatovat
  memes: [
    { topic: 'm1', k: 'kdyz', l: ['Zákon je ve Sbírce, tedy platný', 'ale účinný bude až za dva měsíce. Vacatio legis, chill.'], why: 'Platnost = vyhlášení. Povinnosti vznikají až dnem účinnosti, mezi tím běží vacatio legis.' },
    { topic: 'm1', k: 'mozek', l: ['Lex superior', 'Lex specialis', 'Lex posterior', 'Lex „vyložím si to, jak se mi hodí“'], why: 'Platí jen první tři: vyšší síla, zvláštní úprava, pozdější předpis. Ten čtvrtý soud neuzná.' },
    { topic: 'm1', k: 'nikdo', l: ['§ 494 občanského zákoníku: „Živé zvíře není věcí.“ Kačka: „Konečně uznání.“'], why: 'Na zvířata se ustanovení o věcech použijí jen obdobně.' },
    { topic: 'm2', k: 'neano', l: ['„Podepsala jsi to, tak to platí“', 'Podpis není kouzelná guma na kogentní normy'], why: 'Od kogentní normy se strany nemohou platně odchýlit, ani podpisem. Od dispozitivní ano.' },
    { topic: 'm2', k: 'kdyz', l: ['Cedule „Za jakoukoli újmu neodpovídáme“', 'Soud: „Hezká cedule.“'], why: 'Taková cedule náhradu újmy nevylučuje (§ 2896 OZ). Nanejvýš funguje jako varování.' },
    { topic: 'm3', k: 'kdyz', l: ['Podepsala jsi kupní smlouvu na pozemek', 'Vlastnice jsi ale až vkladem do katastru'], why: 'Smlouva je titul, vlastnictví k zapsanému pozemku vznikne až vkladem, zpětně ke dni, kdy návrh došel katastrálnímu úřadu.' },
    { topic: 'm4', k: 'nikdo', l: ['Pohledávka a dluh: „Jsme jeden závazek, jen každý z jiné strany.“'], why: 'Věřitel má pohledávku, dlužník dluh. Jde o jeden a týž závazek.' },
    { topic: 'm5', k: 'neano', l: ['Vytisknout závěť a jen ji podepsat', 'Napsat ji celou vlastní rukou'], why: 'Vytištěná a jen podepsaná závěť není vlastnoruční. Platí, jen když ji zůstavitel prohlásí za svou poslední vůli před dvěma současně přítomnými svědky a ti ji podepíší.' },
    { topic: 'm5', k: 'tlacitka', l: ['Vzít jen půlku dědictví', 'Výhrada soupisu'], cap: 'Dědictví s dluhy', why: 'Dědictví nejde odmítnout napůl. Před dluhy chrání výhrada soupisu.' }
  ],
  topics: [
    {
      id: 'm1', label: 'Modul 1: Teorie práva',
      terms: [
        ['Platnost předpisu', 'Předpis jí nabývá řádným vyhlášením v úředním publikačním systému. Stává se součástí právního řádu, ale ještě nemusí být účinný.', 't1'],
        ['Vacatio legis', 'Období mezi platností a účinností předpisu.', 't2'],
        ['Účinnost předpisu', 'Den, od kterého se předpis uplatňuje a vyvolává zamýšlené účinky.', 't3'],
        ['Hypotéza', 'Část právní normy: podmínky, za kterých norma nastupuje („Nastane-li situace X…“).', 't4'],
        ['Dispozice', 'Jádro právní normy: samotné pravidlo chování („…pak je Y povinen / oprávněn konat Z.“).', 't5'],
        ['Sankce', 'Část právní normy: následek porušení povinnosti z dispozice („…jinak nastoupí následek S.“).', 't6'],
        ['Kogentní norma', 'Pravidlo, od kterého se strany nemohou platně odchýlit.', 't7'],
        ['Dispozitivní norma', 'Pravidlo, od kterého se strany mohou smluvně odchýlit. Použije se, když si to strany neupraví jinak.', 't8'],
        ['Lex superior derogat inferiori', 'Norma vyšší právní síly má přednost před normou nižší síly (zákon před vyhláškou).', 't9'],
        ['Lex specialis derogat generali', 'Zvláštní úprava má přednost před obecnou (zákon o obchodních korporacích před občanským zákoníkem).', 't10'],
        ['Lex posterior derogat priori', 'Pozdější norma stejné právní síly má přednost před dřívější.', 't11'],
        ['Právní osobnost', 'Způsobilost mít v mezích právního řádu práva a povinnosti. Člověk ji má od narození do smrti.', 't12'],
        ['Svéprávnost', 'Způsobilost nabývat vlastním jednáním práva a zavazovat se k povinnostem. Plná se nabývá zletilostí.', 't13'],
        ['Nařízení EU', 'Akt závazný v celém rozsahu a přímo použitelný ve všech členských státech, bez transpozice.', 't14'],
        ['Směrnice EU', 'Akt závazný pro stát co do výsledku, formu a prostředky volí stát. Zpravidla vyžaduje transpozici.', 't15'],
        ['IRAC', 'Postup řešení případu: Issue (otázka), Rule (pravidlo), Application (aplikace na fakta), Conclusion (závěr).', 't16']
      ],
      qs: [
        ['Obec vyhlásila vyhlášku s účinností za dva měsíce. Úředník chce, aby ji bistro dodržovalo hned. Musí?', 'Ne, povinnost vznikne až dnem účinnosti', ['Ano, vyhláška je už platná', 'Ano, pokud to úředník napíše e-mailem', 'Ne, obecní vyhlášky nejsou závazné'], 'Mezi platností a účinností běží vacatio legis.', 'q1'],
        ['Kdy obecně nabývají účinnosti celostátní předpisy?', '1. ledna nebo 1. července', ['15. dnem po vyhlášení', 'Dnem vyhlášení', 'Vždy 1. ledna'], 'Zákon připouští výjimky. Předpisy územních samosprávných celků nabývají účinnosti 15. dnem po vyhlášení.', 'q2'],
        ['Zákon a vyhláška ministerstva si odporují. Co se použije?', 'Zákon, podle lex superior', ['Vyhláška, podle lex posterior', 'Vyhláška, podle lex specialis', 'Ten, který zvolí soud podle uvážení'], 'Norma vyšší právní síly má přednost.', 'q3'],
        ['Od jaké normy se strany nemohou smluvně odchýlit?', 'Od kogentní', ['Od dispozitivní', 'Od žádné', 'Od každé normy soukromého práva'], 'Dispozitivní normy se použijí, jen když si strany věc neupraví jinak.', 'q4'],
        ['Která část právní normy obsahuje samotné pravidlo chování?', 'Dispozice', ['Hypotéza', 'Sankce', 'Preambule'], 'Hypotéza = kdy, dispozice = co, sankce = co když ne.', 'q5'],
        ['Studentka se v chatu dohodla na úpravě prezentace za 1 500 Kč a práci odevzdala. Vznikla smlouva?', 'Ano, písemná forma tu není nutná', ['Ne, zpráva v chatu není smlouvou', 'Ne, bez podpisu smlouva nevzniká', 'Jen když je částka nad 10 000 Kč'], 'Smlouva o dílo nepotřebuje písemnou formu. Platí zásada bezformálnosti právního jednání (§ 559 OZ), rozhoduje shodná vůle stran.', 'q6'],
        ['Který akt EU je přímo použitelný a nevyžaduje transpozici?', 'Nařízení', ['Směrnice', 'Doporučení', 'Stanovisko'], 'Doporučení a stanoviska nejsou závazná.', 'q7'],
        ['Jak se nabývá plné svéprávnosti?', 'Zletilostí, přiznáním nebo sňatkem', ['Až dosažením 21 let věku', 'Narozením, stejně jako právní osobnost', 'Zápisem do obchodního rejstříku'], '§ 30 OZ: zletilostí, přiznáním svéprávnosti nebo uzavřením manželství. Narozením člověk nabývá právní osobnost, ne svéprávnost.', 'q8'],
        ['Je živé zvíře podle občanského zákoníku věc?', 'Ne, pravidla o věcech jen obdobně', ['Ano, je to movitá věc jako každá jiná', 'Ano, je součástí pozemku chovatele', 'Jen hospodářská zvířata, mazlíčci ne'], '§ 494 OZ: živé zvíře není věcí, ustanovení o věcech se na něj použijí jen obdobně.', 'q9'],
        ['Co platí pro jednotlivce podle čl. 2 odst. 4 Ústavy?', 'Každý může činit, co zákon nezakazuje', ['Každý smí činit jen to, co zákon dovoluje', 'Úředník může zakázat cokoli', 'Co není výslovně povoleno, je zakázáno'], 'Státní moc naopak smí jednat jen tam, kde to zákon stanoví.', 'q10'],
        ['Kterou výkladovou metodou hledáš smysl a účel normy?', 'Teleologickým výkladem', ['Jazykovým výkladem', 'Historickým výkladem', 'Systematickým výkladem'], 'Historický výklad hledá úmysl zákonodárce v době přijetí.', 'q11'],
        ['Kde se od roku 2024 oficiálně vyhlašují zákony?', 'V e-Sbírce', ['Ve Sbírce právních předpisů ÚSC', 'V Úředním věstníku EU', 'Na úřední desce obce'], 'Vyhlášky obcí a krajů jsou ve Sbírce právních předpisů územních samosprávných celků.', 'q12'],
        ['Co platí pro směrnici EU?', 'Zavazuje stát výsledkem, formu volí stát', ['Je přímo použitelná bez transpozice', 'Je to nezávazné doporučení Komise', 'Zavazuje jen soukromé osoby, ne stát'], 'Směrnice zpravidla vyžaduje transpozici do vnitrostátního práva. Přímo použitelné je nařízení.', 'q13'],
        ['Kdy předpis nabývá platnosti?', 'Řádným vyhlášením', ['Dnem účinnosti', 'Schválením v Parlamentu', 'Uplynutím vacatio legis'], 'Vyhlášením v úředním publikačním systému se předpis stává součástí právního řádu. Zavazovat ale začne až dnem účinnosti.', 'q14'],
        ['Zákon o obchodních korporacích upravuje otázku jinak než občanský zákoník. Co se použije?', 'ZOK, podle lex specialis', ['OZ, protože je obecný kodex', 'OZ, podle lex superior', 'Ten, který si strany vyberou'], 'Zvláštní úprava má v rozsahu své speciality přednost před obecnou.', 'q15'],
        ['Dva zákony (žádný není zvláštní úpravou) si odporují. Který se použije?', 'Pozdější, podle lex posterior', ['Dřívější, protože byl první', 'Kratší, protože je přesnější', 'Žádný, oba přestanou platit'], 'Lex posterior rozhoduje jen u předpisů stejné právní síly. Při rozdílné síle platí lex superior.', 'q16'],
        ['Co děláš v kroku A metody IRAC?', 'Podřazuješ fakta pod pravidlo', ['Vymezuješ právní otázku', 'Cituješ pramen a normu', 'Píšeš závěr s výhradami'], 'Application je subsumce skutkového stavu pod pravidlo. Otázka je I, pravidlo R, závěr C.', 'q17'],
        ['Od kdy do kdy má člověk právní osobnost?', 'Od narození do smrti', ['Od zletilosti do smrti', 'Od 15 let do smrti', 'Od zápisu do matriky'], 'Právní osobnost (§ 23 OZ) je způsobilost mít práva a povinnosti. Svéprávnost se nabývá až zletilostí.', 'q18'],
        ['Vyhlášená mezinárodní smlouva podle čl. 10 Ústavy odporuje zákonu. Co platí?', 'Použije se smlouva, zákon se nezruší', ['Použije se zákon, smlouva ustoupí', 'Smlouva zákon automaticky zruší', 'Použije se ten dřívější z nich'], 'Jde o aplikační přednost: rozporný zákon se v konkrétní věci v rozsahu rozporu nepoužije, ale zrušen není.', 'q19'],
        ['Úředník ti zakáže fotit na chodníku před úřadem, protože se mu to nelíbí. Smí?', 'Ne, chybí mu zákonný podklad', ['Ano, před úřadem rozhoduje on', 'Ano, úředník smí zakázat cokoli', 'Ano, pokud to řekne slušně'], 'Státní moc smí jen to, co jí zákon dovolí (čl. 2 odst. 3 Ústavy). Nelibost není zákonný důvod.', 'q20'],
        ['Najdeš peněženku s doklady a 20 000 Kč. Je vrácení jen morální povinnost?', 'Ne, je to povinnost právní', ['Ano, zákon nálezy neřeší', 'Ano, nález si smíš nechat', 'Jen u částky nad 50 000 Kč'], 'Nalezenou věc nelze považovat za opuštěnou (§ 1051 OZ). Známému vlastníkovi ji vrátíš, jinak nález oznámíš obci. Náleží ti nálezné.', 'q21'],
        ['Jakou roli má podle Ústavního soudu jazykový výklad?', 'Prvotní přiblížení k obsahu normy', ['Jediná přípustná metoda výkladu', 'Jen když chybí důvodová zpráva', 'Závazný jen u ústavních zákonů'], 'Smysl normy je třeba zjišťovat i dalšími metodami (Pl. ÚS 33/97). Od doslovného znění se lze odchýlit (Pl. ÚS 21/96).', 'q22'],
        ['Může se jednotlivec dovolat neprovedené směrnice proti jinému jednotlivci?', 'Zásadně ne, jen vůči státu', ['Ano, vždy a bez podmínek', 'Ano, jakmile uplyne lhůta', 'Ano, je-li směrnice přesná'], 'Vertikální přímý účinek (vůči státu) je možný za podmínek, horizontální zásadně ne. Vnitrostátní právo se ale vykládá eurokonformně.', 'q23'],
        ['Patnáctiletá Ema si za kapesné koupí sešit. Platí to?', 'Ano, odpovídá to její vyspělosti', ['Ne, svéprávná je až od 18 let', 'Ne, potřebuje souhlas soudu', 'Jen s ověřeným podpisem rodiče'], 'Nezletilý je způsobilý k právním jednáním přiměřeným rozumové a volní vyspělosti (§ 31 OZ), zákon ji měří vyspělostí nezletilých jeho věku. Sešit za kapesné k takovým jednáním patří.', 'q24']
      ],
      tips: [
        '<b>Platnost ≠ účinnost.</b> Platný předpis už je ve Sbírce, závazný je ale až od účinnosti.',
        '<b>Tři derogační pravidla:</b> superior (vyšší síla), specialis (zvláštní), posterior (pozdější).',
        '<b>H–D–S:</b> Hypotéza „když“, Dispozice „pak“, Sankce „jinak“.'
      ]
    },
    {
      id: 'm2', label: 'Modul 2: Základy občanského práva',
      terms: [
        ['Soukromé právo', 'Upravuje vztahy osob v rovnocenném postavení, nikdo nikomu vrchnostensky nevelí. Podle § 1 odst. 1 OZ je v zásadě nezávislé na právu veřejném.', 't1'],
        ['Občanský zákoník (OZ)', 'Zákon č. 89/2012 Sb., obecný kodex (lex generalis) soukromého práva. Zvláštní předpis má přednost, OZ doplní, co neupravuje.', 't2'],
        ['Pět částí OZ', 'I. obecná část (§ 1–654), II. rodinné právo, III. absolutní majetková práva, IV. relativní majetková práva (závazky), V. společná a závěrečná ustanovení.', 't3'],
        ['Autonomie vůle', 'Svoboda rozhodnout, zda, s kým, co a v jaké formě ujednám. Platí jen v mezích § 1 odst. 2 OZ.', 't4'],
        ['Test odchylky (§ 1 odst. 2 OZ)', 'Od zákona se lze odchýlit, pokud to zákon výslovně nezakazuje, nejde o rozpor s dobrými mravy či veřejným pořádkem a nedotkne se to statusu osoby.', 't5'],
        ['Pacta sunt servanda', 'Daný slib zavazuje: platně a poctivě uzavřená smlouva má být splněna.', 't6'],
        ['Poctivost', 'Objektivní standard vnějšího jednání: neskrývat podstatné informace, nezneužívat informační převahu, nevytvářet klamný dojem.', 't7'],
        ['Dobrá víra', 'Rozumně ospravedlnitelné přesvědčení, že jednám v souladu se skutečností a právem. Zákon ji zpravidla předpokládá (presumuje).', 't8'],
        ['Zákaz zneužití práva (§ 8 OZ)', 'Zjevné zneužití práva nepožívá právní ochrany, například výkon vlastnictví jen proto, aby to uškodilo sousedovi.', 't9'],
        ['Dobré mravy', 'Neurčitý právní pojem, hodnotový korektiv. Soud ho konkretizuje podle místa, času, postavení stran, účelu a důsledků.', 't10'],
        ['Veřejný pořádek', 'Nezbytné základy společenského a právního uspořádání. Nejde o jakýkoli veřejný zájem, vykládá se zdrženlivě.', 't11'],
        ['Analogie (§ 10 OZ)', 'Až při skutečné mezeře: nejdřív ustanovení nejbližší obsahem a účelem (analogie zákona), pak principy spravedlnosti a zásady soukromého práva (analogie práva).', 't12'],
        ['§ 13 OZ', 'Kdo hledá právní ochranu, může důvodně očekávat, že podstatně podobný případ bude rozhodnut podobně. Odchylka musí být přesvědčivě odůvodněna.', 't13'],
        ['Osobnostní práva (§ 81 OZ)', 'Chrání život a zdraví, čest a vážnost, soukromí, podobu a záznamy i důstojnost. Výčet je otevřený.', 't14'],
        ['Zákonná licence (§ 88–90 OZ)', 'Užití podoby či záznamu bez svolení ze zákonného důvodu. Musí odpovídat účelu a nesmí nepřiměřeně zasáhnout oprávněné zájmy člověka.', 't15']
      ],
      qs: [
        ['Podle čeho poznáš soukromoprávní vztah?', 'Strany mají rovnocenné postavení', ['Jednou ze stran je vždy stát', 'Podle názvu instituce, která jedná', 'Strany se nemohou obrátit na soud'], 'Rozhoduje povaha vztahu, ne název instituce. Ve veřejnoprávním vztahu orgán autoritativně rozhoduje.', 'q1'],
        ['Firma nezaplatila dodavateli kupní cenu. Do které části OZ spor patří?', 'IV. relativní majetková práva', ['I. obecná část', 'II. rodinné právo', 'III. absolutní majetková práva'], 'Závazky mezi konkrétním věřitelem a dlužníkem jsou v části čtvrté (§ 1721–3014).', 'q2'],
        ['Kam v systematice OZ patří dědění po rodiči?', 'III. absolutní majetková práva', ['I. obecná část', 'II. rodinné právo', 'IV. relativní majetková práva'], 'Část třetí zahrnuje držbu, vlastnictví, spoluvlastnictví, práva k cizím věcem i dědické právo.', 'q3'],
        ['V lezecké hale visí cedule „Za jakoukoli újmu neodpovídáme“. Ema se zraní o uvolněný chyt. Co cedule znamená?', 'Soud k ní nepřihlíží', ['Náhradu újmy vždy vylučuje', 'Vylučuje náhradu u dospělých', 'Platí, když je dost velká'], 'K oznámení vylučujícímu náhradu se nepřihlíží (§ 2896 OZ), nanejvýš varuje před nebezpečím. Náhradu újmy na přirozených právech nelze předem vyloučit ani smlouvou (§ 2898 OZ).', 'q4'],
        ['Petra objednala knihu za 490 Kč. V košíku byl předem zaškrtnutý doplněk za 99 Kč, který přehlédla. Kolik může e-shop chtít?', '490 Kč', ['589 Kč', '99 Kč', 'Nic, smlouva je celá neplatná'], 'Další platbu lze požadovat jen při výslovném souhlasu, ten z předem zaškrtnutého políčka neplyne (§ 1817 OZ). Cena knihy zůstává.', 'q5'],
        ['Soused postavil u hranice vysokou stěnu jen proto, aby Jana „seděla ve tmě“. Může se Jana bránit?', 'Ano, jde o zneužití práva', ['Ne, na svém pozemku smí cokoli', 'Jen když stěna stojí za hranicí', 'Ne, rozhoduje jen stavební úřad'], 'Zjevné zneužití práva nepožívá ochrany (§ 8 OZ), zakázány jsou činy s hlavním účelem jiného poškodit (§ 1012 OZ). Ochrana podle § 1042 OZ.', 'q6'],
        ['Tomáš prodal Kláře notebook se slovy „je bez vad“, o závadě věděl a zamlčel ji. Může namítat, že ji měla zjistit při koupi?', 'Ne, ujistil ji, že je bez vad', ['Ano, zjistitelnou vadu nelze vytknout', 'Ano, soukromý prodej je bez záruky', 'Jen když notebook stál přes 20 000 Kč'], 'Omezení u zjistitelné vady neplatí, ujistil-li prodávající, že věc je bez vad, nebo vadu lstivě zastřel (§ 2103 OZ).', 'q7'],
        ['Anna půjčila fotoaparát známému a ten ho bez jejího souhlasu prodal Martině za obvyklou cenu. Martina neměla důvod pochybovat. Je vlastnicí?', 'Může být, podle § 1109 OZ', ['Nikdy, prodávající nebyl vlastník', 'Vždy, jakmile zaplatí cenu', 'Ne, věc teď patří známému'], 'Úplatné nabytí od osoby, které vlastník věc svěřil, chrání § 1109 písm. c) OZ, pokud je nabyvatelka v dobré víře. Své nároky pak Anna řeší se známým.', 'q8'],
        ['Škola vyfotila studentku na dni otevřených dveří (u vstupu byla obecná cedule o focení) a detail její tváře dala na placený billboard. Stačí to?', 'Ne, svolení nepokrývá každé užití', ['Ano, akce se konala na veřejnosti', 'Ano, fotografii pořídila sama škola', 'Ano, studentka při vstupu neprotestovala'], 'Souhlas se zachycením není bianco souhlas s každým rozšiřováním. Prověřuje se rozsah svolení, zákonná licence, přiměřenost a zvlášť GDPR.', 'q9'],
        ['Kdy se podle § 10 OZ použije analogie?', 'Když chybí výslovné ustanovení', ['Kdykoli to obě strany navrhnou', 'Když je zvláštní zákon těžko dostupný', 'Vždy ještě před jazykovým výkladem'], 'Nejdřív úplná rešerše; teprve skutečná mezera se vyplní nejbližším ustanovením a pak principy spravedlnosti.', 'q10'],
        ['Co zákon u osoby, která právně jedná, předpokládá?', 'Že jedná poctivě a v dobré víře', ['Že jedná ve zlé víře', 'Že smlouvu nečetla', 'Že sleduje jen vlastní zisk'], 'Poctivost a dobrá víra se presumují. Kdo tvrdí opak, musí to prokázat.', 'q11'],
        ['Formulářová smlouva říká: „Dodavatel neodpovídá za žádnou újmu, ani úmyslnou.“ Zákaznice ji podepsala. Platí to?', 'Ne, podpis nepřepíše kogentní meze', ['Ano, podpis smlouvu vždy zpečetí', 'Ano, smluvní volnost je neomezená', 'Ano, pokud byla klauzule tučně'], 'Odchylku zakazuje zákon (náhradu úmyslně způsobené újmy nelze předem vyloučit, § 2898 OZ) a jde i o slabší stranu. Podpis uzavírá smlouvu, kogentní hranice neodstraní.', 'q12'],
        ['Jaký výčet chráněných hodnot osobnosti používá § 81 OZ?', 'Otevřený (demonstrativní)', ['Uzavřený (taxativní)', 'Jen jméno a podobu', 'Jen život a zdraví'], 'Chráněny mohou být i další složky osobnosti, nárok ale musí vycházet z konkrétního zásahu.', 'q13'],
        ['Kdy přichází při zásahu do osobnosti v úvahu zadostiučinění v penězích?', 'Až když jiná náprava nestačí', ['Vždy jako první a hlavní nárok', 'Jen při újmě na zdraví a životě', 'Nikdy, osobnost nemá cenu'], 'Nejdřív upuštění od zásahu, odstranění následků a přiměřené zadostiučinění (třeba omluva). Peníze, jen pokud jiný způsob újmu dostatečně neodčiní.', 'q14'],
        ['Jaký je rozdíl mezi poctivostí a dobrou vírou?', 'Poctivost hodnotí čin, dobrá víra mysl', ['Jde o úplně totéž, jen jinak řečeno', 'Poctivost platí jen pro podnikatele', 'Dobrá víra se musí vždy prokázat'], 'Poctivost je standard vnějšího jednání, dobrá víra je ospravedlnitelné přesvědčení. Překrývají se, ale nejsou totožné.', 'q15']
      ],
      tips: [
        '<b>Test odchylky = 3 brány:</b> výslovný zákaz? dobré mravy nebo veřejný pořádek? status osoby? Projde-li vše, odchylka je možná.',
        '<b>Čin vs. mysl:</b> poctivost hodnotí, jak jednáš, dobrá víra, co si rozumně myslíš.',
        '<b>Postup případu:</b> skutek → vztah → pravidlo → nárok. „Podpis není kouzelná guma na kogentní normy.“'
      ]
    },
    {
      id: 'm3', label: 'Modul 3: Věcná práva',
      terms: [
        ['Věcné právo', 'Působí vůči každému (erga omnes), ostatní ho musí respektovat. Závazkové právo naopak váže jen určené strany (inter partes).', 't1'],
        ['Numerus clausus', 'Typy a účinky věcných práv určuje zákon. Smlouva může upravit obsah zákonného typu, nový absolutní účinek ale nevytvoří.', 't2'],
        ['Nemovitá věc', 'Pozemek a věcná práva či jiné věci, které za nemovité určí zákon (třeba právo stavby nebo bytová jednotka). Vše ostatní je movité. U zapsané nemovitosti je při převodu klíčový vklad.', 't3'],
        ['Součást věci', 'Vše, co k věci podle povahy náleží a nelze to oddělit bez znehodnocení. Sdílí právní osud věci hlavní.', 't4'],
        ['Příslušenství', 'Samostatná věc téhož vlastníka, která trvale slouží věci hlavní. Může být samostatně předmětem dispozice.', 't5'],
        ['Superficies solo cedit', 'Stavba je zásadně součástí pozemku. Výjimkou jsou například dočasné stavby, inženýrské sítě nebo stavba podle práva stavby.', 't6'],
        ['Materiální publicita (§ 984 OZ)', 'Chrání toho, kdo za úplatu nabyl věcné právo v dobré víře v zapsaný stav katastru, pokud nejde o zákonnou výjimku.', 't7'],
        ['Vklad', 'Zápis, který u smluvního převodu zapsané nemovitosti vlastnictví zakládá (konstitutivní). Účinky se vracejí ke dni doručení návrhu.', 't8'],
        ['Držba vs. detence', 'Držitel vykonává právo pro sebe (nemusí být vlastník). Detentor věc jen ovládá pro jiného nebo z jiného titulu, typicky nájemce či vypůjčitel.', 't9'],
        ['Řádné vydržení', 'Právní titul + poctivá a pravá držba + nepřerušená doba: movitá věc 3 roky, nemovitá 10 let. Vlastnictví vzniká ze zákona.', 't10'],
        ['Mimořádné vydržení', 'Titul se nemusí prokázat, nesmí ale být prokázán nepoctivý úmysl. Doba 6 let (movitá) nebo 20 let (nemovitá).', 't11'],
        ['Nepřímé imise', 'Hluk, pach, prach, světlo či stín jako vedlejší účinek činnosti. Zakázané, jsou-li nepřiměřené místním poměrům a podstatně omezují obvyklé užívání (§ 1013 OZ).', 't12'],
        ['Ideální podíl', 'Míra účasti spoluvlastníka na celé věci, ne konkrétní kus. Hlasuje se podle velikosti podílů.', 't13'],
        ['Právo stavby', 'Právo mít stavbu na cizím pozemku, nejvýš na 99 let. Je samo nemovitou věcí, je převoditelné a děditelné.', 't14'],
        ['Služebnost', 'Vlastník věci musí ve prospěch jiného něco strpět nebo se něčeho zdržet (§ 1257 OZ), třeba cestu. Reálné břemeno naopak ukládá aktivně dávat nebo konat.', 't15'],
        ['Zadržovací právo', 'Kdo má cizí movitou věc oprávněně u sebe, může ji zadržet k zajištění splatného dluhu (§ 1395 OZ). Dlužníka musí vyrozumět.', 't16']
      ],
      qs: [
        ['Lucie podepsala kupní smlouvu na pozemek 2. října, návrh na vklad došel na katastr 5. října a vklad byl později povolen. Od kdy je vlastnicí?', 'Od 5. října, doručení návrhu', ['Od 2. října, podpisem smlouvy', 'Ode dne zaplacení kupní ceny', 'Ode dne, kdy katastr vklad provede'], 'Vlastnictví zapsané nemovitosti vzniká vkladem (§ 1105 OZ), jeho účinky se vztahují ke dni doručení návrhu (§ 10 katastrálního zákona). Smlouva je jen titul.', 'q1'],
        ['Za jak dlouho lze řádně vydržet movitou věc?', '3 roky', ['10 let', '6 let', '1 rok'], 'Nemovitou věc 10 let. Mimořádné vydržení trvá 6, resp. 20 let.', 'q2'],
        ['Jaká je doba mimořádného vydržení nemovité věci?', '20 let', ['10 let', '6 let', '30 let'], 'U mimořádného vydržení se titul nemusí prokázat, ale nesmí být prokázán nepoctivý úmysl.', 'q3'],
        ['Klimatizace kavárny v noci hučí do sousedovy ložnice. O jakou imisi jde?', 'Nepřímou', ['Přímou', 'Žádnou, hluk není imise', 'Veřejnoprávní'], 'Hluk je vedlejší účinek činnosti. Posoudí se míra, místní poměry a podstatné omezení obvyklého užívání (§ 1013 odst. 1 OZ).', 'q4'],
        ['Soused vyvedl okap rourou přímo na Klářinu zahradu. Jak to OZ posoudí?', 'Zakázané bez ohledu na míru', ['Dovolené do hygienického limitu', 'Dovolené, pokud jen přes den', 'Jen podle místních poměrů'], 'Přímá imise je cíleně přiváděna na sousední pozemek a bez zvláštního právního důvodu je zakázána (§ 1013 odst. 1 OZ).', 'q5'],
        ['Tři sourozenci vlastní pozemek (1/2, 1/4, 1/4). Sestra s polovinou chce zřídit sousedovi služebnost cesty na 20 let. Co je potřeba?', 'Souhlas všech tří', ['Prostá většina podílů', 'Dvoutřetinová většina', 'Souhlas dvou ze tří osob'], 'Zatížení společné věci a omezení na dobu přes 10 let vyžaduje souhlas všech spoluvlastníků (§ 1132 OZ).', 'q6'],
        ['Jaká většina stačí spoluvlastníkům k významné záležitosti, třeba ke změně účelu věci?', 'Aspoň 2/3 podle podílů', ['Nadpoloviční počet osob', 'Vždy jednomyslnost', 'Prostá většina přítomných'], 'Běžná správa: přes 1/2 podílů. Významná záležitost: 2/3 (§ 1129 OZ). Zatížení: všichni.', 'q7'],
        ['Anna vlastní statek s Petrem napůl. Chce sama prodat „svou“ levou polovinu pozemku. Může?', 'Ne, může prodat jen podíl', ['Ano, ta polovina patří jí', 'Ano, se souhlasem katastru', 'Ano, pokud ji oplotí'], 'Ideální podíl není fyzická část. Výlučná část vznikne až rozdělením nebo jiným uspořádáním.', 'q8'],
        ['Servis opravil Petrovi traktor, Petr splatných 18 000 Kč nezaplatil a chce traktor zpět. Smí ho servis nevydat?', 'Ano, má zadržovací právo', ['Ne, musí ho vydat hned', 'Ano, traktor mu tím propadne', 'Jen se svolením soudu'], 'Servis má traktor oprávněně u sebe a dluh je splatný (§ 1395 OZ). O zadržení a důvodu musí Petra vyrozumět (§ 1397 OZ). Vlastníkem se nestane.', 'q9'],
        ['Soused roky jen ústně trpěl průjezd k Hanině chatě. Pozemek teď kupuje nový vlastník. Co Haně zajistí přístup i vůči němu?', 'Služebnost cesty zapsaná vkladem', ['Dosavadní ústní tolerance', 'Nájemní smlouva s prodávajícím', 'Čestné prohlášení prodávajícího'], 'Služebnost je věcné právo a váže i další vlastníky. U zapsané věci vzniká zápisem (§ 1262 OZ). Smlouva s prodávajícím váže jen jeho.', 'q10'],
        ['Investor chce na pozemku Anny a Petra provozovat vlastní sklad 40 let. Který institut je nejstabilnější?', 'Právo stavby', ['Služebnost cesty', 'Zástavní právo', 'Zadržovací právo'], 'Právo stavby (max. 99 let) odděluje stavbu od pozemku a je stabilnější než pouhý nájem.', 'q11'],
        ['Banka má zástavní právo k domu a dlužník nesplácí. Co banka může?', 'Uspokojit se z výtěžku zpeněžení', ['Automaticky se stát vlastníkem', 'Dům libovolně užívat', 'Žádat trestní sankci'], 'Zástavní právo dává přednostní uspokojení ze zpeněžení zástavy (§ 1309 OZ). Vlastnictví na věřitele nepřechází.', 'q12'],
        ['Karolína má byt v nájmu. Jaké postavení k bytu má?', 'Detentorka', ['Vlastnice', 'Držitelka vlastnického práva', 'Spoluvlastnice'], 'Nájemce věc ovládá z jiného titulu a neprojevuje vůli být vlastníkem.', 'q13'],
        ['Petr koupil pozemek, na kterém stojí obyčejná garáž (žádná výjimka). Komu garáž patří?', 'Petrovi, je součástí pozemku', ['Původnímu vlastníkovi', 'Obci, kde pozemek leží', 'Tomu, kdo garáž postavil'], 'Superficies solo cedit: stavba je zásadně součástí pozemku.', 'q14'],
        ['Manželé mají byt ve společném jmění. Jak velké podíly mají za trvání SJM?', 'Podíly nejsou určeny', ['Každý přesně 1/2', 'Podle výše příjmů', 'Podle zápisu v katastru'], 'SJM není podílové spoluvlastnictví. V neběžných věcech jednají manželé společně nebo se souhlasem druhého, jinak se druhý může dovolat neplatnosti (§ 714 OZ).', 'q15'],
        ['Eva koupila pozemek od osoby zapsané v katastru jako vlastník. Zápis byl chybný a Eva to nevěděla ani nemohla vědět. Chrání ji zákon?', 'Ano, za podmínek § 984 OZ', ['Ne, katastr nic nezaručuje', 'Jen kdyby pozemek dostala darem', 'Ne, vždy vyhraje původní vlastník'], 'Materiální publicita chrání úplatného nabyvatele v dobré víře v zapsaný stav, pokud nejde o zákonnou výjimku.', 'q16']
      ],
      tips: [
        '<b>Titul + způsob:</b> smlouva je důvod, vlastnictví k zapsanému pozemku vznikne až <b>vkladem</b> (zpětně ke dni doručení návrhu).',
        '<b>Vydržení 3–10, mimořádné 6–20:</b> movitá–nemovitá, mimořádné je vždy dvojnásobek.',
        '<b>Většiny ve spoluvlastnictví:</b> běžná správa přes 1/2, významná věc 2/3, zatížení věci všichni.'
      ]
    },
    {
      id: 'm4', label: 'Modul 4: Závazková práva',
      terms: [
        ['Závazek (§ 1721 OZ)', 'Vztah, v němž věřitel má právo na určité plnění a dlužník povinnost ho splnit.', 't1'],
        ['Pohledávka', 'Právo věřitele na plnění, může zahrnovat i příslušenství. Musí mít právní důvod.', 't2'],
        ['Dluh', 'Povinnost dlužníka splnit řádně a včas. Nesplnění spouští právní následky.', 't3'],
        ['Nabídka (návrh)', 'Účinná je, když dojde adresátovi. Od té chvíle běží doba pro přijetí.', 't4'],
        ['Přijetí (akceptace)', 'Smlouva vzniká, když včasné přijetí dojde navrhovateli. Strany pak váže obsah smlouvy včetně řádně začleněných příloh.', 't5'],
        ['Řádné plnění', 'Správné plnění správné osobě, řádně a včas: předmět, jakost, čas a místo podle dohody.', 't6'],
        ['Jakost plnění', 'Sjednané vlastnosti. Nejsou-li sjednané, vlastnosti obvyklé a použitelnost pro známý účel.', 't7'],
        ['Postoupení pohledávky', 'Mění věřitele: převádí právo požadovat plnění na jiného.', 't8'],
        ['Převzetí a přistoupení k dluhu', 'Mění nebo rozšiřuje stranu dlužníka.', 't9'],
        ['Postoupení smlouvy', 'Převádí celý soubor práv a povinností ze smlouvy na jiného.', 't10'],
        ['Novace, narovnání, dodatek', 'Mění obsah dosavadního závazku nebo ho nahrazují novým.', 't11']
      ],
      qs: [
        ['Eva si objednala boty v e-shopu. Kdo je věřitelem pohledávky na zaplacení ceny?', 'E-shop', ['Eva', 'Dopravce', 'Evina banka'], 'Pohledávka a dluh jsou dvě strany téhož závazku. U dodání bot je to naopak: věřitelkou je Eva.', 'q1'],
        ['Kdy vznikne smlouva?', 'Když včasné přijetí dojde navrhovateli', ['Když adresát přijetí odešle', 'Když navrhovatel nabídku sepíše', 'Až když obě strany zaplatí'], 'Rozhoduje dojití: přijetí se musí dostat do sféry dispozice navrhovatele.', 'q2'],
        ['Hana poslala Petrovi nabídku na kolo za 5 000 Kč. Od kdy je nabídka účinná?', 'Jakmile Petrovi dojde', ['Jakmile ji Hana napíše', 'Až Petr kolo zaplatí', 'Až po podpisu smlouvy'], 'Účinná nabídka = dojde adresátovi, od té chvíle běží doba pro přijetí.', 'q3'],
        ['Truhlář dodal skříň včas, ale v jiné barvě, než byla domluvená. Splnil řádně?', 'Ne, neodpovídá dohodě', ['Ano, dodal ji včas', 'Ano, barva není podstatná', 'Ano, barvu volí truhlář sám'], 'Řádné plnění musí odpovídat celé dohodě včetně sjednaných vlastností. Vadu je dobré zapsat do předávacího protokolu jako výhradu.', 'q4'],
        ['Firma prodala pohledávku za odběratelem inkasní agentuře. O jaký nástroj jde?', 'Postoupení pohledávky', ['Převzetí dluhu', 'Přistoupení k dluhu', 'Narovnání'], 'Postoupením se mění věřitel, dlužník zůstává stejný.', 'q5'],
        ['Otec převezme dluh dcery z půjčky. Která strana závazku se mění?', 'Dlužník', ['Věřitel', 'Žádná, mění se jen předmět', 'Obě strany'], 'Převzetí dluhu (nebo přistoupení k němu) mění povinnou stranu.', 'q6'],
        ['Nájemkyně převede na nástupkyni celou smlouvu se všemi právy a povinnostmi. Jde o…', 'postoupení smlouvy', ['postoupení pohledávky', 'převzetí dluhu', 'narovnání'], 'Postoupení pohledávky převádí jen právo, postoupení smlouvy celý soubor práv a povinností.', 'q7'],
        ['Jaké vlastnosti musí mít zboží, když si je strany nesjednaly?', 'Obvyklé a vhodné ke známému účelu', ['Nejlepší dostupné na trhu', 'Ty, které určí prodávající', 'Žádné, prodávající neručí'], 'Nejdřív rozhodují sjednané vlastnosti, jinak obvyklé a použitelnost pro známý účel.', 'q8'],
        ['Proč si při předání díla dělat protokol a fotky?', 'Prokážou, jak bylo plněno', ['Bez nich smlouva nevznikne', 'Zákon je vyžaduje u každé koupě', 'Nahrazují zaplacení ceny'], 'Důkaz propojuje právo se skutečností: protokol, měření, fotky, potvrzení převzetí a výhrady.', 'q9'],
        ['Kupní smlouva o kole zavazuje…', 'jen své strany (inter partes)', ['všechny třetí osoby (erga omnes)', 'stát i obec, kde se prodává', 'jen prodávajícího, ne kupce'], 'Závazky jsou relativní práva, na rozdíl od věcných práv, která působí vůči každému.', 'q10']
      ],
      tips: [
        '<b>Pohledávka = dluh z druhé strany.</b> Jeden závazek, dva pohledy: věřitel a dlužník.',
        '<b>Rozhoduje dojití:</b> nabídka i přijetí působí, až dojdou druhé straně.',
        '<b>Kdo se mění?</b> Postoupení pohledávky = věřitel, převzetí dluhu = dlužník, postoupení smlouvy = celá jedna strana (práva i povinnosti), novace = obsah.'
      ]
    },
    {
      id: 'm5', label: 'Dědické právo',
      terms: [
        ['Pozůstalost', 'Jmění zůstavitele (aktiva i pasiva) kromě práv a povinností vázaných výlučně na jeho osobu (§ 1475 OZ).', 't1'],
        ['Dědictví', 'Pozůstalost ve vztahu k dědici, tedy to, co dědic právně nabývá.', 't2'],
        ['Dědické právo', 'Právo na pozůstalost nebo její poměrný podíl. Vzniká smrtí zůstavitele (§ 1479 OZ), soud nabytí jen potvrzuje.', 't3'],
        ['Dědic', 'Univerzální nástupce: nabývá celek nebo podíl a nese i dluhy.', 't4'],
        ['Odkazovník', 'Má jen pohledávku na konkrétní plnění (věc, právo) vůči tomu, koho odkaz zatěžuje. Není dědicem.', 't5'],
        ['Dědické tituly', 'Dědická smlouva, závěť a zákon. Mohou působit vedle sebe, každý pro jinou část pozůstalosti.', 't6'],
        ['Dědická smlouva', 'Dvoustranná, ve formě veřejné listiny. Pokryje nejvýš 3/4 pozůstalosti, aspoň 1/4 musí zůstat volná.', 't7'],
        ['Závěť', 'Osobní (ne přes zmocněnce), jednostranná a odvolatelná. Povolává dědice aspoň k podílu na pozůstalosti.', 't8'],
        ['Vlastnoruční závěť (§ 1533 OZ)', 'Celý text vlastní rukou a podpis. Svědci nejsou potřeba.', 't9'],
        ['Alografní závěť (§ 1534 OZ)', 'Jiná písemná forma: vlastnoruční podpis a prohlášení před dvěma současně přítomnými svědky, kteří listinu podepíší.', 't10'],
        ['Zákonná posloupnost', 'Šest tříd, nastupují postupně. I.: děti + manžel stejným dílem. II. (nedědí-li potomci): manžel (vždy aspoň 1/2), rodiče a kvalifikovaná spolužijící osoba, ta ale ne sama.', 't11'],
        ['Nepominutelný dědic', 'Potomek zůstavitele (nedědí-li, jeho potomci). Manžel, rodiče, sourozenci ani družka jím nejsou.', 't12'],
        ['Povinný díl', 'Nezletilý potomek 3/4, zletilý 1/4 zákonného dědického podílu. Je to zásadně peněžní nárok.', 't13'],
        ['Odúmrť', 'Není-li žádný dědic, připadne pozůstalost státu. Ten ji nemůže odmítnout a je chráněn jako s výhradou soupisu.', 't14'],
        ['Výhrada soupisu', 'Dědic hradí dluhy zůstavitele jen do ceny nabytého dědictví. Uplatní se zpravidla do 1 měsíce od vyrozumění soudem.', 't15'],
        ['Vydědění', 'Jednání zůstavitele vůči nepominutelnému dědici jen z důvodů, které zákon stanoví taxativně: neposkytnutí pomoci v nouzi, trvalý nezájem, odsouzení za trestný čin svědčící o zvrhlé povaze, trvale nezřízený život (a zvláštní případy § 1646 odst. 2 a § 1647 OZ).', 't16']
      ],
      qs: [
        ['Bezdětná a svobodná Jana (oba rodiče žijí) vytiskla závěť pro kamarádku Kláru, se kterou nežila, podepsala ji a prohlásila před dvěma svědky, každým zvlášť. Kdo dědí?', 'Rodiče, každý polovinu', ['Klára celé dědictví', 'Klára a rodiče po třetině', 'Stát jako odúmrť'], 'Tištěný text není vlastnoruční závěť a svědci nebyli současně přítomni (§ 1533–1534 OZ). Nastupuje II. třída: rodiče po polovině (§ 1636 OZ).', 'q1'],
        ['Karel zanechal manželku, syna a dvě děti své už zemřelé dcery. Kolik dědí jeden vnuk?', '1/6', ['1/3', '1/4', '1/8'], 'V I. třídě dědí manželka, syn a dcera po 1/3. Dceřina třetina připadne jejím dětem, každému 1/6.', 'q2'],
        ['Čistá pozůstalost je 3 mil. Kč, zůstala manželka, zletilý syn a nezletilá dcera. Závěť povolala jen syna. Jaký je povinný díl dcery?', '750 000 Kč', ['1 000 000 Kč', '250 000 Kč', '1 500 000 Kč'], 'Zákonný podíl dcery 1/3 = 1 000 000 Kč, nezletilá má 3/4 z toho.', 'q3'],
        ['Kdo z nich je nepominutelný dědic?', 'Dítě zůstavitele', ['Manžel zůstavitele', 'Rodič zůstavitele', 'Sourozenec zůstavitele'], 'Chráněni jsou jen potomci. Manžel dědí ze zákona, povinný díl ale nemá.', 'q4'],
        ['Tomáš chce zdědit dům, ale odmítnout otcův dluh z úvěru. Jde to?', 'Ne, nelze odmítnout jen dluhy', ['Ano, odmítne jen ten dluh', 'Ano, se souhlasem notáře', 'Ano, když to stihne do měsíce'], 'Dědictví nelze odmítnout jen zčásti ani s podmínkou. Před dluhy chrání výhrada soupisu.', 'q5'],
        ['Do kdy může dědic s bydlištěm v Česku dědictví odmítnout?', 'Do 1 měsíce od vyrozumění soudem', ['Do 1 měsíce od smrti zůstavitele', 'Do 3 měsíců od smrti zůstavitele', 'Kdykoli do konce řízení'], 'Lhůta běží až od poučení soudem. Má-li dědic jediné bydliště v cizině, jsou to 3 měsíce.', 'q6'],
        ['Co dědici přinese výhrada soupisu?', 'Dluhy hradí jen do ceny dědictví', ['Dluhy nemusí hradit vůbec', 'Dluhy přejdou na stát', 'Dluhy převezmou odkazovníci'], 'Limit je hodnotový. Bez výhrady dědic hradí dluhy bez tohoto limitu, tedy i z vlastního majetku.', 'q7'],
        ['Družka žila se zůstavitelem 10 let, jeho syn po něm dědí. Dědí ze zákona i družka?', 'Ne, v I. třídě nedědí', ['Ano, rovným dílem se synem', 'Ano, polovinu pozůstalosti', 'Ano, po deseti letech vždy'], 'Spolužijící osoba může dědit až ve II. třídě (vedle manžela či rodičů) nebo ve III. třídě. Musí se zůstavitelem žít aspoň rok před smrtí ve společné domácnosti a z toho důvodu o ni pečovat nebo být na něm závislá výživou.', 'q8'],
        ['Zůstavitel byl jediným společníkem s.r.o., která vlastní traktor. Co se po něm dědí?', 'Podíl v s.r.o.', ['Traktor', 'Traktor i účet společnosti', 'Nic, s.r.o. jeho smrtí zaniká'], 'Společnost je samostatná právnická osoba a svůj majetek vlastní sama. Dědí se podíl.', 'q9'],
        ['Manželé měli v SJM dům za 6 mil. Kč, manžel zemřel. Kolik z domu vstupuje do pozůstalosti (při rovném vypořádání)?', '3 mil. Kč', ['6 mil. Kč', '2 mil. Kč', 'Nic, dům připadne vdově'], 'Nejdřív se vypořádá SJM a oddělí podíl pozůstalé manželky, teprve zbytek se dědí.', 'q10'],
        ['Babička odkázala vnučce obraz, dědicem je syn. Kdo má vnučce obraz vydat?', 'Syn, kterého odkaz zatěžuje', ['Notář jako soudní komisař', 'Soud v pozůstalostním řízení', 'Stát jako správce pozůstalosti'], 'Odkazovník má pohledávku vůči osobě zatížené odkazem, sám dědicem není.', 'q11'],
        ['Jakou část pozůstalosti lze nejvýš pokrýt dědickou smlouvou?', '3/4', ['1/2', 'Celou', '1/4'], 'Aspoň 1/4 musí zůstat volná, pro ni lze pořídit třeba závětí.', 'q12'],
        ['Zůstavitel nemá žádného dědice. Komu pozůstalost připadne?', 'Státu jako odúmrť', ['Obci posledního bydliště', 'Věřitelům zůstavitele', 'Kraji, kde zemřel'], 'Česká republika má postavení zákonného dědice a odúmrť nemůže odmítnout.', 'q13'],
        ['Kdy vzniká dědické právo?', 'Smrtí zůstavitele', ['Rozhodnutím soudu', 'Přijetím dědictví', 'Otevřením závěti'], '§ 1479 OZ. Soud v řízení nabytí dědictví jen potvrzuje.', 'q14']
      ],
      tips: [
        '<b>Pořadí otázek:</b> rozsah (SJM!) → titul → osoby → dluhy a lhůty → proces.',
        '<b>Povinný díl ¾ a ¼:</b> nezletilé dítě víc, zletilé méně, vždy ze <b>zákonného</b> podílu, ne z celé pozůstalosti.',
        '<b>Vše, nebo nic:</b> dědictví nejde odmítnout napůl. Před dluhy chrání <b>výhrada soupisu</b>.'
      ]
    }
  ],
  gens: [],
  // Roztřiď: items = [text, index přihrádky]
  sorts: [
    { topic: 'm1', title: 'Části právní normy', bins: ['Hypotéza', 'Dispozice', 'Sankce'], items: [
      ['Nastane-li situace X…', 0], ['Podmínky, za nichž norma nastupuje', 0], ['Okruh skutkových podstat a subjektů', 0], ['Je-li vlastník nálezu znám…', 0],
      ['…pak je Y povinen konat Z', 1], ['Vlastní pravidlo chování', 1], ['Jádro normy', 1], ['…nálezce mu věc vrátí', 1],
      ['…jinak nastoupí následek S', 2], ['Následek porušení povinnosti', 2], ['Správní nebo trestní sankce', 2]
    ] },
    { topic: 'm1', title: 'Kde se předpis vyhlašuje', bins: ['e-Sbírka', 'Sbírka ÚSC'], items: [
      ['Zákon', 0], ['Ústavní zákon', 0], ['Nařízení vlády', 0], ['Vyhláška ministerstva', 0], ['Vyhlášená mezinárodní smlouva', 0], ['Nález ÚS určený k vyhlášení', 0],
      ['Obecně závazná vyhláška obce', 1], ['Obecně závazná vyhláška kraje', 1], ['Nařízení obce', 1], ['Nařízení kraje', 1]
    ] },
    { topic: 'm3', title: 'Movitá, nebo nemovitá věc?', bins: ['Movitá', 'Nemovitá'], items: [
      ['Pozemek', 1], ['Lesní pozemek', 1], ['Právo stavby', 1], ['Bytová jednotka', 1],
      ['Traktor', 0], ['Notebook', 0], ['Fotoaparát', 0], ['Obraz', 0], ['Jízdní kolo', 0], ['Skříň', 0]
    ] },
    { topic: 'm5', title: 'Kdo dědí v které třídě', bins: ['I. třída', 'II. třída', 'III. třída'], items: [
      ['Děti zůstavitele', 0], ['Vnuci za zemřelé dítě', 0], ['Manžel vedle dětí', 0],
      ['Manžel, když nedědí potomci', 1], ['Rodiče zůstavitele', 1], ['Kvalifikovaná družka vedle rodičů', 1],
      ['Sourozenci zůstavitele', 2], ['Děti sourozence na jeho místě', 2]
    ] }
  ],
  // Najdi chybu: bad = index chybného kroku
  errs: [
    { topic: 'm1', title: 'Zákon před Novým rokem', q: 'Zákon s novou povinností pro firmy vyšel v e-Sbírce 20. listopadu, účinnost má od 1. ledna. Musí ho firma dodržovat už v prosinci?', steps: [
      'I: Vzniká firmě nová povinnost už v prosinci?',
      'R: Předpis zavazuje ode dne platnosti, tedy od vyhlášení v e-Sbírce.',
      'A: Zákon vyšel 20. listopadu, takže v prosinci už zavazuje.',
      'C: Firma musí novou povinnost plnit už v prosinci.'
    ], bad: 1, fix: 'Vyhlášením předpis nabývá jen platnosti. Zavazuje až dnem účinnosti, mezi tím běží vacatio legis. Firma musí povinnost plnit až od 1. ledna.' },
    { topic: 'm1', title: 'Zákon, nebo vyhláška?', q: 'Starší zákon dává podnikatelům lhůtu 30 dní, novější vyhláška ministerstva k témuž jen 15 dní. Kterou lhůtu musí podnikatelka dodržet?', steps: [
      'I: Který z odporujících si předpisů se použije?',
      'R: Při rozporu má přednost pozdější předpis (lex posterior).',
      'A: Vyhláška je novější než zákon, má tedy přednost.',
      'C: Platí lhůta 15 dní z vyhlášky.'
    ], bad: 1, fix: 'Lex posterior rozhoduje jen mezi předpisy stejné právní síly. Zákon a vyhláška mají sílu rozdílnou, proto platí lex superior: zákon má přednost a lhůta je 30 dní.' },
    { topic: 'm3', title: 'Obraz od nevlastníka', q: 'Eva dostala od Petra darem obraz. Petr ale nebyl vlastníkem, o čemž Eva nevěděla ani nemohla vědět. Obraz poctivě a pravě drží nepřerušeně 4 roky. Vydržela ho řádně?', steps: [
      'Titul: darovací smlouva je právní důvod způsobilý k nabytí vlastnictví.',
      'Kvalita: Eva drží obraz poctivě a pravě.',
      'Doba: řádné vydržení movité věci trvá 10 let.',
      'Závěr: Eva drží teprve 4 roky, řádně tedy zatím nevydržela.'
    ], bad: 2, fix: '10 let platí pro nemovitou věc. Movitá věc se řádně vydrží za 3 roky, takže po 4 letech poctivé a pravé držby s titulem je Eva vlastnicí.' },
    { topic: 'm5', title: 'Povinný díl Anny', q: 'Pavel zanechal manželku Evu, šestnáctiletou Annu a zletilého Davida. SJM má hodnotu 6 000 000 Kč (rovné vypořádání), Pavlův výlučný majetek 2 000 000 Kč, dluhy žádné. Platná závěť povolala jen Evu. Kolik činí povinný díl Anny?', steps: [
      'SJM se vypořádá: Evě patří 3 000 000 Kč, do pozůstalosti jde 3 000 000 Kč.',
      'Pozůstalost: 3 000 000 + 2 000 000 = 5 000 000 Kč.',
      'Anna je nezletilá, povinný díl jsou 3/4 pozůstalosti: 3/4 × 5 000 000 = 3 750 000 Kč.',
      'Eva musí Anně vyplatit 3 750 000 Kč.'
    ], bad: 2, fix: 'Povinný díl se počítá ze zákonného podílu, ne z celé pozůstalosti. Ze zákona by Eva, Anna i David dědili po 1/3, takže Anně patří 3/4 × 1/3 = 1/4 pozůstalosti, tedy 1 250 000 Kč.' }
  ],
  lessons: [
    {
      id: 'l5', topic: 'm1', title: 'Teorie práva: jak funguje právní řád', min: 12,
      steps: [
        { h: 'Prameny práva a právní stát', html: '<p>Česká hierarchie: <b>ústavní pořádek</b> → <b>zákony</b> (a zákonná opatření Senátu) → <b>podzákonné předpisy</b> (nařízení vlády, vyhlášky). Vyhlášená mezinárodní smlouva podle <b>čl. 10 Ústavy</b> má při rozporu se zákonem <b>aplikační přednost</b>, zákon tím ale nezruší.</p><p>Zákony se od roku 2024 vyhlašují v <b>e-Sbírce</b>, vyhlášky obcí a krajů ve <b>Sbírce ÚSC</b>.</p><p>Dvě ústavní pravidla: státní moc smí jen to, <b>co jí zákon dovolí</b> (čl. 2 odst. 3 Ústavy). Ty smíš vše, <b>co zákon nezakazuje</b> (čl. 2 odst. 4).</p>', check: 'q10' },
        { h: 'Platnost, účinnost, působnost', html: '<p><b>Platnost</b>: předpis je řádně vyhlášený a stal se součástí právního řádu. <b>Účinnost</b>: den, od kterého se uplatňuje a zavazuje. Mezi nimi běží <b>vacatio legis</b>.</p><p>Celostátní předpisy nabývají účinnosti obecně <b>1. 1. nebo 1. 7.</b> (výjimky jsou možné), předpisy obcí a krajů <b>15. dnem po vyhlášení</b>, není-li stanovena pozdější účinnost.</p><p>Účinná norma ještě nemusí dopadat na tvůj případ. Prověř <b>působnost</b>: osobní, věcnou, územní a časovou, k tomu výjimky a přechodná ustanovení.</p>', check: 'q14' },
        { h: 'Právní norma a její povaha', html: '<p>Model normy <b>H–D–S</b>: <b>hypotéza</b> „nastane-li situace X…“, <b>dispozice</b> „…pak je Y povinen či oprávněn konat Z“, <b>sankce</b> „…jinak nastoupí následek S“. Všechny tři části nemusí stát v jednom paragrafu.</p><p>Od <b>kogentní</b> normy se strany nemohou platně odchýlit. Je častá ve veřejném právu a tam, kde zákon chrání veřejný pořádek, dobré mravy nebo postavení osob. <b>Dispozitivní</b> norma se použije, jen když si strany věc neupraví jinak (§ 1 odst. 2 OZ).</p>', check: 'q5' },
        { h: 'Když si normy odporují', html: '<p><b>Lex superior</b>: vyšší právní síla vítězí (Ústava před zákonem, zákon před vyhláškou). <b>Lex specialis</b>: zvláštní úprava před obecnou (ZOK před OZ). <b>Lex posterior</b>: pozdější před dřívější, ale jen <b>u stejné právní síly</b>. Při rozdílné síle rozhoduje superior.</p><p>Výklad: <b>jazykový</b> (text), <b>systematický</b> (souvislosti), <b>teleologický</b> (smysl a účel), <b>historický</b> (úmysl zákonodárce). Podle Ústavního soudu je jazykový výklad jen <b>prvotní přiblížení</b>.</p>', check: 'q16' },
        { h: 'Osoby a právo EU', html: '<p><b>Právní osobnost</b> je způsobilost mít práva a povinnosti, člověk ji má <b>od narození do smrti</b>. <b>Svéprávnost</b> je způsobilost nabývat je vlastním jednáním. Plná přichází <b>zletilostí</b>, dřív přiznáním nebo uzavřením manželství. Nezletilá zvládne jednání přiměřená své vyspělosti. <b>Živé zvíře není věc</b> (§ 494 OZ).</p><p>Akty EU: <b>nařízení</b> je přímo použitelné bez transpozice, <b>směrnice</b> zavazuje stát výsledkem a zpravidla se transponuje, <b>rozhodnutí</b> je závazné v celém rozsahu (má-li adresáty, jen pro ně), <b>doporučení a stanoviska</b> nejsou závazná. Při kolizi má unijní právo <b>aplikační přednost</b>.</p>', check: 'q18' },
        { h: 'Případ: focení před úřadem (IRAC)', html: '<p>Fotíš na veřejném chodníku před úřadem. Úředník vyjde ven a zakáže ti to, protože se mu to nelíbí a připadá mu to nepatřičné.</p><p><b>I – otázka:</b> Smí úředník zakázat focení jen kvůli své nelibosti, bez zákonného podkladu?</p><p><b>R – pravidlo:</b> Státní moc lze uplatňovat jen v případech, v mezích a způsoby, které stanoví zákon (čl. 2 odst. 3 Ústavy, čl. 2 odst. 2 Listiny). Každý smí činit, co zákon nezakazuje (čl. 2 odst. 4 Ústavy).</p><p><b>A – aplikace:</b> Nelibost není zákonný důvod. Omezení by mohlo plynout jen z konkrétního předpisu nebo zvláštního režimu a ten tu chybí.</p><p><b>C – závěr:</b> Zákaz uložit nesmí. Postup si zapamatuj: otázka → pravidlo s pramenem → aplikace na fakta → závěr s výhradami.</p>', check: 'q20' }
      ],
      quiz: ['q1', 'q2', 'q4', 'q7', 'q8', 'q11', 'q15', 'q17']
    },
    {
      id: 'l1', topic: 'm2', title: 'Občanské právo: svoboda a její meze', min: 10,
      warm: ['m1.q4', 'm1.q8'],
      steps: [
        { h: 'Soukromé, nebo veřejné?', html: '<p>Soukromé právo upravuje vztahy osob v <b>rovnocenném postavení</b>, žádná strana není vrchnost. Podle § 1 odst. 1 OZ je v zásadě nezávislé na právu veřejném. Rozhoduje <b>povaha vztahu</b>, ne název instituce: koupě notebooku od spolužáka je soukromoprávní, stavební povolení veřejnoprávní.</p><p>Právní rovnost neznamená stejnou sílu. Spotřebitele, nájemce nebo malého dodavatele chrání <b>konkrétní ochranná pravidla</b>.</p>' },
        { h: 'Mapa občanského zákoníku', html: '<p>OZ (zákon č. 89/2012 Sb.) je <b>obecný kodex</b> soukromého práva. Zvláštní zákony (ZOK, zákoník práce, autorský zákon) mají přednost, OZ doplní zbytek.</p><p>Pět částí: <b>I. obecná část</b> (zásady, osoby, právní jednání, ochrana osobnosti), <b>II. rodinné právo</b>, <b>III. absolutní majetková práva</b> (vlastnictví, věcná práva, dědění), <b>IV. relativní majetková práva</b> (závazky, náhrada újmy), <b>V. společná a závěrečná ustanovení</b>.</p>', check: 'q3' },
        { h: 'Autonomie vůle a její meze', html: '<p>Sama rozhoduješ, <b>zda, s kým, co a jak</b> ujednáš. Dispozitivní pravidlo platí, jen když si strany nedohodnou jinak. Kogentní pravidlo je hranice.</p><p>Test odchylky podle § 1 odst. 2: <b>výslovný zákaz?</b> <b>dobré mravy nebo veřejný pořádek?</b> <b>status osoby?</b> (právní osobnosti se vzdát nejde). Teprve když projdeš všemi branami, odchylka obstojí.</p><p>Hodnotové zásady: <b>pacta sunt servanda</b>, <b>poctivost</b> (jak jednáš), <b>dobrá víra</b> (co si rozumně myslíš, zákon ji předpokládá) a <b>§ 8</b>: zjevné zneužití práva nepožívá ochrany.</p>', check: 'q11' },
        { h: 'Výklad, analogie a osobnost', html: '<p>Výklad podle § 2 jde od <b>textu</b> přes <b>systém</b> a <b>účel</b> k <b>hodnotám</b>. Když pravidlo opravdu chybí, nastupuje <b>analogie (§ 10)</b>: nejdřív nejbližší ustanovení, pak principy spravedlnosti. § 13 chrání očekávání, že podobný případ dopadne podobně.</p><p>Osobnost chrání <b>§ 81</b> otevřeným výčtem. Souhlas s pořízením fotky není souhlas s každým dalším užitím, zákonná licence musí odpovídat účelu a GDPR se posuzuje zvlášť. Nároky: upuštění od zásahu, odstranění následků, zadostiučinění, peníze až když jiná náprava nestačí.</p>', check: 'q13' },
        { h: 'Případ: cedule v lezecké hale (IRAC)', html: '<p>U vstupu visí „Za jakoukoli újmu neodpovídáme“, totéž je v nevyjednávané smlouvě. Provozovatel věděl o uvolněném chytu, návštěvnice po jeho pádu utrpí zranění.</p><p><b>I – otázka:</b> Zbaví se provozovatel odpovědnosti cedulí a klauzulí?</p><p><b>R – pravidlo:</b> K oznámení vylučujícímu náhradu se nepřihlíží (§ 2896 OZ). Náhradu újmy na přirozených právech člověka nelze předem vyloučit (§ 2898 OZ).</p><p><b>A – aplikace:</b> Cedule může nanejvýš varovat. Klauzule nepokryje újmu na zdraví. Znalost vadného chytu ukazuje na porušení povinnosti.</p><p><b>C – závěr:</b> Nárok nevylučuje ani cedule, ani klauzule. Návštěvnice ale musí prokázat zranění a příčinnou souvislost.</p>' }
      ],
      quiz: ['q1', 'q2', 'q4', 'q5', 'q6', 'q9', 'q10', 'q12']
    },
    {
      id: 'l2', topic: 'm3', title: 'Věcná práva: kdo má k věci právo', min: 12,
      warm: ['m2.q8', 'm1.q9'],
      steps: [
        { h: 'Věcné právo a jeho předmět', html: '<p>Věcné právo působí <b>vůči každému</b> (erga omnes), závazek jen mezi stranami. Typy věcných práv určuje zákon (<b>numerus clausus</b>): vlastnictví, věcná břemena, právo stavby, zástavní a zadržovací právo.</p><p><b>Nemovitá věc</b> je pozemek a práva či věci, které za nemovité určí zákon (třeba právo stavby nebo bytová jednotka), vše ostatní je movité. <b>Součást</b> nelze oddělit bez znehodnocení, <b>příslušenství</b> je samostatná věc téhož vlastníka. Stavba je zásadně <b>součástí pozemku</b> (superficies solo cedit).</p>' },
        { h: 'Katastr: vklad a publicita', html: '<p>Na listu vlastnictví najdeš v části A vlastníka, v C omezení (zástavy, břemena), v D poznámky a plomby. <b>Plomba</b> varuje, že se se zápisem něco děje.</p><p><b>Vklad</b> u smluvního převodu vlastnictví <b>zakládá</b>, <b>záznam</b> zapisuje právo vzniklé jinak, <b>poznámka</b> jen upozorňuje. <b>Materiální publicita</b> (§ 984 OZ) chrání úplatného nabyvatele v dobré víře v zapsaný stav. Dobrá víra ale není pasivita: podezřelé okolnosti je třeba prověřit.</p>' },
        { h: 'Případ: kdy je Lucie vlastnicí (IRAC)', html: '<p>Lucie podepíše kupní smlouvu na pozemek 2. října, návrh na vklad dojde katastru 5. října, vklad je později povolen. Prodávající tvrdí, že vlastnictví přešlo podpisem.</p><p><b>I – otázka:</b> Stačí k nabytí zapsaného pozemku podpis smlouvy?</p><p><b>R – pravidlo:</b> Vlastnictví k zapsané nemovitosti se při převodu nabývá zápisem do veřejného seznamu (§ 1105 OZ). Účinky nastávají ke dni doručení návrhu (§ 10 katastrálního zákona).</p><p><b>A – aplikace:</b> Smlouva je jen <b>titul</b>. Vlastnictví vznikne povoleným vkladem s účinky k 5. říjnu.</p><p><b>C – závěr:</b> Lucie je vlastnicí od <b>5. října</b>, ne od podpisu.</p>' },
        { h: 'Držba a vydržení', html: '<p><b>Držitel</b> vykonává právo pro sebe a nemusí být vlastník. <b>Detentor</b> (nájemce, vypůjčitel) věc jen ovládá pro jiného nebo z jiného titulu a neprojevuje vůli být vlastníkem. Držbu chrání právo rychle, bez sporu o vlastnictví: nikdo nesmí brát věc svémocí.</p><p><b>Řádné vydržení</b> = titul + poctivá a pravá držba + čas: <b>3 roky</b> movitá, <b>10 let</b> nemovitá. <b>Mimořádné</b>: <b>6 / 20 let</b>, titul se prokazovat nemusí, ale nesmí být prokázán nepoctivý úmysl.</p>', check: 'q13' },
        { h: 'Vlastnictví, sousedé, spoluvlastníci', html: '<p>Vlastník může věc držet, užívat, brát plody a disponovat s ní. <b>Vlastnictví zavazuje</b>. <b>Přímé imise</b> (svod vody přímo k sousedovi) jsou bez zvláštního důvodu zakázané. <b>Nepřímé</b> (hluk, prach, světlo) jen když jsou nepřiměřené místním poměrům a podstatně omezují obvyklé užívání (§ 1013 OZ).</p><p>Spoluvlastník má <b>ideální podíl</b>, ne kus pole. Hlasuje se podle podílů: běžná správa <b>přes 1/2</b>, významná záležitost <b>2/3</b>, zatížení věci nebo omezení přes 10 let <b>všichni</b>. <b>SJM</b> podíly za trvání nemá.</p>', check: 'q7' },
        { h: 'Práva k cizí věci a zajištění', html: '<p><b>Právo stavby</b>: stavba na cizím pozemku, max. 99 let, samo je nemovitou věcí. <b>Služebnost</b>: vlastník něco strpí (cesta, vedení). <b>Reálné břemeno</b>: vlastník aktivně dává nebo koná.</p><p><b>Zástavní právo</b> zajišťuje dluh přednostním uspokojením ze zpeněžení, vlastnictví na věřitele nepřechází. <b>Zadržovací právo</b> má ten, kdo cizí movitou věc oprávněně drží, třeba opravář traktoru, a musí dlužníka vyrozumět.</p>', check: 'q12' }
      ],
      quiz: ['q1', 'q4', 'q6', 'q8', 'q9', 'q10', 'q11', 'q14', 'q16']
    },
    {
      id: 'l3', topic: 'm4', title: 'Závazky: od nabídky ke splnění', min: 6,
      warm: ['m1.q6', 'm2.q2'],
      steps: [
        { h: 'Pohledávka a dluh', html: '<p>Závazek (§ 1721 OZ) spojuje <b>konkrétního věřitele</b> a <b>konkrétního dlužníka</b>. Věřitel má <b>pohledávku</b> (právo na plnění), dlužník <b>dluh</b> (povinnost splnit řádně a včas). Je to jeden vztah ze dvou stran.</p><p>Závazky jsou relativní práva (část IV. OZ), působí jen mezi stranami.</p>', check: 'q10' },
        { h: 'Jak vzniká smlouva', html: '<p><b>Nabídka</b> je účinná, když <b>dojde</b> adresátovi, a běží doba pro přijetí. Smlouva vzniká, když <b>včasné přijetí dojde</b> navrhovateli. Strany pak váže obsah smlouvy včetně řádně začleněných příloh.</p>' },
        { h: 'Řádné plnění a změny závazku', html: '<p>Dlužník splní, jen když dá <b>správné plnění správné osobě, řádně a včas</b>: předmět, jakost (sjednaná, jinak obvyklá), čas a místo. Důkazem je protokol, fotky, potvrzení převzetí a výhrady.</p><p>Změny: <b>postoupení pohledávky</b> mění věřitele, <b>převzetí či přistoupení k dluhu</b> dlužníka, <b>postoupení smlouvy</b> převádí celý soubor práv a povinností, <b>novace, narovnání, dodatek</b> mění obsah.</p>', check: 'q8' },
        { h: 'Případ: skříň v jiné barvě (IRAC)', html: '<p>Zákaznice si u truhláře objednala skříň v bílé barvě. Truhlář ji dodal včas, ale dubovou.</p><p><b>I – otázka:</b> Splnil truhlář svůj dluh řádně?</p><p><b>R – pravidlo:</b> Řádné plnění musí odpovídat celé dohodě: předmět, sjednaná jakost, čas a místo.</p><p><b>A – aplikace:</b> Čas sedí, sjednaná vlastnost (barva) ne.</p><p><b>C – závěr:</b> Nesplnil řádně. Zákaznice by měla vadu zapsat do předávacího protokolu jako výhradu a vyfotit.</p>' }
      ],
      quiz: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q9']
    },
    {
      id: 'l4', topic: 'm5', title: 'Dědění krok za krokem', min: 12,
      warm: ['m3.q15', 'm2.q3'],
      steps: [
        { h: 'Pět otázek ve správném pořadí', html: '<p>Dědický případ řeš vždy stejně: <b>1. rozsah</b> (co patří do pozůstalosti), <b>2. titul</b> (smlouva, závěť, zákon), <b>3. osoby</b> (dědicové, povinné díly), <b>4. riziko</b> (dluhy, lhůty, správa), <b>5. proces</b> (soud, notář, cizina).</p><p>Dědické právo <b>vzniká smrtí</b> zůstavitele (§ 1479 OZ). Soud nabytí jen potvrzuje, notář jedná jako jeho <b>nestranný komisař</b>, ne jako advokát rodiny.</p>', check: 'q14' },
        { h: 'Co se dědí', html: '<p><b>Pozůstalost</b> = jmění zůstavitele i s dluhy, bez práv vázaných jen na jeho osobu. <b>SJM se vypořádá dřív</b>: při rovném vypořádání patří polovina společného domu vdově, dědí se jen zůstavitelova část. Po společníkovi s.r.o. se dědí <b>podíl</b>, ne traktor společnosti.</p><p><b>Dědic</b> je univerzální nástupce a nese i dluhy. <b>Odkazovník</b> má jen nárok na konkrétní věc vůči tomu, koho odkaz zatěžuje.</p>' },
        { h: 'Tituly a forma závěti', html: '<p>Tituly mohou působit <b>vedle sebe</b>. <b>Dědická smlouva</b> je dvoustranná veřejná listina, max. <b>3/4</b> pozůstalosti. <b>Závěť</b> je osobní, jednostranná a odvolatelná.</p><p>Formy: <b>vlastnoruční</b> (celý text rukou + podpis), <b>alografní</b> (podpis + prohlášení před <b>dvěma současně přítomnými svědky</b>, kteří podepíší), <b>veřejná listina</b> (notářský zápis). Pozdější závěť ruší starší jen tam, kde vedle sebe nemohou obstát.</p>', check: 'q12' },
        { h: 'Případ: závěť z počítače (IRAC)', html: '<p>Bezdětná a svobodná Jana má oba rodiče. Vytiskla závěť pro přítelkyni Kláru, se kterou nežila ve společné domácnosti, a podepsala ji. Svědkům Lucii a Martinovi ji s týdenním odstupem prohlásila za poslední vůli, každému zvlášť, a oba se podepsali.</p><p><b>I – otázka:</b> Je listina platnou závětí? Kdo dědí?</p><p><b>R – pravidlo:</b> Vlastnoruční závěť musí být celá psaná rukou (§ 1533 OZ). Jiná písemná vyžaduje prohlášení před dvěma <b>současně</b> přítomnými svědky (§ 1534 OZ).</p><p><b>A – aplikace:</b> Text je tištěný a svědci nebyli přítomni současně. Žádná forma není splněna.</p><p><b>C – závěr:</b> Klára nedědí. Nastupuje II. třída: <b>matka a otec po 1/2</b> (§ 1636 OZ).</p>' },
        { h: 'Zákonné třídy a povinný díl', html: '<p><b>I. třída:</b> děti + manžel stejným dílem (za zemřelé dítě jeho potomci). <b>II.</b> (nedědí-li potomci): manžel (vždy aspoň 1/2), rodiče, kvalifikovaná spolužijící osoba, ta ale ne sama. <b>III.</b> (nedědí-li manžel ani rodiče): sourozenci (za ně jejich děti) a kvalifikovaná spolužijící osoba. <b>IV.–VI.:</b> prarodiče a vzdálenější příbuzní. Kvalifikovaná = aspoň rok před smrtí ve společné domácnosti a z toho důvodu péče o ni nebo závislost na výživě od zůstavitele. Nikdo nedědí? <b>Odúmrť</b> státu.</p><p><b>Nepominutelní dědici</b> jsou jen potomci. Povinný díl: nezletilý <b>3/4</b>, zletilý <b>1/4</b> zákonného podílu, je to peněžní nárok. Příklad: pozůstalost 3 mil., manželka, zletilý syn a nezletilá dcera, závěť povolala jen syna → zákonný podíl dcery 1 mil., její povinný díl 750 000 Kč.</p>' },
        { h: 'Dluhy a lhůty', html: '<p><b>Odmítnout</b> dědictví lze do <b>1 měsíce od vyrozumění soudem</b> (3 měsíce při bydlišti jen v cizině), jen celé a bez podmínky. Nejde „přijmu dům, odmítnu dluh“.</p><p><b>Výhrada soupisu</b> omezí odpovědnost za dluhy <b>do ceny nabytého dědictví</b>. Bez ní dědic hradí dluhy bez tohoto limitu, tedy i z vlastního majetku. Ochranu ohrozí zatajení majetku nebo nepravdivý seznam.</p>', check: 'q6' }
      ],
      quiz: ['q1', 'q2', 'q3', 'q4', 'q5', 'q7', 'q9', 'q10', 'q11']
    }
  ]
});

// FACT: ['Vlastnicí zpětně', 'U pozemku zapsaného v katastru vzniká vlastnictví až vkladem, jeho účinky se ale vracejí ke dni, kdy návrh došel na katastr. V srpnu 2026 trvalo provedení vkladu v průměru 22 dní.']
// FACT: ['Závěť z tiskárny', 'Vytištěná a jen podepsaná závěť není vlastnoruční. Platí jen tehdy, když ji pisatel prohlásí za svou poslední vůli před dvěma současně přítomnými svědky.']
// FACT: ['Cedule nepomůže', 'Nápis „Za jakoukoli újmu neodpovídáme“ náhradu nevylučuje, soud k němu nepřihlíží (§ 2896 OZ). Nanejvýš funguje jako varování.']
