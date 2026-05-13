'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CoreValuesAnimation from '@/components/CoreValuesAnimation';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef(null);
  const businessRef = useRef(null);
  
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: heroRef,
    offset: ['start start', 'end center'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: businessRef,
    offset: ['start end', 'end start'],
  });

  const heroY = useTransform(scrollYProgress1, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress1, [0, 1], [1, 0.5]);
  const businessScale = useTransform(scrollYProgress2, [0, 0.5, 1], [0.95, 1, 0.95]);

  const businesses = [
    {
      title: 'Logistik',
      desc: 'Mendukung bisnis di lingkungan Hasnur Group dan mitra bisnis lainnya dengan solusi logistik terpadu',
      icon: '📦',
      color: 'from-blue-500'
    },
    {
      title: 'Agro Forestry',
      desc: 'Pengalaman dalam kehutanan dan perkebunan dengan standar keberlanjutan internasional',
      icon: '🌳',
      color: 'from-green-500'
    },
    {
      title: 'Energi',
      desc: 'Visi menjadi perusahaan energi terkemuka dengan kapasitas produksi yang terus meningkat',
      icon: '⚡',
      color: 'from-yellow-500'
    },
    {
      title: 'Teknologi & Layanan',
      desc: 'Pengembangan teknologi dan jasa layanan untuk transformasi digital',
      icon: '💻',
      color: 'from-purple-500'
    },
    {
      title: 'Pendidikan',
      desc: 'Pendidikan berkualitas internasional dengan pendekatan kearifan lokal',
      icon: '🎓',
      color: 'from-red-500'
    },
    {
      title: 'Konsumen',
      desc: 'Bisnis di bidang media, gaya hidup dan kesehatan untuk masyarakat luas',
      icon: '🛍️',
      color: 'from-pink-500'
    },
    {
      title: 'Investasi',
      desc: 'Mengembangkan berbagai bisnis melalui dukungan investasi strategis',
      icon: '💰',
      color: 'from-indigo-500'
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          style={{ y: heroY }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-white bg-opacity-20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 drop-shadow-lg font-bold">
                  🚀 Hasnur Group - Established 1966
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Membangun Masa Depan Berkelanjutan
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Hasnur Group adalah grup usaha terkemuka dengan 7 divisi strategis yang berkontribusi pada pembangunan ekonomi nasional dan kesejahteraan masyarakat.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
                >
                  Tentang Kami
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition inline-block"
                >
                  Hubungi Kami
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm"
              >
                <div className="bg-gradient-to-br from-yellow-300 to-red-400 rounded-lg h-96 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">🏢</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values with Rotating Border */}
      <CoreValuesAnimation />

      {/* Timeline Section - Perjalanan Hasnur Group */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perjalanan Hasnur Group</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari tahun 1966 hingga sekarang, Hasnur Group terus berinovasi dan berkembang
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '1966', title: 'Pendirian Hasnur Group', desc: 'H. Abdussamad Sulaiman HB dan Hj. Nurhayati merintis usaha di bidang angkutan sungai sebagai cikal bakal berdirinya Hasnur Group. Dengan modal nekat dan dedikasi tinggi, mereka membangun fondasi bisnis yang kokoh di Kalimantan.' },
              { year: '1982', title: 'Pendirian PS Barito Putera', desc: 'Sebagai bentuk tanggung jawab sosial, H. Abdussamad Sulaiman HB mendirikan klub sepakbola profesional PS Barito Putera yang menjadi kebanggaan masyarakat Kalimantan Selatan.' },
              { year: '1988', title: 'Ekspansi ke Pertambangan & Agribisnis', desc: 'Hasnur Group memulai ekspansi ke bidang pertambangan batubara dan perkebunan kelapa sawit, memperluas jejak bisnis ke sektor primer yang strategis.' },
              { year: '1992', title: 'Infrastruktur Logistik & Pelabuhan', desc: 'Hasnur Group memiliki fasilitas jalan hauling dan pelabuhan khusus batubara di Kalimantan Selatan, memperkuat posisi sebagai pemain logistik utama.' },
              { year: '2000', title: 'Diversifikasi ke Jasa Profesional', desc: 'Hasnur Group semakin berkembang dengan menjalankan usaha di bidang jasa layanan, konsultasi, dan engineering untuk mendukung proyek-proyek skala besar.' },
              { year: '2006', title: 'Masuk ke Industri Media & Hiburan', desc: 'Hasnur Group memulai usaha di bidang media dan broadcasting, menciptakan konten berkualitas dan memberikan nilai hiburan kepada masyarakat Indonesia.' },
              { year: '2009', title: 'Pendirian Yayasan Hasnur Centre', desc: 'Komitmen sosial berlanjut dengan pembentukan Yayasan Hasnur Centre yang fokus pada pendidikan, kesehatan, dan pemberdayaan masyarakat setempat.' },
              { year: '2010', title: 'Transformasi Digital & TI', desc: 'Hasnur Group mengembangkan divisi Teknologi Informasi untuk mendukung transformasi digital internal dan menyediakan solusi IT berkualitas tinggi bagi klien.' },
              { year: '2011', title: 'Pabrik Kelapa Sawit & Ekspansi Energi', desc: 'Meresmikan Pabrik Kelapa Sawit terintegrasi di Kalimantan Selatan dan pelabuhan batubara di Kalimantan Tengah, memperkuat posisi di energi dan agribisnis.' },
              { year: '2013', title: 'Divisi Jasa Konstruksi', desc: 'Hasnur Group semakin berkembang dalam bidang jasa konstruksi dan engineering, mengerjakan proyek infrastruktur dan industri skala nasional.' },
              { year: '2015', title: 'Komitmen Energi Terbarukan', desc: 'Hasnur Group meningkatkan eksistensi di bidang energi terbarukan dan logistik hijau, sejalan dengan komitmen keberlanjutan lingkungan.' },
              { year: '2018', title: 'Sektor Pendidikan & SDM', desc: 'Pengembangan bisnis di sektor pendidikan melalui pendirian sekolah dan universitas berkualitas, menciptakan talenta unggul untuk masa depan Indonesia.' },
              { year: '2021', title: '7 Strategic Business Units', desc: 'Restrukturisasi organisasi menjadi 7 divisi strategis: Logistik, Agro Forestry, Energi, Teknologi & Layanan, Pendidikan, Konsumen, dan Investasi yang saling sinergis.' },
              { year: '2025', title: 'Visi 2030 - Pertumbuhan Berkelanjutan', desc: 'Hasnur Group terus berinovasi dengan fokus pada transformasi digital, energi terbarukan, dan pembangunan berkelanjutan sambil mempertahankan nilai-nilai integrasitas bisnis.' },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="flex gap-8 items-start"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.3 }}
                  ></motion.div>
                  {idx < 14 - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-blue-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{event.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Strategic Business Units */}
      <section ref={businessRef} className="py-20 bg-white relative">
        <motion.div
          style={{ scale: businessScale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              7 Strategic Business Units
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Hasnur Group mengembangkan berbagai lini bisnis yang saling mendukung menciptakan ekosistem bisnis yang kuat dan berkelanjutan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4 mb-12">
            {businesses.map((business, index) => (
              <motion.a
                key={index}
                href={`/business/${business.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)' }}
                className={`bg-gradient-to-br ${business.color} to-opacity-10 p-6 rounded-lg hover:shadow-lg transition-all text-center`}
              >
                <div className="text-5xl mb-3">{business.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{business.title}</h4>
              </motion.a>
            ))}
          </div>

          {/* Business Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{business.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{business.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {business.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Mencapai Keunggulan
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Komitmen Hasnur Group terhadap pertumbuhan berkelanjutan dan inovasi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '59', label: 'Tahun Berdiri' },
              { stat: '10K+', label: 'Karyawan Profesional' },
              { stat: '50+', label: 'Proyek Besar' },
              { stat: '7', label: 'Divisi Strategis' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <p className="text-gray-600 font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Jangkauan Global
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Hasnur Group memiliki kantor dan operasional di berbagai lokasi strategis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'Jakarta',
                address: 'Office 8 Building 7th Floor, Jl. Senopati No. 8B, Jakarta Selatan',
                phone: '+62-21-2934-3888',
                type: 'Kantor Pusat'
              },
              {
                city: 'South Kalimantan',
                address: 'Jl. Berangas Timur No.95 A, Alalak, Kalimantan Selatan 70582',
                phone: '+62-541-XXXXXX',
                type: 'Kantor Perwakilan'
              },
              {
                city: 'Central Kalimantan',
                address: 'Jl. G.Obos No.88 A, Palangkaraya, Kalimantan Tengah 73112',
                phone: '+62-536-XXXXXX',
                type: 'Kantor Perwakilan'
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.city}</h3>
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {location.type}
                </span>
                <p className="text-gray-600 mb-3">
                  <strong>Alamat:</strong> {location.address}
                </p>
                <p className="text-gray-600">
                  <strong>Telepon:</strong> {location.phone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
