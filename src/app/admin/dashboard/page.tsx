'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdImageSearch, MdNewspaperMdOutline, MdArrowForward } from 'react-icons/md';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    sliders: 0,
    news: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [slidersRes, newsRes] = await Promise.all([
          fetch('/api/content/slider'),
          fetch('/api/content/news'),
        ]);

        const sliders = await slidersRes.json();
        const news = await newsRes.json();

        setStats({
          sliders: Array.isArray(sliders) ? sliders.length : 0,
          news: Array.isArray(news) ? news.length : 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Slider Images',
      count: stats.sliders,
      description: 'Manage image slider di halaman depan',
      href: '/admin/slider',
      icon: MdImageSearch,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Berita',
      count: stats.news,
      description: 'Kelola artikel dan berita terbaru',
      href: '/admin/news',
      icon: MdNewspaperMdOutline,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang</h2>
        <p className="text-gray-600">Kelola konten Hasnur Group dengan mudah</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold opacity-90">{card.title}</p>
                    <p className="text-4xl font-bold mt-2">
                      {loading ? '-' : card.count}
                    </p>
                  </div>
                  <Icon className="text-6xl opacity-20" />
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Buka <MdArrowForward />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/admin/slider?action=create"
            className="p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition text-center"
          >
            <p className="font-semibold text-gray-900">Tambah Slider Baru</p>
            <p className="text-sm text-gray-600 mt-1">Buat image slider baru</p>
          </Link>
          <Link
            href="/admin/news?action=create"
            className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition text-center"
          >
            <p className="font-semibold text-gray-900">Tulis Berita Baru</p>
            <p className="text-sm text-gray-600 mt-1">Publish artikel terbaru</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
