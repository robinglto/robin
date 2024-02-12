import Link from "next/link";
import NavBar from "@/components/Header";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Portafolio } from "./api/type";

export default function Blog() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const shadow = document.getElementById("mouse-shadow");
      if (shadow) {
        const shadowOffset = 40;
        const x = event.clientX - shadowOffset / 2;
        const y = event.clientY - shadowOffset / 2;
        shadow.style.left = `${x}px`;
        shadow.style.top = `${y}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const { theme } = useTheme();

  const data: Portafolio[] = [
    {
      id: 1,
      title: "Weather App",
      link: "https://weatherglto.vercel.app/",
      img: `${
        theme === "dark" ? "/ui/weather/dark.png" : "/ui/weather/light.png"
      }`,
      description:
        "My weather application offers user-friendly information on current weather and future forecasts, featuring a modern interface and functionalities like dark mode for an optimal user experience.",
    },
  ];

  return (
    <main className="dark:bg-black bg-white min-h-screen flex flex-col justify-between md:px-24 ">
      <style jsx>{`
        body {
          overflow-y: ${theme === "dark" ? "hidden" : "scroll"};
        }

        .mouse-shadow {
          position: fixed;
          top: 30px;
          left: 30px;
          width: 80vw;
          height: 100vw;
          max-width: ${theme === "dark" ? "500px" : "350px"};
          max-height: ${theme === "dark" ? "500px" : "350px"};
          border-radius: 50%;
          background-color: ${theme !== "light"
            ? "rgba(200, 205, 205, 0.1)"
            : "rgba(0, 0, 0, 0.23)"};
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.1s ease;
          filter: blur(80px);
          opacity: 2;
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
          animation: text-focus-in 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53)
            both;
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
      `}</style>

      <div className="flex flex-col justify-start min-h-screen px-3">
        <NavBar />
        <div id="mouse-shadow" className="sm:block hidden mouse-shadow"></div>

        <div className="flex justify-center max-w-xl mx-auto my-20">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="font-sans hover:border-gray-100 hover:bg-gray-100 sm:p-4 p-2 space-y-4 font-medium rounded-xl border border-transparent  dark:hover:border-zinc-950 dark:hover:bg-zinc-950 transition delay-50 duration-700 ease-in-out"
            >
              <div>
                <h2 className="mb-1 text-md sm:text-lg">
                  <Link
                    href={item.link}
                    className="text-black hover:text-black/60 dark:text-white dark:hover:text-white/80 transition delay-150 duration-700 ease-in-out "
                  >
                    {item.title}
                  </Link>
                </h2>
                <div className="lg:flex lg:space-x-2">
                  <p className="text-gray-700 dark:text-gray-400 sm:text-md text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              <Image
                className="w-full"
                src={item.img}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
