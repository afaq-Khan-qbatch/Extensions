const routes = require('express').Router;

routes.post('/addplayer' , async(req , res) =>{
    res.send('addPlayer');
})

module.exports =  routes;