import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-end mt-auto">
      <div>
        <p className="subpixel-antialiased text-gray-400/90 text-xs text-center pb-20 hover:text-white transition delay-150 duration-500 ease-in-out hover:cursor-pointer">
          © 2023 Saul Perez. All rights reserved.
        </p>
      </div>
    </div>
  );
}
