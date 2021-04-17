const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Thats main order page',
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was getting successfully',
    });
});

router.post('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order was posted successfully',
        orderId: req.params.orderId,
    });
});

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: 'You delete order ' + orderId + 'successfully',
        orderId: req.params.orderId,
    });
});
module.exports = router;
