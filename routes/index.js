var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")

router.get("/login",function(req,res,next){
  res.render("login")
})
router.get("register", function(req,res, next){
  res.render("register")
})
router.post("register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then((results)=>{
    res.send(results)

  })
  .catch((e)=>{
    res.send(e)
  })
})
module.exports = router;
