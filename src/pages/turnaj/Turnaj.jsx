import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import castelo from '../../img/turnaj/drama/castelo.png';
import sova from '../../img/turnaj/drama/sova.png';
import informacni_tabule from '../../img/turnaj/drama/informacni_tabule.png';
import profesori from '../../img/turnaj/drama/profesori.png';
import studenti from '../../img/turnaj/drama/studenti.png';
import prijezd from '../../img/turnaj/drama/prijezd.png';
import prijezd_real from '../../img/turnaj/drama/prijezd_real.png';
import seznameni from '../../img/turnaj/drama/seznameni.png';
import hodina_castelo from '../../img/turnaj/drama/hodina_castelo.png';
import hodina_kruval from '../../img/turnaj/drama/hodina_kruval.png';
import hodina_bradavice from '../../img/turnaj/drama/hodina_bradavice.png';
import hodina_mahouto from '../../img/turnaj/drama/hodina_mahouto.png';
import prvni_ukol_vstup from '../../img/turnaj/drama/prvni_ukol_vstup.png';
import prvni_ukol_hadi from '../../img/turnaj/drama/prvni_ukol_hadi.png';
import treti_ukol_jaguarundi from '../../img/turnaj/drama/treti_ukol_jaguarundi.png';
import treti_ukol_klobouk from '../../img/turnaj/drama/treti_ukol_klobouk.png';
import cute_pary from '../../img/turnaj/drama/cute_pary.png';
import cute_pary_tse from '../../img/turnaj/drama/cute_pary_tse.png';
import pololeti from '../../img/turnaj/drama/pololeti.png';
import may from '../../img/turnaj/drama/may.png';
import paty_ukol_castelo from '../../img/turnaj/drama/paty_ukol_castelo.png';
import paty_ukol_ivan from '../../img/turnaj/drama/paty_ukol_ivan.png';
import pampelisky from '../../img/turnaj/drama/pampelisky.png';
import finale from '../../img/turnaj/drama/finale.png';
import ivan_vyherce from '../../img/turnaj/drama/ivan_vyherce.png';
import bromance from '../../img/turnaj/drama/bromance.png';


import TurnajNav from './TurnajNav.jsx'

