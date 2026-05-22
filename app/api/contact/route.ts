import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const contact = await Contact.create(body);

    // EMAIL SETUP

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    // SEND EMAIL

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New SPI-Tech Contact Form Message",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Phone:</strong> ${body.phone}</p>

        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({

      success: true,
      message: "Message sent successfully",

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(

      {
        success: false,
        message: "Something went wrong",
      },

      {
        status: 500,
      }

    );

  }

}