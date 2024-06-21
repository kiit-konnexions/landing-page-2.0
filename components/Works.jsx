"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { works } from "../constants/works";

const Works = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [openItemIndex, setOpenItemIndex] = useState(-1);

  return (
    <div className="pb-20">
      <div className="flex flex-col items-center pt-12 justify-center w-full">
        <div>
          <h1 className="font-semibold tracking-tight text-[32px] sm:text-[40px] bg-clip-text select-none bg-neutral-800 text-transparent text-center">
            OUR WORKS
          </h1>
        </div>
        <div>
          <p className="mt-3 font-normal text-neutral-500 leading-snug text-center max-w-lg">
            Join us to unlock boundless opportunities, forge invaluable
            connections, and elevate KIIT's prestige through remarkable
            achievements in the ever-evolving digital realm.
          </p>
        </div>
      </div>
      <Accordion className="mt-12" showDivider={false}>
        {works.map((item, index) => (
          <AccordionItem
            onPress={() =>
              openItemIndex != index
                ? setOpenItemIndex(index)
                : setOpenItemIndex(-1)
            }
            key={index + 1}
            aria-label={item.title}
            title={
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 flex-wrap">
                <h1 className="font-semibold text-neutral-800 text-xl sm:text-[26px] text-center sm:max-w-[50%]">
                  {item.title}
                </h1>
                <p
                  className={`text-neutral-400 sm:max-w-[40%] text-small sm:text-medium leading-snug sm:text-left text-center text-balance ${
                    openItemIndex === index ? "visible" : "hidden"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            }
            startContent={
              <h1 className="font-bold text-neutral-400 text-lg sm:text-xl">{`0${
                index + 1
              }`}</h1>
            }
            indicator={({ isOpen }) =>
              isOpen ? (
                <img className="size-7" src="/accordion_open.svg"></img>
              ) : (
                <img className="size-7" src="/accordion_close.svg"></img>
              )
            }
            className={`py-3 ${
              openItemIndex === index ? "border-b-0" : "border-b-2"
            } border-neutral-300`}
          >
            <div className="flex flex-row overflow-auto gap-6 justify-start snap-x">
              {item.projects.map((project, index) => (
                <div
                  className="flex flex-shrink flex-col snap-center"
                  key={index}
                >
                  <div
                    className="sm:h-[300px] bg-cover bg-top sm:w-[500px] w-[300px] h-[180px]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <h1 className="font-semibold text-neutral-800 text-lg mt-4">
                    {project.title}
                  </h1>
                  <p className="text-neutral-400 text-small leading-snug text-balanced mt-1.5 sm:max-w-[65%] max-w-[100%] mb-6">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Works;
