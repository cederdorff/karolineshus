export const contactInfo = {
  name: "Karolines Hus",
  subtitle: "Galleriet på Fur",
  addressLines: ["Madsbadvej 40", "7884 Fur", "Danmark"],
  phones: ["61 37 75 62", "40 43 48 17"],
  email: "karoline@energimail.dk",
  website: "www.karolineshus.dk",
};

export const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

export const artistCategoryOrder = [
  "billedkunstner",
  "fotograf",
  "grafiker",
  "keramiker",
  "maler",
  "skulptoer",
];

export const artistCategoryLabels = {
  billedkunstner: "Billedkunstner",
  fotograf: "Fotograf",
  grafiker: "Grafiker",
  keramiker: "Keramiker",
  maler: "Maler",
  skulptoer: "Skulptør",
};

export const aboutGalleryImages = [
  `${import.meta.env.BASE_URL}karolineshus/karolineshus-1.jpeg`,
  `${import.meta.env.BASE_URL}karolineshus/karolineshus-2.jpeg`,
  `${import.meta.env.BASE_URL}karolineshus/karolineshus-3.jpeg`,
  `${import.meta.env.BASE_URL}karolineshus/karolineshus-4.jpeg`,
];

export const contactPageImageUrl = `${import.meta.env.BASE_URL}karolineshus/karolineshus-5.jpeg`;

export const openingPeriods = [
  "12.04.2025 til 21.04.2025",
  "07.06.2025 til 12.06.2025",
  "05.07.2025 til 31.08.2025",
];

export const exhibitionPage = {
  heroImageUrl: `${import.meta.env.BASE_URL}karolineshus/karolineshus.jpeg`,
  openingPeriods,
  artistsByName: {
    "Ellen Bye Jensen": { slug: "ellen-bye-jensen" },
    "Erik Muff Reinert": { slug: "erik-muff-reinert" },
    "Helle Crawford": { slug: "helle-crawford" },
    "Ingrid Dalby Nielsen": { slug: "ingrid-dalby-nielsen" },
    "Karen Kristensen": { slug: "karen-kristensen" },
    "Linda Lildholdt": { slug: "linda-lildholdt" },
    "Ole Kildegaard": { slug: "ole-kildegaard" },
    "Stine Juul": { slug: "stine-juul" },
  },
};

