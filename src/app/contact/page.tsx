import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Kami siap membantu Anda dengan pertanyaan atau kebutuhan bisnis Anda
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Kantor Pusat */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kantor Pusat</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">PT Hasnur Group</p>
                <p>Jl. Jenderal Sudirman No. 123</p>
                <p>Balikpapan 76125</p>
                <p>East Kalimantan, Indonesia</p>
                <p className="pt-4">
                  <strong>Phone:</strong><br />
                  +62-541-123-4567<br />
                  +62-541-123-4568
                </p>
                <p>
                  <strong>Email:</strong><br />
                  info@hasnurgroup.com
                </p>
              </div>
            </div>

            {/* Kantor Jakarta */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kantor Jakarta</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">PT Hasnur Group</p>
                <p>Jl. Thamrin No. 456</p>
                <p>Menteng, Jakarta Pusat 10350</p>
                <p>Indonesia</p>
                <p className="pt-4">
                  <strong>Phone:</strong><br />
                  +62-21-987-6543<br />
                  +62-21-987-6544
                </p>
                <p>
                  <strong>Email:</strong><br />
                  jakarta@hasnurgroup.com
                </p>
              </div>
            </div>

            {/* Informasi Lainnya */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informasi Lainnya</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Jam Kerja</p>
                  <p className="text-sm">Senin - Jumat: 08:00 - 17:00</p>
                  <p className="text-sm">Sabtu & Minggu: Tutup</p>
                </div>
                <div>
                  <p className="font-semibold">HR & Recruitment</p>
                  <p className="text-sm">careers@hasnurgroup.com</p>
                </div>
                <div>
                  <p className="font-semibold">Media & Hubungan</p>
                  <p className="text-sm">media@hasnurgroup.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kirim Pesan Kepada Kami</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+62-..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Subjek pesan Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Lokasi Kami</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-6xl mb-4">📍</p>
                  <p className="font-semibold">Kantor Pusat</p>
                  <p className="text-sm">Balikpapan, East Kalimantan</p>
                  <p className="text-sm mt-4 text-gray-500">Embed Google Map di sini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
