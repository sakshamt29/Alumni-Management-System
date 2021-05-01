const mongoose =require('mongoose')
const alumnischema = new mongoose.Schema({

name: { 
 type: String,
required:true,
minlength:5,
maxlength:40
  },
 email: { 
 type: String,
 required:true,
minlength:5,
maxlength:255,
unique:true
  },
 year:{
type:Number,
 },
 course:{
type:String,
 },
 currloc:{
   type:String
 },
 working:{
   type:String
 },
 position:{
   type:String
 },
 fb:{
   type:String
 },
 insta:{
   type:String
 },
 twt:{
   type:String
 }
})


module.exports = {alumnischema}