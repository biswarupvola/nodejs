
const errMsgGererator = (msg = "I am Biswarup, fullstack coder",statusCode = 200,isSuccess = true, err = "") => {
   return {
        message:msg,
        reqStatusCode:statusCode,
        status:isSuccess,
        success:isSuccess,
        errCode:err //backend error if there any
   }
};

module.exports = {errMsgGererator}