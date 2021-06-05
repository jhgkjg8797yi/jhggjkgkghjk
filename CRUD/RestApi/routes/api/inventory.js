const express = require('express');
const router = express.Router();

const Inventory = require('./../../../models/Inventory');

router.get('/Inventorys', async(request, response)=>{
    await Inventory.findAll().then( (inventorys) => {
      response.set('Content-Type', 'application/json');
      response.json(inventorys);
    })
});


router.get('/selectInventory', function(request, response){
let id = request.query.id;
    (async () => {
        await Inventory.findByPk(id).then( (inventory) => {
        response.json(inventory);
    })
    })();
});

router.get('/AddInventory', function(request, response){
    (async () => {
        await Inventory.create({
            name: request.query.name,
            price: request.query.price
        }).then( (inventory) => {
            response.json(inventory);
        })
    })();
}); 

router.get('/DeleteInventory', async (request, response)=>{
    let id = request.query.id;
    await Inventory.findByPk(id).then( (inventory) => {
    (async () => {
          await inventory.destroy().then( () => {
              response.json(inventory);
          });
      })();
    })
});

module.exports = router;