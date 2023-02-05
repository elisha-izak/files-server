const express = require('express');
const router = express.Router();


const foldersRouter = require('./folders.router')
const filesRouter = require('./files.router')



router.use('/folders',foldersRouter)
router.use('/files',filesRouter)




module.exports = router;