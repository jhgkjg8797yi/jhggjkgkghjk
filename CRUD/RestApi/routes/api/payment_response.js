const express = require('express');

const router = express.Router();



const Payment = require('../../../models/payments');



// router.ws(`/ws_payment`, function(ws, req) {
//     ws.on('message', (data)=>{
//         if(data === '0'){
//             ws.send('پرداخت موفق');
//         }else{
//             ws.send('پرداخت ناموفق');
//         }
//         console.log(req)
//     })
// });



// main work 
// router.ws('/', function(ws, req) {
//     if(req.body.resCode == 0){
//         ws.on('message', (data)=>{
//             ws.send(data)
//         })
//     }
// });
// main work 



/////////////////////////////////////////////////

router.get('/payments', async(request, response)=>{
    await Payment.findAll().then( (Payments) => {
      response.set('Content-Type', 'application/json');
      response.json(Payments);
    })
});


router.get('/DeletePayments', async (request, response)=>{
    await Payment.findAll().then( (payments) => {
    (async () => {
          for(let payment of payments){
            await payment.destroy()
          }
          response.send("all payments deleted.");
      })();
    })
});

module.exports = router;