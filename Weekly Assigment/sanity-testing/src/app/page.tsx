import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";

async function Home() {
  const data = await client.fetch(`*[_type == "hero"][0]{
    fristH1,
    span,
    lastH1,
    description,
    "image": {
      "image": image.asset->url,
      "alt": image.alt
    }
  }`);

  const { image, fristH1, span, lastH1, description } = data;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 py-12 lg:flex-row lg:gap-16 lg:py-24">
          {/* Text content section */}
          <div className="flex w-full flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              {fristH1}{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                {span}
              </span>{" "}
              {lastH1}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
              {description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-indigo-600 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all hover:from-indigo-700 hover:to-blue-600"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-2 px-8 py-6 text-lg font-semibold text-gray-700 transition-all hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image section */}
          <div className="relative w-full flex-1 px-4 lg:px-0">
            <div className="relative aspect-square max-w-lg lg:aspect-[4/3]">
              <Image
                src={image.image}
                alt={image.alt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;