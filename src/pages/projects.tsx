import Link from "next/link";
import NavBar from "@/components/Header";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Portafolio } from "./api/type";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
  const { theme } = useTheme();

  const data: Portafolio[] = [
    {
      id: 1,
      title: "Weather App",
      link: "https://weatherglto.vercel.app/",
      img: `/ui/weather/${theme === "dark" ? "dark" : "light"}.png`,
      description:
        "My weather application offers user-friendly information on current weather and future forecasts, featuring a modern interface and functionalities like dark mode for an optimal user experience.",
      github: "https://github.com/robinglto/weatherapp",
      hashtag: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Learn",
      link: "https://learnglto.vercel.app/",
      img: `/ui/learn/${theme === "dark" ? "dark" : "light"}.png`,
      description:
        "Learn is a website housing my personal notes on fundamental concepts of electricity and robotics. It is currently under development.",
      github: "https://github.com/robinglto/learn",
      hashtag: ["Electricity", "Robotics"],
    },
  ];

  return (
    <main className="dark:bg-black bg-white min-h-screen flex flex-col justify-between md:px-24 ">
      <div className="flex flex-col justify-start min-h-screen px-3">
        <NavBar />
        <div className="flex flex-col space-y-20 justify-center max-w-xl mx-auto my-20">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="font-sans space-y-4 font-medium border  dark:border-zinc-900/60 dark:bg-zinc-900/60 transition delay-50 duration-700 ease-in-out border-gray-100/50 bg-gray-100/50  sm:p-4 rounded-xl p-2"
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="mb-1 text-md sm:text-lg">
                      <Link
                        href={item.link}
                        className="text-black hover:text-black/60 dark:text-white dark:hover:text-white/80 transition delay-150 duration-700 ease-in-out flex space-x-2 items-center"
                      >
                        <p>{item.title}</p>
                        <ExternalLinkIcon />
                      </Link>
                    </h2>
                  </div>
                  <div>
                    <Link href={item.github}>
                      <GitHubLogoIcon />
                    </Link>
                  </div>
                </div>
                <div className="lg:flex lg:space-x-2">
                  <p className="text-gray-700 dark:text-gray-400 sm:text-md text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              <Image
                className="w-full"
                src={item.img}
                alt="Weather App"
                width={500}
                height={500}
              />
              <div className="flex space-x-4">
                {item.hashtag.map((hashtag, idx) => (
                  <p
                    key={idx}
                    className="bg-green-200 dark:bg-gray-200 dark:text-black p-1 rounded-md text-sm"
                  >
                    {hashtag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
