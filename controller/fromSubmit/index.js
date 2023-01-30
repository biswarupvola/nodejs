const {errMsgGererator} = require("../errMsgHandler")

const submitResumeController = (req, res) => {
    
    console.log("submitResumeController _req...",req.body)
    try{
      let msg = "All Doc submitted successfully";
      let errMsg = errMsgGererator(msg,req.status,true);
      res.send(errMsg)
    }catch(err){
      let msg = "Server error";
      let errMsg = errMsgGererator(msg,req.status,false,err.message);
      res.send(errMsg)
    }
  };

module.exports = {submitResumeController}