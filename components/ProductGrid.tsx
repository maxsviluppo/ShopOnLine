import React from 'react';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 relative z-30 -mt-10 sm:-mt-20 md:-mt-32 lg:-mt-60 mb-10">
      
      {/* SECTION 1: Info Cards Row (Floating over Hero) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Card 1: Offerte Lampo */}
          <div className="bg-white p-4 flex flex-col h-[400px] z-30 shadow-sm rounded-sm overflow-hidden">
            <h2 className="text-xl font-bold mb-3 text-black truncate">Offerte Lampo</h2>
            <div className="flex-1 mb-3 overflow-hidden rounded relative">
                 <img src="https://picsum.photos/400/500?random=99" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-300" alt="Deal" />
            </div>
            <a href="#" className="text-amazon-link text-sm font-medium hover:underline hover:text-red-700 block mt-auto">Scopri tutte le offerte</a>
          </div>

          {/* Card 2: Categorie Elettronica (Quad Grid) */}
          <div className="bg-white p-4 flex flex-col h-[400px] z-30 shadow-sm rounded-sm overflow-hidden">
            <h2 className="text-xl font-bold mb-3 text-black truncate">Elettronica e PC</h2>
            <div className="flex-1 grid grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col">
                     <div className="bg-gray-50 rounded overflow-hidden aspect-square mb-1 relative border border-gray-100">
                        <img src="https://picsum.photos/200/200?random=101" className="absolute inset-0 h-full w-full object-contain p-2" alt="PC" />
                     </div>
                     <span className="text-xs text-gray-800 leading-tight">PC e Laptop</span>
                </div>
                <div className="flex flex-col">
                     <div className="bg-gray-50 rounded overflow-hidden aspect-square mb-1 relative border border-gray-100">
                        <img src="https://picsum.photos/200/200?random=102" className="absolute inset-0 h-full w-full object-contain p-2" alt="Mouse" />
                     </div>
                     <span className="text-xs text-gray-800 leading-tight">Accessori PC</span>
                </div>
                <div className="flex flex-col">
                     <div className="bg-gray-50 rounded overflow-hidden aspect-square mb-1 relative border border-gray-100">
                        <img src="https://picsum.photos/200/200?random=103" className="absolute inset-0 h-full w-full object-contain p-2" alt="Cuffie" />
                     </div>
                     <span className="text-xs text-gray-800 leading-tight">Audio & Hi-Fi</span>
                </div>
                <div className="flex flex-col">
                     <div className="bg-gray-50 rounded overflow-hidden aspect-square mb-1 relative border border-gray-100">
                        <img src="https://picsum.photos/200/200?random=104" className="absolute inset-0 h-full w-full object-contain p-2" alt="Tablet" />
                     </div>
                     <span className="text-xs text-gray-800 leading-tight">Tablet</span>
                </div>
            </div>
            <a href="#" className="text-amazon-link text-sm font-medium hover:underline hover:text-red-700 block mt-auto">Vedi altro</a>
          </div>

          {/* Card 3: Casa */}
          <div className="bg-white p-4 flex flex-col h-[400px] z-30 shadow-sm rounded-sm overflow-hidden">
            <h2 className="text-xl font-bold mb-3 text-black truncate">Rinnova la tua casa</h2>
             <div className="flex-1 mb-3 overflow-hidden rounded relative">
                 <img src="https://picsum.photos/400/500?random=88" className="absolute inset-0 h-full w-full object-cover" alt="Home" />
            </div>
            <a href="#" className="text-amazon-link text-sm font-medium hover:underline hover:text-red-700 block mt-auto">Scopri le novità</a>
          </div>

          {/* Card 4: Accedi / Promo */}
          <div className="bg-white p-4 flex flex-col h-[400px] z-30 shadow-sm rounded-sm overflow-hidden justify-between">
             <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-black leading-tight">Accedi per la migliore esperienza</h2>
                <div className="bg-white rounded text-center my-2">
                     <button className="w-full bg-amazon-cta hover:bg-amazon-ctaHover border border-yellow-500 rounded text-sm py-2 shadow-sm font-medium">Accedi in modo sicuro</button>
                </div>
             </div>
             <div className="flex-1 relative mt-2 rounded overflow-hidden">
                 <img src="https://picsum.photos/400/300?random=77" className="absolute inset-0 h-full w-full object-cover" alt="Promo" />
             </div>
          </div>
      </div>

      {/* SEPARATOR */}
      <div className="py-2"></div>

      {/* SECTION 2: Main Product Grid */}
      <div className="bg-white p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Scelti per te</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

    </div>
  );
};

export default ProductGrid;