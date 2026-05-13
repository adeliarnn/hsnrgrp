'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutOwner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          Kepemimpinan Visioner
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Didorong oleh visi untuk mengubah industri energi dengan inovasi dan integritas
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Owner Image with 3D Effect */}
          <motion.div
            style={{ y, opacity }}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: 'spring' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="/owner.svg"
                alt="Owner Hasnur Group"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Haji Isam</h3>
            <p className="text-xl text-blue-600 font-semibold mb-6">Founder & Chairman</p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dengan pengalaman lebih dari 25 tahun di industri energi dan sumber daya alam, Haji Isam adalah visioner yang telah membawa Hasnur Group dari startup kecil menjadi pemain utama di sektor industri ekstraktif Indonesia.
              </p>

              <p>
                Kepemimpinannya yang kuat didasarkan pada prinsip-prinsip integritas, inovasi berkelanjutan, dan tanggung jawab sosial. Beliau percaya bahwa kesuksesan bisnis harus berjalan seiring dengan komitmen terhadap lingkungan dan masyarakat lokal.
              </p>

              <p>
                Di bawah kepemimpinannya, Hasnur Group telah mengembangkan portofolio yang beragam mencakup eksplorasi minyak dan gas, energi terbarukan, pertambangan, dan infrastruktur energi dengan standar keselamatan dan lingkungan kelas dunia.
              </p>

              <div className="pt-6">
                <h4 className="font-bold text-gray-900 mb-3">Fokus Strategis:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">•</span>
                    <span>Transformasi digital dan inovasi teknologi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">•</span>
                    <span>Transisi energi menuju masa depan yang berkelanjutan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">•</span>
                    <span>Pengembangan sumber daya manusia berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-lg">•</span>
                    <span>Kemitraan strategis regional dan internasional</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Tim Eksekutif Kami
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Ahmad Ridho',
                role: 'Chief Operating Officer',
                desc: 'Memimpin operasional dengan pengalaman 20+ tahun di sektor energi',
                icon: '⚙️',
              },
              {
                name: 'Ir. Bambang Sutrisno',
                role: 'Chief Technical Officer',
                desc: 'Innovator di jantung teknologi dan pengembangan proyek kami',
                icon: '🔬',
              },
              {
                name: 'Siti Nurhaliza',
                role: 'Chief Financial Officer',
                desc: 'Mengelola keuangan dan strategi investasi perusahaan',
                icon: '💰',
              },
              {
                name: 'Muhammad Zainul',
                role: 'VP Eksplorasi & Produksi',
                desc: 'Mengembangkan proyek minyak dan gas berkualitas tinggi',
                icon: '🛢️',
              },
              {
                name: 'Lidia Wijaya',
                role: 'VP Keberlanjutan & ESG',
                desc: 'Memastikan operasi berkelanjutan dan tanggung jawab sosial',
                icon: '🌍',
              },
              {
                name: 'Rendra Gunawan',
                role: 'VP Teknologi & Digital',
                desc: 'Mentransformasi bisnis melalui teknologi digital dan inovasi',
                icon: '💻',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
