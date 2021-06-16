'use strict';

//Importação da model com mongoose(mongodb)
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')

//importando o validator
const ValidationContract = require('../validators/fluent-validator')

//Listando os produtos cadastrados, pegando do banco
exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando o SLUG dos produtos cadastrados, pegando do banco
exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando os ID dos produtos cadastrados, pegando do banco
exports.getById = (req, res, next) => {
    repository
        //recebe o id do produto
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Listando as TAGS dos produtos cadastrados, pegando do banco
exports.getByTag = (req, res, next) => {
    repository
    //recebe o tags do produto
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Enviando produto para banco de dados, pegando do banco
exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O titulo deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.slug, 3, 'O titulo deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.description, 3, 'O titulo deve conter pelo menos 3 caracteres')

    //se os dados forem invalidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return
    }

    repository.create(req.body)
    .then(x => {
        //status(201) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar o produto', data: e });
    });
};

//Atualizando o produto, pegando do banco
exports.put = (req, res, next) => {
   repository.update(req.params.id, req.body)
    .then(x => {
            res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Produto atualizado com sucesso!',
                data: e
            });
        });
}

//Deletando o produto, pegando do banco
exports.delete = (req, res, next) => {
    repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({ message: 'Produto removido com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o produto!',
                data: e
            });
        });
}