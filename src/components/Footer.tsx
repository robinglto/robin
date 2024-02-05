import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex justify-end mt-auto">
      <div>
        <p className="subpixel-antialiased text-gray-600/90 dark:text-gray-400 text-xs text-center pb-20 dark:hover:text-white hover:text-black  transition duration-700 ease-in-out hover:cursor-pointer">
          2024 © Saul Perez. All rights reserved.
        </p>
      </div>
    </div>
  );
}
