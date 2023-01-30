# nodejs form submit with validation
## url:- 
http://localhost:3001/submit
## request
var bodyFormData = new FormData();<br>
bodyFormData.append('firstName', ''); //String <br>
bodyFormData.append('lastName', ''); //String <br>
bodyFormData.append('email', ''); //String (email)  <br>
bodyFormData.append('phoneNumber', ''); //Number (indian mobile number) <br>
bodyFormData.append('liveInUS', ''); //Boolean <br>
bodyFormData.append('resumeLink', ''); //File <br>
bodyFormData.append('coverLink', ''); //File <br>
bodyFormData.append('aboutYou', ''); //String (not mandatory) <br>

## response
{ <br>
    "message": "All Doc submitted successfully", <br>
    "reqStatusCode": 200, <br>
    "status": true, <br>
    "success": true, <br>
    "errCode": "" <br>
} <br>
