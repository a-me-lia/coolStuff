"use client";
import Image from "next/image";
import { comma } from "postcss/lib/list";
import { use, useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="md:mx-auto md:w-[742px] mt-32 mb-32 text-[16px] space-y-12 font-mono ">
        <div>
          <h1 className=" text-[32px]">Being Human</h1>
          <div className="flex flex-row justify-between align-baseline">
            <h2 className="">
              Some questions and asnwers about my life as a human.
            </h2>
            <h2 className="">2023-08-29</h2>
          </div>
        </div>

        <div className="relative w-full h-[420px]">
          <Image src="/china.jpeg" alt="" fill></Image>
        </div>

        <div className="space-y-6">
          <div className=" transition-opacity duration-1000 fancy font-bold mb-6">
            <p>
              2. What was the last movie you saw? Did you like it or not? Why?
              Are there particular types of movies you like to watch? Why?
            </p>
          </div>

          <div className="transition-opacity duration-1000 fancy">
            <p>
              The last movie I saw was Suzume no Tojimari, a recent release
              (4/13 in the United States). I watched the original Japanese
              spoken language version subbed with English in the Xenon digital
              IMAX theatre at Southpoint. Even without considering the beauty of
              the animation on the huge silver screen, or the spine-chilling
              soundtrack (see links below), the movie was extremely emotionally
              moving and prompted me to think about the relationships I maintain
              with my own family, and how I choose to live my life every day.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              You can google the movie synopsis if you so wish, I won’t bore you
              here, but it’s a very beautiful movie and I definitely recommend
              watching it.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000">
            <p>
              {" "}
              The type of movie that I love watching are exactly like Suzume,
              movies that tell beautiful stories that often go right down to the
              most basic aspects of the human experience such as loss, love, and
              separation. I’ve never found a clear common genre labeled for
              these works I enjoy. My favorite director is Makoto Shinkai. He
              tells very pretty stories.
            </p>
          </div>

          <div className="fancy transition-opacity duration-1000 text-blue-400 hover:underline">
            <Link href="https://www.rogerebert.com/interviews/makoto-shinkai-interview">
              Inteview with Makoto Shinkai on Suzume no Tojimari
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
