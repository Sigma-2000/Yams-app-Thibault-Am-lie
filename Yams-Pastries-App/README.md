# Projet de Gestion de Pâtisseries

## Présentation
Ce projet est un app permettant à un utilisateur lambda de pouvoir jouer au yams et de gagner des patisseries. 
Le joueur à trois essais, si il ne gagne pas avant.
Ce projet comporte aussi une page admin sous couvert de se connecter et d'avoir les droits d'accès, et qui permet la gestion de pâtisseries permettant d'ajouter, de modifier les quantités de patisserie et de les supprimer.

## Membres de l'équipe

- **Membre 1** : Thibaut Taglialatela
- **Membre 2** : Amélie Guyot

## Techniques Utilisées

- **Wireframe** : https://www.figma.com/design/amhfu1LYMtPUs0zLtBKMoe/yams?node-id=0-1&t=FENK7PMfQqQc4SO8-0
- **Notions** : https://www.notion.so/27219c671e5149fca5b242e4dcaf9de6?v=6a4fdda4c7cc407b8bb782bea40c882b
- **Frontend** : React, Redux Toolkit, RTK Query (appel Api)
- **Backend** : Node.js, Express
- **Persistance des données** :  stockage dans des stores redux 

## Fonctionnalités
- Jeu de dès Yams
- Authentification 
- Ajout de nouvelles pâtisseries
- Modification de la quantité des pâtisseries
- Suppression de pâtisseries

## Présentation du code de la page Game.jsx
## Structure du Code
- **Importations et Déclarations**

Le code commence par importer divers composants, hooks et fonctions nécessaires pour notre jeu. Cela inclut les composants PresentationRegles et Dice. J'ai choisi d'externaliser cela pour rendre mon code modulable, réutilisable et avoir des fichiers de code assez petit. 
On a aussi mes hooks useDispatch et useSelector de react-redux, qui permettent de gérer le store avec notamment
l'action rollDice de Redux.
On a l'import d'un autre store avec le hook useGetAllPastriesQuery qui permet de récupérer les données liés aux pâtisseries gagnés. On a également l'import du css ainsi que les hooks de base de React useEffect et useState.

- **Composant Game**

Le composant Game contient la mise en place et application de la logique du jeu. Il fais appel au store pour récupérer 
l'état des dès.
 Il utilise useDispatch pour envoyer une action Redux concernant le lancement du jeu et useSelector pour récupérer des morceaux de l'état global de Redux, tels que les essais restants, l'état du jeu, si le joueur a gagné, le message et la quantité de prix. Le hook useGetAllPastriesQuery est utilisé pour obtenir les données concernant les pâtisseries en faisant un appel Api gérer par RTK query.  
On va initialiser useState pour créer un état local prizeMessage afin de stocker le message concernant les prix. Ce hook est nécessaire car React fonctionne sur l'immutabilité des données et on a besoin de lui donc pour muter cette donnée.

- **Gestion des événements**

La fonction handleRollDice est appelée lorsque le joueur clique sur le bouton pour lancer le dé. Elle envoie l'action rollDice à Redux pour mettre à jour l'état du jeu et des dès, le state va alloir change.

- **Use Effect et appel Api**
 useEffect s'exécute lorsque hasWon, prizeQuantity, ou data changent, cela évite les effets de bords et d'appeler l'Api au chargement du composent. C'est d'ailleurs pour cela qu'on a mis dans le tableau des dépendances data afin d'indiquer que Use Effect doit surveiller ces données et se déclencher que lorsqu'elles ont changés. Si le joueur a gagné, que des prix sont disponibles et que les données des pâtisseries sont présentes, il sélectionne au hasard des pâtisseries pour les attribuer comme prix. Les pâtisseries disponibles sont filtrées, triées aléatoirement, et sélectionnées en nombre nécessaire pour les prix. Si les pâtisseries disponibles sont suffisantes, un message est généré avec les noms des pâtisseries. Sinon, un message indique qu'il n'y a pas assez de pâtisseries disponibles.
 Un des axes d'améliorations possibles et que j'aurai du mettre cette logique de fonction aléatoire peut étre dans services game et l'importer. 

- **Gestion des classes et texte du bouton**

La classe CSS pour le message est déterminée en fonction de si le joueur a gagné ou perdu, il dépend de l'état du state des dès donc. Le texte du bouton est défini en fonction de l'état du jeu (se base sur le même principe de state) : s'il reste des essais, il affiche le nombre d'essais restants ; si le joueur a gagné, il affiche un message de victoire ; sinon, il indique qu'il n'y a plus d'essais.

- **Rendu du composant**

Le composant rend les éléments de l'interface utilisateur, affichant les composants PresentationRegles et Dice, le message de jeu, le message de prix, et un bouton qui permet de lancer le dé. Ce bouton est désactivé si le jeu n'est pas actif (se base sur le state des dès).

### Fonctionnement du Backend

- Le serveur est implémenté avec Express et stocke les données dans un fichier JSON.
- Les routes principales utilisés par notre app :
  - `GET /pastries` : Récupère toutes les pâtisseries
  - `PUT api/pastry/:id` : Met à jour la quantité d'une pâtisserie
  - `POST api/pastry` : Ajoute une nouvelle pâtisserie
  - `DELETE api/pastry`: suppression de patisserie 

## Instructions pour l'Installation

1. Clonez le dépôt :
   ```bash
   git clone 
   cd Yams-Pastries-App
   npm install
   npm run dev
2. Clonez le dépôt de l'Api :
   ```bash
   git clone https://github.com/Antoine07/REACTFSD50/blob/main/yams_api/TP/yams_sujet.md
   npm install
   npm run dev

