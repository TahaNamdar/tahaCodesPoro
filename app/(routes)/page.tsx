import { BackgroundBeamsWithCollision } from "@/components/BgBimCollision";
import { HeroParallax } from "@/components/HeroParalex";
import { Vortex } from "@/components/Vortex";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/Dock";
import ThemeToggle from "@/components/ThemeToggle";
import { products } from "./constants";


  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Cv",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Whats App",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];



const HomePage = () => {
  return (
    <div className="relative">
      <ThemeToggle />
      <div className="w-[calc(100%)] relative mx-auto rounded-md  h-[60vh] overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Welcome to Taha Code!
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Stay connected and explore my platform for coding resources and
            insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Send Me a Message
            </button>
            <button className="px-4 py-2  text-white ">Learn Algorithms</button>
          </div>

          <div className="hidden lg:block absolute z-50 bottom-4 left-1/2 transform -translate-x-1/2">
            <FloatingDock items={links} />
          </div>
        </Vortex>
      </div>

      <div>
        <HeroParallax products={products} />
      </div>
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-2xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight  mx-auto flex w-[80%] justify-center">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              Provided By Taha <span className="text-zinc-600 font-medium">2025</span>.
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span >
                Provided By Taha <span className="text-zinc-600 font-medium">2025</span>.
              </span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      <div className="block lg:hidden fixed z-50 bottom-8 right-6">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default HomePage;
