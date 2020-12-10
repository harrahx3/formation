const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

fct = function (a, callback){
  console.log("parametre de fct: "+a);
  callback(a);
}

fct("test", function(param){
  console.log("parametre de la fonctino de callback" + param);
})

maFonction = function (req, res) {
data = {
    surnom: "Harrah",
    age: 16,
    assos: [{nom: "eclair", logo: "logo_eclair.png"}, "fablab"]
  };

  res.render("home.ejs", data);
}

app.get('/', maFonction)

app.get('/mapage', function (req, res){
  res.send('contenu de la page 2')
})


app.post('/formulaire', function( req, res){
  console.log(req.body);
  res.status(200).send("votre nom est " + req.body.username);
})


app.listen(3000);
