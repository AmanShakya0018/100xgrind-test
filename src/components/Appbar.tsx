"use client";
import React from 'react'
import { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { UserRound } from 'lucide-react';
import UserImage from './UserImage';

function Appbar() {
    const { data: session, status } = useSession();
  const user = session?.user;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || status === "loading") return null;
  if (!user) return null;
  return (
    <div className='flex justify-between items-center mx-auto fixed top-6 left-0 right-0  w-2/3  bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border  border-primary/10 p-4 rounded-full  '>
        <div>
        <span className=" text-blue text-lg md:text-2xl font-bold tracking-tight text-foreground hidden md:block">
            100xGrind
          </span>
        </div>
        <div> {user.image ? (
              <UserImage image={user.image} />
            ) : (
              <div className="from-primary-400 to-primary-600 flex h-full w-full items-center justify-center bg-gradient-to-br text-white">
                <UserRound size={16} />
              </div>
            )}</div>
    </div>
  )
}

export default Appbar