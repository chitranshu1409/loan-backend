var nodemailer = require('nodemailer');
require('dotenv').config()

module.exports.PostApplication = (req,res,next)=>{
    const {FirstName, LastName, Email, PhoneNo, AnnualIncome, LoanType, LoanAmount, Occupation}= req.body;
    
    // let otp = Math.floor(Math.random() * 10000);
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure:true,
        port:465,
        auth: {
          user: "chitranshu.arya9873@gmail.com",
          pass: process.env.PASSWORD
        }
    });
    var mailOptions = {
        from: "chitranshu.arya9873@gmail.com",
        to: "chitranshu.arya9873@gmail.com",
        subject: `New ${LoanType} application`,
        text: `${FirstName} ${LastName} requested for ${LoanType}. occupation: ${Occupation} loan Amount: ${LoanAmount} Annual Income: ${AnnualIncome}  phone number: ${PhoneNo} and email id: ${Email}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
    
}