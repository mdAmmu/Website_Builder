"use client"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

export function AppSidebar() {
    const [projectList, setProjectList] = useState([]);
    const {userDetail,setUserDetail} = useContext(UserDetailContext)

  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex items-center gap-2">
            <Image src={'/download.jpeg'} alt="logo" width={35} height={35}/>
            <h2 className="font-bold text-xl">AI Website Builder</h2>
        </div>
        <Link href={'/workspace'} className="mt-5 w-full">
            <Button>
                + Add New Project
            </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            {projectList.length == 0 && 
                <h2 className="text-sm text-gray-500 px-2">No Prooject Found</h2> 
            }
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <div className="p-3 border rounded-xl space-y-3 bg-secondary">
            <h2 className="flex justify-between items-center">Remaning Credits : <span className="font-bold">{userDetail?.credits}</span></h2>
            <Progress value={33}/>
            <Button className="w-full">Upgrade to Unlimited</Button>
        </div>
        <div className="flex items-center gap-2">
            <UserButton/>
            <Button variant={'ghost'}>Settings</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}