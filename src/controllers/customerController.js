'use strict';

const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/customer-repository')
const ValidationContract = require('../validators/fluent-validator')

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    //se os dados forem invalidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return
    }
    try{        
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar sua requisição. ',
            error: e.message
        }); 
    }
};