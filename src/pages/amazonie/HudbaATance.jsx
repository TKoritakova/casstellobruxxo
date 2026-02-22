import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import capoeira from '../../img/kultura/tance_a_hudba/capoeira.png';
import hudba from '../../img/kultura/tance_a_hudba/hudba.png';
import tanec_01 from '../../img/kultura/tance_a_hudba/tanec_01.png';
import tanec_02 from '../../img/kultura/tance_a_hudba/tanec_02.png';
import tanec_03 from '../../img/kultura/tance_a_hudba/tanec_03.png';



const HudbaATance = () => (
  <div>
    <nav className="second-nav">
                <Link to="/mytologie">Mytologie</Link>
                <Link to="/pisne-ikaros">Písně Ikaros</Link>
                <Link to="/fauna-a-flora">Fauna a flóra</Link>
                <Link to="/tradice-a-svatky">Tradice a svátky</Link>
                <Link to="/jidlo">Jídlo</Link>
                <Link to="/hudba-a-tanec">Hudba a tanec</Link>
                <Link to="/oblekani">Oblékání</Link>
        </nav>
     

    <div className="main-header"><h1>Hudba a tance</h1></div>

    <p><span className='text-highlighter'>Tanec v této kultuře má víc funkcí</span> než jen tu společenskou, která stmeluje kolektiv a vztahy, či estetickou, vážící se k obecně lidskému obdivu hýbání se přesně do rytmu hudby v ladných pohybech. Byť obdiv pro tuto schopnost také existuje, <span className='text-highlighter'>zdaleka vůbec není pro zdejší lidi nejzásadnější. Tanec je především prostředkem sebevyjádření.</span> Ti, kteří dokážou vypnout kontrolu nad každým krokem a přestanou přemýšlet nad rytmem či technikou, v něm nacházejí <span className='text-highlighter'>svobodu</span> – nechají tělo plynout spolu s hudbou a jen jí naslouchají. V takovém okamžiku se tanec stává jazykem osobnosti i emocí. Umožňuje mnohem <span className='text-highlighter'>hlubší sebepoznání</span> a vytváří <span className='text-highlighter'>jedinečný most k sblížení s ostatními</span>.</p>

    <p><span className='text-highlighter'>Uvolnění se při tanci</span> neslouží jen jako nástroj k „prolomení ledů“, ale i jako poměrně účinná metoda, jak se <span className='text-highlighter'>vyrovnat s vlastními emocemi</span> – neškodně vybít a vytančit ty, které by jinak přerůstaly přes hlavu. I proto jsou různé formy tance <span className='text-highlighter'>součástí kouzelnických rituálů</span>, jež vyžadují klid mysli a často bývají emočně náročné. Magicko-funkční roli má v tomhle ohledu i hudba, od tance naprosto neoddělitelná, jež může rytmickou repetitivností <span className='text-highlighter'>navodit lehký trans</span>, což pomáhá jejich odpojení od fyzična, podporuje jednotný rytmus mezi tanečníky a vytváří to ideální půdu pro <span className='text-highlighter'>komunikaci s entitami v přírodě</span>.</p>

    <p>Správně vedený pohyb těla a emocí se totiž může – podobně jako pohyb rukou s hůlkou – stát <span className='text-highlighter'>vodičem mezi kouzelníkovou vnitřní podstatou a magikvarkovou sítí</span>. Výsledkem pak může být nejen vyvolání magického účinku, ale i <span className='text-highlighter'>posílení kouzla</span>, které už bylo sesláno. </p>


    <img src={tanec_01} className='img-in-text img-in-text-left' />
    
    <p>Další významnou funkcí tance je jeho schopnost <span className='text-highlighter'>vytvářet most mezi přítomností a minulostí</span>. Opakováním stejných kroků, jaké tančili naši předkové – ať už kolem ohně, nebo v karnevalovém průvodu – se k nim můžeme <span className='text-highlighter'>symbolicky přiblížit a udržovat tak jejich odkaz při životě</span>.</p>

    <p>Tanec odjakživa patří k <span className='text-highlighter'>nejběžnějším způsobům oslav</span>. Některé svátky mají své typické tance – tak jako je rychlá <span className='text-highlighter'>samba</span> neodmyslitelnou součástí mudlovského i kouzelnického karnevalu a <span className='text-highlighter'>quadrilha</span> patří k oslavám Festa Junina. Jiné slavnosti a setkání žádný konkrétní tanec nemají, přesto se na nich tančí – <span className='text-highlighter'>spontánně, podle nálady a chuti</span>. Nezřídkakdy se pořádají i taneční soutěže či celé večery věnované tanci.</p>

    <img src={tanec_02} className='img-in-text img-in-text-right' />
    
    <p>K oblíbeným společenským tancům patří například <span className='text-highlighter'>salsa</span> s výrazným afro-kubánským rytmem nebo dramatické, vášnivé <span className='text-highlighter'>tango</span>, založené na napětí mezi partnery, výrazném rytmusu klavíru a kontrabasu a melancholičtějšímu charakteru, jenž hudbě při tanci propujčují housle.</p>

    <p>Kromě dalších světoznámých latinskoamerických tanců, jako je kubánská <span className='text-highlighter'>cha-cha-cha</span> a <span className='text-highlighter'>rumba</span> nebo z afroamerického swingu vycházející <span className='text-highlighter'>jive</span>, jistě stojí za zmínku i tance lidovější; podobně jako <span className='text-highlighter'>quadrilha</span> k nim patří i kolumbijská <span className='text-highlighter'>cumbia</span>, doprovázená flétnami a bubny, jež vyjadřuje spojení indiánské, africké a španělské tradice, chillská <span className='text-highlighter'>cuepa</span>, reprezentující tradiční dvoření muže ženě, nebo třeba – v severovýchodním regionu Brazílie populární – tance z žánru <span className='text-highlighter'>forró</span> nesoucí prvky salsy a samby, stejně jako mnoha ostatních, nakolik je to sám o sobě žánr dost různorodý. Více než jeden z těchto tanců má pak ve zvyku občas plnit i satirickou funkci či slouží jako platforma pro diskuzi tradičních rolí a jejich prolamování, což je třeba právě u forró lákavé i pro zahraniční tanečníky. V Evropě se tímto tancem baví hned několik komunit. </p>

    <img src={tanec_03} className='img-in-text img-in-text-left' />
    
    <p>Dalším významným vlivem jsou pro studenty Castelobruxa nepochybně také <span className='text-highlighter'>tance různých okolních kmenů</span>, s nimiž jsou v kontaktu. Důležitým příkladem jsou zde definitivně původní obyvatelé Amazonie <span className='text-highlighter'>Shipibo-Conibo</span>, od nichž si kromě ochranných vzorů na své uniformě škola přebírá i tance, jimiž se místní spojují s duchy pralesa a léčivými silami džungle. Dalšími kmenovými tanci známými studentům jsou pak například tance provázející <span className='text-highlighter'>Yuruparí</span> – rituál dospělosti týkající se původně hlavně mladých mužů. Častějšími návštěvami, výměnami a kontaktem se školou je každopádně od tradice v tomto bodě upouštěno a mohou se účastnit i mladé ženy. Tance jsou provázeny stejnojmennými rituálními flétnami, na něž rovněž tradičně hráli hlavně muži.</p>

    <img src={capoeira} className='img-in-text img-in-text-right' />
        
    <p>Podobně jako tomu je při slavnostech na škole, i v kmenech se pak hodně tanců týká <span className='text-highlighter'>plodnosti půdy, nových začátků a spojení s pralesem</span>. Jediným, co si zatím studenti na škole neprosadili, tak zůstává <span className='text-highlighter'>capoeira</span>, brazilské taneční bojové umění, které na škole sice mívá své zájemce, ale jako volnočasová aktivita se stále neuchytila, neboť se před nalezením vhodného lektora vždy zabředne v polemikách o tom, zda to není pro studenty navzdory eleganci a lehkosti přeci jen příliš násilné, o <span className='text-highlighter'>maculelê</span> s mačetami a holemi pak už nemůže být řeč vůbec.</p>

    <p>Kreativního vyžití je nicméně dostatek, jelikož každý <span className='text-highlighter'>rituální tanec</span> může být trochu, leckdy i výrazně, <span className='text-highlighter'>odlišný od svých “sourozenců”</span>. Hodně z nich je prováděno v <span className='text-highlighter'>pravidelných obrazcích</span>, například zmiňované tancování v kruhu kolem ohně; součástí mohou být poskoky, otočky i jiné kroky, stejně jako pravidelné měnění směru tance. U některých je třeba <span className='text-highlighter'>přesných kroků</span>, zatímco magie jiných <span className='text-highlighter'>spočívá ve zpěvu</span>, a tam tedy přesnost spočívá více v konkrétních slovech a tónech. Dalšími magickými prvky rituálních tanců pak je malování po těle, jež může také mít dekorativní účely jako třeba při Noci jaguára, ale může obsahovat také různé kouzelné obrazce či znaky. Nositelem kouzelných vlastností během rituálního tance mohou být i <span className='text-highlighter'>bylinné směsi, vykuřovadla či samotná kouzelná hůlka</span>, stejně jako pak <span className='text-highlighter'>magické artefakty či jiné kouzelné předměty</span>, jimiž buďto všichni účastníci tance, nebo jeden hlavní, máchají při tanci v přesné choreografii. Přirozeně jsou pak tance snadnější, tak jak je většina studentů zná od útlých let na škole, tak i složitější, které například vyžadují i přesné kroky, zpěv i další složky a většinou se jich tedy také účastní menší počet trénovaných lidí, čímž se snižuje pravděpodobnost neúspěchu.</p>


    <img src={hudba} className='img-in-text img-in-text-left' />
    
    <p>Má-li tanec svého vůdce, zpravidla je provázen <span className='text-highlighter'>zpěvem</span> vícehlasným, tedy sóly vůdce a odpověďmi sboru. Pokud ale rituál zrovna nelpí na konkrétních magických zpěvných slovech, z nichž některé bývají leckdy i jazykem některého z místních kmenů, může se klidně stát, že si něco ke zpívání či k recitaci připraví účastnící rituálu. Jelikož se ale většina těch snadnějších tanců vyznačuje i jednoduchými, krátkými a často se opakujícími motivy, nepohrdnou tanečníci leckdy ani zvuky či tóny, kteréžto u tance do rytmu vyluzují. Co se <span className='text-highlighter'>hudebních nástrojů</span> týče, používají se především dechové nástroje, hlavně flétny a všelijaké píšťaly vyrobené z přírodnin, bubny z kmenů stromů a chrastítka z plodů a semen připomínající rumba koule, tu a tam jsou součástí pro moderní společnost kuriózní nástroje jako třeba malá kytara z krunýře pásovce charango. <span className='text-highlighter'>Inspirace pro mnohé z hraných melodií pak pocházejí ze samotné přírody</span>, jelikož hudebníci se svými nástroji často snaží napodobit zvuky, jež lze v lese slyšet, například divoké zurčení vody, déšť či zpívající ptáky.</p>

    <p>Konkrétními příklady jsou mezi zpěvy například takzvané <span className='text-highlighter'>ikaros</span>, léčitelské zpěvy z kmene Shipibo-Conibo, tvořené hlavně hlasem, palmovými chrastítky, vibracemi a zvukovými vzory, které mají harmonizovat tělo a duši. Kmen Yanomami je znám pro <span className='text-highlighter'>vokalizaci dechů</span>, jimiž je schopen komunikovat s dechy zvířat, tato technika bývá u některých rituálních tanců užívána vůdcem tance. Ve kmeni Asháninka se inspirovaly jednodušší kouzelnické rituály, neboť tam jsou rituály součástí každodenního života. Důsledkem toho jsou zpěvy u nich tedy zpravidla v jednoduchém kruhu, <span className='text-highlighter'>plné vyprávění o snech a přírodě</span> za doprovodu chrastítek, tleskání a jemných ženských vokálů.</p>


    


  </div>
)

export default HudbaATance