'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        setIsTop(bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isTop ? 'bg-transparent' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo Kiri */}
        <div className="flex items-center gap-3 z-10">
          <Image src="/pt.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl text-black">PT Kaya Indo</span>
        </div>

        {/* Menu Tengah (Desktop) */}
        <ul className="hidden md:flex gap-8 font-semibold uppercase text-sm text-black absolute left-1/2 transform -translate-x-1/2">
          {['Beranda', 'Tentang', 'Proyek', 'Kontak', 'Layanan'].map((menu, idx) => (
            <li key={idx}>
              <Link
                href={`/${menu === 'Beranda' ? '' : menu.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-blue-600 transition">{menu}</span>
                <span className="block h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-300 mt-1"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (Mobile) */}
        <button
          className="md:hidden z-20 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 font-bold uppercase text-lg transition-transform duration-500 z-10 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {['Beranda', 'Tentang', 'Proyek', 'Kontak', 'Layanan'].map((menu, idx) => (
            <Link
              key={idx}
              href={`/${menu === 'Beranda' ? '' : menu.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {menu}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
