import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function BookRepair() {
  const [searchParams] = useSearchParams();
  const preSelectedRepairId = searchParams.get('repair');
  
  const { repairs, addBooking } = useAppContext();
  const navigate = useNavigate();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    deviceBrand: '',
    deviceModel: '',
    issue: preSelectedRepairId ? repairs.find(r => r.id === preSelectedRepairId)?.title || '' : '',
    preferredDate: '',
    preferredTime: '10:00 AM'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Booking Received!</h2>
          <p className="text-slate-600 mb-8">
            Thanks {formData.customerName}! We've received your repair booking request. We'll contact you shortly to confirm your repair.
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
      <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Book a Repair</h1>
          <p className="text-slate-600 mb-8">Fill out the form below to secure your repair spot. Most repairs are completed same-day.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Device Brand <span className="text-red-500">*</span></label>
                <select required name="deviceBrand" value={formData.deviceBrand} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none">
                  <option value="">Select Brand</option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Google">Google Pixel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Device Model <span className="text-red-500">*</span></label>
                <input required type="text" name="deviceModel" value={formData.deviceModel} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="e.g. iPhone 13 Pro" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Describe the Issue <span className="text-red-500">*</span></label>
              <textarea required name="issue" value={formData.issue} onChange={handleChange} rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" placeholder="What exactly is wrong with the device..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                  <input required type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time <span className="text-red-500">*</span></label>
                  <select required name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none">
                     <option>09:00 AM</option>
                     <option>10:00 AM</option>
                     <option>11:00 AM</option>
                     <option>12:00 PM</option>
                     <option>01:00 PM</option>
                     <option>02:00 PM</option>
                     <option>03:00 PM</option>
                     <option>04:00 PM</option>
                  </select>
               </div>
            </div>

            <button type="submit" className="w-full bg-teal-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-teal-700 transition mt-6">
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Sidebar Trust Indicators */}
        <div className="space-y-6">
           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white h-fit">
              <h3 className="font-bold text-lg mb-6">Why book with us?</h3>
              <ul className="space-y-5">
                 <li className="flex gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Lifetime Warranty</p>
                        <p className="text-xs text-slate-400 mt-1">On all premium screen replacements.</p>
                    </div>
                 </li>
                 <li className="flex gap-3">
                    <Clock className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Fast Turnaround</p>
                        <p className="text-xs text-slate-400 mt-1">Most repairs done in under an hour.</p>
                    </div>
                 </li>
                 <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-sm">Quality Parts</p>
                        <p className="text-xs text-slate-400 mt-1">We use original or premium OEM parts.</p>
                    </div>
                 </li>
              </ul>
           </div>
           
           <div className="bg-teal-50 rounded-2xl p-6 text-teal-900 border border-teal-100">
              <h4 className="font-bold mb-2">Not sure what's wrong?</h4>
              <p className="text-sm mb-4 text-teal-800">We offer free diagnostics. If we can't fix it, you don't pay anything.</p>
              <button onClick={() => navigate('/quote')} className="text-sm font-bold underline bg-transparent outline-none">Get a quote instead</button>
           </div>
        </div>
      </div>
    </div>
  );
}
