(function () {
  const helpDetails = {
    "math-nombres-relatifs-1": [
      "Regarde d'abord le résultat demandé : il faut obtenir -4.",
      "Teste mentalement les propositions : -7 + 3 revient à partir de -7 puis avancer de 3.",
      "Sur une droite graduée, -7 puis +3 arrive à -4."
    ],
    "math-nombres-relatifs-2": [
      "Tu pars de -5.",
      "Le signe - 6 signifie que tu recules encore de 6 unités.",
      "En reculant de 6 depuis -5, tu arrives à -11."
    ],
    "math-fractions-1": [
      "Pour simplifier 21/30, cherche un nombre qui divise 21 et 30.",
      "3 fonctionne : 21 ÷ 3 = 7 et 30 ÷ 3 = 10.",
      "La fraction devient donc 7/10. On ne change pas la valeur car on divise le haut et le bas par le même nombre."
    ],
    "math-fractions-2": [
      "Cherche le plus grand nombre qui divise 18 et 30.",
      "6 divise les deux nombres : 18 ÷ 6 = 3 et 30 ÷ 6 = 5.",
      "Écris la fraction simplifiée avec les deux résultats : 3/5."
    ],
    "math-fractions-3": [
      "Pour comparer 3/4 et 5/8, mets les deux fractions au même dénominateur.",
      "4 devient 8 si on multiplie par 2, donc 3/4 = 6/8.",
      "Compare maintenant 6/8 et 5/8.",
      "Comme 6 est plus grand que 5, 3/4 est plus grand que 5/8."
    ],
    "math-fractions-4": [
      "Pour additionner 1/3 et 1/6, il faut le même dénominateur.",
      "Transforme 1/3 en sixièmes : 1/3 = 2/6.",
      "Additionne ensuite les numérateurs : 2/6 + 1/6 = 3/6.",
      "Simplifie 3/6 : cela donne 1/2."
    ],
    "math-fractions-5": [
      "On te demande 3/5 de 20.",
      "Commence par trouver 1/5 de 20 : 20 ÷ 5 = 4.",
      "Puis prends 3 parts de 4 : 3 × 4 = 12.",
      "Donc 3/5 de 20 vaut 12."
    ],
    "math-puissances-1": [
      "Dans la question, le nombre à calculer est 4².",
      "Ne lis pas 4² comme 4 × 2 : ce serait une erreur fréquente.",
      "L'exposant 2 veut dire que le nombre 4 est multiplié par lui-même.",
      "Donc 4² = 4 × 4, ce qui donne 16."
    ],
    "math-developpements-1": [
      "Tu dois supprimer la parenthèse de 4(x + 3).",
      "Multiplie 4 par le premier terme : 4 × x = 4x.",
      "Multiplie aussi 4 par le deuxième terme : 4 × 3 = 12.",
      "Réunis les deux morceaux : 4x + 12."
    ],
    "math-factorisation-1": [
      "Factoriser, c'est trouver ce qui est commun.",
      "Dans 6x + 12, 6 est commun car 6x = 6 × x et 12 = 6 × 2.",
      "On met 6 devant la parenthèse, puis on écrit ce qui reste : x + 2."
    ],
    "math-equations-1": [
      "L'objectif est de laisser x seul.",
      "Dans x + 4 = 11, le +4 gêne x.",
      "Pour enlever +4, on fait -4 à droite : 11 - 4 = 7.",
      "Donc x vaut 7."
    ],
    "math-equations-2": [
      "3x signifie 3 × x.",
      "Pour trouver x, il faut faire l'opération inverse de ×3.",
      "On divise 15 par 3.",
      "15 ÷ 3 = 5, donc x = 5."
    ],
    "math-equations-3": [
      "Dans 2x + 3 = 11, commence par enlever le +3.",
      "Fais 11 - 3 : il reste 2x = 8.",
      "2x signifie 2 × x, donc on divise par 2.",
      "8 ÷ 2 = 4, donc x = 4."
    ],
    "math-equations-4": [
      "Dans x/5 = 7, x est divisé par 5.",
      "Pour annuler une division par 5, on multiplie par 5.",
      "Calcule 7 × 5.",
      "Tu obtiens x = 35."
    ],
    "math-equations-5": [
      "Dans 5x - 2 = 18, commence par enlever le -2.",
      "L'opération inverse de -2 est +2, donc 18 + 2 = 20.",
      "Il reste 5x = 20.",
      "Divise par 5 : x = 4."
    ],
    "math-arithmetique-1": [
      "Un diviseur doit partager 24 sans reste.",
      "Teste 6 : 24 ÷ 6 = 4 exactement.",
      "Comme il n'y a pas de reste, 6 est bien un diviseur de 24."
    ],
    "math-proportionnalite-1": [
      "Cherche d'abord le prix de 1 kg.",
      "4 kg coûtent 12 €, donc 1 kg coûte 12 ÷ 4 = 3 €.",
      "Pour 6 kg, tu multiplies 3 € par 6.",
      "6 × 3 € = 18 €."
    ],
    "math-proportionnalite-2": [
      "On sait que 3 cahiers coûtent 7,50 €.",
      "Cherche le prix d'un cahier : 7,50 ÷ 3 = 2,50 €.",
      "Pour 8 cahiers, multiplie 2,50 € par 8.",
      "8 × 2,50 € = 20 €."
    ],
    "math-proportionnalite-3": [
      "La recette donne 300 g pour 4 personnes.",
      "Cherche la quantité pour 1 personne : 300 ÷ 4 = 75 g.",
      "Pour 6 personnes, multiplie 75 g par 6.",
      "75 × 6 = 450 g."
    ],
    "math-proportionnalite-4": [
      "La voiture parcourt 120 km en 2 h.",
      "Pour trouver la distance en 1 h, divise par 2.",
      "120 ÷ 2 = 60.",
      "La vitesse moyenne est donc 60 km/h."
    ],
    "math-pourcentages-1": [
      "10 % signifie un dixième.",
      "Trouver 10 % de 80 revient à partager 80 en 10 parts égales.",
      "80 ÷ 10 = 8."
    ],
    "math-pourcentages-2": [
      "25 % signifie un quart.",
      "Trouver 25 % de 48 revient à partager 48 en 4 parts égales.",
      "48 ÷ 4 = 12.",
      "Donc 25 % de 48 vaut 12."
    ],
    "math-pourcentages-3": [
      "Une réduction de 20 % sur 50 € signifie qu'on enlève 20 % de 50 €.",
      "Calcule 10 % de 50 € : cela fait 5 €.",
      "Donc 20 % de 50 € fait 10 €.",
      "Le nouveau prix est 50 € - 10 € = 40 €."
    ],
    "math-probabilites-1": [
      "Compte les cas possibles : il y a 8 boules au total.",
      "Compte les cas favorables : il y a 2 boules bleues.",
      "La probabilité est donc 2/8.",
      "Simplifie 2/8 en divisant par 2 : 1/4."
    ],
    "math-statistiques-1": [
      "L'étendue mesure l'écart entre la plus grande et la plus petite valeur.",
      "Dans la série, la plus petite valeur est 3.",
      "La plus grande valeur est 12.",
      "Calcule 12 - 3."
    ],
    "math-fonctions-1": [
      "On te demande l'image de 4.",
      "Cela veut dire : remplace x par 4 dans f(x) = 2x + 5.",
      "Tu obtiens 2 × 4 + 5.",
      "Calcule d'abord 2 × 4, puis ajoute 5."
    ],
    "math-fonctions-2": [
      "On cherche un antécédent de 9 par la fonction f(x) = 2x + 1.",
      "Cela veut dire : quel nombre x donne 9 ?",
      "Écris 2x + 1 = 9.",
      "Enlève 1 puis divise par 2 : x = 4."
    ],
    "math-fonctions-affines-1": [
      "La formule est f(x) = 3x - 2.",
      "On te donne x = 4, donc remplace x par 4.",
      "Tu obtiens 3 × 4 - 2.",
      "Calcule 12 - 2."
    ],
    "math-fonctions-affines-2": [
      "La fonction est f(x) = -2x + 6.",
      "Pour calculer l'image de 3, remplace x par 3.",
      "Tu obtiens -2 × 3 + 6.",
      "-2 × 3 = -6, puis -6 + 6 = 0."
    ],
    "math-pythagore-1": [
      "Dans un triangle rectangle, commence toujours par trouver l'angle droit.",
      "L'hypoténuse est le côté en face de cet angle droit.",
      "C'est aussi le plus grand côté du triangle rectangle."
    ],
    "math-pythagore-2": [
      "Les deux petits côtés mesurent 6 cm et 8 cm.",
      "Avec Pythagore, l'hypoténuse vérifie h² = 6² + 8².",
      "Calcule : 6² = 36 et 8² = 64.",
      "36 + 64 = 100. Le nombre dont le carré vaut 100 est 10."
    ],
    "math-pythagore-3": [
      "Le triangle est rectangle et l'hypoténuse mesure 13 cm.",
      "Un autre côté mesure 5 cm. On cherche le côté manquant.",
      "Avec Pythagore : côté² + 5² = 13².",
      "Donc côté² = 169 - 25 = 144, et le côté vaut 12 cm."
    ],
    "math-pythagore-4": [
      "Pour savoir si le triangle est rectangle, compare le carré du plus grand côté avec la somme des carrés des deux autres.",
      "Le plus grand côté est 10.",
      "Calcule 6² + 8² = 36 + 64 = 100.",
      "Comme 10² = 100 aussi, le triangle est rectangle."
    ],
    "math-pythagore-5": [
      "L'échelle est contre le mur : sol, mur et échelle forment un triangle rectangle.",
      "L'échelle est l'hypoténuse car c'est le côté le plus long, en face de l'angle droit.",
      "On cherche la hauteur : hauteur² + 3² = 5².",
      "hauteur² = 25 - 9 = 16, donc la hauteur vaut 4 m."
    ],
    "math-thales-1": [
      "Thalès ne s'utilise pas juste parce qu'il y a un triangle.",
      "La première chose à vérifier est la présence de deux droites parallèles.",
      "Ensuite seulement, on pourra écrire des rapports de longueurs."
    ],
    "math-thales-2": [
      "Les triangles sont dans une configuration de Thalès.",
      "On compare les longueurs qui se correspondent.",
      "Le petit côté 3 cm correspond au grand côté 6 cm : le coefficient est 2.",
      "La longueur qui correspond à 4 cm vaut donc 8 cm."
    ],
    "math-thales-3": [
      "Pour utiliser Thalès, les points doivent être alignés dans le bon ordre et les droites doivent être parallèles.",
      "La question demande ce qu'on peut conclure avec deux rapports égaux.",
      "Si les rapports de longueurs sont égaux, cela peut servir à montrer que deux droites sont parallèles.",
      "C'est la réciproque du théorème de Thalès."
    ],
    "math-trigonometrie-1": [
      "Pour le cosinus, retiens CAH.",
      "C signifie cosinus, A signifie adjacent, H signifie hypoténuse.",
      "Donc cosinus = côté adjacent / hypoténuse."
    ],
    "math-transformations-1": [
      "Lis le verbe important : la figure tourne.",
      "Une figure qui tourne autour d'un point subit une rotation.",
      "Une translation ferait glisser la figure sans la tourner."
    ],
    "math-volume-1": [
      "Un pavé droit a trois dimensions : longueur, largeur et hauteur.",
      "Pour son volume, on multiplie les trois dimensions.",
      "Ici : 5 × 3 × 2.",
      "L'unité d'un volume est en cubes : cm³."
    ],
    "math-echelles-1": [
      "À l'échelle 1:1000, 1 cm sur le plan représente 1000 cm en réalité.",
      "Pour 2 cm, multiplie par 2 : 2000 cm.",
      "Convertis ensuite en mètres : 100 cm = 1 m, donc 2000 cm = 20 m."
    ],
    "math-tableur-1": [
      "Dans la formule =A1+5, A1 doit être remplacé par sa valeur.",
      "L'énoncé dit que A1 vaut 7.",
      "La formule devient donc 7 + 5.",
      "7 + 5 = 12."
    ],
    "fr-nature-fonction-1": [
      "Cherche d'abord le verbe de la phrase : travaillent.",
      "Demande-toi : qui travaille ?",
      "La réponse est Les élèves.",
      "Le groupe qui répond à qui fait l'action est le sujet."
    ],
    "fr-accords-1": [
      "Repère le sujet : Les filles.",
      "Ce sujet est féminin pluriel.",
      "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet.",
      "Il faut donc écrire arrivées avec -es."
    ],
    "fr-reecriture-1": [
      "La consigne demande le pluriel.",
      "Elle devient Elles.",
      "Le verbe finit doit aussi passer au pluriel : finissent.",
      "Le déterminant son devient leurs si plusieurs personnes ont chacune leur devoir."
    ],
    "fr-conjugaison-1": [
      "Le futur parle d'une action qui aura lieu plus tard.",
      "Cherche la forme qui annonce demain ou plus tard.",
      "Je lirai est au futur ; je lis est au présent, je lisais à l'imparfait, j'ai lu au passé composé."
    ],
    "fr-comprehension-1": [
      "Une réponse de compréhension ne doit pas être inventée.",
      "Il faut trouver un indice dans le texte.",
      "Ensuite, tu expliques cet indice avec tes mots.",
      "C'est pour cela qu'une citation ou un détail précis est nécessaire."
    ],
    "fr-figures-style-1": [
      "Repère le mot comme.",
      "Le mot comme sert souvent à comparer deux éléments.",
      "Rapide comme l'éclair compare la rapidité à l'éclair.",
      "C'est donc une comparaison."
    ],
    "fr-redaction-1": [
      "Dans un paragraphe argumenté, une idée seule ne suffit pas.",
      "Après l'idée, il faut montrer pourquoi elle est juste.",
      "On ajoute donc une justification, un exemple ou une preuve.",
      "Cela rend le paragraphe plus convaincant."
    ],
    "hist-seconde-guerre-1": [
      "Ne confonds pas les deux guerres mondiales.",
      "La Première Guerre mondiale commence en 1914.",
      "La Seconde Guerre mondiale commence en 1939.",
      "Elle se termine en 1945."
    ],
    "hist-guerre-froide-1": [
      "Après 1945, deux grandes puissances dominent le monde.",
      "Les États-Unis dirigent le bloc occidental.",
      "L'URSS dirige le bloc communiste.",
      "La guerre froide est leur rivalité."
    ],
    "hist-reperes-1": [
      "1789 est une date repère très importante en France.",
      "Elle correspond au début de la Révolution française.",
      "La chute du mur de Berlin, elle, date de 1989 : les deux dates se ressemblent mais ne désignent pas le même événement."
    ],
    "geo-metropoles-1": [
      "Une métropole n'est pas seulement une ville grande par la taille.",
      "Elle concentre aussi des emplois, des transports, des services et des lieux de décision.",
      "Cherche donc la réponse qui parle d'une grande ville avec beaucoup de fonctions."
    ],
    "geo-espaces-productifs-1": [
      "Le secteur primaire concerne l'agriculture et les ressources.",
      "Le secteur secondaire concerne l'industrie et la fabrication.",
      "Le secteur tertiaire concerne les services et le commerce.",
      "Un centre commercial appartient donc au tertiaire."
    ],
    "emc-valeurs-1": [
      "Pense à la devise française : Liberté, Égalité, Fraternité.",
      "Une valeur de la République est une idée importante qui guide la vie collective.",
      "La liberté est une valeur ; la vitesse, la masse ou la métropole ne sont pas des valeurs républicaines."
    ],
    "hist-document-1": [
      "Avant de répondre à une question sur un document, il faut savoir ce que tu regardes.",
      "Repère sa nature : texte, affiche, carte, photographie...",
      "Cherche aussi la date, l'auteur et le sujet quand ils sont indiqués.",
      "Ces informations évitent de répondre hors contexte."
    ],
    "sci-svt-effort-1": [
      "Pendant un effort, les muscles travaillent davantage.",
      "Ils ont besoin de plus de dioxygène et de nutriments.",
      "Le cœur bat plus vite pour transporter plus de sang.",
      "Le rythme cardiaque augmente donc."
    ],
    "sci-environnement-1": [
      "Un écosystème n'est pas seulement un lieu.",
      "Il comprend un milieu, par exemple une mare ou une forêt.",
      "Il comprend aussi les êtres vivants qui y habitent.",
      "La bonne réponse doit donc associer milieu et êtres vivants."
    ],
    "sci-energie-1": [
      "Regarde ce que produit une lampe quand elle fonctionne.",
      "Elle reçoit de l'énergie électrique.",
      "Elle produit surtout de la lumière, et aussi un peu de chaleur.",
      "La transformation principale attendue ici est donc électrique vers lumineuse."
    ],
    "sci-electricite-1": [
      "Un circuit doit former une boucle fermée pour laisser passer le courant.",
      "Quand l'interrupteur est ouvert, le chemin est coupé.",
      "Le courant ne peut plus circuler.",
      "La lampe ne brille donc pas."
    ],
    "sci-graphique-1": [
      "Un graphique peut être trompeur si on regarde seulement la courbe.",
      "Commence par lire le titre pour savoir ce qui est étudié.",
      "Lis ensuite les axes et les unités.",
      "Après seulement, tu peux décrire ce qui augmente, diminue ou reste stable."
    ],
    "sci-tech-chaines-1": [
      "Dans un objet technique, le capteur sert à recevoir une information.",
      "Il peut détecter une présence, une lumière, une température ou une distance.",
      "L'action finale est plutôt le rôle d'un actionneur.",
      "Ici, la bonne idée est donc détecter une information."
    ]
  };

  const catalog = {
    version: "2.0.0-alpha.1",
    subjects: [
      subject("mathematiques", "Mathématiques", [
        theme("nombres-calculs", "Nombres et calculs", [
          course("math-nombres-relatifs", "Nombres relatifs", "Comparer et calculer avec des nombres positifs et négatifs.", ["Un nombre négatif est plus petit que zéro.", "Pour additionner deux nombres de signes contraires, on soustrait les distances à zéro.", "Le résultat prend le signe du nombre le plus éloigné de zéro."], "(-7) + 3 = -4.", [
            qcm("math-nombres-relatifs-1", "Quel calcul donne -4 ?", ["-7 + 3", "7 + 3", "-7 - 3", "4 - 0"], "-7 + 3", "Compare les distances à zéro : 7 est plus grand que 3, donc le résultat garde le signe moins.", "On calcule 7 - 3 = 4, puis on garde le signe du nombre le plus éloigné de zéro."),
            short("math-nombres-relatifs-2", "Calcule : -5 - 6", "-11", "Soustraire 6 revient à reculer encore de 6 sur la droite graduée.", "-5 - 6 = -11.")
          ]),
          course("math-fractions", "Fractions", "Simplifier, comparer et utiliser des fractions.", ["Une fraction représente un partage.", "Simplifier une fraction, c'est diviser le haut et le bas par le même nombre.", "La valeur ne change pas si on divise le numérateur et le dénominateur par le même nombre."], "18/30 = 3/5 car on divise 18 et 30 par 6.", [
            qcm("math-fractions-1", "Quelle est la forme simplifiée de 21/30 ?", ["7/10", "21/10", "7/30", "30/21"], "7/10", "Cherche un nombre qui divise 21 et 30. Ici, 3 divise les deux.", "21 ÷ 3 = 7 et 30 ÷ 3 = 10, donc 21/30 = 7/10."),
            short("math-fractions-2", "Simplifie la fraction 18/30.", "3/5", "Divise 18 et 30 par leur plus grand diviseur commun : 6.", "18 ÷ 6 = 3 et 30 ÷ 6 = 5."),
            qcm("math-fractions-3", "Quelle fraction est la plus grande : 3/4 ou 5/8 ?", ["3/4", "5/8", "Elles sont égales", "Impossible à savoir"], "3/4", "Mets les deux fractions au même dénominateur : 3/4 devient 6/8.", "3/4 = 6/8, et 6/8 est plus grand que 5/8."),
            short("math-fractions-4", "Calcule : 1/3 + 1/6. Donne le résultat simplifié.", "1/2", "Transforme 1/3 en 2/6, puis additionne les sixièmes.", "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2."),
            qcm("math-fractions-5", "Combien vaut 3/5 de 20 ?", ["12", "8", "15", "60"], "12", "Trouve d'abord 1/5 de 20, puis multiplie par 3.", "1/5 de 20 vaut 4, donc 3/5 de 20 vaut 12.")
          ]),
          course("math-puissances", "Puissances", "Comprendre les écritures avec exposant.", ["Un exposant indique combien de fois on multiplie le même nombre par lui-même.", "3² signifie 3 × 3.", "10³ signifie 10 × 10 × 10."], "5² = 5 × 5 = 25.", [
            qcm("math-puissances-1", "Que vaut 4² ?", ["16", "8", "6", "42"], "16", "4² veut dire 4 × 4, pas 4 × 2.", "4² = 4 × 4 = 16.")
          ]),
          course("math-developpements", "Développements", "Développer une expression avec la distributivité.", ["Développer, c'est supprimer des parenthèses en multipliant.", "On multiplie le nombre devant la parenthèse par chaque terme à l'intérieur.", "Attention aux signes."], "3(x + 2) = 3x + 6.", [
            qcm("math-developpements-1", "Développe : 4(x + 3)", ["4x + 12", "4x + 3", "x + 12", "7x"], "4x + 12", "Multiplie 4 par x, puis 4 par 3.", "4 × x = 4x et 4 × 3 = 12, donc 4(x + 3) = 4x + 12.")
          ]),
          course("math-factorisation", "Factorisation", "Reconnaître un facteur commun.", ["Factoriser, c'est faire apparaître une multiplication.", "On cherche ce qui est commun à plusieurs termes.", "C'est l'opération inverse du développement."], "5x + 5 = 5(x + 1), car 5 est commun.", [
            qcm("math-factorisation-1", "Factorise : 6x + 12", ["6(x + 2)", "6x(12)", "x + 18", "12(x + 6)"], "6(x + 2)", "Cherche ce qui divise 6x et 12 : le facteur commun est 6.", "6x + 12 = 6 × x + 6 × 2 = 6(x + 2).")
          ]),
          course("math-equations", "Équations", "Trouver la valeur de l'inconnue.", ["Une équation est une égalité avec une inconnue, souvent x.", "Résoudre une équation, c'est trouver la valeur qui rend l'égalité vraie.", "Ce qu'on fait à gauche, on le fait aussi à droite."], "x + 5 = 12 donc x = 7.", [
            qcm("math-equations-1", "Résous : x + 4 = 11", ["x = 7", "x = 15", "x = 44", "x = 4"], "x = 7", "Pour enlever +4, on fait -4 des deux côtés.", "x + 4 = 11 donc x = 11 - 4 = 7."),
            short("math-equations-2", "Résous : 3x = 15. Écris la réponse sous la forme x = ...", "x = 5", "Si 3x vaut 15, on divise par 3 pour trouver x.", "3x = 15 donc x = 15 ÷ 3 = 5."),
            short("math-equations-3", "Résous : 2x + 3 = 11. Écris la réponse sous la forme x = ...", "x = 4", "Enlève d'abord 3, puis divise par 2.", "2x + 3 = 11 donc 2x = 8, puis x = 4."),
            qcm("math-equations-4", "Résous : x/5 = 7", ["x = 35", "x = 12", "x = 2", "x = 7/5"], "x = 35", "x est divisé par 5, donc fais l'opération inverse : multiplier par 5.", "x/5 = 7 donc x = 7 × 5 = 35."),
            short("math-equations-5", "Résous : 5x - 2 = 18. Écris la réponse sous la forme x = ...", "x = 4", "Ajoute 2 aux deux côtés, puis divise par 5.", "5x - 2 = 18 donc 5x = 20, puis x = 4.")
          ]),
          course("math-arithmetique", "Arithmétique", "Utiliser les diviseurs, multiples et nombres premiers.", ["Un diviseur partage un nombre sans reste.", "Un multiple est le résultat d'une multiplication.", "Un nombre premier a exactement deux diviseurs : 1 et lui-même."], "12 est un multiple de 3, car 3 × 4 = 12.", [
            qcm("math-arithmetique-1", "Quel nombre est un diviseur de 24 ?", ["6", "5", "7", "10"], "6", "Un diviseur doit partager 24 sans reste.", "24 ÷ 6 = 4, donc 6 est un diviseur de 24.")
          ])
        ]),
        theme("donnees-fonctions", "Données, fonctions et proportionnalité", [
          course("math-proportionnalite", "Proportionnalité", "Reconnaître et utiliser une situation proportionnelle.", ["Deux grandeurs sont proportionnelles si on passe toujours de l'une à l'autre avec le même multiplicateur.", "Un tableau proportionnel garde le même coefficient.", "Le produit en croix aide quand trois valeurs sont connues."], "Si 2 cahiers coûtent 6 €, alors 5 cahiers coûtent 15 €.", [
            qcm("math-proportionnalite-1", "Si 4 kg coûtent 12 €, combien coûtent 6 kg au même prix ?", ["18 €", "16 €", "24 €", "8 €"], "18 €", "Trouve d'abord le prix de 1 kg : 12 ÷ 4 = 3 €.", "1 kg coûte 3 €, donc 6 kg coûtent 18 €."),
            short("math-proportionnalite-2", "Trois cahiers coûtent 7,50 €. Combien coûtent 8 cahiers ?", "20 €", "Cherche le prix d'un cahier, puis multiplie par 8.", "Un cahier coûte 7,50 ÷ 3 = 2,50 €. Huit cahiers coûtent 8 × 2,50 € = 20 €."),
            qcm("math-proportionnalite-3", "Une recette utilise 300 g de farine pour 4 personnes. Combien faut-il pour 6 personnes ?", ["450 g", "400 g", "500 g", "1800 g"], "450 g", "Passe par une personne : 300 ÷ 4 = 75 g.", "Pour 6 personnes, il faut 75 × 6 = 450 g."),
            qcm("math-proportionnalite-4", "Une voiture parcourt 120 km en 2 h. Quelle est sa vitesse moyenne ?", ["60 km/h", "240 km/h", "122 km/h", "118 km/h"], "60 km/h", "Une vitesse moyenne en km/h correspond à la distance parcourue en 1 heure.", "120 km en 2 h, c'est 120 ÷ 2 = 60 km en 1 h.")
          ]),
          course("math-pourcentages", "Pourcentages", "Calculer une partie ou une évolution en pourcentage.", ["Un pourcentage est une fraction sur 100.", "25 % signifie 25 sur 100, donc un quart.", "Pour calculer p % d'une quantité, on multiplie par p/100."], "20 % de 50 = 10.", [
            qcm("math-pourcentages-1", "Combien vaut 10 % de 80 ?", ["8", "10", "18", "800"], "8", "10 %, c'est un dixième.", "80 ÷ 10 = 8."),
            qcm("math-pourcentages-2", "Combien vaut 25 % de 48 ?", ["12", "24", "25", "4"], "12", "25 %, c'est un quart.", "48 ÷ 4 = 12."),
            short("math-pourcentages-3", "Un article coûte 50 € et baisse de 20 %. Quel est son nouveau prix ?", "40 €", "Calcule la réduction, puis enlève-la au prix de départ.", "20 % de 50 € vaut 10 €. Le nouveau prix est 50 € - 10 € = 40 €.")
          ]),
          course("math-probabilites", "Probabilités", "Calculer une chance de réussite simple.", ["Une probabilité est comprise entre 0 et 1.", "On compte les cas favorables et les cas possibles.", "Probabilité = cas favorables / cas possibles."], "Avec 6 boules dont 4 rouges, la probabilité de tirer une rouge est 4/6 = 2/3.", [
            qcm("math-probabilites-1", "Une urne contient 8 boules dont 2 bleues. Quelle est la probabilité de tirer une boule bleue ?", ["1/4", "2/10", "6/8", "8/2"], "1/4", "Il y a 2 cas favorables sur 8 cas possibles. Simplifie 2/8.", "2/8 = 1/4.")
          ]),
          course("math-statistiques", "Statistiques", "Lire moyenne, médiane et étendue.", ["La moyenne répartit les valeurs comme si elles étaient toutes égales.", "La médiane coupe une série ordonnée en deux parties de même taille.", "L'étendue est la différence entre la plus grande et la plus petite valeur."], "Pour 4, 7, 9, la moyenne vaut (4 + 7 + 9) ÷ 3.", [
            qcm("math-statistiques-1", "Quelle est l'étendue de la série 3 ; 8 ; 10 ; 12 ?", ["9", "12", "3", "33"], "9", "L'étendue = plus grande valeur - plus petite valeur.", "12 - 3 = 9.")
          ]),
          course("math-fonctions", "Fonctions", "Lire une image ou un antécédent.", ["Une fonction associe un résultat à un nombre de départ.", "L'image de x est le résultat obtenu à partir de x.", "Un antécédent est un nombre de départ qui donne un résultat demandé."], "Si f(x) = 2x + 1, alors f(3) = 7.", [
            qcm("math-fonctions-1", "Si f(x) = 2x + 5, quelle est l'image de 4 ?", ["13", "9", "8", "20"], "13", "Remplace x par 4 dans la formule.", "f(4) = 2 × 4 + 5 = 13."),
            qcm("math-fonctions-2", "Avec f(x) = 2x + 1, quel est un antécédent de 9 ?", ["4", "9", "10", "5"], "4", "Cherche le nombre qui donne 9 quand on le remplace dans 2x + 1.", "2 × 4 + 1 = 9, donc 4 est un antécédent de 9.")
          ]),
          course("math-fonctions-affines", "Fonctions affines", "Comprendre une formule de la forme ax + b.", ["Une fonction affine s'écrit f(x) = ax + b.", "a indique comment la valeur change.", "b est la valeur obtenue quand x = 0."], "f(x) = 3x - 2 est affine avec a = 3 et b = -2.", [
            qcm("math-fonctions-affines-1", "Pour f(x) = 3x - 2, quelle est l'image de 4 ?", ["10", "12", "14", "3"], "10", "Remplace x par 4 : 3 × 4 - 2.", "3 × 4 - 2 = 12 - 2 = 10."),
            short("math-fonctions-affines-2", "Pour f(x) = -2x + 6, calcule f(3).", "0", "Remplace x par 3, puis respecte les signes.", "f(3) = -2 × 3 + 6 = -6 + 6 = 0.")
          ])
        ]),
        theme("geometrie", "Géométrie", [
          course("math-pythagore", "Théorème de Pythagore", "Calculer une longueur dans un triangle rectangle.", ["Pythagore s'utilise seulement dans un triangle rectangle.", "L'hypoténuse est le côté opposé à l'angle droit.", "Dans un triangle rectangle, hypoténuse² = côté² + côté²."], "Si les deux petits côtés valent 3 cm et 4 cm, alors l'hypoténuse vaut 5 cm.", [
            qcm("math-pythagore-1", "Dans un triangle rectangle, quel côté est l'hypoténuse ?", ["Le côté opposé à l'angle droit", "Le plus petit côté", "Le côté horizontal", "Un côté choisi au hasard"], "Le côté opposé à l'angle droit", "Cherche l'angle droit : l'hypoténuse est toujours en face.", "L'hypoténuse est le plus grand côté et elle est opposée à l'angle droit."),
            short("math-pythagore-2", "Un triangle rectangle a deux petits côtés de 6 cm et 8 cm. Quelle est la longueur de l'hypoténuse ?", "10", "Calcule 6² + 8² = 36 + 64 = 100, puis cherche le nombre dont le carré vaut 100.", "L'hypoténuse mesure 10 cm."),
            qcm("math-pythagore-3", "Un triangle rectangle a une hypoténuse de 13 cm et un côté de 5 cm. Quelle est la longueur de l'autre côté ?", ["12 cm", "18 cm", "8 cm", "14 cm"], "12 cm", "Quand on cherche un petit côté, on soustrait les carrés : 13² - 5².", "13² - 5² = 169 - 25 = 144, donc le côté vaut 12 cm."),
            qcm("math-pythagore-4", "Un triangle de côtés 6 cm, 8 cm et 10 cm est-il rectangle ?", ["Oui", "Non", "Impossible à savoir", "Seulement s'il est isocèle"], "Oui", "Compare 10² avec 6² + 8².", "6² + 8² = 100 et 10² = 100, donc le triangle est rectangle."),
            short("math-pythagore-5", "Une échelle de 5 m est posée contre un mur. Son pied est à 3 m du mur. À quelle hauteur arrive-t-elle ?", "4", "L'échelle est l'hypoténuse. Cherche le côté manquant avec 5² - 3².", "hauteur² = 25 - 9 = 16, donc la hauteur vaut 4 m.")
          ]),
          course("math-thales", "Théorème de Thalès", "Utiliser des droites parallèles pour calculer une longueur.", ["Thalès s'utilise avec deux droites sécantes coupées par des droites parallèles.", "Les longueurs correspondantes sont proportionnelles.", "Il faut repérer les côtés qui se correspondent."], "Si un petit triangle est deux fois plus petit que le grand, toutes ses longueurs sont deux fois plus petites.", [
            qcm("math-thales-1", "Dans une configuration de Thalès, que faut-il vérifier en premier ?", ["Que deux droites sont parallèles", "Que le triangle est rectangle", "Que les angles valent 90°", "Que les longueurs sont égales"], "Que deux droites sont parallèles", "Thalès repose sur des droites parallèles. Sans parallèles, on ne l'utilise pas.", "On vérifie d'abord les droites parallèles, puis on écrit les rapports de longueurs."),
            qcm("math-thales-2", "Dans une configuration de Thalès, un côté de 3 cm correspond à 6 cm. Un autre petit côté mesure 4 cm. Quelle est la longueur correspondante dans le grand triangle ?", ["8 cm", "7 cm", "12 cm", "2 cm"], "8 cm", "Le passage de 3 cm à 6 cm multiplie par 2.", "On multiplie aussi 4 cm par 2, donc la longueur vaut 8 cm."),
            qcm("math-thales-3", "Si deux rapports de longueurs correspondantes sont égaux, cela peut servir à montrer que deux droites sont...", ["parallèles", "perpendiculaires", "égales", "sécantes uniquement"], "parallèles", "C'est la réciproque de Thalès : des rapports égaux peuvent prouver le parallélisme.", "La réciproque du théorème de Thalès sert à démontrer que deux droites sont parallèles.")
          ]),
          course("math-trigonometrie", "Trigonométrie", "Utiliser sinus, cosinus et tangente dans un triangle rectangle.", ["La trigonométrie s'utilise dans un triangle rectangle.", "cosinus = adjacent / hypoténuse.", "sinus = opposé / hypoténuse.", "tangente = opposé / adjacent."], "Pour un angle donné, le côté adjacent touche l'angle et n'est pas l'hypoténuse.", [
            qcm("math-trigonometrie-1", "Dans un triangle rectangle, le cosinus d'un angle utilise...", ["adjacent / hypoténuse", "opposé / hypoténuse", "hypoténuse / adjacent", "opposé / adjacent"], "adjacent / hypoténuse", "Retenir CAH : Cosinus = Adjacent / Hypoténuse.", "Le cosinus compare le côté adjacent à l'hypoténuse.")
          ]),
          course("math-transformations", "Transformations", "Reconnaître symétrie, translation, rotation et homothétie.", ["Une translation fait glisser une figure.", "Une rotation fait tourner une figure autour d'un centre.", "Une symétrie retourne une figure comme dans un miroir.", "Une homothétie agrandit ou réduit une figure."], "Si une figure garde la même orientation et se déplace, c'est une translation.", [
            qcm("math-transformations-1", "Quelle transformation fait tourner une figure autour d'un point ?", ["Une rotation", "Une translation", "Une symétrie axiale", "Une réduction"], "Une rotation", "Le mot tourner doit faire penser à rotation.", "Une rotation fait tourner tous les points autour d'un centre.")
          ]),
          course("math-volume", "Volumes", "Calculer ou utiliser un volume.", ["Un volume mesure l'espace occupé par un solide.", "Les unités courantes sont cm³, m³, L et mL.", "Il faut bien identifier la formule du solide."], "Le volume d'un pavé droit vaut longueur × largeur × hauteur.", [
            qcm("math-volume-1", "Quel est le volume d'un pavé droit de 5 cm, 3 cm et 2 cm ?", ["30 cm³", "10 cm²", "15 cm³", "25 cm"], "30 cm³", "Multiplie les trois dimensions.", "5 × 3 × 2 = 30 cm³.")
          ]),
          course("math-echelles", "Échelles", "Passer d'une distance sur un plan à une distance réelle.", ["Une échelle indique le lien entre le dessin et la réalité.", "À l'échelle 1:1000, 1 cm sur le plan représente 1000 cm en réalité.", "Après le calcul, il faut souvent convertir les unités."], "À l'échelle 1:1000, 2 cm représentent 2000 cm, donc 20 m.", [
            qcm("math-echelles-1", "À l'échelle 1:1000, 2 cm sur le plan représentent...", ["20 m", "200 m", "2 m", "1000 m"], "20 m", "1 cm représente 1000 cm, donc 2 cm représentent 2000 cm. Convertis ensuite en mètres.", "2000 cm = 20 m.")
          ])
        ]),
        theme("algorithmique", "Algorithmique et tableur", [
          course("math-algorithmique-tableur", "Algorithmique et tableur", "Suivre un programme de calcul ou une formule de tableur.", ["Un algorithme donne des instructions dans un ordre précis.", "Dans un tableur, une formule commence souvent par =.", "Il faut remplacer les valeurs puis respecter les priorités de calcul."], "Si A1 contient 4, la formule =A1*3 donne 12.", [
            qcm("math-tableur-1", "Dans un tableur, que signifie la formule =A1+5 si A1 vaut 7 ?", ["12", "75", "A15", "5"], "12", "Remplace A1 par sa valeur : 7.", "A1 + 5 devient 7 + 5 = 12.")
          ])
        ])
      ]),
      subject("francais", "Français", [
        theme("langue", "Langue", [
          course("fr-nature-fonction", "Nature et fonction", "Distinguer ce qu'est un mot et son rôle dans la phrase.", ["La nature d'un mot ne change pas : nom, verbe, adjectif, pronom.", "La fonction dépend de la phrase : sujet, complément, attribut.", "Pour trouver la fonction, on regarde le rôle du mot."], "Dans « Le chat dort », « chat » est un nom. Sa fonction est sujet.", [
            qcm("fr-nature-fonction-1", "Dans « Les élèves travaillent », quelle est la fonction de « Les élèves » ?", ["Sujet", "Verbe", "Complément d'objet", "Adjectif"], "Sujet", "Demande-toi : qui travaille ?", "« Les élèves » indique qui fait l'action : c'est le sujet.")
          ]),
          course("fr-accords", "Accords", "Accorder correctement les mots dans une phrase.", ["Un adjectif s'accorde avec le nom qu'il complète.", "Un verbe s'accorde avec son sujet.", "Il faut repérer le mot qui commande l'accord."], "« Les maisons blanches » : blanches est au féminin pluriel.", [
            qcm("fr-accords-1", "Quelle phrase est correcte ?", ["Les filles sont arrivées.", "Les filles sont arrivé.", "Les filles est arrivées.", "Les fille sont arrivées."], "Les filles sont arrivées.", "Le sujet est féminin pluriel : les filles.", "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet.")
          ]),
          course("fr-reecriture", "Réécriture", "Transformer une phrase sans changer son sens.", ["Lis la consigne jusqu'au bout.", "Repère les mots qui doivent changer.", "Vérifie les accords après la transformation."], "Mettre « il parle » au pluriel donne « ils parlent ».", [
            qcm("fr-reecriture-1", "Mets au pluriel : « Elle finit son devoir. »", ["Elles finissent leurs devoirs.", "Elles finit son devoir.", "Elle finissent leur devoir.", "Ils finit leurs devoirs."], "Elles finissent leurs devoirs.", "Le sujet devient pluriel, donc le verbe et le déterminant doivent suivre.", "Elle devient elles ; finit devient finissent ; son devient leurs.")
          ]),
          course("fr-conjugaison", "Conjugaison", "Reconnaître et utiliser les temps importants.", ["Le temps situe l'action dans le passé, le présent ou le futur.", "Le sujet commande la terminaison du verbe.", "Il faut reconnaître le groupe du verbe."], "Au présent, « nous finissons » prend -issons.", [
            qcm("fr-conjugaison-1", "Quelle forme est au futur ?", ["Je lirai", "Je lis", "Je lisais", "J'ai lu"], "Je lirai", "Le futur annonce une action qui aura lieu plus tard.", "« Je lirai » est au futur simple.")
          ])
        ]),
        theme("lecture-expression", "Lecture et expression", [
          course("fr-comprehension", "Compréhension de texte", "Répondre en utilisant des indices précis du texte.", ["Lis la question avant de chercher.", "Repère une phrase utile dans le texte.", "Réponds avec tes mots et une preuve."], "Pour trouver le sentiment d'un personnage, cherche ses paroles, ses gestes ou une description.", [
            qcm("fr-comprehension-1", "Pour justifier une réponse sur un texte, il faut surtout...", ["citer ou expliquer un indice du texte", "répondre au hasard", "raconter tout le texte", "changer la question"], "citer ou expliquer un indice du texte", "Une justification doit s'appuyer sur le texte.", "On prouve sa réponse avec un passage ou un détail précis.")
          ]),
          course("fr-figures-style", "Figures de style", "Reconnaître quelques effets d'écriture.", ["Une comparaison utilise souvent comme, tel, pareil à.", "Une métaphore rapproche deux idées sans outil de comparaison.", "Une hyperbole exagère une idée."], "« Il est fort comme un lion » est une comparaison.", [
            qcm("fr-figures-style-1", "Dans « rapide comme l'éclair », on reconnaît...", ["une comparaison", "une métaphore", "une énumération", "une antithèse"], "une comparaison", "Le mot « comme » est un indice très fort.", "Il y a un outil de comparaison : « comme ».")
          ]),
          course("fr-redaction", "Rédaction", "Construire une réponse ou un paragraphe organisé.", ["Une réponse développée commence par une idée claire.", "On ajoute un exemple ou une preuve.", "On termine par une phrase qui répond bien à la question."], "Je donne mon idée, puis je la justifie avec un exemple précis.", [
            qcm("fr-redaction-1", "Dans un paragraphe argumenté, après l'idée principale, il faut ajouter...", ["une justification ou un exemple", "un titre décoratif", "une phrase sans lien", "une liste de mots"], "une justification ou un exemple", "Une idée seule ne suffit pas : il faut la soutenir.", "Le correcteur attend une idée expliquée et justifiée.")
          ])
        ])
      ]),
      subject("histoire-geo-emc", "Histoire-Géo EMC", [
        theme("histoire", "Histoire", [
          course("hist-seconde-guerre", "Seconde Guerre mondiale", "Comprendre les grandes étapes et les violences de la guerre.", ["La guerre dure de 1939 à 1945.", "C'est une guerre totale qui touche les soldats et les civils.", "Le génocide des Juifs et des Tziganes est un crime de masse organisé par les nazis."], "Le débarquement de Normandie a lieu le 6 juin 1944.", [
            qcm("hist-seconde-guerre-1", "Quelle date marque le début de la Seconde Guerre mondiale ?", ["1939", "1914", "1945", "1789"], "1939", "La guerre commence avec l'invasion de la Pologne par l'Allemagne nazie.", "La Seconde Guerre mondiale commence en 1939.")
          ]),
          course("hist-guerre-froide", "Guerre froide", "Comprendre l'opposition entre deux blocs.", ["Après 1945, le monde se divise entre le bloc américain et le bloc soviétique.", "La guerre froide est une rivalité forte, mais sans guerre directe entre les deux grandes puissances.", "Berlin est un symbole important de cette opposition."], "Le mur de Berlin est construit en 1961 et tombe en 1989.", [
            qcm("hist-guerre-froide-1", "Pendant la guerre froide, les deux grands blocs sont dirigés par...", ["les États-Unis et l'URSS", "la France et l'Espagne", "l'Italie et le Japon", "la Chine et le Brésil"], "les États-Unis et l'URSS", "Cherche les deux superpuissances après 1945.", "Les États-Unis dirigent le bloc occidental et l'URSS le bloc communiste.")
          ]),
          course("hist-reperes", "Repères historiques", "Mémoriser les dates essentielles du brevet.", ["Un repère associe une date et un événement.", "Il faut savoir placer l'événement dans le bon siècle.", "Les repères servent aussi dans les développements construits."], "1789 correspond au début de la Révolution française.", [
            qcm("hist-reperes-1", "1789 correspond à...", ["la Révolution française", "la chute du mur de Berlin", "la Première Guerre mondiale", "la naissance de l'Union européenne"], "la Révolution française", "1789 est un repère très fréquent.", "1789 marque le début de la Révolution française.")
          ])
        ]),
        theme("geographie-emc", "Géographie et EMC", [
          course("geo-metropoles", "Métropoles", "Comprendre le rôle des grandes villes.", ["Une métropole concentre population, emplois, services et décisions.", "Elle attire, mais elle peut aussi créer des inégalités.", "Les métropoles sont connectées au reste du monde."], "Paris est une métropole car elle concentre des pouvoirs politiques, économiques et culturels.", [
            qcm("geo-metropoles-1", "Une métropole est surtout...", ["une grande ville avec beaucoup de fonctions", "un petit village isolé", "une montagne", "une mer"], "une grande ville avec beaucoup de fonctions", "Pense aux emplois, aux transports, aux décisions et aux services.", "Une métropole concentre plusieurs fonctions importantes.")
          ]),
          course("geo-espaces-productifs", "Espaces productifs", "Identifier les espaces agricoles, industriels et de services.", ["Un espace productif est un espace aménagé pour produire.", "Il peut être agricole, industriel ou tertiaire.", "Les transports et les villes influencent ces espaces."], "Une zone industrialo-portuaire est un espace productif industriel lié au port.", [
            qcm("geo-espaces-productifs-1", "Un centre commercial appartient surtout au secteur...", ["tertiaire", "primaire", "secondaire", "militaire"], "tertiaire", "Le tertiaire regroupe les services et le commerce.", "Un centre commercial vend des services et des produits : c'est le tertiaire.")
          ]),
          course("emc-valeurs", "Valeurs de la République", "Connaître les valeurs et principes républicains.", ["La devise française est Liberté, Égalité, Fraternité.", "La laïcité garantit la liberté de conscience.", "Les citoyens ont des droits et des devoirs."], "La liberté est une valeur de la République française.", [
            qcm("emc-valeurs-1", "Une valeur de la République française est...", ["la liberté", "la vitesse", "la métropole", "la masse"], "la liberté", "Pense à la devise : Liberté, Égalité, Fraternité.", "La liberté fait partie de la devise républicaine.")
          ]),
          course("hist-methode-document", "Analyser un document", "Prélever une information et l'expliquer.", ["Commence par identifier la nature du document.", "Lis la question pour savoir quoi chercher.", "Relie l'information du document à une connaissance du cours."], "Une affiche de propagande doit être décrite, puis expliquée avec le contexte historique.", [
            qcm("hist-document-1", "Avant d'utiliser un document, il faut d'abord repérer...", ["sa nature, sa date et son auteur si possible", "sa couleur préférée", "le nombre de lignes seulement", "le dernier mot"], "sa nature, sa date et son auteur si possible", "Présenter un document aide à comprendre son contexte.", "Nature, date, auteur et sujet donnent les premiers repères.")
          ])
        ])
      ]),
      subject("sciences", "Sciences", [
        theme("svt", "SVT", [
          course("sci-svt-organisme", "Corps humain et effort", "Relier effort, respiration et circulation.", ["Pendant un effort, les muscles ont besoin de plus de dioxygène.", "Le rythme cardiaque et la respiration augmentent.", "Le sang transporte le dioxygène vers les organes."], "Après une course, on respire plus vite car les muscles demandent plus d'énergie.", [
            qcm("sci-svt-effort-1", "Pendant un effort, le rythme cardiaque...", ["augmente", "s'arrête", "ne change jamais", "devient nul"], "augmente", "Les muscles ont besoin de plus de dioxygène.", "Le cœur bat plus vite pour apporter plus de sang aux muscles.")
          ]),
          course("sci-svt-environnement", "Environnement", "Comprendre les relations entre êtres vivants et milieu.", ["Un écosystème regroupe un milieu et les êtres vivants qui y vivent.", "Les êtres vivants dépendent souvent les uns des autres.", "Une action humaine peut modifier un équilibre."], "La pollution d'une rivière peut diminuer le nombre d'espèces qui y vivent.", [
            qcm("sci-environnement-1", "Un écosystème contient...", ["un milieu et des êtres vivants", "seulement des roches", "seulement de l'air", "une seule espèce obligatoire"], "un milieu et des êtres vivants", "Le mot écosystème relie un lieu et ce qui y vit.", "Un écosystème associe un milieu et des êtres vivants.")
          ])
        ]),
        theme("physique-chimie", "Physique-chimie", [
          course("sci-energie", "Énergie", "Identifier des formes et transformations d'énergie.", ["L'énergie peut être électrique, thermique, chimique, lumineuse ou mécanique.", "Un appareil transforme souvent une forme d'énergie en une autre.", "On ne crée pas l'énergie à partir de rien : elle se transforme."], "Une lampe transforme de l'énergie électrique en énergie lumineuse et thermique.", [
            qcm("sci-energie-1", "Une lampe transforme surtout l'énergie électrique en énergie...", ["lumineuse", "nucléaire", "sonore uniquement", "gravitationnelle"], "lumineuse", "Observe ce que produit une lampe : de la lumière.", "La lampe produit de la lumière, et aussi un peu de chaleur.")
          ]),
          course("sci-electricite", "Électricité", "Comprendre un circuit électrique simple.", ["Pour qu'une lampe brille, le circuit doit être fermé.", "Un interrupteur ouvre ou ferme le circuit.", "Le courant circule seulement si le chemin est complet."], "Quand l'interrupteur est ouvert, la lampe est éteinte.", [
            qcm("sci-electricite-1", "Si un interrupteur est ouvert, la lampe...", ["ne brille pas", "brille plus fort", "change de couleur", "explose toujours"], "ne brille pas", "Ouvert signifie que le chemin du courant est coupé.", "Le courant ne circule pas dans un circuit ouvert.")
          ]),
          course("sci-donnees", "Lire un graphique scientifique", "Lire un titre, des axes, des unités et une tendance.", ["Un graphique se lit avec son titre.", "Chaque axe indique une grandeur et une unité.", "La tendance dit si la grandeur augmente, diminue ou reste stable."], "Si la courbe monte quand le temps augmente, la grandeur étudiée augmente.", [
            qcm("sci-graphique-1", "Avant de conclure avec un graphique, il faut d'abord lire...", ["le titre, les axes et les unités", "seulement la couleur", "la dernière lettre", "le nom du fichier"], "le titre, les axes et les unités", "Sans les axes, on ne sait pas quelle grandeur est étudiée.", "Titre, axes et unités permettent de comprendre ce que le graphique montre.")
          ])
        ]),
        theme("technologie", "Technologie", [
          course("sci-technologie-chaines", "Chaînes d'information et d'énergie", "Comprendre comment un objet technique capte, traite et agit.", ["Un capteur reçoit une information.", "Un programme ou une carte traite l'information.", "Un actionneur produit une action : tourner, éclairer, sonner."], "Dans une barrière automatique, le capteur détecte la voiture puis le moteur lève la barrière.", [
            qcm("sci-tech-chaines-1", "Dans un objet technique, un capteur sert à...", ["détecter une information", "produire le son final", "remplacer l'énergie", "décorer l'objet"], "détecter une information", "Le capteur est l'élément qui observe ou mesure.", "Un capteur reçoit une information du milieu extérieur.")
          ])
        ])
      ])
    ]
  };

  function subject(id, label, themes) {
    return { id, label, themes };
  }

  function theme(id, label, courses) {
    return { id, label, courses };
  }

  function course(id, title, goal, keyIdeas, example, exercises) {
    return {
      id,
      title,
      goal,
      keyIdeas,
      example,
      exercises: exercises.map((exercise) => ({ courseId: id, ...exercise }))
    };
  }

  function qcm(id, prompt, choices, answer, helpText, explanation) {
    return {
      id,
      type: "qcm",
      prompt,
      choices,
      answer,
      helpText,
      helpSteps: helpDetails[id] || [helpText],
      explanation
    };
  }

  function short(id, prompt, answer, helpText, explanation) {
    return {
      id,
      type: "short_answer",
      prompt,
      answer,
      acceptedAnswers: [answer],
      helpText,
      helpSteps: helpDetails[id] || [helpText],
      explanation
    };
  }

  window.BREVET_V2_CATALOG = catalog;
})();