export const artists = [
  {
    name: "Ellen Bye Jensen",
    slug: "ellen-bye-jensen",
    category: "billedkunstner",
    featuredImageUrl: `${import.meta.env.BASE_URL}ellen-bye-jensen.png`,
    imageUrl:
      "https://web.archive.org/web/20251111234142im_/https://karolineshus.dk/wp-content/uploads/2025/02/20240921_102045-1-e1740649529886.jpg",
    excerpt:
      "Maler farvemættede, impressionistiske landskaber inspireret af lyset over Limfjorden og naturens stemninger på Fur.",
    bio: "Uddannet sygeplejerske og sociolog med kunstnerisk forankring fra Ranum Kunstskole. Arbejder især i olie og fortolker landskaber frem for at gengive dem direkte. Siden en studierejse i 2019 har umbriske motiver fra Italien indgået som en naturlig del af hendes billedunivers side om side med Fur.",
    sections: [
      {
        title: "Landskabsbilleder",
        subtitle: "Naturens stemninger på lærred",
        paragraphs: [
          "Med naturen og landskabet på Fur som inspiration arbejder Ellen Bye Jensen fra sit atelier i Karolines Hus med landskabsmalerier i olie.",
          "Malerierne er farvemættede og impressionistiske og opstår som fortolkninger af de sanseindtryk og stemninger, hun møder i naturen omkring Limfjorden.",
          "Lyset fra fjorden, skyernes bevægelser og himlens skiftende farver er en gennemgående inspirationskilde. Motiverne er ikke nøjagtige gengivelser, men billedlige fortolkninger, hvor kompositionen formes frit for at styrke udtrykket.",
          "Enkle kompositioner giver plads til ro og fordybelse, mens farverne ofte får ekstra intensitet. Målet er at skabe billeder, der indfanger naturens energi og inviterer beskueren til at opleve landskabet på ny.",
        ],
      },
      {
        title: "Umbriske motiver",
        subtitle: "En ny dimension i maleriet",
        paragraphs: [
          "Efter mere end 20 år med Fur som omdrejningspunkt tog Ellen Bye Jensen i 2019 på en to måneders studierejse til Umbrien i Italien.",
          "Mødet med et nyt lys, bjerge, skove og gamle oliventræer blev en markant kunstnerisk udfordring. Det nordiske udtryk blev afløst af en klar blå himmel og et varmt, solbeskinnet landskab.",
          "Siden rejsen har de umbriske motiver udviklet sig til en naturlig del af hendes billedunivers side om side med landskaberne fra Fur.",
        ],
      },
      {
        title: "Min kunstneriske rejse",
        subtitle: "Biografi",
        paragraphs: [
          "Ellen Bye Jensen er opvokset i Risskov nord for Aarhus og er uddannet sygeplejerske og sociolog. Den kunstneriske rejse begyndte med tegning i forbindelse med arbejdet som sygeplejerske på nattevagter.",
          "I 1998 begyndte hun på Ranum Kunstskole, hvor hun arbejdede med tegning, croquis, farvelære og skulptur. Her blev oliemaleriet hendes foretrukne medie.",
          "Efter studierne købte hun et lille bondehus på Fur, hvor atelier og galleri i dag danner rammen om Karolines Hus. Ved siden af kunstpraksissen færdiggjorde hun sociologistudierne og underviste i en årrække som lektor på Sygeplejeskolen i Holstebro.",
          "Værkerne kan opleves i Karolines Hus på Madsbadvej 40, 7884 Fur, og har desuden været vist i en lang række kunstforeninger og gallerier i Danmark.",
        ],
      },
    ],
    memberships: [
      "Kunstnersammenslutningen Vestjydske Kunstnere (Holstebro)",
      "Foreningen FurKunst (Fur)",
      "Kunstnersammenslutningen Fokus (Skive)",
      "PerronPerron (Skive)",
    ],
    reviewQuote:
      "Hun er sin egen. Landskaberne hviler i sig selv og fortæller overbevisende, hvordan det føles at være netop der, netop den dag og i netop det vejr.",
    reviewMeta: "Uddrag fra anmeldelse",
  },
  {
    name: "Ginette Wien",
    slug: "ginette-wien",
    category: "keramiker",
    imageUrl: aboutGalleryImages[1],
    excerpt:
      "Keramiker med forkærlighed for håndmodellerede figurer, hvor hver skulptur har sit eget udtryk.",
    bio: "Ginette Wien skaber unikke, håndmodellerede figurer i stentøj med detaljer i porcelænsler. Hendes værker kombinerer præcision i håndværket med stor fortælleglæde i både form og titel.",
    sections: [
      {
        title: "Keramisk proces",
        subtitle: "Fra modellering til glasurbrænding",
        paragraphs: [
          "Alle figurer er håndmodellerede i stentøj, hvor detaljer bygges op i porcelænsler. Efter modellering tørres værkerne i cirka en uge.",
          "Første brænding sker ved 950 grader. Derefter dekoreres og glaseres figurerne, ofte med flere glasurer i lag, for at opnå dybde i overfladen.",
          "Anden brænding foregår ved 1260 grader og tager omkring to døgn. Når værkerne kommer ud af ovnen, får de deres titel.",
        ],
      },
      {
        title: "Ler og sprog",
        subtitle: "Titler som en del af værket",
        paragraphs: [
          "Ginette Wien holder næsten lige så meget af ord som af ler. Derfor spiller titlerne en vigtig rolle i den samlede oplevelse af figurerne.",
          "Flere værker kan ses på GinetteWien.dk.",
        ],
      },
    ],
  },
  {
    name: "Linda Lildholdt",
    slug: "linda-lildholdt",
    category: "billedkunstner",
    featuredImageUrl: `${import.meta.env.BASE_URL}linda-lildholdt.png`,
    imageUrl:
      "https://web.archive.org/web/20251111232558im_/https://i1.wp.com/karolineshus.dk/wp-content/uploads/2025/05/Forbundet-4-%E2%80%93-80x80-cm.jpg?fit=1200%2C1192&ssl=1",
    excerpt:
      "Skaber abstrakte fortællinger, hvor maleri, grafik og skulptur forbindes af samme formsprog.",
    bio: "Arbejder med geometriske og amorfe former i flere medier og beskriver skiftet mellem maleri, grafik og keramik som en kreativ vekslen mellem frihed og præcision. Farve, form og materialitet bruges bevidst for at skabe en sanselig oplevelse i værket.",
    sections: [
      {
        title: "Artist statement",
        subtitle: "Abstrakte fortællinger",
        paragraphs: [
          "I Linda Lildholdts billedunivers går former igen på tværs af maleri, grafik og skulptur. Hun arbejder bevidst med forskellige materialer og teknikker for at skabe variation og fordybelse i processen.",
          "Når maleriet kalder på forandring undervejs, søger hun ofte over i det grafiske felt. Her skal udtrykket stå stramt og præcist fra første indgreb i pladen, og arbejdet med nål og skærejern giver både udfordring og ro.",
          "Det samme nærvær findes i det skulpturelle arbejde med ler. Linda Lildholdt bygger abstrakte, geometriske og amorfe former op i kompositioner, hvor farve, form og deres samspil skal bære værkets sanselige oplevelse.",
          "Inspirationen hentes i tanker, stemninger og mødet med verden omkring os. Maleriserien Forbundet udspringer eksempelvis af refleksioner over den celledeling, der foregår i alt levende.",
        ],
      },
    ],
  },
  {
    name: "Erik Muff Reinert",
    slug: "erik-muff-reinert",
    category: "billedkunstner",
    featuredImageUrl: `${import.meta.env.BASE_URL}erik-muff-reinert.png`,
    imageUrl:
      "https://web.archive.org/web/20251111234614im_/https://i1.wp.com/karolineshus.dk/wp-content/uploads/2025/03/image0-3-erik.jpg?fit=844%2C1200&ssl=1",
    excerpt:
      "Arbejder med kuglepennetegninger, hvor dans, lethed og bevægelse står i centrum.",
    bio: "Kendt for en karakteristisk kuglepensteknik, som han har genoptaget og forfinet. Værkerne fremhæver den ubekymrede og poetiske side af menneskelig bevægelse med et let, men præcist linjesprog.",
  },
  {
    name: "Inge Lis Jørgensen",
    slug: "inge-lis-joergensen",
    category: "maler",
    imageUrl: aboutGalleryImages[3],
    excerpt: "Maler og akvarellist med sans for naturens rytmer og farvespil.",
    bio: "Inge Lis Jørgensen arbejder både figurativt og abstrakt i akvarel og olie. Hendes motiver udspringer ofte af naturoplevelser, hvor hun indfanger stemninger, rytmer og farveklange fra landskaber og årstidernes skiften. Hun søger at skabe billeder, der inviterer til fordybelse og eftertanke, og hendes værker balancerer mellem det spontane og det velovervejede.",
  },
  {
    name: "Bente Stæhr",
    slug: "bente-staehr",
    category: "maler",
    imageUrl: aboutGalleryImages[0],
    excerpt:
      "Maler med mange års erfaring, der eksperimenterer med motiver, teknikker og farver.",
    bio: "Bente Stæhr har gennem årene udviklet et personligt og eksperimenterende udtryk. Hun arbejder med både figurative og abstrakte motiver og lader sig inspirere af natur, stemninger og farvesammensætninger. Hendes praksis er præget af nysgerrighed og lysten til at afprøve nye teknikker, hvilket giver værkerne en levende og undersøgende karakter.",
  },
  {
    name: "Torben Klostergaard",
    slug: "torben-klostergaard",
    category: "skulptoer",
    imageUrl: aboutGalleryImages[2],
    excerpt:
      "Skulptør, der arbejder med dyr og mennesker i levende, karakterfulde former.",
    bio: "Torben Klostergaard skaber skulpturer i ler, bronze og andre materialer med fokus på kropsudtryk, bevægelse og karakter. Hans værker spænder fra det naturalistiske til det fabulerende, og han er kendt for at indfange både humor og poesi i sine figurer. Inspirationen hentes ofte fra hverdagslivet, naturen og menneskets relationer, og han arbejder med stor sans for detalje og form.",
  },
  {
    name: "Ole Kildegaard",
    slug: "ole-kildegaard",
    category: "billedkunstner",
    featuredImageUrl: `${import.meta.env.BASE_URL}ole-kildegaard.png`,
    imageUrl:
      "https://web.archive.org/web/20251111231508im_/https://i2.wp.com/karolineshus.dk/wp-content/uploads/2025/03/kildegaard1.jpg?fit=904%2C1200&ssl=1",
    excerpt:
      "Egnsmaler med over 40 års virke i Nordvestjylland og et stærkt, farvemættet landskabsudtryk.",
    bio: "Uddannet bygningsmaler og aktiv kunstner gennem årtier med stærk forankring ved Vesterhavet. Ole Kildegaard arbejder frit i spændet mellem landskab, farveglæde og komposition, der ofte nærmer sig det abstrakte.",
    sections: [
      {
        title: "Mit landskab",
        subtitle: "Farver, fri komposition og Vesterhavet",
        paragraphs: [
          "Ole Kildegaard tegnede og malede fra barnsben og blev uddannet bygningsmaler. Med tiden kom lærredet til at fylde mere og mere, og i dag har han i over fyrre år været en anerkendt kunstner i Nordvestjylland.",
          "Han gør ikke stort væsen af sig selv, men hans billeder hænger i mange hjem på egnen. Som egnsmaler arbejder han uden berøringsangst over for kraftige farver og tydelige stemninger.",
          "Motiverne tager afsæt i landskabet ved Vesterhavet, men han forholder sig frit til det sete og eksperimenterer med både motiv og farve ved staffeliet. Resultatet er billeder, der balancerer mellem det genkendelige og det næsten abstrakte.",
        ],
      },
    ],
    reviewQuote:
      "Mine billeder tager altid udgangspunkt i det landskab, jeg bor i her ude ved Vesterhavet. Jeg kan ikke lade være med at fantasere og eksperimentere med motiv og farver. Derfor kalder jeg ofte billederne: MIT LANDSKAB.",
    reviewMeta: "Ole Kildegaard fortæller",
  },
  {
    name: "Ulla Houe",
    slug: "ulla-houe",
    category: "billedkunstner",
    imageUrl: aboutGalleryImages[0],
    excerpt:
      "Arbejder med kompositionens skelet, kolorit og kraftfulde billedrum.",
    bio: "Fokuserer på store linjer, struktur og kunstens bærende kompositionelle principper.",
  },
  {
    name: "Maiken Hejnfelt",
    slug: "maiken-hejnfelt",
    category: "billedkunstner",
    imageUrl: aboutGalleryImages[1],
    excerpt:
      "Professionel billedkunstner med atelier og galleri ved Roskilde Fjord.",
    bio: "Arbejder i akryl, olie, akvarel og pastel og har i mange år også undervist i billedkunst.",
  },
  {
    name: "Susan Madsen",
    slug: "susan-madsen",
    category: "fotograf",
    imageUrl:
      "https://web.archive.org/web/20251215051447im_/https://i2.wp.com/karolineshus.dk/wp-content/uploads/2017/03/cropped-favicon.png?fit=512%2C512&ssl=1",
    excerpt:
      "Kunstnerisk fotograf med praksis udviklet gennem studier i Berlin.",
    bio: "Bruger fotografiet som sit primære kunstneriske medie med fokus på fortælling og visuel stemning.",
  },
  {
    name: "Susanne Jensen",
    slug: "susanne-jensen",
    category: "fotograf",
    imageUrl: aboutGalleryImages[2],
    excerpt:
      "Fotografi inspireret af naturens skiftende lys, farver og dyreliv.",
    bio: "Arbejder med naturfotografi og søger de flygtige øjeblikke i landskaber og fauna.",
  },
  {
    name: "Palle Christensen",
    slug: "palle-christensen",
    category: "fotograf",
    imageUrl: aboutGalleryImages[3],
    excerpt:
      "Furfotograf med stærk lokal forankring og menneskelige historier.",
    bio: "Kendt lokalt som fotograf med blik for hverdagsliv og stedets identitet.",
  },
  {
    name: "Trine Anderschou",
    slug: "trine-anderschou",
    category: "grafiker",
    imageUrl: aboutGalleryImages[0],
    excerpt: "Grafiker med baggrund i klassisk tegning og grafisk linje.",
    bio: "Arbejder med grafik som et selvstændigt kunstnerisk felt med stærk tegnefaglighed.",
  },
  {
    name: "Dea Trier Mørch",
    slug: "dea-trier-morch",
    category: "grafiker",
    imageUrl: aboutGalleryImages[1],
    excerpt:
      "Dansk grafiker og forfatter med markant kunsthistorisk betydning.",
    bio: "Er en del af den grafiske linje i Karolines Hus' udstillingshistorik.",
  },
  {
    name: "Søren Bjælde",
    slug: "soeren-bjaelde",
    category: "grafiker",
    imageUrl: aboutGalleryImages[2],
    excerpt: "Grafiker med international udstillingsaktivitet og bred praksis.",
    bio: "Medlem af Billedkunstnernes Forbund med arbejde i grafik, illustration og keramik.",
  },
  {
    name: "Karen Kristensen",
    slug: "karen-kristensen",
    category: "keramiker",
    featuredImageUrl: `${import.meta.env.BASE_URL}karen-kristensen.png`,
    imageUrl:
      "https://web.archive.org/web/20251111234802im_/https://i2.wp.com/karolineshus.dk/wp-content/uploads/2025/03/kk.jpg?fit=720%2C632&ssl=1",
    excerpt:
      "Keramiker med mange års arbejde i ler og et stærkt fokus på formens spænding og kvalitet.",
    bio: "Har gennem mange år udviklet sit arbejde via kurser og praksis i værkstedet. Hun undersøger spændet mellem stram, kontrolleret formgivning og mere frie, organiske udtryk, hvor resultatet stadig skal fremstå præcist og gennemarbejdet.",
    sections: [
      {
        title: "Keramisk praksis",
        subtitle: "Form, frihed og præcision",
        paragraphs: [
          "Karen Kristensen har arbejdet med ler i mange år og har løbende videreudviklet sin praksis gennem en lang række kurser.",
          "Leret fascinerer hende ved at rumme både stram, kontrolleret formgivning og mere frie udtryk, hvor materialet i højere grad får lov at tale på egne præmisser.",
          "Spændet mellem det styrede og det spontane er centralt i hendes værker, men resultatet må aldrig fremstå sjusket eller ligegyldigt. Netop den balance er kernen i hendes keramiske formsprog.",
        ],
      },
    ],
  },
  {
    name: "Martin Nybo",
    slug: "martin-nybo",
    category: "keramiker",
    imageUrl: aboutGalleryImages[3],
    excerpt:
      "Keramisk formgiver med værksted i Odsherred og praksis i både Danmark, Thailand og Andalusien.",
    bio: "Født i 1971 i Vestjylland og uddannet keramisk formgiver fra Kunsthåndværkerskolen i Kolding i 2000. Martin Nybo arbejder i spændet mellem kunsthåndværk, store keramiske formater og socialt orienterede kunstprocesser.",
    sections: [
      {
        title: "Værksteder og arbejdsfelter",
        subtitle: "Fra Odsherred til Limfjorden",
        paragraphs: [
          "Siden uddannelsen har Martin Nybo haft værksted og galleri på havnen i Nykøbing Sjælland. Derudover arbejder han fra et mindre værksted ved Limfjorden i Salling.",
          "Hans praksis udfolder sig også internationalt med arbejdsperioder i Thailand og Andalusien.",
        ],
      },
      {
        title: "Specialer",
        subtitle: "Large scale ceramics og sgraffito",
        paragraphs: [
          "Arbejdsområderne omfatter blandt andet brugsting, sgraffito og vrangkrukker.",
          "Han er specialiseret i large scale ceramics, brændingsformer i brændefyret keramik, drejet unika samt dekorative teknikker med sgraffito.",
        ],
      },
      {
        title: "Samarbejde og undervisning",
        subtitle: "Kunst i fællesskab",
        paragraphs: [
          "Martin Nybo har stor erfaring med inddragelse af borgere og samarbejde på tværs af fagligheder.",
          "Han underviser børn og unge i kunstneriske forløb med fokus på kulturelle og historiske processer.",
        ],
      },
    ],
  },
  {
    name: "Vibeke Krog",
    slug: "vibeke-krog",
    category: "keramiker",
    imageUrl: aboutGalleryImages[0],
    excerpt:
      "Keramiker med fokus på rødt ler, begitning og grafiske overflader.",
    bio: "Skaber unikke brugsting og skulptur med enkelhed og et stramt formsprog.",
  },
  {
    name: "Ingrid Dalby Nielsen",
    slug: "ingrid-dalby-nielsen",
    category: "maler",
    featuredImageUrl: `${import.meta.env.BASE_URL}ingrid-dalby-nielsen.png`,
    imageUrl:
      "https://web.archive.org/web/20260117031622im_/https://i2.wp.com/karolineshus.dk/wp-content/uploads/2025/03/IMG_5153-rotated-e1742974744596.jpeg?fit=1200%2C902&ssl=1",
    excerpt:
      "Maler med afsæt i Thys landskaber, hvor farverne driver processen fra lærred til lærred.",
    bio: "Bosat i Thisted med naturen som central motivkilde. Uddannet billedkunstlærer og tidligere underviser i billedkunst i folkeskolen gennem mange år. Har også arbejdet med tegning på Ranum Kunstskole og fortsat efteruddannet sig gennem malekurser.",
    sections: [
      {
        title: "Farverne på spil",
        subtitle: "Maleriet som vedvarende drivkraft",
        paragraphs: [
          "Ingrid Dalby Nielsen beskriver maleriet som en vedvarende glæde, hvor farverne hele tiden er i spil og lokker hende videre til næste lærred.",
          "Hun bor i Thisted med den storslåede thy-natur tæt på, og landskabet fungerer som en vigtig motivkilde i hendes arbejde.",
          "Som uddannet billedkunstlærer har hun undervist i faget i folkeskolen i 35 år. Senere har hun fortsat sin kunstneriske udvikling gennem tegneundervisning på Ranum Kunstskole og malekurser med erfarne undervisere.",
          "Hun arbejder kontinuerligt med nye malerier og fremhæver det som en særlig glæde at udstille i galleriet på Fur med den særprægede natur som ramme.",
        ],
      },
    ],
  },
  {
    name: "Rikke Jacobsen",
    slug: "rikke-jacobsen",
    category: "maler",
    imageUrl: aboutGalleryImages[2],
    excerpt:
      "Maler repræsenteret i kunstnerkategorier og udstillingsoversigter.",
    bio: "Indgår i Karolines Hus' malerkategori i snapshots fra de senere sæsoner.",
  },
  {
    name: "Helle Crawford",
    slug: "helle-crawford",
    category: "skulptoer",
    featuredImageUrl: `${import.meta.env.BASE_URL}helle-crawford.png`,
    imageUrl:
      "https://web.archive.org/web/20250807165551im_/https://i0.wp.com/karolineshus.dk/wp-content/uploads/2025/05/Helle_Rask_Crawford_Papirba-den_Br-onze_kobber_emalje_h10cm_2021-scaled.jpeg?fit=1200%2C1062&ssl=1",
    excerpt:
      "Figurativ skulptør i bronze med fokus på dynamiske portrætter og magisk realisme.",
    bio: "Helle Rask Crawford arbejder figurativt i bronze med særligt fokus på dynamiske portrætter af mennesker og dyr samt et formsprog med magisk realisme. Inspirationen hentes i litteratur, historie, mytologi, politik og i øjeblikkets skønhed.",
    sections: [
      {
        title: "Skulpturel praksis",
        subtitle: "Mellem det monumentale og det fabulerende",
        paragraphs: [
          "Helle Rask Crawford har modtaget undervisning hos Keld Moseholm og Tove Elmquist. I hendes værker mødes kraft, fortælling og et levende figurativt udtryk.",
          "Hun arbejder med skulpturer, der både kan fremstå barske og monumentale, men som samtidig rummer en fabulerende og humoristisk dimension med stor menneskelig nærhed.",
        ],
      },
    ],
    memberships: ["Formand for Dansk Billedhuggersamfund"],
    reviewQuote:
      "Det er barske skulpturer, vi møder. De står stærkt og monumentalt i Helle Rask Crawfords virke og suppleres af en fabulerende og humoristisk side, der er lige så vægtig. Hun er en af de mest fantasifulde og vedkommende skulptører i dagens Danmark.",
    reviewMeta: "Kunstkritiker Tom Jørgensen",
  },
  {
    name: "Stine Juul",
    slug: "stine-juul",
    category: "skulptoer",
    featuredImageUrl: `${import.meta.env.BASE_URL}stine-juul.png`,
    imageUrl:
      "https://web.archive.org/web/20251215042858im_/https://i0.wp.com/karolineshus.dk/wp-content/uploads/2025/05/3.-Stine-Juul.jpeg?fit=915%2C1200&ssl=1",
    excerpt:
      "Arbejder med keramik, collage, træ og maleri med et roligt, sanseligt udtryk.",
    bio: "Stine Juul arbejder på tværs af medier som maleri, collage, træ, plexiglas og keramik, men har de seneste år især koncentreret sig om keramiske skulpturer. Hendes værker søger at skabe ro, nærvær og refleksion i en tid præget af uro.",
    sections: [
      {
        title: "Min kunstneriske praksis",
        subtitle: "Materialer i dialog",
        paragraphs: [
          "Stine Juul lader forskellige materialer mødes i sin praksis, hvor skiftet mellem medier er en aktiv del af den kunstneriske proces.",
          "I de senere år har de keramiske skulpturer stået centralt, med fokus på form, overflade og den taktile oplevelse.",
        ],
      },
      {
        title: "En rolig plads i verden",
        subtitle: "Organiske former og japansk inspiration",
        paragraphs: [
          "Hun finder inspiration i naturen og i japanske stenhaver, hvor meditation over tid, foranderlighed og vedvaren er et bærende element.",
          "Skulpturerne har bløde, organiske former og monokrome, uglaserede overflader. De er højbrændte og rå og inviterer beskueren til en sanselig oplevelse, hvor man næsten får lyst til at lade fingrene følge rillerne i formen.",
          "Intentionen er at plante et spirende frø af ro, som kan brede sig videre fra menneske til menneske som ringe i vandet.",
        ],
      },
      {
        title: "Værdifuld beslutning",
        subtitle: "Interaktion og medansvar",
        paragraphs: [
          "I værker som Ofring inviterer Stine Juul beskueren til aktiv deltagelse. Her sættes fokus på presset på vores jord som følge af menneskets handlinger.",
          "Beskueren bliver bedt om at forestille sig at give afkald på en komfort, overføre dens værdi til en ubrændt lermønt og lægge mønten i et offerfad med vand sammen med et ønske på naturens vegne.",
          "Når fadet fyldes med opløste lermønter, indsamles leret, æltes op igen og formes til nye mønter. Værket bliver dermed en cirkulær handling, hvor refleksion og materiale hænger uløseligt sammen.",
        ],
      },
    ],
  },
  {
    name: "Inger Bruhn",
    slug: "inger-bruhn",
    category: "skulptoer",
    imageUrl: aboutGalleryImages[1],
    excerpt:
      "Skulptør med inspiration fra natur, kulturspor og rejseerfaringer.",
    bio: "Arbejder med formsprog inspireret af landskaber, materialitet og kulturelle aftryk.",
  },
  {
    name: "Steen Thomsen",
    slug: "steen-thomsen",
    category: "skulptoer",
    imageUrl: aboutGalleryImages[3],
    excerpt: "Arbejder med intuitiv stenkunst og granittens oprindelige form.",
    bio: "Skaber harmoniske skulpturer med respekt for stenens naturlige karakter og struktur.",
  },
];

