import React from "react";
import Image from "next/image";
import Profile from "../public/profiletwo.jpeg";

import { SewingPinFilledIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function About() {
  return (
    <section id="/" className="mb-28 mt-28 rounded-xl">
      <style>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 1.5s steps(40) 1.5s 1 normal both;
          }

          @keyframes reveal-up {
            0% {
              opacity: 0;
              transform: translateY(50%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-reveal-up {
            animation: reveal-up 1s ease-out;
          }

          @keyframes text-focus-in {
            0% {
              opacity: 0;
              filter: blur(12px);
            }
            100% {
              opacity: 1;
              filter: blur(0);
            }
          }

          .text-focus-in {
            animation: text-focus-in 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
          }
        `}
      </style>
      <div className="subpixel-antialiased flex justify-center space-x-10 md:mx-10 mb-10 mt-6">
        <div className="2xl:w-8/12 xl:w-3/6 lg:w-3/4 w-full sm:mx-10 p-4">
          <div className="animate-reveal-up">
            <h2 className="animate-typing subpixel-antialiased font-semibold text-gray-100/90 lg:text-6xl md:text-4xl text-3xl">
              Saul Perez
            </h2>

            <p className="subpixel-antialiased text-focus-in md:text-xl text-lg text-gray-500 mb-4">
              Software Developer
            </p>
            <p className="text-gray-300 lg:text-lg md:text-md text-sm text-focus-in">
              Software developer, dedicated to creating accessible and
              user-centered digital products. Passionate about crafting
              high-quality software solutions and seeking new opportunities in
              the field.
            </p>

            <div className="flex space-x-2 text-gray-500 my-5 hover:text-gray-300/90 transition delay-150 duration-300 ease-in-out hover:cursor-pointer sm:text-md text-sm">
              <SewingPinFilledIcon className="my-1" />
              <p>Open to remote or near Dominican Republic</p>
            </div>
            <div className="flex space-x-5 my-5 text-focus-in text-gray-500">
              <Link href={"https://github.com/robinglto/"}>
                <GitHubLogoIcon className="w-5 h-5 hover:text-white transition delay-150 duration-300 ease-in-out" />
              </Link>

              <LinkedInLogoIcon className="w-5 h-5 hover:text-white transition delay-150 duration-300 ease-in-out " />
              <Link href={"https://twitter.com/robinglto"}>
                <TwitterLogoIcon className="w-5 h-5 hover:text-white transition delay-150 duration-300 ease-in-out " />
              </Link>
              <Link href={"mailto:pfzsaul@gmail.com"}>
                <EnvelopeClosedIcon className="w-5 h-5 hover:text-white transition delay-150 duration-300 ease-in-out " />
              </Link>

              {/* <NotionLogoIcon className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-center space-x-6   ">
          <Image
            className="rounded-full shadow-lg shadow-gray-900 
             h-36 w-36  p-0.5 bg-gray-950"
            src={Profile}
            alt="Profile"
            priority
          />
        </div>
      </div> */}
    </section>
  );
}
