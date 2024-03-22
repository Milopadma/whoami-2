"use server";

import { Resend } from "resend";

const token = Bun.env.RESEND_API;

const resend = new Resend(token);

export const sendEmail = async (content: string) => {
  console.log("Sending email...");
  const { data, error } = await resend.emails.send({
    from: "Portfolio User <onboarding@resend.dev>",
    to: ["public@milopadma.com"],
    subject: "From Portfolio User",
    html: `<div>${content}</div>`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
