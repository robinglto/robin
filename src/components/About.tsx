import { design } from "@/pages/api/data";
import { SewingPinFilledIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { KeyboardIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function About() {
  return (
    <section id="/" className="mb-28 mt-28 rounded-xl">
      <style>{design}</style>
      <div className="subpixel-antialiased flex justify-center space-x-10 md:mx-10 mb-10 mt-6">
        <div className="2xl:w-8/12 xl:w-3/6 lg:w-3/4 max-w-2xl sm:mx-10 p-4">
          <div className="animate-reveal-up">
            <h2 className="animate-typing subpixel-antialiased font-semibold text-gray-950 dark:text-gray-100/90 lg:text-6xl text-4xl">
              Hi, {`I'm Robin`}
            </h2>

            <p className="subpixel-antialiased text-focus-in md:text-xl text-lg text-gray-500 dark:text-gray-400 mb-4">
              Software Developer
            </p>
            <p className="text-gray-800 dark:text-gray-300 lg:text-lg md:text-md text-sm text-focus-in">
              Software developer, dedicated to creating accessible and
              user-centered digital products. Passionate about crafting
              high-quality software solutions and seeking new opportunities in
              the field.
            </p>

            <div className="flex space-x-2 text-gray-500 my-5 hover:text-gray-900 dark:hover:text-gray-300 dark:text-gray-400 transition delay-300 duration-500 ease-in-out hover:cursor-pointer sm:text-md text-sm">
              <SewingPinFilledIcon className="my-0.5" />
              <p>Open to remote work, always online.</p>
            </div>
            <div className="flex space-x-5 my-5 text-focus-in text-gray-500 dark:text-gray-400">
              <Link href={"https://github.com/robinglto/"}>
                <GitHubLogoIcon className="w-5 h-5 hover:text-black dark:hover:text-white transition delay-300 duration-500 ease-in-out" />
              </Link>
              <Link href={"https://twitter.com/robinme_"}>
                <TwitterLogoIcon className="w-5 h-5 hover:text-black dark:hover:text-white transition delay-300 duration-500 ease-in-out " />
              </Link>
              <Link
                href={
                  "https://checker-napkin-995.notion.site/JS-basico-8bd5e6722e8b443f91cd2988ad31cb0e?pvs=4"
                }
              >
                <NotionLogoIcon className="w-5 h-5 hover:text-black dark:hover:text-white transition delay-300 duration-500 ease-in-out " />
              </Link>
              <Link href={"https://medium.com/@robinme_"}>
                <KeyboardIcon className="w-5 h-5 hover:text-black dark:hover:text-white transition delay-300 duration-500 ease-in-out " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
