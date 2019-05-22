//Dependcies
const express = require('express');
const path = require('path');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;
//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
 {
     routeName: 'table 1',
     id: '001',
     name: 'Bob',
     email: 'bob@email.com',
     phone: '555-5555',
 },
 {
    routeName: 'table 2',
     id: '002',
     name: 'Ted',
     email: 'ted@email.com',
     phone: '555-5558', 
 }

];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html" ));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html" ));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html" ));
});
//Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

app.get("/api/tables/:reservations", function(req, res) {
    const chosen = req.params.reservations;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });

  app.post("/api/reservations", function(req, res) {

    const newTable = req.body;

    
    console.log(newTable);

    reservations.push(newTable);

    res.json(newTable);
  });

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  //AJAX function that uses URL to reference API to GET 
