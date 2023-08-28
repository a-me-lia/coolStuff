"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { isTypeQueryNode } from "typescript";

const navItems = {
  '/': {
    name: 'home',
    id: "0"
  },
  '/blog': {
    name: 'blog',
    id: "1"
  },
  '/guestbook': {
    name: 'guestbook',
    id: "2"
  },
  '/contact': {
    name: 'contact',
    id: "3"
  }
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }


  
  
  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);
  const [loaded, setLoaded] = useState(true);

  const [scroll, setScroll] = useState(0);

  useEffect(()=>{
    
  })





  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
  }

  const ProcessAnimationBar = useCallback(
    (toTab: string) => {
      let before = 0;
      let between = 0;

      for (let i = 0; i <= Number(toTab) - 1; i++) {
        before += document.getElementById(i.toString())?.offsetWidth!;
        before += 40;
      }
      if (selectedTab < Number(toTab)) {
        for (let i = selectedTab; i <= Number(toTab); i++) {
          between += document.getElementById(i.toString())?.offsetWidth!;
          between += 40;
        }
      } else {
        for (let i = selectedTab; i >= Number(toTab); i--) {
          between += document.getElementById(i.toString())?.offsetWidth!;
          between += 40;
        }
      }
      between -= 44;

      setBarWidth(between);
      if (selectedTab > Number(toTab)) setBarTranslate(before + 2);

      setTimeout(() => {
        setBarWidth(document.getElementById(toTab)?.offsetWidth! + 4);
        if (true) setBarTranslate(before - 2);
      }, 600);

      setSelectedTab(Number(toTab));

    },
    [selectedTab],
  );

    //TODO: refaactor animation so that two states, before and current, 
    //clicking sets current, and useeffect listens in on current to call animation appropirately
    //selected will be initialized to reflect the currentpathname from a separate useffect





  //   useEffect(
  //     function () {
  //       //console.log(scroll)
  //       //console.log(projects);
  //       for (let i = elements.length - 1; i >= 0; i--) {
  //         if (elements[i] < 500) {
  //           ProcessAnimationBar(i.toString());
  //           return;
  //         }
  //         ProcessAnimationBar("0");
  //       }
  //     },
  //     [ProcessAnimationBar, elements, scroll],
  //   );

  return (
    <div className=" h-24 flex flex-col w-full justify-end fixed right-0 top-0 left-0 z-50 bg-white">
    {" "}
    <div className="md:mx-auto md:w-[742px]">
    <nav>
      <div className="flex flex-row w-full bg-white items-baseline justify-between overflow-x-hidden ">
        <div className="flex flex-col font-mono text-[16px] w-full bg-white">
          <div className="flex flex-row items-baseline">
            {Object.entries(navItems).map(([path, { name, id }]) => {
                const isActive = path === pathname;
              return(
                <Link key={path} href={path} onClick={()=>ProcessAnimationBar(id)} className={`pr-10 ${isActive ? 'text-neutral-900' : 'text-neutral-400' } transition-colors duration-1000`}><p id={id}>{name}</p></Link>
              );
            })}
          </div>
          <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
          <div
            style={{
              width: barWidth + "px",
              transform: `translate(${barTranslate}px, -2px)`,
            }}
            className={`bg-neutral-900 h-[1px] ${loaded ? ' transition-all duration-500 ' : ''}`}
          ></div>
        </div>
      </div>
    </nav>
    </div>
      </div>
  );
}
