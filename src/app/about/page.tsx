'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const timelineEvents = [
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
];

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Hasnur Group: Lebih dari 50 tahun membangun bisnis yang berkelanjutan dan berdampak sosial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Profil Perusahaan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hasnur Group merupakan suatu grup usaha yang didirikan oleh pengusaha asli Kalimantan, yaitu Almarhum H. Abdussamad Sulaiman HB beserta istri beliau Almarhumah Hj. Nurhayati yang merintis usaha di bidang angkutan sungai sebagai cikal bakal berdirinya Hasnur Group pada tahun 1966.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                HASNUR merupakan gabungan nama dari H. Abdussamad Sulaiman HB (HAS) dan Hj. Nurhayati (NUR). Dengan dedikasi dan kerja keras, Hasnur Group berkembang menjadi salah satu grup usaha terbesar di Indonesia dengan fokus pada industri energi, logistik, agribisnis, dan berbagai sektor lainnya.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hari ini, Hasnur Group beroperasi di berbagai lini bisnis dengan lebih dari 10,000 karyawan profesional yang berdedikasi tinggi dalam mengembangkan bisnis yang berkelanjutan dan memberikan dampak positif bagi masyarakat dan lingkungan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8"
            >
              <div className="text-center">
                <img 
                  src="/founder.png" 
                  alt="Founder Hasnur Group"
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">H. Abdussamad Sulaiman HB & Hj. Nurhayati</h3>
                <p className="text-gray-700 font-semibold">Pendiri Hasnur Group</p>
                <div className="text-gray-600 text-sm mt-4 space-y-3 text-left bg-white bg-opacity-50 p-4 rounded-lg">
                  <p><span className="font-semibold">H. Abdussamad Sulaiman HB</span> adalah tokoh pengusaha asli Kalimantan yang memulai bisnis dari nol dengan visi menjadi pengusaha terkemuka di Indonesia. Beliau mendirikan Hasnur Group pada tahun 1966 dengan memulai dari usaha angkutan sungai.</p>
                  <p><span className="font-semibold">Hj. Nurhayati</span> adalah pasangan hidup yang setia mendampingi perjalanan bisnis ini. Nama "HASNUR" adalah singkatan dari nama kedua pendiri: H. Abdussamad Sulaiman (HAS) dan Nurhayati (NUR).</p>
                  <p className="text-xs italic border-t pt-3">Kedua pendiri ini telah meninggal dunia, namun visi dan misi mereka terus dijaga oleh generasi penerus dan seluruh karyawan Hasnur Group hingga saat ini.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: '59', label: 'Tahun Berdiri' },
              { number: '10K+', label: 'Karyawan' },
              { number: '7', label: 'Strategic Business Units' },
              { number: '50+', label: 'Proyek Besar' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-lg"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
            {timelineEvents.map((event, idx) => (
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
                  {idx < timelineEvents.length - 1 && (
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

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi grup usaha terkemuka di Indonesia dan Asia Tenggara yang berkelanjutan, inovatif, dan memberikan dampak positif bagi masyarakat, lingkungan, dan stakeholder dengan mengedepankan integritas dan profesionalisme.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Misi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Mengembangkan berbagai lini bisnis secara profesional dan berkelanjutan, menciptakan lapangan kerja berkualitas, memberikan nilai tambah kepada stakeholder, serta berkontribusi aktif pada pembangunan ekonomi nasional dan kesejahteraan masyarakat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7 Strategic Business Units */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">7 Strategic Business Units</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hasnur Group memiliki 7 divisi strategis yang saling mendukung dan mengembangkan ekosistem bisnis yang kuat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6">
            {[
              { name: 'Logistik', icon: '📦', color: 'from-blue-500' },
              { name: 'Agro Forestry', icon: '🌳', color: 'from-green-500' },
              { name: 'Energi', icon: '⚡', color: 'from-yellow-500' },
              { name: 'Teknologi', icon: '💻', color: 'from-purple-500' },
              { name: 'Pendidikan', icon: '🎓', color: 'from-red-500' },
              { name: 'Konsumen', icon: '🛍️', color: 'from-pink-500' },
              { name: 'Investasi', icon: '💰', color: 'from-indigo-500' },
            ].map((sbu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${sbu.color} to-opacity-20 p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-5xl mb-3">{sbu.icon}</div>
                <h4 className="font-bold text-gray-900">{sbu.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
