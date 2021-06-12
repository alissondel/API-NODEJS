'use strict';

const express = require('express');
const router = express.Router();

    router.post('/', (req, res, next) => {
    //status(201) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
        res.status(201).send(req.body)
    })
    
    router.put('/:id', (req, res, next) => {
        const id = req.params.id;
    //status(201) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
        res.status(201).send({
            id: id,
            item: req.body
        })
    })
    
    router.delete('/', (req, res, next) => {
    //resposta de status de sucesso que indica que a requisição foi bem sucedida
        res.status(200).send(req.body)
    })

module.exports = router;


