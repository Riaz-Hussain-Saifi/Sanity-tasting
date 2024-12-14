import React from 'react'
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="mt-16 bg-blue-950 py-20 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Get More Done with Whitepace
          </h1>

          <p className="text-base md:text-lg leading-relaxed">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>

          <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Try Whitepace free <FiArrowRight className="text-white"/>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-video bg-blue-300">
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection