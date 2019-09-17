import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

const emailSender = (emailToVerify, token) => {
  const noReplyEmail = process.env.NO_REPLY_MAIL;
  const hostUrl = process.env.HOST_URL;
  const sendGridKey = process.env.SENDGRID_API_KEY;

  const url = `${hostUrl}/api/verification/?yourEmailToken=${token}&yourEmail=${emailToVerify}`;
  sgMail.setApiKey(sendGridKey);

  const msg = {
    from: `${noReplyEmail}`,
    to: `${emailToVerify}`,
    subject: 'Please verify your email on Fast Food Fast using the link below',
    text: 'You are welcome to Fast Food Fast',
    html: `<strong>Click on the link to verify your email: ${url}</strong>`
  };
  sgMail.send(msg);
};

export default emailSender;
