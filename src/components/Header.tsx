import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="flex justify-between lg:mx-32 mt-12  ">
      <div className=" ">
        <ul className="flex space-x-3">
          <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/snippets" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <p>Mode</p>
      </div> */}
    </div>
  );
}
