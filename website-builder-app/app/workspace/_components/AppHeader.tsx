import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const AppHeader = () => {
  return (
    <div className='flex items-center justify-between p-3 shadow'>
        <SidebarTrigger/>
        <UserButton/>
    </div>
  )
}

export default AppHeader