"use client";
import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import {
  Link as Linc,
  Button,
  Element,
  Events,
  animateScroll as Ascroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Link from "next/link";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);

  const [scroll, setScroll] = useState(0);
  const [scrolling, setScrolling] = useState(0);

  const [elements, setElements] = useState<number[]>([0, 1, 2, 3, 4]);

  useEffect(function () {
    setBarWidth(document.getElementById("0")?.clientWidth!);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
  }

  const ProcessAnimationBar = useCallback(
    (toTab: string) => {
      if (toTab != selectedTab.toString()) {
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
        }, 700);

        setSelectedTab(Number(toTab));
      }
    },
    [selectedTab],
  );

  //   useEffect(
  //     function () {

  //         if(!scrolling){//unused, always true
  //             setTimeout(function(){
  //                 if (elements[4] < 500) {
  //                     ProcessAnimationBar('4')
  //                     return;
  //                   } else if (elements[3] < 500) {
  //                     ProcessAnimationBar('3')
  //                     return;
  //                   } else if (elements[2] < 500) {
  //                     ProcessAnimationBar('2')
  //                     return;
  //                 } else if (elements[1] < 500) {
  //                     ProcessAnimationBar('1')
  //                     return;
  //                   } else {
  //                     ProcessAnimationBar('0')
  //                     return;
  //                   }
  //             },1400)

  //       //console.log(scroll)
  //       //console.log(projects);

  //     }
  //     },
  //     [ProcessAnimationBar, elements, scroll, scrolling],
  //   );

  //TODO:
  //set scrolling to true for duration of the autoscroll so that the nav cannot be triggered in between
  //implement checking of scrolling var before function call in each element below

  const offset = -120;

  return (
    <main className="min-h-screen bg-white">
      <div className="md:mx-auto md:w-[742px] h-24 flex flex-col justify-end fixed right-0 top-0 left-0 z-50 bg-white">
        {" "}
        <nav>
          <div className="flex flex-row w-full  items-baseline justify-between overflow-x-hidden ">
            <div className="flex flex-col font-mono text-[16px] w-full bg-white">
              <div className="flex flex-row items-baseline">
                <Linc
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={offset}
                  duration={1000}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  spyThrottle={500}
                  className="pr-10"
                  onClick={() => ProcessAnimationBar("0")}
                  onSelect={() => ProcessAnimationBar("0")}
                >
                  <p id="0">home</p>
                </Linc>
                <Linc
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={1000}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  className="pr-10"
                  onClick={() => ProcessAnimationBar("1")}
                  onSelect={() => ProcessAnimationBar("1")}
                >
                  <p id="1">blog</p>
                </Linc>
                <Linc
                  to="guestbook"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  className="pr-10"
                  onClick={() => ProcessAnimationBar("2")}
                  onSelect={() => ProcessAnimationBar("2")}
                >
                  <p id="2">guestbook</p>
                </Linc>
                <Linc
                  to="resumé"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={1000}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  className="pr-10"
                  onClick={() => ProcessAnimationBar("3")}
                  onSelect={() => ProcessAnimationBar("3")}
                >
                  <p id="3">resumé</p>
                </Linc>
                <Linc
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={1000}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  className="w-full text-right"
                  onClick={() => ProcessAnimationBar("4")}
                  onSelect={() => ProcessAnimationBar("4")}
                >
                  <p id="4">work with me</p>
                </Linc>
              </div>
              <div className="w-full bg-gray-200 h-[1px]   mt-2"></div>
              <div
                style={{
                  width: barWidth + "px",
                  transform: `translate(${barTranslate}px, -2px)`,
                }}
                className={`bg-black transition-all duration-500  h-[3px]`}
              ></div>
            </div>
          </div>
        </nav>
      </div>

      <div
        id="style-1"
        className="mx-4 w-full md:mx-auto md:w-[742px] mt-28 relative "
      >
        <div
          className="w-full h-[800px] bg-red-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[0] = el.getBoundingClientRect().top;
            setElements(temp);
            console.log(elements.toString())
            if(elements[0] < 500 && elements[1] >= 500){ProcessAnimationBar('0')}
          }}
          id="home"
        >
          home
        </div>
        <div
          className="w-full h-[800px] bg-green-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[1] = el.getBoundingClientRect().top;
            setElements(temp);
            if(elements[1] < 500 && elements[2] >= 500){ProcessAnimationBar('1')}
          }}
          id="blog"
        >
          blog
        </div>
        <div
          className="w-full h-[800px] bg-blue-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[2] = el.getBoundingClientRect().top;
            setElements(temp);
            if(elements[2] < 500 && elements[3] >= 500){ProcessAnimationBar('2')}
          }}
          id="guestbook"
        >
          guestbook
        </div>
        <div
          className="w-full h-[800px] bg-red-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[3] = el.getBoundingClientRect().top;
            setElements(temp);
            if(elements[3] < 500 && elements[4] >= 500){ProcessAnimationBar('3')}
          }}
          id="resumé"
        >
          resumé
        </div>
        <div
          className="w-full h-[800px] bg-green-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[4] = el.getBoundingClientRect().top;
            setElements(temp);
            if(elements[4] < 500 ){ProcessAnimationBar('4')}
          }}
          id="work"
        >
          work with me
        </div>
      </div>
    </main>
  );
}
