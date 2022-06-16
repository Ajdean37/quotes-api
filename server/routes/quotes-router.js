const express = require('express');
const deleteQuoteByIdService = require('../services/deleteQuoteByIdService');
const router = express.Router();
const getAllQuotesService = require('../services/getAllQuotesService');
const getQuoteByIdService = require('../services/getQuoteByIdService');
const createQuoteService = require('../services/createQuoteService');



router.get('/', getAllQuotesService, (req, res) => {

    // res.send('Im a good server');
    res.send(res.resData);
});

router.get('/:id', getQuoteByIdService, (req, res) => {
    res.send(res.resData);
});

router.delete('/:id', deleteQuoteByIdService, (req, res) => {
    res.send(res.resData);
})

router.post('/', createQuoteService, (req, res) => {
    res.send(res.resData);
})






module.exports = router;