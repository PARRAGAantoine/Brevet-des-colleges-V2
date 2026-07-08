(function () {
  const catalog = window.BREVET_V2_CATALOG;
  if (!catalog) return;

  const additions = [
    {
      subjectId: "francais",
      themeId: "langue",
      courses: [
        placeholderCourse("fr-dictee", "Dictée", "S'entraîner à écrire un texte court en respectant accords, accents et ponctuation."),
        placeholderCourse("fr-orthographe-lexicale", "Orthographe lexicale", "Écrire correctement les mots fréquents et les mots difficiles du programme."),
        placeholderCourse("fr-ponctuation", "Ponctuation", "Utiliser les signes de ponctuation pour rendre une phrase claire.")
      ]
    },
    {
      subjectId: "francais",
      themeId: "lecture-expression",
      courses: [
        placeholderCourse("fr-comprehension-longue", "Compréhension longue", "Lire un texte plus long et répondre avec des preuves précises."),
        placeholderCourse("fr-redaction-complete", "Rédaction complète", "Préparer, écrire et relire une rédaction complète de type brevet.")
      ]
    },
    {
      subjectId: "histoire-geo-emc",
      themeId: "histoire",
      courses: [
        placeholderCourse("hist-premiere-guerre", "Première Guerre mondiale", "Comprendre la guerre de 1914-1918 et la violence de masse."),
        placeholderCourse("hist-totalitarismes", "Totalitarismes", "Comprendre les régimes totalitaires de l'entre-deux-guerres."),
        placeholderCourse("hist-decolonisation", "Décolonisation", "Comprendre la fin des empires coloniaux après 1945."),
        placeholderCourse("hist-construction-europeenne", "Construction européenne", "Comprendre les grandes étapes de la construction européenne."),
        placeholderCourse("hist-ve-republique", "Ve République", "Comprendre les institutions et les grandes évolutions politiques de la Ve République.")
      ]
    },
    {
      subjectId: "histoire-geo-emc",
      themeId: "geographie-emc",
      courses: [
        placeholderCourse("geo-faible-densite", "Espaces de faible densité", "Comprendre les espaces peu peuplés et leurs dynamiques."),
        placeholderCourse("geo-amenagement-territoire", "Aménagement du territoire", "Comprendre comment on réduit les inégalités entre territoires."),
        placeholderCourse("geo-union-europeenne", "Union européenne", "Comprendre la place de la France dans l'Union européenne."),
        placeholderCourse("geo-reperes", "Repères géographiques", "Mémoriser et utiliser les grands repères géographiques du brevet."),
        placeholderCourse("hist-developpement-construit", "Développement construit", "Rédiger une réponse organisée avec des connaissances précises."),
        placeholderCourse("emc-situation-pratique", "EMC en situation pratique", "Utiliser les valeurs, droits et devoirs dans une situation concrète.")
      ]
    },
    {
      subjectId: "sciences",
      themeId: "svt",
      courses: [
        placeholderCourse("sci-digestion", "Digestion", "Comprendre la transformation des aliments et le rôle des organes digestifs."),
        placeholderCourse("sci-reproduction", "Reproduction", "Comprendre les bases de la reproduction humaine et du développement."),
        placeholderCourse("sci-genetique", "Génétique", "Comprendre la transmission de l'information génétique."),
        placeholderCourse("sci-immunite", "Immunité", "Comprendre comment le corps se défend contre les microbes."),
        placeholderCourse("sci-planete-terre", "Planète Terre", "Comprendre quelques phénomènes liés à la Terre et à son activité.")
      ]
    },
    {
      subjectId: "sciences",
      themeId: "physique-chimie",
      courses: [
        placeholderCourse("sci-mouvement-vitesse", "Mouvement et vitesse", "Calculer ou interpréter une vitesse et décrire un mouvement."),
        placeholderCourse("sci-masse-volumique", "Masse volumique", "Relier masse, volume et masse volumique avec les bonnes unités."),
        placeholderCourse("sci-transformations-chimiques", "Transformations chimiques", "Reconnaître et interpréter une transformation chimique simple."),
        placeholderCourse("sci-ph", "pH et acidité", "Lire un pH et reconnaître une solution acide, neutre ou basique."),
        placeholderCourse("sci-signaux", "Signaux", "Comprendre les signaux sonores, lumineux ou électriques."),
        placeholderCourse("sci-unites", "Unités et conversions", "Choisir et convertir les unités utiles en sciences.")
      ]
    },
    {
      subjectId: "sciences",
      themeId: "technologie",
      courses: [
        placeholderCourse("sci-programmation", "Programmation", "Lire ou compléter un programme simple."),
        placeholderCourse("sci-objets-connectes", "Objets connectés", "Comprendre comment un objet connecté échange des informations."),
        placeholderCourse("sci-capteurs-actionneurs", "Capteurs et actionneurs", "Distinguer ce qui mesure et ce qui agit dans un objet technique."),
        placeholderCourse("sci-materiaux", "Matériaux", "Choisir un matériau selon ses propriétés et son usage.")
      ]
    }
  ];

  additions.forEach((group) => {
    const theme = findTheme(group.subjectId, group.themeId);
    if (!theme) return;
    group.courses.forEach((course) => {
      if (!theme.courses.some((item) => item.id === course.id)) {
        theme.courses.push(course);
      }
    });
  });

  function findTheme(subjectId, themeId) {
    const subject = catalog.subjects.find((item) => item.id === subjectId);
    return subject?.themes.find((theme) => theme.id === themeId);
  }

  function placeholderCourse(id, title, goal) {
    return {
      id,
      title,
      goal,
      status: "structure",
      keyIdeas: buildSimpleCourse(title, goal),
      example: buildSimpleExample(title),
      exercises: []
    };
  }

  function buildSimpleCourse(title, goal) {
    return [
      goal,
      `Pour travailler ${title}, commence par repérer les mots importants de la consigne.`,
      "Cherche ensuite les informations utiles, puis réponds avec une phrase courte et précise.",
      "Au brevet, on attend surtout une réponse claire, justifiée, et reliée au document ou au cours."
    ];
  }

  function buildSimpleExample(title) {
    return `Exemple : pour ${title}, lis d'abord la question, souligne ce qu'on te demande, puis écris une réponse simple avec une preuve ou un mot du cours.`;
  }
})();
