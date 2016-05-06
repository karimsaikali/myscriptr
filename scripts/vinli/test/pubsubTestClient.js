/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var log = require("log");
log.setLevel("info");
log.info("REQUEST " + JSON.stringify(request));
return sendMail("karim@scriptr.io", "vinli", "Notifications", request.rawBody);			