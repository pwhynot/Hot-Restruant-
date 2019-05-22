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
app.get("/", function(reg, res) {
    res.sendFile(path.join(__dirname, 'index.html' ));
});


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });