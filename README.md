# Première scéance de formation sur node

Commandes utiles:
- Installation de nodejs et de npm (on utilise le gestionnaire de packet de apt comme souvent pour installer des packets (des logiciels) sous linux): $ sudo apt install nodejs npm
	NB: sudo signifie qu'il faut les prilivéges administrateurs (root) pour installer des paquets, attention il est dangereux d'executer des commandes que vous ne comprenez pas en root !
	NB2: si vous avez une erreur du type "Permission denied" c'est souvent que la commande que vous essayez d'executer necessite ses droits, la solution est donc d'ajouter sudo devant la commande
- Installation des packages npm:
	* $ npm install (pour installer toutes les dépendances définies dans package.json)
	* $ npm install express ejs (pour installer express et ejs, idem avec d'autre packages (cf npmjs.com))
- Lancer le serveur nodejs en local: $ node apps.js, puis aller à l'adresse localhost:3000
