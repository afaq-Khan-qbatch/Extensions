require('./db/con');
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/ok' , (req , res) => {
    res.send('ok');
})

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`);
})