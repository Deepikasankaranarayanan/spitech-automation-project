import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {

  try {

    console.log("API HIT");

    await connectDB();

    console.log("DB CONNECTED");

    const body = await req.json();

    console.log(body);

    const contact = await Contact.create(body);

    console.log("DATA SAVED");

    return NextResponse.json({
      success: true,
      data: contact,
    });

  } catch (error) {

    console.log("ERROR =>", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );

  }

}