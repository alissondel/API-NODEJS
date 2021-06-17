'use strict';

const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/order-repository')
const guid = require('guid')

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição.',
            error: e.message
        });
    }
}

exports.post = async(req, res, next) => {
    try{        
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6), //Gerando numeros aleatorios até 6 caracteres
            items: req.body.items,
        })
        res.status(201).send({
            message: 'Pedido Cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar pedido da sua requisição. ',
            error: e.message
        }); 
    }
};