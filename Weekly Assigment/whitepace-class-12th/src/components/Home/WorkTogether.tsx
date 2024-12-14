import React from 'react'
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image"

const WorkTogether = () => {
  return (
    <div className="mt-16 bg-white py-8 px-4 md:px-16 lg:px-32">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">

      {/* Hero Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full aspect-video">
            <Image 
              src="/Work-together.png" 
              alt="Whitepace Dashboard" 
              fill
              className="object-contain"
              priority
            />
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full lg:w-1/2 text-black space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Work together
        </h1>

        <p className="text-base text-black md:text-lg leading-relaxed">
        With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

        </p>

        <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-300">
          Try it now <FiArrowRight className="text-white"/>
        </Button>
      </div>
    </div>
</div>    
  )
}

export default WorkTogether
