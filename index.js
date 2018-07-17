/**
 * This is Stephen and Will's FoodMaestro Hackathon app!
 */


const express = require('express');
const app = express();
var logic = require('./logic')
// The Object below contains s
const knex = require('knex')({
    client: 'mssql',
    connection: {
        host: 'fmjob.database.windows.net',
        user: 'fm_job',
        password: 'Hackathon!2018',
        database: 'data',
        options: {
            encrypt: true
        }
    }
});

function productAndScore(ProductName, score) {
    this.ProductName = ProductName;
    this.score = score;
} 

app.get('/scores', function(req, res) {
    const productsScore = [];

    knex.select('*').from('product').join('productnutrition', function() {
        this.on('productnutrition.ProductID', '=', 'product.ProductID')
        }).then(function(rows) {
            for (let row of rows) {
                const score = (100 + logic.calculateFatScore(row))
                productsScore.push({
                    ProductName: row.Name,
                    score: score 
                });
            }            
           res.json(productsScore)
        });
});


app.listen(8080, () => console.log("App listening on port 8080"));



