"use client";
import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/navbar";

import Link from "next/link";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);

  const [scroll, setScroll] = useState(0);
  const [scrolling, setScrolling] = useState(false);

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
      if (scrolling) {
        return;
      }
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

        console.log(between);
        console.log(before);
        //0,0     112,78       177,175        180, 282       455,380

        setSelectedTab(Number(toTab));
      }
    },
    [scrolling, selectedTab],
  );
  //   //Animation bar function called within the element self detector
  //   //this sets scrolling stateful value to true for the duration of the scroller, make make sure
  //   //it doesnt not jump areound mid transition.

  //   //CALLED IN THE ON CLICK OF THE NAV!!!
  //   const ProcessAnimationBarWithLockout = (toTab: string) => {
  //     if (scrolling) {
  //       return;
  //     }
  //     ProcessAnimationBar(toTab);
  //     setScrolling(true);
  //     setTimeout(() => {
  //       setScrolling(false);
  //     }, duration);
  //   };

  //   //this delays invoking ProcessAnimationBar so that in case the user scrolls fast,
  //   //the function wont get called a lot

  //   //Called in each el statement of the silly containers
  //   //idk if i should use this
  //   const ProcessAnimationBarWithDelayedCheck = (
  //     toTab: string,
  //     element: Element,
  //   ) => {
  //     if (scrolling) {
  //       return;
  //     }
  //     setScrolling(true);
  //     setTimeout(() => {
  //       setScrolling(false);
  //     }, 2000);
  //   };

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

  const duration = 1400;
  const offset = -120;

  return (
    <main className="min-h-screen bg-white">
      <div className=" h-24 flex flex-col w-full justify-end fixed right-0 top-0 left-0 z-50 bg-white">
        {" "}
        <div className="md:mx-auto md:w-[742px]">
          <Navbar></Navbar>
        </div>
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
            // console.log(elements.toString());
            if (elements[0] < 500 && elements[1] >= 500) {
              ProcessAnimationBar("0");
            }
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
            if (elements[1] < 500 && elements[2] >= 500) {
              ProcessAnimationBar("1");
            }
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
            if (elements[2] < 500 && elements[3] >= 500) {
              ProcessAnimationBar("2");
            }
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
            if (elements[3] < 500 && elements[4] >= 500) {
              ProcessAnimationBar("3");
            }
          }}
          id="resumé"
        >
          contact
        </div>
      </div>
    </main>
  );
}
