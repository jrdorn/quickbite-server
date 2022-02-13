const nodemailer = require("nodemailer");

//send directions via email or SMS
const sendMail = (req) => {
  //get login credentials to send directions via email

  const directions = req.directions;
  const recipient = req.recipient;

  const email = process.env.UNAME;
  const pw = process.env.APP_PW;

  //create transport object with origin address
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pw,
    },
  });

  const mailOptions = {
    from: `"QuickBite" ${email}`,
    to: `${recipient}`,
    subject: `Directions to restaurant`,
    text: `${directions}`,
  };

  //SMTP transporter
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports = sendMail;
