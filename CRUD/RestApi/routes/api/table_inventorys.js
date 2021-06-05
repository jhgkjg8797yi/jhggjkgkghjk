const express = require('express');
const router = express.Router();

const table_inventorys = require('./../../../models/table_inventorys');


router.get('/add_table', async(request, response) => {
        await table_inventorys.create({
            name: request.query.name,
            number: request.query.number,
            status: request.query.status
        }).then(
            table =>{
                response.set('Content-Type', 'application/json');
                response.json(table);
            }
        )
})


router.get('/table_inventorys', async(request, response)=>{
    await table_inventorys.findAll().then( (res) => {
      response.set('Content-Type', 'application/json');
      response.json(res);
    })
});


module.exports = router;