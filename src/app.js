'use strict';

//Importações
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

/* (Conecta ao mongodb) mongoose.connect('mongodb://localhost/db_name');*/
mongoose.connect('mongodb://localhost:27017/apinode', {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })

//Carrega os Models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')

//Carrega as rotas
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/product')
const customerRoutes = require('./routes/customer')
const orderRoutes = require('./routes/order')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productRoutes)
app.use('/customers', customerRoutes )
app.use('/orders', orderRoutes)

module.exports = app


/*'use strict' -> força o Javascript a usar regras mais restritas pro seu código. 
Funciona bem se você sabe o que está fazendo. 
É uma boa prática sempre que você não tem que manter código ruim
*/

/* GET = Obtem as informações
   POST = Enviar as informações
   PUT = Atualizar
   Delete = Excluir as informações */