export const featuredArtistSlugs = [
  "helle-crawford",
  "linda-lildholdt",
  "stine-juul",
  "erik-muff-reinert",
  "karen-kristensen",
  "ingrid-dalby-nielsen",
  "ole-kildegaard",
  "ellen-bye-jensen",
];

export const featuredArtists = artists
  .filter((artist) => featuredArtistSlugs.includes(artist.slug))
  .map((artist) => ({
    ...artist,
    categoryLabel: artistCategoryLabels[artist.category] || artist.category,
  }));

export const artistsByCategory = artistCategoryOrder.map((categoryKey) => ({
  key: categoryKey,
  label: artistCategoryLabels[categoryKey],
  artists: artists.filter((artist) => artist.category === categoryKey),
}));

export function getArtistDisplayImageUrl(artist) {
  const candidateImageUrl = artist.featuredImageUrl || artist.imageUrl;

  if (!candidateImageUrl) {
    return "";
  }

  if (aboutGalleryImages.includes(candidateImageUrl)) {
    return "";
  }

  if (candidateImageUrl.includes("cropped-favicon")) {
    return "";
  }

  return candidateImageUrl;
}

export function getArtistBySlug(slug) {
  return artists.find((artist) => artist.slug === slug);
}

export const artists2025Widget = [
  { name: "Ellen Bye Jensen", slug: "ellen-bye-jensen" },
  { name: "Erik Muff Reinert", slug: "erik-muff-reinert" },
  { name: "Helle Crawford", slug: "helle-crawford" },
  { name: "Ingrid Dalby Nielsen", slug: "ingrid-dalby-nielsen" },
  { name: "Karen Kristensen", slug: "karen-kristensen" },
  { name: "Linda Lildholdt", slug: "linda-lildholdt" },
  { name: "Ole Kildegaard", slug: "ole-kildegaard" },
  { name: "Stine Juul", slug: "stine-juul" },
];

