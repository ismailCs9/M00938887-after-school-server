// ============================================================
// After School Classes - Back-End Server
// ============================================================

// 1. LOAD THE TOOLS we installed with npm
var express = require("express"); // Express: makes building a server easier
var cors = require("cors");       // CORS: lets our front-end (a different website) talk to this server

// 2. CREATE THE SERVER APP
var app = express();

// 3. MIDDLEWARE (runs on EVERY request, in this order)

// Allow requests from other websites, e.g. our GitHub Pages front-end
app.use(cors());

// LOGGER: prints every request in the terminal, then passes it on
app.use(function(request, response, next) {
    console.log(new Date().toLocaleTimeString() + " - " + request.method + " request to: " + request.url);
    next(); // "carry on" to the next middleware or route
});

// 4. THE LESSONS DATA
// (later in the module this will come from the MongoDB database instead)
var lessons = [
    { id: 1001, subject: "Maths",    location: "Hendon",        price: 100, spaces: 5, icon: "fa-calculator" },
    { id: 1002, subject: "English",  location: "Colindale",     price: 90,  spaces: 5, icon: "fa-book" },
    { id: 1003, subject: "Science",  location: "Brent Cross",   price: 95,  spaces: 5, icon: "fa-flask" },
    { id: 1004, subject: "Art",      location: "Golders Green", price: 80,  spaces: 5, icon: "fa-paint-brush" },
    { id: 1005, subject: "Music",    location: "Hendon",        price: 85,  spaces: 5, icon: "fa-music" },
    { id: 1006, subject: "Football", location: "Colindale",     price: 70,  spaces: 5, icon: "fa-futbol-o" },
    { id: 1007, subject: "Coding",   location: "Hendon",        price: 120, spaces: 5, icon: "fa-code" },
    { id: 1008, subject: "Drama",    location: "Brent Cross",   price: 75,  spaces: 5, icon: "fa-microphone" },
    { id: 1009, subject: "Chess",    location: "Golders Green", price: 60,  spaces: 5, icon: "fa-puzzle-piece" },
    { id: 1010, subject: "Swimming", location: "Mill Hill",     price: 110, spaces: 5, icon: "fa-tint" }
];

// 5. ROUTES (each one answers a specific address)

// GET / : a simple message so we know the server is running
app.get("/", function(request, response) {
    response.send("After School Classes server is running. Try /lessons");
});

// GET /lessons : sends back all the lessons as JSON
app.get("/lessons", function(request, response) {
    response.json(lessons);
});

// 6. ANYTHING ELSE: reply with a 404 "not found" error
app.use(function(request, response) {
    response.status(404).send("Sorry, that page does not exist.");
});

// 7. START THE SERVER on port 3000
app.listen(3000, function() {
    console.log("App started on port 3000");
});
