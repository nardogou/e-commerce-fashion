const express = require("express");
const app = express();
const port = 3000;
const session = require('express-session')
const routes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(session({
  secret: 'Secret ',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true
 }
}))

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});









