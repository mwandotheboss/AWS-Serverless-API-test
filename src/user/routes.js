const express = require('express');

const routes = express.Router({
    mergeParams: true
})

routes.get('/', (req, res) =>{
    res.status(200).json({
        "name":"mwando",
        "username":"mwandotheboss",
        "email":"zephaniamwando@gmail.com"
    })
})

module.exports = {
    routes
}