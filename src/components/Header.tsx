import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Wrench } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useAppContext();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Repairs', path: '/repairs' },
    { name: 'Shop', path: '/shop' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 md:px-8 h-16 bg-white border-b border-slate-200 shrink-0">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-teal-900">su'repair</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "transition-colors hover:text-teal-600",
              location.pathname === link.path ? "text-teal-600 font-semibold" : "text-slate-600"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/cart" className="relative p-2 text-slate-600 hover:text-teal-600 transition">
          <ShoppingCart className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <Link to="/quote" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition">
          Get a Quote
        </Link>
        <Link to="/book" className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition">
          Book a Repair
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="flex items-center gap-4 md:hidden">
        <Link to="/cart" className="relative p-2 text-slate-600">
          <ShoppingCart className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <button
          type="button"
          className="text-slate-600 hover:text-slate-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 py-4 px-4 flex-col gap-4 shadow-lg transition-all duration-200", isMenuOpen ? "flex" : "hidden")}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className={cn(
              "text-base font-medium",
              location.pathname === link.path ? "text-teal-600" : "text-slate-800"
            )}
          >
            {link.name}
          </Link>
        ))}
        <div className="h-px bg-slate-200 my-2" />
        <Link to="/quote" onClick={closeMenu} className="block w-full text-center px-4 py-3 text-sm font-semibold text-slate-700 bg-slate-50 rounded-lg">
          Get a Quote
        </Link>
        <Link to="/book" onClick={closeMenu} className="block w-full text-center px-4 py-3 text-sm font-bold text-white bg-teal-600 shadow-lg shadow-teal-100 rounded-full">
          Book a Repair
        </Link>
      </div>
    </header>
  );
}
