const express = require("express");
const index = express();
const port = 3000;

// Cartella per file statici
index.use(express.static("public"))

// Rotta home
index.get("/", (req, res) => {
    res.send("Server del mio blog")
})

// Rotta bacheca che restituisca il json dei post
index.get("/bacheca", (req, res) => {

    // Array di post
    const posts = [
        {
            title: "Ciambellone",
            content: "Come preparare un ottimo ciambellone",
            image: "/images/ciambellone.jpeg",
            tags: ["dolci", "cucina"]
        },
        {
            title: "Cracker Barbabietola",
            content: "Sfiziosi crackers",
            image: "/images/cracker_barbabietola.jpeg",
            tags: ["cucina", "snack"]
        },
        {
            title: "Pane Fritto Dolce",
            content: "Una pietanza molto leggera",
            image: "/images/pane_fritto_dolce.jpeg",
            tags: ["cucina", "fritto"]
        },
        {
            title: "Pasta con Barbabietola",
            content: "Come preparare questo piatto particolare",
            image: "/images/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola"]
        },
        {
            title: "Torta Paesana",
            content: "Preparare questo piatto tipico di paese",
            image: "/images/torta_paesana.jpeg",
            tags: ["torta", "pasticceria"]
        }
    ];

    res.json(posts);
})

index.listen(port, () => {
    console.log("In ascolto sulla porta " + port)
})