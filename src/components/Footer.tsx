
import { useRouter } from "next/router";
import React from "react";


export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex justify-end mt-auto">
      <div>
        <p className={`${
              router.pathname !== '/'
                ? router.pathname !== '/blog'? 
                'subpixel-antialiased text-gray-400/90  text-xs text-center pb-20  hover:text-black transition delay-150 duration-500 ease-in-out hover:cursor-pointer'
                : 'subpixel-antialiased text-gray-400/90 dark:text-gray-600 text-xs text-center pb-20 dark:hover:text-white hover:text-black transition delay-150 duration-500 ease-in-out hover:cursor-pointer'
                : "subpixel-antialiased text-gray-400/90 dark:text-gray-600 text-xs text-center pb-20 dark:hover:text-white hover:text-black transition delay-150 duration-500 ease-in-out hover:cursor-pointer"
            } 
            `}>
          © 2023 Saul Perez. All rights reserved.
        </p>
      </div>
    </div>
  );
}
