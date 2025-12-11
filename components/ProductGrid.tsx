import React from 'react';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 relative z-30 -mt-10 sm:-mt-20 md:-mt-32 lg:-mt-52 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Render a "Call to Action" or Category card first (Amazon style) */}
        <div className="bg-white p-6 flex flex-col justify-between h-full z-30 shadow-sm md:shadow-md">
            <h2 className="text-xl font-bold mb-4 text-black">Offerte Lampo</h2>
            <div className="flex-grow flex items-center justify-center bg-gray-100 mb-4">
                 <img src="https://picsum.photos/300/300?random=99" className="h-full object-cover" alt="Deal" />
            </div>
            <a href="#" className="text-amazon-link text-sm hover:underline hover:text-red-700">Scopri tutte le offerte</a>
        </div>

        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;