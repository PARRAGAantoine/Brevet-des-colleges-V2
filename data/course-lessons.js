(function () {
  const catalog = window.BREVET_V2_CATALOG;
  if (!catalog) return;

  addMissingCourses();

  const lessons = {
    "math-nombres-relatifs": mathLesson(
      "Nombres relatifs",
      "Un nombre relatif peut être positif, négatif ou nul. Il sert à parler d'une température sous zéro, d'une dette, d'une altitude, d'un score ou d'un déplacement.",
      ["nombre positif", "nombre négatif", "opposé", "droite graduée", "distance à zéro"],
      [
        "Imagine une droite graduée : à droite de 0, les nombres sont positifs ; à gauche de 0, ils sont négatifs.",
        "Ajouter un nombre positif, c'est avancer vers la droite.",
        "Soustraire un nombre positif, c'est reculer vers la gauche.",
        "Soustraire un nombre négatif revient à ajouter son opposé : 4 - (-3) = 4 + 3.",
        "Avant de calculer, demande-toi si tu te rapproches de 0 ou si tu t'en éloignes."
      ],
      `<div class="guided-steps">
        <p><strong>Exemple 1 :</strong> -5 - 6.</p>
        <p>Tu pars de -5. Le signe <strong>- 6</strong> veut dire que tu recules encore de 6 unités vers la gauche.</p>
        <p>Tu arrives à <strong>-11</strong>. Donc -5 - 6 = -11.</p>
        <p><strong>Exemple 2 :</strong> -5 + 6.</p>
        <p>Cette fois, tu avances de 6 unités vers la droite : -5, -4, -3, -2, -1, 0, 1. Donc -5 + 6 = 1.</p>
      </div>`,
      ["Confondre -5 - 6 avec -5 + 6.", "Oublier que -11 est plus petit que -4.", "Voir deux signes et calculer trop vite sans traduire le déplacement."]
    ),
    "math-fractions": mathLesson(
      "Fractions",
      "Une fraction représente une part d'un tout. Le nombre du bas indique en combien de parts on partage, le nombre du haut indique combien de parts on prend.",
      ["numérateur", "dénominateur", "fraction égale", "simplifier"],
      [
        "Lis d'abord ce que représente la fraction : une part, un partage, un quotient ou une proportion.",
        "Pour simplifier, cherche un nombre qui divise le numérateur et le dénominateur.",
        "Pour comparer ou additionner, mets souvent les fractions au même dénominateur.",
        "Pour calculer une fraction d'une quantité, divise la quantité par le dénominateur puis multiplie par le numérateur.",
        "Relis toujours la question : simplifier, comparer, additionner ou calculer une part."
      ],
      `<div class="guided-steps">
        <p><strong>Simplifier 18/30 :</strong> on cherche un nombre qui divise 18 et 30.</p>
        <p>6 divise les deux nombres : 18 ÷ 6 = 3 et 30 ÷ 6 = 5.</p>
        <p>Donc 18/30 = <strong>3/5</strong>.</p>
        <p><strong>Calculer 3/5 de 20 :</strong> on fait 20 ÷ 5 = 4, puis 4 × 3 = <strong>12</strong>.</p>
      </div>`,
      ["Simplifier seulement le numérateur.", "Additionner les dénominateurs.", "Lire 3/5 de 20 comme 3 ÷ 5 ÷ 20.", "Oublier qu'une fraction peut être plus grande que 1."]
    ),
    "math-puissances": mathLesson(
      "Puissances",
      "Une puissance est une écriture courte pour répéter une multiplication. L'exposant est le petit nombre écrit en haut : il indique combien de fois on multiplie par la même base.",
      ["puissance", "exposant", "carré", "cube", "écriture scientifique"],
      [
        "Lis d'abord la base : c'est le grand nombre.",
        "Lis ensuite l'exposant : c'est le petit nombre en haut.",
        "Remplace la puissance par une multiplication si tu hésites.",
        "Calcule les puissances avant les additions et soustractions.",
        "Avec 10, l'exposant positif donne le nombre de zéros : 10³ = 1000."
      ],
      `<div class="guided-steps">
        <p><strong>4²</strong> signifie 4 × 4. Donc 4² = 16.</p>
        <p><strong>4³</strong> signifie 4 × 4 × 4. Donc 4³ = 64.</p>
        <p><strong>10⁴</strong> signifie 10 × 10 × 10 × 10 = 10 000.</p>
        <p>Attention : <strong>5²</strong> ne veut pas dire 5 × 2. Cela veut dire 5 × 5.</p>
      </div>`,
      ["Confondre 5² avec 5 × 2.", "Oublier les priorités de calcul quand une puissance est dans une expression.", "Oublier les parenthèses : (-3)² = 9 mais -3² = -9."]
    ),
    "math-developpements": mathLesson(
      "Développements",
      "Développer, c'est enlever des parenthèses en multipliant chaque terme à l'intérieur. On transforme une multiplication avec parenthèses en addition ou soustraction.",
      ["développer", "parenthèse", "terme", "distributivité"],
      [
        "Repère le facteur devant la parenthèse : c'est lui qui va multiplier tout ce qui est dedans.",
        "Multiplie ce facteur par le premier terme de la parenthèse.",
        "Multiplie aussi ce facteur par le deuxième terme : il ne faut pas l'oublier.",
        "Garde le signe de chaque terme. Si le facteur est négatif, le signe peut changer.",
        "Réduis seulement les termes semblables : les x avec les x, les nombres avec les nombres."
      ],
      `<div class="guided-steps">
        <p><strong>Cas simple :</strong> 4(x + 3)</p>
        <p>Le 4 multiplie x et aussi 3 : 4 × x + 4 × 3 = <strong>4x + 12</strong>.</p>
        <p><strong>Cas avec un signe négatif :</strong> -3(x + 2)</p>
        <p>Le -3 multiplie x : -3 × x = <strong>-3x</strong>.</p>
        <p>Le -3 multiplie aussi 2 : -3 × 2 = <strong>-6</strong>.</p>
        <p>Donc -3(x + 2) = <strong>-3x - 6</strong>.</p>
      </div>`,
      ["Multiplier seulement le premier terme.", "Oublier le signe moins devant une parenthèse.", "Écrire -3(x + 2) = -3x + 6 au lieu de -3x - 6.", "Ajouter 4 et x alors que 4x signifie 4 × x."]
    ),
    "math-factorisation": mathLesson(
      "Factorisation",
      "Factoriser, c'est transformer une addition ou une soustraction en multiplication. On fait l'inverse du développement : on cherche un morceau commun, puis on le met devant une parenthèse.",
      ["facteur commun", "parenthèse", "forme factorisée", "forme développée"],
      [
        "Découpe l'expression en termes. Dans 6x + 12, les deux termes sont 6x et 12.",
        "Cherche ce qui apparaît dans tous les termes. Ici, 6 est commun car 6x = 6 × x et 12 = 6 × 2.",
        "Écris le facteur commun devant une parenthèse : 6(...).",
        "Dans la parenthèse, écris ce qui reste quand tu as enlevé le facteur commun. Dans 6x, il reste x. Dans 12, il reste 2.",
        "Garde le signe entre les termes : ici c'est +, donc on obtient 6(x + 2).",
        "Vérifie en redéveloppant : 6 × x + 6 × 2 = 6x + 12. Si on retrouve le départ, c'est bon."
      ],
      `<div class="guided-steps">
        <p><strong>Expression de départ :</strong> <span class="math-term"><span class="factor-color">6</span>x</span> + <span class="math-term"><span class="factor-color">6</span> × 2</span></p>
        <p><strong>1. Je repère le facteur commun.</strong> Le nombre <span class="factor-color">6</span> est présent dans les deux morceaux : <span class="factor-color">6</span>x et 12.</p>
        <p><strong>2. Je mets ce facteur devant la parenthèse.</strong> J'écris <span class="factor-color">6</span>( ... ).</p>
        <p><strong>3. J'écris ce qui reste dans la parenthèse.</strong> Dans <span class="factor-color">6</span>x, il reste x. Dans 12 = <span class="factor-color">6</span> × 2, il reste 2.</p>
        <p><strong>Résultat :</strong> 6x + 12 = <span class="factor-color">6</span>(x + 2).</p>
        <p><strong>Vérification :</strong> si je développe <span class="factor-color">6</span>(x + 2), je retrouve 6x + 12.</p>
      </div>`,
      ["Prendre un facteur qui n'est pas commun à tous les termes.", "Oublier un terme dans la parenthèse.", "Écrire seulement 6(x) et oublier le + 2.", "Changer le signe dans la parenthèse."]
    ),
    "math-equations": mathLesson(
      "Équations",
      "Résoudre une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie.",
      ["équation", "inconnue", "solution", "vérifier"],
      [
        "Regarde l'équation comme une balance : les deux côtés doivent rester égaux.",
        "Repère l'inconnue, souvent notée x.",
        "Enlève d'abord ce qui est ajouté ou retiré autour de l'inconnue.",
        "Enlève ensuite ce qui multiplie ou divise l'inconnue.",
        "Fais toujours la même opération des deux côtés.",
        "Vérifie en remplaçant x par la valeur trouvée."
      ],
      `<div class="guided-steps">
        <p>On résout 2x + 3 = 11.</p>
        <p>On veut isoler 2x. Le +3 gêne, donc on enlève 3 des deux côtés.</p>
        <p>2x + 3 - 3 = 11 - 3, donc 2x = 8.</p>
        <p>Le x est multiplié par 2. On divise donc les deux côtés par 2.</p>
        <p>x = 8 ÷ 2 = <strong>4</strong>.</p>
        <p>Vérification : 2 × 4 + 3 = 11, donc la solution est correcte.</p>
      </div>`,
      ["Changer un seul côté de l'égalité.", "Confondre 2x avec x + 2.", "Ne pas vérifier la solution.", "Faire la division avant d'avoir enlevé le nombre ajouté."]
    ),
    "math-arithmetique": mathLesson(
      "Arithmétique",
      "L'arithmétique étudie les nombres entiers : diviseurs, multiples, nombres premiers et décompositions. Elle sert souvent à simplifier des fractions ou à résoudre des problèmes de partage.",
      ["multiple", "diviseur", "nombre premier", "PGCD", "décomposition"],
      [
        "Pour tester un diviseur, divise et regarde s'il reste quelque chose.",
        "Pour trouver les multiples d'un nombre, multiplie-le par 1, 2, 3, etc.",
        "Un nombre premier a exactement deux diviseurs : 1 et lui-même.",
        "Pour décomposer un nombre, écris-le comme un produit de nombres premiers.",
        "Pour simplifier une fraction, cherche un diviseur commun au numérateur et au dénominateur."
      ],
      `<div class="guided-steps">
        <p><strong>24 est divisible par 6</strong> car 24 ÷ 6 = 4 exactement. Il n'y a pas de reste.</p>
        <p>On peut aussi écrire 24 = 2 × 2 × 2 × 3. C'est une décomposition en facteurs premiers.</p>
        <p>Pour simplifier 24/36, on cherche un diviseur commun. 12 divise 24 et 36, donc 24/36 = 2/3.</p>
      </div>`,
      ["Dire qu'un nombre est premier parce qu'il est impair.", "Confondre diviseur de 24 et multiple de 24.", "Oublier que 1 n'est pas un nombre premier."]
    ),
    "math-proportionnalite": mathLesson(
      "Proportionnalité",
      "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre.",
      ["coefficient", "tableau", "produit en croix", "unité"],
      [
        "Repère les deux grandeurs : par exemple masse et prix, distance et temps, nombre d'objets et coût.",
        "Vérifie si on multiplie toujours par le même nombre pour passer d'une ligne à l'autre.",
        "Si c'est proportionnel, tu peux passer par l'unité : cherche la valeur pour 1.",
        "Tu peux aussi utiliser un tableau de proportionnalité ou un produit en croix.",
        "Garde les unités dans ta réponse : euros, kilogrammes, mètres, minutes..."
      ],
      `<div class="guided-steps">
        <p>4 kg coûtent 12 €. On veut le prix de 6 kg.</p>
        <p>On passe par 1 kg : 12 ÷ 4 = 3. Donc 1 kg coûte 3 €.</p>
        <p>Pour 6 kg : 6 × 3 = <strong>18 €</strong>.</p>
        <p>La relation est proportionnelle car le prix augmente toujours dans le même rapport que la masse.</p>
      </div>`,
      ["Utiliser la proportionnalité alors que la situation n'est pas proportionnelle.", "Oublier les unités.", "Inverser les lignes dans un produit en croix.", "Ajouter au lieu de multiplier."]
    ),
    "math-pourcentages": mathLesson(
      "Pourcentages",
      "Un pourcentage est une proportion sur 100. Il permet de parler d'une partie, d'une réduction, d'une augmentation ou d'un taux.",
      ["pourcentage", "taux", "réduction", "augmentation"],
      [
        "Traduis le pourcentage : 10 % signifie 10 sur 100, donc 10/100.",
        "Calcule d'abord la partie correspondant au pourcentage.",
        "Pour une réduction, enlève cette partie à la valeur de départ.",
        "Pour une augmentation, ajoute cette partie à la valeur de départ.",
        "Relis si on demande le montant de la réduction, le taux ou la valeur finale."
      ],
      `<div class="guided-steps">
        <p>Un objet coûte 50 €. Il y a une réduction de 20 %.</p>
        <p>20 % de 50 €, c'est 20/100 × 50 = 10 €.</p>
        <p>Le prix final est donc 50 - 10 = <strong>40 €</strong>.</p>
        <p>Si la question demande seulement le montant de la réduction, la réponse est 10 €. Si elle demande le prix après réduction, la réponse est 40 €.</p>
      </div>`,
      ["Répondre au montant de la réduction au lieu du prix final.", "Oublier que 25 % correspond à un quart.", "Ajouter lors d'une réduction.", "Calculer le pourcentage sur la mauvaise valeur de départ."]
    ),
    "math-probabilites": mathLesson(
      "Probabilités",
      "Une probabilité mesure la chance qu'un événement arrive. Elle est comprise entre 0 et 1 : 0 veut dire impossible, 1 veut dire certain.",
      ["issue", "événement", "cas favorables", "cas possibles", "événement contraire"],
      [
        "Compte toutes les issues possibles : ce sont tous les résultats qui peuvent arriver.",
        "Compte les issues favorables : ce sont les résultats qui répondent à la question.",
        "Écris la fraction : cas favorables / cas possibles.",
        "Simplifie si possible.",
        "Vérifie que le résultat est entre 0 et 1.",
        "Si on demande l'événement contraire, tu peux faire 1 - probabilité de l'événement."
      ],
      `<div class="guided-steps">
        <p>Dans un sac, il y a 8 boules : 2 bleues et 6 rouges.</p>
        <p><strong>Événement :</strong> tirer une boule bleue.</p>
        <p>Il y a 8 cas possibles et 2 cas favorables, donc la probabilité est 2/8 = <strong>1/4</strong>.</p>
        <p><strong>Événement contraire :</strong> ne pas tirer une boule bleue. Sa probabilité est 1 - 1/4 = <strong>3/4</strong>.</p>
      </div>`,
      ["Confondre les cas favorables et tous les cas.", "Donner une probabilité plus grande que 1.", "Oublier de simplifier une fraction simple.", "Confondre un événement avec son contraire."]
    ),
    "math-statistiques": mathLesson(
      "Statistiques",
      "Les statistiques servent à résumer une liste de nombres. Au brevet, on te demande souvent la moyenne, la médiane ou l'étendue.",
      ["moyenne", "médiane", "étendue", "série"],
      [
        "Recopie la série et vérifie que tu n'as oublié aucune valeur.",
        "Pour une moyenne, additionne toutes les valeurs puis divise par le nombre de valeurs.",
        "Pour une médiane, range d'abord les valeurs dans l'ordre croissant.",
        "S'il y a un nombre impair de valeurs, la médiane est la valeur du milieu.",
        "S'il y a un nombre pair de valeurs, la médiane est la moyenne des deux valeurs du milieu.",
        "Pour l'étendue, fais plus grande valeur moins plus petite valeur."
      ],
      `<div class="guided-steps">
        <p><strong>Série :</strong> 4 ; 7 ; 9 ; 12 ; 15.</p>
        <p>La série est déjà rangée. Il y a 5 valeurs, donc la valeur du milieu est la 3e : la médiane est <strong>9</strong>.</p>
        <p>La moyenne vaut (4 + 7 + 9 + 12 + 15) ÷ 5 = 47 ÷ 5 = <strong>9,4</strong>.</p>
        <p>L'étendue vaut 15 - 4 = <strong>11</strong>.</p>
      </div>`,
      ["Calculer une moyenne en oubliant une valeur.", "Chercher la médiane sans ranger les nombres.", "Confondre médiane et moyenne.", "Pour une série avec 4 valeurs, prendre une seule valeur du milieu au lieu de faire la moyenne des deux valeurs centrales."]
    ),
    "math-fonctions": mathLesson(
      "Fonctions",
      "Une fonction est comme une machine : on donne un nombre de départ, elle applique une règle, puis elle donne un nombre d'arrivée.",
      ["fonction", "image", "antécédent", "formule", "graphique"],
      [
        "Si on demande l'image d'un nombre, on part du nombre donné et on applique la formule.",
        "Si on demande un antécédent, on cherche quel nombre de départ permet d'obtenir le résultat demandé.",
        "Dans un tableau, la ligne du haut donne souvent les nombres de départ et la ligne du bas les images.",
        "Sur un graphique, l'image se lit verticalement et l'antécédent horizontalement.",
        "Écris toujours le calcul avec f(nombre) pour éviter les confusions."
      ],
      `<div class="guided-steps">
        <p>On donne f(x) = 2x + 5.</p>
        <p><strong>Image de 4 :</strong> on remplace x par 4.</p>
        <p>f(4) = 2 × 4 + 5 = 8 + 5 = <strong>13</strong>.</p>
        <p>Donc 13 est l'image de 4 par la fonction f.</p>
      </div>`,
      ["Confondre image et antécédent.", "Lire f(4) comme une multiplication f × 4.", "Oublier de remplacer tous les x par la valeur donnée."]
    ),
    "math-fonctions-affines": mathLesson(
      "Fonctions affines",
      "Une fonction affine s'écrit f(x) = ax + b. Elle représente une situation qui augmente ou diminue toujours de la même façon.",
      ["fonction affine", "coefficient directeur", "ordonnée à l'origine", "droite"],
      [
        "Repère a : c'est le nombre qui multiplie x. Il indique comment la droite monte ou descend.",
        "Repère b : c'est le nombre ajouté à la fin. Il correspond à la valeur quand x vaut 0.",
        "Pour calculer une image, remplace x par la valeur donnée.",
        "Sur un graphique, une fonction affine est représentée par une droite.",
        "Garde le signe de b : f(x) = 3x - 2 n'est pas pareil que f(x) = 3x + 2."
      ],
      `<div class="guided-steps">
        <p>Pour f(x) = 3x - 2, le coefficient directeur est <strong>3</strong> et l'ordonnée à l'origine est <strong>-2</strong>.</p>
        <p>Pour calculer l'image de 4, on remplace x par 4 :</p>
        <p>f(4) = 3 × 4 - 2 = 12 - 2 = <strong>10</strong>.</p>
      </div>`,
      ["Oublier le signe de b.", "Confondre ax + b avec a + xb.", "Lire 3x comme 3 + x au lieu de 3 × x."]
    ),
    "math-pythagore": mathLesson(
      "Théorème de Pythagore",
      "Le théorème de Pythagore sert à calculer une longueur dans un triangle rectangle. Il ne fonctionne que si on sait que le triangle est rectangle.",
      ["triangle rectangle", "angle droit", "hypoténuse", "carré", "racine carrée"],
      [
        "Cherche d'abord l'angle droit : sans triangle rectangle, on n'utilise pas Pythagore.",
        "Repère l'hypoténuse : c'est le côté le plus long, en face de l'angle droit.",
        "Écris l'égalité avec les lettres du triangle : hypoténuse² = côté1² + côté2².",
        "Remplace les longueurs connues par les nombres.",
        "Calcule les carrés, puis la somme ou la différence selon la longueur cherchée.",
        "Si tu as trouvé le carré de la longueur, prends la racine carrée à la fin."
      ],
      `<div class="guided-steps">
        <p>Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 6 cm et 8 cm.</p>
        <p>L'hypoténuse est le côté opposé à l'angle droit. On la note h.</p>
        <p>On écrit : h² = 6² + 8².</p>
        <p>On calcule : h² = 36 + 64 = 100.</p>
        <p>Donc h = √100 = <strong>10 cm</strong>.</p>
      </div>`,
      ["Utiliser Pythagore dans un triangle qui n'est pas rectangle.", "Se tromper d'hypoténuse.", "Oublier la racine carrée à la fin.", "Additionner les longueurs au lieu d'additionner les carrés."]
    ),
    "math-thales": mathLesson(
      "Théorème de Thalès",
      "Le théorème de Thalès sert à calculer des longueurs quand deux triangles ont la même forme, grâce à des droites parallèles. On compare des longueurs qui se correspondent avec des rapports.",
      ["droites parallèles", "triangles correspondants", "rapport", "agrandissement", "réduction"],
      [
        "Vérifie qu'il y a deux droites parallèles : c'est l'information indispensable.",
        "Repère les deux triangles : le petit triangle et le grand triangle.",
        "Associe les côtés qui se correspondent : petit avec grand, dans le même ordre.",
        "Écris une égalité de rapports, par exemple AB/AD = AC/AE = BC/DE.",
        "Choisis les deux rapports utiles : celui avec la longueur inconnue et celui où tu connais les deux nombres.",
        "Calcule avec un produit en croix ou avec le coefficient d'agrandissement."
      ],
      `<div class="guided-steps">
        <p>On sait que (BC) est parallèle à (DE). Les triangles ABC et ADE se correspondent.</p>
        <p>On peut écrire : AB/AD = AC/AE = BC/DE.</p>
        <p>Supposons AB = 3 cm, AD = 6 cm et AC = 4 cm. On cherche AE.</p>
        <p>On utilise AB/AD = AC/AE, donc 3/6 = 4/AE.</p>
        <p>Produit en croix : 3 × AE = 6 × 4 = 24.</p>
        <p>Donc AE = 24 ÷ 3 = <strong>8 cm</strong>.</p>
      </div>`,
      ["Utiliser Thalès sans droites parallèles.", "Associer les mauvais côtés.", "Écrire les rapports dans un ordre différent d'une fraction à l'autre.", "Oublier l'unité à la fin."]
    ),
    "math-trigonometrie": mathLesson(
      "Trigonométrie",
      "La trigonométrie relie les angles et les longueurs dans un triangle rectangle. Elle sert quand on connaît un angle et une longueur, ou quand on veut retrouver un angle.",
      ["sinus", "cosinus", "tangente", "hypoténuse", "adjacent", "opposé"],
      [
        "Vérifie que le triangle est rectangle : sinon on n'utilise pas sinus, cosinus ou tangente au collège.",
        "Repère l'angle dont on parle. Les mots adjacent et opposé dépendent de cet angle.",
        "L'hypoténuse est toujours le côté en face de l'angle droit.",
        "Le côté adjacent touche l'angle étudié, mais ce n'est pas l'hypoténuse.",
        "Le côté opposé est en face de l'angle étudié.",
        "Choisis la formule : cosinus = adjacent/hypoténuse ; sinus = opposé/hypoténuse ; tangente = opposé/adjacent."
      ],
      `<div class="guided-steps">
        <p>Dans un triangle rectangle, on étudie l'angle A.</p>
        <p>Le côté adjacent à l'angle A mesure 6 cm. L'hypoténuse mesure 10 cm.</p>
        <p>On cherche le cosinus, donc on utilise : cos(A) = adjacent / hypoténuse.</p>
        <p>cos(A) = 6/10 = <strong>0,6</strong>.</p>
        <p>Astuce mémoire : <strong>CAH</strong> signifie Cosinus = Adjacent / Hypoténuse.</p>
      </div>`,
      ["Confondre côté opposé et côté adjacent.", "Oublier que l'hypoténuse est toujours en face de l'angle droit.", "Utiliser la trigonométrie dans un triangle non rectangle.", "Choisir sinus, cosinus ou tangente avant d'avoir nommé les côtés."]
    ),
    "math-transformations": mathLesson(
      "Transformations",
      "Une transformation permet d'obtenir une nouvelle figure à partir d'une figure de départ. Selon la transformation, la figure peut glisser, tourner, se retourner ou changer de taille.",
      ["symétrie", "translation", "rotation", "homothétie", "image d'un point"],
      [
        "Lis le nom de la transformation : ce mot indique la règle à appliquer.",
        "Pour une symétrie axiale, utilise l'axe comme un miroir.",
        "Pour une translation, fais glisser tous les points dans la même direction et de la même longueur.",
        "Pour une rotation, repère le centre, l'angle et le sens de rotation.",
        "Pour une homothétie, repère le centre et le coefficient : la figure est agrandie ou réduite.",
        "Transforme les points importants un par un, puis relie-les dans le même ordre."
      ],
      `<div class="guided-steps">
        <p>Une translation de 3 carreaux vers la droite et 2 carreaux vers le haut déplace chaque point exactement de la même façon.</p>
        <p>Si le point A bouge ainsi, le point B doit aussi bouger de 3 carreaux vers la droite et 2 vers le haut.</p>
        <p>La figure ne change pas de taille et ne tourne pas : elle glisse.</p>
      </div>`,
      ["Confondre rotation et symétrie.", "Déplacer seulement un point de la figure.", "Changer la taille dans une translation ou une rotation.", "Oublier le centre dans une rotation ou une homothétie."]
    ),
    "math-volume": mathLesson(
      "Volumes",
      "Un volume mesure la place occupée par un solide. On ne mesure plus seulement une surface : on mesure l'intérieur d'un objet en 3 dimensions.",
      ["volume", "solide", "aire de base", "hauteur", "unité cube"],
      [
        "Identifie le solide : pavé droit, prisme, cylindre, pyramide, cône ou boule.",
        "Cherche la formule qui correspond à ce solide.",
        "Pour un prisme ou un cylindre, utilise souvent : volume = aire de la base × hauteur.",
        "Pour une pyramide ou un cône, il y a un partage par 3 : volume = aire de la base × hauteur ÷ 3.",
        "Remplace les longueurs par les valeurs données.",
        "Écris la réponse avec une unité cube : cm³, m³, etc."
      ],
      `<div class="guided-steps">
        <p>Pour un pavé droit, Volume = longueur × largeur × hauteur.</p>
        <p>Si un pavé mesure 5 cm de long, 3 cm de large et 4 cm de haut :</p>
        <p>V = 5 × 3 × 4 = <strong>60 cm³</strong>.</p>
        <p>On écrit cm³ car on mesure un volume, pas une longueur ni une aire.</p>
      </div>`,
      ["Confondre aire et volume.", "Oublier que le volume s'exprime en cm³, m³, L, etc.", "Utiliser la formule d'une aire à la place d'une formule de volume.", "Oublier de diviser par 3 pour une pyramide ou un cône."]
    ),
    "math-echelles": mathLesson(
      "Échelles",
      "Une échelle indique le lien entre une longueur sur un plan et la longueur réelle.",
      ["échelle", "plan", "longueur réelle", "conversion"],
      [
        "Lis l'échelle avant de calculer : 1:1000 signifie que 1 cm sur le plan représente 1000 cm en réalité.",
        "Si tu passes du plan à la réalité, tu multiplies par le nombre de l'échelle.",
        "Si tu passes de la réalité au plan, tu divises par le nombre de l'échelle.",
        "Convertis l'unité si nécessaire : 100 cm = 1 m.",
        "Vérifie que le résultat est réaliste : une distance réelle est souvent plus grande que la distance sur le plan."
      ],
      `<div class="guided-steps">
        <p>À l'échelle 1:1000, 2 cm sur le plan représentent 2 × 1000 = 2000 cm en réalité.</p>
        <p>On convertit : 2000 cm = 20 m.</p>
        <p>Donc 2 cm sur le plan représentent <strong>20 m</strong> en réalité.</p>
      </div>`,
      ["Oublier de convertir les centimètres en mètres.", "Inverser plan et réalité.", "Croire que 1:1000 veut dire 1000 cm sur le plan.", "Donner une réponse sans unité."]
    ),
    "math-algorithmique": mathLesson(
      "Algorithmique",
      "Un algorithme est une suite d'instructions à suivre dans un ordre précis.",
      ["instruction", "variable", "condition", "boucle"],
      [
        "Lis les instructions dans l'ordre exact : un algorithme se suit ligne par ligne.",
        "Note la valeur de départ de la variable.",
        "Après chaque instruction, écris la nouvelle valeur au brouillon.",
        "Si une condition apparaît, vérifie si elle est vraie ou fausse avant de continuer.",
        "S'il y a une boucle, répète les instructions le bon nombre de fois.",
        "À la fin, écris le résultat obtenu et vérifie qu'il correspond à la question."
      ],
      `<div class="guided-steps">
        <p>Programme : choisir 5, ajouter 3, multiplier par 2.</p>
        <p>Étape 1 : on choisit 5.</p>
        <p>Étape 2 : 5 + 3 = 8.</p>
        <p>Étape 3 : 8 × 2 = <strong>16</strong>.</p>
        <p>Si on multipliait avant d'ajouter, on ne suivrait pas le programme.</p>
      </div>`,
      ["Sauter une étape.", "Faire les calculs dans le mauvais ordre.", "Ne pas mettre à jour la variable après une instruction.", "Confondre une condition avec une instruction toujours vraie."]
    ),
    "math-algorithmique-tableur": mathLesson(
      "Tableur",
      "Un tableur utilise des cellules et des formules pour calculer automatiquement.",
      ["cellule", "formule", "colonne", "ligne"],
      [
        "Repère les cellules utilisées : A1 signifie colonne A, ligne 1.",
        "Une formule commence presque toujours par le signe =.",
        "Remplace chaque cellule par sa valeur pour comprendre le calcul.",
        "Respecte les priorités de calcul dans la formule.",
        "Si la formule est recopiée, observe ce qui change dans les références de cellules."
      ],
      `<div class="guided-steps">
        <p>Si A1 contient 4, la formule =A1*3 signifie : prendre la valeur de A1 et la multiplier par 3.</p>
        <p>On remplace A1 par 4 : 4 × 3 = <strong>12</strong>.</p>
        <p>Le résultat affiché dans la cellule est donc 12.</p>
      </div>`,
      ["Oublier que les formules commencent par =.", "Confondre A1 et 1A.", "Lire * comme une addition alors que c'est une multiplication.", "Oublier les priorités dans une formule avec plusieurs opérations."]
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
      prerequisites: mathPrerequisites(title),
      understand: [main],
      words,
      method,
      example,
      traps,
      remember: mathRemember(title)
    };
  }

  function mathPrerequisites(title) {
    if (/Nombres relatifs/i.test(title)) return [
      "Savoir placer 0, des nombres positifs et des nombres négatifs sur une droite graduée.",
      "Comprendre qu'un nombre négatif est plus petit que 0."
    ];
    if (/Fractions/i.test(title)) return [
      "Savoir diviser un entier par un entier simple.",
      "Connaître les tables de multiplication pour simplifier une fraction."
    ];
    if (/Puissances/i.test(title)) return [
      "Savoir multiplier plusieurs nombres.",
      "Connaître les priorités de calcul : les puissances se calculent avant les additions."
    ];
    if (/Développements/i.test(title)) return [
      "Savoir que 4x signifie 4 × x.",
      "Savoir multiplier un nombre positif ou négatif par chaque terme d'une parenthèse."
    ];
    if (/Factorisation/i.test(title)) return [
      "Savoir reconnaître une multiplication cachée, par exemple 12 = 6 × 2.",
      "Savoir développer une expression pour vérifier le résultat."
    ];
    if (/Équations/i.test(title)) return [
      "Savoir calculer avec des lettres comme x.",
      "Comprendre qu'une égalité doit rester vraie des deux côtés."
    ];
    if (/Arithmétique/i.test(title)) return [
      "Savoir poser une division simple.",
      "Connaître les mots diviseur, multiple et reste."
    ];
    if (/Proportionnalité/i.test(title)) return [
      "Savoir lire un tableau à deux lignes.",
      "Savoir multiplier et diviser pour passer par l'unité."
    ];
    if (/Pourcentages/i.test(title)) return [
      "Savoir que 100 % représente le tout.",
      "Savoir calculer une fraction simple d'une quantité."
    ];
    if (/Probabilités/i.test(title)) return [
      "Savoir compter toutes les possibilités sans en oublier.",
      "Savoir écrire une fraction simple."
    ];
    if (/Statistiques/i.test(title)) return [
      "Savoir ranger des nombres dans l'ordre croissant.",
      "Savoir additionner plusieurs valeurs et diviser."
    ];
    if (/Fonctions affines/i.test(title)) return [
      "Savoir remplacer x par un nombre dans une expression.",
      "Savoir lire une droite sur un graphique."
    ];
    if (/Fonctions/i.test(title)) return [
      "Savoir remplacer une lettre par un nombre.",
      "Savoir lire un tableau ou un graphique simple."
    ];
    if (/Pythagore/i.test(title)) return [
      "Savoir reconnaître un triangle rectangle.",
      "Savoir calculer un carré comme 6² = 36."
    ];
    if (/Thalès/i.test(title)) return [
      "Savoir reconnaître deux droites parallèles.",
      "Savoir écrire et utiliser une égalité de fractions."
    ];
    if (/Trigonométrie/i.test(title)) return [
      "Savoir reconnaître un triangle rectangle.",
      "Savoir repérer un angle et les côtés qui le touchent."
    ];
    if (/Transformations/i.test(title)) return [
      "Savoir repérer des points sur une figure.",
      "Savoir utiliser une règle, un quadrillage ou un centre de transformation."
    ];
    if (/Volumes/i.test(title)) return [
      "Savoir reconnaître quelques solides : pavé, cylindre, pyramide, cône.",
      "Savoir distinguer longueur, aire et volume."
    ];
    if (/Échelles/i.test(title)) return [
      "Savoir convertir des centimètres en mètres.",
      "Savoir multiplier ou diviser par 10, 100, 1000."
    ];
    if (/Algorithmique/i.test(title)) return [
      "Savoir suivre des consignes dans l'ordre.",
      "Savoir noter une valeur qui change à chaque étape."
    ];
    if (/Tableur/i.test(title)) return [
      "Savoir lire une ligne et une colonne.",
      "Savoir qu'une formule de tableur commence par le signe =."
    ];
    return ["Lire la consigne lentement.", "Écrire les calculs au brouillon."];
  }

  function mathRemember(title) {
    if (/Nombres relatifs/i.test(title)) return ["Sur une droite graduée, ajouter fait avancer vers la droite et soustraire fait reculer vers la gauche."];
    if (/Fractions/i.test(title)) return ["Une fraction se manipule toujours en respectant le numérateur et le dénominateur : on ne change pas seulement le haut ou seulement le bas."];
    if (/Puissances/i.test(title)) return ["L'exposant indique une multiplication répétée, pas une multiplication par l'exposant."];
    if (/Développements/i.test(title)) return ["Développer, c'est distribuer le facteur à tous les termes de la parenthèse, avec les signes."];
    if (/Factorisation/i.test(title)) return ["Factoriser, c'est retrouver ce qui est commun et le mettre devant une parenthèse."];
    if (/Équations/i.test(title)) return ["Dans une équation, chaque opération faite à gauche doit aussi être faite à droite."];
    if (/Arithmétique/i.test(title)) return ["Un diviseur partage un nombre sans reste ; un multiple est le résultat d'une multiplication."];
    if (/Proportionnalité/i.test(title)) return ["En proportionnalité, le même coefficient relie toujours les deux grandeurs."];
    if (/Pourcentages/i.test(title)) return ["Un pourcentage est une part sur 100 : commence toujours par savoir si on demande la part ou la valeur finale."];
    if (/Probabilités/i.test(title)) return ["Une probabilité se calcule avec cas favorables / cas possibles et doit rester entre 0 et 1."];
    if (/Statistiques/i.test(title)) return ["Moyenne, médiane et étendue ne répondent pas à la même question : il faut choisir le bon indicateur."];
    if (/Fonctions affines/i.test(title)) return ["Dans f(x) = ax + b, a règle la pente et b donne la valeur au départ quand x vaut 0."];
    if (/Fonctions/i.test(title)) return ["L'image part d'un x donné ; l'antécédent cherche le x qui donne une image donnée."];
    if (/Pythagore/i.test(title)) return ["Pythagore ne s'utilise que dans un triangle rectangle et l'hypoténuse est le côté le plus long."];
    if (/Thalès/i.test(title)) return ["Thalès repose sur des droites parallèles et des rapports écrits dans le même ordre."];
    if (/Trigonométrie/i.test(title)) return ["En trigonométrie, nomme toujours les côtés par rapport à l'angle étudié avant de choisir la formule."];
    if (/Transformations/i.test(title)) return ["Une transformation suit une règle précise : miroir, glissement, rotation ou changement de taille."];
    if (/Volumes/i.test(title)) return ["Un volume mesure l'intérieur d'un solide et s'exprime avec une unité cube."];
    if (/Échelles/i.test(title)) return ["À l'échelle 1:n, 1 cm sur le plan représente n cm en réalité."];
    if (/Algorithmique/i.test(title)) return ["Un algorithme se suit étape par étape : l'ordre des instructions change le résultat."];
    if (/Tableur/i.test(title)) return ["Dans un tableur, remplace les cellules par leurs valeurs pour comprendre la formule."];
    return [`Pour réussir ${title}, commence par reconnaître le type de question, puis applique la méthode adaptée.`];
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
