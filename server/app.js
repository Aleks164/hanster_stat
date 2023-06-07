const express = require('express')
const data = require('../src/data/sales')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})
console.log(data?.length);
app.get('/sales', (req, res) => {
    console.log(res);
    res.json(data);
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, cant find that');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
