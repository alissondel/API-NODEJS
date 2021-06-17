'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Customer(data); // Instancia na requisição
    await customer.save();
}
