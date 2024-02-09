import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function NavBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // El tema se ha cargado correctamente
  }, []);

  return (
    <div className="flex justify-between lg:mx-32 mt-12">
      <div>
        <ul className="flex space-x-3">
          <li
            className={`hover:text-black dark:hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/"
                ? "dark:text-white text-black underline decoration-2 underline-offset-4 dark:decoration-white decoration-black"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`hover:text-black dark:hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/writing"
                ? "dark:text-white text-black underline decoration-2 underline-offset-4 decoration-dark dark:decoration-white"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Link href={"/writing"}>Writing</Link>
          </li>
        </ul>
      </div>
      <div>
        {mounted && (
          <button
            className={`hover:dark:text-white hover:text-black text-gray-500 dark:text-gray-400 subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        )}
      </div>
    </div>
  );
}
