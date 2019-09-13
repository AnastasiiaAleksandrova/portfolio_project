const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const multer = require('multer');
const upload = multer();
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, '/content/')))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.post('/send-email', upload.none(), (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ad84b328274959",
      pass: "d24eea718230bf"
    }
  });

  let mailOptions = {
    from: 'anastasiia.a.aleksandrova@gmail.com',
    to: 'anastasiia.a.aleksandrova@gmail.com',
    subject: 'Hello from portfolio page',
    text: req.body.name + '\n' + req.body.email + '\n' + req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      
    }
  });
  
  res.end();

})


app.listen(PORT, () => console.log('server is on'))
