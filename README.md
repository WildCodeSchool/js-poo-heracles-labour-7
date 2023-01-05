# Labors of Heracles #7: Finalize the game

Prerequisite: clone this *repository*.
The objective of this step is to group all your workshops into a single project. The interface and your hero will thus evolve as your work progresses.
Small tour of the owner: an *index.html* file is set up at the root. This will be the home page of your project. For the moment, you will find the links to the different sub-folders (Works)(You can customize it as you wish later). The sub-folders by labours are also set up in a *labours* folder, with for each of them, an *index.html* file

Skill: use of localStorage, redirection, initialization

## Part 1: integration
=> At first, we will proceed to the integration of the labours from 3 to 6, one by one. Each time many small adjustments will be necessary to our code to standardize and update it.

### Integration of workshop 3, Birds of Lake Stymphaluse
Copy and paste your end of workshop 3 code into the *index.html* (Be careful to keep the *<title>*) and add the *index.js* file. If you haven't separated your workshops and worked on a single code, take the github link (https://github.com/WildCodeSchool/js-poo-heracles-labour-3-part-2)
- 1/ In *index.html*, modify the import links of *.js* and *.css* files. Next, add the `'hero'` parameter in the `openModal()` function and correct the *id* of the *<aside>* tag to `info`
- 2/ In *index.js*, delete the part on the opening of the modals which are now in `utils.js` and initialize 4 constants with an empty array for the `Tiles` (`grass`, `bush` , `building` and `water`);
- 3/ In *index.js*, we will modify the instantiation of our hero and our monsters to make it compatible at all stages. To do this, we will put the object parameters in order (*name*, *x*, *y*, *strength*, *dexterity*, *image*). No image needed for our hero;

```
const Heracles = new Hero('👨 Heracles', 5, 4, 20, 6);

const bird1 = new Monster('Bird', 8, 9, 25, 12, '../../images/bird.svg');
const bird2 = new Monster('Bird', 3, 6, 25, 12, '../../images/bird.svg');
const bird3 = new Monster('Bird', 7, 7, 25, 12, '../../images/bird.svg');
```

