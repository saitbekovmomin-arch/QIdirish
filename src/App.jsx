import React, { useState } from 'react';
import { 
  Bus, Search, PlusCircle, ShieldCheck, User, Bell, 
  MapPin, Calendar, CheckCircle2, AlertCircle, Phone, ArrowRight, Filter, LogOut
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Demo ma'lumotlar
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Qora hamyon (Ichida plastik kartalar va naqd pul)',
      category: 'Hamyon',
      busNo: '38',
      route: 'Chorsu - Qoraqamish',
      date: '2026-10-30',
      status: 'Topilgan',
      location: 'Chilonzul Deposi',
      description: 'Hamyon ichida UzCard va Humo kartalari bor.',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'iPhone 13 (Ko‘k rangli g‘ilofda)',
      category: 'Telefon',
      busNo: '51',
      route: 'Beruniy - Qo‘yliq',
      date: '2026-10-31',
      status: 'Qidirilmoqda',
      location: 'Topilmadi',
      description: 'Ekranida kichik tirnalishi bor.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  return (
    <div className="min-h-screen bg-bgLight text-dark flex flex-col font-sans">
      {/* Header */}
      <header className="bg-dark text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-primary p-2 rounded-xl text-white">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider">TOPDIMMI<span className="text-success">.UZ</span></span>
              <p className="text-xs text-gray-400">Jamoat transporti yo'qotishlar platformasi</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={`hover:text-primary transition ${activeTab === 'home' ? 'text-primary font-bold' : ''}`}>Bosh sahifa</button>
            <button onClick={() => setActiveTab('search')} className={`hover:text-primary transition ${activeTab === 'search' ? 'text-primary font-bold' : ''}`}>Qidirish</button>
            <button onClick={() => setActiveTab('lost')} className={`hover:text-primary transition ${activeTab === 'lost' ? 'text-primary font-bold' : ''}`}>Buyumim yo'qoldi</button>
            <button onClick={() => setActiveTab('found')} className={`hover:text-primary transition ${activeTab === 'found' ? 'text-primary font-bold' : ''}`}>Buyum topdim</button>
            <button onClick={() => setActiveTab('cabinet')} className={`hover:text-primary transition ${activeTab === 'cabinet' ? 'text-primary font-bold' : ''}`}>Kabinet</button>
          </nav>

          <div className="flex items-center space-x-3">
            <button onClick={() => setActiveTab('login')} className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-xl text-sm font-semibold transition">
              Kirish
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-dark to-primary text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between">
              <div className="space-y-6 max-w-xl">
                <span className="bg-success text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider">Rasmiy Tizim</span>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Avtobusda buyumingizni unutdingizmi? Biz topishga yordam beramiz!
                </h1>
                <p className="text-gray-200 text-sm md:text-base">
                  Toshkent shahri va viloyat jamoat transportlarida yo'qolgan buyumlarni tezkor ro'yxatga oling va egalariga qaytaring.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={() => setActiveTab('lost')} className="bg-white text-dark font-bold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition flex items-center space-x-2">
                    <span>Yo'qotganman</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={() => setActiveTab('search')} className="border border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-dark transition">
                    Topilganlarni ko'rish
                  </button>
                </div>
              </div>
              <div className="mt-8 md:mt-0 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 w-full md:w-80">
                <h3 className="text-lg font-bold mb-3 flex items-center space-x-2">
                  <ShieldCheck className="text-success w-5 h-5" />
                  <span>Xavfsizlik kafolati</span>
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Barcha topilgan buyumlar transport xodimlari nazorati ostida saqlanadi va faqat shaxsiy tasdiqdan so'ng egasiga topshiriladi.
                </p>
              </div>
            </div>

            {/* Quick Stats / Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tezkor Qidiruv</h3>
                <p className="text-gray-600 text-sm">Avtobus raqami va sana bo'yicha yo'qolgan buyumlarni osongina toping.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-success/10 text-success w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ishonchli Xodimlar</h3>
                <p className="text-gray-600 text-sm">Depo va transport xodimlari tomonidan ro'yxatga olingan va tasdiqlangan ma'lumotlar.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-500/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Bog'lanish</h3>
                <p className="text-gray-600 text-sm">Topilgan buyumni egasiga qaytarish jarayoni shaffof va qulay tashkil etilgan.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Topilgan buyumlar bazasi</h2>
            <div className="flex gap-4 flex-wrap">
              <input 
                type="text" 
                placeholder="Buyum nomi yoki avtobus raqami..." 
                className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{item.category}</span>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <div className="border-t pt-3 text-xs text-gray-500 space-y-1">
                      <div className="flex justify-between"><span>Avtobus:</span><span className="font-semibold text-dark">№ {item.busNo}</span></div>
                      <div className="flex justify-between"><span>Yo'nalish:</span><span className="font-semibold text-dark">{item.route}</span></div>
                      <div className="flex justify-between"><span>Sana:</span><span className="font-semibold text-dark">{item.date}</span></div>
                    </div>
                    <button className="w-full bg-primary text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-opacity-95 transition">
                      Mening buyumim
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lost' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold">Yo'qolgan buyum haqida ariza</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Arizangiz muvaffaqiyatli yuborildi!'); setActiveTab('home'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Buyum nomi va turi</label>
                <input type="text" required placeholder="Masalan: Qora hamyon" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Avtobus raqami</label>
                  <input type="text" required placeholder="Masalan: 38" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Yo'qolgan sana</label>
                  <input type="date" required className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Batafsil tavsif</label>
                <textarea rows="4" placeholder="Belgilari, ichidagi narsalar..." className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition">
                Arizani yuborish
              </button>
            </form>
          </div>
        )}

        {activeTab === 'found' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold">Topilgan buyumni ro'yxatga olish (Xodimlar uchun)</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Buyum bazaga qo‘shildi!'); setActiveTab('home'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Topilgan buyum nomi</label>
                <input type="text" required placeholder="Masalan: Telefon" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Avtobus raqami</label>
                  <input type="text" required placeholder="51" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Saqlash joyi (Depo)</label>
                  <input type="text" required placeholder="Chilonzor deposi" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
                </div>
              </div>
              <button type="submit" className="w-full bg-success text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition">
                Ro'yxatga olish
              </button>
            </form>
          </div>
        )}

        {activeTab === 'cabinet' && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-2xl font-bold">Foydalanuvchi kabineti</h2>
                <p className="text-gray-500 text-sm">Sizning ariza va murojaatlaringiz tarixi</p>
              </div>
              <button onClick={() => setActiveTab('home')} className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium">
                <LogOut className="w-5 h-5" />
                <span>Chiqish</span>
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Mening arizalarim</h3>
              <div className="bg-bgLight p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="font-bold">Qora hamyon</p>
                  <p className="text-xs text-gray-500">Sana: 2026-10-30 | Avtobus: № 38</p>
                </div>
                <span className="bg-success/10 text-success text-xs px-3 py-1.5 rounded-full font-semibold">Solishtirilmoqda</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'login' && (
          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-center">Tizimga kirish</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Muvaffaqiyatli kirildi!'); setActiveTab('cabinet'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Telefon raqam</label>
                <input type="text" required placeholder="+998 90 123 45 67" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Parol</label>
                <input type="password" required placeholder="••••••••" className="w-full bg-bgLight border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition">
                Kirish
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white mt-12 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2026 TOPDIMMI.UZ — Barcha huquqlar himoyalangan. O'zbekiston jamoat transporti platformasi.</p>
        </div>
      </footer>
    </div>
  );
}