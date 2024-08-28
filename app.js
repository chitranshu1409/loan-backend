const express =require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var nodemailer = require('nodemailer');
require('dotenv').config()

port =4000;

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());


// ----------------------Routes--------------------------

const contactRouter= require('./router/contactUs.js');


// -------------------------Routes------------------------

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.use('/contactUs', contactRouter);
// app.post('/ContactUs', (req, res) =>{
//     const {FirstName, LastName, Email, PhoneNo, AnnualIncome, LoanType, LoanAmount, Occupation}= req.body;
    
    
    
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         secure:true,
//         port:465,
//         auth: {
//           user: "chitranshu.arya9873@gmail.com",
//           pass: process.env.PASSWORD
//         }
//     });
//     var mailOptions = {
//         from: "chitranshu.arya9873@gmail.com",
//         to: "chitranshu.arya9873@gmail.com",
//         subject: `New ${LoanType} application`,
//         text: `${FirstName} ${LastName} requested for ${LoanType}. occupation: ${Occupation} loan Amount: ${LoanAmount} Annual Income: ${AnnualIncome}  phone number: ${PhoneNo} and email id: ${Email}`
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });  
    
//     otp1= otp;
    
      
// })


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});