import { useState } from 'react';
import { Search, ShoppingBag, Filter } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Shop() {
  const { products, addToCart } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Phone Cases', 'Chargers', 'Refurbished Phones', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory && product.status === 'Published';
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Shop Accessories & Phones</h1>
            <p className="text-slate-600">High-quality accessories and fully tested refurbished devices.</p>
          </div>
          <div className="w-full md:w-auto relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
             <input 
               type="text" 
               placeholder="Search shop..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full md:w-80 pl-10 pr-4 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-sm"
             />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="w-full md:w-64 flex-shrink-0">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                   <Filter className="w-5 h-5 text-slate-500" />
                   <h3 className="font-bold text-slate-900">Categories</h3>
                </div>
                <div className="space-y-3 pl-1">
                   {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                           type="radio" 
                           name="category" 
                           value={cat} 
                           checked={categoryFilter === cat}
                           onChange={(e) => setCategoryFilter(e.target.value)}
                           className="w-4 h-4 text-teal-600 border-slate-300 focus:ring-teal-600"
                        />
                        <span className={`text-sm ${categoryFilter === cat ? 'font-semibold text-teal-600' : 'text-slate-600 group-hover:text-slate-900'}`}>{cat}</span>
                      </label>
                   ))}
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                   <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group relative">
                      {product.condition === 'Refurbished' && (
                         <div className="absolute top-3 left-3 bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded z-10">Refurbished</div>
                      )}
                      {product.quantity <= 5 && product.quantity > 0 && (
                         <div className="absolute top-3 right-3 bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded z-10">Low Stock</div>
                      )}
                      <div className="aspect-square bg-slate-100 overflow-hidden relative">
                         <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                         <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">{product.title}</h3>
                         <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                         <div className="mt-auto flex items-center justify-between">
                            <span className="font-bold text-xl text-slate-900">${product.price.toFixed(2)}</span>
                            <button 
                               onClick={() => addToCart(product)}
                               disabled={product.quantity === 0}
                               className="flex items-center justify-center p-2.5 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                               aria-label="Add to Cart"
                            >
                               <ShoppingBag className="w-5 h-5" />
                            </button>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
             {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                   <p className="text-slate-500">No products found matching your criteria.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
