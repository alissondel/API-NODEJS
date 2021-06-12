'use strict';

exports.post = (req, res, next) => {
    //status(201) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
    res.status(201).send(req.body);
}

exports.put = (req, res, next) => {
const id = req.params.id;
//status(200) - Indica que a requisição foi bem sucedida e que um novo recurso foi criado.
    res.status(200).send({
        id: id,
        item: req.body
    })}

exports.delete = (req, res, next) => {
//status(200) - Resposta de status de sucesso que indica que a requisição foi bem sucedida
    res.status(200).send(req.body);
}