import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col sticky top-0 z-40 shadow-sm">
      {/* Top Navbar Layer */}
      <div className="bg-amazon-dark text-white flex items-center p-2 gap-4 h-[60px]">
        
        {/* Logo Placeholder */}
        <div className="flex items-center hover:border hover:border-white p-1 rounded cursor-pointer">
          <span className="text-2xl font-bold tracking-tighter">Nexus<span className="text-amazon-search">Shop</span></span>
        </div>

        {/* Deliver To (Hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-center text-xs hover:border hover:border-white p-1 rounded cursor-pointer leading-tight">
          <div className="text-gray-300 ml-4">Invia a</div>
          <div className="flex items-center font-bold">
            <MapPin size={14} className="mr-1" />
            Italia
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex h-10 rounded overflow-hidden mx-2 focus-within:ring-2 focus-within:ring-amazon-search">
          <select className="bg-gray-100 text-gray-700 text-xs p-1 border-r border-gray-300 outline-none w-auto hidden sm:block cursor-pointer">
            <option>Tutte</option>
            <option>Elettronica</option>
            <option>Casa</option>
          </select>
          <input 
            type="text" 
            className="flex-grow p-2 outline-none text-black" 
            placeholder="Cerca su NexusShop"
          />
          <button className="bg-amazon-search hover:bg-amazon-ctaHover text-amazon-dark px-4 flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 md:gap-4">
          
          {/* Sign In / Account */}
          <div className="hidden md:flex flex-col justify-center text-xs hover:border hover:border-white p-1 rounded cursor-pointer">
            <span className="text-gray-200">Ciao, Accedi</span>
            <span className="font-bold">Account e liste</span>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:flex flex-col justify-center text-xs hover:border hover:border-white p-1 rounded cursor-pointer">
            <span className="text-gray-200">Resi</span>
            <span className="font-bold">e ordini</span>
          </div>

          {/* Cart */}
          <div 
            className="flex items-end hover:border hover:border-white p-2 rounded cursor-pointer relative"
            onClick={onOpenCart}
          >
            <ShoppingCart size={28} />
            <span className="font-bold text-amazon-search absolute top-0 right-1 md:right-2">2</span>
            <span className="font-bold hidden md:inline mb-1">Carrello</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar Layer (Navigation) */}
      <div className="bg-amazon-light text-white text-sm flex items-center p-1 pl-4 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div 
          className="flex items-center gap-1 font-bold hover:border hover:border-white p-1 rounded cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={20} />
          <span>Tutte</span>
        </div>
        
        {NAV_ITEMS.map((item, index) => (
          <a key={index} href={item.href} className="hover:border hover:border-white p-1 rounded px-2">
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isMenuOpen && (
        <div className="absolute top-[95px] left-0 w-64 h-full bg-white shadow-2xl z-50 p-4 animate-slide-in">
            <div className="flex items-center bg-amazon-light text-white p-3 -m-4 mb-4 font-bold text-lg">
                <User size={24} className="mr-2" /> Ciao, Accedi
            </div>
            <h3 className="font-bold text-lg mb-2 text-black">Di tendenza</h3>
            <ul className="space-y-3 text-gray-800">
                <li className="cursor-pointer hover:bg-gray-100 p-2">Best Seller</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Novità</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">I Movers e Shakers</li>
            </ul>
            <div className="border-t my-4"></div>
            <h3 className="font-bold text-lg mb-2 text-black">Scegli per categoria</h3>
            <ul className="space-y-3 text-gray-800">
                <li className="cursor-pointer hover:bg-gray-100 p-2">Elettronica</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Informatica</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Casa e cucina</li>
            </ul>
        </div>
      )}
      {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 mt-[95px]" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;