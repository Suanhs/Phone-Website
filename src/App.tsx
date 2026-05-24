import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Repairs from './pages/Repairs';
import Shop from './pages/Shop';
import BookRepair from './pages/BookRepair';
import GetQuote from './pages/GetQuote';
import Cart from './pages/Cart';
import AdminDashboard from './pages/Admin';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-400">{title} Coming Soon</h1>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="repairs" element={<Repairs />} />
            <Route path="shop" element={<Shop />} />
            <Route path="book" element={<BookRepair />} />
            <Route path="quote" element={<GetQuote />} />
            <Route path="cart" element={<Cart />} />
            <Route path="reviews" element={<Placeholder title="Reviews" />} />
            <Route path="about" element={<Placeholder title="About Us" />} />
            <Route path="contact" element={<Placeholder title="Contact" />} />
            <Route path="faq" element={<Placeholder title="FAQ" />} />
            {/* simple legal pages */}
            <Route path="privacy" element={<Placeholder title="Privacy Policy" />} />
            <Route path="terms" element={<Placeholder title="Terms & Conditions" />} />
            <Route path="warranty" element={<Placeholder title="Warranty Policy" />} />
          </Route>
          {/* Admin route without standard layout if preferred, but let's just keep it standalone */}
          <Route path="/admin" element={
            <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
              <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-10 relative">
                <div className="font-bold text-lg tracking-tight">su'repair Admin Gateway</div>
                <a href="/" className="text-sm text-gray-300 hover:text-white transition">Exit Admin</a>
              </header>
              <AdminDashboard />
            </div>
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}
