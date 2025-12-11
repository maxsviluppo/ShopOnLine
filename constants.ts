import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Tutte le categorie', href: '#' },
  { label: 'Offerte del giorno', href: '#' },
  { label: 'Servizio Clienti', href: '#' },
  { label: 'Liste', href: '#' },
  { label: 'Buoni Regalo', href: '#' },
  { label: 'Vendi', href: '#' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Cuffie Wireless Noise Cancelling Professionali - Nero',
    price: 89.99,
    rating: 4.5,
    reviews: 1240,
    image: 'https://picsum.photos/400/400?random=1',
    isPrime: true,
    category: 'Elettronica'
  },
  {
    id: 2,
    title: 'Smartwatch Fitness Tracker GPS Integrato',
    price: 45.50,
    rating: 4.0,
    reviews: 850,
    image: 'https://picsum.photos/400/400?random=2',
    isPrime: true,
    category: 'Wearables'
  },
  {
    id: 3,
    title: 'Macchina Fotografica Reflex Digitale 24MP',
    price: 499.00,
    rating: 5.0,
    reviews: 320,
    image: 'https://picsum.photos/400/400?random=3',
    isPrime: false,
    category: 'Fotografia'
  },
  {
    id: 4,
    title: 'Set di Pentole in Acciaio Inox 12 Pezzi',
    price: 129.90,
    rating: 4.2,
    reviews: 2100,
    image: 'https://picsum.photos/400/400?random=4',
    isPrime: true,
    category: 'Casa e Cucina'
  },
  {
    id: 5,
    title: 'Monitor Gaming 27 Pollici 144Hz Curvo',
    price: 249.99,
    rating: 4.7,
    reviews: 560,
    image: 'https://picsum.photos/400/400?random=5',
    isPrime: true,
    category: 'Informatica'
  },
  {
    id: 6,
    title: 'Zaino da Viaggio Impermeabile con USB',
    price: 29.99,
    rating: 4.3,
    reviews: 450,
    image: 'https://picsum.photos/400/400?random=6',
    isPrime: false,
    category: 'Valigeria'
  },
  {
    id: 7,
    title: 'Console di Gioco Portatile Retro',
    price: 79.00,
    rating: 3.8,
    reviews: 120,
    image: 'https://picsum.photos/400/400?random=7',
    isPrime: true,
    category: 'Videogiochi'
  },
  {
    id: 8,
    title: 'Sedia da Ufficio Ergonomica con Supporto Lombare',
    price: 159.99,
    rating: 4.6,
    reviews: 3200,
    image: 'https://picsum.photos/400/400?random=8',
    isPrime: true,
    category: 'Arredamento'
  }
];

export const SLIDER_IMAGES = [
  'https://picsum.photos/1200/400?random=10',
  'https://picsum.photos/1200/400?random=11',
  'https://picsum.photos/1200/400?random=12'
];