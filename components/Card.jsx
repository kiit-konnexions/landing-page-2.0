"use client";
import React from 'react';

const faculty = [ 
  { name: 'Faculty Name' },
  { name: 'Faculty Name' },
  { name: 'Faculty Name' },
];

const people = [
  { name: 'Name', position: 'Position', domain: 'Domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'Domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'Domain', roll: 'Roll' },
];

const members = [
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
  { name: 'Name', position: 'Position', domain: 'domain', roll: 'Roll' },
];

const Card = () => {
  return (
    <div className="flex flex-col py-10 px-4">
      <div className="flex w-full mb-10 flex-wrap">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl leading-snug font-bold text-black">PEOPLE</h1>
          <h3 className="text-lg sm:text-xl lg:text-2xl mt-2 leading-snug font-semibold text-black">THE GREAT MINDS</h3>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">BEHIND OUR WORK.</h3>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col">
          <h2 className="lg:text-xl sm:text-1xl font-semibold mt-10 text-black">Faculty-In Charge</h2>
          <div className="flex flex-wrap justify-start mt-4 gap-10">
            {faculty.map((faculty, index) => (
              <div key={index} className="flex flex-col items-center border-2 border-neutral-100 bg-gray-200 rounded-lg p-4 w-65">
                <div className="w-52 h-48 bg-gray-300 rounded-md"></div>
                <p className="mt-2 font-medium text-black">{faculty.name}</p>
                <div className="flex justify-around mt-4 gap-2 pb-2">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                  <a href={`mailto:${faculty.email}`}>
                    <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
                  </a>
                  <a href={faculty.websiteLink}>
                    <img src="/website-icon.png" alt="Website" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="lg:text-xl  sm:text-1xl font-semibold mt-10 text-black">Co-ordinators</h2>
          <div className="flex flex-wrap justify-start mt-4 gap-10">
            {people.map((people, index) => (
              <div key={index} className="flex flex-col items-center border-2 border-neutral-100 bg-gray-200 rounded-lg p-4 w-65">
                <div className="w-52 h-48 bg-gray-300 rounded-md"></div>
                <div className="flex justify-between w-full pt-3">
                  <p className="text-black text-left">{people.domain}</p>
                  <p className="text-black text-right">{people.position}</p>
                </div>
                <p className="mt-4 font-medium text-2xl text-black text-center w-full">{people.name}</p>
                <p className="mt-4 font-small text-1xl text-black text-center w-full">{people.roll}</p>
                <div className="flex justify-around mt-6 gap-2 pb-4">
                  <img src="/github-icon.png" alt="Github" className="w-6 h-6" />
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                  <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
                  <img src="/website-icon.png" alt="Website" className="w-6 h-6" />
                  
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 w-full">
            <h2 className="lg:text-xl sm:text-1xl font-semibold text-black">Members</h2>
            <div className="flex flex-wrap justify-start mt-4 gap-10">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center border-2 border-neutral-100 bg-gray-200 rounded-lg p-4 w-65">
                  <div className="w-52 h-48 bg-gray-300 rounded-md"></div>
                  <div className="flex justify-between w-full pt-3">
                    <p className="text-black text-left">{member.domain}</p>
                    <p className="text-black text-right">{member.position}</p>
                  </div>
                  <p className="mt-4 font-medium text-2xl text-black text-center w-full">{member.name}</p>
                  <p className="mt-4 font-small text-1xl text-black text-center w-full">{member.roll}</p>
                  <div className="flex justify-around mt-6 gap-2 pb-4">
                    <img src="/github-icon.png" alt="Github" className="w-6 h-6" />
                    <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                  <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
                    <img src="/website-icon.png" alt="Website" className="w-6 h-6" />
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
