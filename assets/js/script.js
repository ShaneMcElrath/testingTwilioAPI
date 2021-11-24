const accountSid = 'AC6fe894a7517416666a612325cab8abb7'; 
const authToken = '[Redacted]'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({  
         body: 'sup', 
         messagingServiceSid: 'MG45fc51f62e17043280668e9fe6893698',      
         to: '+14074432911' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();