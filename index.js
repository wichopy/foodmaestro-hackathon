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

app.get('/', function(req, res) {
    // knex('product')
    //     .join('productnutrition', 'product.ProductGUID', '=', 'productnutrition.ProductAttributeGUID')
    //     .select('*').then((rows) => {
    //             console.log();
    //         });

    knex.select('*').from('product').join('productnutrition', function() {
        this.on('productnutrition.ProductID', '=', 'product.ProductID')
        }).then(function(rows) {
            console.log(100 + logic.calculateSugarScore(rows[0]))
        });
});


app.listen(8080, () => console.log("App listening on port 8080"));



