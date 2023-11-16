import nodemailer from 'nodemailer';
// import Order from '../models/orders';
// import { google } from "googleapis";
import { magicLinkTemplate } from '../templates/magic-link';

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: 'info@bedsdivans.co.uk',
    pass: 'DuuA1N6wPXh6',
  },
} as any);

export const sendMagicLinkService = async (
  email: string,
  redirectTo: string
) => {
  //   const CLIENT_ID = process.env.CLIENT_ID;
  //   const CLIENT_SECRET = process.env.CLIENT_SECRET;
  //   const REDIRECT_URI = process.env.REDIRECT_URI;
  //   const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  //   const oAuth2Client = new google.auth.OAuth2(
  //     CLIENT_ID,
  //     CLIENT_SECRET,
  //     REDIRECT_URI
  //   );

  //   oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  return new Promise(async (resolve, reject) => {
    // const accessToken = oAuth2Client.getAccessToken((err: any, token) => {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     return token;
    //   }
    // });

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: "singheklavyaofficial@gmail.com",
    //     clientId: CLIENT_ID,
    //     clientSecret: CLIENT_SECRET,
    //     refreshToken: REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    //   tls: {
    //     rejectUnauthorized: true,
    //   },
    // } as any);

    const message = {
      from: 'Beds Divans <info@bedsdivans.co.uk>',
      to: email,
      subject: 'Beds Divans - Verify Your Account',
      html: magicLinkTemplate({ redirectTo }),
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

