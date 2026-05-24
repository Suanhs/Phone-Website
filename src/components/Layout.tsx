import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.128l-.904 3.313 3.392-.89c.813.443 1.761.677 2.253.678 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.433 8.163c-.144.405-.831.745-1.144.793-.31.044-.707.078-1.144-.06-.277-.087-1.189-.466-2.268-1.429-.839-.751-1.405-1.678-1.57-1.96-.164-.282-.018-.435.123-.574.126-.126.282-.328.423-.493.141-.164.188-.282.282-.47.094-.188.047-.352-.023-.493-.07-.141-.634-1.528-.869-2.09-.229-.55-.46-.474-.634-.483-.163-.008-.352-.01-.54-.01s-.494.07-.751.352c-.258.282-.987.964-.987 2.349 0 1.386 1.008 2.724 1.15 2.912.141.188 1.984 3.029 4.805 4.246.671.289 1.196.462 1.605.592.673.214 1.286.184 1.769.112.54-.08 1.107-.453 1.263-.893.156-.439.156-.816.109-.893-.047-.078-.172-.125-.359-.219z"/></svg>
        </button>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 flex gap-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="/book" className="flex-1 bg-teal-600 text-white text-center py-3 rounded-lg font-bold">Book Repair</a>
        <a href="tel:1234567890" className="flex-1 bg-slate-100 text-slate-800 text-center py-3 rounded-lg font-bold border-2 border-slate-200">Call Now</a>
      </div>
    </div>
  );
}
