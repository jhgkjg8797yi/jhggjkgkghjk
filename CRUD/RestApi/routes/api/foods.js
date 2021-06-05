const express = require('express');
const router = express.Router();

const Food = require('../../../models/food');
const relationship = require('../../../models/relationship');
const Foods = relationship.foods;

// const table = relationship.table;

router.get('/AddFood', async(request, response) => {
    await Food.create({
      name: request.query.name,
      price: request.query.price,
      subsidy: request.query.subsidy
    }).then( (food) => {
      response.set('Content-Type', 'application/json');
      response.json(food);
    })
});


router.get(`/Foods`, async(request, response) => {
    await Food.findAll().then( (foods) => {
      response.set('Content-Type', 'application/json');
      response.json(foods);
    })
});


router.get('/DeleteFood', async(request, response) => {
  let id = request.query.id;
    await Food.findByPk(id).then( async(food) => {
      await food.destroy().then( () => {
        response.set('Content-Type', 'application/json');
        response.json(food);
      });

    })
});

module.exports = router;