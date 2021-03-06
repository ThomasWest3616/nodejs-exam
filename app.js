const express = require('express');

const app = express();

app.use(express.static("public"));

/* app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/frontpage/index.html");
}); */

app.get("/", (req, res) => {
    // this also works:
    // res.sendFile("index.html", { root: __dirname });
    res.sendFile(__dirname + "/public/frontpage/index.html");
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
