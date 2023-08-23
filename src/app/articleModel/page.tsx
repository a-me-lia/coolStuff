"use client";
import Image from "next/image";
import { comma } from "postcss/lib/list";
import { use, useEffect, useState } from "react";
import Code from "../components/code";

export default function Page() {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(function () {
    if (typeof window !== "undefined") setHeight(window.innerHeight);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
    window.addEventListener("resize", (event) => {
      let height = innerHeight;
      //console.log(scroll)
      setHeight(height);
    });
  }

  useEffect(
    function () {
      for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
        let element = document.getElementsByTagName("div")[i];
        if (element.className.search("fancy") != -1) {
          if (
            element.className.search("opacity-100 ") == -1 &&
            element.className.search("opacity-10 ") == -1
          )
            element.className = element.className + " opacity-10 ";
          if (height - element.getBoundingClientRect().top > 128) {
            element.className = element.className.replace(
              "opacity-10 ",
              "opacity-100 ",
            );
          } else {
            element.className = element.className.replace(
              "opacity-100 ",
              "opacity-10 ",
            );
          }
          // if(i == 1)console.log(element.className)

          // if(i == 1)console.log(element.getBoundingClientRect().top )
          // if(i == 1)console.log( height - element.getBoundingClientRect().top )
        }
      }
    },
    [height, scroll],
  );

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="w-1/2 mx-auto mt-12 mb-24 text-[16px] space-y-12 font-mono ">
        <h1 className="text-[#ff0000] text-[32px]">
          Caroline is allergic to shrimp
        </h1>

        <div className="relative w-full h-[420px]">
          <Image src="/china.jpeg" alt="" fill></Image>
        </div>

        <div className=" transition-opacity duration-1000 fancy">
          <p>
          Marin is boisterous, extravagant, messy, and while quite mature,
          she&apos;s also clumsy. As a cosplayer and huge otaku, Marin is a big
          of fan of magical girl anime and adult video games. She strongly
          desires to cosplay as certain characters, seeing the notion of
          dressing up and becoming said characters as the ultimate form of love
          for them.
          </p>
        </div>

        <div className="transition-opacity duration-1000 fancy">
          <p>
          Marin&apos;s love for the characters she likes extends to the point
          where she won&apos;t cosplay as them if she feels as though she
          can&apos;t fit their appearance, not wanting to spoil their image. She
          is notably very kind, friendly, cheerful, and outgoing. It is shown
          that Marin greatly dislikes overly-critical people that judge others
          for their interests, causing her to reject the advances of a boy at
          the start of the series, who poked fun at her liking anime.
          Marin&apos;s non-judgmental outlook and friendly nature causes her to
          greatly admire Wakana, not caring that the boy is seen as awkward and
          quiet by others. She saw no reason to keep their newfound friendship
          and a secret, openly greeting him in the school hallways and later
          treating him at a ramen restaurant.
          </p>
        </div>
        <div className="fancy duration-1000">
        <Code language="javascript" code=
        {`const [scroll, setScroll] = useState(0);
          const [height, setHeight] = useState(0);
        
          useEffect(function () {
            if (typeof window !== "undefined") setHeight(window.innerHeight);
          }, []);
        
          if (typeof window !== "undefined") {
            window.addEventListener("scroll", (event) => {
              let scroll = scrollY;
              //console.log(scroll)
              setScroll(scroll);
            });
            window.addEventListener("resize", (event) => {
              let height = innerHeight;
              //console.log(scroll)
              setHeight(height);
            });
          }
          `}></Code>
        </div>

        <div className="fancy transition-opacity duration-1000">
<p>          Marin holds her own values and can be quite earnest when it comes to
          it, despite her cheery and carefree attitude. For example, she easily
          saw how Wakana was being taken advantage of by his classmates and told
          him that he shouldn&apos;t put up with that. Also, when Wakana began
          purposefully avoiding her out of embarrassment due to other students
          finding out about their friendship, Marin confronted him herself,
          telling Wakana to tell her outright if he had a problem with being
          around her. While possessing a mature side, Marin can be something of
          a scatterbrain on occasion.</p>
        </div>

        <div className="fancy transition-opacity duration-1000">
<p>          She poorly knitted a prototype of her first cosplay outfit (Shizuku),
          despite a guidebook she possessed having step-by-step instructions.
          She is also a procrastinator, often opting to watch anime over doing
          work and completely losing track of time as a result. Despite this,
          she can be surprisingly proactive at times, such as finding out where
          Wakana lived so they could start their first cosplay project right
          away rather than waiting over the weekend. Marin claims that when she
          gets an idea, she doesn&apos;t waste time and gets straight to it,
          revealing a more rash and impulsive side.</p>
        </div>
      </div>
    </main>
  );
}
