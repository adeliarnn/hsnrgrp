'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EducationBusiness() {
  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">SBU Pendidikan</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pendidikan Berkualitas</h1>
            <p className="text-xl text-red-100 max-w-2xl">Komitmen mengembangkan pendidikan bertaraf internasional dengan pendekatan kearifan lokal</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Pendidikan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Hasnur Group melalui SBU Pendidikan berkomitmen mengembangkan pendidikan bertaraf internasional dengan pendekatan kearifan lokal dan religious.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan generasi muda dan berkontribusi pada pembangunan sumber daya manusia berkualitas.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-12 flex items-center justify-center">
              <span className="text-8xl">🎓</span>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Pendidikan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Pendidikan Dasar', desc: 'Sekolah Dasar dengan kurikulum internasional' },
                { title: 'Pendidikan Menengah', desc: 'SMP dan SMA dengan standar akademik tinggi' },
                { title: 'Pendidikan Tinggi', desc: 'Program universitas dan pelatihan profesional' },
                { title: 'Pelatihan Karyawan', desc: 'Program pengembangan SDM berkelanjutan' },
                { title: 'Beasiswa', desc: 'Program beasiswa untuk siswa berprestasi' },
                { title: 'Kemitraan Internasional', desc: 'Kolaborasi dengan institusi pendidikan dunia' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-6 bg-red-50 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-12 bg-gradient-to-r from-red-50 to-red-100 rounded-lg px-8">
            {[{ stat: '5K+', label: 'Siswa' }, { stat: '500+', label: 'Pendidik' }, { stat: '15+', label: 'Institusi' }, { stat: 'ISO 9001', label: 'Certified' }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
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
