import React from "react";
import Image from "next/image";

const OurSponsors = () => {
  return (
    <div className="mt-16 bg-white py-10 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-10 max-w-6xl">
        {/* Hero Content */}
        <div className="content-left content-center w-full lg:w-1/2 text-black space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center lg:text-left">
            Our Sponsors
          </h1>
        </div>
        {/* Logo Images */}
        <div className="flex flex-row justify-center lg:justify-between space-x-8 space-y-4">
          <div className="w-1/2 lg:w-auto">
            <Image
              src="/Apple.png"
              alt="Apple Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <div className="w-1/2 lg:w-auto">
            <Image
              src="/Microsoft.png"
              alt="Microsoft Logo"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
          <div className="w-1/2 lg:w-auto">
            <Image
              src="/Slack.png"
              alt="Slack Logo"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
          <div className="w-1/2 lg:w-auto">
            <Image
              src="/Google.png"
              alt="Google Logo"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;