const express = require("express");
const app = express();
const port = 3000;

// Cartella per file statici
app.use(express.static("public/images"))

// Rotta home
app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

// Array di post
const posts = [
    {
        title: "Ciambellone",
        content: "Come preparare un ottimo ciambellone",
        image: "http://localhost:3000/ciambellone.jpeg",
        tags: ["dolci", "cucina"]
    },
    {
        title: "Cracker Barbabietola",
        content: "Sfiziosi crackers",
        image: "http://localhost:3000/cracker_barbabietola.jpeg",
        tags: ["cucina", "snack"]
    },
    {
        title: "Pane Fritto Dolce",
        content: "Una pietanza molto leggera",
        image: "http://localhost:3000/pane_fritto_dolce.jpeg",
        tags: ["cucina", "fritto"]
    },
    {
        title: "Pasta con Barbabietola",
        content: "Come preparare questo piatto particolare",
        image: "http://localhost:3000/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"]
    },
    {
        title: "Torta Paesana",
        content: "Preparare questo piatto tipico di paese",
        image: "http://localhost:3000/torta_paesana.jpeg",
        tags: ["torta", "pasticceria"]
    }
];

app.listen(port, () => {
    console.log("In ascolto sulla porta " + port)
})