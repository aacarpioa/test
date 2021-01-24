const { t001_transactions } = require('./database');

const router = require('express').Router();

router.get('/listar', async (req, res) => {
    var t001_transaction = await t001_transactions.findAll();
    res.status(200).json(t001_transaction);
})

router.get('/listarSoloUno', async (req, res) => {
    var t001_transaction = await t001_transactions.findOne();
    res.status(200).json(t001_transaction);
})

router.post('/crear', async (req, res) => {
    respuesta = {
        "VA_DESCRIPTION": req.body.descripcion,
        "FE_CREATE_ON": new Date(),
        "VA_AMOUNT": req.body.monto
    };
    const save = await t001_transactions.create(respuesta);
    res.status(200).json(respuesta);
})

router.post('/borrar', async (req, res) => {
    const project = await t001_transactions.findOne({ where: { NU_ID: req.body.id } });
    await project.destroy();
    res.status(200).json("borrar");
})
module.exports = router;