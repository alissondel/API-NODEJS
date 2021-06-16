'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Listagem de lista de produtos
exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

//Listagem de lista pela busca "slug"
exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

//Listagem de lista pela busca "id"
exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

//Listagem de lista pela busca "tag"
exports.getByTag = async(tag) => {
    const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
    var product = new Product(data); // Instancia na requisição
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
                tags: data.tags
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove({_id: id});
}