import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Sustainability() {
  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Keberlanjutan</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Komitmen kami terhadap lingkungan dan pembangunan berkelanjutan
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Pilar Keberlanjutan Kami
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lingkungan</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Pengurangan emisi karbon hingga 40% pada 2030</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Program reboisasi dan konservasi alam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Manajemen air dan limbah yang ketat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Investasi energi terbarukan</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sosial</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Keselamatan kerja dengan tingkat zero accident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Program pengembangan karyawan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Kontribusi pemberdayaan masyarakat lokal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Program pendidikan dan kesehatan</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ekonomi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Pertumbuhan berkelanjutan dan profitabilitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Penciptaan lapangan kerja baru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Kontribusi pajak dan royalti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Kemitraan dengan supplier lokal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SDG Alignment</h2>
            <p className="text-gray-600 mb-8">
              Hasnur Group align dengan 11 dari 17 Sustainable Development Goals (SDGs) PBB:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'SDG 3: Good Health',
                'SDG 4: Quality Education',
                'SDG 5: Gender Equality',
                'SDG 7: Affordable Energy',
                'SDG 8: Decent Work',
                'SDG 9: Industry Innovation',
                'SDG 10: Reduced Inequality',
                'SDG 12: Responsible Consumption',
                'SDG 13: Climate Action',
                'SDG 15: Life on Land',
                'SDG 17: Partnerships',
              ].map((sdg, index) => (
                <div key={index} className="bg-white p-4 rounded border-l-4 border-green-600">
                  <p className="text-sm font-semibold text-gray-900">{sdg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program CSR Unggulan</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-gray-900">Beasiswa Pendidikan</h4>
                  <p className="text-gray-600 text-sm">Memberikan beasiswa kepada 1000+ anak dari keluarga kurang mampu setiap tahunnya</p>
                </li>
                <li>
                  <h4 className="font-bold text-gray-900">Klinik Kesehatan Gratis</h4>
                  <p className="text-gray-600 text-sm">Layanan kesehatan gratis di 10 lokasi operasi untuk masyarakat sekitar</p>
                </li>
                <li>
                  <h4 className="font-bold text-gray-900">Pemberdayaan UMKM</h4>
                  <p className="text-gray-600 text-sm">Program pelatihan dan pendampingan untuk 500+ UMKM lokal</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target 2030</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-gray-900">Dekarbonisasi Operasional</h4>
                  <p className="text-gray-600 text-sm">Mengurangi emisi karbon dari operasi kami sebesar 40%</p>
                </li>
                <li>
                  <h4 className="font-bold text-gray-900">Energi Terbarukan</h4>
                  <p className="text-gray-600 text-sm">Meningkatkan porsi energi terbarukan hingga 30% dari total produksi</p>
                </li>
                <li>
                  <h4 className="font-bold text-gray-900">Zero Waste</h4>
                  <p className="text-gray-600 text-sm">Mencapai status zero waste di semua lokasi operasional</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
