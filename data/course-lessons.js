(function () {
  const catalog = window.BREVET_V2_CATALOG;
  if (!catalog) return;

  addMissingCourses();

  const lessons = {
    "math-nombres-relatifs": mathLesson(
      "Nombres relatifs",
      "Un nombre relatif peut être positif, négatif ou nul. Il sert à représenter une température sous zéro, une dette, une altitude, un score ou un déplacement.",
      ["nombre positif", "nombre négatif", "opposé", "droite graduée"],
      ["Place les nombres sur une droite graduée.", "Pour additionner un nombre positif, avance vers la droite.", "Pour ajouter ou soustraire un nombre négatif, repère bien le signe de l'opération.", "Vérifie si le résultat doit être plutôt positif ou négatif."],
      "Si tu pars de -7 et que tu ajoutes 3, tu avances de 3 unités : -7, -6, -5, -4. Le résultat est -4.",
      ["Confondre le signe du nombre et le signe de l'opération.", "Oublier que -11 est plus petit que -4."]
    ),
    "math-fractions": mathLesson(
      "Fractions",
      "Une fraction représente une part d'un tout. Le nombre du bas indique en combien de parts on partage, le nombre du haut indique combien de parts on prend.",
      ["numérateur", "dénominateur", "fraction égale", "simplifier"],
      ["Pour simplifier, cherche un nombre qui divise le haut et le bas.", "Pour comparer ou additionner, mets souvent les fractions au même dénominateur.", "Pour calculer une fraction d'une quantité, divise par le bas puis multiplie par le haut.", "Relis toujours la question : simplifier, comparer, additionner ou calculer une part."],
      "Pour simplifier 18/30, 6 divise 18 et 30. On obtient 18 ÷ 6 = 3 et 30 ÷ 6 = 5, donc 18/30 = 3/5.",
      ["Simplifier seulement le numérateur.", "Additionner les dénominateurs.", "Lire 3/5 de 20 comme 3 ÷ 5 ÷ 20."]
    ),
    "math-puissances": mathLesson(
      "Puissances",
      "Une puissance est une écriture courte pour répéter une multiplication. L'exposant indique combien de fois on utilise le même facteur.",
      ["puissance", "exposant", "carré", "cube"],
      ["Lis d'abord la base et l'exposant.", "Remplace la puissance par une multiplication si tu hésites.", "Calcule les puissances avant les additions et soustractions.", "Avec 10, utilise le nombre de zéros pour aller plus vite."],
      "4² signifie 4 × 4, donc 4² = 16. Ce n'est pas 4 × 2.",
      ["Confondre 5² avec 5 × 2.", "Oublier les priorités de calcul quand une puissance est dans une expression."]
    ),
    "math-developpements": mathLesson(
      "Développements",
      "Développer, c'est enlever des parenthèses en multipliant chaque terme à l'intérieur. On transforme une forme avec parenthèses en somme ou différence.",
      ["développer", "parenthèse", "terme", "distributivité"],
      ["Repère le facteur devant la parenthèse.", "Multiplie ce facteur par chaque terme de la parenthèse.", "Garde les signes + et - avec les termes.", "Réduis seulement les termes semblables."],
      "4(x + 3) = 4 × x + 4 × 3 = 4x + 12.",
      ["Multiplier seulement le premier terme.", "Oublier le signe moins devant une parenthèse.", "Ajouter 4 et x alors que 4x signifie 4 × x."]
    ),
    "math-factorisation": mathLesson(
      "Factorisation",
      "Factoriser, c'est faire l'inverse du développement : on cherche ce qui est commun pour le mettre devant une parenthèse.",
      ["facteur commun", "parenthèse", "forme factorisée", "forme développée"],
      ["Cherche un nombre ou une lettre présent dans chaque terme.", "Écris ce facteur commun devant la parenthèse.", "Dans la parenthèse, écris ce qu'il reste de chaque terme.", "Vérifie en redéveloppant."],
      "6x + 12 = 6 × x + 6 × 2, donc 6x + 12 = 6(x + 2).",
      ["Prendre un facteur qui n'est pas commun à tous les termes.", "Oublier un terme dans la parenthèse."]
    ),
    "math-equations": mathLesson(
      "Équations",
      "Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie.",
      ["équation", "inconnue", "solution", "vérifier"],
      ["Repère l'inconnue.", "Enlève d'abord ce qui est ajouté ou retiré autour de l'inconnue.", "Enlève ensuite ce qui multiplie ou divise l'inconnue.", "Écris la solution.", "Vérifie en remplaçant l'inconnue par la valeur trouvée."],
      "Dans 2x + 3 = 11, on enlève 3 : 2x = 8. Puis on divise par 2 : x = 4.",
      ["Changer un seul côté de l'égalité.", "Confondre 2x avec x + 2.", "Ne pas vérifier la solution."]
    ),
    "math-arithmetique": mathLesson(
      "Arithmétique",
      "L'arithmétique étudie les nombres entiers : diviseurs, multiples, nombres premiers et décompositions.",
      ["multiple", "diviseur", "nombre premier", "PGCD"],
      ["Pour tester un diviseur, divise et regarde s'il reste quelque chose.", "Pour trouver les multiples, multiplie par 1, 2, 3, etc.", "Un nombre premier a exactement deux diviseurs : 1 et lui-même.", "Pour simplifier une fraction, cherche un diviseur commun."],
      "24 est divisible par 6 car 24 ÷ 6 = 4 exactement. Il n'y a pas de reste.",
      ["Dire qu'un nombre est premier parce qu'il est impair.", "Confondre diviseur de 24 et multiple de 24."]
    ),
    "math-proportionnalite": mathLesson(
      "Proportionnalité",
      "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre.",
      ["coefficient", "tableau", "produit en croix", "unité"],
      ["Vérifie si la situation garde le même rapport.", "Cherche le coefficient ou passe par l'unité.", "Multiplie ou divise les valeurs dans le même sens.", "Ajoute l'unité à la réponse."],
      "Si 4 kg coûtent 12 €, alors 1 kg coûte 3 €. Donc 6 kg coûtent 6 × 3 = 18 €.",
      ["Utiliser la proportionnalité alors que la situation n'est pas proportionnelle.", "Oublier les unités."]
    ),
    "math-pourcentages": mathLesson(
      "Pourcentages",
      "Un pourcentage est une proportion sur 100. Il permet de parler d'une partie, d'une réduction, d'une augmentation ou d'un taux.",
      ["pourcentage", "taux", "réduction", "augmentation"],
      ["Traduis le pourcentage : 10 % = 10 sur 100.", "Calcule la partie demandée.", "Pour une réduction, enlève cette partie.", "Pour une augmentation, ajoute cette partie.", "Relis si on demande la valeur de la partie ou le résultat final."],
      "20 % de 50 €, c'est 10 €. Avec une réduction de 20 %, le prix devient 50 - 10 = 40 €.",
      ["Répondre au montant de la réduction au lieu du prix final.", "Oublier que 25 % correspond à un quart."]
    ),
    "math-probabilites": mathLesson(
      "Probabilités",
      "Une probabilité mesure la chance qu'un événement arrive. Elle est comprise entre 0 et 1.",
      ["issue", "événement", "cas favorables", "cas possibles"],
      ["Compte toutes les issues possibles.", "Compte les issues qui répondent à la question.", "Écris la fraction : favorables / possibles.", "Simplifie si possible.", "Vérifie que le résultat est entre 0 et 1."],
      "Dans un sac de 8 boules dont 2 bleues, la probabilité de tirer une boule bleue est 2/8, donc 1/4.",
      ["Confondre les cas favorables et tous les cas.", "Donner une probabilité plus grande que 1."]
    ),
    "math-statistiques": mathLesson(
      "Statistiques",
      "Les statistiques servent à résumer une série de données avec des nombres comme la moyenne, la médiane ou l'étendue.",
      ["moyenne", "médiane", "étendue", "série"],
      ["Range les valeurs si on te demande la médiane.", "Pour la moyenne, additionne toutes les valeurs puis divise par le nombre de valeurs.", "Pour l'étendue, fais plus grande valeur moins plus petite valeur.", "Écris une phrase pour interpréter le résultat."],
      "Pour 3, 7, 8, 12, l'étendue vaut 12 - 3 = 9.",
      ["Calculer une moyenne en oubliant une valeur.", "Chercher la médiane sans ranger les nombres."]
    ),
    "math-fonctions": mathLesson(
      "Fonctions",
      "Une fonction est une machine qui transforme un nombre de départ en un nombre d'arrivée.",
      ["fonction", "image", "antécédent", "formule"],
      ["Pour une image, remplace x par la valeur donnée.", "Pour un antécédent, cherche quel x donne le résultat demandé.", "Lis bien si la réponse se trouve dans une formule, un tableau ou un graphique.", "Écris les calculs pour éviter les erreurs de signe."],
      "Si f(x) = 2x + 5, alors l'image de 4 est f(4) = 2 × 4 + 5 = 13.",
      ["Confondre image et antécédent.", "Lire f(4) comme une multiplication f × 4."]
    ),
    "math-fonctions-affines": mathLesson(
      "Fonctions affines",
      "Une fonction affine s'écrit f(x) = ax + b. Elle permet de modéliser une situation qui augmente ou diminue régulièrement.",
      ["fonction affine", "coefficient directeur", "ordonnée à l'origine", "droite"],
      ["Repère a et b dans la formule.", "Pour calculer une image, remplace x par la valeur donnée.", "Sur un graphique, une fonction affine est représentée par une droite.", "Le nombre b se lit souvent au départ, quand x vaut 0."],
      "Pour f(x) = 3x - 2, l'image de 4 vaut 3 × 4 - 2 = 10.",
      ["Oublier le signe de b.", "Confondre ax + b avec a + xb."]
    ),
    "math-pythagore": mathLesson(
      "Théorème de Pythagore",
      "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",
      ["triangle rectangle", "hypoténuse", "carré", "longueur"],
      ["Vérifie que le triangle est rectangle.", "Repère l'hypoténuse : c'est le côté en face de l'angle droit.", "Écris l'égalité de Pythagore.", "Remplace par les longueurs connues.", "Calcule puis donne la longueur avec son unité."],
      "Si les côtés de l'angle droit mesurent 6 cm et 8 cm, alors h² = 6² + 8² = 36 + 64 = 100, donc h = 10 cm.",
      ["Utiliser Pythagore dans un triangle qui n'est pas rectangle.", "Se tromper d'hypoténuse.", "Oublier la racine carrée à la fin."]
    ),
    "math-thales": mathLesson(
      "Théorème de Thalès",
      "Thalès sert à calculer des longueurs quand deux triangles sont formés avec des droites parallèles.",
      ["droites parallèles", "rapports", "agrandissement", "réduction"],
      ["Vérifie qu'il y a deux droites parallèles.", "Repère les triangles qui se correspondent.", "Associe les longueurs dans le même ordre.", "Écris une égalité de rapports.", "Calcule la longueur inconnue."],
      "Si un petit côté de 3 cm correspond à un grand côté de 6 cm, le coefficient est 2. Une longueur correspondante de 4 cm devient 8 cm.",
      ["Utiliser Thalès sans droites parallèles.", "Associer les mauvais côtés.", "Oublier que les rapports doivent garder le même ordre."]
    ),
    "math-trigonometrie": mathLesson(
      "Trigonométrie",
      "La trigonométrie relie les angles et les longueurs dans un triangle rectangle.",
      ["sinus", "cosinus", "tangente", "adjacent", "opposé"],
      ["Vérifie que le triangle est rectangle.", "Repère l'angle étudié.", "Nomme les côtés : hypoténuse, adjacent, opposé.", "Choisis la formule : cosinus, sinus ou tangente.", "Remplace puis calcule."],
      "Pour le cosinus d'un angle, on utilise adjacent / hypoténuse.",
      ["Confondre côté opposé et côté adjacent.", "Utiliser la trigonométrie dans un triangle non rectangle."]
    ),
    "math-transformations": mathLesson(
      "Transformations",
      "Une transformation déplace ou modifie une figure en suivant une règle : symétrie, translation, rotation, homothétie.",
      ["symétrie", "translation", "rotation", "homothétie"],
      ["Identifie la transformation demandée.", "Repère les points importants de la figure.", "Applique la règle à chaque point.", "Vérifie les distances, les directions ou le centre selon la transformation."],
      "Une translation fait glisser toute la figure dans la même direction et de la même longueur.",
      ["Confondre rotation et symétrie.", "Déplacer seulement un point de la figure."]
    ),
    "math-volume": mathLesson(
      "Volumes",
      "Un volume mesure la place occupée par un solide. Il s'exprime en unités cubes comme cm³ ou m³.",
      ["volume", "solide", "aire de base", "hauteur"],
      ["Identifie le solide.", "Choisis la formule adaptée.", "Remplace les longueurs par les valeurs données.", "Vérifie les unités.", "Écris la réponse en unité cube."],
      "Pour un pavé droit, Volume = longueur × largeur × hauteur.",
      ["Confondre aire et volume.", "Oublier que le volume s'exprime en cm³, m³, L, etc."]
    ),
    "math-echelles": mathLesson(
      "Échelles",
      "Une échelle indique le lien entre une longueur sur un plan et la longueur réelle.",
      ["échelle", "plan", "longueur réelle", "conversion"],
      ["Lis l'échelle : 1:1000 signifie que 1 cm sur le plan représente 1000 cm en réalité.", "Multiplie ou divise selon le sens demandé.", "Convertis l'unité si nécessaire.", "Vérifie que le résultat est réaliste."],
      "À l'échelle 1:1000, 2 cm sur le plan représentent 2000 cm, soit 20 m.",
      ["Oublier de convertir les centimètres en mètres.", "Inverser plan et réalité."]
    ),
    "math-algorithmique": mathLesson(
      "Algorithmique",
      "Un algorithme est une suite d'instructions à suivre dans un ordre précis.",
      ["instruction", "variable", "condition", "boucle"],
      ["Lis les instructions dans l'ordre.", "Note la valeur de départ.", "Mets à jour la valeur après chaque étape.", "Si une condition apparaît, vérifie si elle est vraie ou fausse.", "À la fin, écris le résultat obtenu."],
      "Programme : choisir 5, ajouter 3, multiplier par 2. On obtient 5 + 3 = 8, puis 8 × 2 = 16.",
      ["Sauter une étape.", "Faire les calculs dans le mauvais ordre."]
    ),
    "math-algorithmique-tableur": mathLesson(
      "Tableur",
      "Un tableur utilise des cellules et des formules pour calculer automatiquement.",
      ["cellule", "formule", "colonne", "ligne"],
      ["Repère les cellules utilisées.", "Remplace chaque cellule par sa valeur.", "Applique la formule en respectant les priorités de calcul.", "Vérifie si la formule doit être recopiée sur d'autres lignes."],
      "Si A1 contient 4, la formule =A1*3 donne 12.",
      ["Oublier que les formules commencent par =.", "Confondre A1 et 1A."]
    )
  };

  const extraCourses = [
    {
      subjectId: "francais",
      themeId: "lecture",
      course: simpleCourse("fr-types-textes", "Types de textes", "Reconnaître l'intention d'un texte : raconter, décrire, expliquer, informer, convaincre ou donner un ordre.")
    },
    {
      subjectId: "francais",
      themeId: "grammaire",
      course: simpleCourse("fr-vocabulaire", "Vocabulaire et sens des mots", "Comprendre le sens d'un mot grâce au contexte, aux familles de mots et aux niveaux de langue.")
    },
    {
      subjectId: "histoire-geo-emc",
      themeId: "histoire",
      course: simpleCourse("hist-france-vichy-resistance", "France occupée, Vichy et Résistance", "Comprendre la situation de la France pendant la Seconde Guerre mondiale.")
    },
    {
      subjectId: "sciences",
      themeId: "physique-chimie",
      course: simpleCourse("sci-gravitation", "Gravitation et système solaire", "Comprendre l'attraction entre les astres et l'organisation simple du système solaire.")
    }
  ];

  extraCourses.forEach(({ subjectId, themeId, course }) => addCourse(subjectId, themeId, course));

  walkCourses((course, subject, theme) => {
    course.lesson = lessons[course.id] || buildDefaultLesson(course, subject, theme);
    if (course.status === "structure") course.status = "content";
    if (!course.keyIdeas || course.keyIdeas.length < 3) course.keyIdeas = course.lesson.understand;
    if (!course.example) course.example = course.lesson.example;
  });

  function mathLesson(title, main, words, method, example, traps) {
    return {
      prerequisites: ["Savoir lire la consigne lentement.", "Écrire les calculs au brouillon au lieu de tout faire de tête."],
      understand: [main],
      words,
      method,
      example,
      traps,
      remember: [`Pour réussir ${title}, commence par reconnaître le type de question, puis applique toujours la même méthode.`]
    };
  }

  function buildDefaultLesson(course, subject, theme) {
    if (subject.id === "francais") return frenchLesson(course, theme);
    if (subject.id === "histoire-geo-emc") return historyLesson(course, theme);
    if (subject.id === "sciences") return scienceLesson(course, theme);
    return mathLesson(course.title, course.goal, ["consigne", "méthode", "résultat"], ["Repère ce qu'on demande.", "Écris les données utiles.", "Applique la méthode.", "Vérifie la réponse."], `Exemple : pour ${course.title}, commence par recopier les informations utiles puis résous étape par étape.`, ["Répondre trop vite sans identifier la méthode."]);
  }

  function frenchLesson(course, theme) {
    return {
      prerequisites: ["Lire le texte ou la phrase en entier.", "Repérer ce que la question demande vraiment."],
      understand: [
        course.goal,
        ...frenchCore(course.title),
        "En français, la bonne réponse doit souvent être justifiée avec un mot du texte, une règle ou un exemple.",
        "Il vaut mieux écrire une réponse simple et claire qu'une phrase longue mais confuse."
      ],
      words: frenchWords(course.title, theme.label),
      method: [
        "Lis la consigne et souligne le verbe important : relever, expliquer, transformer, justifier.",
        "Cherche dans le texte ou dans la phrase l'indice qui permet de répondre.",
        "Réponds avec une phrase courte.",
        "Ajoute une preuve : citation courte, règle, temps du verbe, accord ou exemple.",
        "Relis pour vérifier les accords et la ponctuation."
      ],
      example: frenchExample(course.title),
      traps: ["Répondre sans preuve.", "Confondre nature et fonction.", "Oublier de relire les accords."],
      remember: [`Pour ${course.title}, la réponse doit montrer que tu as compris la règle ou le texte, pas seulement deviné.`]
    };
  }

  function historyLesson(course, theme) {
    return {
      prerequisites: ["Situer le sujet dans le temps ou dans l'espace.", "Lire les documents avant de répondre."],
      understand: [
        course.goal,
        ...historyCore(course.title),
        "Au brevet, on attend des repères simples, du vocabulaire précis et une réponse organisée.",
        "Il faut relier les informations du cours avec les documents quand il y en a."
      ],
      words: historyWords(course.title, theme.label),
      method: [
        "Repère le thème : histoire, géographie, EMC ou méthode.",
        "Note les dates, lieux, acteurs ou valeurs importantes.",
        "Explique avec des phrases courtes : une idée par phrase.",
        "Si un document est donné, utilise-le comme preuve.",
        "Termine par une phrase qui répond directement à la question."
      ],
      example: historyExample(course.title),
      traps: ["Réciter sans répondre à la question.", "Oublier les dates ou les lieux importants.", "Confondre opinion personnelle et réponse d'EMC."],
      remember: [`Pour ${course.title}, retiens quelques repères solides et entraîne-toi à expliquer avec tes mots.`]
    };
  }

  function scienceLesson(course, theme) {
    return {
      prerequisites: ["Lire les unités et les grandeurs.", "Observer le schéma, le tableau ou le graphique avant de calculer."],
      understand: [
        course.goal,
        ...scienceCore(course.title),
        "En sciences, il faut distinguer ce qu'on observe, ce qu'on calcule et ce qu'on conclut.",
        "Une bonne réponse contient souvent une donnée, une méthode et une unité."
      ],
      words: scienceWords(course.title, theme.label),
      method: [
        "Repère la grandeur étudiée : masse, volume, vitesse, énergie, tension, pH, organe, signal.",
        "Entoure les données utiles et leurs unités.",
        "Choisis la formule, la lecture de graphique ou l'explication adaptée.",
        "Rédige le résultat avec l'unité.",
        "Vérifie si la réponse est logique par rapport à la situation."
      ],
      example: scienceExample(course.title),
      traps: ["Oublier l'unité.", "Lire la mauvaise courbe ou le mauvais axe.", "Inventer une information absente du document."],
      remember: [`Pour ${course.title}, pars toujours des données visibles avant de conclure.`]
    };
  }

  function frenchWords(title, theme) {
    if (/texte|lecture|compréhension|types/i.test(title)) return ["type de texte", "indice", "citation", "justification"];
    if (/accord|dictée|orthographe/i.test(title)) return ["accord", "sujet", "verbe", "genre", "nombre"];
    if (/conjugaison/i.test(title)) return ["temps", "mode", "radical", "terminaison"];
    if (/rédaction/i.test(title)) return ["plan", "paragraphe", "connecteur", "relecture"];
    return [theme.toLowerCase(), "règle", "exemple", "preuve"];
  }

  function frenchCore(title) {
    if (/nature/i.test(title)) return [
      "La nature d'un mot dit ce qu'il est : nom, verbe, adjectif, pronom, déterminant.",
      "La fonction dit son rôle dans la phrase : sujet, COD, complément, attribut."
    ];
    if (/accord/i.test(title)) return [
      "Un accord dépend souvent d'un autre mot : le verbe s'accorde avec son sujet, l'adjectif avec le nom.",
      "Pour réussir, il faut retrouver le mot qui commande l'accord avant d'écrire la terminaison."
    ];
    if (/dictée/i.test(title)) return [
      "En dictée, le plus important est de relire par catégories : verbes, pluriels, homophones, ponctuation.",
      "On ne corrige pas tout au hasard : on vérifie une règle à la fois."
    ];
    if (/orthographe lexicale/i.test(title)) return [
      "L'orthographe lexicale concerne l'écriture des mots eux-mêmes : lettres muettes, doubles consonnes, accents.",
      "On peut s'aider des familles de mots : long aide à écrire longueur, chant aide à écrire chanteur."
    ];
    if (/ponctuation/i.test(title)) return [
      "La ponctuation aide à comprendre la phrase : pause courte, pause forte, question, exclamation, dialogue.",
      "Une phrase commence par une majuscule et se termine par un point adapté."
    ];
    if (/réécriture/i.test(title)) return [
      "Une réécriture demande de transformer une phrase en gardant le même sens.",
      "Quand on change le sujet, le temps ou le nombre, plusieurs mots peuvent changer."
    ];
    if (/conjugaison/i.test(title)) return [
      "Conjuguer, c'est choisir la bonne forme du verbe selon le sujet, le temps et le mode.",
      "Le radical porte le sens du verbe, la terminaison donne souvent le temps et la personne."
    ];
    if (/types de textes/i.test(title)) return [
      "Un texte narratif raconte, un texte descriptif montre, un texte explicatif fait comprendre, un texte argumentatif cherche à convaincre.",
      "Pour reconnaître le type, observe l'intention du texte et les mots utilisés."
    ];
    if (/compréhension/i.test(title)) return [
      "Comprendre un texte, c'est repérer qui parle, de quoi il est question, ce qui se passe et ce que le texte veut faire ressentir ou comprendre.",
      "Une réponse doit s'appuyer sur des indices précis du texte."
    ];
    if (/figures/i.test(title)) return [
      "Une figure de style crée un effet : comparer, exagérer, répéter, opposer ou donner une image.",
      "Il faut nommer la figure seulement si on peut expliquer l'effet produit."
    ];
    if (/rédaction/i.test(title)) return [
      "Une rédaction réussie se prépare avant d'écrire : idées, ordre, paragraphes, mots de liaison.",
      "Le correcteur regarde le contenu, l'organisation, la langue et la relecture."
    ];
    if (/vocabulaire/i.test(title)) return [
      "Le sens d'un mot dépend souvent du contexte.",
      "Les préfixes, suffixes, familles de mots et niveaux de langue aident à comprendre ou à choisir le bon mot."
    ];
    return [];
  }

  function frenchExample(title) {
    if (/types/i.test(title)) return "Un texte narratif raconte une histoire. Un texte argumentatif cherche à convaincre. Pour les distinguer, regarde les verbes, les connecteurs et l'intention.";
    if (/accord/i.test(title)) return "Dans « les élèves attentifs écoutent », élèves est pluriel, donc attentifs et écoutent sont aussi au pluriel.";
    if (/conjugaison/i.test(title)) return "Pour conjuguer, repère le sujet et le temps demandé : « nous finirons » est au futur, avec la terminaison -ons.";
    return `Exemple : pour ${title}, lis la phrase entière, repère l'indice utile, puis réponds avec une preuve courte.`;
  }

  function historyWords(title, theme) {
    if (/guerre|totalitarisme|résistance|vichy/i.test(title)) return ["date", "acteur", "régime", "violence", "résistance"];
    if (/métropole|territoire|densité|union|géographique/i.test(title)) return ["territoire", "espace", "aménagement", "mobilité", "repère"];
    if (/emc|république|valeurs/i.test(title)) return ["liberté", "égalité", "fraternité", "laïcité", "citoyen"];
    return [theme.toLowerCase(), "repère", "document", "justification"];
  }

  function historyCore(title) {
    if (/Première Guerre/i.test(title)) return [
      "La Première Guerre mondiale dure de 1914 à 1918 et touche fortement les soldats comme les civils.",
      "Il faut retenir la guerre de tranchées, la violence de masse et le bilan humain très lourd."
    ];
    if (/Seconde Guerre/i.test(title)) return [
      "La Seconde Guerre mondiale dure de 1939 à 1945 et devient une guerre totale et mondiale.",
      "Le génocide des Juifs et des Tsiganes est un repère essentiel du programme."
    ];
    if (/Vichy|Résistance|occupée/i.test(title)) return [
      "Après la défaite de 1940, une partie de la France est occupée par l'Allemagne nazie.",
      "Le régime de Vichy collabore, tandis que des résistants s'opposent à l'occupation."
    ];
    if (/Totalitarismes/i.test(title)) return [
      "Un régime totalitaire veut contrôler la population, la politique, l'économie, la presse et les idées.",
      "La propagande, la terreur et le culte du chef sont des éléments importants."
    ];
    if (/Guerre froide/i.test(title)) return [
      "La Guerre froide oppose les États-Unis et l'URSS sans guerre directe entre eux.",
      "Le monde est divisé en deux blocs, avec des crises comme Berlin ou Cuba."
    ];
    if (/Décolonisation/i.test(title)) return [
      "La décolonisation est l'accès à l'indépendance d'anciennes colonies.",
      "Elle peut être négociée ou violente selon les territoires."
    ];
    if (/Construction européenne/i.test(title)) return [
      "La construction européenne commence après 1945 pour éviter une nouvelle guerre et coopérer.",
      "Elle se développe progressivement avec des traités et l'élargissement de l'Union européenne."
    ];
    if (/Ve République/i.test(title)) return [
      "La Ve République commence en 1958 et donne un rôle important au président.",
      "Il faut connaître les grandes institutions : président, gouvernement, Parlement, Conseil constitutionnel."
    ];
    if (/Métropoles/i.test(title)) return [
      "Une métropole concentre population, emplois, services, transports et pouvoirs.",
      "Les métropoles attirent mais créent aussi des inégalités et des problèmes d'aménagement."
    ];
    if (/Espaces productifs/i.test(title)) return [
      "Un espace productif est un espace où l'on produit des richesses : agriculture, industrie, services.",
      "Il change avec la mondialisation, les transports et les nouvelles technologies."
    ];
    if (/faible densité/i.test(title)) return [
      "Un espace de faible densité compte peu d'habitants par km².",
      "Ces espaces peuvent avoir des difficultés, mais aussi des atouts : tourisme, agriculture, cadre de vie."
    ];
    if (/Aménagement/i.test(title)) return [
      "Aménager le territoire, c'est organiser l'espace pour réduire les inégalités et améliorer la vie des habitants.",
      "Les transports, services publics et équipements sont des exemples d'aménagement."
    ];
    if (/Union européenne/i.test(title)) return [
      "L'Union européenne est un espace de coopération entre États européens.",
      "La France y occupe une place importante grâce à sa position, son économie et ses territoires ultramarins."
    ];
    if (/Valeurs|EMC/i.test(title)) return [
      "L'EMC demande de comprendre les valeurs, les droits, les devoirs et le fonctionnement démocratique.",
      "Il faut répondre avec des principes précis, pas seulement avec son avis personnel."
    ];
    if (/document/i.test(title)) return [
      "Analyser un document, c'est identifier sa nature, son auteur, sa date, son sujet et les informations utiles.",
      "Il faut citer ou décrire le document pour justifier la réponse."
    ];
    if (/Développement construit/i.test(title)) return [
      "Un développement construit est une réponse organisée en plusieurs phrases ou paragraphes.",
      "Il faut une idée principale, des exemples précis et des connecteurs logiques."
    ];
    return [];
  }

  function historyExample(title) {
    if (/Première Guerre/i.test(title)) return "La Première Guerre mondiale commence en 1914 et se termine en 1918. Elle est marquée par les tranchées et une violence de masse.";
    if (/Seconde Guerre/i.test(title)) return "La Seconde Guerre mondiale oppose notamment les Alliés et l'Axe. En France, l'Occupation, Vichy et la Résistance sont des repères essentiels.";
    if (/métropole/i.test(title)) return "Une métropole attire des habitants, des emplois, des transports et des services. Paris est une grande métropole française.";
    return `Exemple : pour ${title}, donne un repère précis, explique-le simplement, puis relie-le à la question.`;
  }

  function scienceWords(title, theme) {
    if (/électricité/i.test(title)) return ["circuit", "tension", "intensité", "dipôle"];
    if (/graphique/i.test(title)) return ["axe", "unité", "courbe", "tendance"];
    if (/vitesse|mouvement/i.test(title)) return ["distance", "durée", "vitesse", "trajectoire"];
    if (/digestion|corps|reproduction|immunité/i.test(title)) return ["organe", "fonction", "cellule", "système"];
    if (/programmation|capteur|objet|chaîne/i.test(title)) return ["capteur", "actionneur", "information", "énergie"];
    return [theme.toLowerCase(), "donnée", "unité", "conclusion"];
  }

  function scienceCore(title) {
    if (/Corps humain/i.test(title)) return [
      "Pendant un effort, les muscles ont besoin de plus de dioxygène et de nutriments.",
      "Le rythme cardiaque et la respiration augmentent pour répondre aux besoins du corps."
    ];
    if (/Environnement/i.test(title)) return [
      "Un écosystème comprend un milieu de vie et des êtres vivants en relation.",
      "Modifier un élément peut avoir des conséquences sur d'autres êtres vivants."
    ];
    if (/Digestion/i.test(title)) return [
      "La digestion transforme les aliments en nutriments utilisables par le corps.",
      "Les nutriments passent dans le sang au niveau de l'intestin grêle."
    ];
    if (/Reproduction/i.test(title)) return [
      "La reproduction humaine commence par la rencontre d'une cellule reproductrice mâle et d'une cellule reproductrice femelle.",
      "Le développement de l'embryon puis du fœtus se fait dans l'utérus."
    ];
    if (/Génétique/i.test(title)) return [
      "L'information génétique est portée par l'ADN dans les cellules.",
      "Les caractères héréditaires se transmettent des parents aux enfants."
    ];
    if (/Immunité/i.test(title)) return [
      "Le système immunitaire protège le corps contre les microbes.",
      "Les vaccins aident le corps à reconnaître plus vite certains microbes."
    ];
    if (/Planète Terre|Gravitation/i.test(title)) return [
      "La Terre fait partie du système solaire et interagit avec les autres astres.",
      "La gravitation est une attraction entre les objets qui ont une masse."
    ];
    if (/Énergie/i.test(title)) return [
      "L'énergie peut changer de forme : électrique, thermique, lumineuse, mécanique ou chimique.",
      "Un système peut transférer ou convertir de l'énergie."
    ];
    if (/Électricité/i.test(title)) return [
      "Un circuit électrique fermé permet au courant de circuler.",
      "Les dipôles peuvent être branchés en série ou en dérivation."
    ];
    if (/graphique/i.test(title)) return [
      "Un graphique montre comment une grandeur varie en fonction d'une autre.",
      "Le titre, les axes et les unités doivent être lus avant toute conclusion."
    ];
    if (/Mouvement|vitesse/i.test(title)) return [
      "La vitesse relie une distance et une durée.",
      "Un mouvement se décrit avec une trajectoire et une évolution de la vitesse."
    ];
    if (/Masse volumique/i.test(title)) return [
      "La masse volumique relie la masse d'un objet à son volume.",
      "Elle permet parfois d'identifier une matière."
    ];
    if (/Transformations chimiques/i.test(title)) return [
      "Une transformation chimique forme de nouvelles substances.",
      "Les réactifs disparaissent en partie ou totalement et des produits apparaissent."
    ];
    if (/pH/i.test(title)) return [
      "Le pH indique si une solution est acide, neutre ou basique.",
      "Un pH inférieur à 7 est acide, égal à 7 neutre, supérieur à 7 basique."
    ];
    if (/Signaux/i.test(title)) return [
      "Un signal transporte une information.",
      "Il peut être sonore, lumineux, électrique ou radio selon la situation."
    ];
    if (/Unités/i.test(title)) return [
      "Une grandeur doit être accompagnée de la bonne unité.",
      "Convertir une unité permet de comparer ou de calculer correctement."
    ];
    if (/Chaînes|Programmation|Objets|Capteurs|Matériaux/i.test(title)) return [
      "En technologie, on étudie comment un objet répond à un besoin.",
      "Il faut distinguer l'information, l'énergie, les composants et les matériaux utilisés."
    ];
    return [];
  }

  function scienceExample(title) {
    if (/vitesse/i.test(title)) return "Si un vélo parcourt 60 km en 3 h, sa vitesse moyenne est 60 ÷ 3 = 20 km/h.";
    if (/masse volumique/i.test(title)) return "Si un objet a une masse de 200 g et un volume de 100 cm³, sa masse volumique vaut 200 ÷ 100 = 2 g/cm³.";
    if (/graphique/i.test(title)) return "Sur un graphique, commence par lire le titre, puis les axes et les unités avant d'interpréter la courbe.";
    return `Exemple : pour ${title}, repère les données, choisis la méthode, puis conclus avec une phrase et une unité si nécessaire.`;
  }

  function simpleCourse(id, title, goal) {
    return { id, title, goal, exercises: [] };
  }

  function addCourse(subjectId, themeId, course) {
    const subject = catalog.subjects.find((item) => item.id === subjectId);
    const theme = subject?.themes.find((item) => item.id === themeId);
    if (!theme || theme.courses.some((item) => item.id === course.id)) return;
    theme.courses.push(course);
  }

  function addMissingCourses() {
    ensureTheme("mathematiques", "algorithmique", "Algorithmique");
    addCourse("mathematiques", "algorithmique", simpleCourse(
      "math-algorithmique",
      "Algorithmique",
      "Lire, suivre ou compléter un programme de calcul simple."
    ));

    const science = catalog.subjects.find((item) => item.id === "sciences");
    const physics = science?.themes.find((item) => item.id === "physique-chimie");
    if (physics) {
      const energy = physics.courses.find((course) => course.id === "sci-energie");
      if (energy) energy.title = "Énergie";
    }
  }

  function ensureTheme(subjectId, themeId, label) {
    const subject = catalog.subjects.find((item) => item.id === subjectId);
    if (!subject || subject.themes.some((theme) => theme.id === themeId)) return;
    subject.themes.push({ id: themeId, label, courses: [] });
  }

  function walkCourses(callback) {
    catalog.subjects.forEach((subject) => {
      subject.themes.forEach((theme) => {
        theme.courses.forEach((course) => callback(course, subject, theme));
      });
    });
  }
})();
