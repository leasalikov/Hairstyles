import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50" dir="rtl">
      <Header />
      <main className="pt-20">
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;