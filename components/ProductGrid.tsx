import React from 'react';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 relative z-30 -mt-10 sm:-mt-20 md:-mt-32 lg:-mt-60 mb-10">
      
      {/* SECTION 1: Info Cards Row (Floating over Hero) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Card 1: Offerte Lampo */}
          <div className="bg-white p-6 flex flex-col h-[380px] z-30 shadow-sm rounded-sm">
            <h2 className="text-xl font-bold mb-4 text-black">Offerte Lampo</h2>
            <div className="flex-grow flex items-center justify-center bg-gray-100 mb-4 overflow-hidden rounded">
                 <img src="https://picsum.photos/400/400?random=99" className="h-full w-full object-cover hover:scale-105 transition-transform" alt="Deal" />
            </div>
            <a href="#" className="text-amazon-link text-sm hover:underline hover:text-red-700">Scopri tutte le offerte</a>
          </div>

          {/* Card 2: Categorie Elettronica */}
          <div className="bg-white p-6 flex flex-col h-[380px] z-30 shadow-sm rounded-sm">
            <h2 className="text-xl font-bold mb-4 text-black">Elettronica e PC</h2>
            <div className="flex-grow grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 rounded overflow-hidden">
                     <img src="https://picsum.photos/200/200?random=101" className="h-full w-full object-cover" alt="PC" />
                     <span className="text-xs p-1 block">PC</span>
                </div>
                <div className="bg-gray-100 rounded overflow-hidden">
                     <img src="https://picsum.photos/200/200?random=102" className="h-full w-full object-cover" alt="Mouse" />
                     <span className="text-xs p-1 block">Accessori</span>
                </div>
                <div className="bg-gray-100 rounded overflow-hidden">
                     <img src="https://picsum.photos/200/200?random=103" className="h-full w-full object-cover" alt="Cuffie" />
                     <span className="text-xs p-1 block">Audio</span>
                </div>
                <div className="bg-gray-100 rounded overflow-hidden">
                     <img src="https://picsum.photos/200/200?random=104" className="h-full w-full object-cover" alt="Tablet" />
                     <span className="text-xs p-1 block">Tablet</span>
                </div>
            </div>
            <a href="#" className="text-amazon-link text-sm hover:underline hover:text-red-700">Vedi altro</a>
          </div>

          {/* Card 3: Casa */}
          <div className="bg-white p-6 flex flex-col h-[380px] z-30 shadow-sm rounded-sm">
            <h2 className="text-xl font-bold mb-4 text-black">Rinnova la tua casa</h2>
             <div className="flex-grow flex items-center justify-center bg-gray-100 mb-4 overflow-hidden rounded">
                 <img src="https://picsum.photos/400/400?random=88" className="h-full w-full object-cover" alt="Home" />
            </div>
            <a href="#" className="text-amazon-link text-sm hover:underline hover:text-red-700">Scopri le novità</a>
          </div>

          {/* Card 4: Accedi / Promo */}
          <div className="bg-white p-6 flex flex-col h-[380px] z-30 shadow-sm rounded-sm justify-between">
             <div>
                <h2 className="text-xl font-bold mb-4 text-black">Accedi per la migliore esperienza</h2>
                <div className="bg-white p-4 rounded border border-gray-200 text-center mb-4">
                     <p className="text-sm mb-4">Accedi in modo sicuro per vedere i tuoi ordini e raccomandazioni personalizzate.</p>
                     <button className="w-full bg-amazon-cta hover:bg-amazon-ctaHover border border-yellow-500 rounded text-sm py-2 shadow-sm font-medium">Accedi in modo sicuro</button>
                </div>
             </div>
             <div className="mt-4">
                 <img src="https://picsum.photos/400/150?random=77" className="w-full h-32 object-cover rounded" alt="Promo" />
             </div>
          </div>
      </div>

      {/* SEPARATOR */}
      <div className="py-2"></div>

      {/* SECTION 2: Main Product Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4 ml-1">Scelti per te</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

    </div>
  );
};

export default ProductGrid;