const House = require('../models/house')
const mongo = require('mongodb')
let methods = {}

methods.insertOne = (req, res) => {
    let house = new House({
        owner: req.body.owner,
        phone: req.body.phone,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size,
        location: req.body.location,
        latlong: req.body.latlong,
        city: req.body.city,
        state: req.body.state
    })
    house.save(function(err, record) {
        if (err) return console.error(err);
        res.json(record)
    });
} // insertOne

methods.getAll = (req, res) => {
    House.find({})
        .exec((err, records) => {
            if (err) {
                res.json({
                    err
                })
            }
            console.log(records);
            res.json(records)
        })
} // getAll

methods.getById = (req, res, next) => {
    House.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById House'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    House.findById(req.params.id)
        .then(record => {
            House.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "owner": req.body.owner || record.owner,
                        "phone": req.body.phone || record.phone,
                        "title": req.body.title || record.title,
                        "description": req.body.description || record.description,
                        "price": req.body.price || record.price,
                        "image": req.body.image || record.image,
                        "size": req.body.size || record.size,
                        "location": req.body.location || record.location,
                        "latlong": req.body.latlong || record.latlong,
                        "city": req.body.city || record.city,
                        "state": req.body.state || record.state
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update House'
                    })
                })
        })
        .catch(err => {
            res.json({
                err,
                message: 'Data tidak ada'
            })
        })
} //updateById

methods.deleteById = (req, res) => {
    House.findByIdAndRemove(req.params.id)
        .exec((err, record) => {
            if (err) {
                res.json({
                    err,
                    message: 'Error waktu deleteById'
                })
            }
            console.log('Update is success');
            res.json(record)
        })
}

module.exports = methods