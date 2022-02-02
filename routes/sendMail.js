const nodemailer = require("nodemailer");

//send directions via email or SMS
const sendMail = (directions, recipient) => {
  //get login credentials to send directions via email
  const email = process.env.UNAME;
  const pw = process.env.APP_PW;

  //SMTP transporter
  (async () => {
    //create transport object with origin address
    let transporter = nodemailer.createTransport({
      host: "smtp.yandex.com",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: pw,
      },
    });

    //send mail to user's contact
    await transporter.sendMail({
      from: `"QuickBite" ${email}`,
      to: `${recipient}`,
      subject: `Directions to restaurant`,
      text: `${directions}`,
    });
  })();
};

module.exports = sendMail;
