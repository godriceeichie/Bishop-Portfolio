
import {  NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const { email} = await req.json()
    if (!email) {
      return new NextResponse(JSON.stringify({ error: "Email is required" }), {status: 400});
    }

    const MailchimpKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;
    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MailchimpKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });
    const received = await response.json();
    return new NextResponse(JSON.stringify(received), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
  } catch (error: any) {

    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
