"use client"

import { useState } from "react";



export default function Navbar(){

    const [selectedTab, setSelectedTab] = useState(0);
    const [barWidth, setBarWidth] = useState( )

    const ProcessAnimationBar = (toTab:'1'|'2'|'3'|'4') => {
        if(document){
            for(let i = barWidth; i <= document.getElementById(toTab)!.offsetWidth; i++){
            ``
            }
        }


    }

    




    return(
        <nav>
            <div className="flex flex-col font-mono text-[16px] w-min">
                <ul className="flex flex-row items-baseline">
                    <li className="pr-10" id='0'>home</li>
                    <li className="pr-10" id='1'>blog</li>
                    <li className="pr-10" id='2'>guestbook</li>
                    <li className="pr-10" id='3'>contact</li>
                </ul>
                <div className="w-full bg-gray-200 h-[1px] mt-2"></div>

            </div>
        </nav>
    )
}