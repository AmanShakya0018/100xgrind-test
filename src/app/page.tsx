import Appbar from "@/components/Appbar"
import Hero from "@/components/Hero"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return(
     <div className=" ">
      <Appbar/>
      <Hero/>
     </div>
    
    
  )
}
