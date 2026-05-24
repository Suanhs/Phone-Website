import { MapPin, Phone, Mail, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 text-white">
            <Wrench className="h-6 w-6" />
            <span className="font-bold text-xl tracking-tight">su'repair</span>
          </Link>
          <p className="text-sm text-slate-400 mb-6 max-w-sm">
            Fast, reliable phone repairs you can trust. High-quality parts, experienced technicians, and honest pricing.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@surepair.com</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Tech Street, Cityville</span>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/book" className="hover:text-teal-400 transition">Book a Repair</Link></li>
            <li><Link to="/quote" className="hover:text-teal-400 transition">Get a Free Quote</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-teal-400 transition">Customer Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-teal-400 transition">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/repairs" className="hover:text-teal-400 transition">iPhone Repair</Link></li>
            <li><Link to="/repairs" className="hover:text-teal-400 transition">Samsung Repair</Link></li>
            <li><Link to="/repairs" className="hover:text-teal-400 transition">iPad & Tablet Repair</Link></li>
            <li><Link to="/repairs" className="hover:text-teal-400 transition">Battery Replacement</Link></li>
            <li><Link to="/repairs" className="hover:text-teal-400 transition">Water Damage</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/shop" className="hover:text-teal-400 transition">Refurbished Phones</Link></li>
            <li><Link to="/shop" className="hover:text-teal-400 transition">Phone Cases</Link></li>
            <li><Link to="/shop" className="hover:text-teal-400 transition">Chargers & Cables</Link></li>
            <li><Link to="/shop" className="hover:text-teal-400 transition">Screen Protectors</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} su'repair. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          <Link to="/warranty" className="hover:text-white transition">Warranty Policy</Link>
        </div>
      </div>
    </footer>
  );
}
