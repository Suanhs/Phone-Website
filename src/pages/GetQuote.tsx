import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CheckCircle2, FileImage } from 'lucide-react';

export default function GetQuote() {
  const { addQuote } = useAppContext();
  const navigate = useNavigate();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    deviceBrand: '',
    deviceModel: '',
    issueCategory: '',
    description: '',
    urgency: 'This week' as any
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addQuote(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md text-center">
          <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quote Request Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thanks {formData.customerName}! We've received your repair details. Our technicians will review the information and get back to you shortly with a free quote.
          </p>
          <button onClick={() => navigate('/')} className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-center mb-10">
             <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Get a Free Quote</h1>
             <p className="text-slate-600">Tell us what's wrong with your device, and we'll give you an honest estimate.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input required type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" />
              </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
               <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Device Brand *</label>
                <select required name="deviceBrand" value={formData.deviceBrand} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none">
                  <option value="">Select Brand</option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Google">Google</option>
                  <option value="Other">Other</option>
                </select>
              </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Device Model *</label>
                <input required type="text" name="deviceModel" value={formData.deviceModel} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="e.g. iPad Pro 11-inch" />
              </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-700 mb-2">Issue Category *</label>
               <select required name="issueCategory" value={formData.issueCategory} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none">
                  <option value="">Select Issue</option>
                  <option value="Screen">Screen/Display</option>
                  <option value="Battery">Battery/Power</option>
                  <option value="Water">Water Damage</option>
                  <option value="Camera">Camera</option>
                  <option value="Charging">Charging Port</option>
                  <option value="Other">Other / Unsure</option>
               </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Problem Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="Please provide any useful details..."></textarea>
            </div>

            <div className="mb-2">
               <label className="block text-sm font-medium text-slate-700 mb-2">Urgency Level</label>
               <div className="flex gap-4">
                  {['Today', 'This week', 'Not urgent'].map(u => (
                     <label key={u} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="urgency" value={u} checked={formData.urgency === u} onChange={handleChange} className="text-teal-600 focus:ring-teal-600" />
                        <span className="text-sm text-slate-700">{u}</span>
                     </label>
                  ))}
               </div>
            </div>

             <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-6 text-center">
                 <FileImage className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                 <p className="text-sm text-slate-600 font-medium">Upload photos of the damage (Optional)</p>
                 <p className="text-xs text-slate-500 mb-4">Helps us quote faster.</p>
                 <button type="button" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Choose Files</button>
             </div>

            <button type="submit" className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-black transition mt-6 shadow-sm">
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
