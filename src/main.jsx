import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Heart,
  Instagram,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Twitter,
  Undo2,
  User,
  Youtube,
  MessageSquare,
} from 'lucide-react';
import './styles.css';

const asset = (name) => `/assets/${name}`;

const arrivals = [
  { name: 'LumaSound ANC Headphones', price: '$199.00', image: 'hero-products.png', pos: '38% 54%', swatches: ['#2f3338', '#c7cbd1', '#e5e8ed'] },
  { name: 'LumaGlow Table Lamp', price: '$129.00', image: 'hero-products.png', pos: '60% 47%', swatches: ['#f6f2ea', '#d7d2c7', '#111'] },
  { name: 'LumaType Mechanical Keyboard', price: '$149.00', image: 'story-desk.png', pos: '83% 68%', swatches: ['#3e4247'] },
  { name: 'LumaPlay Smart Speaker', price: '$99.00', image: 'hero-products.png', pos: '78% 55%', swatches: ['#8b9094', '#e4e6e7'] },
  { name: 'LumaCharge 3-in-1 Wireless Stand', price: '$79.00', image: 'story-desk.png', pos: '70% 58%', swatches: ['#2d3032'] },
];

const rooms = [
  { label: 'Living room', image: 'hero-products.png', pos: '77% 53%' },
  { label: 'Bedroom', image: 'hero-products.png', pos: '61% 49%' },
  { label: 'Home office', image: 'story-desk.png', pos: '45% 60%' },
  { label: 'Kitchen', image: 'hero-products.png', pos: '69% 66%' },
  { label: 'Entryway', image: 'story-desk.png', pos: '83% 58%' },
];

const bestSellers = [
  { ...arrivals[0], rating: '1,248' },
  { ...arrivals[1], rating: '842' },
  { ...arrivals[2], rating: '631' },
  { ...arrivals[3], price: '$109.00', rating: '1,103' },
  { name: 'LumaDesk Organizer', price: '$39.00', image: 'story-desk.png', pos: '77% 55%', rating: '512' },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#">LumaMarket</a>
      <nav aria-label="Main navigation">
        <a href="#shop">Shop</a>
        <a href="#collections">Collections</a>
        <a href="#journal">Journal</a>
        <a href="#support">Support</a>
      </nav>
      <div className="header-actions" aria-label="Account and shopping tools">
        <button aria-label="Search"><Search size={22} /></button>
        <button aria-label="Account"><User size={21} /></button>
        <button aria-label="Shopping bag"><ShoppingBag size={21} /></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Everything bright for modern living</h1>
        <p>Curated tech, home essentials, and everyday objects selected for comfort, clarity, and lasting use.</p>
        <div className="hero-actions">
          <a className="button primary" href="#shop">Shop new arrivals</a>
          <a className="button secondary" href="#collections">Explore collections</a>
        </div>
      </div>
      <div className="hero-media" aria-label="Headphones, lamp, speaker and plant on a white sideboard">
        <img src={asset('hero-products.png')} alt="" />
      </div>
    </section>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <a href="#">View all <ArrowRight size={18} /></a>
    </div>
  );
}

function ProductImage({ item, className = '' }) {
  return (
    <div className={`product-image ${className}`}>
      <img src={asset(item.image)} alt={item.name || item.label} style={{ objectPosition: item.pos }} />
    </div>
  );
}

function Arrivals() {
  return (
    <section id="shop" className="section">
      <SectionTitle title="Featured arrivals" />
      <div className="arrival-row">
        {arrivals.map((item) => (
          <article className="arrival-card" key={item.name}>
            <ProductImage item={item} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="swatches" aria-label={`${item.name} color options`}>
              {item.swatches.map((color) => <span key={color} style={{ background: color }} />)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoomTiles() {
  return (
    <section id="collections" className="section">
      <SectionTitle title="Shop by room" />
      <div className="room-grid">
        {rooms.map((room) => (
          <a className="room-tile" href="#" key={room.label}>
            <img src={asset(room.image)} alt="" style={{ objectPosition: room.pos }} />
            <span>{room.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="section">
      <SectionTitle title="Most loved this week" />
      <div className="seller-grid">
        {bestSellers.map((item) => (
          <article className="seller-card" key={item.name}>
            <button className="heart" aria-label={`Save ${item.name}`}><Heart size={20} /></button>
            <ProductImage item={item} className="seller-image" />
            <h3>{item.name}</h3>
            <div className="rating" aria-label={`Rated five stars by ${item.rating} customers`}>
              <span>★★★★★</span> <em>({item.rating})</em>
            </div>
            <p>{item.price}</p>
            <button className="cart-button">Add to cart</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="journal" className="story">
      <div className="story-copy">
        <h2>Designed for easier days</h2>
        <p>Thoughtful details, intuitive design, and quality materials that fit naturally into your space.</p>
        <a className="button secondary" href="#">Explore the journal</a>
      </div>
      <img src={asset('story-desk.png')} alt="Headphones and laptop arranged on a clean modern desk" />
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Truck, title: 'Fast, free shipping', text: 'Free shipping on orders $50+ anywhere in the US.' },
    { icon: ShieldCheck, title: '2-year warranty', text: 'Quality you can trust with worry-free coverage.' },
    { icon: PackageCheck, title: 'Easy returns', text: '30-day returns for a hassle-free experience.' },
    { icon: MessageSquare, title: 'Live support', text: 'Real people here to help, 7 days a week.' },
  ];

  return (
    <section id="support" className="benefits">
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title}>
          <Icon size={30} strokeWidth={1.8} />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <h2>Stay in the know</h2>
        <p>New arrivals, useful ideas, and exclusive offers.</p>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Enter your email" />
        <button className="button primary" type="submit">Subscribe</button>
      </form>
    </section>
  );
}

function Footer() {
  const groups = [
    ['Shop', 'New arrivals', 'Bestsellers', 'Smart home', 'Audio', 'Office', 'Accessories'],
    ['Collections', 'Living room', 'Bedroom', 'Home office', 'Kitchen', 'Storage', 'Gift cards'],
    ['Support', 'Help center', 'Shipping & delivery', 'Returns & exchanges', 'Warranty', 'Contact us'],
    ['Company', 'Journal', 'About us', 'Sustainability', 'Careers', 'Affiliate program'],
  ];

  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>LumaMarket</h2>
        <p>Curated tech, home essentials, and everyday objects for modern living.</p>
        <div className="socials">
          <Instagram size={18} />
          <Twitter size={18} />
          <Youtube size={19} />
          <Undo2 size={18} />
        </div>
      </div>
      <div className="footer-links">
        {groups.map(([heading, ...links]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            {links.map((link) => <a href="#" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="legal">
        <span>© 2024 LumaMarket. All rights reserved.</span>
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy</a>
        <a href="#">Accessibility</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Arrivals />
        <RoomTiles />
        <BestSellers />
        <Story />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
