# Travaux d'Héraclès #6 : Finaliser le jeux

Prérequis : cloner ce *repository*.
L'objectif de cette étape est de regrouper tous vos workshops dans un seul et même projet. L'interface et votre héros évolueront ainsi au fur et à mesure de vos travaux.
Petit tour du propriétaire : un fichier *index.html* est mis en place à la racine. Ce sera la page d'accueil de ton projet. Pour le moment, tu y trouveras les liens vers les différents sous dossier (Travaux) (Tu pourras le personnaliser à ta guise plus tard). Les sous-dossier par travaux sont également mis en place dans un dossier *labours*, avec pour chacun d'eux, un fichier *index.html* 

Compétence : utilisation du localStorage, redirection, initialisation

## Partie 1 : intégration
=> Dans un premier temps, nous allons procéder à l'intégration des travaux de 3 à 6, un par un. A chaque fois de nombreux petits ajustements seront nécessaires à notre code pour l'uniformiser et le mettre à jour.

### Intégration du workshop 3, Birds of Lake Stymphaluse
Copie-colle ton code de fin de workshop 3 dans le *index.html* (Attention à conserver le *<title>*) et ajoute le fichier *index.js*. Si tu n'as pas séparer tes workshops et travailler sur un code unique, prends le lien github (https://github.com/WildCodeSchool/js-poo-heracles-labour-3-part-2)
- 1/ Dans *index.html*, modifie les liens d'import des fichiers *.js* et *.css*. Ensuite, ajoute le paramètre `'hero'` dans la fonction `openModal()` et corrige l'*id* de la balise *<aside>* en `info`
- 2/ Dans *index.js*, supprime la partie sur l'ouverture des modales qui se trouvent maintenant dans `utils.js` et initialise 4 constantes avec un tableau vide pour les `Tiles` (`grass`, `bush`, `building` et `water`);
- 3/ Dans *index.js*, on va modifier l'instanciation de notre héros et de nos monstres pour la rendre compatible à toutes les étapes. Pour cela, on va mettre les paramètres de l'object dans l'ordre (*name*, *x*, *y*, *strength*, *dexterity*, *image*). Pas besoin d'image pour notre héro;

```
const Heracles = new Hero('👨 Heracles', 5, 4, 20, 6);

const bird1 = new Monster('Bird', 8, 9, 25, 12, '../../images/bird.svg');
const bird2 = new Monster('Bird', 3, 6, 25, 12, '../../images/bird.svg');
const bird3 = new Monster('Bird', 7, 7, 25, 12, '../../images/bird.svg');
```

