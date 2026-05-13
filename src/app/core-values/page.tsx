import Navigation from '@/components/Navigation';
import CoreValuesAnimation from '@/components/CoreValuesAnimation';
import Footer from '@/components/Footer';

export default function CoreValues() {
  const valuesDetails = [
    {
      name: 'Disiplin',
      color: '#A64D9A',
      description: 'Kami berkomitmen pada kepatuhan terhadap aturan, regulasi, dan standar industri internasional dalam setiap aspek operasi kami.',
    },
    {
      name: 'Pantang Menyerah',
      color: '#E63946',
      description: 'Semangat pantang menyerah mendorong kami untuk mengatasi tantangan dan mencapai target ambisius kami.',
    },
    {
      name: 'Keadilan',
      color: '#4CAF50',
      description: 'Kami percaya pada perlakuan yang adil dan setara bagi semua pemangku kepentingan, baik internal maupun eksternal.',
    },
    {
      name: 'Kebersahaman',
      color: '#FFEB3B',
      description: 'Kemampuan untuk beradaptasi dengan perubahan pasar dan kondisi bisnis sambil tetap fokus pada visi jangka panjang.',
    },
    {
      name: 'Bijaksana',
      color: '#2196F3',
      description: 'Pengambilan keputusan yang matang dan pertimbangan mendalam dalam setiap strategi bisnis dan operasional.',
    },
    {
      name: 'Kesatuan Sikap',
      color: '#8B6F47',
      description: 'Kohesi dan keselarasan tujuan di seluruh organisasi menciptakan kekuatan yang powerful dan terukur.',
    },
    {
      name: 'Dipercaya',
      color: '#FF9800',
      description: 'Kepercayaan adalah fondasi hubungan kami dengan mitra, karyawan, dan komunitas yang kami layani.',
    },
  ];

  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nilai-Nilai Inti Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Tujuh pilar yang membimbing setiap keputusan, tindakan, dan interaksi kami
          </p>
        </div>
      </section>

      <CoreValuesAnimation />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Makna Setiap Nilai
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {valuesDetails.map((value, index) => (
              <div key={index} className="flex gap-6">
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: value.color }}
                >
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Penerapan Nilai-Nilai Kami</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
            Nilai-nilai ini bukan hanya pernyataan filosofis, tetapi panduan praktis yang membentuk budaya perusahaan kami sehari-hari.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Dalam Bisnis</h3>
              <p>Kami mengambil keputusan bisnis yang menguntungkan semua stakeholder dengan integritas penuh.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Dalam Operasi</h3>
              <p>Standar keselamatan, kualitas, dan lingkungan diterapkan secara konsisten di setiap lokasi operasional.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Dalam Komunitas</h3>
              <p>Kami berkontribusi positif pada masyarakat lokal melalui program CSR dan pengembangan berkelanjutan.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
