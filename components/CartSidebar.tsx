import React, { useState } from 'react';
import { X, Lock, CreditCard, Smartphone, CheckCircle, Loader2 } from 'lucide-react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'cart' | 'payment' | 'success'>('cart');
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'paypal' | 'apple'>('card');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => setStep('payment');
  
  const handlePayment = () => {
      setIsLoading(true);
      
      // SIMULAZIONE BACKEND: 
      // Qui avverrebbe la chiamata API sicura (es. fetch('/api/process-payment')) 
      // che comunica con Stripe, PayPal o il circuito bancario.
      setTimeout(() => {
          setIsLoading(false);
          setStep('success');
      }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
        
        {/* Header */}
        <div className="bg-amazon-light text-white p-4 flex justify-between items-center shadow-md">
          <h2 className="text-lg font-bold flex items-center gap-2">
            {step === 'cart' && 'Il tuo Carrello'}
            {step === 'payment' && <><Lock size={16} /> Pagamento Sicuro</>}
            {step === 'success' && 'Ordine Confermato'}
          </h2>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded"><X size={24} /></button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
          
          {step === 'cart' && (
            <div className="space-y-4">
               {/* Mock Items */}
               {[1, 2].map((i) => (
                   <div key={i} className="flex gap-4 bg-white p-3 rounded border border-gray-200">
                       <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                           <img src={`https://picsum.photos/100/100?random=${i}`} className="max-h-full max-w-full" alt="Product" />
                       </div>
                       <div>
                           <div className="font-medium text-sm line-clamp-2">Prodotto Esempio NexusShop {i}</div>
                           <div className="text-amazon-dark font-bold mt-1">€ 49.99</div>
                           <div className="text-green-600 text-xs mt-1">Disponibilità immediata</div>
                       </div>
                   </div>
               ))}
               
               <div className="border-t pt-4 mt-4">
                   <div className="flex justify-between text-lg font-bold">
                       <span>Totale provvisorio (2 articoli):</span>
                       <span className="text-red-700">€ 99.98</span>
                   </div>
               </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                    <h3 className="font-bold text-gray-700 mb-3 border-b pb-2">Seleziona metodo di pagamento</h3>
                    
                    {/* Credit Card Option */}
                    <div 
                        className={`p-3 rounded cursor-pointer border mb-2 ${selectedMethod === 'card' ? 'border-amazon-cta bg-orange-50' : 'border-gray-300'}`}
                        onClick={() => setSelectedMethod('card')}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'card' ? 'border-amazon-link' : 'border-gray-400'}`}>
                                {selectedMethod === 'card' && <div className="w-2 h-2 rounded-full bg-amazon-link"></div>}
                            </div>
                            <CreditCard size={20} className="text-gray-600"/>
                            <span className="font-bold text-sm">Carta di Credito o Debito</span>
                        </div>
                        
                        {selectedMethod === 'card' && (
                            <div className="mt-4 pl-7 space-y-3 animate-fade-in">
                                <input type="text" placeholder="Numero Carta" className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amazon-cta outline-none" />
                                <div className="flex gap-2">
                                    <input type="text" placeholder="MM/AA" className="w-1/2 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amazon-cta outline-none" />
                                    <input type="text" placeholder="CVV" className="w-1/2 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amazon-cta outline-none" />
                                </div>
                                <input type="text" placeholder="Intestatario Carta" className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-amazon-cta outline-none" />
                            </div>
                        )}
                    </div>

                    {/* PayPal Option */}
                    <div 
                        className={`p-3 rounded cursor-pointer border mb-2 ${selectedMethod === 'paypal' ? 'border-amazon-cta bg-orange-50' : 'border-gray-300'}`}
                        onClick={() => setSelectedMethod('paypal')}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'paypal' ? 'border-amazon-link' : 'border-gray-400'}`}>
                                {selectedMethod === 'paypal' && <div className="w-2 h-2 rounded-full bg-amazon-link"></div>}
                            </div>
                            <span className="font-bold text-blue-800 italic text-lg">PayPal</span>
                        </div>
                         {selectedMethod === 'paypal' && (
                            <div className="mt-3 pl-7 text-xs text-gray-600">
                                Verrai reindirizzato al sito di PayPal per completare l'acquisto in sicurezza.
                            </div>
                        )}
                    </div>

                    {/* Apple/Google Pay Option */}
                    <div 
                        className={`p-3 rounded cursor-pointer border ${selectedMethod === 'apple' ? 'border-amazon-cta bg-orange-50' : 'border-gray-300'}`}
                        onClick={() => setSelectedMethod('apple')}
                    >
                        <div className="flex items-center gap-3">
                             <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'apple' ? 'border-amazon-link' : 'border-gray-400'}`}>
                                {selectedMethod === 'apple' && <div className="w-2 h-2 rounded-full bg-amazon-link"></div>}
                            </div>
                            <div className="flex items-center gap-1">
                                <Smartphone size={20} className="text-gray-600"/>
                                <span className="font-bold text-sm">Google Pay / Apple Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )}

          {step === 'success' && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Grazie per il tuo ordine!</h3>
                  <p className="text-gray-600 mb-6">Ti abbiamo inviato una email di conferma.</p>
                  <button onClick={onClose} className="text-amazon-link hover:underline">Continua gli acquisti</button>
              </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== 'success' && (
            <div className="p-4 border-t border-gray-200 bg-white">
            {step === 'cart' ? (
                <button 
                    onClick={handleCheckout}
                    className="w-full bg-amazon-cta hover:bg-amazon-ctaHover text-black py-2 rounded-full shadow border border-yellow-500 font-medium"
                >
                    Procedi all'ordine
                </button>
            ) : (
                <button 
                    onClick={handlePayment}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 bg-amazon-cta hover:bg-amazon-ctaHover text-black py-2 rounded-full shadow border border-yellow-500 font-medium ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={20} className="animate-spin" /> Elaborazione...
                        </>
                    ) : (
                        selectedMethod === 'paypal' ? 'Continua su PayPal' : 'Acquista ora'
                    )}
                </button>
            )}
            </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;