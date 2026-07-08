(function () {
  const catalog = window.BREVET_V2_CATALOG;
  if (!catalog) return;

  reorganizeSubject("mathematiques", [
    theme("nombres-relatifs", "Nombres relatifs", [
      "math-nombres-relatifs"
    ]),
    theme("fractions", "Fractions", [
      "math-fractions"
    ]),
    theme("puissances", "Puissances", [
      "math-puissances"
    ]),
    theme("calcul-litteral", "Calcul littéral", [
      "math-developpements",
      "math-factorisation"
    ]),
    theme("equations", "Équations", [
      "math-equations"
    ]),
    theme("arithmetique", "Arithmétique", [
      "math-arithmetique"
    ]),
    theme("proportionnalite", "Proportionnalité", [
      "math-proportionnalite"
    ]),
    theme("pourcentages", "Pourcentages", [
      "math-pourcentages"
    ]),
    theme("probabilites", "Probabilités", [
      "math-probabilites"
    ]),
    theme("statistiques", "Statistiques", [
      "math-statistiques"
    ]),
    theme("fonctions", "Fonctions", [
      "math-fonctions",
      "math-fonctions-affines"
    ]),
    theme("geometrie", "Géométrie", [
      "math-pythagore",
      "math-thales",
      "math-trigonometrie",
      "math-transformations"
    ]),
    theme("volumes", "Volumes", [
      "math-volume"
    ]),
    theme("echelles", "Échelles", [
      "math-echelles"
    ]),
    theme("algorithmique", "Algorithmique", [
      "math-algorithmique"
    ]),
    theme("tableur", "Tableur", [
      "math-algorithmique-tableur"
    ])
  ]);

  renameCourse("math-algorithmique-tableur", {
    title: "Tableur",
    goal: "Lire ou calculer une formule simple dans un tableur.",
    keyIdeas: [
      "Dans un tableur, une formule commence souvent par =.",
      "Une cellule comme A1 contient une valeur.",
      "Pour calculer, on remplace la cellule par sa valeur."
    ],
    example: "Si A1 contient 4, la formule =A1*3 donne 12."
  });

  ensureCourse("mathematiques", "algorithmique", placeholderCourse(
    "math-algorithmique",
    "Algorithmique",
    "Lire, suivre ou compléter un programme de calcul simple."
  ));

  reorganizeSubject("francais", [
    theme("grammaire", "Grammaire", [
      "fr-nature-fonction"
    ]),
    theme("orthographe", "Orthographe", [
      "fr-accords",
      "fr-dictee",
      "fr-orthographe-lexicale",
      "fr-ponctuation"
    ]),
    theme("reecriture", "Réécriture", [
      "fr-reecriture"
    ]),
    theme("conjugaison", "Conjugaison", [
      "fr-conjugaison"
    ]),
    theme("lecture", "Lecture", [
      "fr-comprehension",
      "fr-comprehension-longue",
      "fr-figures-style"
    ]),
    theme("redaction", "Rédaction", [
      "fr-redaction",
      "fr-redaction-complete"
    ])
  ]);

  reorganizeSubject("histoire-geo-emc", [
    theme("histoire", "Histoire", [
      "hist-premiere-guerre",
      "hist-seconde-guerre",
      "hist-totalitarismes",
      "hist-guerre-froide",
      "hist-decolonisation",
      "hist-construction-europeenne",
      "hist-ve-republique",
      "hist-reperes"
    ]),
    theme("geographie", "Géographie", [
      "geo-metropoles",
      "geo-espaces-productifs",
      "geo-faible-densite",
      "geo-amenagement-territoire",
      "geo-union-europeenne",
      "geo-reperes"
    ]),
    theme("emc", "EMC", [
      "emc-valeurs",
      "emc-situation-pratique"
    ]),
    theme("methodes", "Méthodes", [
      "hist-methode-document",
      "hist-developpement-construit"
    ])
  ]);

  function reorganizeSubject(subjectId, themeDefinitions) {
    const subject = catalog.subjects.find((item) => item.id === subjectId);
    if (!subject) return;
    const courseMap = new Map();
    subject.themes.forEach((oldTheme) => {
      oldTheme.courses.forEach((course) => courseMap.set(course.id, course));
    });
    subject.themes = themeDefinitions
      .map((definition) => ({
        id: definition.id,
        label: definition.label,
        courses: definition.courseIds.map((courseId) => courseMap.get(courseId)).filter(Boolean)
      }))
      .filter((definition) => definition.courses.length);
  }

  function theme(id, label, courseIds) {
    return { id, label, courseIds };
  }

  function renameCourse(courseId, updates) {
    const course = findCourse(courseId);
    if (course) Object.assign(course, updates);
  }

  function ensureCourse(subjectId, themeId, course) {
    const subject = catalog.subjects.find((item) => item.id === subjectId);
    const theme = subject?.themes.find((item) => item.id === themeId);
    if (!theme || theme.courses.some((item) => item.id === course.id)) return;
    theme.courses.push(course);
  }

  function findCourse(courseId) {
    for (const subject of catalog.subjects) {
      for (const theme of subject.themes) {
        const course = theme.courses.find((item) => item.id === courseId);
        if (course) return course;
      }
    }
    return null;
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
      `Pour travailler ${title}, lis la consigne lentement et repère ce qu'on te demande de trouver.`,
      "Note les données utiles, puis avance étape par étape sans sauter de calcul ou de justification.",
      "À la fin, vérifie que ta réponse correspond bien à la question posée."
    ];
  }

  function buildSimpleExample(title) {
    return `Exemple : pour ${title}, on commence par écrire les informations données, puis on applique la méthode du cours avant de rédiger la réponse.`;
  }
})();
