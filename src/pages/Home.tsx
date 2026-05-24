import { Phone, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { repairs, products, reviews } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border-b border-slate-200">
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Open Now: Same Day Service Available
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            Fast, Reliable Phone Repairs <br className="hidden lg:block"/>
            <span className="text-teal-600">You Can Trust.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
            Cracked screen, weak battery, or water damage? su’repair gets your device working again with genuine parts and a 90-day warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="/book" className="flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-100 hover:bg-orange-600 transition-colors">
              Book My Repair
            </Link>
            <a href="tel:1234567890" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-6 border-t border-slate-100 mt-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">4.9/5</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Customer Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">45min</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Avg. Repair Time</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">90 Days</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Service Warranty</span>
            </div>
          </div>
        </div>
        
        <div className="relative bg-slate-100 flex items-center justify-center p-8 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
          {/* Mockup Image Placeholder */}
          <div className="w-full max-w-[400px] aspect-[4/5] bg-white rounded-[40px] shadow-2xl border-[12px] border-slate-800 overflow-hidden relative z-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-90"></div>
            <div className="absolute top-0 w-full h-8 flex justify-center pt-2">
              <div className="w-24 h-4 bg-slate-800 rounded-full"></div>
            </div>
          </div>
          {/* Floating Card */}
          <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 z-20">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Repair Status</div>
              <div className="text-sm font-bold text-slate-800">Fixed & Ready for Pickup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Repair Selector Bar */}
      <div className="bg-slate-900 px-6 lg:px-12 py-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <div className="text-white whitespace-nowrap hidden lg:block">
              <span className="block text-[10px] uppercase font-bold text-slate-400">Find Your Price</span>
              <span className="text-sm font-bold">Repair Selector</span>
            </div>
            <select className="w-full lg:flex-1 h-12 bg-slate-800 border-none rounded-lg text-slate-300 text-sm px-4 focus:ring-2 focus:ring-teal-500 outline-none">
              <option>Select Device Brand</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Google Pixel</option>
            </select>
            <select className="w-full lg:flex-1 h-12 bg-slate-800 border-none rounded-lg text-slate-300 text-sm px-4 focus:ring-2 focus:ring-teal-500 outline-none">
              <option>Select Model</option>
              <option>iPhone 13</option>
              <option>Galaxy S22</option>
            </select>
            <select className="w-full lg:flex-1 h-12 bg-slate-800 border-none rounded-lg text-slate-300 text-sm px-4 focus:ring-2 focus:ring-teal-500 outline-none">
              <option>Select Issue</option>
              <option>Cracked Screen</option>
              <option>Battery Issue</option>
              <option>Charging Port</option>
            </select>
            <button onClick={() => navigate('/repairs')} className="w-full lg:w-auto h-12 bg-teal-500 text-white px-8 rounded-lg font-bold hover:bg-teal-400 transition-colors">
              Show Options
            </button>
          </div>
        </div>
      </div>

      {/* Popular Repairs */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Repair Services</h2>
              <p className="text-slate-500 text-sm">Most devices fixed in under 60 minutes.</p>
            </div>
            <Link to="/repairs" className="hidden sm:flex items-center gap-1 text-teal-600 font-bold text-sm hover:text-teal-700">
              View All Repairs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {repairs.map((repair, i) => {
               // Assign some colors based on index for variety
               const colors = [
                 { bg: 'bg-blue-50', text: 'text-blue-600' },
                 { bg: 'bg-yellow-50', text: 'text-yellow-600' },
                 { bg: 'bg-purple-50', text: 'text-purple-600' },
                 { bg: 'bg-red-50', text: 'text-red-600' },
               ];
               const color = colors[i % colors.length];
               
               return (
                 <div key={repair.id} onClick={() => navigate(`/book?repair=${repair.id}`)} className="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                   <div className={`w-10 h-10 ${color.bg} ${color.text} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="font-bold">{repair.category.substring(0, 1)}</span>
                   </div>
                   <h3 className="font-bold text-slate-800 text-sm lg:text-base">{repair.title}</h3>
                   <p className="text-xs lg:text-sm text-slate-500 mt-1 mb-4">Starting from ${repair.estimatedPrice.toFixed(2)}</p>
                   <div className="mt-auto">
                     <span className="inline-block text-[10px] lg:text-xs font-bold py-1 px-2 bg-green-50 text-green-700 rounded">
                       {repair.estimatedTime} Fix
                     </span>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500">Get your device fixed in 4 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            {[
              { num: "01", title: "Choose Device", desc: "Select your phone brand and model." },
              { num: "02", title: "Select Issue", desc: "Tell us what's wrong with it." },
              { num: "03", title: "Book Time", desc: "Schedule a repair or get a quote." },
              { num: "04", title: "Get Repaired", desc: "We fix it fast, often same-day." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-2">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-8 ring-white">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Shop Accessories</h2>
              <p className="text-slate-500">Protect and power your repaired device.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center gap-1 text-teal-600 font-bold text-sm hover:text-teal-700">
              Go to Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 4).map(product => (
              <Link key={product.id} to={`/shop`} className="block group">
                <div className="aspect-square bg-slate-100 rounded-xl mb-4 overflow-hidden relative border border-slate-200">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  {product.condition === 'Refurbished' && (
                    <span className="absolute top-2 left-2 bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-1 rounded">Refurbished</span>
                  )}
                </div>
                <h3 className="font-medium text-slate-900 text-sm lg:text-base line-clamp-1">{product.title}</h3>
                <p className="font-bold text-slate-900 mt-1">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Customer Reviews */}
       <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Loved by our customers</h2>
            <div className="flex justify-center items-center gap-1 text-yellow-500">
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <span className="text-white ml-2 font-medium">4.9/5 Average Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {reviews.slice(0,3).map(review => (
                <div key={review.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">"{review.reviewText}"</p>
                  <div>
                    <p className="font-bold text-white text-sm">{review.customerName}</p>
                    <p className="text-xs text-slate-500 mt-1">{review.repairType}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">Need your phone fixed today?</h2>
          <p className="text-lg lg:text-xl text-teal-100 mb-10">Choose su'repair for fast, reliable, and professional service. Get started right now.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="w-full sm:w-auto px-8 py-4 bg-white text-teal-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition shadow-xl shadow-teal-700">
              Book a Repair Now
            </Link>
            <Link to="/quote" className="w-full sm:w-auto px-8 py-4 bg-teal-700 text-white rounded-xl font-bold text-lg hover:bg-teal-800 transition">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
