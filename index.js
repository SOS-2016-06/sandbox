var express = require("express");
var app = express();
var port = (process.env.PORT || 8080);
//Importar el fichero musics.js
var fichmusics = require('./musics');
var musics = [];
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/api/sandbox/musics",(req,res) => {
res.send(musics);
});
//GET
app.get("/musics/:tittle", (req,res) => {
  var tittle = req.params.tittle;
  console.log("New GET of resources " + tittle);
  res.send(musics);
});
//POST
app.post("/musics", (req,res) => {
  var tittle = req.body.tittle;
  var singer = req.body.singer;
  var year = req.body.year;
  var genero = req.body.genero;
  var music = [tittle,singer,year,genero];
  musics.push(music);
  console.log("New POST of resource" + music);
  res.sendStatus(200);
});
//PUT
app.put("/musics/:tittle", (req,res) => {
  musics.tittle = req.body.tittle;
  musics.singer = req.body.singer;
  musics.year = req.body.year;
  musics.genero = req.body.genero;
  console.log("New PUT of resource" + musics.tittle);
  res.sendStatus(200);
});
//DELETE
app.delete("/musics/:tittle", (req,res) => {
  var tittle = req.params.tittle;
  res.remove(musics);
  console.log("New DELETE of resource" + musics.tittle);
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log("Ready to go! port " + port);
});
