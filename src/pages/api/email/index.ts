/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line filenames/match-exported
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(
  { body: { email, message, name, subject } }: NextApiRequest,
  res: NextApiResponse
): void {
  const transporter = nodemailer.createTransport({
    auth: {
      pass: process.env.NODEMAILER_AUTH_PASS,
      user: process.env.NODEMAILER_AUTH_USER,
    },
    service: "gmail",
    tls: {
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    },
  });
  const mailOptions = {
    subject,
    replyTo: `${name} <${email}>`,
    text: message,
    to: process.env.NODEMAILER_AUTH_USER,
  };

  let statusCode = 200;

  transporter.sendMail(mailOptions, (err) => {
    if (!err) {
      return;
    }

    statusCode = 500;
  });

  res.status(statusCode).end();
}
