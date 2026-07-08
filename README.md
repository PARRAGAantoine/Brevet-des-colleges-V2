# Brevet Sprint - Version 2 alpha

Cette version repart sur une architecture plus stable.

## Principe

L'application est organisée ainsi :

1. Matière
2. Thème
3. Cours
4. Exercices liés au cours

Un exercice ne doit plus être généré automatiquement et ne doit plus dépendre d'une recherche par mots-clés pour trouver son cours.

## Règles V2

- Tous les exercices sont écrits en dur dans `data/catalog.js`.
- Chaque exercice possède un `courseId`.
- Le bouton `Je ne comprends pas` affiche `helpSteps`, une aide spécifique à l'exercice, déjà placée sous la question et simplement masquée au départ.
- Les accents sont écrits directement dans les textes. Il n'y a pas de script de correction automatique.
- Les anciens générateurs de la V1 ne sont pas utilisés.

## État actuel

La V2 alpha contient :

- 4 matières ;
- les principaux thèmes du brevet ;
- un premier catalogue de cours ;
- des pages de structure à compléter pour les chapitres manquants ;
- des exercices liés aux cours déjà commencés ;
- une progression locale simple : cours validés et exercices réalisés.

La prochaine étape sera d'ajouter beaucoup plus d'exercices écrits à la main pour chaque cours, en commençant par les mathématiques.
