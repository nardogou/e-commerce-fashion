const express = require('express');
const app = express();
const router = require('./route/index');
const session = require('express-session')

const port = 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.use(session({
  secret: 'Secret ',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true
 }
}))

app.use(router)



app.listen(port,()=>{
    console.log(`Success ${port}`)
})