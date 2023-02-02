const express = require("express");
const connect = require("./config/db");

app = express();

app.use(express.json());

const port = 8000;

app.listen(port, async () => {

    await connect;
    console.log(`Listen on port ${port}`);
})