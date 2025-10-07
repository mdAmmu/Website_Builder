import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  // Check if authenticated
  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  const email = user.primaryEmailAddress.emailAddress;

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (existingUser.length === 0) {
    const data = {
      name: user.fullName ?? "NA",
      email: user.primaryEmailAddress?.emailAddress ?? "", 
      credits: 2,
    };

    await db.insert(usersTable).values(data);
    return NextResponse.json({ user: data });
  }

  return NextResponse.json({ user: existingUser[0] });
}
