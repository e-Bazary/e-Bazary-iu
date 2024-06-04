import Welcome from "@/app/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend('re_UnHFNcua_Je5fowNwR62fBsPgQH3vPWqb');

export async function POST(req: Request) {
  const { email, firstname } = await req.json();
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome!",
    react: Welcome({ firstname }),
  });
}
