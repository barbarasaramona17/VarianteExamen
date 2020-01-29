const express = require("express")

let data = require('./article.json');

const app = express()
app.use('/', express.static('public'))

app.get('/data',(req,res)=>{
    res.status(200).send(data);
})

app.listen(8080);

module.exports = app;