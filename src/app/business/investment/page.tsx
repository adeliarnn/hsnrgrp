'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function InvestmentBusiness() {
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Investasi</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Strategi Investasi Strategis</h1>
            <p className="text-xl text-indigo-100 max-w-2xl">Mengembangkan berbagai bisnis melalui dukungan investasi dan manajemen portofolio profesional</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Investasi</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Melalui SBU Investasi, Hasnur Group terus mengembangkan berbagai bisnis melalui dukungan investasi, baik dari berbagai entitas di Hasnur Group dan juga eksternal.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Dengan strategi investasi yang matang dan analisis mendalam, kami menciptakan peluang pertumbuhan bisnis berkelanjutan dan memberikan return optimal kepada investor.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">💰</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Area Investasi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Venture Capital', desc: 'Investasi di startup dan bisnis emerging' },
                { title: 'Portfolio Management', desc: 'Manajemen aset dan diversifikasi portofolio' },
                { title: 'Merger & Acquisition', desc: 'Strategi akuisisi dan integrasi bisnis' },
                { title: 'Real Estate Investment', desc: 'Investasi properti komersial dan residensial' },
                { title: 'Financial Services', desc: 'Layanan keuangan dan permodalan bisnis' },
                { title: 'Strategic Partnership', desc: 'Kemitraan strategis dengan investor global' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-indigo-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg px-8">
            {[{ stat: 'USD 500M+', label: 'Total Assets' }, { stat: '30+', label: 'Portfolio Companies' }, { stat: '15+', label: 'Tahun Track Record' }, { stat: '20%+', label: 'Avg Return' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{item.stat}</div>
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
