const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "It's a GET request.",
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "It's a POST request.",
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "That's will be deleted, because it's such a DELETE request.",
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == '3') {
        res.status(200).json({
            message: 'You got that!',
            id: id,
        });
    } else {
        res.status(200).json({
            message: 'You missed exact product',
            id: id,
        });
    }
});
router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == '3') {
        res.status(200).json({
            message: `You changed the correct product which ${id} has ID.`,
        });
    } else {
        res.status(200).json({
            message:
                'You changed ' +
                id +
                "but that's not correct product." +
                "but it's OK!",
        });
    }
});
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `You delete the product ${id} successfully.  `,
    });
});

module.exports = router;
