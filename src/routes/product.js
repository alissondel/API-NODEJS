'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControllers')

    router.get('/', controller.get);
    router.get('/:slug', controller.getBySlug);
    router.get('/admin/:id', controller.getById);// Para não dar conflito de rota
    router.get('/tags/:tag', controller.getByTag);// Para não dar conflito de rota
    router.post('/', controller.post);
    router.put('/:id', controller.put)
    router.delete('/', controller.delete) 

module.exports = router;

