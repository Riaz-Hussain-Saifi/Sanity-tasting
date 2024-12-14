import React from 'react'
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi";

const YourWork = () => {
  return (
    <div className="mt-16 bg-blue-950 py-10 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-10 max-w-6xl">
        {/* Hero Content */}
        <div className="content-left content-center w-full lg:w-1/2 text-white space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-nowrap items-center">
            Your work, everywhere you are
          </h1>

          <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-flex items-center">
              Try Taskey <FiArrowRight className="ml-2 text-white"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourWork