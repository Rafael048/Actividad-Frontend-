var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")
const jwt = require('jsonwebtoken')


router.get("/",function(req,res,next){
  res.render("index")
})
router.get("/register", function(req,res, next){
  res.render("registro")
})
router.post("/register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then(()=>{
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})
router.get("/login", function(req,res,next){
  res.render("inicioSesion")
})
router.post("/login",function(req,res,next){
  AutenticationControllers.login(req.body)
  .then((results)=>{
    res.cookie('jwt',results)
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})

router.get("/logout",function(req,res,next){
  AutenticationControllers.logout(req.cookies.jwt)
  .then(()=>{
    res.clearCookie("jwt")
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})
router.get("/401",function(req,res,next){
  res.render("401")
})
router.get("/500",function(req,res,next){
  res.render("500")
})
router.get("/playStation",function(req,res,next){
AutenticationControllers.verify(req.cookies.jwt)
.then(()=>{
  res.render("playstation")
})
.catch(()=>{
  res.redirect("/401")
})
})
module.exports = router;
