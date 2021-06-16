'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product //chamando model do produto
        .find({
            active: true
        }, 'title price slug');
}

exports.getById = (id) => {
    return Product //chamando model do produto
        .findById(id)
}

exports.getBySlug = (slug) => {
    return Product //chamando model do produto
        //recebe o SLUG do produto
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags')

}

exports.getByTag = (tag) => {
    return Product
        //recebe o tags do produto
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')
}

exports.create = (data) => {
    var product = new Product(data); //instancia na requisição
    return product.save();
}

exports.update = (id, data) => {
    return Product //chamando model do produto
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = (id) => {
    return Product //chamando model do produto
        .findOneAndRemove(id)
}