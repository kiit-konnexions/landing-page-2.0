"use client";
import { FaArrowRightLong, FaGripLines } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pb-20 mb-20">
      <div className="flex flex-row justify-evenly flex-shrink items-center invisible md:visible w-full border-b border-neutral-600 select-none h-0 md:h-auto">
        <div className="flex flex-row flex-shrink items-center justify-start w-1/3 gap-10">
          <div className="flex py-4">
            <h1 className="text-neutral-400 text-[14px]">
              {currentTime.toDateString()}
            </h1>
          </div>
        </div>
        <div className="flex flex-row flex-shrink items-center justify-evenly w-1/3">
          <div className="flex py-4">
            <h1 className="text-neutral-400 text-[14px]">
              {currentTime.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h1>
          </div>
        </div>
        <div className="flex flex-row flex-shrink items-center justify-end w-1/3 gap-10">
          <div className="flex py-4">
            <h1 className="text-neutral-400 text-[14px]">INDIA</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly flex-shrink items-center w-full select-none md:mt-0 mt-6">
        <div className="flex flex-row flex-shrink items-center justify-start invisible w-0 md:visible md:w-1/3 gap-10">
          <div className="flex py-4 cursor-pointer">
            <h1 className="text-neutral-300 text-[14px]">PROJECT</h1>
          </div>
          <div className="flex py-4 cursor-pointer">
            <h1 className="text-neutral-300 text-[14px]">ABOUT</h1>
          </div>
          <div className="flex py-4 cursor-pointer">
            <h1 className="text-neutral-300 text-[14px]">CONTACT</h1>
          </div>
        </div>
        <div className="flex flex-row flex-shrink items-center justify-start md:justify-evenly w-1/2 md:w-1/3">
          <div className="flex py-4 cursor-pointer">
            <h1 className="text-neutral-300 text-[14px]">KONNEXIONS</h1>
          </div>
        </div>
        <div className="flex flex-row flex-shrink items-center justify-end w-1/2 md:w-1/3 gap-10">
          <div className="flex py-4 cursor-pointer invisible md:visible">
            <h1 className="text-neutral-300 text-[0px] md:text-[14px] w-0 md:w-auto">
              ENG
            </h1>
          </div>
          <div className="flex py-4 cursor-pointer">
            <h1 className="text-neutral-300 text-[14px]">LOGIN</h1>
          </div>
          <div className="flex py-4 cursor-pointer visible md:hidden md:w-0 w-auto">
            <FaGripLines className="text-neutral-300 md:text-[0px] text-[22px]"></FaGripLines>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-10 md:mt-20">
        <div className="w-full md:w-[60%] lg:w-2/3 md:pr-8 lg:pr-0">
          <div className="flex flex-col items-start">
            <div>
              <h1 className="text-[42px] font-normal tracking-tight leading-snug lg:text-[56px] bg-clip-text select-none bg-neutral-200 text-transparent">
                Architec of Technological Advancements
              </h1>
            </div>
            <div>
              <p className="max-w-[85%] mt-10 font-normal text-balance text-neutral-400 leading-snug">
                Join us to unlock boundless opportunities, forge invaluable
                connections, and elevate KIIT's prestige through remarkable
                achievements in the ever-evolving digital realm.
              </p>
            </div>
            <div className="flex flex-wrap flex-row gap-6 mt-12">
              <div className="px-6 py-2 bg-neutral-200 rounded-full border-2 border-neutral-200 group hover:bg-transparent transition-all ease-in-out duration-200 cursor-pointer flex items-center">
                <span className="flex flex-row gap-3 items-center justify-center">
                  <h1 className="text-[14px] font-normal tracking-tight text-neutral-800 group-hover:text-neutral-200">
                    JOIN US
                  </h1>
                  <FaArrowRightLong className="text-[14px] text-neutral-800 group-hover:text-neutral-200"></FaArrowRightLong>
                </span>
              </div>
              <div className="px-6 py-2 bg-transparent rounded-full border-neutral-200/30 border-2 flex items-center cursor-pointer">
                <span className="flex flex-row gap-3 items-center justify-center">
                  <h1 className="text-[14px] font-normal tracking-tight text-neutral-200">
                    DEV RESOURCES
                  </h1>
                  <FaArrowRightLong className="text-[14px] text-neutral-200"></FaArrowRightLong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-[40%] lg:w-1/3 items-center justify-center flex invisible md:visible">
          <div className="flex justify-center items-center flex-shrink max-w-[400px] absolute right-0">
            <img
              src="/hero.png"
              alt="Herp Image"
              className="select-none justify-center"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
