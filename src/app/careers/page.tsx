import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Careers() {
  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Karir di Hasnur Group</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Bergabunglah dengan tim profesional kami dan kembangkan potensi maksimal Anda
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mengapa Bergabung dengan Kami?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Peluang Pengembangan Karir</h4>
                    <p className="text-gray-600">Program pengembangan berkelanjutan dan jenjang karir yang jelas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Kompensasi Kompetitif</h4>
                    <p className="text-gray-600">Gaji, bonus, dan benefit yang kompetitif di industri</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Lingkungan Kerja Positif</h4>
                    <p className="text-gray-600">Budaya kerja yang inklusif, kolaboratif, dan inovatif</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Keselamatan & Kesejahteraan</h4>
                    <p className="text-gray-600">Standar keselamatan tertinggi dan program kesehatan komprehensif</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-lg h-96 flex items-center justify-center">
              <span className="text-8xl">👥</span>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Posisi yang Tersedia</h2>
            <p className="text-gray-600 mb-8">
              Kami secara aktif mencari talenta terbaik di berbagai bidang. Jika Anda tidak menemukan posisi yang sesuai, Anda tetap dapat mengirimkan CV Anda untuk pertimbangan di masa depan.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Engineer - Oil & Gas', location: 'Balikpapan', type: 'Full-time' },
                { title: 'Project Manager', location: 'Jakarta', type: 'Full-time' },
                { title: 'Safety Officer', location: 'Balikpapan', type: 'Full-time' },
                { title: 'Environmental Specialist', location: 'Balikpapan', type: 'Full-time' },
                { title: 'Finance Manager', location: 'Jakarta', type: 'Full-time' },
                { title: 'HR Officer', location: 'Jakarta', type: 'Full-time' },
              ].map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{job.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                    <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Lihat Details →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Magang</h3>
              <p className="text-gray-600 mb-6">
                Program magang intensif kami memberikan kesempatan bagi mahasiswa untuk mendapatkan pengalaman praktis di industri energi dan sumber daya alam.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Durasi: 3-6 bulan</li>
                <li>✓ Mentoring dari profesional berpengalaman</li>
                <li>✓ Proyek nyata dan meaningful</li>
                <li>✓ Kesempatan untuk bergabung sebagai karyawan tetap</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graduate Program</h3>
              <p className="text-gray-600 mb-6">
                Program khusus untuk fresh graduate yang ingin memulai karir profesional di perusahaan yang dinamis dan berkembang.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Pelatihan intensif 3 bulan</li>
                <li>✓ Mentoring dan coaching berkelanjutan</li>
                <li>✓ Rotasi departemen untuk exposure luas</li>
                <li>✓ Fast-track promotion untuk high performers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Mengembangkan Karir Anda?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Kirim CV dan cover letter Anda ke careers@hasnurgroup.com
          </p>
          <a
            href="mailto:careers@hasnurgroup.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Lamar Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
