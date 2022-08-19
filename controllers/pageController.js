const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};

exports.sendEmail = async (req, res) => {
  const outputMessage = `
  <h1>Mail Details</h1>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "burakb199726@gmail.com", // generated ethereal user
      pass: "ffgqkrzsfjusbtzz", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Smart EDU Contact Form" <burakb199726@gmail.com>', // sender address
    to: "burakb199726@gmail.com", // list of receivers
    subject: "Smart EDU Contact Form New Message", // Subject line
    html: outputMessage,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.status(200).redirect("contact");
};
