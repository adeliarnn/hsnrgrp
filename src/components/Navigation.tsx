'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuItems = [
    { 
      label: 'Home', 
      href: '/',
      submenu: null
    },
    { 
      label: 'Tentang Kami', 
      href: '#',
      submenu: [
        { label: 'Profil Perusahaan', href: '/about' },
        { label: 'Sejarah & Perjalanan', href: '/about#history' },
        { label: 'Tim Kepemimpinan', href: '/about#leadership' },
        { label: 'Nilai-Nilai Inti', href: '/core-values' },
      ]
    },
    { 
      label: 'Bisnis Kami', 
      href: '#',
      submenu: [
        { label: 'Logistik', href: '/business/logistic' },
        { label: 'Agro Forestry', href: '/business/agro-forestry' },
        { label: 'Energi', href: '/business/energy' },
        { label: 'Teknologi & Layanan', href: '/business/technology-services' },
        { label: 'Pendidikan', href: '/business/education' },
        { label: 'Konsumen', href: '/business/consumer' },
        { label: 'Investasi', href: '/business/investment' },
      ]
    },
    { 
      label: 'Tanggung Jawab Sosial', 
      href: '/sustainability',
      submenu: null
    },
    { 
      label: 'Karir', 
      href: '/careers',
      submenu: null
    },
    { 
      label: 'Kontak', 
      href: '/contact',
      submenu: null
    },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hasnur Group
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-md"
                >
                  {item.label}
                </Link>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {menuItems.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <span className={`transform transition ${openMenu === item.label ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  )}
                </button>
                
                {/* Mobile Submenu */}
                {item.submenu && openMenu === item.label && (
                  <div className="bg-gray-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
