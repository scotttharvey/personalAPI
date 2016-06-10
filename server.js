var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.get("/name", mainCtrl.getName)
app.get("/location", mainCtrl.getLocation)
app.get("/occupations", mainCtrl.getOccupations)
app.get("/latestoccupations", mainCtrl.getLatestOccupations)
app.get("/hobbies", mainCtrl.getHobbies)
app.get("/hobbies/:type", mainCtrl.getHobbiesType)
app.put("/name/:id", mainCtrl.updateName)
app.put("/location/:id", mainCtrl.updateLocation)
app.post("/hobbies", mainCtrl.createHobbies)
app.post("/occupations", mainCtrl.createOccupations)
app.post("/skills", mainCtrl.createSkills)
 var skills = [
   {
  "id": 1,
  "name": "Javascript",
  "experience": "Intermediate"
  }
]


var port = 9000
app.listen(port, function() {
    console.log('listening on port: ', port)
})
