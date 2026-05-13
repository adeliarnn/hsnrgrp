'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdDashboard, MdNewspaperMdOutline, MdImageSearch, MdLogout, MdMenu, MdClose } from 'react-icons/md';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/admin/login' });
  };

  if (status === 'loading' || status === 'unauthenticated') {
    return null;
  }

  const menuItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: MdDashboard },
    { label: 'Slider Images', href: '/admin/slider', icon: MdImageSearch },
    { label: 'Berita', href: '/admin/news', icon: MdNewspaperMdOutline },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed md:relative w-64 h-full bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-lg z-40"
      >
        <div className="p-6 border-b border-blue-500">
          <h1 className="text-2xl font-bold">Hasnur Admin</h1>
          <p className="text-blue-100 text-sm mt-1">Panel Manajemen</p>
        </div>

        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-500 transition"
              >
                <Icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-500">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            <MdLogout className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed md:hidden bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-30"
      >
        {sidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome, {session?.user?.name}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
