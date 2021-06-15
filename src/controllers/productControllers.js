'use strict';

//Importação da model com mongoose(mongodb)
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req, res, next) => {
    //Listando os produtos cadastrados
    Product //chamando model do produto
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.getBySlug = (req, res, next) => {
    //Listando o SLUG dos produtos cadastrados
    Product //chamando model do produto
    .findOne({
        //recebe o SLUG do produto
        slug: req.params.slug,
        active: true
    }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.getById = (req, res, next) => {
    //Listando os ID dos produtos cadastrados
    Product //chamando model do produto
    .findById(
        //recebe o id do produto
        req.params.id)
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.getByTag = (req, res, next) => {
    //Listando as TAGS dos produtos cadastrados
    Product
    .find({
        //recebe o tags do produto
        tags:req.params.tag,
        active: true
    }, 'title description price slug tags')
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
    Product //chamando model do produto
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({message: 'Produto atualizado com sucesso!'});
    }).catch(e => {
        res.status(400).send({
            message: 'Produto atualizado com sucesso!', 
            data: e
        });
    });
}
    
exports.delete = (req, res, next) => {
//status(200) - Resposta de status de sucesso que indica que a requisição foi bem sucedida
    res.status(200).send(req.body);
}