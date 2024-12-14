import React from 'react'
import Link from 'next/link'

const Resources = () => {
  return (
    <div className="text-white space-y-4">
      <h3 className="text-xl font-semibold">Resources</h3>
      <nav className="space-y-2">
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Blog</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Guides & tutorials</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Help center</Link>
      </nav>
    </div>
  )
}

export default Resources
