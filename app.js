const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const produsts = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) => {
    res.render("products",produsts);
})

productRouter.route("/1").get((req,res) => {
    res.send('hello world');
})

app.use("/products",productRouter);
    
app.get('/',(req,res) =>{
    res.render('index',{username: 'danuani1993',customers:["lnwza","admin","danunai"]});
})

app.listen(PORT, ()=>{
    debug('Listening on port' + chalk.green(" : " + PORT))
})