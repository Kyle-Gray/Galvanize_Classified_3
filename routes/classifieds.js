
'use strict';

const express = require('express');

const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex('classifieds')
  .orderBy('id')
  .select('id', 'description', 'item_image', 'price', 'title')
    .then((results) =>{
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get('/:id', function(req, res, next){
  knex('classifieds')
  .where('id', req.params.id)
  .select('id', 'description', 'item_image', 'price', 'title')
  .first()
    .then((result) =>{
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post('/', function(req, res, next){
  let newClassified = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    item_image: req.body.item_image
  };
  knex('classifieds')
  .insert(newClassified , ['id', 'title', 'description', 'price', 'item_image'])
  .then((results) => {
    res.send(results[0]);
  })
  .catch((err) => {
    console.log(err);
    next();
  });
});

router.patch('/:id', function(req, res, next){
  let newClassified = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    item_image: req.body.item_image
  };
  knex('classifieds')
  .where('id', req.params.id)
  .then(() => {
    return knex('classifieds')
    .update(newClassified, ['id', 'title', 'description', 'price', 'item_image'])
    .where('id', req.params.id);
  })
  .then((result) => {
    res.send(result[0]);
  })
  .catch((err) => {
    console.log(err);
    next();
  });
});

// router.delete('/:id', function(req, res, next) {
//   knex('classifieds')
//     .where({ id: req.params.id })
//     .del()
//     .then(function(result) {
//       res.send(result);
//     })
//     .catch(function(err) {
//       console.log(err);
//       next();
//     });
// });


router.delete('/:id', function(req, res, next){
  let classified;
  knex('classifieds')
  .where({'id': req.params.id})
  .select('id', 'description', 'item_image', 'price', 'title')
  .then((result) => {
    classified = result[0];
    return knex('classifieds')
    .del()
    .where({'id': req.params.id});
  })
  .then(() =>{
    res.send(classified);
  })
  .catch((err) => {
    console.log(err);
    next();
  });
});


module.exports = router;
