"use client";
import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barTranslate, setBarTranslate] = useState<number>(0);

  const [scroll, setScroll] = useState(0);

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
    },
    [selectedTab],
  );



  return (
    <main className="min-h-screen bg-white">
      <div className="md:mx-auto md:w-[742px] h-24 flex flex-col justify-end fixed right-0 top-0 left-0 z-50 bg-white">
        {" "}
        <nav>
          <div className="flex flex-row w-full  items-baseline justify-between ">
            <div className="flex flex-col font-mono text-[16px] w-full bg-white">
              <ul className="flex flex-row items-baseline">
                <li className="pr-10" onClick={() => ProcessAnimationBar("0")}>
                  <p id="0">home</p>
                </li>
                <li className="pr-10" onClick={() => ProcessAnimationBar("1")}>
                  <p id="1">blog</p>
                </li>
                <li className="pr-10" onClick={() => ProcessAnimationBar("2")}>
                  <p id="2">guestbook</p>
                </li>
                <li className="pr-10" onClick={() => ProcessAnimationBar("3")}>
                  <p id="3">resumé</p>
                </li>
                <li
                  className="w-full text-right"
                  onClick={() => ProcessAnimationBar("4")}
                >
                  <p id="4">work with me</p>
                </li>
              </ul>
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
        className="mx-4 w-full md:mx-auto md:w-[742px] mt-24 relative "
      >
        <div
          className="w-full h-[800px] bg-red-300"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[0] = el.getBoundingClientRect().top;
            setElements(temp);
          }}
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
          }}
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
          }}
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
          }}
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
          }}
        >
          work with me
        </div>
      </div>
    </main>
  );
}
