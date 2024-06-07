var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")
const jwt = require('jsonwebtoken')


router.get("/login",function(req,res,next){
  res.render("login")
})
router.get("/register", function(req,res, next){
  res.render("register")
})
router.post("/register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then((results)=>{
    res.send(results)

  })
  .catch((e)=>{
    res.send(e)
  })
})
router.post("/login",function(req,res,next){
  AutenticationControllers.login(req.body)
  .then((results)=>{
    res.cookie('jwt',results)
    res.send(results)
  })
  .catch((e)=>{
    res.send(e)
  })
})
router.get("/test", function(req,res,next){
  AutenticationControllers.verify(req.cookies.jwt)
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    res.send(e)
  })
})
router.get("/logout",function(req,res,next){
  AutenticationControllers.logout(req.cookies.jwt)
  .then(()=>{
    res.clearCookie("jwt")
    res.send("Cookie Borrada")
  })
  .catch((e)=>{
    res.send(e)
  })
})
module.exports = router;
