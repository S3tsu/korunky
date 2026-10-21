/* Daňová soustava, podle přednášek 1–5 ZS 2026 (úvod, daň silniční, daň z nemovitých věcí, DPFO). */
KR.predmet({
  id: 'dane', name: 'Daňová soustava', short: 'Daně', icon: 'dan',
  lead: 'Základní daňové pojmy, daň silniční, daň z nemovitých věcí a daň z příjmů fyzických osob. Podle přednášek ZS 2026.',
  exams: [{ date: '2026-12-14', to: '2026-12-20', what: 'Zápočtová písemka z daní', note: '40 min, 2 příklady z DPFO, DPPO a DPH, −3 b. za chybu, min. 25 ze 40 b.' }],
  test: { label: 'Zkouška', n: 30, min: 35, ok: 2, bad: -1, max: 60 },
  // Memes: k = neano | mozek | nikdo | tlacitka | kdyz, l = texty panelů, why = co si z toho zapamatovat
  memes: [
    { topic: 'p1', k: 'neano', l: ['Odpočet snižuje daň', 'Odpočet snižuje základ, sleva až daň'], why: 'Odpočet od základu daně zmenší základ, sleva na dani zmenší už vypočtenou daň.' },
    { topic: 'p1', k: 'nikdo', l: ['Zaměstnavatel (plátce): „Já to jen odvádím.“ Zaměstnanec (poplatník): „A já to celé platím.“'], why: 'Plátce daň vypočítá, srazí a odvede, poplatník ji ze svého nese.' },
    { topic: 'p1', k: 'tlacitka', l: ['Tipnout (+2, nebo −1 b.)', 'Nechat prázdné (0 b.)'], cap: 'Otázka v testu z daní a nemám tušení', why: 'Správně +2, špatně −1, nic 0. Při čtyřech možnostech se tipovat vyplatí, až když umíš vyloučit aspoň dvě.' },
    { topic: 'p1', k: 'kdyz', l: ['Osobní auto od roku 2022', 'Silniční daň? Neznám.'], why: 'Osobní auta nejsou zdanitelná vozidla. Zdanitelná jsou jen nákladní auta N2, N3 a jejich přípojná vozidla O3, O4, a i z nich ta lehčí mají nulovou sazbu.' },
    { topic: 'p2', k: 'kdyz', l: ['Finanční úřad zaokrouhluje', 'skoro vždycky nahoru'], why: 'U daně z nemovitých věcí se nahoru zaokrouhluje základ (na celé m² nebo koruny), výchozí daň i daň za výpočtový list. Matematicky jen výsledná sazba stavby.' },
    { topic: 'p2', k: 'nikdo', l: ['Metro: „Jsem nemovitá věc.“ Vinný sklep: „Já taky.“'], why: 'Podzemní stavba se samostatným účelovým určením je nemovitá věc (§ 498 OZ).' },
    { topic: 'p3', k: 'mozek', l: ['Hrubá mzda', 'Zaokrouhlit na stovky nahoru', 'Krát 15 %', 'Minus 2 570 Kč sleva na poplatníka'], why: 'Měsíční záloha: hrubá mzda na stovky nahoru × 15 % − sleva na poplatníka − zvýhodnění na děti.' },
    { topic: 'p3', k: 'neano', l: ['Sleva na poplatníka do mínusu', 'Do mínusu (bonus) jen zvýhodnění na děti'], why: 'Slevy snižují daň nejvýš na nulu. Přes nulu umí jít jen daňové zvýhodnění na děti.' }
  ],
  topics: [
    {
      id: 'p1', label: '1. Úvod do daní a daň silniční',
      terms: [
        ['Daň', 'Povinná, nenávratná, zákonem určená platba do veřejného rozpočtu. Je neúčelová a neekvivalentní.', 't1'],
        ['Daňová soustava', 'Souhrn daní vybíraných v určitém státě, v určitém čase a upravených v daňových zákonech.', 't2'],
        ['Daňový systém', 'Daňová soustava + organizace + správa daní: všechny daně, vztahy mezi nimi a pravidla jejich výběru.', 't3'],
        ['Daňový mix', 'Struktura a podíl jednotlivých daní na celkovém výnosu státu.', 't4'],
        ['Poplatník', 'Daňový subjekt, jehož příjem nebo majetek je dani podroben.', 't5'],
        ['Plátce', 'Daňový subjekt, který je povinen daň vypočítat, srazit a odvést do veřejného rozpočtu.', 't6'],
        ['Základ daně', 'Předmět daně vyjádřený v měrných jednotkách a upravený podle zákona. Z něj se sazbou vypočte daň.', 't7'],
        ['Sleva na dani', 'Částka, která snižuje už vypočtenou daň.', 't8'],
        ['Odpočet od základu daně', 'Položka, která snižuje základ daně.', 't9'],
        ['Poplatek', 'Peněžní ekvivalent za službu veřejného sektoru. Je účelový, dobrovolný, nepravidelný a nenávratný.', 't10'],
        ['Nepřímá daň', 'Daň placená v cenách zboží a služeb. Poplatníkem je konečný spotřebitel, plátcem výrobce, obchod nebo dovozce.', 't11'],
        ['Daň in rem', 'Daň „na věc“, platí se bez ohledu na platební schopnost poplatníka (spotřební daně, DPH, majetkové daně, ale i DPPO).', 't12']
      ],
      qs: [
        ['Čím se liší plátce od poplatníka?', 'Plátce daň odvádí, poplatník ji ze svého nese', ['Poplatník daň odvádí, plátce ji ze svého nese', 'Plátce je vždy finanční úřad, který daň vybírá', 'Nijak, oba pojmy znamenají totéž'], 'Plátce daň vypočítá, srazí a odvede, poplatníkovi je příjem nebo majetek zdaněn. U daně ze závislé činnosti je plátcem zaměstnavatel a poplatníkem zaměstnanec.', 'q1'],
        ['Která vlastnost k dani nepatří?', 'Ekvivalentní', ['Povinná', 'Nenávratná', 'Zákonná'], 'Daň je neekvivalentní: za zaplacenou daň nedostaneš přímou protihodnotu.', 'q2'],
        ['Co snižuje už vypočtenou daň?', 'Sleva na dani', ['Odpočet od základu daně', 'Osvobození od daně', 'Zdaňovací období'], 'Odpočet snižuje základ daně, sleva až samotnou daň.', 'q3'],
        ['Spotřební daň z alkoholu se počítá z litrů čistého alkoholu. Jde o daň…', 'specifickou (jednotkovou)', ['hodnotovou (ad valorem)', 'bez vztahu k základu daně', 'osobní'], 'Ad valorem mají základ v penězích (DPFO, DPPO).', 'q4'],
        ['Kdo je poplatníkem nepřímé daně?', 'Konečný spotřebitel', ['Výrobce zboží', 'Obchodník se zbožím', 'Finanční úřad'], 'Výrobce, obchod nebo dovozce jsou plátci.', 'q5'],
        ['Která daň patří mezi nepřímé?', 'DPH', ['DPFO', 'Daň z nemovitých věcí', 'DPPO'], 'Nepřímé daně ze spotřeby: DPH, spotřební daně, cla, ekologické daně.', 'q6'],
        ['Který příjem měl v daňovém mixu ČR podle Eurostatu (2026) největší podíl?', 'Sociální pojistné', ['DPH', 'DPFO', 'Daň z nemovitých věcí'], 'Sociální pojistné 46 %, DPH 21 %, DPPO 13 %, DPFO 11 %. Přednáška ho řadí mezi kvazidaně, do daňového mixu se ale počítá.', 'q7'],
        ['Podléhá od roku 2022 dani silniční běžný osobní automobil?', 'Ne, není zdanitelné vozidlo', ['Ano, vždy', 'Jen když ho používá podnikatel', 'Jen dieselový'], 'Zdanitelná vozidla jsou jen nákladní automobily kategorie N2 a N3 a jejich přípojná vozidla O3 a O4 registrovaná v ČR.', 'q8'],
        ['Jaký je rozdíl mezi daní a poplatkem?', 'Poplatek je protihodnota za službu, daň ne', ['Daň je dobrovolná, poplatek povinný', 'Poplatek je návratný, daň nenávratná', 'Žádný, poplatek je jen jiný název daně'], 'Poplatek je účelový, dobrovolný a je protihodnotou za službu veřejného sektoru. Daň je povinná, neúčelová a neekvivalentní.', 'q9'],
        ['Kdo je poplatníkem daně silniční?', 'Provozovatel vozidla zapsaný v registru', ['Řidič, který vozidlo zrovna řídí', 'Výrobce nebo prodejce vozidla', 'Každý vlastník osobního automobilu'], '§ 4 zákona o dani silniční: provozovatel zdanitelného vozidla zapsaný v registru silničních vozidel.', 'q10'],
        ['Dopravce má tahač přívěsů N3 a jezdí s ním přívěs O4. Za co platí daň silniční?', 'Jen za tahač, podle hmotnosti soupravy', ['Za tahač i za přívěs, každý zvlášť', 'Jen za přívěs, tahač je osvobozený', 'Za nic, tahače nejsou zdanitelné'], 'U vlastníka tahače přívěsů jsou přívěsy osvobozené (§ 3). Daň se platí za tahač podle největší povolené hmotnosti jízdní soupravy.', 'q11'],
        ['Dokdy se podává přiznání k dani silniční?', 'Do 31. ledna následujícího roku', ['Do 31. března následujícího roku', 'Do 31. května daného roku', 'Do 30. listopadu daného roku'], 'Podává se jen elektronicky a daň je splatná ve stejné lhůtě. Od roku 2022 se neplatí zálohy.', 'q12'],
        ['Daň silniční ti vyšla 80 Kč. Co s ní?', 'Nepředepíše se a neplatí se', ['Zaplatíš ji do 31. ledna', 'Zaokrouhlí se nahoru na 100 Kč', 'Přičte se k dani za další rok'], 'Daň silniční pod 100 Kč se nepředepíše a neplatí (§ 16a).', 'q13'],
        ['Které vozidlo je zdanitelné, ale má nulovou sazbu daně silniční?', 'Nákladní auto N2 pod 12 tun', ['Osobní automobil firmy', 'Autobus pro 50 cestujících', 'Malá dodávka kategorie N1'], 'Osobní auta, autobusy a dodávky N1 nejsou zdanitelná vozidla vůbec. N2 pod 12 tun zdanitelné je, jen s nulovou sazbou.', 'q14'],
        ['Které vozidlo je od daně silniční osvobozené?', 'Nákladní auto s modrým výstražným světlem', ['Nákladní auto N3 stavební firmy', 'Tahač přívěsů s hmotností 39 t', 'Nákladní auto N2 s hmotností 12 t'], 'Osvobozená jsou i vozidla státních hmotných rezerv, diplomatických misí, sanitky a vozidla Českého červeného kříže.', 'q15'],
        ['Jak se jmenuje daň, jejíž základ je vyjádřený v penězích?', 'Hodnotová (ad valorem)', ['Specifická (jednotková)', 'Bez vztahu k základu daně', 'Paušální daň z hlavy'], 'Ad valorem je třeba DPFO a DPPO. Specifická daň má základ ve fyzických jednotkách, např. litrech čistého alkoholu.', 'q16'],
        ['Daň z příjmů fyzických osob je podle adresnosti daní…', 'osobní', ['in rem', 'specifickou', 'nepřímou'], 'Osobní daně zohledňují platební schopnost poplatníka: důchodové daně placené fyzickými osobami.', 'q17'],
        ['Daň z příjmů právnických osob je podle adresnosti daní…', 'in rem', ['osobní', 'specifickou', 'nepřímou'], 'In rem jsou daně spotřební, DPH, majetkové a také důchodové daně placené společnostmi.', 'q18']
      ],
      tips: [
        '<b>Odpočet vs. sleva:</b> odpočet snižuje základ, sleva až hotovou daň.',
        '<b>Plátce platí, poplatník „trpí“:</b> plátce daň odvádí, poplatník ji ze svého nese.',
        '<b>Zkouška:</b> 30 otázek za 35 minut, správně +2, špatně −1, bez odpovědi 0. Když vůbec nevíš, je lepší nechat prázdné.'
      ]
    },
    {
      id: 'p2', label: '2. Daň z nemovitých věcí',
      terms: [
        ['Nemovité věci (§ 498 OZ)', 'Pozemky a podzemní stavby se samostatným účelovým určením (metro, vinný sklep) a věcná práva k nim.', 't1'],
        ['Liniové stavby', 'Vodovody, kanalizace, vedení a jiné předměty zasahující více pozemků. Nejsou součástí pozemku.', 't2'],
        ['Jednotka', 'Byt jako prostorově oddělená část domu a podíl na společných částech nemovité věci. Jednotka je věc nemovitá.', 't3'],
        ['Zemědělský pozemek', 'Orná půda, chmelnice, vinice, zahrady, ovocné sady a trvalé travní porosty.', 't4'],
        ['Inflační koeficient', 'Vyhlašuje ho MF, násobí se jím daň z pozemků a staveb. Od roku 2024 je 1,0, u zemědělských pozemků vždy 1,0.', 't5'],
        ['Místní koeficient', 'Stanoví obec vyhláškou. Od roku 2024 v rozmezí 0,5 až 5,0 s přesností na jedno desetinné místo.', 't6'],
        ['Výchozí daň', '[(základ daně × sazba) − osvobození] × inflační koeficient. Zaokrouhluje se na celé koruny nahoru.', 't7']
      ],
      qs: [
        ['Kdo je zpravidla poplatníkem daně z pozemků?', 'Vlastník pozemku', ['Nájemce vždy', 'Obec, kde pozemek leží', 'Katastrální úřad'], 'Nájemce nebo pachtýř je poplatníkem u pozemků evidovaných zjednodušeným způsobem.', 'q1'],
        ['Které pozemky nejsou předmětem daně z pozemků?', 'Vodní plochy', ['Orná půda', 'Zahrady', 'Stavební pozemky'], 'Dál třeba pozemky zastavěné zdanitelnými stavbami nebo pozemky pro obranu státu.', 'q2'],
        ['Jaká je od roku 2024 základní sazba daně u stavebních pozemků?', '3,50 Kč/m²', ['2 Kč/m²', '1,35 %', '9 Kč/m²'], 'Sazba se ještě násobí koeficientem podle počtu obyvatel obce.', 'q3'],
        ['Jakým koeficientem se násobí sazba u stavebních pozemků v Praze?', '4,5', ['3,5', '2,5', '1,0'], 'Obec do 1 000 obyvatel 1,0, statutární města 3,5, Praha 4,5.', 'q4'],
        ['Jak se zaokrouhluje výchozí daň za výpočtový list?', 'Na celé koruny nahoru', ['Na celé koruny dolů', 'Matematicky na desetikoruny', 'Nezaokrouhluje se'], 'Nahoru se zaokrouhluje i základ daně a daň za výpočtový list.', 'q5'],
        ['Je metro nemovitou věcí podle občanského zákoníku?', 'Ano, podzemní stavba se samostatným účelem', ['Ne, podzemní stavby jsou vždy movité věci', 'Jen ta část, která leží pod pozemkem státu', 'Ne, nemovité jsou jen pozemky a domy na nich'], 'Podzemní stavba se samostatným účelovým určením je nemovitá věc (§ 498 OZ). Podobně vinný sklep.', 'q6'],
        ['Jaká je od roku 2024 sazba u orné půdy, vinic a zahrad?', '1,35 %', ['0,75 %', '0,45 %', '3,50 Kč/m²'], 'Do roku 2023 to bylo 0,75 %. Trvalé travní porosty a lesy mají 0,45 %.', 'q7'],
        ['Co je základem daně u zdanitelné stavby?', 'Zastavěná plocha v m² k 1. lednu', ['Podlahová plocha všech podlaží', 'Cena stavby podle znaleckého posudku', 'Zastavěná plocha v m² k 31. prosinci'], 'Zastavěná plocha nadzemní části stavby, zaokrouhlená na celé m² nahoru. U jednotek se bere podlahová plocha × 1,22 nebo 1,20.', 'q8'],
        ['Jak se počítá základ daně u bytu v bytovém domě na pozemku ve spoluvlastnictví vlastníků jednotek?', 'Podlahová plocha × 1,22', ['Podlahová plocha × 1,20', 'Zastavěná plocha × 1,22', 'Podlahová plocha × 3,50'], 'V ostatních případech je to podlahová plocha × 1,20. Plocha společných částí domu se do podlahové plochy jednotky nepočítá.', 'q9'],
        ['Jaká je od roku 2024 základní sazba daně u garáže?', '14,50 Kč/m²', ['3,50 Kč/m²', '11 Kč/m²', '18 Kč/m²'], 'Obytné domy 3,50 Kč/m², rekreace 11 Kč/m², stavby k podnikání v průmyslu a ostatním podnikání 18 Kč/m².', 'q10'],
        ['Dokdy se podává přiznání k dani z nemovitých věcí?', 'Do 31. ledna, podle stavu k 1. lednu', ['Do 31. března, podle stavu k 31. 12.', 'Do 31. května, podle stavu k 1. lednu', 'Do 30. listopadu, podle stavu k 1. lednu'], 'Když už ho poplatník podal dřív a nic se nezměnilo, znovu ho nepodává. Změny během roku se nezohledňují.', 'q11'],
        ['Roční daň z nemovitých věcí je 3 200 Kč. Dokdy ji zaplatíš?', 'Najednou do 31. května', ['Ve dvou splátkách do 31. 5. a 30. 11.', 'Najednou do 31. ledna', 'Najednou do 30. listopadu'], 'Daň do 5 000 Kč se platí najednou do 31. 5. Vyšší ve dvou splátkách do 31. 5. a 30. 11., u zemědělců do 31. 8. a 30. 11.', 'q12'],
        ['Kdo stanoví místní koeficient?', 'Obec obecně závaznou vyhláškou', ['Ministerstvo financí sdělením', 'Finanční úřad rozhodnutím', 'Katastrální úřad zápisem'], 'Inflační koeficient vyhlašuje Ministerstvo financí, místní koeficient si určuje obec.', 'q13'],
        ['O kolik se zvyšuje základní sazba daně ze staveb za každé další nadzemní podlaží?', '1,40 Kč/m²', ['0,75 Kč/m²', '3,50 Kč/m²', '2,00 Kč/m²'], 'Platí za každé další nadzemní podlaží přesahující 1/3 nebo 2/3 zastavěné plochy. Výsledná sazba = (základní sazba + zvýšení za podlaží) × koeficient podle počtu obyvatel, zaokrouhlená matematicky na 2 desetinná místa.', 'q14'],
        ['Rodinný dům stojí na vlastním pozemku. Platíš daň z pozemku i za plochu pod domem?', 'Ne, ta není předmětem daně', ['Ano, pozemek se daní vždy celý', 'Ano, ale jen poloviční sazbou', 'Ne, domy jsou od daně osvobozené'], 'Pozemky zastavěné zdanitelnými stavbami nejsou v rozsahu zastavěné plochy předmětem daně z pozemků. Dům sám se daní daní ze staveb.', 'q15']
      ],
      tips: [
        '<b>Postup výpočtu:</b> základ × sazba (× koeficient obyvatel) → výchozí daň nahoru → × místní koeficient → zase nahoru.',
        '<b>Zaokrouhluje se nahoru</b> základ, výchozí daň i daň za výpočtový list. Matematicky (na 2 desetinná místa) jen výsledná sazba stavby.'
      ]
    },
    {
      id: 'p3', label: '3. Daň z příjmů fyzických osob',
      terms: [
        ['Daňový rezident', 'Fyzická osoba, která má v ČR bydliště nebo se tu obvykle zdržuje (víc než 183 dní v roce). Má neomezenou daňovou povinnost: daní příjmy z ČR i ze zahraničí.', 't1'],
        ['Daňový nerezident', 'Nemá v ČR bydliště a zdržuje se tu méně než 183 dní nebo jen kvůli studiu či léčení. Daní jen příjmy ze zdrojů v ČR (omezená daňová povinnost).', 't2'],
        ['Zdaňovací období DPFO', 'Kalendářní rok (§ 5 ZDP).', 't3'],
        ['Dílčí základy daně', 'Pět skupin příjmů, které se posuzují zvlášť: závislá činnost (§ 6), samostatná činnost (§ 7), kapitálový majetek (§ 8), nájem (§ 9) a ostatní příjmy (§ 10). Jejich souhrnem je základ daně.', 't4'],
        ['Nezdanitelné části základu daně (§ 15)', 'Dary na veřejně prospěšné účely, úroky z úvěrů na bytové potřeby a produkty spoření na stáří (doplňkové penzijní spoření, soukromé životní pojištění). Snižují základ daně.', 't5'],
        ['Daňová ztráta', 'Vzniká, když výdaje převýší příjmy, jen u samostatné činnosti (§ 7) nebo nájmu (§ 9). Nesmí se odečíst od příjmů ze závislé činnosti. Lze ji uplatnit 5 období dopředu a 2 zpětně.', 't6'],
        ['Sazba DPFO (§ 16)', '15 % z části základu daně do 36násobku průměrné mzdy, 23 % z části nad tuto hranici. Roční základ se předtím zaokrouhlí na celé stovky dolů.', 't7'],
        ['Základní sleva na poplatníka', '30 840 Kč za rok, v měsíční záloze 2 570 Kč. Slevy snižují daň nejvýš na nulu.', 't8'],
        ['Sleva na manžela (manželku)', '24 840 Kč, když manžel(ka) ve společné domácnosti má příjem pod 68 000 Kč za rok a pečuje o dítě do 3 let.', 't9'],
        ['Daňové zvýhodnění na dítě (§ 35c)', 'Ročně 15 204 Kč na první dítě, 22 320 Kč na druhé, 27 840 Kč na třetí a další (měsíčně 1 267, 1 860 a 2 320 Kč). Může mít podobu slevy, bonusu nebo jejich kombinace.', 't10'],
        ['Daňový bonus', 'Část zvýhodnění na děti, která převýší daň a stát ji vyplatí. Musí být aspoň 100 Kč a poplatník musí mít příjmy podle § 6 a § 7 aspoň 6× minimální mzdu (2026: 134 400 Kč).', 't11'],
        ['Prohlášení k dani', 'Podepisuje ho zaměstnanec u zaměstnavatele. Jen s ním se v měsíčních zálohách uplatní sleva na poplatníka a zvýhodnění na děti.', 't12'],
        ['Srážková daň u DPP', 'Odměna z dohody o provedení práce pod 12 000 Kč za měsíc bez prohlášení: 15 % se srazí rovnou z odměny, základ i daň se zaokrouhlují na koruny dolů, pojistné se neplatí.', 't13'],
        ['Pojistné zaměstnance', 'Z hrubé mzdy se strhává zdravotní pojištění 4,5 % a sociální 7,1 %. Zaměstnavatel k tomu navíc odvádí sociální 24,8 % a zdravotní 9 %.', 't14'],
        ['Dílčí základ ze samostatné činnosti (§ 7)', 'Příjmy minus výdaje na jejich dosažení, zajištění a udržení. Když výdaje převýší příjmy, vznikne daňová ztráta.', 't15'],
        ['Výdaje procentem z příjmů (§ 7 odst. 7)', 'Místo skutečných výdajů si podnikatel uplatní výdaje procentem z dosažených příjmů. U řemeslné živnosti je to 80 %.', 't16'],
        ['Spolupracující osoba (§ 13)', 'Na manžela nebo manželku, kteří při samostatné činnosti pomáhají, lze převést část příjmů i výdajů, nejvýš 50 %. Převedenou část pak zdaní oni.', 't17'],
        ['Společník v.o.s.', 'Základ daně veřejné obchodní společnosti se rozdělí mezi společníky podle společenské smlouvy. Každý ho zdaní jako svůj příjem ze samostatné činnosti (§ 7).', 't18'],
        ['Slevy na invaliditu a ZTP/P (§ 35ba)', 'Invalidita 1. a 2. stupně 2 520 Kč, invalidita 3. stupně 5 040 Kč, držitel průkazu ZTP/P 16 140 Kč za rok.', 't19'],
        ['Sleva za zaměstnance se zdravotním postižením (§ 35)', '18 000 Kč za každého zaměstnance se zdravotním postižením, 60 000 Kč za zaměstnance s těžším zdravotním postižením. Počítá se z průměrného ročního přepočteného počtu.', 't20'],
        ['Limity odpočtů (§ 15)', 'Dary aspoň 1 000 Kč nebo 2 % základu, nejvýš 30 % (15 %) základu, jak je na přednášce. Podle zákona teď platí 15 %, 30 % platilo jen dočasně v letech 2020–2023. Úroky na bytové potřeby nejvýš 150 000 Kč na domácnost. Produkty spoření na stáří v součtu nejvýš 48 000 Kč.', 't21']
      ],
      qs: [
        ['Kdo je daňovým rezidentem ČR?', 'Kdo tu má bydliště nebo pobývá přes 183 dní', ['Jen občan ČR, bez ohledu na bydliště', 'Kdo tu aspoň 90 dní v roce studuje', 'Kdo má v ČR aspoň jeden zdroj příjmu'], 'Rezident daní příjmy z ČR i ze zahraničí. Pobyt kvůli studiu nebo léčení se do 183 dní nezapočítává.', 'q1'],
        ['Zahraniční studentka celý rok studuje v Brně a bydliště v ČR nemá. Pro DPFO je…', 'nerezidentka, studium se nezapočítává', ['rezidentka, je tu přes 183 dní', 'rezidentka, protože studuje v ČR', 'mimo DPFO, studenti daň neplatí'], 'Kdo se v ČR zdržuje jen kvůli studiu či léčení, je daňový nerezident a daní jen příjmy ze zdrojů v ČR.', 'q2'],
        ['Který příjem není předmětem DPFO?', 'Přijatý úvěr', ['Mzda', 'Nájemné z bytu', 'Úroky z vkladu'], 'Předmětem daně nejsou ani příjmy z restitucí, au-pair nebo rozšíření či zúžení SJM.', 'q3'],
        ['Od kterého dílčího základu daně nesmíš odečíst daňovou ztrátu?', 'Ze závislé činnosti (§ 6)', ['Ze samostatné činnosti (§ 7)', 'Z nájmu (§ 9)', 'Z kapitálového majetku (§ 8)'], 'Ztráta vzniká jen u § 7 nebo § 9 a dá se kompenzovat ostatními dílčími základy kromě § 6.', 'q4'],
        ['Jak se zaokrouhluje roční základ daně snížený o odpočty?', 'Na celé stovky dolů', ['Na celé stovky nahoru', 'Na celé koruny nahoru', 'Na desetikoruny matematicky'], 'U měsíční zálohy ze mzdy je to naopak, na celé stovky nahoru.', 'q5'],
        ['Jak se zaokrouhluje základ pro měsíční zálohu na daň ze mzdy?', 'Na celé stovky nahoru', ['Na celé stovky dolů', 'Na celé koruny dolů', 'Nezaokrouhluje se'], 'Hrubá mzda 55 050 Kč → základ 55 100 Kč. Na koruny dolů se zaokrouhluje srážková daň z DPP.', 'q6'],
        ['Jaká sazba DPFO platí pro část základu nad 36násobek průměrné mzdy?', '23 %', ['15 %', '19 %', '21 %'], 'Do 36násobku průměrné mzdy 15 %, nad něj 23 %.', 'q7'],
        ['Kolik je roční základní sleva na poplatníka v roce 2026?', '30 840 Kč', ['24 840 Kč', '15 204 Kč', '16 140 Kč'], 'Měsíčně 2 570 Kč. 24 840 Kč je sleva na manžela, 15 204 Kč zvýhodnění na první dítě, 16 140 Kč sleva pro držitele ZTP/P.', 'q8'],
        ['Slevy na poplatníka a na manželku jsou vyšší než vypočtená daň. Co se stane?', 'Daň klesne na nulu, zbytek propadá', ['Stát rozdíl vyplatí jako bonus', 'Zbytek se převede do dalšího roku', 'Zbytek se odečte od pojistného'], 'Slevy se odečítají nejvýš do nuly. Bonus může vzniknout jen ze zvýhodnění na vyživované dítě.', 'q9'],
        ['Kolik činí roční daňové zvýhodnění na druhé dítě?', '22 320 Kč', ['15 204 Kč', '27 840 Kč', '24 840 Kč'], 'První dítě 15 204 Kč, druhé 22 320 Kč, třetí a další 27 840 Kč.', 'q10'],
        ['Kdy se daňový bonus vyplatí?', 'Příjmy z § 6 a § 7 aspoň 6× min. mzda', ['Příjmy z § 6 a § 7 aspoň 36× min. mzda', 'Jen poplatníkovi s aspoň dvěma dětmi', 'Jen když bonus činí aspoň 1 000 Kč'], 'Pro rok 2026 je to 134 400 Kč a bonus musí být aspoň 100 Kč.', 'q11'],
        ['Kdy můžeš uplatnit slevu na manžela?', 'Má příjem pod 68 000 Kč a dítě do 3 let', ['Má příjem pod 134 400 Kč, děti nerozhodují', 'Stačí společná domácnost, příjem nerozhoduje', 'Má příjem pod 68 000 Kč a dítě do 10 let'], 'Sleva je 24 840 Kč za rok, manžel(ka) musí žít ve společné domácnosti.', 'q12'],
        ['Zaměstnanec u zaměstnavatele nepodepsal prohlášení k dani. Co to znamená?', 'Záloha bez slevy na poplatníka i na děti', ['Žádnou zálohu na daň neplatí', 'Neplatí sociální ani zdravotní pojištění', 'Daň se mu počítá sazbou 23 %'], 'Ve vyřešeném příkladu měl zaměstnanec s prohlášením a 3 dětmi zálohu 233 Kč, bez prohlášení 8 250 Kč.', 'q13'],
        ['Odměna z DPP je 5 000 Kč za měsíc, prohlášení podepsané nemá. Jak se zdaní?', 'Srážkovou daní 15 %, bez pojistného', ['Zálohou 15 % a pojistným 11,6 %', 'Vůbec, DPP se nedaní', 'Srážkovou daní 23 % a pojistným'], 'DPP pod 12 000 Kč měsíčně bez prohlášení: srážková daň 750 Kč, vyplatí se 4 250 Kč.', 'q14'],
        ['Kolik procent z hrubé mzdy platí zaměstnanec na sociálním pojištění?', '7,1 %', ['4,5 %', '24,8 %', '9 %'], 'Zaměstnanec: sociální 7,1 %, zdravotní 4,5 %. Zaměstnavatel: sociální 24,8 %, zdravotní 9 %.', 'q15'],
        ['Kolik lze nejvýš odečíst za úroky z úvěru na bytové potřeby?', '150 000 Kč na domácnost', ['48 000 Kč na osobu', '30 % základu daně', '24 840 Kč na osobu'], '48 000 Kč je limit pro produkty spoření na stáří, 15 % základu (dočasně 30 %) limit u darů.', 'q16'],
        ['Podnikatelka má z živnosti příjmy 1 200 000 Kč a výdaje 330 000 Kč. Jaký je dílčí základ daně § 7?', '870 000 Kč', ['1 200 000 Kč', '1 530 000 Kč', '330 000 Kč'], 'Dílčí základ ze samostatné činnosti = příjmy − výdaje. Příklad paní Přibylové z 5. přednášky.', 'q17'],
        ['Kolik nejvýš lze podle § 13 převést na spolupracujícího manžela?', '50 % příjmů i výdajů', ['30 % příjmů i výdajů', '100 % příjmů i výdajů', '50 % příjmů, výdaje nic'], 'Převádí se podíl na příjmech i na výdajích. Spolupracující manžel pak převedenou část zdaní sám jako příjem z § 7.', 'q18'],
        ['Manžel s nízkou mzdou pomáhá manželce v živnosti. Proč se vyplatí převést na něj část příjmů?', 'Využije celou slevu na poplatníka', ['Spolupracující osoba daň neplatí', 'Převedené příjmy jsou osvobozené', 'Manželka získá slevu na manžela'], 'Ve vzorovém příkladu měl pan Přibyl daň 22 800 Kč, takže 8 040 Kč z jeho slevy 30 840 Kč propadalo. Po převodu ji využije celou.', 'q19'],
        ['Jak se rozdělí základ daně v.o.s. mezi společníky?', 'Podle společenské smlouvy', ['Vždy rovným dílem ze zákona', 'Podle odpracovaných hodin', 'Nerozdělí se, daní ho v.o.s.'], 'Ve vzorovém příkladu smlouva určila rovné díly. Svůj podíl zdaní každý společník jako příjem ze samostatné činnosti (§ 7).', 'q20'],
        ['Řemeslník má příjmy 200 000 Kč a výdaje uplatňuje 80 % z příjmů. Jaký je dílčí základ daně?', '40 000 Kč', ['160 000 Kč', '200 000 Kč', '120 000 Kč'], 'Výdaje = 80 % × 200 000 = 160 000 Kč, základ = 200 000 − 160 000 = 40 000 Kč. 160 000 Kč jsou výdaje, ne základ.', 'q21'],
        ['Kolik činí roční sleva na dani pro poplatníka s invalidním důchodem 3. stupně?', '5 040 Kč', ['2 520 Kč', '16 140 Kč', '30 840 Kč'], 'Invalidita 1. a 2. stupně 2 520 Kč, 3. stupně 5 040 Kč, ZTP/P 16 140 Kč. Sleva na poplatníka 30 840 Kč se k tomu uplatní zvlášť.', 'q22'],
        ['Jaká je sleva na dani za zaměstnance se zdravotním postižením (ne těžším)?', '18 000 Kč', ['60 000 Kč', '5 040 Kč', '24 840 Kč'], '60 000 Kč je sleva za zaměstnance s těžším zdravotním postižením. Počítá se z průměrného ročního přepočteného počtu.', 'q23'],
        ['Poplatník platí soukromé životní pojištění 1 000 Kč měsíčně. Kolik si odečte od základu daně?', '12 000 Kč', ['48 000 Kč', '1 000 Kč', '24 000 Kč'], 'U životního pojištění se odečítá zaplacená částka, tedy 12 × 1 000 Kč. 48 000 Kč je jen horní limit pro produkty spoření na stáří.', 'q24'],
        ['Manžel má příjem ze zaměstnání 152 000 Kč za rok. Uplatní manželka slevu na manžela?', 'Ne, jeho příjem je přes 68 000 Kč', ['Ano, když jí pomáhá v podnikání', 'Ano, jeho příjem je pod 36násobkem', 'Ne, tato sleva byla zrušena'], 'Sleva na manžela vyžaduje jeho příjem pod 68 000 Kč za rok a dítě do 3 let ve společné domácnosti.', 'q25']
      ],
      tips: [
        '<b>Záloha ze mzdy:</b> hrubá mzda → stovky <b>nahoru</b> → × 15 % → − 2 570 Kč (poplatník) → − zvýhodnění na děti.',
        '<b>Roční zúčtování:</b> základ snížený o odpočty se zaokrouhlí na stovky <b>dolů</b>.',
        '<b>Slevy jen do nuly,</b> přes nulu (bonus) umí jít jen zvýhodnění na děti.',
        '<b>Čistá mzda</b> = hrubá − ZP 4,5 % − SP 7,1 % − záloha na daň.',
        '<b>Spolupracující manžel (§ 13):</b> převést jde nejvýš 50 % příjmů i výdajů. Vyplatí se, když by mu jinak propadla sleva na poplatníka.',
        '<b>80 % jsou výdaje, ne základ:</b> u řemeslné živnosti je základ jen 20 % příjmů.'
      ]
    }
  ],
  lessons: [
    {
      id: 'l1', topic: 'p3', title: 'Daň ze mzdy krok za krokem', min: 8,
      warm: ['p1.q3', 'p1.q1'],
      steps: [
        { h: 'Kdo a co se daní', html: '<p>DPFO platí <b>rezident</b> (bydliště v ČR nebo pobyt přes 183 dní) ze všech příjmů, i ze zahraničí. <b>Nerezident</b> jen z příjmů ze zdrojů v ČR. Pobyt kvůli studiu nebo léčení se nepočítá.</p><p>Zdaňovacím obdobím je <b>kalendářní rok</b>. Příjmy se dělí do pěti <b>dílčích základů</b>: závislá činnost (§ 6), samostatná činnost (§ 7), kapitálový majetek (§ 8), nájem (§ 9) a ostatní (§ 10).</p>', check: 'q2' },
        { h: 'Od příjmů k dani', html: '<p>Souhrn dílčích základů = <b>základ daně</b>. Od něj odečteš <b>nezdanitelné části</b> (§ 15: dary, úroky z hypotéky, penzijní spoření, životní pojištění) a odčitatelné položky (§ 34: daňová ztráta).</p><p>Výsledek zaokrouhlíš na <b>celé stovky dolů</b> a vynásobíš sazbou <b>15 %</b> (z části nad 36násobek průměrné mzdy <b>23 %</b>).</p><p>Pozor: ztrátu z podnikání nebo nájmu nesmíš odečíst od příjmů ze zaměstnání.</p>', check: 'q4' },
        { h: 'Slevy a děti', html: '<p>Z daně odečteš <b>slevy</b>: na poplatníka <b>30 840 Kč</b> ročně (2 570 Kč měsíčně), na manžela 24 840 Kč (příjem pod 68 000 Kč a dítě do 3 let). Slevy jdou <b>nejvýš do nuly</b>.</p><p>Pak <b>daňové zvýhodnění na děti</b>: 15 204 Kč na první, 22 320 Kč na druhé, 27 840 Kč na třetí a další. Když přesáhne daň, vznikne <b>daňový bonus</b> (aspoň 100 Kč a příjmy z § 6 a § 7 aspoň 134 400 Kč za rok).</p>', check: 'q12' },
        { h: 'Měsíční záloha a čistá mzda', html: '<p>Zaměstnavatel je <b>plátce</b>: každý měsíc srazí zálohu na daň. Hrubou mzdu zaokrouhlí na <b>stovky nahoru</b>, vynásobí 15 % a odečte měsíční slevy, ale jen když jsi podepsala <b>prohlášení k dani</b>.</p><p>Ze mzdy se strhává i pojistné: <b>zdravotní 4,5 %</b> a <b>sociální 7,1 %</b>. Čistá mzda = hrubá − ZP − SP − záloha.</p>' },
        { h: 'Řešený příklad', html: '<p>Hrubá mzda <b>48 000 Kč</b>, prohlášení podepsané, dvě děti.</p><p><b>1.</b> Základ zálohy: 48 000 Kč (stovky nahoru, už je zaokrouhlený).<br><b>2.</b> Daň 15 %: 48 000 × 0,15 = 7 200 Kč.<br><b>3.</b> Sleva na poplatníka: 7 200 − 2 570 = 4 630 Kč.<br><b>4.</b> Děti: 1 267 + 1 860 = 3 127 Kč, záloha = 4 630 − 3 127 = <b>1 503 Kč</b>.<br><b>5.</b> ZP 4,5 % = 2 160 Kč, SP 7,1 % = 3 408 Kč.<br><b>6.</b> Čistá mzda = 48 000 − 2 160 − 3 408 − 1 503 = <b>40 929 Kč</b>.</p><p>Bez prohlášení by záloha byla celých 7 200 Kč. Zkus si to spočítat sama v režimu Počítej.</p>' },
        { h: 'Dohoda o provedení práce', html: '<p>U <b>DPP pod 12 000 Kč</b> měsíčně bez prohlášení se platí <b>srážková daň 15 %</b> přímo z odměny, zaokrouhluje se na <b>koruny dolů</b> a <b>pojistné se neplatí</b>. Z odměny 5 000 Kč se srazí 750 Kč a vyplatí se 4 250 Kč.</p><p>U dohody o pracovní činnosti se naopak počítá záloha a platí se i pojistné.</p>' }
      ],
      quiz: ['q1', 'q5', 'q6', 'q8', 'q9', 'q10', 'q11', 'q13', 'q14', 'q15']
    },
    {
      id: 'l2', topic: 'p1', title: 'Co je daň a kdo platí silniční', min: 7,
      steps: [
        { h: 'Co je daň', html: '<p><b>Daň</b> je povinná, nenávratná a zákonem určená platba do veřejného rozpočtu. Je <b>neúčelová</b> a <b>neekvivalentní</b>: za zaplacenou daň nedostaneš přímou protihodnotu.</p><p><b>Poplatek</b> je naopak protihodnota za službu veřejného sektoru: účelový, dobrovolný a nepravidelný. <b>Půjčka</b> je návratná, <b>dar</b> dobrovolný.</p>', check: 'q2' },
        { h: 'Kdo platí a z čeho', html: '<p><b>Poplatník</b> je ten, jehož příjem nebo majetek je dani podroben. <b>Plátce</b> daň vypočítá, srazí a odvede. U daně ze mzdy je plátcem zaměstnavatel a poplatníkem zaměstnanec.</p><p><b>Základ daně</b> je předmět daně v penězích nebo ve fyzických jednotkách. <b>Odpočty</b> snižují základ, <b>slevy</b> až vypočtenou daň.</p>', check: 'q1' },
        { h: 'Jak se daně třídí', html: '<p>U <b>přímých</b> daní se předpokládá, že je nejde přesunout na jiného (DPFO, DPPO, daň z nemovitých věcí). <b>Nepřímé</b> se platí v cenách zboží a služeb (DPH, spotřební daně, cla): poplatníkem je konečný spotřebitel, plátcem výrobce, obchod nebo dovozce.</p><p>Podle sazby: <b>specifické</b> mají základ ve fyzických jednotkách (litr alkoholu), <b>ad valorem</b> v penězích. Podle adresnosti: <b>osobní</b> zohledňují platební schopnost (DPFO), <b>in rem</b> ne.</p>', check: 'q6' },
        { h: 'Daň silniční od roku 2022', html: '<p>Předmětem je <b>zdanitelné vozidlo</b>: nákladní auta <b>N2 a N3</b> a jejich přípojná vozidla <b>O3 a O4</b> zapsaná v registru v ČR. Osobní auta, autobusy a malé dodávky N1 zdanitelné nejsou.</p><p>N2 pod 12 tun je zdanitelné, ale má <b>nulovou sazbu</b>. Zdanitelná nejsou ani vozidla vyřazená z provozu, veteráni se zvláštní značkou, autojeřáby a návěsy.</p>', check: 'q8' },
        { h: 'Řešený příklad: vozový park', html: '<p>Firma vlastní tato vozidla. Projdi je jako na cvičení:</p><p><b>Osobní auto M1</b> → není zdanitelné vozidlo.<br><b>Nákladní auto N1, 3,5 t</b> → není zdanitelné.<br><b>Nákladní auto N2, 11 500 kg</b> → zdanitelné, ale pod 12 tun má nulovou sazbu.<br><b>Traktor a motocykl</b> → nejsou kategorie N ani O, dani nepodléhají.<br><b>Tahač přívěsů N3, 39 t, 3 nápravy</b> → platí daň podle hmotnosti soupravy.<br><b>Přívěs O4, 16 t, jezdí s tímto tahačem</b> → osvobozený, daň se platí jen za tahač.</p><p>Do přiznání půjde tahač a k němu přívěs jako osvobozené vozidlo: uvádí se i osvobozené vozidlo, ze kterého by jinak daň byla (přívěs od 12 t by platil 3 600 Kč). N2 s nulovou sazbou se neuvádí. Výši daně najdeš v příloze zákona o dani silniční.</p>', check: 'q11' },
        { h: 'Poplatník a přiznání', html: '<p>Poplatníkem je <b>provozovatel</b> zapsaný v registru vozidel. Zdaňovacím obdobím je kalendářní rok a od roku 2022 se neplatí zálohy.</p><p>Přiznání se podává jen <b>elektronicky do 31. ledna</b> následujícího roku a ve stejné lhůtě je daň splatná. Daň pod 100 Kč se nepředepíše a neplatí.</p>', check: 'q12' }
      ],
      quiz: ['q3', 'q4', 'q5', 'q9', 'q10', 'q13', 'q14']
    },
    {
      id: 'l3', topic: 'p2', title: 'Daň z pozemků, staveb a bytů', min: 8,
      warm: ['p1.q6', 'p1.q3'],
      steps: [
        { h: 'Co je nemovitá věc', html: '<p>Podle § 498 OZ jsou nemovité věci <b>pozemky</b> a <b>podzemní stavby</b> se samostatným účelem (metro, vinný sklep). Stavba na pozemku je jeho součástí, <b>liniové stavby</b> (vodovody, vedení) ne. <b>Jednotka</b>, tedy byt i s podílem na společných částech domu, je také nemovitá věc.</p><p>Daň z nemovitých věcí = <b>daň z pozemků</b> + <b>daň ze staveb a jednotek</b>.</p>', check: 'q6' },
        { h: 'Co se daní a kdo platí', html: '<p>Daní se pozemky evidované v katastru. <b>Nedaní</b> se pozemky pod zdanitelnými stavbami, vodní plochy, ochranné lesy a pozemky pro obranu státu. Ze staveb se daní budovy, inženýrské stavby a jednotky.</p><p>Poplatníkem je <b>vlastník</b>. U pozemků evidovaných zjednodušeně je to nájemce nebo pachtýř, a když vlastník není znám, uživatel.</p>', check: 'q2' },
        { h: 'Základ a sazba', html: '<p><b>Pozemky:</b> u zemědělských je základem výměra × průměrná cena z vyhlášky (orná půda, zahrady 1,35 %), u stavebních výměra v m² (3,50 Kč/m² × koeficient podle počtu obyvatel 1,0 až 4,5).</p><p><b>Stavby:</b> základem je zastavěná plocha k 1. lednu, u jednotek podlahová plocha × 1,22 nebo 1,20. Sazby: obytné domy 3,50 Kč/m², rekreace 11, garáž 14,50, podnikání v průmyslu a ostatní podnikání 18 Kč/m² (zemědělská prvovýroba 3,50). Za každé další nadzemní podlaží přesahující 1/3 nebo 2/3 zastavěné plochy se přičte 1,40 Kč/m².</p>', check: 'q10' },
        { h: 'Výpočtový list', html: '<p><b>Výchozí daň</b> = [(základ × sazba) − osvobození] × inflační koeficient (od roku 2024 je 1,0).</p><p><b>Daň za výpočtový list</b> = výchozí daň × <b>místní koeficient</b>, který si obec určí v rozmezí 0,5 až 5,0.</p><p>Základ, výchozí daň i výslednou daň zaokrouhluješ <b>nahoru</b> na celé m² nebo koruny. Jen výslednou sazbu stavby zaokrouhlíš matematicky na 2 desetinná místa.</p>', check: 'q5' },
        { h: 'Řešený příklad: rodinný dům', html: '<p>Rodinný dům v obci s 8 000 obyvateli, zastavěná plocha <b>118,4 m²</b>, dvě nadzemní podlaží (druhé přes celou plochu domu), místní koeficient <b>1,5</b>.</p><p><b>1.</b> Základ: 118,4 m² → nahoru <b>119 m²</b>.<br><b>2.</b> Sazba: (3,50 + 1,40 za podlaží) × 1,6 (obec do 10 000 obyvatel) = <b>7,84 Kč/m²</b>.<br><b>3.</b> Výchozí daň: 119 × 7,84 × 1,0 = 932,96 → nahoru <b>933 Kč</b>.<br><b>4.</b> Daň: 933 × 1,5 = 1 399,50 → nahoru <b>1 400 Kč</b>.</p><p>Pozemek pod domem se nedaní, je zastavěný zdanitelnou stavbou. Daň pod 5 000 Kč zaplatíš najednou do 31. května.</p>', check: 'q14' },
        { h: 'Přiznání a placení', html: '<p>Přiznání se podává do <b>31. ledna</b> podle stavu k 1. lednu. Když už ho poplatník podal dřív a nic se nezměnilo, znovu ho nepodává. Změny během roku se nezohledňují.</p><p>Daň do <b>5 000 Kč</b> se platí najednou do 31. května. Vyšší ve dvou splátkách do 31. 5. a 30. 11., zemědělci do 31. 8. a 30. 11.</p>', check: 'q12' }
      ],
      quiz: ['q1', 'q3', 'q7', 'q8', 'q9', 'q13', 'q15']
    }
  ],
  gens: [
    {
      id: 'dnv', topic: 'p2', title: 'Daň ze stavebního pozemku',
      make(r) {
        const obce = [['do 1 000 obyvatel', 1.0], ['s 3 000 obyvateli', 1.4], ['s 8 000 obyvateli', 1.6], ['s 20 000 obyvateli', 2.0], ['se 40 000 obyvateli', 2.5], ['ve statutárním městě', 3.5], ['v Praze', 4.5]];
        const [kde, k] = r.pick(obce), m2 = r.int(30, 140) * 10, mk = r.pick([1, 1, 1.5, 2, 0.8, 1.2]);
        const sazba = Math.round(3.5 * k * 100) / 100, vych = Math.ceil(Math.round(m2 * sazba * 100) / 100), dan = Math.ceil(Math.round(vych * mk * 100) / 100);
        return {
          q: `Stavební pozemek <b>${KR.num(m2)} m²</b> leží v obci ${kde}. Místní koeficient je ${KR.num(mk)}, inflační koeficient 1,0. Jaká je daň z pozemku za rok 2026?`,
          a: dan, unit: 'Kč',
          steps: [`Sazba = 3,50 Kč/m² × koeficient ${KR.num(k)} = ${KR.num(sazba)} Kč/m²`, `Výchozí daň = ${KR.num(m2)} × ${KR.num(sazba)} × 1,0 = ${KR.num(Math.round(m2 * sazba * 100) / 100)} → nahoru ${KR.num(vych)} Kč`, `Daň = ${KR.num(vych)} × ${KR.num(mk)} = ${KR.num(Math.round(vych * mk * 100) / 100)} → nahoru <b>${KR.num(dan)} Kč</b>`]
        };
      }
    },
    {
      id: 'zaloha', topic: 'p3', title: 'Záloha na daň ze mzdy',
      make(r) {
        const DETI = [1267, 1860, 2320];
        let w, n, zak, dan, po, zv, zal;
        do {
          w = r.int(2500, 9000) * 10 + r.pick([0, 0, 0, 5]) * 10; n = r.pick([0, 0, 1, 1, 2, 3]);
          zak = Math.ceil(w / 100) * 100; dan = zak * 15 / 100; po = dan - 2570;
          zv = DETI.slice(0, n).reduce((a, b) => a + b, 0); zal = po - zv;
        } while (po < 0 || zal < 0);
        const deti = n ? `${n === 1 ? 'jedno dítě' : n === 2 ? 'dvě děti' : 'tři děti'}, na které uplatňuje daňové zvýhodnění` : 'žádné děti';
        const st = [`Základ zálohy: ${KR.num(w)} Kč → stovky nahoru = ${KR.num(zak)} Kč`, `Daň 15 %: ${KR.num(zak)} × 0,15 = ${KR.num(dan)} Kč`, `Sleva na poplatníka: ${KR.num(dan)} − 2 570 = ${KR.num(po)} Kč`];
        if (n) st.push(`Zvýhodnění na děti: ${DETI.slice(0, n).map(KR.num).join(' + ')}${n > 1 ? ` = ${KR.num(zv)}` : ''} Kč`);
        st.push(`Záloha na daň = ${n ? `${KR.num(po)} − ${KR.num(zv)} = ` : ''}<b>${KR.num(zal)} Kč</b>`);
        return {
          q: `Zaměstnankyně má hrubou mzdu <b>${KR.num(w)} Kč</b> měsíčně, u zaměstnavatele podepsala prohlášení k dani a ${n ? 'má ' + deti : 'nemá žádné děti'}. Jaká je měsíční záloha na daň v roce 2026?`,
          a: zal, unit: 'Kč', steps: st,
          rows: [
            { label: 'Základ zálohy (stovky nahoru)', a: zak, unit: 'Kč' },
            { label: 'Daň 15 %', a: dan, unit: 'Kč' },
            { label: 'Sleva na poplatníka', a: 2570, unit: 'Kč' },
            { label: 'Daňové zvýhodnění na děti', a: zv, unit: 'Kč' },
            { label: 'Záloha na daň', a: zal, unit: 'Kč' }
          ]
        };
      }
    },
    {
      id: 'cista', topic: 'p3', title: 'Čistá mzda zaměstnance',
      make(r) {
        const DETI = [1267, 1860, 2320];
        let w, pr, n, dan, zv, zal;
        do {
          w = r.int(25, 90) * 1000; pr = r.pick([true, true, true, false]); n = pr ? r.pick([0, 1, 2, 3]) : 0;
          dan = w * 15 / 100; zv = DETI.slice(0, n).reduce((a, b) => a + b, 0); zal = pr ? dan - 2570 - zv : dan;
        } while (pr && (dan < 2570 || zal < 0));
        const zp = Math.ceil(w * 45 / 1000), sp = Math.ceil(w * 71 / 1000), cm = w - zp - sp - zal;
        const st = [`ZP 4,5 %: ${KR.num(w)} × 0,045 = ${KR.num(zp)} Kč`, `SP 7,1 %: ${KR.num(w)} × 0,071 = ${KR.num(sp)} Kč`, `Daň 15 % ze základu ${KR.num(w)} Kč (stovky nahoru) = ${KR.num(dan)} Kč`];
        st.push(pr ? `Záloha: ${KR.num(dan)} − 2 570 (poplatník)${n ? ` − ${KR.num(zv)} (děti: ${DETI.slice(0, n).map(KR.num).join(' + ')})` : ''} = ${KR.num(zal)} Kč` : `Bez prohlášení se slevy neuplatní, záloha = ${KR.num(zal)} Kč`);
        st.push(`Čistá mzda = ${KR.num(w)} − ${KR.num(zp)} − ${KR.num(sp)} − ${KR.num(zal)} = <b>${KR.num(cm)} Kč</b>`);
        const kdo = pr ? `podepsala prohlášení k dani a ${n ? `uplatňuje zvýhodnění na ${n} ${n === 1 ? 'dítě' : 'děti'}` : 'nemá děti'}` : 'nepodepsala prohlášení k dani';
        return {
          q: `Zaměstnankyně má hrubou mzdu <b>${KR.num(w)} Kč</b>, ${kdo}. Jaká je její čistá mzda (2026)?`,
          a: cm, unit: 'Kč', steps: st,
          rows: [
            { label: 'Zdravotní pojištění 4,5 %', a: zp, unit: 'Kč' },
            { label: 'Sociální pojištění 7,1 %', a: sp, unit: 'Kč' },
            { label: 'Základ zálohy (stovky nahoru)', a: w, unit: 'Kč' },
            { label: 'Daň 15 %', a: dan, unit: 'Kč' },
            { label: 'Slevy a zvýhodnění celkem', a: dan - zal, unit: 'Kč' },
            { label: 'Záloha na daň', a: zal, unit: 'Kč' },
            { label: 'Čistá mzda', a: cm, unit: 'Kč' }
          ]
        };
      }
    },
    {
      id: 'dpp', topic: 'p3', title: 'Srážková daň z DPP',
      make(r) {
        const o = r.int(100, 1190) * 10 + r.pick([0, 0, 5]), d = Math.floor(o * 15 / 100), c = o - d;
        return {
          q: `Studentka má dohodu o provedení práce s odměnou <b>${KR.num(o)} Kč</b> za měsíc a prohlášení k dani nepodepsala. Kolik jí zaměstnavatel vyplatí?`,
          a: c, unit: 'Kč',
          steps: [`Odměna z DPP pod 12 000 Kč bez prohlášení → srážková daň 15 %, pojistné se neplatí`, `Daň: ${KR.num(o)} × 0,15 = ${KR.num(o * 15 / 100)} → koruny dolů = ${KR.num(d)} Kč`, `Vyplatí se ${KR.num(o)} − ${KR.num(d)} = <b>${KR.num(c)} Kč</b>`]
        };
      }
    },
    {
      // přednáška 5, příklad 1 (paní Přibylová): § 13, převod max. 50 % příjmů a výdajů na spolupracujícího manžela
      id: 'spol', topic: 'p3', title: 'Spolupracující manžel (§ 13)',
      make(r) {
        const N = KR.num, d100 = x => Math.floor(x / 100) * 100, dan = z => d100(z) * 15 / 100, po = z => Math.max(0, dan(z) - 30840);
        let P, V, M;
        do { P = r.int(80, 150) * 10000; V = r.int(150, 700) * 1000 + r.int(0, 9) * 100; M = r.int(80, 200) * 1000; } while (P - V < 500000 || P - V > 1080000);
        const Z = P - V, w1 = po(Z), m1 = po(M), Pp = P / 2, Vp = V / 2, Zw = (P - Pp) - (V - Vp), Zm7 = Pp - Vp, Zm = M + Zm7, w2 = po(Zw), m2 = po(Zm), sav = w1 + m1 - w2 - m2;
        return {
          q: `Paní Hrubá vede účetnictví na živnostenský list: příjmy <b>${N(P)} Kč</b>, výdaje <b>${N(V)} Kč</b>. Odpoledne jí pomáhá manžel, který je zároveň zaměstnaný a jeho základ ze závislé činnosti je <b>${N(M)} Kč</b>. Děti nemají, jiné odpočty ani slevy kromě slevy na poplatníka neuplatňují. Spočítej daň obou manželů bez rozdělení (varianta 1) a s převodem nejvyšší možné části na manžela podle § 13 (varianta 2). Kolik varianta 2 ušetří?`,
          a: sav, unit: 'Kč',
          steps: [
            `Varianta 1, manželka: ${N(P)} − ${N(V)} = ${N(Z)} Kč → stovky dolů ${N(d100(Z))} × 0,15 = ${N(dan(Z))} − 30 840 = ${N(w1)} Kč. Slevu na manžela neuplatní, jeho příjem je nad 68 000 Kč.`,
            `Varianta 1, manžel: ${N(M)} × 0,15 = ${N(dan(M))} Kč, sleva na poplatníka ji srazí na ${N(m1)} Kč${dan(M) < 30840 ? ` (${N(30840 - dan(M))} Kč slevy propadá)` : ''}`,
            `Varianta 2: na manžela jde nejvýš 50 %, tedy příjmy ${N(Pp)} Kč a výdaje ${N(Vp)} Kč`,
            `Manželka: ${N(P - Pp)} − ${N(V - Vp)} = ${N(Zw)} Kč → ${N(d100(Zw))} × 0,15 = ${N(dan(Zw))} − 30 840 = ${N(w2)} Kč`,
            `Manžel: § 6 ${N(M)} + § 7 ${N(Zm7)} = ${N(Zm)} Kč → ${N(d100(Zm))} × 0,15 = ${N(dan(Zm))} − 30 840 = ${N(m2)} Kč`,
            `Úspora = (${N(w1)} + ${N(m1)}) − (${N(w2)} + ${N(m2)}) = <b>${N(sav)} Kč</b>`
          ],
          rows: [
            { label: 'Var. 1: daň manželky po slevách', a: w1, unit: 'Kč' },
            { label: 'Var. 1: daň manžela po slevách', a: m1, unit: 'Kč' },
            { label: 'Var. 2: příjmy převedené na manžela', a: Pp, unit: 'Kč' },
            { label: 'Var. 2: výdaje převedené na manžela', a: Vp, unit: 'Kč' },
            { label: 'Var. 2: dílčí základ § 7 manželky', a: Zw, unit: 'Kč' },
            { label: 'Var. 2: daň manželky po slevách', a: w2, unit: 'Kč' },
            { label: 'Var. 2: celkový základ daně manžela', a: Zm, unit: 'Kč' },
            { label: 'Var. 2: daň manžela po slevách', a: m2, unit: 'Kč' },
            { label: 'Úspora díky § 13', a: sav, unit: 'Kč' }
          ]
        };
      }
    },
    {
      // přednáška 5, příklad 2: podíl společníka v.o.s. na základu daně + vlastní živnost s výdaji 80 %
      id: 'vos', topic: 'p3', title: 'Společnice v.o.s.',
      make(r) {
        const N = KR.num;
        let Z, pct, P2, m, inv, sh, z7;
        do {
          Z = r.int(100, 240) * 10000; pct = r.pick([50, 50, 40, 60]); P2 = r.int(100, 400) * 1000 + r.int(0, 99) * 10;
          m = r.pick([0, 500, 1000, 1500, 2000, 4000]); inv = r.pick([[0, ''], [0, ''], [2520, 'invalidní důchod 2. stupně'], [5040, 'invalidní důchod 3. stupně']]);
          sh = Z * pct / 100; z7 = sh + P2 / 5;
        } while (z7 > 1500000);
        const vy = P2 * 4 / 5, nc = 12 * m, zz = Math.floor((z7 - nc) / 100) * 100, d = zz * 15 / 100, sl = 30840 + inv[0], po = Math.max(0, d - sl);
        return {
          q: `V.o.s. mají dva společníci. Podle společenské smlouvy připadá společnici A <b>${pct} %</b> základu daně v.o.s., který činí <b>${N(Z)} Kč</b>. Společnice A má navíc řemeslnou živnost s příjmy <b>${N(P2)} Kč</b> a výdaje uplatňuje procentem z příjmů (80 %). ${m ? `Celý rok platí soukromé životní pojištění ${N(m)} Kč měsíčně.` : 'Životní pojištění neplatí.'}${inv[0] ? ` Pobírá ${inv[1]}.` : ''} Děti nemá. Jaká je její daň z příjmů za rok 2026?`,
          a: po, unit: 'Kč',
          steps: [
            `Podíl na základu daně v.o.s.: ${N(Z)} × ${pct} % = ${N(sh)} Kč`,
            `Živnost: výdaje 80 % = ${N(vy)} Kč, dílčí základ = ${N(P2)} − ${N(vy)} = ${N(P2 / 5)} Kč`,
            `Dílčí základ § 7 celkem: ${N(sh)} + ${N(P2 / 5)} = ${N(z7)} Kč`,
            m ? `Nezdanitelná část: životní pojištění 12 × ${N(m)} = ${N(nc)} Kč (limit 48 000 Kč)` : 'Nezdanitelné části: žádné',
            `Základ: ${N(z7)} − ${N(nc)} = ${N(z7 - nc)} → stovky dolů ${N(zz)} Kč (pod 36násobkem průměrné mzdy, sazba 15 %)`,
            `Daň: ${N(zz)} × 0,15 = ${N(d)} Kč`,
            `Slevy: na poplatníka 30 840${inv[0] ? ` + na invaliditu ${N(inv[0])}` : ''} = ${N(sl)} Kč`,
            `Daň po slevách = ${N(d)} − ${N(sl)} = <b>${N(po)} Kč</b>`
          ],
          rows: [
            { label: 'Podíl na základu daně v.o.s.', a: sh, unit: 'Kč' },
            { label: 'Dílčí základ z živnosti', a: P2 / 5, unit: 'Kč' },
            { label: 'Dílčí základ § 7 celkem', a: z7, unit: 'Kč' },
            { label: 'Nezdanitelné části (živ. pojištění)', a: nc, unit: 'Kč' },
            { label: 'Základ daně zaokrouhlený', a: zz, unit: 'Kč' },
            { label: 'Daň 15 %', a: d, unit: 'Kč' },
            { label: 'Slevy na dani celkem', a: sl, unit: 'Kč' },
            { label: 'Daň po slevách', a: po, unit: 'Kč' }
          ]
        };
      }
    }
  ],
  // Roztřiď: items = [text, index přihrádky]
  sorts: [
    {
      topic: 'p1', title: 'Přímá, nebo nepřímá daň?', bins: ['Přímá', 'Nepřímá'],
      items: [['Daň z příjmů fyzických osob', 0], ['Daň z příjmů právnických osob', 0], ['Dorovnávací daň', 0], ['Daň z nemovitých věcí', 0], ['Daň, kterou nejde přesunout na jiného', 0], ['DPH', 1], ['Spotřební daň z alkoholu', 1], ['Clo', 1], ['Ekologická daň', 1], ['Daň placená v ceně zboží', 1]]
    },
    {
      topic: 'p1', title: 'Plátce, nebo poplatník?', bins: ['Plátce', 'Poplatník'],
      items: [['Zaměstnavatel u daně ze mzdy', 0], ['Výrobce u nepřímé daně', 0], ['Dovozce u nepřímé daně', 0], ['Kdo daň vypočte, srazí a odvede', 0], ['Firma, která srazí daň z DPP', 0], ['Zaměstnanec u daně ze mzdy', 1], ['Konečný spotřebitel u DPH', 1], ['Vlastník pozemku u daně z pozemků', 1], ['Provozovatel kamionu u daně silniční', 1], ['Ten, jehož příjem je dani podroben', 1], ['Studentka s DPP u srážkové daně', 1]]
    },
    {
      topic: 'p3', title: 'Sleva, odpočet, nebo osvobození?', bins: ['Sleva na dani', 'Odpočet od základu', 'Osvobozený příjem'],
      items: [['Základní sleva na poplatníka', 0], ['Sleva na manžela', 0], ['Sleva na invaliditu', 0], ['Sleva za zaměstnance se ZP', 0], ['Dar na veřejně prospěšný účel', 1], ['Úroky z hypotéky na bydlení', 1], ['Soukromé životní pojištění', 1], ['Daňová ztráta z minulých let', 1], ['Stipendium', 2], ['Dědictví', 2], ['Sociální transfery', 2], ['Penze do 36násobku minimální mzdy', 2]]
    }
  ],
  // Najdi chybu: právě jeden krok (bad) je špatně, další kroky pokračují z chybné hodnoty
  errs: [
    {
      topic: 'p3', title: 'Záloha na daň ze mzdy',
      q: 'Hrubá mzda 42 350 Kč, prohlášení k dani podepsané, jedno dítě. Jaká je měsíční záloha na daň?',
      steps: ['Hrubá mzda 42 350 Kč, slevy se uplatní, protože je podepsané prohlášení', 'Základ zálohy: 42 350 Kč → stovky dolů = 42 300 Kč', 'Daň 15 %: 42 300 × 0,15 = 6 345 Kč', 'Sleva na poplatníka: 6 345 − 2 570 = 3 775 Kč', 'Zvýhodnění na první dítě: 3 775 − 1 267 = 2 508 Kč, to je záloha'],
      bad: 1,
      fix: 'Základ měsíční zálohy se zaokrouhluje na celé stovky nahoru: 42 400 Kč. Daň je pak 6 360 Kč, po slevě 3 790 Kč a záloha 2 523 Kč. Dolů na stovky se zaokrouhluje až roční základ daně.'
    },
    {
      topic: 'p3', title: 'Čistá mzda',
      q: 'Hrubá mzda 38 000 Kč, prohlášení k dani podepsané, bez dětí. Jaká je čistá mzda?',
      steps: ['ZP 4,5 %: 38 000 × 0,045 = 1 710 Kč', 'SP 7,1 %: 38 000 × 0,071 = 2 698 Kč', 'Daň 15 %: 38 000 × 0,15 = 5 700 Kč', 'Záloha na daň = 5 700 Kč', 'Čistá mzda = 38 000 − 1 710 − 2 698 − 5 700 = 27 892 Kč'],
      bad: 3,
      fix: 'S podepsaným prohlášením se odečte sleva na poplatníka 2 570 Kč: záloha je 3 130 Kč a čistá mzda 30 462 Kč.'
    },
    {
      topic: 'p2', title: 'Daň ze stavebního pozemku',
      q: 'Stavební pozemek 850 m² v obci se 4 000 obyvateli, místní koeficient 1,5, inflační koeficient 1,0. Jaká je daň z pozemku?',
      steps: ['Sazba: 3,50 Kč/m² × 1,4 (obec do 6 000 obyvatel) = 4,90 Kč/m²', 'Výchozí daň: 850 × 4,90 × 1,0 = 4 165 Kč', 'Daň za výpočtový list: 4 165 × 1,5 = 6 247,50 → 6 247 Kč', 'Daň je přes 5 000 Kč, platí se ve dvou splátkách do 31. 5. a 30. 11.'],
      bad: 2,
      fix: 'Daň za výpočtový list se zaokrouhluje na celé koruny nahoru: 6 248 Kč. U daně z nemovitých věcí se nahoru zaokrouhluje základ, výchozí daň i daň.'
    },
    {
      topic: 'p3', title: 'Společník v.o.s. s živností',
      q: 'Zjednodušený příklad 2 z 5. přednášky (bez daru, zaměstnanců a ztráty v.o.s.): společníkovi připadá polovina základu daně v.o.s. 1 800 000 Kč. Má i řemeslnou živnost s příjmy 200 000 Kč a výdaji 80 % z příjmů. Jiné odpočty ani slevy kromě slevy na poplatníka nemá. Jaká je jeho daň?',
      steps: ['Podíl na základu v.o.s.: 1 800 000 × 50 % = 900 000 Kč', 'Živnost: dílčí základ = 200 000 × 0,8 = 160 000 Kč', 'Dílčí základ § 7 celkem: 900 000 + 160 000 = 1 060 000 Kč', 'Daň 15 %: 1 060 000 × 0,15 = 159 000 Kč', 'Po slevě na poplatníka: 159 000 − 30 840 = 128 160 Kč'],
      bad: 1,
      fix: '80 % z příjmů jsou výdaje, ne základ: 200 000 − 160 000 = 40 000 Kč. Základ je 940 000 Kč, daň 141 000 Kč a po slevě 110 160 Kč.'
    }
  ]
});
