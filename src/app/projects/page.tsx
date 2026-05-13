import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = [
    {
      name: 'Lapangan Mahakam Delta',
      category: 'Oil & Gas',
      year: '2015 - Present',
      description: 'Proyek produksi minyak bumi dan gas alam di perairan Mahakam.',
      status: 'Aktif',
      image: '⛽',
    },
    {
      name: 'Pembangkit Listrik Tenaga Surya Palu',
      category: 'Energi Terbarukan',
      year: '2018 - Present',
      description: 'Instalasi solar panel dengan kapasitas 50 MW di Sulawesi Tengah.',
      status: 'Operasional',
      image: '☀️',
    },
    {
      name: 'Pertambangan Batu Bara Kutai',
      category: 'Pertambangan',
      year: '2010 - Present',
      description: 'Operasi pertambangan batu bara dengan standar lingkungan internasional.',
      status: 'Operasional',
      image: '⛏️',
    },
    {
      name: 'Terminal LNG Balikpapan',
      category: 'Infrastruktur',
      year: '2016 - 2022',
      description: 'Pembangunan dan operasionalisasi terminal LNG dengan kapasitas ekspor 5 MTPA.',
      status: 'Selesai',
      image: '🚢',
    },
    {
      name: 'Pipeline Trans-Kalimantan',
      category: 'Infrastruktur',
      year: '2017 - Present',
      description: 'Pipeline gas alam sepanjang 1.200 km menghubungkan ladang ke pelabuhan.',
      status: 'Pengembangan',
      image: '🔧',
    },
    {
      name: 'Konsultasi Proyek Migas Asia Tenggara',
      category: 'Konsultasi',
      year: '2020 - Present',
      description: 'Layanan konsultasi teknis dan manajemen proyek untuk operator internasional.',
      status: 'Aktif',
      image: '📊',
    },
  ];

  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portofolio Proyek</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Lebih dari 25 tahun track record dalam menjalankan proyek besar dan kompleks
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-br from-blue-400 to-purple-400 h-32 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Operasional' || project.status === 'Selesai'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'Aktif'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <p className="text-sm text-gray-700 font-semibold">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Pencapaian Signifikan</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Juta Barel Minyak Terproduksi</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">15B+</div>
              <p className="text-gray-600">Cubic Meter Gas Terjual</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">50M</div>
              <p className="text-gray-600">Ton Batu Bara Ditambang</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50B+</div>
              <p className="text-gray-600">Total Investasi Dikembangkan</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
