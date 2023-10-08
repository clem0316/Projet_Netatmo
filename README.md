## Bienvenue sur mon projet de candidature pour Netatmo ! :office:

![cover](https://github.com/clem0316/Projet_Netatmo/blob/f5fb0b971cd948f175ffb6fe4645f587ea47ca2e/img/image3.jpg)

### :rocket: Le Projet
Le but était de répondre à un cahier des charges :
- faire une requête d'API pour recevoir 10 profils d'utilisateur
- générer une Card pour chaque profil
- pouvoir ordonner par date de naissance nos utilisateurs
- pouvoir trier par genre
- supprimer une Card spécifique 

<br/>

### :floppy_disk: Technos
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a> </p>

<br/>

J'ai choisi d'utiliser REACT, JAVASCRIPT, TAILWIND et CSS

<br/>

## En détail :pencil:

<br/>

### Le pannel principal est composé de nos boutons en 3 parties : 
- la 1ère ligne concerne l'appel de notre API. J'ai choisi de laisser choisir l'utilisateur entre appeler 10 utilisateurs sans précision de genre, 10 hommes hommes ou 10 femmes. Un bouton "clear" permet de vider notre appel. 
- la 2ème ligne permet de trier dans l'ordre nos utilisateurs par âge. À noter que de base, après appel, ils sont déjà classés du plus jeune au plus vieux
- la 3ème ligne comporte des boutons d'affichage. Ils permettent, parmi les utilisateur appelés, de ne garder que les hommes ou les femmes. À tout moment il est possible de revenir à l'affichage initial, sans tri.

<br/>

![cover](https://github.com/clem0316/Projet_Netatmo/blob/d235ad1e3d0acffe0cc22f63350a7d29b4496b99/img/image1.png)

<br/>


### Le conteneur d'affichage des Cards.

Comme demandé, un bouton par Card permet la suppression de cette dernière. 

<br/>

![Cover](https://github.com/clem0316/Projet_Netatmo/blob/5dc1a9e310e94035c4098f1eda3250ec0732b3b3/img/image2.png)

<br/>

## Points à améliorer et objectifs à court terme :bookmark:

<br>

- J'aurais souhaité pouvoir ajouter une liste de favoris ainsi qu'une liste de blacklisté. Le principe n'aurait pas été compliqué : un bouton sur une card qui enverrai l'id de cet utilisateur dans un nouveau tableau, dont l'affichage se ferait sur l'onglet "My favorites". Même principe pour la blacklist qui irait sur l'onglet "My Blacklist".
- En plus de ces ajouts en favoris ou blacklit, ces profils seraient retirés de nos résultats issus du principal tableau. Ainsi, les recherches ne proposeraient plus ces mêmes profils, considérés comme ayant été statués par l'utilisateur de l'app.
- Je ne suis pas satisfait de la découpe de mes composants en React : le composant "Cards" est trop grand et aurait pu être allégé.

  
