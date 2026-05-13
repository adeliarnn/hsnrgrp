'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ConsumerBusiness() {
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-600 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Konsumen</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Produk & Layanan Konsumen</h1>
            <p className="text-xl text-pink-100 max-w-2xl">Mengembangkan bisnis di bidang media, gaya hidup dan kesehatan untuk masyarakat luas</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Konsumen</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Hasnur Group mengembangkan SBU Consumer yang membawahi usaha bisnis di bidang media, gaya hidup dan kesehatan untuk memenuhi kebutuhan masyarakat modern.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Dengan produk dan layanan berkualitas, kami berkomitmen meningkatkan kualitas hidup masyarakat Indonesia melalui inovasi berkelanjutan.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">🛍️</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Divisi Bisnis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Media & Broadcasting', desc: 'Stasiun TV, radio dan platform digital' },
                { title: 'Gaya Hidup', desc: 'Produk fashion, kuliner dan lifestyle' },
                { title: 'Kesehatan', desc: 'Produk dan layanan kesehatan berkualitas' },
                { title: 'Ritel & E-commerce', desc: 'Platform belanja online dan offline' },
                { title: 'Restoran & F&B', desc: 'Usaha food & beverage profesional' },
                { title: 'Properti', desc: 'Pengembangan properti untuk konsumen' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-pink-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg px-8">
            {[{ stat: '1M+', label: 'Pelanggan' }, { stat: '200+', label: 'Outlet' }, { stat: '2K+', label: 'Karyawan' }, { stat: '50+', label: 'Brand' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">{item.stat}</div>
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
