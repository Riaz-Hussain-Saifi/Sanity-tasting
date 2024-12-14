import React from 'react'
import Link from "next/link"

const Company = () => {
  return (
    <div className="text-white space-y-4">
      <h3 className="text-xl font-semibold">Company</h3>
      <nav className="space-y-2">
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">About us</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Careers</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Media kit</Link>
      </nav>
    </div>
  )
}

export default Company