import { useState } from "react";
import Link from "next/link";

export default function ResumeButton() {
  const [isHovered, setIsHover] = useState(false);

  return (
    <Link href="/resume">
      <div
        className={` ${
          isHovered ? "md:w-28 w-10" : "w-10 delay-200"
        } transition-all overflow-hidden duration-500 relative border-[1px] h-10  p-0.5 bg-white rounded-lg`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p className="font-mono  ml-2 mt-1.5 ">resumé</p>
        {/* <div
          className={`w-full h-full bg-pink transition-all duration-300  rounded-md  ${
            isHovered ? "opacity-100" : "opacity-0 "
          } `}
        ></div> */}
        {/*<div className={`absolute text-textMedium bg-white px-2  py-1 border-[1px]  transition-transform duration-300  ${isHovered ? 'scale-100   -translate-x-24' : 'scale-0   -translate-x-10' } `}>resumé</div> */}
        <div className=" bg-white translate-y-[1px] p-1.5 top-0 absolute right-0">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
              stroke={`${isHovered ? "#999999" : "#999999"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 10H16M8 6H12M8 14H11"
              stroke={`${isHovered ? "#999999" : "#999999"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
              fill={`${isHovered ? "#999999" : "#999999"}`}
              stroke={`${isHovered ? "#999999" : "#999999"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.3056 17.1133L17.2147 15.1856C17.3314 14.9381 17.6686 14.9381 17.7853 15.1856L18.6944 17.1133L20.7275 17.4243C20.9884 17.4642 21.0923 17.7998 20.9035 17.9923L19.4326 19.4917L19.7797 21.61C19.8243 21.882 19.5515 22.0895 19.3181 21.961L17.5 20.9603L15.6819 21.961C15.4485 22.0895 15.1757 21.882 15.2203 21.61L15.5674 19.4917L14.0965 17.9923C13.9077 17.7998 14.0116 17.4642 14.2725 17.4243L16.3056 17.1133Z"
              stroke={`${isHovered ? "#999999" : "#999999"}`}
              fill={`${isHovered ? "#FFFF00" : "none"}`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
