const express = require('express');
const {getrank} = require("./checkrank.js");
const app = express();
app.get('/api/user/:username', (req, res) => {
    getrank(req.params.username).then(re=>{res.send(re)});
});

app.listen('3000', () => {
    console.log('Application started');
});