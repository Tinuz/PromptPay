import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Here you would typically integrate with Mailchimp or your preferred email service
    // For now, we'll just simulate a successful response
    console.log("New subscription:", email);

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing subscription" },
      { status: 500 }
    );
  }
}
