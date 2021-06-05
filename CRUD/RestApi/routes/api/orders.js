const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const moment = require('jalali-moment');

const Order = require('../../../models/Order');
const Food = require('../../../models/food');
const relationship = require('../../../models/relationship');
const Foods = relationship.foods;

// add order
router.post('/AddOrder', (req, res) => {
  (async () => {
    await Order.create({
      name: req.body.name,
      Foods: req.body.foods,
      date: moment().locale('fa').format('YYYY/M/D'),
      time: moment().tz('Asia/Tehran').format('HH:mm'),
      table: req.body.table
    },{
      include: [{
        association: Foods,
        // as: 'Foods'
      }]
    }).then( order => {
      res.set('Content-Type', 'application/json');
      res.json(order);
    })
  })();
});


router.get('/order_date', async(request, response) => {
  let date = request.query.date;
    await Order.findAll({
      include: [{model: Food, as: 'Foods'}],
      where: {
        date: {
          [Op.startsWith]: `${date}`
        }
      }
    }).then( order => {
    response.set('Content-Type', 'application/json');  
    response.json(order);
  }).catch(err => response.json(err))
});


router.get('/orders', async(req, res) => {

    await Order.findAll({
      include: [{model: Food, as: 'Foods'}]
    }).then( (orders) => {
      res.set('Content-Type', 'application/json');
      res.json(orders);
    })

});
module.exports = router;


