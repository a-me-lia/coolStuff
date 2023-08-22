"use client";

import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
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
    <nav>
      <div className="flex flex-row w-full bg-white items-baseline justify-between ">
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
  );
}
