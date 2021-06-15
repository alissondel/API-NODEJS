'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    // _id
    title: {
        type: String,
        required: true,
        trim: true //trim = Ele remove o espaço antes da string no titulo
    }, 
    slug: {
        type: String, 
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true, // Ex:. Cadeira Gamer = cadeira-gamer
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Product', schema)