'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TechnologyServicesBusiness() {
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Teknologi & Layanan</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transformasi Digital</h1>
            <p className="text-xl text-purple-100 max-w-2xl">Menaungi unit bisnis pengembangan teknologi dan layanan jasa profesional</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Teknologi & Layanan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">SBU Teknologi dan Services Hasnur Group fokus pada pengembangan solusi teknologi modern dan layanan profesional untuk mendukung transformasi digital di seluruh divisi.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Dengan tim ahli dan infrastruktur teknologi terkini, kami siap memberikan solusi inovatif yang meningkatkan efisiensi operasional dan daya saing bisnis.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">💻</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Layanan Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Pengembangan Software', desc: 'Aplikasi custom dan solusi enterprise' },
                { title: 'Cloud Solutions', desc: 'Infrastruktur cloud dan data center' },
                { title: 'Cybersecurity', desc: 'Keamanan data dan perlindungan siber' },
                { title: 'Business Analytics', desc: 'Analisis data dan business intelligence' },
                { title: 'IT Consulting', desc: 'Konsultasi strategis teknologi informasi' },
                { title: 'Maintenance & Support', desc: 'Dukungan teknis 24/7 profesional' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg px-8">
            {[{ stat: '100+', label: 'Proyek Sukses' }, { stat: '500+', label: 'Karyawan IT' }, { stat: '24/7', label: 'Support' }, { stat: 'ISO 27001', label: 'Certified' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{item.stat}</div>
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
