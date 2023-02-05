const express = require('express');
const router = express.Router();
const foldService = require('../folders')

router.post('/', async (req, res) => {
    console.log(req.params.fold);
    const folder =  await foldService.read(req.body.fold)
    res.send(folder);
})

router.get('/use/:id', async (req, res) => {
    const ordUser =  await foldService.getOrdUser(req.params.id)
    res.send(ordUser);
})

// router.post('/', async (req, res) => {
//     await foldService.createOrder(req.body)
//     res.send('ok');
// })




module.exports = router;