import express from 'express'
import data from './data/sales.json'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/sales', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
})

app.get('/test', (req, res, next) => {

    const date = req.query['date'] as string;
    const [day, month, year] = date.split('.');
    res.header('Access-Control-Allow-Origin', '*');

    if (date) {
        const filteredProducts = data.filter((product) => {
            const productDate = new Date(product.date!);
            return (
                productDate.getMonth() === +month - 1 &&
                productDate.getDate() === +day && productDate.getFullYear() === +year
            );
        });

        // console.log('2', date, filteredProducts.length);
        res.json(filteredProducts);
        return;
    }
    // console.log(req);
    // console.log(req.url, ';;', typeof req.url);
    // console.log(req.path, '2;;');
    // console.log(req.query);
    next();
    // res.send('Hello World!');
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, cant find that');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