const Turnaj = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Turnaj</h1></div>

    <img src={castelo} className='img-in-text img-in-text-right'/>

    <p>Stalo se to jeden z těch dřívějších roků třetího milénia, konkrétně se zrovna v knize světa <span
      className='text-highlighter'>kapitola roku 2007
      chýlila ke konci</span>. V nejzazších hlubinách amazonského pralesa, kam ani ta liška nezaběhne dát dobrou noc,
      byl
      klidný podvečer. Rudý sluneční kotouč se znaveně skláněl k obzoru, mezi stromovými patry se srážel vzduch a mezi
      hladovými osidly zdejších mlžných mraků si na obyvatele Castelobruxa brousily zuby nástrahy ze zvířecí i rostlinné
      říše, jimž nicméně dnes, stejně jako jindy, nemělo být dopřáno. Někteří obyvatelé výše zmíněného institutu se
      věnovali svým posledním školním povinnostem v bezpečí školy, někteří se uchylovali do lázeňských či odpočinkových
      prostor k volnočasovým aktivitám a jiní si už brousili zuby na poslední jídlo dne. Zdánlivě to byl den jako každý
      jiný.

    </p>

    <img src={sova} className='img-in-text img-in-text-left'/>

    <p>Na počátku bylo slovo a tím slovem byl dopis. Přinesla ho sova – tvor ve zdejších končinách spíše neobvyklý,
      jelikož většina obyvatel se už dávno naučila nezatěžovat ptáky doručováním do míst, kde jim jde o život. Neobvyklý
      pošťák přinesl neobvyklé zprávy a zatímco se mu zdlouhavou cestu snažil vynahradit pamlsky a drbáním, začetl se
      nejvyšší kmenovec všech kmenů a celé školy Caetano Murhala do <span className='text-highlighter'>dopisu ze spřátelené bradavické školy</span>.
    </p>

    <img src={informacni_tabule} className='img-in-text img-in-text-right'/>

    <p>Vzruch začal ve sborovně mezi zaměstnanci, prvotní impuls se další ráno z řad vyučujících rozprchnul mezi
      studenstvo a na dlouho ze zdejšího kořenového systému vyhnal posvátný klid a pohodu, jelikož <span
        className='text-highlighter'>do oběda to věděla
        celá škola</span>, jak bývá v těchto kolektivech zvykem.
    </p>

    <p>Celá škola se tak zabývala důležitými dotazy ohledně nastávajícícho turnaje, jehož měla tu příležitost se
      zúčastnit, například třeba… Proč jo? Proč ne? A co si vezmu na sebe, pokud pojedu já?
    </p>

    <p>Priority byly různé, poryv vzrušení nicméně pohnul celou školou a školní vedení naštěstí nemělo potřebu jej
      studentům vůbec zatrhávat. <span
        className='text-highlighter'>Meziškolní duch přeci jen bylo třeba povzbuzovat</span> stejně jako ten školní a
      spřátelit se
      s kouzelníky celého světa jistě byla vesměs dobrá věc, jak se shodli ti střízlivější debatující, co neřešili
      garderobu. Začalo tedy jednání s Bradavicemi o podmínkách turnaje, zabezpečení cesty, pobytu a zkrátka… Bez
      oficiálního udělení souhlasu, prozatím, se stejně už začalo schylovat k tomu, že se na výpravu nejspíše pojede. A
      s tím vyvstala další otázka. Kdo? A kolik?
    </p>

    <img src={profesori} className='img-in-text img-in-text-left'/>

    <p>Mezi profesory se vybíralo prostou domluvou, srdcem a rozumem. Někteří členové sboru se přeci jen cítili příliš
      svázáni s pralesem a domovem v něm na to, aby školu na rok opustili, jiní naopak byli pro svou chladnou hlavu a
      znalosti jako doprovod studentů stanoveni jako neodmyslitelní. Konkrétně byli vybráni pánové <span
        className='text-highlighter'>Ernesto Azevedo</span> a <span className='text-highlighter'>Caetano Murhala</span>,
      jako zástupci vedení školy nesměli na mezinárodní akci
      takového rázu přirozeně chybět. Dále
      pánové a bratři <span className='text-highlighter'>Jared Ilai Moreno</span> a <span className='text-highlighter'>Tristán Yeray Moreno</span>,
      pán <span className='text-highlighter'>Demetrio Agamez</span> a jako růže mezi trním <span
        className='text-highlighter'>Carmilla Iris
        José</span>.
    </p>

    <img src={studenti} className='img-in-text img-in-text-right'/>

    <p>Z řad studentů byl výběr těžší, <span className='text-highlighter'>nebyl dopředu stanoven počet, kolik se jich vybere</span>,
      snad aby mezi studenty
      nedošlo k nevraživosti či větší míře beznaděje s tím, jak se postupně nabídky k účasti rozdávaly. <span
        className='text-highlighter'>Celé druhé
        pololetí toho roku se sledovaly výsledky</span> studentů, jejich schopnosti, zásluhy škole, stejně jako se bral
      v potaz i
      ohled na to, jak si vedli dlouhodobě, profesoři své svěřence přeci jen znali. Nakonec se vybrala poměrně různorodá
      skupinka chlapců a děvčat <span className='text-highlighter'>v ročnících mezi pátým a sedmým</span> přesně tak,
      jak tomu pravidla turnaje a účasti v něm
      chtěla. Kamarádská skupina tvořená <span
        className='text-highlighter'>Juanem Miguelem Santosem Ramírezem</span>, <span className='text-highlighter'>Mateem Benítezem</span> a <span
        className='text-highlighter'>Césarem Jesusem
        Gimenézem Castillerem</span>, sourozenecké dvojičky <span className='text-highlighter'>Alejandro</span> a <span
        className='text-highlighter'>Sofía Sánchezovi</span>, <span
        className='text-highlighter'>Melissa Nayra</span> a <span
        className='text-highlighter'>Mikel Ancco de Léonovi</span>, <span
        className='text-highlighter'>Luana Mariana</span> a <span className='text-highlighter'>Gabriel Sebastian Almeida Soaresovi</span>,
      další veselá kamarádská dvojička v podobě slečen <span className='text-highlighter'>Inés Sorayi
        Caro</span> a <span className='text-highlighter'>Sofii Amarilis Perez</span>, pán <span
        className='text-highlighter'>Catriel Ulises Condori</span>, slečna <span className='text-highlighter'>Chiara Antonia José</span>, <span
        className='text-highlighter'>Kira Soraia Rodrigues</span>, <span className='text-highlighter'>Lucia
        Juliana Navarro</span>, <span className='text-highlighter'>Yara Monteiro</span> a <span
        className='text-highlighter'>Yara Quetzal do Sol</span> a v neposlední řadě i pan <span
        className='text-highlighter'>Luan Caetanno</span> a <span className='text-highlighter'>Alejandro Navarro</span>.
      Deset děvčat, devět chlapců, premiant vedle premianta, mladí temperamentní kouzelníci připraveni předvést svůj
      potenciál.

    </p>

    <div className="img-in-text img-in-text-left img-fading">
      <img src={prijezd} className='img-fade-top'/>
      <img src={prijezd_real} className='img-fade-bottom'/>
    </div>

    <p>Poslední měsíce příprav utekly snad až příliš rychle a brzy nastal čas pobalit si své vědomosti, nejteplejší
      oblečení ve skříni a <span className='text-highlighter'>vypravit se na expedici</span>. S naší školou a lidmi na
      ní jsme se rozloučili krátkým <span className='text-highlighter'>rituálem
        žehnajícím naší cestě</span> a ještě s posledními vůněmi domova, čerstvým kvítím a rituálním olejíčkem jsme
      se <span className='text-highlighter'>v rytinami
        zdobených kánoích vydali na cestu kolem zeměkoule</span>. Bradavičtí naši delegaci <span
        className='text-highlighter'>očekávali u Černého jezera</span>, o němž
      jsme v tu chvíli ještě nevěděli, že se pro většinu z nás během pár měsíců stane místem plným těžkých zkoušek,
      obnažených Rusů a pro některé vyvolené oblíbeným randícím místečkem. První dojmy pravděpodobně byly smíšené, <span
        className='text-highlighter'>Anglie nás přivítala mlhou</span>, my jsme z nějakého důvodu Anglii pozdravili
      množstvím svítících motýlků a za prvních
      rozpačitých pozdravů jsme vstoupili na půdu Evropy. Daleko od domova, v našich <span className='text-highlighter'>slavnostních uniformách</span> a
      úplně
      jiní než ostatní; obě školy dorazivší po nás působily jako prazvláštní vojenské šiky a nad bradavickými visel
      zvláštní opar místního kouzla, jemuž jsme zatím nerozuměli. Zbytek večeru našeho příjezdu byl směsí <span
        className='text-highlighter'>kulturního
        šoku</span>, uvítacích proslovů a chladného větru, který s sebou přitáhla kruvalská loď do už tak sychravého
      Skotska.
    </p>

    <img src={seznameni} className='img-in-text img-in-text-right'/>

    <p>Náš první týden v Evropě proběhl v duchu <span className='text-highlighter'>směsi cizích jazyků</span>, <span
      className='text-highlighter'>bloudění po bradavickém hradě</span>, <span className='text-highlighter'>prvních seznámení</span> s
      novými lidmi či setkání s těmi, které jsme již potkali na mistrovství světa ve famfrpále, na které jsme byli v
      srpnu pozváni. V neposlední řadě jsme si taky zvykali na nový domov v podobě našeho <span
        className='text-highlighter'>kouzelného stanu</span>. Pro některé
      na první dojem nic moc, pro jiné asi lepší než představa spaní v tom studeném hradě, nakonec se pro nás náš
      vyhřívaný stan s ohništěm a množstvím polštářků a polehávacích míst stal příjemným útočištěm. Dalo by se tvrdit,
      že jsme se v těch mezinárodních vodách všichni otužovali dost pomalu, každý z nás totiž spal ve svém vlastním, my
      ve stanu, kruvalští na lodi, mahoutoukorští ve své vzducholodi a bradavičtí ve hradu.
    </p>

    <p>Další týden nás stejně ale všechny čekaly první pořádné dávky hradu a jeho obyvatel, začínala totiž <span
      className='text-highlighter'>výuka</span>.
      Někteří z nás se nechali šokovat tím, jaké mají zdejší studenti způsoby, pravděpodobně všichni z nás se šokovali
      navzájem tím, jak kde probíhá výuka a jaký <span className='text-highlighter'>nedostatek důvěry tu ke studentům panuje</span>;
      do lesa nesmí, do vody nesmí
      a spát smí jen v kouzly oddělených ložnicích a půl školy tráví noc tím, že hlídá, jestli ta druhá půlka spí.
      Zatímco na některých školách je kremace považována za přijatelný školní trest a na jiných se praxe patrně
      přeceňuje a preferuje se chovat studenty připoutané v lavicích, některým se zase asi nezamlouval náš styl výuky.
      Nebo my. Bez poznámek některých lidí na konto toho, odkud jsme a jací jsme, se to neobešlo, ale my byli <span
        className='text-highlighter'>připraveni
        si respekt vybojovat</span>.
    </p>

    <div className="two-images">
      <div className="slide">
        <img src={hodina_castelo} className='img-in-text'/>
        <img src={hodina_mahouto} className='img-in-text'/>
      </div>

      <div className="slide slide-B">
        <img src={hodina_bradavice} className='img-in-text'/>
        <img src={hodina_kruval} className='img-in-text'/>
      </div>
    </div>

    <p>Což je snaha, která brzy narazila, nájezd na bradavickou výuku nebyl úplně hladký. Třeba konkrétně <span
      className='text-highlighter'>pro Luanu a
      Matéa byl kostrbatý natolik, že je téměř vyhodil ze sedla</span>. Ukázku rituálního přemisťování si oba každý ve
      své
      skupince převzali v <span className='text-highlighter'>extrémním duchu castelobrušské úcty k přírodě</span> a v
      ochraně iluzorního skotu se pustili do
      konfliktu s kruvalskými studentkami, která následně vyústila v menší ukázku kulturních odlišností mezi kouzly.
      Profesor Mercier, který se, touto hodinou počínaje, s našimi i cizími studenty trápil až do konce roku, samozřejmě
      takovou osobitou výměnu názorů na své hodině neocenil a stěžoval si vedení naší školy. Pánové Azevedo i Murhala se
      s oběma výše zmíněnými studenty posadili a do hloubky s nimi problém probrali, nicméně i tak nad nimi zůstala
      viset <span className='text-highlighter'>hrozba v podobě podmínečného vyloučení</span>. Kurz přemisťování nás tak
      téměř stál dva naše druhy, několik částí
      těla, všechny nervy, ale… Nikdo neztratil hlavu!

    </p>

    <img src={prvni_ukol_vstup} className='img-in-text img-in-text-left'/>

    <p>Pověst jsme obhájili až časem, takové první sněženky přišly spolu s prvním <span className='text-highlighter'>turnajovým úkolem zadávaným
      Mahoutokorem</span>. Hned v prvních dveřích <span className='text-highlighter'>čelili soutěžící svým nejhlubším démonům</span>,
      začátek zkoušky byl drsný, ale
      všichni si postupně, svými způsoby a vlastním tempem, poradili se setkáním s <span className='text-highlighter'>bolestivými vzpomínkami</span>, <span
        className='text-highlighter'>vnitřními
        pochybami a zlými hlasy</span>. Hádali se, prali a vyzpívali si cestu ven a čelili zdatně sfinze a jejím <span
        className='text-highlighter'>záludným
        hádankám</span>, stejně jako později hádankám a chytákům ohledně <span className='text-highlighter'>volby správné cesty</span>.
      Jedno dobré na tom, že to začalo
      jedním z nejtěžších úkolů, bylo jistě, pak už to šlo jako po másle. Každý přece jenom zvládl vymyslet něco, <span
        className='text-highlighter'>co jej
        dělá tím nejsilnějším</span>, třebaže čelit svému odrazu v takové atmosféře nebylo pro některé nejlehčí. Když
      naši dobrodruzi <span
        className='text-highlighter'>narazili na místnost plnou hadů, mohli se cítit úplně jako doma</span>.

      <img src={prvni_ukol_hadi} className='img-in-text img-in-text-right'/> Někteří
      přišli s opravdu kreativními
      způsoby, jak se s touhle překážkou vypořádat, ale hlavně – konečně to začalo vypadat, že do toho turnaje snad i
      trochu patříme. Všichni jsme zadání splnili a… Rozhodně jsme to pak s nikým neprobírali u ohně, protože to přece
      nebylo povolené. Sounáležitosti vůbec bylo hodně, další týden se mnozí z našich soutěžících vypravili <span
        className='text-highlighter'>lovit růžové
        perly do Černého jezera</span> pospolu, vedení školy jistě mohlo být pyšné na to, jak studenti drželi pokupě,
      přestože
      byli v turnaji i protivníky.</p>

    <img src={treti_ukol_jaguarundi} className='img-in-text img-in-text-left'/>

    <p>Druhý úkol, jako by přišel hned vzápětí, jen co se naše delegace vymotala z <span className='text-highlighter'>kouzelného plesu</span>.
      Čas vystřídat
      taneční střevíce a polobotky za sněhule! Bradavické pozemky zapadaly <span className='text-highlighter'>prvním sněhem</span> a
      kromě toho, že jsme každý den
      museli po tom zrádném povrchu dobruslit do hradu, se <span className='text-highlighter'>druhý úkol navíc konal na zamrzlém jezeře</span>.
      Hodně našich
      statečných první skobu hodilo ještě před ledovou pevností, ti šikovnější či opatrnější pak až vevnitř, celkově se
      to pravděpodobně nevyhlo ale nikomu. <span className='text-highlighter'>Kruvalský úkol</span> nás hned ze startu
      podrobil jak <span className='text-highlighter'>psychické, tak fyzické zátěži</span> a při vyrovnávání se zimou
      bylo třeba zůstat v plném střehu a opatrně projít jednu ze <span
        className='text-highlighter'>tří záludných stezek plných
        nástrah</span>. Někteří naši studenti využili pro průchod své zvěromážské schopnosti, ostatním nezbývalo, než se
      zhluboka
      nadechnout a vsadit na ostražitost a vytrvalost.
    </p>

    <img src={treti_ukol_klobouk} className='img-in-text img-in-text-right'/>

    <p>Již takhle ze začátku notně vyčerpaní tak všichni úspěšně došli čelit psychicky náročnější zkoušce s <span
      className='text-highlighter'>plamenem
      našeptávajícím jim všechny jejich pochyby</span>. Hodně z našich bojovníků od prvního úkolu učinilo pokrok a bylo
      mnohem
      odhodlanějších těmto strachům neutíkat a lépe čelit. Nikdo z nich by to nejspíš moc ochotně nahlas nepřipustil,
      což v zásadě schvalujeme, ale ten den je Kruval přece jenom trochu zocelil. Člověk se smyslem pro humor by mohl
      tvrdit, že dostat po tomhle fyzický či <span className='text-highlighter'>bojový úkol</span> v další části vlastně
      bude odpočinek, v praxi to nicméně spíše
      bylo tak, že přes návaly adrenalinu indukované obřím ledovým strážcem nezbyl na žádné stresy moc čas. Soutěžící se
      museli naplno ponořit do kombatu a vymyslet efektivní způsob, jak se kouzly a v případě našich hrdinů se kupodivu
      většina z nich vlastně nezdráhala uchopit ledovou sekyrku a vzít osud do vlastních rukou a se strážcem se,
      většinou za nějaké té výpomoci kouzly, srdnatě poprat. A na závěr celého úkolu <span className='text-highlighter'>přinést ledovému srdci hodnotnou
        oběť</span> - někteří části sebe, svých kouzel a jiní… Opravdu hodnotné šperky. A klobouky.
    </p>
    <div className="img-in-text img-in-text-left img-fading">
      <img src={cute_pary_tse} className='img-fade-bottom'/>
      <img src={cute_pary} className='img-fade-top'/>
    </div>

    <p>V různé fázi rozbití, truchlení po ztrátě či naprosté nevědomosti o tom, co v nich chybí, stanula posádka této
      dobrodružné kánoe před poněkud netradičnějším úkolem: Zkusit se uvolnit, nasadit úsměv, sváteční náladu a <span
        className='text-highlighter'>užít si
        vánoční svátky</span>. Hodně z nich přeci jen kromě nových možností a mezí svých schopností objevilo i <span
        className='text-highlighter'>nové lásky a
        vztahy</span>, ať už jako Sofía a Mateo v rámci Castelobruxa či jako Catriel, Sofia či třeba Juan se svými
      polovičkami s
      fakt strašnými jmény v rámci škol jiných. Podobně jako ostatní, ani většina našich studentů neměla s chytáním
      zlatonek kolem školy větší problém jiný než ten, že venku bylo mrazivo, a tak je turnaj vlastně od utužování
      nových vztahů a slavení vůbec nerušil. Snad jen ten stesk po domově se tu a tam ozval,
      ale <span className='text-highlighter'>naši studenti si vždy byli oporou</span>, ať už na ošetřovně, na hodinách
      či ve
      stanu u ohniště.
    </p>

    <img src={pololeti} className='img-in-text img-in-text-right'/>

    <p>Do třetího úkolu oproti těm předchozím se naopak zdálo být jaksi více času. Najednou byl čas nasbírat nejdříve
      napětí, a pak je postupně upustit. Nechat se ukolíbat lživou ukolébavkou zdejší rutiny a již bez bloudění po
      hradu <span className='text-highlighter'>trávit volná odpoledne po jeho prostorech</span>, mnohdy vlastně i
      častěji než
      v bezpečí stanu. Bitva s pololetními testy
      některé pohltila, jiné vlastně nikoliv a někteří tak dost možná poprvé okusili, jaké to je z pohledu studenta
      flinkaře. A někteří se možná jen zapomněli přes tréninky kouzelných schopností měnit se na mazlíky pod vedením
      pana Morena, další a další randíčka či <span className='text-highlighter'>zahraniční semináře</span>, během nichž
      se dala naučit mnohá zajímavá kouzla,
      ochutnat zahraniční čajíčky či potěžkat si v rukou katanu.
    </p>

    <p>Tak jako opar červánků po východu slunce se s podobnou růžovou parádou na zdejší školu přihnal <span
      className='text-highlighter'>Valentýn</span> v plné
      parádě a to včetně lítajících <span className='text-highlighter'>Amorků</span>, kteří některé páry naháněli
      dokonce mimo oficiální akci po soukromých
      randíčkách. <span className='text-highlighter'>Británie zkrátka žije pro klišé</span>, které by už nepsal ani
      Shakespeare. A snad by se to alespoň dalo
      připsat Troškovi, kdyby kromě pár facek třeba někde bylo i to slunce nebo seno.
    </p>

    <img src={may} className='img-in-text img-in-text-left'/>

    <p>Jaro bylo ze strany Castelobruxa manifestováno poněkud rázněji a ještě před roztátím sněhové pokrývky, pod
      kontrolou učitelů z našich řad vykvetl na bradavických pozemcích <span className='text-highlighter'>kousek osobní amazonské utopie</span>,
      zkrátka a dobře
      tam ze dne na den vyrostl autentický miniprales. Ihned po jeho zjevení se v jeho hlubinách pořádala akce <span
        className='text-highlighter'>betakurz
        přežití</span>, v němž si naši přátelé z jiných koutů světa mohli ozkoušet, jak by se jim u nás dařilo čelit
      naší fauně a
      flóře v duchu našich zásad. Asi není nutno dodat, že padaly některé poměrně drastické neúspěchy, od řad studentů
      napadených papratkou kajícnou, neshod s kovopláštěm či dokonce některým případům kompletně ztracených bradavických
      či kruvalských hrajících si na žháře. Již dopředu tedy bylo jasné, že za naše natlučené zadky z ledové pevnosti v
      dalším úkolu pralesem srovnáme skóre.
    </p>

    <img src={paty_ukol_castelo} className='img-in-text img-in-text-right'/>

    <p>Právě v tomto osobním pralesním koutku se pak <span className='text-highlighter'>třetí úkol</span> odehrával.
      Sotva den poté, co měli všichni možnost
      zkusit si nakoukat, jak má správný prales vypadat a fungovat, byli úkolem vrženi do jeho prostředí podrytém <span
        className='text-highlighter'>nerovnováhou</span>. A právě tu měli za úkol postupně usmířit a stabilizovat pět
      živlů reprezentovaných pěti menhiry a
      pěti skleněnými koulemi do menhirů pasujícími. Ihned u <span className='text-highlighter'>Solu</span>, prvního z
      živlů, mnohé z naších hrdinů zarazila úloha
      s transcendentálním rozsahem. Všichni postupně nějaké to <span
        className='text-highlighter'>vnitřní světlo</span> ze sebe ovšem vydali a více z nich
      pravděpodobně v úloze vyloženě cítilo přítomnost zadavatelů aneb učitelů, co je léta vedli k meditačním technikám,
      rovnováze s vnitřním světem a pevnému vztahu s duchy lesa.
    </p>

    <p>Úkoly pro <span className='text-highlighter'>Yaru</span> a <span
      className='text-highlighter'>Yvy</span> spočínající ve <span
      className='text-highlighter'>spřátelení tvora</span> a <span className='text-highlighter'>povzbuzování života v půdě</span> byly
      něco přesně z repertoáru
      castelobrušských. Hodně z nich si vypomohlo kouzly, jiní obětovali své jídlo či své šaty a to bez váhání, jelikož
      nad pomocí přírodě se v těchto končinách jednoduše nikdy neváhá.
    </p>

    <img src={paty_ukol_ivan} className='img-in-text img-in-text-left'/>

    <p>Notně odlišného charakteru pak byl <span className='text-highlighter'>Ybytu</span>, který naše hrdiny vytáhl dále
      do hlubin pralesa a donutil je osvědčit
      se ve věci vynalézavosti a schopnosti citlivě překonávat <span
        className='text-highlighter'>překážky pralesa</span>, tedy ideálně bez ničení okolí a
      narušování klidu ekosystému. Většina soutěžících si opět na tomto místě vypomohla kouzly, všichni si odvážně
      vyslechli <span className='text-highlighter'>poselství</span>, které pro ně větrný vír měl. Stejně odlišný pak byl
      živel <span className='text-highlighter'>Tatá</span>, tak jak se pro oheň hodí,
      zkouška zahrnovala dynamičtější situaci v podobě <span className='text-highlighter'>zastavení člověka ubližujícího rostlinnému porostu</span>.
      Co se této
      situace týče, jednalo se o řešení vesměs pacifická, jeden mládenec sice odhodlaně vyrazil liánu bránit vlastním
      tělem, jiní se spolehli na znehybnění protivníka či spíše na zneškodnění jeho nástroje nože. Všem se nakonec
      nicméně povedlo nastolit v pralese opět rovnováhu a s plicemi plnými vůní domova a s dobrým pocitem ve srdci mohli
      úkol opustit.
    </p>

    <img src={pampelisky} className='img-in-text img-in-text-right'/>

    <p>Sic někteří (z jiných škol tedy hlavně, kuc, kuc) během plnění posledního ze tří úkolů působili, že tam vypustí
      duši, první kontakt se zelení po zimě stejně do všech studentských srdíček vnesl trochu toho života a jarní
      radosti. Zatímco se většina z nich vyloženě spíše rekreačně vyrovnávala s úkolem v podobě <span
        className='text-highlighter'>získávání částí
        zvířecích</span> plášťů a částí nenásilnou cestou, rozmohla se ve škole epidemie <span
        className='text-highlighter'>květinových věnečků</span>. Nejvíce matoucí na
      té bylo snad to, že nápadně působila být nejvýraznějších v řadách kruvalských. Jakkoliv matoucí či nesmyslné to
      ale bylo, jednalo se o krásnou reprezentaci toho, že se nakonec přeci jen s rozdíly studenti z různých kultur
      poprali a setřeli je, ony květinové korunky a pohoda při společné přespávačce u táboráčku z nich skutečně alespoň
      zdánlivě dělala mnohem <span className='text-highlighter'>jednolitější skupinku</span>, než tomu bylo prve u
      příjezdu.
    </p>

    <img src={finale} className='img-in-text img-in-text-left'/>

    <p>Společně se závěrečnými testy, pravda hluboce prožívanými hlavně bradavickými, se postupně připlížil čas <span
      className='text-highlighter'>losování
      šampiónů</span>. Za Castelobruxo to byl <span className='text-highlighter'>Mateo Benítez</span>, hned následně
      postavný proti protivníkovi v podobě jeho
      otužovacího a koupacího kamaráda Ivana Niolaieviche Vasilieva; stál proti nim také Yamamoto Fuji a Theodore Ian
      Everett, vyloženě se nejednalo o průkop feminní síly. Nikdo kromě šampionů samotných vlastně jistojistě nevěděl,
      co se ve <span className='text-highlighter'>spletitém hrádku</span>, jenž toho dne vyrostl na famfrpálovém hřišti,
      první poloviny jejich cesty vlastně
      událo. Na šampiony začalo být vidět až někdy potom, co si pravděpodobně téměř nikdo přes napětí visící ve vzduchu
      nevyslechnul vyhlášení bradavického školního poháru. Šum hlášených čísel a fandících spolužáků narušila obrovská
      rána a šampioni se konečně objevili v zorném poli publika na balkónku - Fuji, <span
        className='text-highlighter'>Mateo</span> s jiskřící hůlkou jako druhý,
      Theodore a Ivan. Už tak lehce nemotorné pokusy o vyhlášení pak přehlušila exploze následovaná několika druhy <span
        className='text-highlighter'>letících studentů</span> - někteří z nich letěli na koštěti, jiní vstříc
      bolestivému polibku se zdí a jiní rychle po
      mostu vstříc dalšímu úkolu, náš byl naštěstí ten poslední zmíněný letec.
    </p>

    <img src={ivan_vyherce} className='img-in-text img-in-text-right'/>

    <p>První doražení Matea do nejvyšší věžičky sotva měli fandící čas oslavit, jelikož v dalších vteřinách bylo možno
      vidět jeho postavu, kterak <span className='text-highlighter'>padá z okna</span>, až… Na to, že nikoliv, přátelení
      se s Ivanem mu ten den dost možná
      zachránilo kůži, pozici v turnaji minimálně. Student Kruvalu i Castelobruxa spolupracovali na vyřešení záhady
      mechanismu ve věži a opět se sotva všichni přihlížející stíhali podivovat či si to pochvalovat, jelikož věž po
      doražení Theodora zmizela v záblescích sesílaných kouzel. V smršti, která se sešla před místností s pohárem,
      konečně zmizel i Fuji, zelený záblesk ticho a… Po mučivě dlouhé chvilce Ivan drživší pohár. A Matea. Který tímto
      obhájil a uzmul <span className='text-highlighter'>krásné druhé místo</span> a prý, že se silou přátelství vyhrává
      jen v pohádkách…
    </p>

    <img src={bromance} className='img-in-text img-in-text-left'/>

    <p>Přátelství bylo později na finální rozlučkové akci zpečetěno mezi pány <span
      className='text-highlighter'>objetím</span> a upřímnými gratulacemi, přičemž
      ještě tam se Ivan s Mateem hádal o tom, že to vítězství vlastně bylo společné. Předsudky vyvráceny, pomyslné zdi
      zbořeny a bohužel také čas <span className='text-highlighter'>zakončit epos o slavné castelobrušské výpravě do Bradavic</span>.
      Po všech hořkosladkých
      slovech loučení mezi nově vzniklými páry i kamarády jsme opět museli usednout na kánoe a vrátit se tam, kam
      patříme. Cesta byla stejná, ale my jsme už byli <span className='text-highlighter'>napořád jiní</span>.
    </p>
  </div>
)

export default Turnaj