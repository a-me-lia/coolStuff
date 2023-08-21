"use client"

import { useEffect, useState } from "react";



export default function Navbar(){

    const [selectedTab, setSelectedTab] = useState(0);
    const [barWidth, setBarWidth] = useState<number>(0)
    const [barTranslate, setBarTranslate] = useState<number>(0)

    useEffect(function(){
        setBarWidth(document.getElementById('0')?.clientWidth!)
    }, [])

    const ProcessAnimationBar = (toTab:'0'|'1'|'2'|'3') => {
        let before = 0
        let between = 0


        for(let i = 0; i <= Number(toTab) -1; i++){before += document.getElementById(i.toString())?.offsetWidth!
            before+=40}

        

        if(selectedTab < Number(toTab)){
        for(let i = selectedTab; i <= Number(toTab); i++){between += document.getElementById(i.toString())?.offsetWidth!
        between += 40}
        }else{
        for(let i = selectedTab; i >= Number(toTab); i--){between += document.getElementById(i.toString())?.offsetWidth!
        between += 40}
        }

        

        setBarWidth(between)
        if(selectedTab > Number(toTab))setBarTranslate(before)

        


        setTimeout(() => {
        setBarWidth(document.getElementById(toTab)?.offsetWidth!)
        if(selectedTab < Number(toTab))setBarTranslate(before)
        }, 700);

        setSelectedTab(Number(toTab))
    }

    




    return(
        <nav>
            <div className="flex flex-col font-mono text-[16px] w-min">
                <ul className="flex flex-row items-baseline">
                    <li className="mr-10" id='0' onClick={()=>ProcessAnimationBar("0")}>home</li>
                    <li className="mr-10" id='1' onClick={()=>ProcessAnimationBar("1")}>blog</li>
                    <li className="mr-10" id='2' onClick={()=>ProcessAnimationBar("2")}>guestbook</li>
                    <li className="mr-10" id='3' onClick={()=>ProcessAnimationBar("3")}>contact</li>
                </ul>
                <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
                <div style={{width: barWidth + 'px', transform: `translate(${barTranslate}px, -2px)`}} className={`bg-black transition-all duration-700  h-[3px]`}></div>

            </div>
        </nav>
    )
}