# nodejs form submit with validation
## url:- 
http://localhost:3001/submit
## request
var bodyFormData = new FormData();
bodyFormData.append('firstName', ''); //String
bodyFormData.append('lastName', ''); //String
bodyFormData.append('email', ''); //String (email)
bodyFormData.append('phoneNumber', ''); //Number (indian mobile number)
bodyFormData.append('liveInUS', ''); //Boolean
bodyFormData.append('resumeLink', ''); //File
bodyFormData.append('coverLink', ''); //File
bodyFormData.append('aboutYou', ''); //String (not mandatory)

## response
{
    "message": "All Doc submitted successfully",
    "reqStatusCode": 200,
    "status": true,
    "success": true,
    "errCode": ""
}