- 4/ Modifie ensuite les classes `Hero`, `Monsters`, `Hind` (même si nous n'en avons pas besoin maintenant) et `Fighters` pour les rendre compatibles.

### Integration du workshop 4, Mares of Diomedes
Copie-colle ton code de fin de workshop 4 dans le *index.html* (Attention à conserver le title) et ajoute le fichier *index.js*. (Lien github si besoin : https://github.com/WildCodeSchool/js-poo-heracles-labour-4-part-2)
- 1/ Dans *index.html*, modifie les liens d'import des fichiers *.js* et *.css*. Ensuite, ajoute le paramètre `'hero'` dans la fonction `openModal()` et corrige l'*id* de la balise *aside* en `info`. Pense à mettre à jour le `<title>` et le `<h1>`.
- 2/ Dans *index.js*, ajoute 4 constantes avec un tableau vide pour les `Tiles` (`grass`, `bush`, `building` et `water`) et supprime la partie sur l'ouverture des modales qui se trouvent maintenant dans `utils.js`;
- 3/ Dans *index.js*, on va modifier l'instanciation de notre héros et de nos monstres pour la rendre compatible à toutes les étapes. Pour cela, on va mettre les paramètres de l'object dans l'ordre (*name*, *x*, *y*, *strength*, *dexterity*, *image*). Pas besoin d'image pour notre héro;

```
const mare1 = new Monster('🐴 Jument', 7, 7, 30, 17, '../../images/jument.png');
const mare2 = new Monster('🐴 Jument', 4, 3, 30, 17, '../../images/jument.png');
const mare3 = new Monster('🐴 Jument', 6, 2, 30, 12, '../../images/jument.png');
const mare4 = new Monster('🐴 Jument', 9, 2, 30, 12, '../../images/jument.png');
```

### Integration du workshop 5, Deer of Cerynie
Copie-colle ton code de fin de workshop 5 dans le *index.html* (Attention à conserver le title) et ajoute le fichier *index.js*. (Lien GitHub si besoin : https://github.com/WildCodeSchool/js-poo-heracles-labour-5-part-2)
- 1/ Dans *index.html*, vérifie les imports de tous les objets (`Grass`, `Water`, `Building`, `Bush`, `Hind`) et mets à jours les liens *js* et *css*. Pense à mettre à jour le `<title>` et le `<h1>`.
- 2/ Dans *index.js*, intègre les 3 constantes (`grass`, `bush` et `water`) et instancie `building` à un tableau vide (Au dessus de la création de l'arène);
- 3/ Dans *index.js*, on va modifier l'instanciation de notre héros et de nos monstres pour la rendre compatible à toutes les étapes. Pour cela, on va mettre les paramètres de l'object dans l'ordre (*name*, *x*, *y*, *strength*, *dexterity*, *image*). Pas besoin d'image pour notre héro. Pense à modifier l'instance de notre monstre en `new Hind()` si besoin et à modifer cet objet pour rendre ces paramètres compatibles (Ordre).

```
const Ceryneian = new Hind('🐴 Ceryneian Hind', 9, 6, 35, 20);
```

### Integration du workshop 6, Stables of Augeas
Copie-colle ton code de fin de workshop 5 dans le *index.html* (Attention à conserver le title) et ajoute le fichier *index.js*. (Lien GitHub si besoin : https://github.com/WildCodeSchool/js-poo-heracles-labour-6)
- 1/ Dans *index.html*, vérifie l'import de l'objets `Accessorie` et mets à jours les liens *js* et *css*. Pense à mettre à jour le `<title>` et le `<h1>`.
- 2/ Dans *index.js*, intègre les 4 constantes (`grass`, `bush`, `building` et `water`);
- 3/ Dans *index.js*, on va modifier l'instanciation de notre héros pour la rendre compatible à toutes les étapes. Pour cela, on va mettre les paramètres de notre héro dans l'ordre (*name*, *x*, *y*, *strength*, *dexterity*).

!!! Félicitations, on a maintenant une page fonctionnelle par étapes. Celles intégre et utilise les mêmes objets sources. Seule la data d'origine est différente.

## Partie 2 : Navigation
L'objectif de cette partie est de mettre en place la navigation automatique entre nos différentes pages. Je ne dois accéder au niveau suivant que si j'ai gagné le précedent.

- 1/ Dans la fichier, *index.html* à la racine, remplacer les menus de navigation par une *<li>* renvoyant vers notre premier niveau. (Texte : Commencer à jouer);
```
<li><a href="./labours/birds-of-lake-stymphalus/">Commencer à jouer</a></li>
```
- 2/ Maintenant, navigons en cas de victoire. Dans le fichier, *Arena.js*, nous allons modifier la fonction `battle()`. Pour le moment, en cas de victoire contre tous les monstres (`this.checkBattle()`), nous affichons un message de victoire. En plus de cela, nous allons rediriger vers le niveau suivant. Créer une nouvelle méthode `redirect()` et ajoute s'y un `setTimeOut(() => {}, time)`. Tu appelleras cette méthode en cas de victoire. Dans sa fonction *callback*, créer un nouveau élément *<a>* avec `document.createElement()`, puis assigne lui le `href` (vers la page suivante). Ensuite, `click()` sur ton élément.
=> Attention : nous avons un problème. L'url change en fonction de notre niveau... Pour gérer cela, nous allons ajouter une propriété à notre `Arena` (url). Maintenant, passe l'url du prochain niveau au moment de l'instanciation dans les différents *index.js*

```
const arena = new Arena(heracles, [mare1, mare2, mare3], '../deer-of-cerynie')
```
Puis, assigne à ton élément (<a>) nouvellement crée le `this.url` via le `href`. Donne au `setTimeout()`, la durée que tu trouves la mieux d'un point de vue UX.

Voilà, on peut naviguer sur le premier et le deuxième niveau, mais nous n'avons pas de condition réelle de victoire pour le niveau du *Deer of Cerynie*

- 3/ Dans la boucle `forEach()` de la méthode `globalMove()` qui permet de déplacer notre gibier, appelle la méthode `redirect()` si notre héro se trouve dans une case adjacente à notre gibier, après son déplacement. Et voilà, le tour est joué.

## Mémorisation des éléments de notre héro
A chaque étape, nous allons nous appuyer sur la vérification du local storage du navigateur pour passer les éléments de jeux et vérifier que le niveau précédent est bien réalisé pour passer au suivant.

- 1/ La première étape est d'instancier notre héro de début, dans notre page d'accueil. Comme ceci, nous savons que si nous ne trouvons pas de trace de notre héro, dans en mémoire (localstorage), c'est qu'un petit futé essaie de tricher => (redirection()). Pour ce faire, ajoute une balise *<script></script>* dans le *<body>* de ton *index.html* (page d'accueil) et génére ton héro de premier niveau.

```
const hero = {
  name: '👨 Heracles',
  dexterity: 6,
  strength: 20
}
```
Insère le ensuite dans le localStorage en le nommant *hero* (Sans oublier de le `JSON.stringify()`);
Si tu ne sais pas comment faire, réfères toi à la doc (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

*ASTUCE*, tu peux vérifier sa présence en allant dans l'outil pour développeur dans l'onglet *Application*, puis *localstorage*

- 2/ Maintenant, dans chaque début de fichier *index.js* sur nos pages de travaux d'Hercules, nous allons commencer par récupérer nos infos (via le `localStorage.getItem('hero')`)
    Si Rien, on utilise la création de balise <a> pour rediriger vers notre page d'accueil
    Si Hero, alors on se sert des infos en mémoire pour instancier notre héro

- 3/ C'est cool, notre héro est mémoriser, mais on perd son expérience. Pour cela, on va modifier notre fonction de redirection en cas de victoire. Avant de rediriger, on va mettre à jour notre `localStorage` avec les infos pertinentes (Expérience). A toi de jouer !!!
- 4/ Maintenant, modifie l'instanciation d'un hero pour qu'il récupère l'experience du `localStorage` si il y en a , sinon elle doit ếtre de 1000 par défaut. N'oublie pas de vérifier également la présence d'un héro en `localStorage` dans le *index.html* avant de le générer...

## Des pistes pour la suite...
- 1/ Ouvre automatiquement le descriptif du hero à lors du chargement d'une page
- 2/ Génére un modal pour expliquer l'objectif de la mission
- 3/ Ajoute une page de Victoire lorsque toutes les étapes sont faites...