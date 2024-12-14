import React from "react";
import Link from "next/link"

const Products = () => {
  return (
    <div className="text-white space-y-4">
      <h3 className="text-xl font-semibold">Products</h3>
      <nav className="space-y-2">
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Overview</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Pricing</Link>
        <Link href="#" className="block text-amber-200 hover:text-amber-100 transition-colors">Customer stories</Link>
      </nav>
    </div>
  );
};

export default Products;