import React from 'react'
import Whitepace from './Whitepace'
import Company from './Company'
import Products from './Products'
import Resources from './Resources'

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-16 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <Whitepace />
        <Products />
        <Resources />
        <Company />
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-white/20">
        <p className="text-white text-center">
          ©2024 Whitepace LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer