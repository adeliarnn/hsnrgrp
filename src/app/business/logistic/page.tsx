'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function LogisticBusiness() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                SBU Logistik
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solusi Logistik Terpadu</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Mendukung bisnis di lingkungan Hasnur Group dan mitra bisnis lainnya dengan layanan logistik berkualitas tinggi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Logistik</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                SBU Logistik Hasnur Group dirancang untuk mendukung bisnis-bisnis di lingkungan Hasnur Group dan juga mitra bisnis lainnya dengan solusi logistik yang komprehensif dan efisien.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dengan infrastruktur yang kuat, armada modern, dan tim profesional, kami siap memberikan layanan pengiriman dan distribusi yang dapat diandalkan di seluruh wilayah operasional.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span className="font-semibold">Distribusi Nasional</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <span className="font-semibold">Armada Modern</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-12 flex items-center justify-center"
            >
              <span className="text-8xl">📦</span>
            </motion.div>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Layanan Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Pengiriman Barang', desc: 'Layanan pengiriman barang ke seluruh nusantara' },
                { title: 'Penyimpanan', desc: 'Fasilitas gudang dengan manajemen inventory modern' },
                { title: 'Distribusi', desc: 'Sistem distribusi efisien ke lokasi tujuan' },
                { title: 'Customs Clearance', desc: 'Jasa bea cukai dan dokumentasi impor-ekspor' },
                { title: 'Logistik Khusus', desc: 'Penanganan barang berbahaya dan sensitif' },
                { title: 'Tracking Real-time', desc: 'Sistem pelacakan pengiriman secara real-time' },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg px-8">
            {[
              { stat: '500+', label: 'Armada Kendaraan' },
              { stat: '50+', label: 'Lokasi Gudang' },
              { stat: '10K+', label: 'Pengiriman/Bulan' },
              { stat: '24/7', label: 'Layanan Pelanggan' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
