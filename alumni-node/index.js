const express = require('express')
const app = express()
const signup = require('./signup')
const mongoose =require('mongoose')
const parser = require('body-parser');
const cors = require('cors');
 mongoose.connect('mongodb://localhost/alumni') 
  .then(()=>console.log("MONGODB CONNECTED"))
  .catch(()=>console.log("error"))
app.use(cors());
 app.use(express.json())
app.use(express.urlencoded());
app.use('/api',signup)
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})