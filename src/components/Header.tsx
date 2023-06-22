import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between lg:mx-32 mt-12">
      <div>
        <ul className="flex space-x-3">
          <li
            className={`hover:text-black dark:hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/"
                ? "dark:text-white text-black"
                : "text-gray-500"
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`hover:text-black dark:hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/blog"
                ? "dark:text-white text-black"
                : "text-gray-500"
            }`}
          >
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          className={`hover:dark:text-white hover:text-black text-gray-500 subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}