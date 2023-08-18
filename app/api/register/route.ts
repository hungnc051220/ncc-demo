import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, idCard, phoneNumber, email, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("Email đã tồn tại", { status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prismadb.user.create({
      data: {
        name,
        idCard,
        phoneNumber,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Hệ thống gặp lỗi bất thường. Xin hãy thử lại sau", { status: 500})
  }
}
