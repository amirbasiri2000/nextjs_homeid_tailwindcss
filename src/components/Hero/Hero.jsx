import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center mt-16  relative ">
      {/* left banner */}
      <div
        className="absolute hidden lg:block z-50 -top-1 lg:-left-24 md:-left-32 w-[29rem] 
                      h-96 cursor-pointer hover:scale-105 transition-all"
      >
        <div className="w-full h-80 relative -top-24 -left-0">
          <Image
            src="/images/banner-landing-01-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
        <div className="w-64 h-40 relative -top-32 -right-40">
          <Image
            src="/images/banner-landing-02-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
        <div className="w-44 h-40 relative -top-80 -right-64">
          <Image
            src="/images/banner-landing-03-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
      </div>

      {/* main */}
      <div className="w-11/12 md:3/4 lg:w-1/2 flex flex-col justify-start items-center">
        <div className="">
          <h1 className="text-[2em] lg:text-[3.1rem] text-[#333333f3] text-center py-8 px-4">
            Powerfull Solution <br /> for Real Estate Company
          </h1>
        </div>
        <div className="px-4">
          <h5 className="text-xl lg:text-2xl text-[#333] text-center">
            HomeID - Your Ultimate Real Estate WordPress Theme{" "}
            <span className="text-lg text-gray-600">
              that lets you run a realtor company, a real estate agency, a
              broker, agents and related businesses.
            </span>
          </h5>
        </div>
        <div className="flex justify-around items-center w-full mt-10">
          <button className="btn_green">HomeID demos</button>
          <button className="btn_white">Watch video</button>
        </div>
      </div>

      {/* right banner */}
      <div className="absolute hidden lg:block top-16 lg:-right-24 md:-right-32 w-[25rem] h-96 cursor-pointer hover:scale-105 transition-all">
        <div className="w-64 h-40 absolute -top-28 -left-10">
          <Image
            src="/images/banner-landing-04-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
        <div className="w-full h-60 absolute top-12 right-0 ">
          <Image
            src="/images/banner-landing-06-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
        <div className="w-28 h-40 absolute bottom-5 -left-4">
          <Image
            src="/images/banner-landing-07-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
        <div className="w-28 h-40 absolute -bottom-16 -left-24">
          <Image
            src="/images/banner-landing-08-sm.png"
            alt="banner"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
