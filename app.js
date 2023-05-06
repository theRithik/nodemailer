let nodemailer = require('nodemailer')

let transport = nodemailer.createTransport({
    service:"email",
    auth:{
        user:"email name here",
        password:process.env.PASSWORD
    }
})

var mailOption = {
    from:'email',
    to:'email',
    subject:'this is a test mail',
    text:'hy from the node mailer'
}

transport.sendMail(mailOption, function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log('email sent'+inof.response)
    }
})