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

