const ConfigObj = require('../../config/core.config');
const {regexVal} = require("../../config/regexValue");
const {errMsgGererator} = require("../errMsgHandler")
const formValidation = (req, res, next) => {
  
    try{
        if(req.body.firstName == "" || !regexVal.onlyLettersAndSpaces.test(req.body.firstName)){
          let msg = "please enter first name properly";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(req.body.lastName == "" || !regexVal.onlyLettersAndSpaces.test(req.body.lastName)){
          let msg = "please enter last name properly";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(req.body.email == "" || !regexVal.emailValidation.test(req.body.email)){
          let msg = "please enter email properly";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(req.body.phoneNumber == "" || !regexVal.mobileValidation.test(req.body.phoneNumber)){
          let msg = "please enter proper phone number";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(req.body.gitLink == "" || !regexVal.urlCheck.test(req.body.gitLink)){
          let msg = "please enter proper git link";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(req.body.liveInUS == ""){
          let msg = "please enter your location details, US or not";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
        else if(!req.files.resumeLink || !req.files.coverLink){
          let msg = "please Uploads all document";
          let errMsg = errMsgGererator(msg,req.status,false);
          res.send(errMsg)
        }
       
        else{
          next()
        }
    }catch(err){
      console.log(err.message)
      let msg = "Server error";
      let errMsg = errMsgGererator(msg,req.status,false,err.message);
      res.send(errMsg)
    }
  };

  module.exports = {formValidation}