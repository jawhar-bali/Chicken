                               - Documentation pour API CRUD "chicken" -

## Pour executer le programme voici la commande : npm run dev

## Architecture de l'application
L'application suit une architecture basée sur les modules suivants :

- config : La configuration de base de données .
- controllers : Les fonctions de contrôle qui traitent les requêtes et les réponses.
- middlewares : ce répertoire contient les middlewares utilisés dans le traitement des requêtes.
  et contient le fichier validate.js : un middleware personnalisé qui effectue la validation des saisies pour
  les opérations de création de données.
  Il utilise la bibliothèque Yup, qui est un validateur de schémas JavaScript simple et extensible, 
  pour définir et valider les règles de validation des données.
- models : Les modèles de données de l'application.
- routes : Les définitions des routes de l'API.
- server.js : Le fichier principal qui configure la base de données, les routes, le port "5000" et le serveur.

## Base de données : MongoDB
L'API Chicken utilise MongoDB comme système de gestion de base de données.
Les modèles de données sont définis dans le dossier models et sont utilisés 
pour interagir avec la base de données.
La configuration de base de données se trouve dans le dossier config,
où vous pouvez spécifier l'URL de connexion à MongoDB.


## Endpoint

L'API expose les endpoints suivants :

- `GET /chicken` : Récupérer tous les Chickens.
- `GET /chicken/:id` : Récupérer un Chicken spécifique par son ID.
- `POST /chicken` : Créer un nouveau Chicken.
- ` PUT /chicken/:id` : Mettre à jour un Chicken existant.
- `PATCH /chicken/:id` : Mettre à jour partiellement un Chicken existant.
- `DELETE /chicken/:id` : Supprimer un Chicken existant.

## Modèle Chicken

Le modèle `Chicken` comprend les attributs suivants :

- `name` : Nom du Chicken (champ requis, type : String).
- `birthday` : Date de naissance du Chicken (type : Date).
- `weight` : Poids du Chicken (champ requis, type : Number).
- `steps` : Nombre de pas effectués par le Chicken (par défaut : 0, type : Number).
- `isRunning` : Indicateur de course du chiken (par défaut : false, type : Boolean).
- `farmyard` : ID du farmyard associé au chiken (type : String, référence : Farmyard).

## Endpoints détaillés


*********** Récupère tous les chickens ****************
GET  http://localhost:5000/chicken
Paramètres de requête
Aucun.
Réponse
- Statut : 200 OK
- Corps de la réponse : Tableau d'objets `Chicken`.


********** Récupère un chicken spécifique par son ID ******
GET  http://localhost:5000/chicken/:id
Paramètres de requête
- `id` : ID du poulet (dans l'URL).
Réponse
- Statut : 200 OK
- Corps de la réponse : Objet `Chicken`.


********** Créer un nouveau chicken ****************
POST  http://localhost:5000/chicken
Corps de la requête
- `name` : Nom du Chicken (champ requis, type : String).
- `birthday` : Date de naissance du Chicken (type : Date).
- `weight` : Poids du Chicken (champ requis, type : Number).
- `steps` : Nombre de pas effectués par le Chicken (par défaut : 0, type : Number).
- `isRunning` : Indicateur de course du Chicken (par défaut : false, type : Boolean).
Réponse
- Statut : 201 Created
- Corps de la réponse : Objet `Chicken` créé.

*********** Met à jour un chicken existant (PUT)**************
PUThttp://localhost:5000/chicken/:id
Paramètres de requête
- `id` : ID du chicken (dans l'URL).
Corps de la requête
- `name` : Nom du poulet (champ requis, type : String).
- `birthday` : Date de naissance du poulet (type : Date).
- `weight` : Poids du poulet (champ requis, type : Number).
- `steps` : Nombre de pas effectués par le poulet (par défaut : 0, type : Number).
- `isRunning` : Indicateur de course du poulet (par défaut : false, type : Boolean).
Réponse
Statut : 200 OK
Corps de la réponse : Objet Chicken mis à jour.

*********** Met à jour un chicken existant (PATCH)**************
PATCH  http://localhost:5000/chicken/:id
Paramètres de requête
- `id` : ID du chicken (dans l'URL).
Corps de la requête
- `name` : Nom du poulet (champ requis, type : String).
- `birthday` : Date de naissance du poulet (type : Date).
- `weight` : Poids du poulet (champ requis, type : Number).
- `steps` : Nombre de pas effectués par le poulet (par défaut : 0, type : Number).
- `isRunning` : Indicateur de course du poulet (par défaut : false, type : Boolean).
Réponse
Statut : 200 OK
Corps de la réponse : Objet Chicken mis à jour.

************** augmenter steps de 1 *************
POST  http://localhost:5000/chicken/run
Corps de la requête
- `id` : id de chicken pour augmenter la valeur steps de 1
Réponse
Statut : 200 OK


************ Supprimer un chicken existant ***************
DELETE  http://localhost:5000/chicken/:id
Paramètres de requête
- `id` : ID du chicken (dans l'URL).
Réponse
- Statut : 204 No Content



## Modèle Farmyard

Le modèle `Farmyard` comprend les attributs suivants : ( j'ai donné un example des attributs )
- `name` : Nom de la Farmyard (champ requis, type : String).
- `location` : Emplacement de la ferme (type : String).

## Liaison Chicken - Farmyard
Un chicken peut être lié à un farmyard en utilisant l'attribut `farmyard` dans le modèle `Chicken`. 
L'attribut `farmyard` doit être l'ID du farmyard associé.


************* Crée un farmyard ****************
POST  http://localhost:5000/farmyard
Corps de la requête
- `name` : Nom du farmyard (champ requis, type : String).
- `location` : Location du farmyard (type : String).


************** Créer un chicken lié avec un farmyard dejà créé ********
POST  http://localhost:5000/chicken/farmyard
Corps de la requête
- `name` : Nom du Chicken (champ requis, type : String).
- `birthday` : Date de naissance du Chicken (type : Date).
- `weight` : Poids du Chicken (champ requis, type : Number).
- `steps` : Nombre de pas effectués par le Chicken (par défaut : 0, type : Number).
- `isRunning` : Indicateur de course du Chicken (par défaut : false, type : Boolean).
- `farmyardId` : ID du farmyard associé au Chicken (type : String, référence : Farmyard).
Réponse
- Statut : 201 Created
- Corps de la réponse : Objet `Chicken` créé.
