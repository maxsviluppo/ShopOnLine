import React from 'react';
import { Product } from '../types';
import { Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 flex flex-col justify-between h-full border border-gray-200 rounded hover:shadow-lg transition-shadow cursor-pointer z-20 relative">
      
      {/* Image Area */}
      <div className="h-48 flex items-center justify-center mb-4 bg-gray-50 rounded">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain mix-blend-multiply" 
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-medium leading-snug line-clamp-3 hover:text-amazon-link text-black">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <div className="flex text-amazon-cta">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "#f7ca00" : "none"} 
                strokeWidth={i < Math.floor(product.rating) ? 0 : 2}
                className={i < Math.floor(product.rating) ? "text-amazon-cta" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-amazon-link hover:underline">{product.reviews}</span>
        </div>

        {/* Price */}
        <div className="mt-1">
            <span className="text-xs align-top relative top-[2px]">€</span>
            <span className="text-2xl font-bold">{Math.floor(product.price)}</span>
            <span className="text-xs align-top relative top-[2px]">{((product.price % 1) * 100).toFixed(0)}</span>
        </div>

        {/* Prime / Delivery info */}
        {product.isPrime && (
            <div className="flex items-center text-xs text-gray-500 mt-1">
                <span className="text-[#00a8e1] font-bold italic mr-1">prime</span>
                <span>Consegna senza costi aggiuntivi</span>
            </div>
        )}
        {!product.isPrime && (
             <div className="text-xs text-gray-500 mt-1">
                Consegna: <span className="font-bold">venerdì, 20 ott</span>
             </div>
        )}
        
        <button className="mt-3 w-full bg-amazon-cta hover:bg-amazon-ctaHover text-black text-sm py-1.5 rounded-full shadow-sm border border-yellow-500 active:border-yellow-600 focus:ring-2 focus:ring-yellow-400">
            Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default ProductCard;