const express = require('express');
const router = express.Router();
const connection = require('../config/connection');



router.get('/', (req, res) => {
    connection.query("SELECT * FROM tb_ucapan where deleted_at IS NULL", (error, result) =>{
        res.send(result);
    })
})

router.post('/', (req, res) => {
    const date = new Date();
    const body = req.body;
    let tamu = body.tamu;
    let kehadiran = body.tamu;
    let ucapan = body.tamu;
    connection.query(`INSERT INTO tb_ucapan (tamu, kehadiran, ucapan, created_at) VALUES ("${tamu}", "${kehadiran}", "${ucapan}", "${date}")`, (error, result) =>{
        res.send(result);
    })

})

module.exports = router;