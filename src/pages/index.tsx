import { useEffect } from "react";
import Footer from "@/components/Footer";
import About from "@/components/About";
import NavBar from "@/components/Header";

export default function Home() {

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
    <main className=" dark:bg-black bg-white flex min-h-screen 	 flex-col justify-between md:px-24 px-5 ">
      <style jsx>{`
         @media (min-height: 600px) {
          html,
          body {
            overflow-y: hidden;
            height: 100%;
          }

          body {
            position: relative;
          }
          #mouse-shadow {
            display: none;
          }
        }
        .mouse-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 80vw;
          height: 100vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          background-color: rgba(200, 205, 205, 0.1);
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
