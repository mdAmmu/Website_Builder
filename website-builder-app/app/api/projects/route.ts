import { db } from "@/config/db";
import { chatTable, frameTable, projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const {projectId,frameId,message} = await req.json();
    const user = await currentUser();
    // Create project
    const projectResult = await db.insert(projectTable).values({
        projectId:projectId,
        createdBy: user?.primaryEmailAddress?.emailAddress
    })
    // Create Frames
    const frameResult = await db.insert(frameTable).values({
        frameId: frameId,
        projectId: projectId,
    })
    // Save user Message 
    const chatResult = await db.insert(chatTable).values({
        chatMessage: message,
        createdBy: user?.primaryEmailAddress?.emailAddress,
    })

    return NextResponse.json({
        projectId, frameId, message
    })
}