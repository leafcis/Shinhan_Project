const express = require('express')
const path = require('path')
const router = express.Router();
const mysql = require('mysql')

let connection = mysql.createConnection({
    host : "127.0.0.1",
    port : 3306,
    user : "root",
    password : "???",
    database : "sh"
})

console.log(connection.connect())

router.post('/game', (req, res) => {
    const reqBody = req.body;
    console.log('누군가가 요청함')
    console.log(reqBody)
    connection.query("SELECT address.amount from address where address='11111111111'", (err, response, fields) => {
        let amount = response[0].amount;
        let offer = parseInt(reqBody.PlayerData);
        let result = amount + offer;
        connection.query("UPDATE address set amount=" + result + " where address = '11111111111'", (err, response, fields => {
            if(err) {
                console.log('에러' + err)
            }
            else {
                console.log(response)
                res.send({message : '성공적!'})
            }
        }))
    })
})

router.post('/virtual', (req, res) => {
    console.log('누군가가 요청함')
    const reqBody = req.body;
    connection.query("SELECT address.address, address.bank, address.nickname FROM address NATURAL JOIN virtual_address where virtual_address = '" + reqBody.address + "'", (err, response, fields) => {
        if(err) {
            console.log('에러' + err)
        }
        else {
            if(response === []) {
                res.send({message : '값을 조회할 수 없습니다.'})
            }
            else {
                res.send(response)
            }
        }
    })
})

router.post('/login', (req, res) => {
    const reqBody = req.body;
    console.log(reqBody)
    connection.query("SELECT * FROM account", (err, res, fields) => {
        if(err) {
            console.log('에러' + err)
        }
        else {
            console.log(res)
        }
    })
    if(!reqBody.hasOwnProperty('id') || !reqBody.hasOwnProperty('password')) {
        res.status(401)
        res.send({message : '옳지 못한 형식'})
    }

    else if(reqBody.id === "" || reqBody.password === "") {
        res.status(401)
        res.send({message : '아이디 또는 비밀번호가 비워져있음'})
    }
    
    else {
        res.send({message : '?'})
    }
})

router.post('/info', (req, res) => {
    const reqBody = req.body;
    console.log(reqBody)
    connection.query("SELECT account.name, address.address, address.amount from account natural join address where name = '"+ reqBody.name + "'", (err, response, fields) => {
        res.send(response)
    })
})

module.exports = router;