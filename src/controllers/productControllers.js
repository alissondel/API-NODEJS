'use strict';

//Importação da model com mongoose(mongodb)
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req, res, next) => {
    //Listando os produtos cadastrados
    Product
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    //status(201) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
    var product = new Product(req.body); //instancia na requisição
    product.save().then(x => {
        res.status(201).send({message: 'Produto cadastrado com sucesso!'});
    }).catch(e => {
        res.status(400).send({message: 'Falha ao cadastrar o produto', data: e});
    });
};

exports.put = (req, res, next) => {
const id = req.params.id;
//status(200) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
    res.status(200).send({
        id: id,
        item: req.body
    })}

exports.delete = (req, res, next) => {
//status(200) - Resposta de status de sucesso que indica que a requisição foi bem sucedida
    res.status(200).send(req.body);
}