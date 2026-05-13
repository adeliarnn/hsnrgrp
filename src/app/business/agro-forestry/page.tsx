'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AgroForestryBusiness() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Agro Forestry</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pertanian & Kehutanan Berkelanjutan</h1>
            <p className="text-xl text-green-100 max-w-2xl">Pengalaman puluhan tahun dalam pengembangan perkebunan dan kehutanan dengan standar keberlanjutan internasional</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Agro Forestry</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Hasnur Group memiliki pengalaman cukup dalam lini usaha kehutanan dan perkebunan. Diawali dengan usaha jasa penarikan rakit kayu di Wilayah DAS Barito, kami telah berkembang menjadi pemain utama dalam industri agrobisnis.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Kami mengoperasikan perkebunan kelapa sawit dengan standar keberlanjutan dan tanggung jawab lingkungan, menciptakan lapangan kerja berkualitas bagi ribuan masyarakat lokal.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">🌳</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Lini Bisnis Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Perkebunan Kelapa Sawit', desc: 'Operasional di Kalimantan Selatan dan Kalimantan Tengah' },
                { title: 'Pabrik Kelapa Sawit', desc: 'Fasilitas pengolahan modern dengan kapasitas produksi tinggi' },
                { title: 'Jasa Angkutan Kayu', desc: 'Layanan transportasi hasil hutan berkelanjutan' },
                { title: 'Manajemen Lahan', desc: 'Pengelolaan lahan pertanian dengan teknologi terkini' },
                { title: 'Pengembangan Masyarakat', desc: 'Program pemberdayaan masyarakat sekitar perkebunan' },
                { title: 'Sertifikasi Internasional', desc: 'Standar RSPO dan sertifikasi lingkungan lainnya' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-green-50 to-green-100 rounded-lg px-8">
            {[{ stat: '50K+', label: 'Hektar Lahan' }, { stat: '5K+', label: 'Karyawan' }, { stat: '2', label: 'Pabrik Utama' }, { stat: '100%', label: 'RSPO Certified' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
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
