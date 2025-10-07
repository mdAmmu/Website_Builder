import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { AppSidebar } from './_components/AppSidebar';
import AppHeader from './_components/AppHeader';

const WorksapceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <div className='w-full'>
            <AppHeader/>
            {children}
        </div>
    </SidebarProvider>
    
  )
}

export default WorksapceLayout
