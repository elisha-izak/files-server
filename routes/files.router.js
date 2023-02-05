const express = require('express');
const router = express.Router();
const fileService = require('../files')


router.get('/', async (req, res) => {
    const file =  await fileService.read('./root2/root1/temp3.txt')
    console.log(file);
    res.send(file);
})

router.get('/:id', async (req, res) => {
    console.log("product");
    const product =  await fileService.getProd({_id:req.params.id})
    res.send(product);
})

router.post('/', async(req, res) => {
    console.log('hello');
    const file = await fileService.read(req.body.file);
    res.send(file);
})


router.post('/:id', async(req, res) => {
    console.log('hello');
    const newProd = await fileService.updateProduct(req.params.id, req.body);
    res.send(newProd);
})

module.exports = router;