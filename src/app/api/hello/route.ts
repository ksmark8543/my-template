import { NextResponse, NextRequest } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  // const users = await prisma.users.findMany();
  // console.log(users);
  const searchParams = request.nextUrl.searchParams;
  // await prisma.$disconnect();
  return NextResponse.json({ hello: `${searchParams.get('name')} world` });
}
