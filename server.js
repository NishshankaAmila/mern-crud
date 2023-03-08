const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./models/routs/posts');

app.use(bodyParser.json());

app.use(postRoutes);

const PORT = 5000;
const DB_URL = 'mongodb+srv://amila:100527b1@amila.0nv8fkc.mongodb.net/crudofmern?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
  console.log('DB Connected');
})
.catch((err) =>{
  console.log('DB connetion error',err)
});


app.listen(PORT,() =>{
  console.log("App running on ${PORT}");

});