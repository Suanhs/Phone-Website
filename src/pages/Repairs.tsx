import { useState } from 'react';
import { Search, Filter, Wrench, Battery, Cable, Droplets } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Repairs() {
  const { repairs } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Screen Repair', 'Battery Repair', 'Port Repair', 'Diagnostics'];

  const filteredRepairs = repairs.filter(repair => {
    const matchesSearch = repair.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || repair.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Battery': return <Battery className="w-6 h-6 text-teal-600" />;
      case 'Cable': return <Cable className="w-6 h-6 text-teal-600" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-teal-600" />;
      default: return <Wrench className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Phone Repair Services</h1>
          <p className="text-lg text-slate-600">Select the repair you need to see estimated pricing and book your appointment.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search repairs (e.g. iPhone Screen)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-3 rounded-xl whitespace-nowrap text-sm font-medium transition ${
                  categoryFilter === cat ? 'bg-teal-600 text-white shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepairs.map(repair => (
             <div key={repair.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition flex flex-col group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                     {getIcon(repair.icon)}
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">{repair.deviceBrand}</span>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{repair.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{repair.description}</p>
                
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                   <div className="flex justify-between items-center mb-2 text-sm">
                      <span className="text-slate-600">Estimated Price</span>
                      <span className="font-bold text-slate-900">From ${repair.estimatedPrice}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Turnaround</span>
                      <span className="font-bold text-slate-900">{repair.estimatedTime}</span>
                   </div>
                </div>

                <div className="flex gap-3 mt-auto">
                   <Link to={`/book?repair=${repair.id}`} className="flex-1 bg-teal-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-teal-700 transition">
                      Book Now
                   </Link>
                   <Link to={`/quote?repair=${repair.id}`} className="flex-1 bg-white text-teal-600 border border-teal-600 text-center py-2.5 rounded-lg font-medium hover:bg-teal-50 transition">
                      Get Quote
                   </Link>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
