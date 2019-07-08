const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('content'))

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
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

  res.send('<p>Your message has been sent :)</p><a href=\' / \'>Go back to page</a>')

  // res.redirect('back')
})


app.listen(3000, () => console.log('server is listerning'))
