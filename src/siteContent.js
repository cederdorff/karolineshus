export const contactInfo = {
  name: "Karolines Hus",
  subtitle: "Galleriet på Fur",
  addressLines: ["Madsbadvej 40", "7884 Fur", "Danmark"],
  phones: ["61 37 75 62", "40 43 48 17"],
  email: "karoline@energimail.dk",
  website: "www.karolineshus.dk",
};

export const logoUrl = "logo.png";

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
  "https://web.archive.org/web/20251111230940im_/https://i1.wp.com/karolineshus.dk/wp-content/uploads/2016/08/om-1.jpg?resize=1024%2C573&ssl=1",
  "https://web.archive.org/web/20251111230940im_/https://i1.wp.com/karolineshus.dk/wp-content/uploads/2016/08/karolineshus2_new.jpg",
  "https://web.archive.org/web/20251111230940im_/https://i0.wp.com/karolineshus.dk/wp-content/uploads/2016/08/karolineshus3_new.jpg",
  "https://web.archive.org/web/20251111230940im_/https://i1.wp.com/karolineshus.dk/wp-content/uploads/2016/08/karolineshus4_new.jpg",
];

export const openingPeriods = [
  "12.04.2025 til 21.04.2025",
  "07.06.2025 til 12.06.2025",
  "05.07.2025 til 31.08.2025",
];

export const exhibitionPage = {
  heroImageUrl: `${import.meta.env.BASE_URL}karolineshus.jpeg`,
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
    name: "Ole Kildegaard",
    slug: "ole-kildegaard",
    category: "billedkunstner",
    featuredImageUrl: `${import.meta.env.BASE_URL}ole-kildegaard.png`,
    imageUrl:
      "https://web.archive.org/web/20251111231508im_/https://i2.wp.com/karolineshus.dk/wp-content/uploads/2025/03/kildegaard1.jpg?fit=904%2C1200&ssl=1",
    excerpt: "Anerkendt billedkunstner i Nordvestjylland med mange års virke.",
    bio: "Uddannet bygningsmaler og aktiv kunstner gennem årtier med stærk forankring i regionen.",
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
  },
  {
    name: "Martin Nybo",
    slug: "martin-nybo",
    category: "keramiker",
    imageUrl: aboutGalleryImages[3],
    excerpt:
      "Keramisk formgiver med værksted og galleri samt bred international praksis.",
    bio: "Arbejder med keramiske objekter og formgivning i flere lande og kunstneriske kontekster.",
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
    name: "Ginette Wien",
    slug: "ginette-wien",
    category: "keramiker",
    imageUrl: aboutGalleryImages[1],
    excerpt: "Arbejder med håndmodellerede figurer i stentøj og porcelænsler.",
    bio: "Hver figur er unik og bygger på flere lag glasur, dekoration og højbrænding.",
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
    name: "Inge Lis Jørgensen",
    slug: "inge-lis-joergensen",
    category: "maler",
    imageUrl: aboutGalleryImages[3],
    excerpt:
      "Arbejder med akvarel og oliemaleri, figurativt såvel som abstrakt.",
    bio: "Inspireres af naturoplevelser, rytmer og farveklange i både ydre og indre landskaber.",
  },
  {
    name: "Bente Stæhr",
    slug: "bente-staehr",
    category: "maler",
    imageUrl: aboutGalleryImages[0],
    excerpt:
      "Maler med mange års eksperimenter, kursusforløb og udstillingspraksis.",
    bio: "Har udviklet sit udtryk gennem langvarig eksperimentering med motiver og teknikker.",
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
    bio: "Arbejder med mennesker og dyr i et formsprog, der bevæger sig mellem det monumentale, det fabulerende og det humoristiske. Inspireres af litteratur, mytologi, historie og samtid. Har modtaget anerkendelse fra det skotske kunstakademi og er aktiv i dansk skulpturmiljo.",
  },
  {
    name: "Stine Juul",
    slug: "stine-juul",
    category: "skulptoer",
    featuredImageUrl: `${import.meta.env.BASE_URL}stine-juul.png`,
    imageUrl:
      "https://web.archive.org/web/20251215042858im_/https://i0.wp.com/karolineshus.dk/wp-content/uploads/2025/05/3.-Stine-Juul.jpeg?fit=915%2C1200&ssl=1",
    excerpt:
      "Arbejder med keramik, collage, tra og maleri med et roligt, sanseligt udtryk.",
    bio: "De seneste år har hun især arbejdet med keramiske skulpturer med bløde former, monokrome overflader og uglaseret, højbrændt materiale. Naturen og japanske stenhaver er vigtige inspirationskilder, og flere værker inviterer beskueren til aktiv refleksion og deltagelse.",
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
    name: "Torben Klostergaard",
    slug: "torben-klostergaard",
    category: "skulptoer",
    imageUrl: aboutGalleryImages[2],
    excerpt:
      "Skulptør med fokus på dyr, mennesker og karakterfulde kropsudtryk.",
    bio: "Kendt for at fange essens og bevægelse med både humor, bid og poetisk præcision.",
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
  return artist.featuredImageUrl || artist.imageUrl;
}

export function getArtistBySlug(slug) {
  return artists.find((artist) => artist.slug === slug);
}

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
