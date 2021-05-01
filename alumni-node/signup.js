var express = require('express')
const bcrypt = require('bcrypt')
const mongoose =require('mongoose')
const router = express.Router()
const mon = require('./mongo')
const User =  mongoose.model('users',mon.alumnischema)
router.post('/user',async (req,res)=>{
 var myData = new User(
  {
  name : req.body.name,
  course:req.body.course,
  email:req.body.email,
  year:req.body.year,
  currloc:req.body.currloc,
  working:req.body.work,
  position:req.body.position,
  fb:req.body.fb,
  insta:req.body.insta,
  twt:req.body.twt,
 }
  );
 await myData.save()
 .then(item => {
 res.send("success");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
})
router.get('/get/:id',async (req,res)=>{
 const { id } = req.params
 
 try{
  res.set("Content-Type", 'application/json');
let user = await User.findOne({email:id})
 return res.status(200).json(user);
 }catch(err) {
      res.json({ message : err});
        }


})
router.get('/search/:name/year/:year',async (req,res)=>{
 let { name,year } = req.params
 
 name=name.replace("&"," ")
 var re = new RegExp("^" + name,"i");
 console.log(name);
 try{
  res.set("Content-Type", 'application/json');
let user = await User.find({name:re,year:year})
 return res.status(200).json(user);
 }catch(err) {
      res.json({ message : err});
        }
})

router.put('/user/edit/:email',async (req,res)=>{
const{email} = req.params
const data = {
currloc:req.body.currloc,
working:req.body.work,
insta:req.body.insta,
fb:req.body.fb,
twt:req.body.twt,
position:req.body.position,
}
console.log(data);
 User.updateOne({email:email}, data)
.then(item=>res.send('success'))
.catch(err => {
   console.log(err);
 res.status(400).send("unable to save to database");
 });
})

module.exports = router 