export const exhibitions2025 = [
  {
    title: "Påskeudstilling",
    period: "12.04.2025 – 21.04.2025",
    artists: [
      "Ellen Bye Jensen",
      "Erik Muff Reinert",
      "Ingrid Dalby Nielsen",
      "Karen Kristensen",
      "Ole Kildegaard",
    ],
  },
  {
    title: "Sommerudstilling",
    period: "05.07.2025 – 31.08.2025",
    artists: [
      "Ellen Bye Jensen",
      "Stine Juul",
      "Linda Lildholdt",
      "Helle Crawford",
    ],
    note: "I Karolines Hus udstilles der en kunstner til væg og en til gulv på hvert plan.",
  },
];

export const homeStories = [
  {
    title: "Udstillinger i 2025",
    meta: "Nyheder / admin / 26.03.2025",
    excerpt:
      "På denne side kan du læse mere om udstillingsterminer i Karolines Hus. Karolines Hus åbner d. 12.04.2025 med en påskeudstilling, som varer til og med d. 21.04.2025 kl. 17.",
    body: "Sommerudstillingen varer fra d. 05.07.2025 til og med 31.08.2025. Onsdage er lukkedage, og der er altid mulighed for aftaler uden for sæsonen.",
  },
  {
    title: "Ellen Bye Jensen",
    meta: "Billedkunstner",
    excerpt:
      "Farver, lys og landskaber er kernen i mit kunstneriske arbejde. Fra Limfjordens bløde horisont til Umbriens dramatiske bjerglandskaber fanger jeg naturens bevægelser på lærredet.",
    body: "Min kunst handler ikke om at gengive, men om at fortolke og føle. Fur og Umbrien har formet mit kunstneriske udtryk og præger fortsat mit arbejde.",
  },
];

export const footerLinks = [
  { label: "Om os", href: `${import.meta.env.BASE_URL}om` },
  {
    label: "Ellen Bye Jensen",
    href: `${import.meta.env.BASE_URL}kunstnere/ellen-bye-jensen`,
  },
  { label: "Kontakt", href: `${import.meta.env.BASE_URL}kontakt` },
];

export const aboutParagraphs = [
  "Karolines Hus er opstået omkring billedkunstneren Ellen Bye Jensen som et sted, hvor hun og hendes netværk kan udstille deres kunst.",
  "Galleriets mål er at udbrede kunsten til almindelige menneskers hjem. Ambitionen er ikke at sælge dyr kunst, men at sælge gode billeder af kunstnere, der måske ikke er så kendte.",
  "I vinterperioden kan man efter aftale altid besøge galleriet og se Ellen Bye Jensens billeder.",
];

export const siteNote =
  "Karolines Hus samler aktuelle udstillinger, kunstnere og praktisk information ét sted.";
