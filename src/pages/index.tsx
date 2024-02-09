import About from "@/components/About";
import Footer from "@/components/Footer";
import NavBar from "@/components/Header";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();

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

  return (
    <main
      className={
        " font-sans dark:bg-black bg-white flex min-h-screen flex-col justify-between md:px-24 px-5"
      }
    >
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

      <NavBar />
      <div id="mouse-shadow" className="sm:block hidden mouse-shadow"></div>
      <About />
      <Footer />
    </main>
  );
}
