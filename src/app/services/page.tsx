import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: 'Eksplorasi & Produksi Minyak Bumi',
      description: 'Dengan teknologi terdepan dan expertise yang mendalam, kami menjalankan operasi eksplorasi dan produksi minyak bumi yang efisien dan berkelanjutan.',
      icon: '⛽',
      details: [
        'Eksplorasi seismic 2D dan 3D',
        'Pengeboran sumur eksplorasi dan produksi',
        'Produksi dan optimasi lapangan',
        'Manajemen keselamatan dan lingkungan',
      ]
    },
    {
      title: 'Gas Alam & LNG',
      description: 'Kami mengembangkan dan mengelola sumber daya gas alam dengan standar internasional tertinggi.',
      icon: '🔥',
      details: [
        'Pengembangan lapangan gas alam',
        'Infrastruktur penyimpanan dan distribusi',
        'Proses likuifikasi dan penanganan LNG',
        'Layanan transportasi gas',
      ]
    },
    {
      title: 'Energi Terbarukan',
      description: 'Investasi kami dalam energi terbarukan mencerminkan komitmen terhadap pembangunan berkelanjutan.',
      icon: '☀️',
      details: [
        'Pembangkit listrik tenaga surya',
        'Pembangkit listrik tenaga angin',
        'Sistem penyimpanan energi',
        'Konsultasi efisiensi energi',
      ]
    },
    {
      title: 'Pertambangan Mineral',
      description: 'Operasi pertambangan kami menggabungkan produktivitas tinggi dengan tanggung jawab lingkungan.',
      icon: '⛏️',
      details: [
        'Pertambangan batu bara',
        'Pertambangan mineral logam',
        'Pengolahan dan pemurnian',
        'Reklamasi lahan pasca penambangan',
      ]
    },
    {
      title: 'Infrastruktur Energi',
      description: 'Kami membangun infrastruktur kritis yang mendukung distribusi energi di seluruh wilayah.',
      icon: '🏗️',
      details: [
        'Pipeline dan sistem transportasi',
        'Terminal petrolium dan gas',
        'Jaringan kelistrikan',
        'Fasilitas pemrosesan dan penyimpanan',
      ]
    },
    {
      title: 'Layanan Konsultasi',
      description: 'Tim expert kami menyediakan konsultasi strategis untuk proyek-proyek energi yang kompleks.',
      icon: '📋',
      details: [
        'Studi kelayakan proyek',
        'Analisis dampak lingkungan',
        'Optimasi operasional',
        'Pelatihan dan pengembangan SDM',
      ]
    },
  ];

  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Solusi komprehensif di seluruh spektrum industri energi dan sumber daya alam
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Keunggulan Kompetitif Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Teknologi Canggih</h3>
              <p className="text-gray-600">
                Investasi berkelanjutan dalam teknologi terbaru memastikan efisiensi operasional maksimal dan keselamatan kerja.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tim Profesional</h3>
              <p className="text-gray-600">
                Karyawan berpengalaman dan terlatih dengan kompetensi internasional di setiap lini bisnis kami.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standar Lingkungan</h3>
              <p className="text-gray-600">
                Komitmen terhadap praktik lingkungan yang berkelanjutan dan tanggung jawab sosial korporat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
