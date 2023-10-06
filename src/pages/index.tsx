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
        @media (min-width: 601px) {
          body {
            overflow-y: hidden;
          }
        }

        @media (max-width: 600px) {
          body {
            overflow-y: scroll;
          }
        }

        .mouse-shadow {
          position: fixed;
          top: 30px;
          left: 30px;
          width: 80vw;
          height: 100vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          background-color: ${theme !== "light"
            ? "rgba(200, 205, 205, 0.1);"
            : "rgba(0, 0, 0, 0.1)"};
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.1s ease;
          filter: blur(80px);
          opacity: 2;
        }
      `}</style>
      <NavBar />
      <div id="mouse-shadow" className="sm:block hidden mouse-shadow"></div>
      <About />
      <Footer />
    </main>
  );
}
