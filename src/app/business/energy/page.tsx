'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EnergyBusiness() {
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Energi</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solusi Energi Terdepan</h1>
            <p className="text-xl text-yellow-100 max-w-2xl">Visi menjadi perusahaan energi terkemuka di Indonesia dengan kapasitas produksi yang terus meningkat</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Energi</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">SBU Energi Hasnur Group fokus pada eksplorasi dan produksi berbagai sumber energi untuk mendukung kebutuhan nasional dan internasional.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Dengan teknologi terkini dan standar keselamatan tertinggi, kami berkomitmen mengembangkan sumber energi berkelanjutan untuk masa depan yang lebih baik.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">⚡</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Jenis Energi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Minyak Bumi', desc: 'Eksplorasi dan produksi minyak berkualitas tinggi' },
                { title: 'Gas Alam', desc: 'Penambangan dan distribusi gas alam' },
                { title: 'Pertambangan Batubara', desc: 'Operasi pertambangan batubara modern' },
                { title: 'Energi Terbarukan', desc: 'Investasi dalam energi surya dan angin' },
                { title: 'Infrastruktur', desc: 'Pembangunan terminal dan fasilitas energi' },
                { title: 'Teknologi Hijau', desc: 'Inovasi untuk energi bersih dan berkelanjutan' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg px-8">
            {[{ stat: '20+', label: 'Lokasi Operasi' }, { stat: '3K+', label: 'Karyawan' }, { stat: '100K+', label: 'Barel/Hari' }, { stat: 'ISO 14001', label: 'Sertifikasi' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{item.stat}</div>
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
