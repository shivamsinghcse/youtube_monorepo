'use client'
import Image from "next/image";
import Link from "next/link";
import youtubeLogo from "../../public/Youtube-Logo-Vector.svg"
import { ArrowLeft, Mic, Search } from "lucide-react";
import userpfp from "../images/image.png"
import { useState } from "react";

export default function Navbar(){
    const user= {
        username: 'nameofuser',
        pfp: userpfp
    }
    const [search, setSearch] = useState(false)
    if(!search){

        return(
            <div className="flex justify-between">
        <Link
        href='#'
        >
            <Image src={youtubeLogo} alt="youtubelogo" className="w-32 m-4"></Image>
        </Link>
        <div className="flex items-center">

        <Search className="mx-3" onClick={()=>{
            setSearch(true)
        }}></Search>
        <Image src={user.pfp} alt={user.username} className="mx-3 w-8 h-8 rounded-full"></Image>
        </div>
        </div>
    )
}else{
    return(
        <div className="flex my-4 mx-2 items-center">
        <ArrowLeft className="mx-2" onClick={()=>{
            setSearch(false)
        }}></ArrowLeft>
        <input type="text" className="border-y-2 w-60 border-l-2 border-r-0 h-10 rounded-l-full px-3 border-l-black border-y-black"></input>
        <Search className="h-10 border-2 border-l-0 border-y-black w-8 pr-2 border-r-black rounded-r-full"></Search>
        <Mic className="rounded-full h-10 w-10 mx-auto border-2 px-2 border-black"></Mic>
        </div>
    )
}
}
