"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { User } from 'lucide-react';
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {

    const {user} = useUser();
    const [userDetail, setUserDetail] = useState<any>()

    useEffect(()=>{
        user && CreateNewUser();
    },[user])

    const CreateNewUser = async() =>{
        const result = await axios.post('/api/users',{

        })
        setUserDetail(result.data?.user);
    }
  return (
    <div>
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
            {children}
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider