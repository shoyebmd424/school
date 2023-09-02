const sendEmail = (req, res, next) => {
  const { email } = req.body;
  const OTP = Math.floor(Math.random() * 100 + 100000);
  const transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587 || 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOption = {
    from: email,
    to: process.env.EMAIL,
    subject: "Oriental Public School OTP",
    text: (
      <>
        {" "}
        <h1>Orietal Public School</h1>{" "}
        <p>
          I hope you are aware out privacy. This is the one time password when
          you use this password after that its useless
        </p>{" "}
        <h4>your OTP:</h4> <h3>{OTP}</h3>
      </>
    ),
  };
  transpoter.sendMail(mailOption, (errr, info) => {
    if (errr) {
      console.log(errr);
      res.json({ status: 500, message: "message sending fail" });
    } else {
      console.log("seccessfully sent");

      next();
    }
  });
};
