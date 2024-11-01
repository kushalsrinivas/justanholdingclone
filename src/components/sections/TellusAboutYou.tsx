import React from "react";
import { Button } from "../ui/button";

function TellusAboutYou() {
  return (
    <div className="grid bg-black grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 p-8 lg:p-12">
      {/* Left Side: Text Content */}
      <div className="bg-black p-12 flex items-center justify-center">
        <div>
          <p className="text-xs uppercase text-gray-400 mb-2">
            Our Forma Mentis
          </p>
          <h2 className="text-4xl font-bold leading-snug">
            <span className="text-white">
              Join our team to take part of this business adventure.
            </span>{" "}
          </h2>
        </div>
      </div>

      {/* Right Side: Placeholder for Building Image */}
      <div className="bg-black p-12 flex items-center justify-center">
        <div>
          <h2 className="text-lg font-medium leading-snug">
            <span className="text-white">
              We’re a team of creatives and business addicts who are excited
              about unique ideas to create and manage incredible and impactful
              ventures.
            </span>{" "}
          </h2>
          <Button className="mt-4 bg-green-500 text-black">
            Tell Us About You
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TellusAboutYou;
