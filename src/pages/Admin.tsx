import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { LayoutDashboard, ShoppingBag, CalendarCheck, FileText, Settings, Plus, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Category } from '../types';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const { products, bookings, quotes, updateBookingStatus, updateQuoteStatus, addProduct } = useAppContext();

  // Create Product Form State
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '', category: 'Phone Cases' as Category, price: '', condition: 'New', brand: '', quantity: '1', description: '', image: ''
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price || !newProduct.image) return alert("Please fill all required fields");
    
    addProduct({
      title: newProduct.title,
      category: newProduct.category as Category,
      price: parseFloat(newProduct.price),
      condition: newProduct.condition as any,
      brand: newProduct.brand,
      quantity: parseInt(newProduct.quantity, 10),
      description: newProduct.description,
      image: newProduct.image,
      pickupAvailable: true,
      deliveryAvailable: true,
      status: 'Published'
    });
    setIsAddingProduct(false);
    setNewProduct({ title: '', category: 'Phone Cases', price: '', condition: 'New', brand: '', quantity: '1', description: '', image: '' });
  };

  const tabs = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Products', icon: ShoppingBag },
    { name: 'Bookings', icon: CalendarCheck },
    { name: 'Quotes', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Total Bookings', value: bookings.length },
        { label: 'Pending Quotes', value: quotes.filter(q => q.status === 'New').length },
        { label: 'Total Products', value: products.length },
        { label: 'Revenue (Est)', value: '$1,250' },
      ].map(stat => (
        <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
          <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );

  const renderProducts = () => {
    if (isAddingProduct) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Add New Product</h2>
            <button onClick={() => setIsAddingProduct(false)} className="text-slate-500 hover:text-slate-900">Cancel</button>
          </div>
          <form onSubmit={handleAddProduct} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Title *</label>
                <input required type="text" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" placeholder="e.g. iPhone 13 Clear Case"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value as Category})} className="w-full p-2 border border-slate-300 rounded-lg">
                  <option>Phone Cases</option>
                  <option>Chargers</option>
                  <option>Cables</option>
                  <option>Screen Protectors</option>
                  <option>Refurbished Phones</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Price ($) *</label>
                <input required type="number" step="0.01" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" placeholder="19.99"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
                <select value={newProduct.condition} onChange={e => setNewProduct({...newProduct, condition: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg">
                  <option>New</option>
                  <option>Used</option>
                  <option>Refurbished</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                <input type="number" value={newProduct.quantity} onChange={e => setNewProduct({...newProduct, quantity: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" placeholder="1"/>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL *</label>
                <input required type="text" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" placeholder="https://..."/>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows={3} value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg"></textarea>
              </div>
            </div>
            <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700">Publish Product</button>
          </form>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Manage Products</h2>
          <button onClick={() => setIsAddingProduct(true)} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Condition</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-b border-slate-50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={p.image} alt={p.title} className="w-10 h-10 rounded object-cover" />
                    <span className="font-medium text-slate-900">{p.title}</span>
                  </td>
                  <td className="px-6 py-4">{p.category}</td>
                  <td className="px-6 py-4">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{p.condition}</td>
                  <td className="px-6 py-4">{p.quantity}</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderBookings = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-900">Repair Bookings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-700 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Device & Issue</th>
              <th className="px-6 py-4 font-medium">Date/Time</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="border-b border-slate-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">{b.customerName}</p>
                  <p className="text-xs">{b.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">{b.deviceBrand} {b.deviceModel}</p>
                  <p className="text-xs truncate max-w-[200px]">{b.issue}</p>
                </td>
                <td className="px-6 py-4">
                  <p>{b.preferredDate}</p>
                  <p className="text-xs">{b.preferredTime}</p>
                </td>
                <td className="px-6 py-4">
                   <select 
                     value={b.status} 
                     onChange={(e) => updateBookingStatus(b.id, e.target.value as any)}
                     className="bg-slate-50 border border-slate-200 rounded p-1 text-xs font-medium"
                   >
                     <option value="New">New</option>
                     <option value="Confirmed">Confirmed</option>
                     <option value="In Progress">In Progress</option>
                     <option value="Completed">Completed</option>
                   </select>
                </td>
                <td className="px-6 py-4 text-teal-600 text-xs cursor-pointer hover:underline">View Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-lg font-bold text-slate-900 opacity-50 uppercase tracking-wider text-sm mb-4">Dashboard</h2>
          <nav className="space-y-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition",
                    activeTab === tab.name ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
         <h1 className="text-3xl font-bold text-slate-900 mb-8">{activeTab}</h1>
         {activeTab === 'Overview' && renderOverview()}
         {activeTab === 'Products' && renderProducts()}
         {activeTab === 'Bookings' && renderBookings()}
         {activeTab === 'Quotes' && (
           <div className="bg-white p-8 rounded-2xl text-center text-slate-500 border border-slate-200">
             Quote Management Coming Soon
           </div>
         )}
         {activeTab === 'Settings' && (
           <div className="bg-white p-8 rounded-2xl text-center text-slate-500 border border-slate-200">
             Settings Coming Soon
           </div>
         )}
      </main>
    </div>
  );
}
