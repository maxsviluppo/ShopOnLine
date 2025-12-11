import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow bg-gray-100">
        <HeroSlider />
        <ProductGrid />
      </main>
      
      <Footer />

      {/* Global Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default App;