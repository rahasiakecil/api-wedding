const express = require('express');
const router = express.Router();
const connection = require('../config/connection');



router.get('/', (req, res) => {
    connection.query("SELECT * FROM tb_ucapan where deleted_at IS NULL", (error, result) =>{
        let forReturn = {
            "data": result
        };
        res.send(forReturn);
    })
})

router.post('/', (req, res) => {
    const date = new Date();
    const body = req.body;
    let tamu = body.tamu;
    let kehadiran = body.kehadiran;
    let ucapan = body.ucapan;
    connection.query(`INSERT INTO tb_ucapan (tamu, kehadiran, ucapan) VALUES ("${tamu}", "${kehadiran}", "${ucapan}")`, (error, result) =>{
        res.send(result);
    })

})

module.exports = router;