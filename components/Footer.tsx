import React from 'react';
import { CreditCard, Banknote, Wallet } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8">
      <div 
        onClick={scrollToTop} 
        className="bg-amazon-light hover:bg-gray-600 text-white text-center py-4 text-sm cursor-pointer transition-colors"
      >
        Torna su
      </div>
      <div className="bg-amazon-dark text-gray-300 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left">
          <div>
            <h3 className="font-bold text-white mb-2">Per conoscerci meglio</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Opportunità di lavoro</a></li>
              <li><a href="#" className="hover:underline">Informazioni su NexusShop</a></li>
              <li><a href="#" className="hover:underline">Sostenibilità</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Guadagna con noi</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Vendi su NexusShop</a></li>
              <li><a href="#" className="hover:underline">Diventa affiliato</a></li>
              <li><a href="#" className="hover:underline">Logistica di NexusShop</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Metodi di pagamento</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Metodi di pagamento</a></li>
              <li><a href="#" className="hover:underline">Convertitore Valuta</a></li>
              <li><a href="#" className="hover:underline">Buoni Regalo</a></li>
            </ul>
          </div>
          <div>
             <h3 className="font-bold text-white mb-2">Bisogno di aiuto?</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Visualizza o traccia un ordine</a></li>
              <li><a href="#" className="hover:underline">Costi e modalità di spedizione</a></li>
              <li><a href="#" className="hover:underline">Servizio Clienti</a></li>
            </ul>
          </div>
        </div>
        
        {/* Payment Icons Section */}
        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col items-center gap-4">
          <div className="flex gap-4 opacity-70">
            <div className="flex items-center gap-1 border border-gray-600 rounded px-2 py-1 bg-white/10">
               <CreditCard size={20} /> <span className="text-xs">Visa/Mastercard</span>
            </div>
             <div className="flex items-center gap-1 border border-gray-600 rounded px-2 py-1 bg-white/10">
               <Wallet size={20} /> <span className="text-xs">PayPal</span>
            </div>
             <div className="flex items-center gap-1 border border-gray-600 rounded px-2 py-1 bg-white/10">
               <Banknote size={20} /> <span className="text-xs">Bonifico</span>
            </div>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} NexusShop, Inc. o società affiliate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;