- 4/ Then modify the classes `Hero`, `Monsters`, `Hind` (even if we don't need them now) and `Fighters` to make them compatible.

### Integration of workshop 4, Mares of Diomedes
Copy and paste your end of workshop 4 code in the *index.html* (Be careful to keep the title) and add the *index.js* file. (Github link if needed: https://github.com/WildCodeSchool/js-poo-heracles-labour-4-part-2)
- 1/ In *index.html*, modify the import links of *.js* and *.css* files. Next, add the `'hero'` parameter in the `openModal()` function and correct the *id* of the *aside* tag to `info`. Remember to update the `<title>` and the `<h1>`.
- 2/ In *index.js*, add 4 constants with an empty array for the `Tiles` (`grass`, `bush`, `building` and `water`) and delete the part on the opening of the modals which are now in `utils.js`;
- 3/ In *index.js*, we will modify the instantiation of our hero and our monsters to make it compatible at all stages. To do this, we will put the object parameters in order (*name*, *x*, *y*, *strength*, *dexterity*, *image*). No image needed for our hero;

```
const mare1 = new Monster('🐴 Mare', 7, 7, 30, 17, '../../images/mare.png');
const mare2 = new Monster('🐴 Mare', 4, 3, 30, 17, '../../images/mare.png');
const mare3 = new Monster('🐴 Mare', 6, 2, 30, 12, '../../images/mare.png');
const mare4 = new Monster('🐴 Mare', 9, 2, 30, 12, '../../images/mare.png');
```

### Integration of workshop 5, Deer of Cerynie
Copy and paste your end of workshop 5 code into the *index.html* (Be careful to keep the title) and add the *index.js* file. (GitHub link if needed: https://github.com/WildCodeSchool/js-poo-heracles-labour-5-part-2)
- 1/ In *index.html*, check the imports of all objects (`Grass`, `Water`, `Building`, `Bush`, `Hind`) and update the *js* and *css links *. Remember to update the `<title>` and the `<h1>`.
- 2/ In *index.js*, integrate the 3 constants (`grass`, `bush` and `water`) and instantiate `building` to an empty array (Above the creation of the arena);
- 3/ In *index.js*, we will modify the instantiation of our hero and our monsters to make it compatible at all stages. To do this, we will put the object parameters in order (*name*, *x*, *y*, *strength*, *dexterity*, *image*). No picture needed for our hero. Remember to modify the instance of our monster in `new Hind()` if necessary and to modify this object to make these parameters compatible (Order).

```
const Ceryneian = new Hind('🐴 Ceryneian Hind', 9, 6, 35, 20);
```

### Integration of workshop 6, Stables of Augeas
Copy and paste your end of workshop 5 code into the *index.html* (Be careful to keep the title) and add the *index.js* file. (GitHub link if needed: https://github.com/WildCodeSchool/js-poo-heracles-labour-6)
- 1/ In *index.html*, check the import of the `Accessorie` objects and update the *js* and *css* links. Remember to update the `<title>` and the `<h1>`.
- 2/ In *index.js*, include the 4 constants (`grass`, `bush`, `building` and `water`);
- 3/ In *index.js*, we will modify the instantiation of our hero to make it compatible at all stages. To do this, we will put the parameters of our hero in order (*name*, *x*, *y*, *strength*, *dexterity*).

!!! Congratulations, we now have a functional step-by-step page. Those integrate and use the same source objects. Only the original data is different.

## Part 2: Navigation
The objective of this part is to set up automatic navigation between our different pages. I only have to go to the next level if I have won the previous one.

- 1/ In the file, *index.html* at the root, replace the navigation menus with a single *<li>* referring to our first level. (Text: start playing);
```
<li><a href="./labours/birds-of-lake-stymphalus/">Start playing</a></li>
```
- 2/ Now, let's navigate in case of victory. In the file, *Arena.js*, we will modify the `battle()` function. For the moment, in case of a victory against all the monsters (`this.checkBattle()`), we display a victory message. In addition to that, we will redirect to the next level. Create a new `redirect()` method and add a `setTimeOut(() => {}, time)` to it. You will call this method if you win. In its *callback* function, create a new *<a>* element with `document.createElement()`, then assign it the `href` (to the next page). Then `click()` on your element.
=> Attention: we have a problem. The url changes depending on our level... To handle this we will add a property to our `Arena` (url). Now pass the next level url at instantiation time in the various *index.js*

```
const arena = new Arena(heracles, [mare1, mare2, mare3], '../deer-of-cerynie')
```
Then, assign your newly created (<a>) element the `this.url` via the `href`. Give the `setTimeout()` the duration that you find best from a UX point of view.

Here we are, we can navigate on the first and the second level, but we don't have a real victory condition for the level of *Deer of Cerynie*

- 3/ In the `forEach()` loop of the `globalMove()` method which allows us to move our game, calls the `redirect()` method if our hero is in a square adjacent to our deer, after its movement. That's it !!!

## Memorizing elements of our hero
At each stage, we will rely on the verification of the local storage of the browser to pass the game elements and verify that the previous level is well done to pass to the next one.

- 1/ The first step is to instantiate our initial hero, in our home page. Like this, we know that if we can't find a trace of our hero, in memory (localstorage), it's that some smart guy is trying to cheat => (redirection()). To do this, add a *<script></script>* tag in the *<body>* of your *index.html* (home page) and generate your first level hero.

```
const hero = {
  name: '👨Heracles',
  dexterity: 6,
  strength: 20
}
```
Then insert it into the localStorage by naming it *hero* (Without forgetting the `JSON.stringify()`);
If you don"t know how to do it, just read the doc (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

*TIP*, you can check its presence by going to the developer tool in the *Application* tab, then *localstorage*

- 2/ Now, in each beginning of *index.js* file on our Hercules work pages, we will start by retrieving our info (via the `localStorage.getItem('hero')`)
    If nothing, we use the <a> tag creation to redirect to our homepage
    If Hero, then we use the info in memory to instantiate our hero

- 3/ It's cool, our hero is memorized, but we lose his experience. For this, we will modify our redirection function in case of victory. Before redirecting, we will update our `localStorage` with the relevant information (Experience). Your turn !!!
- 4/ Now, modify the instantiation of a hero so that it retrieves the experience from the `localStorage` if there is any, otherwise it must be 1000 by default. Don't forget to check for `localStorage` presence in the *index.html* file as well...

## Tracks for the future...
- 1/ Automatically opens the hero's description when loading a page
- 2/ Generate a modal to explain the objective of the mission
- 3/ Add a Victory page when all the steps are done...