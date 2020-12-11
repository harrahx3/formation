
**Commandes utiles** (le `$` représente l'invite de commande du terminal, il ne fait pas partie de la commande, le raccourci `Ctrl+Alt+t` permet d'ouvrir un terminal sur la plupart des distributions linux):
- `cd`: Change directory, `mkdir`: Make directory, `ls`: liste le contenu du dossier (on peut aussi utiliser l'explorateur de fichiers graphique)
- Installation de nodejs et de npm (on utilise le gestionnaire de packet de apt comme souvent pour installer des packets (des logiciels) sous linux): `$ sudo apt install nodejs npm`. Une installation sur windows est également possible (voir sur internet). Installez aussi un éditeur de code (par exemple sublime text, atom ou visual studio code)
        NB: sudo signifie qu'il faut les prilivéges administrateurs (root) pour installer des paquets, attention il est dangereux d'executer des commandes que vous ne comprenez pas en root !
         Si vous avez une erreur du type "`Permission denied`" c'est souvent  que la commande que vous essayez d'executer necessite ses droits, la solution est donc d'ajouter sudo devant la commande
- `$ npm init` crée un fichier package.json, qui contiendra nottament les packages dont dépendent votre application, mais vous pouvez simplement copier coller la structure d'un projet nodejs vide à chaque fois qui doit contenir:
	* un fichier `app.js`
	* un fichier `package.json`
	* un dossier `views/` avec les fichiers de template
	* un dossier `public/` avec les ressources statiques
	* il y aura aussi les données de git (`.git/` et `.gitignore`) (les fichiers et dossiers dont le nom commence par un point sont cachés mais peuvent être vus avec `ls -a`, `.git/` est crée quand on fait un `git clone` ou `git init`), ainsi que `README.md`
	* et npm crée tout seul `package-lock.json` et `node_modules/` 
- Installation des packages npm:
    * `$ npm install` (pour installer toutes les dépendances définies dans package.json)
    * `$ npm install express ejs` (pour installer express et ejs, idem avec n'importe quel package ( voir [npmjs.com](https://npmjs.com))
- Lancer le serveur nodejs en local: `$ node apps.js`, puis aller à l'adresse [localhost:3000](http://localhost:3000) dans le navigateur (localhost est l'adresse ip locale de votre machine (127.0.0.1) et 3000 est le port utilisé, en effet le serveur nodejs écoute sur le port 3000 de votre propre ordinateur)
Remarque: il est possible d'accéder à ce site depuis un autre appareil connecté sur le même réseau local (WIFI), par exemple sur votre mobile : trouvez l'adresse ip de l'ordinateur jouant le rôle de serveur avec `ip a` (probablement de la forme 192.168.1.n, avec n entre 2 et 254), puis allez à l'adresse 192.168.1.n:3000 dans le navigateur du client.





**On a vu:**
- html: langage de balisage conçu pour représenter les pages web: les balises représentent des objets affichés sur la page (paragraphe de texte, images, formulaires...), on reverra la structure et les balises principales
- architecture client/serveur: le client est le navigateur web qui envoie des requêtes HTTP (protocol de communication) au serveur. Le serveur nodejs est programmé pour répondre de maniére spécifique à certaines requêtes (API) et répond au client en lui envoyant un status HTTP (200 OK, 404 NOT FOUND, ...) et des ressources (page HTML qui sera rendue par le navigateur, image, données (par exemple au format JSON), fichiers de scripts js ou de mise en forme css...)
- Le framework express permet d'avoir une syntaxe simple pour définir l'API coté serveur (`app.get()`, `app.post()`, `app.use()` pour les ressources statique, ...)
- les templates ejs: permet de générer une page html coté serveur en fonction de données: on créer la structure de la page dans un fichier ejs et on utilise `res.render()` pour remplir le contenu  à partir de données extraites par exemple d'une base de données
- jQuery: une bibliothèque JavaScript créée pour faciliter l'écriture de scripts côté client dans le code HTML des pages web, on reparlera des scripts coté client plus tard
