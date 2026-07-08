(function () {
  const catalog = window.BREVET_V2_CATALOG;
  if (!catalog) return;

  addMissingCourses();

  const lessons = {
    "math-nombres-relatifs": {
      "prerequisites": [
        "Savoir placer 0, des nombres positifs et des nombres négatifs sur une droite graduée.",
        "Comprendre qu'un nombre négatif est plus petit que 0."
      ],
      "understand": [
        "Un nombre relatif peut être positif, négatif ou nul. Il sert à parler d'une température sous zéro, d'une dette, d'une altitude, d'un score ou d'un déplacement."
      ],
      "words": [
        "nombre positif",
        "nombre négatif",
        "opposé",
        "droite graduée",
        "distance à zéro"
      ],
      "method": [
        "Imagine une droite graduée : à droite de 0, les nombres sont positifs ; à gauche de 0, ils sont négatifs.",
        "Ajouter un nombre positif, c'est avancer vers la droite.",
        "Soustraire un nombre positif, c'est reculer vers la gauche.",
        "Soustraire un nombre négatif revient à ajouter son opposé : 4 - (-3) = 4 + 3.",
        "Avant de calculer, demande-toi si tu te rapproches de 0 ou si tu t'en éloignes."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>Exemple 1 :</strong> -5 - 6.</p>\n        <p>Tu pars de -5. Le signe <strong>- 6</strong> veut dire que tu recules encore de 6 unités vers la gauche.</p>\n        <p>Tu arrives à <strong>-11</strong>. Donc -5 - 6 = -11.</p>\n        <p><strong>Exemple 2 :</strong> -5 + 6.</p>\n        <p>Cette fois, tu avances de 6 unités vers la droite : -5, -4, -3, -2, -1, 0, 1. Donc -5 + 6 = 1.</p>\n      </div>",
      "traps": [
        "Confondre -5 - 6 avec -5 + 6.",
        "Oublier que -11 est plus petit que -4.",
        "Voir deux signes et calculer trop vite sans traduire le déplacement."
      ],
      "remember": [
        "Sur une droite graduée, ajouter fait avancer vers la droite et soustraire fait reculer vers la gauche."
      ]
    },
    "math-fractions": {
      "prerequisites": [
        "Savoir diviser un entier par un entier simple.",
        "Connaître les tables de multiplication pour simplifier une fraction."
      ],
      "understand": [
        "Une fraction représente une part d'un tout. Le nombre du bas indique en combien de parts on partage, le nombre du haut indique combien de parts on prend."
      ],
      "words": [
        "numérateur",
        "dénominateur",
        "fraction égale",
        "simplifier"
      ],
      "method": [
        "Lis d'abord ce que représente la fraction : une part, un partage, un quotient ou une proportion.",
        "Pour simplifier, cherche un nombre qui divise le numérateur et le dénominateur.",
        "Pour comparer ou additionner, mets souvent les fractions au même dénominateur.",
        "Pour calculer une fraction d'une quantité, divise la quantité par le dénominateur puis multiplie par le numérateur.",
        "Relis toujours la question : simplifier, comparer, additionner ou calculer une part."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>Simplifier 18/30 :</strong> on cherche un nombre qui divise 18 et 30.</p>\n        <p>6 divise les deux nombres : 18 ÷ 6 = 3 et 30 ÷ 6 = 5.</p>\n        <p>Donc 18/30 = <strong>3/5</strong>.</p>\n        <p><strong>Calculer 3/5 de 20 :</strong> on fait 20 ÷ 5 = 4, puis 4 × 3 = <strong>12</strong>.</p>\n      </div>",
      "traps": [
        "Simplifier seulement le numérateur.",
        "Additionner les dénominateurs.",
        "Lire 3/5 de 20 comme 3 ÷ 5 ÷ 20.",
        "Oublier qu'une fraction peut être plus grande que 1."
      ],
      "remember": [
        "Une fraction se manipule toujours en respectant le numérateur et le dénominateur : on ne change pas seulement le haut ou seulement le bas."
      ]
    },
    "math-puissances": {
      "prerequisites": [
        "Savoir multiplier plusieurs nombres.",
        "Connaître les priorités de calcul : les puissances se calculent avant les additions."
      ],
      "understand": [
        "Une puissance est une écriture courte pour répéter une multiplication. L'exposant est le petit nombre écrit en haut : il indique combien de fois on multiplie par la même base."
      ],
      "words": [
        "puissance",
        "exposant",
        "carré",
        "cube",
        "écriture scientifique"
      ],
      "method": [
        "Lis d'abord la base : c'est le grand nombre.",
        "Lis ensuite l'exposant : c'est le petit nombre en haut.",
        "Remplace la puissance par une multiplication si tu hésites.",
        "Calcule les puissances avant les additions et soustractions.",
        "Avec 10, l'exposant positif donne le nombre de zéros : 10³ = 1000."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>4²</strong> signifie 4 × 4. Donc 4² = 16.</p>\n        <p><strong>4³</strong> signifie 4 × 4 × 4. Donc 4³ = 64.</p>\n        <p><strong>10⁴</strong> signifie 10 × 10 × 10 × 10 = 10 000.</p>\n        <p>Attention : <strong>5²</strong> ne veut pas dire 5 × 2. Cela veut dire 5 × 5.</p>\n      </div>",
      "traps": [
        "Confondre 5² avec 5 × 2.",
        "Oublier les priorités de calcul quand une puissance est dans une expression.",
        "Oublier les parenthèses : (-3)² = 9 mais -3² = -9."
      ],
      "remember": [
        "L'exposant indique une multiplication répétée, pas une multiplication par l'exposant."
      ]
    },
    "math-developpements": {
      "prerequisites": [
        "Savoir que 4x signifie 4 × x.",
        "Savoir multiplier un nombre positif ou négatif par chaque terme d'une parenthèse."
      ],
      "understand": [
        "Développer, c'est enlever des parenthèses en multipliant chaque terme à l'intérieur. On transforme une multiplication avec parenthèses en addition ou soustraction."
      ],
      "words": [
        "développer",
        "parenthèse",
        "terme",
        "distributivité"
      ],
      "method": [
        "Repère le facteur devant la parenthèse : c'est lui qui va multiplier tout ce qui est dedans.",
        "Multiplie ce facteur par le premier terme de la parenthèse.",
        "Multiplie aussi ce facteur par le deuxième terme : il ne faut pas l'oublier.",
        "Garde le signe de chaque terme. Si le facteur est négatif, le signe peut changer.",
        "Réduis seulement les termes semblables : les x avec les x, les nombres avec les nombres."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>Cas simple :</strong> 4(x + 3)</p>\n        <p>Le 4 multiplie x et aussi 3 : 4 × x + 4 × 3 = <strong>4x + 12</strong>.</p>\n        <p><strong>Cas avec un signe négatif :</strong> -3(x + 2)</p>\n        <p>Le -3 multiplie x : -3 × x = <strong>-3x</strong>.</p>\n        <p>Le -3 multiplie aussi 2 : -3 × 2 = <strong>-6</strong>.</p>\n        <p>Donc -3(x + 2) = <strong>-3x - 6</strong>.</p>\n      </div>",
      "traps": [
        "Multiplier seulement le premier terme.",
        "Oublier le signe moins devant une parenthèse.",
        "Écrire -3(x + 2) = -3x + 6 au lieu de -3x - 6.",
        "Ajouter 4 et x alors que 4x signifie 4 × x."
      ],
      "remember": [
        "Développer, c'est distribuer le facteur à tous les termes de la parenthèse, avec les signes."
      ]
    },
    "math-factorisation": {
      "prerequisites": [
        "Savoir reconnaître une multiplication cachée, par exemple 12 = 6 × 2.",
        "Savoir développer une expression pour vérifier le résultat."
      ],
      "understand": [
        "Factoriser, c'est transformer une addition ou une soustraction en multiplication. On fait l'inverse du développement : on cherche un morceau commun, puis on le met devant une parenthèse."
      ],
      "words": [
        "facteur commun",
        "parenthèse",
        "forme factorisée",
        "forme développée"
      ],
      "method": [
        "Découpe l'expression en termes. Dans 6x + 12, les deux termes sont 6x et 12.",
        "Cherche ce qui apparaît dans tous les termes. Ici, 6 est commun car 6x = 6 × x et 12 = 6 × 2.",
        "Écris le facteur commun devant une parenthèse : 6(...).",
        "Dans la parenthèse, écris ce qui reste quand tu as enlevé le facteur commun. Dans 6x, il reste x. Dans 12, il reste 2.",
        "Garde le signe entre les termes : ici c'est +, donc on obtient 6(x + 2).",
        "Vérifie en redéveloppant : 6 × x + 6 × 2 = 6x + 12. Si on retrouve le départ, c'est bon."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>Expression de départ :</strong> <span class=\"math-term\"><span class=\"factor-color\">6</span>x</span> + <span class=\"math-term\"><span class=\"factor-color\">6</span> × 2</span></p>\n        <p><strong>1. Je repère le facteur commun.</strong> Le nombre <span class=\"factor-color\">6</span> est présent dans les deux morceaux : <span class=\"factor-color\">6</span>x et 12.</p>\n        <p><strong>2. Je mets ce facteur devant la parenthèse.</strong> J'écris <span class=\"factor-color\">6</span>( ... ).</p>\n        <p><strong>3. J'écris ce qui reste dans la parenthèse.</strong> Dans <span class=\"factor-color\">6</span>x, il reste x. Dans 12 = <span class=\"factor-color\">6</span> × 2, il reste 2.</p>\n        <p><strong>Résultat :</strong> 6x + 12 = <span class=\"factor-color\">6</span>(x + 2).</p>\n        <p><strong>Vérification :</strong> si je développe <span class=\"factor-color\">6</span>(x + 2), je retrouve 6x + 12.</p>\n      </div>",
      "traps": [
        "Prendre un facteur qui n'est pas commun à tous les termes.",
        "Oublier un terme dans la parenthèse.",
        "Écrire seulement 6(x) et oublier le + 2.",
        "Changer le signe dans la parenthèse."
      ],
      "remember": [
        "Factoriser, c'est retrouver ce qui est commun et le mettre devant une parenthèse."
      ]
    },
    "math-equations": {
      "prerequisites": [
        "Savoir calculer avec des lettres comme x.",
        "Comprendre qu'une égalité doit rester vraie des deux côtés."
      ],
      "understand": [
        "Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie."
      ],
      "words": [
        "équation",
        "inconnue",
        "solution",
        "vérifier"
      ],
      "method": [
        "Regarde l'équation comme une balance : les deux côtés doivent rester égaux.",
        "Repère l'inconnue, souvent notée x.",
        "Enlève d'abord ce qui est ajouté ou retiré autour de l'inconnue.",
        "Enlève ensuite ce qui multiplie ou divise l'inconnue.",
        "Fais toujours la même opération des deux côtés.",
        "Vérifie en remplaçant x par la valeur trouvée."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>On résout 2x + 3 = 11.</p>\n        <p>On veut isoler 2x. Le +3 gêne, donc on enlève 3 des deux côtés.</p>\n        <p>2x + 3 - 3 = 11 - 3, donc 2x = 8.</p>\n        <p>Le x est multiplié par 2. On divise donc les deux côtés par 2.</p>\n        <p>x = 8 ÷ 2 = <strong>4</strong>.</p>\n        <p>Vérification : 2 × 4 + 3 = 11, donc la solution est correcte.</p>\n      </div>",
      "traps": [
        "Changer un seul côté de l'égalité.",
        "Confondre 2x avec x + 2.",
        "Ne pas vérifier la solution.",
        "Faire la division avant d'avoir enlevé le nombre ajouté."
      ],
      "remember": [
        "Dans une équation, chaque opération faite à gauche doit aussi être faite à droite."
      ]
    },
    "math-arithmetique": {
      "prerequisites": [
        "Savoir poser une division simple.",
        "Connaître les mots diviseur, multiple et reste."
      ],
      "understand": [
        "L'arithmétique étudie les nombres entiers : diviseurs, multiples, nombres premiers et décompositions. Elle sert souvent à simplifier des fractions ou à résoudre des problèmes de partage."
      ],
      "words": [
        "multiple",
        "diviseur",
        "nombre premier",
        "PGCD",
        "décomposition"
      ],
      "method": [
        "Pour tester un diviseur, divise et regarde s'il reste quelque chose.",
        "Pour trouver les multiples d'un nombre, multiplie-le par 1, 2, 3, etc.",
        "Un nombre premier a exactement deux diviseurs : 1 et lui-même.",
        "Pour décomposer un nombre, écris-le comme un produit de nombres premiers.",
        "Pour simplifier une fraction, cherche un diviseur commun au numérateur et au dénominateur."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>24 est divisible par 6</strong> car 24 ÷ 6 = 4 exactement. Il n'y a pas de reste.</p>\n        <p>On peut aussi écrire 24 = 2 × 2 × 2 × 3. C'est une décomposition en facteurs premiers.</p>\n        <p>Pour simplifier 24/36, on cherche un diviseur commun. 12 divise 24 et 36, donc 24/36 = 2/3.</p>\n      </div>",
      "traps": [
        "Dire qu'un nombre est premier parce qu'il est impair.",
        "Confondre diviseur de 24 et multiple de 24.",
        "Oublier que 1 n'est pas un nombre premier."
      ],
      "remember": [
        "Un diviseur partage un nombre sans reste ; un multiple est le résultat d'une multiplication."
      ]
    },
    "math-proportionnalite": {
      "prerequisites": [
        "Savoir lire un tableau à deux lignes.",
        "Savoir multiplier et diviser pour passer par l'unité."
      ],
      "understand": [
        "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre."
      ],
      "words": [
        "coefficient",
        "tableau",
        "produit en croix",
        "unité"
      ],
      "method": [
        "Repère les deux grandeurs : par exemple masse et prix, distance et temps, nombre d'objets et coût.",
        "Vérifie si on multiplie toujours par le même nombre pour passer d'une ligne à l'autre.",
        "Si c'est proportionnel, tu peux passer par l'unité : cherche la valeur pour 1.",
        "Tu peux aussi utiliser un tableau de proportionnalité ou un produit en croix.",
        "Garde les unités dans ta réponse : euros, kilogrammes, mètres, minutes..."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>4 kg coûtent 12 €. On veut le prix de 6 kg.</p>\n        <p>On passe par 1 kg : 12 ÷ 4 = 3. Donc 1 kg coûte 3 €.</p>\n        <p>Pour 6 kg : 6 × 3 = <strong>18 €</strong>.</p>\n        <p>La relation est proportionnelle car le prix augmente toujours dans le même rapport que la masse.</p>\n      </div>",
      "traps": [
        "Utiliser la proportionnalité alors que la situation n'est pas proportionnelle.",
        "Oublier les unités.",
        "Inverser les lignes dans un produit en croix.",
        "Ajouter au lieu de multiplier."
      ],
      "remember": [
        "En proportionnalité, le même coefficient relie toujours les deux grandeurs."
      ]
    },
    "math-pourcentages": {
      "prerequisites": [
        "Savoir que 100 % représente le tout.",
        "Savoir calculer une fraction simple d'une quantité."
      ],
      "understand": [
        "Un pourcentage est une proportion sur 100. Il permet de parler d'une partie, d'une réduction, d'une augmentation ou d'un taux."
      ],
      "words": [
        "pourcentage",
        "taux",
        "réduction",
        "augmentation"
      ],
      "method": [
        "Traduis le pourcentage : 10 % signifie 10 sur 100, donc 10/100.",
        "Calcule d'abord la partie correspondant au pourcentage.",
        "Pour une réduction, enlève cette partie à la valeur de départ.",
        "Pour une augmentation, ajoute cette partie à la valeur de départ.",
        "Relis si on demande le montant de la réduction, le taux ou la valeur finale."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Un objet coûte 50 €. Il y a une réduction de 20 %.</p>\n        <p>20 % de 50 €, c'est 20/100 × 50 = 10 €.</p>\n        <p>Le prix final est donc 50 - 10 = <strong>40 €</strong>.</p>\n        <p>Si la question demande seulement le montant de la réduction, la réponse est 10 €. Si elle demande le prix après réduction, la réponse est 40 €.</p>\n      </div>",
      "traps": [
        "Répondre au montant de la réduction au lieu du prix final.",
        "Oublier que 25 % correspond à un quart.",
        "Ajouter lors d'une réduction.",
        "Calculer le pourcentage sur la mauvaise valeur de départ."
      ],
      "remember": [
        "Un pourcentage est une part sur 100 : commence toujours par savoir si on demande la part ou la valeur finale."
      ]
    },
    "math-probabilites": {
      "prerequisites": [
        "Savoir compter toutes les possibilités sans en oublier.",
        "Savoir écrire une fraction simple."
      ],
      "understand": [
        "Une probabilité mesure la chance qu'un événement arrive. Elle est comprise entre 0 et 1 : 0 veut dire impossible, 1 veut dire certain."
      ],
      "words": [
        "issue",
        "événement",
        "cas favorables",
        "cas possibles",
        "événement contraire"
      ],
      "method": [
        "Compte toutes les issues possibles : ce sont tous les résultats qui peuvent arriver.",
        "Compte les issues favorables : ce sont les résultats qui répondent à la question.",
        "Écris la fraction : cas favorables / cas possibles.",
        "Simplifie si possible.",
        "Vérifie que le résultat est entre 0 et 1.",
        "Si on demande l'événement contraire, tu peux faire 1 - probabilité de l'événement."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Dans un sac, il y a 8 boules : 2 bleues et 6 rouges.</p>\n        <p><strong>Événement :</strong> tirer une boule bleue.</p>\n        <p>Il y a 8 cas possibles et 2 cas favorables, donc la probabilité est 2/8 = <strong>1/4</strong>.</p>\n        <p><strong>Événement contraire :</strong> ne pas tirer une boule bleue. Sa probabilité est 1 - 1/4 = <strong>3/4</strong>.</p>\n      </div>",
      "traps": [
        "Confondre les cas favorables et tous les cas.",
        "Donner une probabilité plus grande que 1.",
        "Oublier de simplifier une fraction simple.",
        "Confondre un événement avec son contraire."
      ],
      "remember": [
        "Une probabilité se calcule avec cas favorables / cas possibles et doit rester entre 0 et 1."
      ]
    },
    "math-statistiques": {
      "prerequisites": [
        "Savoir ranger des nombres dans l'ordre croissant.",
        "Savoir additionner plusieurs valeurs et diviser."
      ],
      "understand": [
        "Les statistiques servent à résumer une liste de nombres. Au brevet, on te demande souvent la moyenne, la médiane ou l'étendue."
      ],
      "words": [
        "moyenne",
        "médiane",
        "étendue",
        "série"
      ],
      "method": [
        "Recopie la série et vérifie que tu n'as oublié aucune valeur.",
        "Pour une moyenne, additionne toutes les valeurs puis divise par le nombre de valeurs.",
        "Pour une médiane, range d'abord les valeurs dans l'ordre croissant.",
        "S'il y a un nombre impair de valeurs, la médiane est la valeur du milieu.",
        "S'il y a un nombre pair de valeurs, la médiane est la moyenne des deux valeurs du milieu.",
        "Pour l'étendue, fais plus grande valeur moins plus petite valeur."
      ],
      "example": "<div class=\"guided-steps\">\n        <p><strong>Série :</strong> 4 ; 7 ; 9 ; 12 ; 15.</p>\n        <p>La série est déjà rangée. Il y a 5 valeurs, donc la valeur du milieu est la 3e : la médiane est <strong>9</strong>.</p>\n        <p>La moyenne vaut (4 + 7 + 9 + 12 + 15) ÷ 5 = 47 ÷ 5 = <strong>9,4</strong>.</p>\n        <p>L'étendue vaut 15 - 4 = <strong>11</strong>.</p>\n      </div>",
      "traps": [
        "Calculer une moyenne en oubliant une valeur.",
        "Chercher la médiane sans ranger les nombres.",
        "Confondre médiane et moyenne.",
        "Pour une série avec 4 valeurs, prendre une seule valeur du milieu au lieu de faire la moyenne des deux valeurs centrales."
      ],
      "remember": [
        "Moyenne, médiane et étendue ne répondent pas à la même question : il faut choisir le bon indicateur."
      ]
    },
    "math-fonctions": {
      "prerequisites": [
        "Savoir remplacer une lettre par un nombre.",
        "Savoir lire un tableau ou un graphique simple."
      ],
      "understand": [
        "Une fonction est comme une machine : on donne un nombre de départ, elle applique une règle, puis elle donne un nombre d'arrivée."
      ],
      "words": [
        "fonction",
        "image",
        "antécédent",
        "formule",
        "graphique"
      ],
      "method": [
        "Si on demande l'image d'un nombre, on part du nombre donné et on applique la formule.",
        "Si on demande un antécédent, on cherche quel nombre de départ permet d'obtenir le résultat demandé.",
        "Dans un tableau, la ligne du haut donne souvent les nombres de départ et la ligne du bas les images.",
        "Sur un graphique, l'image se lit verticalement et l'antécédent horizontalement.",
        "Écris toujours le calcul avec f(nombre) pour éviter les confusions."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>On donne f(x) = 2x + 5.</p>\n        <p><strong>Image de 4 :</strong> on remplace x par 4.</p>\n        <p>f(4) = 2 × 4 + 5 = 8 + 5 = <strong>13</strong>.</p>\n        <p>Donc 13 est l'image de 4 par la fonction f.</p>\n      </div>",
      "traps": [
        "Confondre image et antécédent.",
        "Lire f(4) comme une multiplication f × 4.",
        "Oublier de remplacer tous les x par la valeur donnée."
      ],
      "remember": [
        "L'image part d'un x donné ; l'antécédent cherche le x qui donne une image donnée."
      ]
    },
    "math-fonctions-affines": {
      "prerequisites": [
        "Savoir remplacer x par un nombre dans une expression.",
        "Savoir lire une droite sur un graphique."
      ],
      "understand": [
        "Une fonction affine s'écrit f(x) = ax + b. Elle représente une situation qui augmente ou diminue toujours de la même façon."
      ],
      "words": [
        "fonction affine",
        "coefficient directeur",
        "ordonnée à l'origine",
        "droite"
      ],
      "method": [
        "Repère a : c'est le nombre qui multiplie x. Il indique comment la droite monte ou descend.",
        "Repère b : c'est le nombre ajouté à la fin. Il correspond à la valeur quand x vaut 0.",
        "Pour calculer une image, remplace x par la valeur donnée.",
        "Sur un graphique, une fonction affine est représentée par une droite.",
        "Garde le signe de b : f(x) = 3x - 2 n'est pas pareil que f(x) = 3x + 2."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Pour f(x) = 3x - 2, le coefficient directeur est <strong>3</strong> et l'ordonnée à l'origine est <strong>-2</strong>.</p>\n        <p>Pour calculer l'image de 4, on remplace x par 4 :</p>\n        <p>f(4) = 3 × 4 - 2 = 12 - 2 = <strong>10</strong>.</p>\n      </div>",
      "traps": [
        "Oublier le signe de b.",
        "Confondre ax + b avec a + xb.",
        "Lire 3x comme 3 + x au lieu de 3 × x."
      ],
      "remember": [
        "Dans f(x) = ax + b, a règle la pente et b donne la valeur au départ quand x vaut 0."
      ]
    },
    "math-pythagore": {
      "prerequisites": [
        "Savoir reconnaître un triangle rectangle.",
        "Savoir calculer un carré comme 6² = 36."
      ],
      "understand": [
        "Le théorème de Pythagore sert à calculer une longueur dans un triangle rectangle. Il ne fonctionne que si on sait que le triangle est rectangle."
      ],
      "words": [
        "triangle rectangle",
        "angle droit",
        "hypoténuse",
        "carré",
        "racine carrée"
      ],
      "method": [
        "Cherche d'abord l'angle droit : sans triangle rectangle, on n'utilise pas Pythagore.",
        "Repère l'hypoténuse : c'est le côté le plus long, en face de l'angle droit.",
        "Écris l'égalité avec les lettres du triangle : hypoténuse² = côté1² + côté2².",
        "Remplace les longueurs connues par les nombres.",
        "Calcule les carrés, puis la somme ou la différence selon la longueur cherchée.",
        "Si tu as trouvé le carré de la longueur, prends la racine carrée à la fin."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 6 cm et 8 cm.</p>\n        <p>L'hypoténuse est le côté opposé à l'angle droit. On la note h.</p>\n        <p>On écrit : h² = 6² + 8².</p>\n        <p>On calcule : h² = 36 + 64 = 100.</p>\n        <p>Donc h = √100 = <strong>10 cm</strong>.</p>\n      </div>",
      "traps": [
        "Utiliser Pythagore dans un triangle qui n'est pas rectangle.",
        "Se tromper d'hypoténuse.",
        "Oublier la racine carrée à la fin.",
        "Additionner les longueurs au lieu d'additionner les carrés."
      ],
      "remember": [
        "Pythagore ne s'utilise que dans un triangle rectangle et l'hypoténuse est le côté le plus long."
      ]
    },
    "math-thales": {
      "prerequisites": [
        "Savoir reconnaître deux droites parallèles.",
        "Savoir écrire et utiliser une égalité de fractions."
      ],
      "understand": [
        "Le théorème de Thalès sert à calculer des longueurs quand deux triangles ont la même forme, grâce à des droites parallèles. On compare des longueurs qui se correspondent avec des rapports."
      ],
      "words": [
        "droites parallèles",
        "triangles correspondants",
        "rapport",
        "agrandissement",
        "réduction"
      ],
      "method": [
        "Vérifie qu'il y a deux droites parallèles : c'est l'information indispensable.",
        "Repère les deux triangles : le petit triangle et le grand triangle.",
        "Associe les côtés qui se correspondent : petit avec grand, dans le même ordre.",
        "Écris une égalité de rapports, par exemple AB/AD = AC/AE = BC/DE.",
        "Choisis les deux rapports utiles : celui avec la longueur inconnue et celui où tu connais les deux nombres.",
        "Calcule avec un produit en croix ou avec le coefficient d'agrandissement."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>On sait que (BC) est parallèle à (DE). Les triangles ABC et ADE se correspondent.</p>\n        <p>On peut écrire : AB/AD = AC/AE = BC/DE.</p>\n        <p>Supposons AB = 3 cm, AD = 6 cm et AC = 4 cm. On cherche AE.</p>\n        <p>On utilise AB/AD = AC/AE, donc 3/6 = 4/AE.</p>\n        <p>Produit en croix : 3 × AE = 6 × 4 = 24.</p>\n        <p>Donc AE = 24 ÷ 3 = <strong>8 cm</strong>.</p>\n      </div>",
      "traps": [
        "Utiliser Thalès sans droites parallèles.",
        "Associer les mauvais côtés.",
        "Écrire les rapports dans un ordre différent d'une fraction à l'autre.",
        "Oublier l'unité à la fin."
      ],
      "remember": [
        "Thalès repose sur des droites parallèles et des rapports écrits dans le même ordre."
      ]
    },
    "math-trigonometrie": {
      "prerequisites": [
        "Savoir reconnaître un triangle rectangle.",
        "Savoir repérer un angle et les côtés qui le touchent."
      ],
      "understand": [
        "La trigonométrie relie les angles et les longueurs dans un triangle rectangle. Elle sert quand on connaît un angle et une longueur, ou quand on veut retrouver un angle."
      ],
      "words": [
        "sinus",
        "cosinus",
        "tangente",
        "hypoténuse",
        "adjacent",
        "opposé"
      ],
      "method": [
        "Vérifie que le triangle est rectangle : sinon on n'utilise pas sinus, cosinus ou tangente au collège.",
        "Repère l'angle dont on parle. Les mots adjacent et opposé dépendent de cet angle.",
        "L'hypoténuse est toujours le côté en face de l'angle droit.",
        "Le côté adjacent touche l'angle étudié, mais ce n'est pas l'hypoténuse.",
        "Le côté opposé est en face de l'angle étudié.",
        "Choisis la formule : cosinus = adjacent/hypoténuse ; sinus = opposé/hypoténuse ; tangente = opposé/adjacent."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Dans un triangle rectangle, on étudie l'angle A.</p>\n        <p>Le côté adjacent à l'angle A mesure 6 cm. L'hypoténuse mesure 10 cm.</p>\n        <p>On cherche le cosinus, donc on utilise : cos(A) = adjacent / hypoténuse.</p>\n        <p>cos(A) = 6/10 = <strong>0,6</strong>.</p>\n        <p>Astuce mémoire : <strong>CAH</strong> signifie Cosinus = Adjacent / Hypoténuse.</p>\n      </div>",
      "traps": [
        "Confondre côté opposé et côté adjacent.",
        "Oublier que l'hypoténuse est toujours en face de l'angle droit.",
        "Utiliser la trigonométrie dans un triangle non rectangle.",
        "Choisir sinus, cosinus ou tangente avant d'avoir nommé les côtés."
      ],
      "remember": [
        "En trigonométrie, nomme toujours les côtés par rapport à l'angle étudié avant de choisir la formule."
      ]
    },
    "math-transformations": {
      "prerequisites": [
        "Savoir repérer des points sur une figure.",
        "Savoir utiliser une règle, un quadrillage ou un centre de transformation."
      ],
      "understand": [
        "Une transformation permet d'obtenir une nouvelle figure à partir d'une figure de départ. Selon la transformation, la figure peut glisser, tourner, se retourner ou changer de taille."
      ],
      "words": [
        "symétrie",
        "translation",
        "rotation",
        "homothétie",
        "image d'un point"
      ],
      "method": [
        "Lis le nom de la transformation : ce mot indique la règle à appliquer.",
        "Pour une symétrie axiale, utilise l'axe comme un miroir.",
        "Pour une translation, fais glisser tous les points dans la même direction et de la même longueur.",
        "Pour une rotation, repère le centre, l'angle et le sens de rotation.",
        "Pour une homothétie, repère le centre et le coefficient : la figure est agrandie ou réduite.",
        "Transforme les points importants un par un, puis relie-les dans le même ordre."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Une translation de 3 carreaux vers la droite et 2 carreaux vers le haut déplace chaque point exactement de la même façon.</p>\n        <p>Si le point A bouge ainsi, le point B doit aussi bouger de 3 carreaux vers la droite et 2 vers le haut.</p>\n        <p>La figure ne change pas de taille et ne tourne pas : elle glisse.</p>\n      </div>",
      "traps": [
        "Confondre rotation et symétrie.",
        "Déplacer seulement un point de la figure.",
        "Changer la taille dans une translation ou une rotation.",
        "Oublier le centre dans une rotation ou une homothétie."
      ],
      "remember": [
        "Une transformation suit une règle précise : miroir, glissement, rotation ou changement de taille."
      ]
    },
    "math-volume": {
      "prerequisites": [
        "Savoir reconnaître quelques solides : pavé, cylindre, pyramide, cône.",
        "Savoir distinguer longueur, aire et volume."
      ],
      "understand": [
        "Un volume mesure la place occupée par un solide. On ne mesure plus seulement une surface : on mesure l'intérieur d'un objet en 3 dimensions."
      ],
      "words": [
        "volume",
        "solide",
        "aire de base",
        "hauteur",
        "unité cube"
      ],
      "method": [
        "Identifie le solide : pavé droit, prisme, cylindre, pyramide, cône ou boule.",
        "Cherche la formule qui correspond à ce solide.",
        "Pour un prisme ou un cylindre, utilise souvent : volume = aire de la base × hauteur.",
        "Pour une pyramide ou un cône, il y a un partage par 3 : volume = aire de la base × hauteur ÷ 3.",
        "Remplace les longueurs par les valeurs données.",
        "Écris la réponse avec une unité cube : cm³, m³, etc."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Pour un pavé droit, Volume = longueur × largeur × hauteur.</p>\n        <p>Si un pavé mesure 5 cm de long, 3 cm de large et 4 cm de haut :</p>\n        <p>V = 5 × 3 × 4 = <strong>60 cm³</strong>.</p>\n        <p>On écrit cm³ car on mesure un volume, pas une longueur ni une aire.</p>\n      </div>",
      "traps": [
        "Confondre aire et volume.",
        "Oublier que le volume s'exprime en cm³, m³, L, etc.",
        "Utiliser la formule d'une aire à la place d'une formule de volume.",
        "Oublier de diviser par 3 pour une pyramide ou un cône."
      ],
      "remember": [
        "Un volume mesure l'intérieur d'un solide et s'exprime avec une unité cube."
      ]
    },
    "math-echelles": {
      "prerequisites": [
        "Savoir convertir des centimètres en mètres.",
        "Savoir multiplier ou diviser par 10, 100, 1000."
      ],
      "understand": [
        "Une échelle indique le lien entre une longueur sur un plan et la longueur réelle."
      ],
      "words": [
        "échelle",
        "plan",
        "longueur réelle",
        "conversion"
      ],
      "method": [
        "Lis l'échelle avant de calculer : 1:1000 signifie que 1 cm sur le plan représente 1000 cm en réalité.",
        "Si tu passes du plan à la réalité, tu multiplies par le nombre de l'échelle.",
        "Si tu passes de la réalité au plan, tu divises par le nombre de l'échelle.",
        "Convertis l'unité si nécessaire : 100 cm = 1 m.",
        "Vérifie que le résultat est réaliste : une distance réelle est souvent plus grande que la distance sur le plan."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>À l'échelle 1:1000, 2 cm sur le plan représentent 2 × 1000 = 2000 cm en réalité.</p>\n        <p>On convertit : 2000 cm = 20 m.</p>\n        <p>Donc 2 cm sur le plan représentent <strong>20 m</strong> en réalité.</p>\n      </div>",
      "traps": [
        "Oublier de convertir les centimètres en mètres.",
        "Inverser plan et réalité.",
        "Croire que 1:1000 veut dire 1000 cm sur le plan.",
        "Donner une réponse sans unité."
      ],
      "remember": [
        "À l'échelle 1:n, 1 cm sur le plan représente n cm en réalité."
      ]
    },
    "math-algorithmique-tableur": {
      "prerequisites": [
        "Savoir lire une ligne et une colonne.",
        "Savoir qu'une formule de tableur commence par le signe =."
      ],
      "understand": [
        "Un tableur utilise des cellules et des formules pour calculer automatiquement."
      ],
      "words": [
        "cellule",
        "formule",
        "colonne",
        "ligne"
      ],
      "method": [
        "Repère les cellules utilisées : A1 signifie colonne A, ligne 1.",
        "Une formule commence presque toujours par le signe =.",
        "Remplace chaque cellule par sa valeur pour comprendre le calcul.",
        "Respecte les priorités de calcul dans la formule.",
        "Si la formule est recopiée, observe ce qui change dans les références de cellules."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Si A1 contient 4, la formule =A1*3 signifie : prendre la valeur de A1 et la multiplier par 3.</p>\n        <p>On remplace A1 par 4 : 4 × 3 = <strong>12</strong>.</p>\n        <p>Le résultat affiché dans la cellule est donc 12.</p>\n      </div>",
      "traps": [
        "Oublier que les formules commencent par =.",
        "Confondre A1 et 1A.",
        "Lire * comme une addition alors que c'est une multiplication.",
        "Oublier les priorités dans une formule avec plusieurs opérations."
      ],
      "remember": [
        "Dans un tableur, remplace les cellules par leurs valeurs pour comprendre la formule."
      ]
    },
    "math-algorithmique": {
      "prerequisites": [
        "Savoir suivre des consignes dans l'ordre.",
        "Savoir noter une valeur qui change à chaque étape."
      ],
      "understand": [
        "Un algorithme est une suite d'instructions à suivre dans un ordre précis."
      ],
      "words": [
        "instruction",
        "variable",
        "condition",
        "boucle"
      ],
      "method": [
        "Lis les instructions dans l'ordre exact : un algorithme se suit ligne par ligne.",
        "Note la valeur de départ de la variable.",
        "Après chaque instruction, écris la nouvelle valeur au brouillon.",
        "Si une condition apparaît, vérifie si elle est vraie ou fausse avant de continuer.",
        "S'il y a une boucle, répète les instructions le bon nombre de fois.",
        "À la fin, écris le résultat obtenu et vérifie qu'il correspond à la question."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Programme : choisir 5, ajouter 3, multiplier par 2.</p>\n        <p>Étape 1 : on choisit 5.</p>\n        <p>Étape 2 : 5 + 3 = 8.</p>\n        <p>Étape 3 : 8 × 2 = <strong>16</strong>.</p>\n        <p>Si on multipliait avant d'ajouter, on ne suivrait pas le programme.</p>\n      </div>",
      "traps": [
        "Sauter une étape.",
        "Faire les calculs dans le mauvais ordre.",
        "Ne pas mettre à jour la variable après une instruction.",
        "Confondre une condition avec une instruction toujours vraie."
      ],
      "remember": [
        "Un algorithme se suit étape par étape : l'ordre des instructions change le résultat."
      ]
    },
    "fr-nature-fonction": {
      "prerequisites": [
        "Savoir trouver le verbe conjugué dans une phrase.",
        "Savoir poser une question simple autour du verbe : qui fait l'action ? quoi ? à qui ? où ? quand ?"
      ],
      "understand": [
        "La <span class=\"course-key\">nature</span> d'un mot dit ce qu'il est : nom, verbe, adjectif, déterminant, pronom, préposition, adverbe.",
        "La <span class=\"course-key\">fonction</span> d'un mot ou d'un groupe de mots dit son rôle dans la phrase : sujet, COD, COI, complément circonstanciel, attribut.",
        "Un mot garde sa nature, mais sa fonction peut changer selon la phrase."
      ],
      "words": [
        "nature",
        "fonction",
        "sujet",
        "COD",
        "COI",
        "complément"
      ],
      "method": [
        "Trouve le verbe conjugué.",
        "Pour trouver le sujet, demande : qui est-ce qui fait l'action ?",
        "Pour trouver un COD, demande : le sujet fait quoi ? ou le sujet voit qui ?",
        "Pour trouver un complément circonstanciel, cherche une information de lieu, de temps, de manière ou de cause.",
        "Vérifie toujours si la question demande la nature ou la fonction."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase : <strong>Les élèves attentifs lisent un texte dans la classe.</strong></p>\n        <p><span class=\"course-key\">élèves</span> est un nom : c'est sa nature.</p>\n        <p><span class=\"course-key\">Les élèves attentifs</span> répond à « qui lit ? » : c'est le sujet du verbe lisent.</p>\n        <p><span class=\"course-key\">un texte</span> répond à « lisent quoi ? » : c'est le COD.</p>\n        <p><span class=\"course-key\">dans la classe</span> indique le lieu : c'est un complément circonstanciel de lieu.</p>\n      </div>",
      "traps": [
        "Répondre « sujet » quand on demande la nature.",
        "Dire COD sans avoir trouvé le verbe.",
        "Confondre adjectif et complément.",
        "Oublier les prépositions comme à, de, dans, pour."
      ],
      "remember": [
        "Nature = identité du mot. Fonction = rôle du mot dans la phrase."
      ]
    },
    "fr-vocabulaire": {
      "prerequisites": [
        "Lire la phrase entière avant de chercher le sens d'un mot.",
        "Savoir repérer un mot de la même famille ou un synonyme simple."
      ],
      "understand": [
        "Le sens d'un mot dépend souvent du <span class=\"course-key\">contexte</span> : la phrase aide à comprendre.",
        "Un même mot peut avoir plusieurs sens. Il faut choisir celui qui fonctionne dans le texte.",
        "Les familles de mots, préfixes et suffixes aident à comprendre les mots inconnus."
      ],
      "words": [
        "contexte",
        "synonyme",
        "antonyme",
        "famille de mots",
        "niveau de langue"
      ],
      "method": [
        "Lis la phrase avant et la phrase après.",
        "Remplace le mot par un synonyme possible.",
        "Vérifie si le synonyme garde le sens de la phrase.",
        "Cherche le radical ou un mot de la même famille.",
        "Repère le niveau de langue : familier, courant ou soutenu."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase : <strong>Il répondit d'un ton glacial.</strong></p>\n        <p>Ici, <span class=\"course-key\">glacial</span> ne parle pas vraiment de froid.</p>\n        <p>Le contexte parle d'une manière de répondre. Le mot signifie donc : froid, distant, peu chaleureux.</p>\n        <p>Un synonyme possible est <strong>sec</strong> ou <strong>froid</strong>.</p>\n      </div>",
      "traps": [
        "Choisir le premier sens du mot sans lire le contexte.",
        "Confondre synonyme et contraire.",
        "Utiliser un mot familier dans une réponse soutenue.",
        "Ignorer les préfixes comme dé-, re-, in-."
      ],
      "remember": [
        "Quand un mot semble difficile, le contexte donne souvent la clé."
      ]
    },
    "fr-accords": {
      "prerequisites": [
        "Savoir repérer le nom ou le sujet qui commande l'accord.",
        "Savoir reconnaître masculin/féminin et singulier/pluriel."
      ],
      "understand": [
        "Un accord relie un mot à un autre. Le mot qui commande l'accord est le <span class=\"course-key\">donneur</span>.",
        "Le verbe s'accorde avec son sujet. L'adjectif s'accorde avec le nom qu'il précise.",
        "Avec l'auxiliaire être, le participe passé s'accorde généralement avec le sujet."
      ],
      "words": [
        "accord",
        "donneur",
        "receveur",
        "genre",
        "nombre"
      ],
      "method": [
        "Repère le mot à accorder : verbe, adjectif ou participe passé.",
        "Cherche le donneur d'accord.",
        "Note son genre et son nombre.",
        "Ajoute la terminaison nécessaire : -s, -e, -es, -ent.",
        "Relis le groupe entier pour vérifier."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase : <strong>Les filles sont arrivées fatiguées.</strong></p>\n        <p>Le donneur est <span class=\"course-key\">Les filles</span> : féminin pluriel.</p>\n        <p><strong>arrivées</strong> s'accorde avec le sujet car il y a l'auxiliaire être : on ajoute <span class=\"course-date\">-es</span>.</p>\n        <p><strong>fatiguées</strong> précise filles : féminin pluriel, donc <span class=\"course-date\">-es</span>.</p>\n      </div>",
      "traps": [
        "Accorder avec le mot le plus proche au lieu du vrai donneur.",
        "Oublier le féminin.",
        "Oublier le pluriel qui ne s'entend pas.",
        "Oublier le participe passé avec être."
      ],
      "remember": [
        "Avant d'accorder, trouve toujours le donneur."
      ]
    },
    "fr-dictee": {
      "prerequisites": [
        "Savoir écouter une phrase complète avant d'écrire.",
        "Savoir relire par étapes."
      ],
      "understand": [
        "Une dictée ne se réussit pas seulement pendant l'écoute. Elle se gagne surtout pendant la <span class=\"course-key\">relecture</span>.",
        "Il faut relire avec une mission à chaque passage : verbes, pluriels, homophones, ponctuation.",
        "Un élève faible progresse beaucoup quand il arrête de relire « au hasard »."
      ],
      "words": [
        "relecture",
        "homophone",
        "accord",
        "participe passé",
        "ponctuation"
      ],
      "method": [
        "Écris la phrase sans paniquer.",
        "Relis les verbes : cherche le sujet et la terminaison.",
        "Relis les groupes nominaux : déterminant, nom, adjectif.",
        "Relis les homophones : a/à, et/est, son/sont, on/ont.",
        "Termine par les majuscules, points, virgules et accents."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase : <strong>Les enfants ont joué dans la cour.</strong></p>\n        <p><span class=\"course-key\">ont joué</span> : on peut dire « avaient joué », donc c'est ont, pas on.</p>\n        <p><span class=\"course-key\">Les enfants</span> : pluriel, le nom prend -s.</p>\n        <p><span class=\"course-key\">la cour</span> : nom féminin singulier, pas de -s.</p>\n      </div>",
      "traps": [
        "Relire tout en même temps.",
        "Confondre a/à, et/est, son/sont.",
        "Oublier les pluriels silencieux.",
        "Mettre des majuscules ou des points au hasard."
      ],
      "remember": [
        "En dictée, une relecture = une mission."
      ]
    },
    "fr-orthographe-lexicale": {
      "prerequisites": [
        "Savoir découper un mot en syllabes.",
        "Savoir chercher un mot de la même famille."
      ],
      "understand": [
        "L'orthographe lexicale concerne l'écriture des mots eux-mêmes : lettres muettes, doubles consonnes, accents.",
        "On ne peut pas toujours écrire seulement comme on entend.",
        "Les mots de la même famille aident à retrouver certaines lettres cachées."
      ],
      "words": [
        "lettre muette",
        "accent",
        "double consonne",
        "préfixe",
        "suffixe"
      ],
      "method": [
        "Lis le mot lentement.",
        "Cherche un mot de la même famille.",
        "Repère les préfixes et suffixes.",
        "Vérifie les accents qui changent le son.",
        "Mémorise les mots fréquents comme des mots repères."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Pour écrire <strong>longtemps</strong>, on peut penser au mot <span class=\"course-key\">long</span>.</p>\n        <p>La famille du mot aide à retrouver le <strong>g</strong> muet.</p>\n        <p>Pour <strong>chanteur</strong>, on pense à <span class=\"course-key\">chanter</span>.</p>\n      </div>",
      "traps": [
        "Écrire seulement comme on entend.",
        "Oublier les lettres muettes.",
        "Mettre un accent au hasard.",
        "Confondre deux mots proches."
      ],
      "remember": [
        "Quand une lettre ne s'entend pas, cherche un mot de la même famille."
      ]
    },
    "fr-ponctuation": {
      "prerequisites": [
        "Savoir reconnaître une phrase complète.",
        "Savoir qu'une phrase commence par une majuscule et finit par un point."
      ],
      "understand": [
        "La ponctuation aide le lecteur à comprendre où une idée commence, où elle s'arrête et quel ton elle prend.",
        "Le point termine une idée. La virgule sépare ou marque une petite pause.",
        "Le point d'interrogation sert à poser une question ; le point d'exclamation marque une émotion ou un ordre fort."
      ],
      "words": [
        "point",
        "virgule",
        "question",
        "exclamation",
        "dialogue"
      ],
      "method": [
        "Repère les idées principales.",
        "Mets un point quand une idée est terminée.",
        "Utilise une virgule pour séparer une liste ou un groupe déplacé.",
        "Utilise ? pour une question.",
        "Dans un dialogue, surveille les tirets ou les guillemets."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Sans ponctuation : <strong>Tu viens demain je t'attends</strong></p>\n        <p>Avec ponctuation : <strong>Tu viens demain ? Je t'attends.</strong></p>\n        <p>Le point d'interrogation montre la question. Le point termine la deuxième phrase.</p>\n      </div>",
      "traps": [
        "Faire des phrases trop longues.",
        "Mettre une virgule à la place d'un point.",
        "Oublier la majuscule après un point.",
        "Mettre un point d'interrogation sans vraie question."
      ],
      "remember": [
        "La ponctuation sert à guider celui qui lit."
      ]
    },
    "fr-reecriture": {
      "prerequisites": [
        "Savoir repérer le sujet, le verbe et les mots qui s'accordent.",
        "Savoir changer un mot sans oublier les mots liés."
      ],
      "understand": [
        "Une réécriture demande de transformer une phrase en gardant le même sens.",
        "On peut demander de changer le temps, le sujet, le nombre, le genre ou le point de vue.",
        "Le piège est de changer un mot puis d'oublier tous les mots qui dépendent de lui."
      ],
      "words": [
        "transformation",
        "temps",
        "sujet",
        "accord",
        "pronom"
      ],
      "method": [
        "Lis exactement la transformation demandée.",
        "Souligne tous les mots qui vont devoir changer.",
        "Transforme le sujet et les verbes.",
        "Transforme les déterminants, pronoms, adjectifs et participes passés.",
        "Relis la phrase finale pour vérifier qu'elle reste correcte."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase de départ : <strong>Elle finit son devoir.</strong></p>\n        <p>On demande le pluriel : <span class=\"course-key\">Elle</span> devient <span class=\"course-key\">Elles</span>.</p>\n        <p>Le verbe change : <strong>finit</strong> devient <strong>finissent</strong>.</p>\n        <p>Le déterminant change aussi : <strong>son devoir</strong> devient <strong>leur devoir</strong> ou <strong>leurs devoirs</strong> selon le sens.</p>\n      </div>",
      "traps": [
        "Changer seulement le sujet.",
        "Oublier le verbe.",
        "Oublier les adjectifs.",
        "Changer le sens de la phrase."
      ],
      "remember": [
        "Dans une réécriture, un changement entraîne souvent plusieurs autres changements."
      ]
    },
    "fr-conjugaison": {
      "prerequisites": [
        "Savoir trouver le sujet du verbe.",
        "Savoir distinguer passé, présent et futur."
      ],
      "understand": [
        "Conjuguer, c'est choisir la bonne forme du verbe selon le sujet, le temps et le mode.",
        "Le radical donne le sens du verbe ; la terminaison donne souvent le temps et la personne.",
        "Au brevet, il faut surtout reconnaître les temps et éviter les terminaisons impossibles."
      ],
      "words": [
        "temps",
        "mode",
        "radical",
        "terminaison",
        "auxiliaire"
      ],
      "method": [
        "Trouve le sujet.",
        "Identifie le temps demandé.",
        "Garde le radical si possible.",
        "Ajoute la terminaison qui correspond au sujet.",
        "Pour les temps composés, choisis l'auxiliaire être ou avoir puis vérifie le participe passé."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Verbe : <strong>finir</strong>. Sujet : <strong>nous</strong>. Temps : futur.</p>\n        <p>Au futur, on garde souvent l'infinitif : finir.</p>\n        <p>Avec nous, la terminaison est <span class=\"course-date\">-ons</span>.</p>\n        <p>Résultat : <strong>nous finirons</strong>.</p>\n      </div>",
      "traps": [
        "Choisir une terminaison sans identifier le temps.",
        "Confondre infinitif et participe passé.",
        "Oublier les verbes être, avoir, aller, faire.",
        "Mettre -er à la place de -é."
      ],
      "remember": [
        "Sujet + temps + terminaison : vérifie ce trio pour chaque verbe."
      ]
    },
    "fr-comprehension": {
      "prerequisites": [
        "Lire le texte une première fois sans répondre tout de suite.",
        "Relire la question avant de chercher la réponse."
      ],
      "understand": [
        "Comprendre un texte, c'est repérer qui parle, de quoi il est question, ce qui se passe et ce que le texte veut faire comprendre.",
        "Une bonne réponse s'appuie sur un <span class=\"course-key\">indice précis</span> du texte.",
        "Quand la réponse n'est pas écrite directement, il faut déduire avec les indices : c'est l'implicite."
      ],
      "words": [
        "indice",
        "citation",
        "implicite",
        "narrateur",
        "justification"
      ],
      "method": [
        "Lis le texte une première fois pour comprendre la situation.",
        "Lis la question et souligne le mot important.",
        "Retourne dans le texte pour chercher une preuve.",
        "Réponds avec tes mots.",
        "Ajoute une citation courte ou un indice précis."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Question : <strong>Pourquoi le personnage est-il inquiet ?</strong></p>\n        <p>Indices : <span class=\"course-key\">ses mains tremblent</span>, <span class=\"course-key\">il regarde sans cesse la porte</span>.</p>\n        <p>Réponse : le personnage est inquiet parce qu'il attend quelqu'un ou craint une arrivée.</p>\n        <p>Preuve : on le voit car « ses mains tremblent ».</p>\n      </div>",
      "traps": [
        "Répondre avec son avis au lieu du texte.",
        "Copier une phrase sans expliquer.",
        "Ne pas citer d'indice.",
        "Répondre à côté de la question."
      ],
      "remember": [
        "En compréhension, une réponse solide = idée + preuve du texte."
      ]
    },
    "fr-comprehension-longue": {
      "prerequisites": [
        "Savoir lire un texte en plusieurs passages.",
        "Savoir repérer personnages, lieu, époque et problème principal."
      ],
      "understand": [
        "Une compréhension longue demande de construire le sens du texte petit à petit.",
        "Il faut distinguer les informations explicites, écrites clairement, et les informations implicites, qu'il faut déduire.",
        "Les questions suivent souvent une progression : repérer, comprendre, interpréter, justifier."
      ],
      "words": [
        "explicite",
        "implicite",
        "interprétation",
        "citation",
        "procédé"
      ],
      "method": [
        "Lis le texte une fois pour le sens général.",
        "Note qui parle, où, quand et ce qui se passe.",
        "Pour chaque question, retourne à la ligne ou au passage concerné.",
        "Réponds d'abord simplement.",
        "Ajoute une preuve courte et explique-la."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Si le texte dit : <strong>« Il serra les poings et baissa les yeux. »</strong></p>\n        <p>L'information explicite : il serre les poings et baisse les yeux.</p>\n        <p>L'information implicite : il peut être en colère, honteux ou mal à l'aise.</p>\n        <p>On justifie avec les gestes du personnage.</p>\n      </div>",
      "traps": [
        "Lire seulement le début du texte.",
        "Répondre sans retourner au passage.",
        "Confondre ce qui est sûr avec ce qu'on suppose.",
        "Faire une citation trop longue."
      ],
      "remember": [
        "Dans un texte long, avance question par question et justifie chaque réponse."
      ]
    },
    "fr-figures-style": {
      "prerequisites": [
        "Savoir repérer une image ou une comparaison dans une phrase.",
        "Savoir expliquer un effet avec des mots simples."
      ],
      "understand": [
        "Une figure de style sert à créer un effet : rendre une idée plus forte, plus vivante, plus drôle, plus triste ou plus impressionnante.",
        "Au brevet, il ne suffit pas de nommer la figure. Il faut expliquer ce qu'elle fait comprendre.",
        "Les plus fréquentes sont la comparaison, la métaphore, la personnification, l'hyperbole et l'anaphore."
      ],
      "words": [
        "comparaison",
        "métaphore",
        "personnification",
        "hyperbole",
        "effet"
      ],
      "method": [
        "Repère l'expression imagée.",
        "Cherche s'il y a un outil de comparaison comme comme, tel, pareil à.",
        "Si une chose est présentée comme une personne, pense à la personnification.",
        "Si l'expression exagère beaucoup, pense à l'hyperbole.",
        "Explique toujours l'effet produit."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Phrase : <strong>Il est rapide comme l'éclair.</strong></p>\n        <p>Le mot <span class=\"course-key\">comme</span> annonce une comparaison.</p>\n        <p>On compare sa vitesse à celle de l'éclair.</p>\n        <p>Effet : cela insiste sur une très grande rapidité.</p>\n      </div>",
      "traps": [
        "Nommer une figure sans expliquer l'effet.",
        "Confondre comparaison et métaphore.",
        "Voir une figure de style partout.",
        "Oublier de citer l'expression."
      ],
      "remember": [
        "Figure de style = nom + citation + effet."
      ]
    },
    "fr-types-textes": {
      "prerequisites": [
        "Savoir se demander pourquoi un texte est écrit.",
        "Observer les verbes, les connecteurs et la présentation."
      ],
      "understand": [
        "Un texte peut raconter, décrire, expliquer, informer, convaincre ou donner une consigne.",
        "Le type de texte dépend de son <span class=\"course-key\">intention principale</span>.",
        "Un même texte peut mélanger plusieurs types, mais il y en a souvent un dominant."
      ],
      "words": [
        "narratif",
        "descriptif",
        "explicatif",
        "argumentatif",
        "injonctif"
      ],
      "method": [
        "Cherche l'intention principale du texte.",
        "Repère les indices : personnages, descriptions, explications, opinion, ordres.",
        "Associe ces indices au type de texte.",
        "Vérifie si un autre type est aussi présent.",
        "Justifie avec un indice précis."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Un texte avec des personnages, des actions et un ordre chronologique est souvent <span class=\"course-key\">narratif</span>.</p>\n        <p>Un texte qui donne une opinion avec des arguments est <span class=\"course-key\">argumentatif</span>.</p>\n        <p>Un texte qui explique comment fonctionne un phénomène est <span class=\"course-key\">explicatif</span>.</p>\n      </div>",
      "traps": [
        "Se fier seulement au titre.",
        "Oublier qu'un texte peut mélanger plusieurs types.",
        "Confondre expliquer et convaincre.",
        "Ne pas donner d'indice."
      ],
      "remember": [
        "Pour reconnaître un type de texte, cherche d'abord l'intention."
      ]
    },
    "fr-redaction": {
      "prerequisites": [
        "Savoir écrire des phrases courtes.",
        "Savoir organiser ses idées avant de rédiger."
      ],
      "understand": [
        "Une rédaction réussie se prépare avant d'écrire.",
        "Un sujet d'imagination demande de raconter ou décrire. Un sujet de réflexion demande de défendre une idée.",
        "Le correcteur regarde le contenu, l'organisation, la langue et la relecture."
      ],
      "words": [
        "brouillon",
        "paragraphe",
        "connecteur",
        "argument",
        "exemple"
      ],
      "method": [
        "Lis le sujet et entoure ce qu'on te demande.",
        "Fais un brouillon avec les idées principales.",
        "Classe tes idées dans un ordre logique.",
        "Écris un paragraphe par idée.",
        "Relis les accords, la ponctuation et les répétitions."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Sujet : <strong>Faut-il toujours dire la vérité ?</strong></p>\n        <p>Idée 1 : oui, car la vérité crée la confiance.</p>\n        <p>Exemple : dans une amitié, mentir peut casser la relation.</p>\n        <p>Idée 2 : parfois, il faut faire attention à ne pas blesser.</p>\n        <p>La réponse doit être organisée, pas jetée en vrac.</p>\n      </div>",
      "traps": [
        "Commencer sans brouillon.",
        "Faire un seul gros bloc.",
        "Oublier les exemples.",
        "Écrire des phrases trop longues."
      ],
      "remember": [
        "Un bon paragraphe contient une idée, une explication et un exemple."
      ]
    },
    "fr-redaction-complete": {
      "prerequisites": [
        "Savoir construire un paragraphe.",
        "Savoir relire un texte en corrigeant une chose à la fois."
      ],
      "understand": [
        "Une rédaction complète doit avoir un début, un développement et une fin.",
        "Dans un sujet de réflexion, il faut organiser les arguments. Dans un sujet d'imagination, il faut organiser les événements.",
        "La qualité vient autant du plan que des phrases."
      ],
      "words": [
        "introduction",
        "développement",
        "conclusion",
        "argument",
        "transition"
      ],
      "method": [
        "Analyse le sujet : imagination ou réflexion.",
        "Prépare un plan simple en deux ou trois parties.",
        "Écris une introduction courte.",
        "Développe chaque partie avec exemples ou détails.",
        "Termine par une conclusion claire puis relis."
      ],
      "example": "<div class=\"guided-steps\">\n        <p>Pour un sujet de réflexion, on peut organiser ainsi :</p>\n        <p><span class=\"course-key\">Introduction</span> : présenter la question.</p>\n        <p><span class=\"course-key\">Paragraphe 1</span> : première idée + exemple.</p>\n        <p><span class=\"course-key\">Paragraphe 2</span> : deuxième idée + exemple.</p>\n        <p><span class=\"course-key\">Conclusion</span> : répondre clairement.</p>\n      </div>",
      "traps": [
        "Raconter au lieu d'argumenter.",
        "Oublier la conclusion.",
        "Répéter la même idée.",
        "Ne pas relire la langue."
      ],
      "remember": [
        "Une rédaction complète est un texte organisé, pas une suite d'idées au hasard."
      ]
    },
    "hist-premiere-guerre": {
      "prerequisites": [
        "Savoir situer le début du XXe siècle.",
        "Comprendre qu'une guerre mondiale implique de nombreux pays."
      ],
      "understand": [
        "La Première Guerre mondiale dure de <span class=\"course-date\">1914 à 1918</span>.",
        "C'est une guerre totale : soldats, civils, économie et propagande sont mobilisés.",
        "Elle est marquée par les tranchées, une violence de masse et un bilan humain très lourd."
      ],
      "words": [
        "tranchée",
        "front",
        "arrière",
        "violence de masse",
        "armistice"
      ],
      "method": [
        "Retenir les dates 1914-1918.",
        "Expliquer la vie difficile des soldats dans les tranchées.",
        "Montrer que les civils sont aussi touchés.",
        "Utiliser un exemple précis : Verdun, les gueules cassées, les pénuries.",
        "Conclure sur le bilan : millions de morts et Europe bouleversée."
      ],
      "example": "<div class=\"guided-steps\"><p>À Verdun en <span class=\"course-date\">1916</span>, les soldats vivent dans les tranchées sous les bombardements.</p><p>Cet exemple montre la <span class=\"course-key\">violence de masse</span> : armes puissantes, peur, blessures, morts très nombreux.</p><p>Le <span class=\"course-date\">11 novembre 1918</span>, l'armistice met fin aux combats.</p></div>",
      "traps": [
        "Croire que seuls les soldats sont concernés.",
        "Oublier les dates 1914 et 1918.",
        "Confondre armistice et traité de paix.",
        "Raconter sans expliquer la violence de masse."
      ],
      "remember": [
        "1914-1918 : une guerre totale, violente, qui transforme l'Europe."
      ]
    },
    "hist-seconde-guerre": {
      "prerequisites": [
        "Savoir que la Seconde Guerre mondiale vient après la Première.",
        "Savoir situer l'Europe et quelques grands pays : Allemagne, France, URSS, États-Unis."
      ],
      "understand": [
        "La Seconde Guerre mondiale dure de <span class=\"course-date\">1939 à 1945</span>.",
        "C'est une guerre totale et idéologique : les régimes nazis veulent dominer et éliminer certains peuples.",
        "Le génocide des Juifs et des Tsiganes est un repère essentiel : c'est un crime de masse organisé."
      ],
      "words": [
        "Axe",
        "Alliés",
        "génocide",
        "Shoah",
        "guerre totale"
      ],
      "method": [
        "Retenir 1939 : invasion de la Pologne et début de la guerre.",
        "Identifier les deux camps : l'Axe et les Alliés.",
        "Expliquer que les civils sont massivement touchés.",
        "Connaître la Shoah : extermination des Juifs d'Europe par les nazis.",
        "Retenir 1945 : fin de la guerre et découverte de l'ampleur des crimes nazis."
      ],
      "example": "<div class=\"guided-steps\"><p>En <span class=\"course-date\">1939</span>, l'Allemagne nazie envahit la Pologne : la guerre commence.</p><p>La guerre devient mondiale car elle touche l'Europe, l'Afrique, l'Asie et l'océan Pacifique.</p><p>La <span class=\"course-key\">Shoah</span> désigne le génocide des Juifs par les nazis.</p><p>En <span class=\"course-date\">1945</span>, l'Allemagne puis le Japon capitulent.</p></div>",
      "traps": [
        "Réduire la guerre à une seule date.",
        "Oublier les civils.",
        "Confondre camp de concentration et centre de mise à mort.",
        "Parler de la Shoah sans expliquer qu'il s'agit d'un génocide."
      ],
      "remember": [
        "1939-1945 : guerre mondiale, guerre totale, génocide des Juifs et des Tsiganes."
      ]
    },
    "hist-totalitarismes": {
      "prerequisites": [
        "Savoir ce qu'est une dictature.",
        "Comprendre qu'un État peut contrôler la population par la peur et la propagande."
      ],
      "understand": [
        "Un régime totalitaire veut contrôler toute la société : politique, économie, médias, école, idées.",
        "Il utilise un chef tout-puissant, un parti unique, la propagande et la terreur.",
        "Les exemples importants sont l'Allemagne nazie et l'URSS de Staline."
      ],
      "words": [
        "dictature",
        "parti unique",
        "propagande",
        "terreur",
        "culte du chef"
      ],
      "method": [
        "Présenter le chef et le parti unique.",
        "Montrer comment la propagande impose les idées du régime.",
        "Expliquer la terreur : police politique, arrestations, camps.",
        "Donner un exemple précis.",
        "Conclure sur l'absence de libertés."
      ],
      "example": "<div class=\"guided-steps\"><p>Dans l'Allemagne nazie, Hitler est présenté comme un chef à suivre.</p><p>La propagande répète les idées du régime et désigne des ennemis.</p><p>La police et les camps font peur à la population : c'est la <span class=\"course-key\">terreur</span>.</p></div>",
      "traps": [
        "Dire seulement que c'est une dictature sans expliquer le contrôle total.",
        "Oublier la propagande.",
        "Oublier la terreur.",
        "Confondre démocratie et régime totalitaire."
      ],
      "remember": [
        "Totalitaire = un pouvoir qui veut tout contrôler."
      ]
    },
    "hist-guerre-froide": {
      "prerequisites": [
        "Savoir que la Seconde Guerre mondiale se termine en 1945.",
        "Comprendre que deux pays peuvent s'opposer sans se faire directement la guerre."
      ],
      "understand": [
        "La Guerre froide oppose les États-Unis et l'URSS de <span class=\"course-date\">1947 à 1991</span>.",
        "Le monde est divisé en deux blocs : bloc de l'Ouest autour des États-Unis, bloc de l'Est autour de l'URSS.",
        "On parle de guerre froide car les deux superpuissances s'affrontent sans guerre directe entre elles."
      ],
      "words": [
        "bloc",
        "superpuissance",
        "OTAN",
        "Pacte de Varsovie",
        "mur de Berlin"
      ],
      "method": [
        "Présenter les deux superpuissances.",
        "Expliquer les deux modèles : capitalisme/libéralisme contre communisme.",
        "Donner un exemple de crise : Berlin, Cuba, Corée, Vietnam.",
        "Montrer la peur nucléaire.",
        "Conclure avec 1989-1991 : fin du bloc soviétique."
      ],
      "example": "<div class=\"guided-steps\"><p>Berlin est un symbole de la Guerre froide.</p><p>En <span class=\"course-date\">1961</span>, le mur de Berlin sépare Berlin-Ouest et Berlin-Est.</p><p>En <span class=\"course-date\">1989</span>, la chute du mur montre l'affaiblissement du bloc soviétique.</p></div>",
      "traps": [
        "Croire que les États-Unis et l'URSS se font directement la guerre.",
        "Oublier les deux blocs.",
        "Confondre 1945 et 1947.",
        "Ne donner aucun exemple de crise."
      ],
      "remember": [
        "Guerre froide = opposition durable entre deux blocs, sans guerre directe entre États-Unis et URSS."
      ]
    },
    "hist-decolonisation": {
      "prerequisites": [
        "Savoir ce qu'est une colonie.",
        "Comprendre qu'un peuple peut réclamer son indépendance."
      ],
      "understand": [
        "La décolonisation est le processus par lequel des colonies deviennent indépendantes.",
        "Elle se développe surtout après 1945, car les empires coloniaux sont affaiblis.",
        "Elle peut être négociée ou violente selon les territoires."
      ],
      "words": [
        "colonie",
        "métropole",
        "indépendance",
        "nationalisme",
        "décolonisation"
      ],
      "method": [
        "Définir colonie et métropole.",
        "Expliquer pourquoi les peuples colonisés réclament l'indépendance.",
        "Donner un exemple : Inde, Algérie.",
        "Dire si l'indépendance est négociée ou obtenue par la guerre.",
        "Conclure sur la naissance de nouveaux États."
      ],
      "example": "<div class=\"guided-steps\"><p>L'Inde devient indépendante en <span class=\"course-date\">1947</span> après des négociations avec le Royaume-Uni.</p><p>L'Algérie devient indépendante en <span class=\"course-date\">1962</span> après une guerre contre la France.</p><p>Ces deux exemples montrent que la décolonisation peut prendre des formes différentes.</p></div>",
      "traps": [
        "Croire que toutes les indépendances se passent de la même manière.",
        "Oublier le rôle de la métropole.",
        "Ne pas donner d'exemple.",
        "Confondre colonisation et décolonisation."
      ],
      "remember": [
        "Décolonisation = passage d'une colonie à un État indépendant."
      ]
    },
    "hist-construction-europeenne": {
      "prerequisites": [
        "Savoir que l'Europe sort détruite de la Seconde Guerre mondiale.",
        "Comprendre l'idée de coopération entre pays."
      ],
      "understand": [
        "La construction européenne commence après 1945 pour éviter une nouvelle guerre en Europe.",
        "Les États européens coopèrent d'abord dans l'économie, puis de plus en plus dans la politique.",
        "L'Union européenne se construit progressivement avec des traités et des élargissements."
      ],
      "words": [
        "coopération",
        "traité",
        "CEE",
        "Union européenne",
        "élargissement"
      ],
      "method": [
        "Expliquer le but : paix et coopération.",
        "Retenir 1957 : traités de Rome et création de la CEE.",
        "Retenir 1992 : traité de Maastricht et Union européenne.",
        "Montrer que l'UE s'élargit à de nouveaux pays.",
        "Donner un exemple concret : euro, libre circulation, projets communs."
      ],
      "example": "<div class=\"guided-steps\"><p>En <span class=\"course-date\">1957</span>, les traités de Rome créent la CEE.</p><p>En <span class=\"course-date\">1992</span>, le traité de Maastricht crée l'Union européenne.</p><p>L'objectif est de coopérer pour renforcer la paix et l'économie.</p></div>",
      "traps": [
        "Croire que l'Union européenne apparaît d'un seul coup.",
        "Oublier l'objectif de paix.",
        "Confondre Europe géographique et Union européenne.",
        "Ne retenir aucune date."
      ],
      "remember": [
        "La construction européenne est progressive : paix, coopération, traités, élargissements."
      ]
    },
    "hist-ve-republique": {
      "prerequisites": [
        "Savoir qu'une République est un régime où le pouvoir vient des citoyens.",
        "Comprendre le rôle d'une Constitution."
      ],
      "understand": [
        "La Ve République commence en <span class=\"course-date\">1958</span>.",
        "Elle donne un rôle important au président de la République.",
        "Les institutions organisent les pouvoirs : président, gouvernement, Parlement, justice."
      ],
      "words": [
        "Constitution",
        "président",
        "gouvernement",
        "Parlement",
        "citoyen"
      ],
      "method": [
        "Retenir 1958 : naissance de la Ve République.",
        "Identifier le président et son rôle.",
        "Distinguer gouvernement et Parlement.",
        "Expliquer que les citoyens votent pour choisir des représentants.",
        "Utiliser le vocabulaire institutionnel avec précision."
      ],
      "example": "<div class=\"guided-steps\"><p>Le président nomme le Premier ministre.</p><p>Le Parlement vote la loi.</p><p>Les citoyens participent à la démocratie par le vote.</p><p>Ces éléments montrent l'organisation de la Ve République.</p></div>",
      "traps": [
        "Dire que le président fait toutes les lois.",
        "Confondre gouvernement et Parlement.",
        "Oublier le rôle des citoyens.",
        "Ne pas utiliser le mot Constitution."
      ],
      "remember": [
        "Ve République = institutions de 1958 avec un président fort et des citoyens électeurs."
      ]
    },
    "hist-reperes": {
      "prerequisites": [
        "Savoir placer des événements dans l'ordre chronologique.",
        "Comprendre qu'une date sert de repère pour expliquer une période."
      ],
      "understand": [
        "Les repères historiques sont des dates ou événements indispensables pour comprendre le programme.",
        "Il ne suffit pas d'apprendre une date : il faut savoir dire ce qui se passe et pourquoi c'est important.",
        "Les repères aident à situer un document ou un sujet."
      ],
      "words": [
        "date",
        "chronologie",
        "siècle",
        "événement",
        "repère"
      ],
      "method": [
        "Apprends les repères par petits groupes.",
        "Associe chaque date à une phrase simple.",
        "Range les dates dans l'ordre.",
        "Relie chaque repère à un chapitre.",
        "Révise souvent, quelques minutes à la fois."
      ],
      "example": "<div class=\"guided-steps\"><p><span class=\"course-date\">1914-1918</span> : Première Guerre mondiale.</p><p><span class=\"course-date\">1939-1945</span> : Seconde Guerre mondiale.</p><p><span class=\"course-date\">1958</span> : naissance de la Ve République.</p><p><span class=\"course-date\">1989</span> : chute du mur de Berlin.</p></div>",
      "traps": [
        "Apprendre une date sans savoir l'expliquer.",
        "Mélanger les deux guerres mondiales.",
        "Oublier l'ordre chronologique.",
        "Confondre siècle et année."
      ],
      "remember": [
        "Un repère utile = date + événement + sens."
      ]
    },
    "hist-france-vichy-resistance": {
      "prerequisites": [
        "Savoir que la France est vaincue par l'Allemagne en 1940.",
        "Comprendre la différence entre collaborer et résister."
      ],
      "understand": [
        "Après la défaite de 1940, la France est en partie occupée par l'Allemagne nazie.",
        "Le régime de Vichy, dirigé par Pétain, collabore avec l'Allemagne.",
        "Des résistants refusent l'occupation et agissent contre l'ennemi, en France ou depuis Londres."
      ],
      "words": [
        "Occupation",
        "Vichy",
        "collaboration",
        "Résistance",
        "appel du 18 juin"
      ],
      "method": [
        "Retenir 1940 : défaite française.",
        "Expliquer le rôle du régime de Vichy.",
        "Définir collaboration et Résistance.",
        "Donner un exemple : appel du 18 juin, maquis, réseaux résistants.",
        "Montrer que les choix ne sont pas les mêmes selon les acteurs."
      ],
      "example": "<div class=\"guided-steps\"><p>En <span class=\"course-date\">1940</span>, Pétain dirige le régime de Vichy.</p><p>Le général de Gaulle lance l'<span class=\"course-key\">appel du 18 juin</span> depuis Londres.</p><p>Vichy collabore ; la Résistance combat l'occupation.</p></div>",
      "traps": [
        "Croire que toute la France résiste.",
        "Confondre Pétain et de Gaulle.",
        "Oublier la collaboration.",
        "Parler de résistance sans exemple."
      ],
      "remember": [
        "France occupée : Vichy collabore, des résistants s'opposent."
      ]
    },
    "geo-metropoles": {
      "prerequisites": [
        "Savoir qu'une ville concentre des habitants et des activités.",
        "Savoir lire une carte ou une photographie de paysage."
      ],
      "understand": [
        "Une métropole est une grande ville qui concentre population, emplois, transports, services et pouvoirs.",
        "Les métropoles attirent les habitants et les entreprises.",
        "Elles créent aussi des inégalités : quartiers riches, quartiers pauvres, embouteillages, logements chers."
      ],
      "words": [
        "métropole",
        "centre",
        "périphérie",
        "mobilité",
        "inégalité"
      ],
      "method": [
        "Repère la ville étudiée.",
        "Cherche ce qu'elle concentre : emplois, transports, universités, lieux de pouvoir.",
        "Observe les espaces autour : banlieues, périphéries, étalement urbain.",
        "Explique les avantages puis les problèmes.",
        "Donne un exemple concret comme Paris, Lyon ou une métropole mondiale."
      ],
      "example": "<div class=\"guided-steps\"><p>Paris est une métropole car elle concentre des emplois, des monuments, des transports, des universités et des pouvoirs politiques.</p><p>Mais elle connaît aussi des problèmes : logements chers, embouteillages, inégalités entre quartiers.</p></div>",
      "traps": [
        "Dire seulement qu'une métropole est une grande ville.",
        "Oublier les fonctions de commandement.",
        "Oublier les inégalités.",
        "Ne pas utiliser d'exemple."
      ],
      "remember": [
        "Métropole = grande ville qui attire, commande et organise un territoire."
      ]
    },
    "geo-espaces-productifs": {
      "prerequisites": [
        "Savoir que produire signifie créer des richesses.",
        "Connaître les trois grands secteurs : agriculture, industrie, services."
      ],
      "understand": [
        "Un espace productif est un espace où l'on produit des richesses.",
        "Il peut être agricole, industriel, touristique, commercial ou lié aux services.",
        "Ces espaces changent avec la mondialisation, les transports, les technologies et la concurrence."
      ],
      "words": [
        "agriculture",
        "industrie",
        "services",
        "mondialisation",
        "reconversion"
      ],
      "method": [
        "Identifie le type d'espace productif.",
        "Repère les activités visibles sur le document.",
        "Cherche les acteurs : entreprises, agriculteurs, touristes, État, collectivités.",
        "Explique les atouts : transports, main-d'œuvre, innovation, paysage.",
        "Mentionne les transformations ou difficultés."
      ],
      "example": "<div class=\"guided-steps\"><p>Un espace industriel peut se trouver près d'un port pour importer et exporter facilement.</p><p>Un espace touristique utilise un paysage, un patrimoine ou des équipements pour attirer des visiteurs.</p><p>Un espace agricole produit des aliments mais peut aussi se moderniser avec des machines.</p></div>",
      "traps": [
        "Confondre les trois secteurs.",
        "Décrire le document sans expliquer l'activité.",
        "Oublier les transports.",
        "Ne pas parler des transformations."
      ],
      "remember": [
        "Espace productif = lieu où l'on produit, avec des acteurs, des atouts et des changements."
      ]
    },
    "geo-faible-densite": {
      "prerequisites": [
        "Savoir ce que signifie densité : nombre d'habitants par km².",
        "Savoir lire une carte de population."
      ],
      "understand": [
        "Un espace de faible densité compte peu d'habitants par km².",
        "Ces espaces peuvent être ruraux, montagnards, forestiers ou éloignés des grandes villes.",
        "Ils ont des difficultés, mais aussi des atouts : tourisme, agriculture, nature, cadre de vie."
      ],
      "words": [
        "densité",
        "rural",
        "isolement",
        "service",
        "tourisme"
      ],
      "method": [
        "Repère où se situe l'espace.",
        "Explique pourquoi il est peu peuplé.",
        "Présente les difficultés : accès aux services, transports, vieillissement.",
        "Présente les atouts : paysages, tourisme, agriculture, qualité de vie.",
        "Conclue en montrant que ce n'est pas un espace vide."
      ],
      "example": "<div class=\"guided-steps\"><p>Une zone de montagne peut avoir peu d'habitants car le relief rend les transports difficiles.</p><p>Mais elle peut attirer des touristes pour le ski, la randonnée ou les paysages.</p><p>Elle a donc des difficultés et des atouts.</p></div>",
      "traps": [
        "Dire que faible densité signifie désert total.",
        "Oublier les atouts.",
        "Oublier les difficultés d'accès aux services.",
        "Ne pas utiliser la notion d'habitants par km²."
      ],
      "remember": [
        "Faible densité = peu d'habitants, mais pas absence d'activités."
      ]
    },
    "geo-amenagement-territoire": {
      "prerequisites": [
        "Savoir qu'un territoire est un espace organisé par les habitants et les pouvoirs publics.",
        "Comprendre que les régions ne sont pas toutes égales en services et transports."
      ],
      "understand": [
        "Aménager le territoire, c'est organiser un espace pour améliorer la vie des habitants.",
        "L'aménagement cherche souvent à réduire les inégalités entre territoires.",
        "Il peut concerner les transports, les hôpitaux, Internet, les écoles, les zones d'activité ou l'environnement."
      ],
      "words": [
        "aménagement",
        "territoire",
        "inégalité",
        "acteur",
        "service public"
      ],
      "method": [
        "Identifie le problème du territoire.",
        "Repère l'aménagement proposé.",
        "Cherche les acteurs : État, région, commune, entreprises, habitants.",
        "Explique ce que l'aménagement améliore.",
        "Mentionne les limites ou débats possibles."
      ],
      "example": "<div class=\"guided-steps\"><p>Construire une ligne de train peut mieux relier une ville à une métropole.</p><p>Cela facilite les déplacements, l'accès aux emplois et l'attractivité.</p><p>Mais cela coûte cher et peut transformer les paysages.</p></div>",
      "traps": [
        "Décrire un équipement sans expliquer son but.",
        "Oublier les acteurs.",
        "Croire qu'un aménagement règle tout.",
        "Oublier les inégalités territoriales."
      ],
      "remember": [
        "Aménager = agir sur l'espace pour répondre à un besoin."
      ]
    },
    "geo-union-europeenne": {
      "prerequisites": [
        "Savoir situer la France en Europe.",
        "Savoir que l'Union européenne regroupe plusieurs États."
      ],
      "understand": [
        "L'Union européenne est un espace de coopération entre des États européens.",
        "La France y occupe une place importante par sa population, son économie, sa position et ses territoires ultramarins.",
        "L'UE organise des échanges, des politiques communes et la libre circulation dans certains espaces."
      ],
      "words": [
        "Union européenne",
        "État membre",
        "euro",
        "Schengen",
        "territoire ultramarin"
      ],
      "method": [
        "Définis l'Union européenne.",
        "Explique la place de la France.",
        "Donne un exemple concret : euro, Erasmus, libre circulation, politiques agricoles.",
        "Mentionne les frontières et les territoires ultramarins.",
        "Conclue sur la coopération entre États."
      ],
      "example": "<div class=\"guided-steps\"><p>La France est membre de l'Union européenne.</p><p>Elle utilise l'euro et participe aux décisions communes.</p><p>Grâce à ses territoires ultramarins, elle possède aussi une présence dans plusieurs océans.</p></div>",
      "traps": [
        "Confondre Europe et Union européenne.",
        "Dire que tous les pays européens sont dans l'UE.",
        "Oublier les territoires ultramarins.",
        "Ne donner aucun exemple concret."
      ],
      "remember": [
        "L'Union européenne est une coopération entre États, pas un seul pays."
      ]
    },
    "geo-reperes": {
      "prerequisites": [
        "Savoir lire une carte simple.",
        "Savoir repérer continents, océans et grands ensembles."
      ],
      "understand": [
        "Les repères géographiques servent à situer un lieu et à comprendre un document.",
        "Au brevet, il faut savoir localiser des continents, océans, États, métropoles, régions et espaces français.",
        "Un repère est utile quand on sait le placer et l'utiliser dans une phrase."
      ],
      "words": [
        "localiser",
        "situer",
        "continent",
        "océan",
        "métropole"
      ],
      "method": [
        "Commence par les grands repères : continents et océans.",
        "Ajoute les repères français : régions, fleuves, montagnes, métropoles.",
        "Associe chaque repère à une idée du cours.",
        "Entraîne-toi avec des cartes muettes.",
        "Dans une réponse, utilise les points cardinaux : nord, sud, est, ouest."
      ],
      "example": "<div class=\"guided-steps\"><p>Pour situer Marseille, on peut dire : c'est une métropole du sud de la France, au bord de la mer Méditerranée.</p><p>La phrase donne un lieu précis et un repère géographique.</p></div>",
      "traps": [
        "Savoir le nom sans savoir le placer.",
        "Confondre continent et pays.",
        "Oublier les points cardinaux.",
        "Répondre sans carte mentale."
      ],
      "remember": [
        "Un bon repère géographique se place sur une carte et s'explique en une phrase."
      ]
    },
    "emc-valeurs": {
      "prerequisites": [
        "Savoir que la France est une République démocratique.",
        "Comprendre qu'un citoyen a des droits et des devoirs."
      ],
      "understand": [
        "Les valeurs de la République française sont <span class=\"course-key\">Liberté, Égalité, Fraternité</span>.",
        "La laïcité garantit la liberté de conscience et la neutralité de l'État face aux religions.",
        "En EMC, il faut distinguer une valeur, un droit, un devoir et une règle."
      ],
      "words": [
        "liberté",
        "égalité",
        "fraternité",
        "laïcité",
        "citoyenneté"
      ],
      "method": [
        "Lis la situation proposée.",
        "Repère la valeur ou le droit concerné.",
        "Explique avec une phrase simple.",
        "Ajoute si nécessaire le devoir associé.",
        "Évite de répondre seulement par ton avis personnel."
      ],
      "example": "<div class=\"guided-steps\"><p>Si deux élèves doivent être traités de la même manière, on parle d'<span class=\"course-key\">égalité</span>.</p><p>Si chacun peut croire ou ne pas croire, on parle de <span class=\"course-key\">liberté de conscience</span> et de laïcité.</p><p>Si on aide une personne en difficulté, on agit dans l'esprit de la <span class=\"course-key\">fraternité</span>.</p></div>",
      "traps": [
        "Confondre liberté et droit de faire n'importe quoi.",
        "Oublier les devoirs.",
        "Donner seulement une opinion.",
        "Confondre laïcité et interdiction des religions."
      ],
      "remember": [
        "EMC = expliquer une valeur avec une situation concrète."
      ]
    },
    "emc-situation-pratique": {
      "prerequisites": [
        "Savoir lire une situation de la vie quotidienne.",
        "Savoir distinguer fait, opinion, règle et valeur."
      ],
      "understand": [
        "Une situation pratique d'EMC demande d'appliquer les valeurs et règles de la République à un cas concret.",
        "Il faut comprendre le problème, identifier les personnes concernées et proposer une réponse juste.",
        "La réponse doit rester calme, précise et fondée sur les droits et devoirs."
      ],
      "words": [
        "situation",
        "droit",
        "devoir",
        "règle",
        "respect"
      ],
      "method": [
        "Lis la situation et reformule le problème.",
        "Repère les personnes concernées.",
        "Identifie la valeur ou la règle : respect, égalité, laïcité, liberté, sécurité.",
        "Explique ce qu'il faudrait faire.",
        "Justifie avec un droit ou un devoir."
      ],
      "example": "<div class=\"guided-steps\"><p>Situation : un élève se moque d'un autre à cause de son origine.</p><p>Valeur concernée : <span class=\"course-key\">égalité</span> et respect de la dignité.</p><p>Réponse : cette attitude est contraire aux valeurs de la République et doit être signalée à un adulte.</p></div>",
      "traps": [
        "Répondre avec colère.",
        "Oublier de citer une valeur.",
        "Confondre sanction et vengeance.",
        "Ne pas proposer de solution."
      ],
      "remember": [
        "En EMC, on applique une valeur à une situation réelle."
      ]
    },
    "hist-methode-document": {
      "prerequisites": [
        "Savoir lire un titre, une date, un auteur et une source.",
        "Savoir observer un document avant de répondre."
      ],
      "understand": [
        "Analyser un document, ce n'est pas seulement le regarder : il faut identifier ce qu'il est et ce qu'il montre.",
        "Un document peut être un texte, une image, une carte, un graphique, une affiche ou un témoignage.",
        "Pour répondre, il faut utiliser le document comme preuve."
      ],
      "words": [
        "nature",
        "auteur",
        "date",
        "source",
        "information"
      ],
      "method": [
        "Présente le document : nature, auteur, date, source, sujet.",
        "Lis ou observe attentivement.",
        "Repère les informations utiles pour la question.",
        "Cite ou décris un élément précis.",
        "Explique le lien avec le cours."
      ],
      "example": "<div class=\"guided-steps\"><p>Document : une affiche de propagande de 1942.</p><p>Nature : affiche. Date : 1942. Sujet : influencer la population.</p><p>Analyse : l'image et le slogan cherchent à convaincre. On peut donc parler de propagande.</p></div>",
      "traps": [
        "Répondre sans présenter le document.",
        "Inventer une information absente.",
        "Copier sans expliquer.",
        "Oublier la date ou la source."
      ],
      "remember": [
        "Document = je présente, je prélève, j'explique."
      ]
    },
    "hist-developpement-construit": {
      "prerequisites": [
        "Savoir écrire plusieurs phrases liées.",
        "Savoir utiliser des exemples précis du cours."
      ],
      "understand": [
        "Un développement construit est une réponse organisée en paragraphes.",
        "Il doit répondre à une question avec des idées classées, des exemples et des connecteurs.",
        "Il ne faut pas réciter tout le cours : il faut choisir ce qui répond au sujet."
      ],
      "words": [
        "introduction",
        "idée",
        "exemple",
        "connecteur",
        "conclusion"
      ],
      "method": [
        "Lis le sujet et souligne les mots importants.",
        "Écris deux ou trois idées au brouillon.",
        "Associe un exemple à chaque idée.",
        "Rédige avec des connecteurs : d'abord, ensuite, enfin.",
        "Termine par une phrase qui répond au sujet."
      ],
      "example": "<div class=\"guided-steps\"><p>Sujet : montrer que la Première Guerre mondiale est une guerre totale.</p><p>Idée 1 : les soldats sont mobilisés au front.</p><p>Idée 2 : les civils travaillent et subissent les pénuries.</p><p>Idée 3 : l'économie et la propagande servent la guerre.</p></div>",
      "traps": [
        "Faire une liste sans phrases.",
        "Réciter sans répondre au sujet.",
        "Oublier les exemples.",
        "Faire un seul paragraphe trop confus."
      ],
      "remember": [
        "Développement construit = idées organisées + exemples précis."
      ]
    },
    "sci-svt-organisme": {
      "prerequisites": [
        "Savoir que les organes travaillent ensemble dans le corps.",
        "Savoir que les muscles ont besoin d'énergie pour fonctionner."
      ],
      "understand": [
        "Pendant un effort, les muscles ont besoin de plus de dioxygène et de nutriments.",
        "Le cœur bat plus vite pour envoyer davantage de sang aux muscles.",
        "La respiration s'accélère pour faire entrer plus de dioxygène et rejeter plus de dioxyde de carbone."
      ],
      "words": [
        "muscle",
        "dioxygène",
        "nutriment",
        "rythme cardiaque",
        "respiration"
      ],
      "method": [
        "Repère si la situation est au repos ou pendant un effort.",
        "Cherche ce qui augmente : rythme cardiaque, respiration, consommation de dioxygène.",
        "Explique le rôle du sang : transporter dioxygène et nutriments.",
        "Relie l'organe à sa fonction : poumons, cœur, muscles.",
        "Conclus avec une phrase simple."
      ],
      "example": "<div class=\"guided-steps\"><p>Quand tu cours, tes muscles travaillent plus.</p><p>Ils ont besoin de plus de <span class=\"course-key\">dioxygène</span>.</p><p>Le cœur accélère pour transporter ce dioxygène dans le sang.</p><p>La respiration accélère pour faire entrer plus d'air dans les poumons.</p></div>",
      "traps": [
        "Dire que seul le cœur travaille.",
        "Oublier le rôle des poumons.",
        "Confondre dioxygène et dioxyde de carbone.",
        "Ne pas relier les organes entre eux."
      ],
      "remember": [
        "Effort = muscles plus actifs, donc cœur et respiration accélèrent."
      ]
    },
    "sci-svt-environnement": {
      "prerequisites": [
        "Savoir qu'un écosystème contient un milieu et des êtres vivants.",
        "Savoir qu'une espèce peut dépendre d'autres espèces."
      ],
      "understand": [
        "Un écosystème est formé d'un milieu de vie et des êtres vivants qui y vivent.",
        "Les êtres vivants sont reliés par des chaînes alimentaires et des relations de dépendance.",
        "Modifier un élément peut avoir des conséquences sur tout l'écosystème."
      ],
      "words": [
        "écosystème",
        "espèce",
        "chaîne alimentaire",
        "biodiversité",
        "déséquilibre"
      ],
      "method": [
        "Identifie le milieu : forêt, mare, océan, prairie.",
        "Repère les êtres vivants cités.",
        "Cherche qui mange qui ou qui dépend de quoi.",
        "Explique la conséquence d'une modification.",
        "Propose si besoin une action de protection."
      ],
      "example": "<div class=\"guided-steps\"><p>Si les insectes disparaissent dans un milieu, les oiseaux qui les mangent peuvent manquer de nourriture.</p><p>Les plantes peuvent aussi être moins pollinisées.</p><p>Une seule disparition peut donc créer un <span class=\"course-warn\">déséquilibre</span>.</p></div>",
      "traps": [
        "Étudier une espèce seule sans regarder ses relations.",
        "Oublier les conséquences indirectes.",
        "Confondre milieu et être vivant.",
        "Dire que la nature se répare toujours toute seule."
      ],
      "remember": [
        "Dans un écosystème, les êtres vivants sont reliés."
      ]
    },
    "sci-digestion": {
      "prerequisites": [
        "Savoir que les aliments entrent par la bouche.",
        "Savoir que le sang transporte des substances dans le corps."
      ],
      "understand": [
        "La digestion transforme les aliments en nutriments utilisables par le corps.",
        "Les nutriments passent dans le sang au niveau de l'intestin grêle.",
        "Les déchets non utilisés sont évacués."
      ],
      "words": [
        "aliment",
        "nutriment",
        "tube digestif",
        "intestin grêle",
        "absorption"
      ],
      "method": [
        "Suis le trajet des aliments : bouche, œsophage, estomac, intestin grêle, gros intestin.",
        "Explique que les aliments sont découpés et transformés.",
        "Repère le passage des nutriments dans le sang.",
        "Distingue nutriments utiles et déchets.",
        "Utilise le bon vocabulaire."
      ],
      "example": "<div class=\"guided-steps\"><p>Le pain est un aliment.</p><p>Pendant la digestion, il est transformé en nutriments plus petits.</p><p>Ces nutriments passent dans le sang au niveau de l'<span class=\"course-key\">intestin grêle</span>.</p><p>Le sang les transporte ensuite vers les organes.</p></div>",
      "traps": [
        "Croire que les aliments passent entiers dans le sang.",
        "Oublier l'intestin grêle.",
        "Confondre aliment et nutriment.",
        "Oublier le rôle du sang."
      ],
      "remember": [
        "Digestion = transformer les aliments en nutriments qui passent dans le sang."
      ]
    },
    "sci-reproduction": {
      "prerequisites": [
        "Savoir que la reproduction permet la naissance d'un nouvel individu.",
        "Savoir qu'il existe des cellules reproductrices mâles et femelles."
      ],
      "understand": [
        "La reproduction humaine commence par la rencontre d'un spermatozoïde et d'un ovule.",
        "Cette rencontre forme une cellule-œuf.",
        "L'embryon puis le fœtus se développent dans l'utérus."
      ],
      "words": [
        "spermatozoïde",
        "ovule",
        "fécondation",
        "embryon",
        "utérus"
      ],
      "method": [
        "Repère les cellules reproductrices.",
        "Explique la fécondation.",
        "Décris les premières étapes : cellule-œuf, embryon, fœtus.",
        "Situe le développement dans l'utérus.",
        "Utilise des mots scientifiques sans jugement."
      ],
      "example": "<div class=\"guided-steps\"><p>Un spermatozoïde rencontre un ovule : c'est la <span class=\"course-key\">fécondation</span>.</p><p>La cellule-œuf obtenue commence à se diviser.</p><p>Elle devient un embryon qui se développe dans l'utérus.</p></div>",
      "traps": [
        "Confondre ovule et cellule-œuf.",
        "Oublier la fécondation.",
        "Dire que le bébé se développe dans le ventre sans nommer l'utérus.",
        "Utiliser un vocabulaire imprécis."
      ],
      "remember": [
        "Fécondation = spermatozoïde + ovule → cellule-œuf."
      ]
    },
    "sci-genetique": {
      "prerequisites": [
        "Savoir que le corps est formé de cellules.",
        "Savoir que les enfants ressemblent parfois à leurs parents."
      ],
      "understand": [
        "L'information génétique est portée par l'ADN dans les cellules.",
        "Les gènes participent à la construction des caractères héréditaires.",
        "Chaque individu reçoit une partie de son information génétique de chaque parent."
      ],
      "words": [
        "ADN",
        "gène",
        "chromosome",
        "caractère",
        "héréditaire"
      ],
      "method": [
        "Repère le caractère étudié.",
        "Distingue caractère héréditaire et caractère lié à l'environnement.",
        "Explique que l'information génétique est dans les cellules.",
        "Utilise les mots ADN, gène ou chromosome si la question les demande.",
        "Évite les réponses trop vagues comme « c'est dans le sang »."
      ],
      "example": "<div class=\"guided-steps\"><p>La couleur naturelle des yeux est un caractère en partie héréditaire.</p><p>Elle dépend d'informations portées par l'<span class=\"course-key\">ADN</span>.</p><p>Une cicatrice, elle, n'est pas héréditaire : elle vient d'un événement de la vie.</p></div>",
      "traps": [
        "Dire que tout est héréditaire.",
        "Confondre ADN et sang.",
        "Oublier le rôle de l'environnement.",
        "Utiliser gène et chromosome au hasard."
      ],
      "remember": [
        "L'ADN porte des informations qui participent aux caractères héréditaires."
      ]
    },
    "sci-immunite": {
      "prerequisites": [
        "Savoir qu'un microbe peut entrer dans le corps.",
        "Savoir que le corps possède des défenses."
      ],
      "understand": [
        "Le système immunitaire protège le corps contre les microbes.",
        "Les globules blancs participent à la défense de l'organisme.",
        "Un vaccin prépare le corps à reconnaître plus vite un microbe."
      ],
      "words": [
        "microbe",
        "globule blanc",
        "anticorps",
        "vaccin",
        "immunité"
      ],
      "method": [
        "Identifie l'agression : bactérie, virus ou autre microbe.",
        "Explique la réaction du corps.",
        "Mentionne les globules blancs ou les anticorps si nécessaire.",
        "Pour un vaccin, explique l'idée de préparation.",
        "Conclue sur la protection de l'organisme."
      ],
      "example": "<div class=\"guided-steps\"><p>Quand un microbe entre dans le corps, le système immunitaire le reconnaît comme étranger.</p><p>Des globules blancs peuvent intervenir.</p><p>Le vaccin entraîne le corps à réagir plus vite lors d'une vraie rencontre avec le microbe.</p></div>",
      "traps": [
        "Dire qu'un vaccin soigne toujours une maladie déjà installée.",
        "Oublier les globules blancs.",
        "Confondre virus et bactérie dans toutes les situations.",
        "Croire que le corps ne se défend pas seul."
      ],
      "remember": [
        "Immunité = défense du corps contre les microbes."
      ]
    },
    "sci-planete-terre": {
      "prerequisites": [
        "Savoir que la Terre fait partie du système solaire.",
        "Savoir distinguer planète, étoile et satellite."
      ],
      "understand": [
        "La Terre est une planète du système solaire.",
        "Elle tourne sur elle-même et tourne autour du Soleil.",
        "Les mouvements de la Terre expliquent l'alternance jour/nuit et les saisons avec l'inclinaison de l'axe terrestre."
      ],
      "words": [
        "planète",
        "étoile",
        "satellite",
        "rotation",
        "révolution"
      ],
      "method": [
        "Identifie l'astre étudié.",
        "Distingue rotation et révolution.",
        "Relie le mouvement au phénomène observé.",
        "Utilise un vocabulaire précis : Soleil, Terre, Lune.",
        "Explique simplement avec une cause et une conséquence."
      ],
      "example": "<div class=\"guided-steps\"><p>La Terre fait une <span class=\"course-key\">rotation</span> sur elle-même en environ 24 h.</p><p>Cette rotation explique l'alternance du jour et de la nuit.</p><p>Elle fait aussi une <span class=\"course-key\">révolution</span> autour du Soleil en environ un an.</p></div>",
      "traps": [
        "Dire que le Soleil tourne autour de la Terre.",
        "Confondre rotation et révolution.",
        "Confondre planète et étoile.",
        "Expliquer les saisons seulement par la distance au Soleil."
      ],
      "remember": [
        "Rotation = sur soi-même ; révolution = autour d'un astre."
      ]
    },
    "sci-energie": {
      "prerequisites": [
        "Savoir qu'un objet peut recevoir, transformer ou transmettre quelque chose pour fonctionner.",
        "Savoir reconnaître quelques formes d'énergie : électrique, lumineuse, thermique, mécanique, chimique."
      ],
      "understand": [
        "L'énergie permet à un objet ou à un être vivant de fonctionner, bouger, chauffer, éclairer ou produire un son.",
        "Elle peut changer de forme : une lampe transforme l'énergie électrique en énergie lumineuse et thermique.",
        "On représente souvent les transferts d'énergie avec une chaîne énergétique."
      ],
      "words": [
        "énergie",
        "source",
        "conversion",
        "transfert",
        "rendement"
      ],
      "method": [
        "Identifie l'objet étudié.",
        "Cherche l'énergie reçue au départ.",
        "Cherche ce que l'objet produit : mouvement, lumière, chaleur, son.",
        "Explique la conversion d'énergie.",
        "N'oublie pas qu'une partie de l'énergie peut être perdue sous forme de chaleur."
      ],
      "example": "<div class=\"guided-steps\"><p>Une lampe reçoit de l'<span class=\"course-key\">énergie électrique</span>.</p><p>Elle la transforme surtout en énergie lumineuse.</p><p>Elle produit aussi de la chaleur : une partie de l'énergie est dissipée.</p></div>",
      "traps": [
        "Dire que l'énergie disparaît.",
        "Confondre source d'énergie et forme d'énergie.",
        "Oublier les pertes sous forme de chaleur.",
        "Ne pas préciser l'objet étudié."
      ],
      "remember": [
        "L'énergie se transforme ou se transfère, elle ne disparaît pas simplement."
      ]
    },
    "sci-electricite": {
      "prerequisites": [
        "Savoir qu'un circuit doit être fermé pour que le courant circule.",
        "Savoir reconnaître une pile, une lampe, un interrupteur et des fils."
      ],
      "understand": [
        "Un circuit électrique fermé permet au courant de circuler.",
        "Un circuit ouvert empêche le courant de circuler.",
        "Les dipôles peuvent être branchés en série ou en dérivation : cela change le fonctionnement du circuit."
      ],
      "words": [
        "circuit",
        "dipôle",
        "générateur",
        "série",
        "dérivation"
      ],
      "method": [
        "Repère le générateur : pile ou alimentation.",
        "Regarde si le circuit est ouvert ou fermé.",
        "Identifie les dipôles : lampe, moteur, résistance.",
        "Distingue série et dérivation.",
        "Si on parle de mesures, note les unités : tension en volts, intensité en ampères."
      ],
      "example": "<div class=\"guided-steps\"><p>Si l'interrupteur est ouvert, le circuit est coupé.</p><p>Le courant ne circule pas et la lampe est éteinte.</p><p>Si l'interrupteur est fermé, le courant peut circuler : la lampe s'allume.</p></div>",
      "traps": [
        "Croire que le courant circule dans un circuit ouvert.",
        "Confondre tension et intensité.",
        "Oublier le générateur.",
        "Confondre série et dérivation."
      ],
      "remember": [
        "Circuit fermé = courant possible ; circuit ouvert = courant coupé."
      ]
    },
    "sci-donnees": {
      "prerequisites": [
        "Savoir lire un axe gradué.",
        "Savoir repérer une unité comme s, min, °C, m ou g."
      ],
      "understand": [
        "Un graphique montre comment une grandeur change en fonction d'une autre.",
        "Avant de répondre, il faut lire le titre, les axes, les unités et l'allure de la courbe.",
        "Une bonne conclusion doit rester proche des données visibles."
      ],
      "words": [
        "axe",
        "unité",
        "courbe",
        "valeur",
        "tendance"
      ],
      "method": [
        "Lis le titre du graphique.",
        "Lis l'axe horizontal puis l'axe vertical.",
        "Repère les unités.",
        "Cherche la valeur demandée en suivant les graduations.",
        "Décris la tendance : augmente, diminue, reste stable."
      ],
      "example": "<div class=\"guided-steps\"><p>Si l'axe horizontal indique le temps et l'axe vertical la température, le graphique montre l'évolution de la température au cours du temps.</p><p>Si la courbe monte, la température augmente.</p><p>Si elle devient horizontale, la température reste stable.</p></div>",
      "traps": [
        "Lire le mauvais axe.",
        "Oublier l'unité.",
        "Inventer une valeur entre deux graduations sans prudence.",
        "Conclure quelque chose qui n'apparaît pas sur le graphique."
      ],
      "remember": [
        "Graphique = titre, axes, unités, puis seulement conclusion."
      ]
    },
    "sci-mouvement-vitesse": {
      "prerequisites": [
        "Savoir ce qu'est une distance et une durée.",
        "Savoir diviser deux nombres simples."
      ],
      "understand": [
        "La vitesse relie une distance et une durée.",
        "La formule de base est : vitesse = distance ÷ durée.",
        "Un mouvement se décrit aussi avec une trajectoire : droite, courbe ou circulaire."
      ],
      "words": [
        "distance",
        "durée",
        "vitesse",
        "trajectoire",
        "mouvement"
      ],
      "method": [
        "Repère la distance parcourue.",
        "Repère la durée du trajet.",
        "Vérifie les unités : km et h donnent km/h ; m et s donnent m/s.",
        "Calcule vitesse = distance ÷ durée.",
        "Ajoute l'unité dans la réponse."
      ],
      "example": "<div class=\"guided-steps\"><p>Un vélo parcourt 60 km en 3 h.</p><p>Vitesse = distance ÷ durée.</p><p>Vitesse = 60 ÷ 3 = <strong>20 km/h</strong>.</p></div>",
      "traps": [
        "Oublier l'unité.",
        "Multiplier au lieu de diviser.",
        "Mélanger minutes et heures.",
        "Confondre vitesse et distance."
      ],
      "remember": [
        "Vitesse = distance ÷ durée, avec une unité adaptée."
      ]
    },
    "sci-masse-volumique": {
      "prerequisites": [
        "Savoir distinguer masse et volume.",
        "Savoir utiliser une division simple."
      ],
      "understand": [
        "La masse volumique relie la masse d'un objet à son volume.",
        "Elle indique si une matière est plus ou moins dense.",
        "La formule est souvent : masse volumique = masse ÷ volume."
      ],
      "words": [
        "masse",
        "volume",
        "masse volumique",
        "densité",
        "matière"
      ],
      "method": [
        "Repère la masse et son unité.",
        "Repère le volume et son unité.",
        "Calcule masse ÷ volume.",
        "Écris l'unité composée : g/cm³ ou kg/m³.",
        "Compare si besoin avec une valeur connue."
      ],
      "example": "<div class=\"guided-steps\"><p>Un objet a une masse de 200 g et un volume de 100 cm³.</p><p>Masse volumique = 200 ÷ 100 = <strong>2 g/cm³</strong>.</p><p>Cette valeur peut aider à identifier la matière.</p></div>",
      "traps": [
        "Confondre masse et volume.",
        "Oublier l'unité composée.",
        "Diviser dans le mauvais sens.",
        "Comparer des valeurs qui n'ont pas la même unité."
      ],
      "remember": [
        "Masse volumique = masse ÷ volume."
      ]
    },
    "sci-transformations-chimiques": {
      "prerequisites": [
        "Savoir qu'une matière peut changer d'état ou se transformer.",
        "Savoir observer avant de conclure."
      ],
      "understand": [
        "Une transformation chimique forme de nouvelles substances.",
        "Les substances de départ s'appellent les réactifs.",
        "Les substances obtenues s'appellent les produits."
      ],
      "words": [
        "réactif",
        "produit",
        "transformation chimique",
        "combustion",
        "conservation"
      ],
      "method": [
        "Identifie les substances au départ.",
        "Observe les indices : gaz, changement de couleur, chaleur, lumière, dépôt.",
        "Identifie les substances à la fin.",
        "Si de nouvelles substances apparaissent, c'est une transformation chimique.",
        "Écris une phrase avec réactifs et produits."
      ],
      "example": "<div class=\"guided-steps\"><p>Quand du carbone brûle dans le dioxygène, il forme du dioxyde de carbone.</p><p>Réactifs : carbone et dioxygène.</p><p>Produit : dioxyde de carbone.</p><p>Il y a donc transformation chimique.</p></div>",
      "traps": [
        "Confondre changement d'état et transformation chimique.",
        "Oublier les réactifs.",
        "Dire qu'une substance disparaît sans produit.",
        "Inventer un produit non observé."
      ],
      "remember": [
        "Transformation chimique = réactifs qui deviennent produits."
      ]
    },
    "sci-ph": {
      "prerequisites": [
        "Savoir lire une échelle graduée.",
        "Savoir comparer un nombre à 7."
      ],
      "understand": [
        "Le pH indique si une solution est acide, neutre ou basique.",
        "Un pH inférieur à 7 est acide, un pH égal à 7 est neutre, un pH supérieur à 7 est basique.",
        "Plus le pH est petit, plus la solution est acide."
      ],
      "words": [
        "pH",
        "acide",
        "neutre",
        "basique",
        "solution"
      ],
      "method": [
        "Lis la valeur du pH.",
        "Compare-la à 7.",
        "Si pH < 7, écris acide.",
        "Si pH = 7, écris neutre.",
        "Si pH > 7, écris basique."
      ],
      "example": "<div class=\"guided-steps\"><p>Une solution a un pH de 3.</p><p>3 est inférieur à 7.</p><p>La solution est donc <span class=\"course-key\">acide</span>.</p></div>",
      "traps": [
        "Croire que pH 14 est très acide.",
        "Oublier la valeur 7 pour le neutre.",
        "Confondre acide et basique.",
        "Dire seulement faible ou fort sans préciser acide/basique."
      ],
      "remember": [
        "pH < 7 acide ; pH = 7 neutre ; pH > 7 basique."
      ]
    },
    "sci-signaux": {
      "prerequisites": [
        "Savoir qu'une information peut être transmise d'un endroit à un autre.",
        "Savoir reconnaître son, lumière et électricité."
      ],
      "understand": [
        "Un signal transporte une information.",
        "Il peut être sonore, lumineux, électrique ou radio.",
        "Un même message peut parfois être transmis par différents signaux."
      ],
      "words": [
        "signal",
        "information",
        "émetteur",
        "récepteur",
        "transmission"
      ],
      "method": [
        "Identifie l'information transmise.",
        "Repère l'émetteur : ce qui envoie le signal.",
        "Repère le récepteur : ce qui reçoit le signal.",
        "Nomme le type de signal.",
        "Explique le trajet de l'information."
      ],
      "example": "<div class=\"guided-steps\"><p>Une sirène d'alarme transmet une information : danger ou évacuation.</p><p>Le signal est <span class=\"course-key\">sonore</span>.</p><p>La sirène est l'émetteur, les personnes qui entendent sont les récepteurs.</p></div>",
      "traps": [
        "Confondre signal et information.",
        "Oublier l'émetteur ou le récepteur.",
        "Ne pas nommer le type de signal.",
        "Dire que seuls les téléphones utilisent des signaux."
      ],
      "remember": [
        "Signal = moyen de transporter une information."
      ]
    },
    "sci-unites": {
      "prerequisites": [
        "Savoir lire une grandeur et son unité.",
        "Savoir multiplier ou diviser par 10, 100, 1000."
      ],
      "understand": [
        "Une grandeur doit être accompagnée de la bonne unité.",
        "Convertir permet de comparer ou calculer avec des valeurs dans la même unité.",
        "On ne mélange pas les unités dans une formule sans vérifier."
      ],
      "words": [
        "grandeur",
        "unité",
        "conversion",
        "mètre",
        "seconde"
      ],
      "method": [
        "Repère la grandeur : longueur, masse, durée, volume, vitesse.",
        "Repère l'unité donnée.",
        "Convertis si les unités ne sont pas compatibles.",
        "Effectue le calcul.",
        "Écris l'unité finale."
      ],
      "example": "<div class=\"guided-steps\"><p>Pour convertir 2 km en mètres, on sait que 1 km = 1000 m.</p><p>Donc 2 km = 2 × 1000 = <strong>2000 m</strong>.</p><p>On peut alors comparer avec une autre distance en mètres.</p></div>",
      "traps": [
        "Oublier l'unité dans la réponse.",
        "Comparer des valeurs dans des unités différentes.",
        "Multiplier au lieu de diviser lors d'une conversion.",
        "Confondre cm² et cm³."
      ],
      "remember": [
        "Même grandeur, même unité, puis calcul."
      ]
    },
    "sci-gravitation": {
      "prerequisites": [
        "Savoir que les planètes tournent autour du Soleil.",
        "Savoir qu'un objet qui a une masse attire un autre objet."
      ],
      "understand": [
        "La gravitation est une attraction entre des objets qui ont une masse.",
        "Elle explique pourquoi les planètes restent en orbite autour du Soleil.",
        "Plus les masses sont grandes et plus les objets sont proches, plus l'attraction est importante."
      ],
      "words": [
        "gravitation",
        "masse",
        "attraction",
        "orbite",
        "système solaire"
      ],
      "method": [
        "Identifie les deux objets qui s'attirent.",
        "Explique qu'ils ont une masse.",
        "Relie l'attraction au mouvement observé.",
        "Utilise le mot orbite pour une planète ou un satellite.",
        "Évite de dire qu'il n'y a aucune force dans l'espace."
      ],
      "example": "<div class=\"guided-steps\"><p>La Terre tourne autour du Soleil.</p><p>Le Soleil attire la Terre grâce à la <span class=\"course-key\">gravitation</span>.</p><p>Cette attraction contribue à maintenir la Terre sur son orbite.</p></div>",
      "traps": [
        "Dire que les planètes flottent sans interaction.",
        "Confondre gravitation et magnétisme.",
        "Oublier la masse.",
        "Dire que la gravitation n'existe que sur Terre."
      ],
      "remember": [
        "La gravitation est une attraction entre masses."
      ]
    },
    "sci-technologie-chaines": {
      "prerequisites": [
        "Savoir qu'un objet technique répond à un besoin.",
        "Savoir distinguer une information et une énergie."
      ],
      "understand": [
        "Un objet technique fonctionne souvent avec une chaîne d'information et une chaîne d'énergie.",
        "La chaîne d'information sert à capter, traiter et communiquer une information.",
        "La chaîne d'énergie sert à alimenter, distribuer, convertir et transmettre l'énergie."
      ],
      "words": [
        "chaîne d'information",
        "chaîne d'énergie",
        "capteur",
        "actionneur",
        "commande"
      ],
      "method": [
        "Identifie le besoin de l'objet.",
        "Repère ce qui capte une information : bouton, capteur, détecteur.",
        "Repère ce qui traite l'information : carte, programme, utilisateur.",
        "Repère ce qui agit : moteur, lampe, buzzer.",
        "Sépare clairement information et énergie."
      ],
      "example": "<div class=\"guided-steps\"><p>Dans une porte automatique, le capteur détecte une personne.</p><p>Cette information est traitée par le système.</p><p>Le moteur reçoit de l'énergie et ouvre la porte.</p><p>Capteur = information ; moteur = action.</p></div>",
      "traps": [
        "Confondre capteur et moteur.",
        "Mettre l'énergie dans la chaîne d'information.",
        "Oublier le besoin de l'objet.",
        "Décrire sans organiser."
      ],
      "remember": [
        "Information = décider ; énergie = faire agir."
      ]
    },
    "sci-programmation": {
      "prerequisites": [
        "Savoir suivre des instructions dans l'ordre.",
        "Savoir qu'une variable peut changer de valeur."
      ],
      "understand": [
        "Programmer, c'est écrire une suite d'instructions pour qu'un système fasse une action.",
        "Un programme peut utiliser des conditions : si quelque chose est vrai, alors on fait une action.",
        "Il peut aussi utiliser des boucles pour répéter une action."
      ],
      "words": [
        "programme",
        "instruction",
        "condition",
        "boucle",
        "variable"
      ],
      "method": [
        "Lis les instructions dans l'ordre.",
        "Repère les variables et leur valeur de départ.",
        "Repère les conditions avec si/alors.",
        "Repère les boucles et le nombre de répétitions.",
        "Note le résultat après chaque étape."
      ],
      "example": "<div class=\"guided-steps\"><p>Programme : mettre x à 3 ; ajouter 2 ; répéter 4 fois « ajouter 1 ».</p><p>Départ : x = 3.</p><p>Après +2 : x = 5.</p><p>Après la boucle : x = 9.</p></div>",
      "traps": [
        "Sauter une instruction.",
        "Oublier de répéter une boucle.",
        "Ne pas mettre à jour la variable.",
        "Lire une condition comme si elle était toujours vraie."
      ],
      "remember": [
        "Un programme se lit pas à pas, en notant les valeurs qui changent."
      ]
    },
    "sci-objets-connectes": {
      "prerequisites": [
        "Savoir qu'un objet peut communiquer avec un autre appareil.",
        "Savoir qu'une donnée est une information enregistrée ou transmise."
      ],
      "understand": [
        "Un objet connecté capte des informations et les transmet à un autre appareil ou à un réseau.",
        "Il peut utiliser des capteurs, une connexion et un programme.",
        "Il faut aussi penser à la protection des données personnelles."
      ],
      "words": [
        "objet connecté",
        "donnée",
        "réseau",
        "capteur",
        "vie privée"
      ],
      "method": [
        "Identifie ce que l'objet mesure ou détecte.",
        "Repère le capteur utilisé.",
        "Explique où part l'information.",
        "Indique l'action réalisée ou le service rendu.",
        "Mentionne si nécessaire le risque sur les données personnelles."
      ],
      "example": "<div class=\"guided-steps\"><p>Une montre connectée mesure le nombre de pas avec des capteurs.</p><p>Elle envoie les données à une application.</p><p>L'utilisateur peut suivre son activité, mais ces données doivent être protégées.</p></div>",
      "traps": [
        "Oublier le rôle du capteur.",
        "Confondre objet électrique et objet connecté.",
        "Oublier la transmission de données.",
        "Ne pas parler de vie privée quand c'est demandé."
      ],
      "remember": [
        "Objet connecté = capter une donnée, la traiter ou la transmettre."
      ]
    },
    "sci-capteurs-actionneurs": {
      "prerequisites": [
        "Savoir qu'un système peut recevoir une information puis agir.",
        "Savoir distinguer détecter et agir."
      ],
      "understand": [
        "Un capteur détecte une information : lumière, température, mouvement, pression.",
        "Un actionneur réalise une action : tourner, éclairer, chauffer, sonner.",
        "Dans un système automatisé, le capteur informe et l'actionneur agit."
      ],
      "words": [
        "capteur",
        "actionneur",
        "détecter",
        "agir",
        "système"
      ],
      "method": [
        "Cherche ce qui détecte une information.",
        "Nomme le capteur.",
        "Cherche ce qui produit l'action.",
        "Nomme l'actionneur.",
        "Explique le lien : l'information déclenche ou modifie l'action."
      ],
      "example": "<div class=\"guided-steps\"><p>Dans un lampadaire automatique, un capteur de luminosité détecte qu'il fait nuit.</p><p>Le système commande alors la lampe.</p><p>Le capteur détecte ; la lampe agit en éclairant.</p></div>",
      "traps": [
        "Appeler capteur ce qui agit.",
        "Appeler actionneur ce qui mesure.",
        "Oublier l'information détectée.",
        "Oublier l'action produite."
      ],
      "remember": [
        "Capteur = il détecte ; actionneur = il agit."
      ]
    },
    "sci-materiaux": {
      "prerequisites": [
        "Savoir qu'un objet est fabriqué avec une ou plusieurs matières.",
        "Savoir observer les propriétés simples : solide, léger, rigide, conducteur."
      ],
      "understand": [
        "Un matériau est choisi selon ses propriétés et l'usage de l'objet.",
        "On peut choisir un matériau parce qu'il est solide, léger, isolant, conducteur, recyclable ou résistant.",
        "Le choix d'un matériau dépend aussi du coût et de l'impact environnemental."
      ],
      "words": [
        "matériau",
        "propriété",
        "résistance",
        "conducteur",
        "recyclage"
      ],
      "method": [
        "Identifie l'objet et son usage.",
        "Liste les contraintes : solide, léger, étanche, isolant, conducteur.",
        "Associe chaque contrainte à une propriété du matériau.",
        "Compare plusieurs matériaux si besoin.",
        "Pense à l'environnement : recyclage, durée de vie, pollution."
      ],
      "example": "<div class=\"guided-steps\"><p>Pour fabriquer une gourde, on peut choisir l'aluminium car il est léger et résistant.</p><p>Pour une poignée de casserole, on choisit plutôt un matériau isolant pour éviter de se brûler.</p><p>Le matériau dépend donc de l'usage.</p></div>",
      "traps": [
        "Choisir un matériau sans justifier.",
        "Confondre objet et matériau.",
        "Oublier les contraintes d'utilisation.",
        "Oublier l'impact environnemental."
      ],
      "remember": [
        "On choisit un matériau pour ses propriétés, pas au hasard."
      ]
    }
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

  function buildDefaultLesson(course) {
    return {
      prerequisites: ["Cours à compléter."],
      understand: [course.goal || "Cours à compléter."],
      words: ["en construction"],
      method: ["Lire le cours lorsqu'il sera ajouté."],
      example: "Cours en construction.",
      traps: ["Cours encore à compléter."],
      remember: ["Cours en construction."]
    };
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
