const express = require('express');
const app = express();
const port = 3000;
const router = require('./route/index');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.use('/',router)

app.listen(port,()=>{
    console.log(`Success ${port}`)
})