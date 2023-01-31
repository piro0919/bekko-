/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line filenames/match-exported
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  { body: { email, message, name, subject } }: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const transporter = nodemailer.createTransport({
    auth: {
      pass: process.env.NODEMAILER_AUTH_PASS,
      user: process.env.NODEMAILER_AUTH_USER,
    },
    port: 465,
    secure: true,
    service: "gmail",
    tls: {
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    },
  });
  const info = await transporter.sendMail({
    subject,
    replyTo: `${name} <${email}>`,
    text: message,
    to: process.env.NODEMAILER_AUTH_USER,
  });

  res.status(200);
  res.json(info);
  res.end();
}
