const path = require('path')
let express = require("express");
const app = express(),
    DIST_DIR = __dirname
const cors = require('cors');
let clients = [
    {
        name: "Paxton Patterson",
        apiToken: "vCztSQeVwjPshCBYLHyOmJNEoCLNm8RM",
        apiUrl: "https://paxton-patterson-integration.opt7dev.com/api/quote"
    },
    {
        name: "Shiffler Equipment",
        apiToken: "ugPDjoQ3ECEZzwgL1jb7e8oRf1ZaY75E",
        apiUrl: "https://paxton-patterson-integration.opt7dev.com/api/quote"
    },
    {
        name: "Traditions Jewish Gifts",
        apiToken: "9gnOQM7cuoB8CdIpmkjgF3HUdE7CzZF4",
        apiUrl: "https://traditions-jewish-gifts.opt7dev.com/api/quote"
    },
    {
        name: "Procuru Inc.",
        apiToken: "PZggaAwt4IlItegmYFuLgrn2j4rUPolK",
        apiUrl: "https://procuru.opt7dev.com/api/quote"
    }
];

const PORT = process.env.PORT || 1010
app.use(cors({ origin: '*'}));
app.use(express.static(DIST_DIR))
app.get("/client/:apiToken", (req, res, next) => {
    const apiToken = req.params.apiToken;
    let result = clients.filter(item => item.apiToken === apiToken)
    if (result.length > 0) {
        res.send({success: true, data: result})

    } else {
        res.send({success: false, data: null})

    }
});

app.listen(PORT, () => {
    console.log(`Server listening to ${PORT} ...`)
    console.log('Press Ctrl+C to quit.')
})