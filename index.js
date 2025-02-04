const express = require("express");
const app = express();
const port = 3000;

// Cartella per file statici
app.use(express.static("public/images"))

// Array di post
const posts = [
    {
        title: "Ciambellone",
        content: "Come preparare un ottimo ciambellone",
        image: "http://localhost:3000/images/ciambellone.jpeg",
        tags: ["dolci", "cucina"]
    },
    {
        title: "Cracker Barbabietola",
        content: "Sfiziosi crackers",
        image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
        tags: ["cucina", "snack"]
    },
    {
        title: "Pane Fritto Dolce",
        content: "Una pietanza molto leggera",
        image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
        tags: ["cucina", "fritto"]
    },
    {
        title: "Pasta con Barbabietola",
        content: "Come preparare questo piatto particolare",
        image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"]
    },
    {
        title: "Torta Paesana",
        content: "Preparare questo piatto tipico di paese",
        image: "http://localhost:3000/images/torta_paesana.jpeg",
        tags: ["torta", "pasticceria"]
    }
];

// Rotta home
app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

// Rotta bacheca che restituisca il json dei post
app.get("/bacheca", (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log("In ascolto sulla porta " + port)
})