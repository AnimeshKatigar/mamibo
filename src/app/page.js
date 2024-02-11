"use client";
import Image from "next/image";
import LandingPage from "../../public/assets/images/LandingPage.jpg";
import Reveal from "@/components/Reveal";
import BestSellers from "@/components/Sections/BestSellers";
import NewDrops from "@/components/Sections/NewDrops";
import PrimaryBtn from "@/components/PrimaryBtn";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Reveal
        customClassName="relative"
        customInitial={{ opacity: 0 }}
        customFinal={{ opacity: 1 }}
      >
        <Image
          src={LandingPage}
          alt="LandingPage"
          className="w-full object-cover pt-10"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-GothamMedium  text-black">
          Where Fashion Meets Passion!
          <a className="border-2 block mx-auto border-black/70 text-black/70 hover:border-black transition-all hover:text-black py-2 px-4 mt-2 w-fit cursor-pointer" href="/products">
            Explore
          </a>
        </div>
      </Reveal>
      <div className="px-[5%] md:px-[10%] w-full py-8">
        <BestSellers />
        <NewDrops />
      </div>
    </main>
  );
}
