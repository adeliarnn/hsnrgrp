# Hasnur Group - Corporate Website

Website rejuvenasi resmi untuk PT Hasnur Group - perusahaan terkemuka di industri energi dan sumber daya alam Indonesia.

## 🌟 Fitur Utama

### Halaman Utama
- **Hero Section**: Pengenalan brand dengan call-to-action
- **Core Values Animation**: Animasi interaktif 7 nilai inti perusahaan yang berputar dinamis
- **Services Section**: Showcase 6 layanan utama
- **Statistics**: Statistik pencapaian perusahaan

### Halaman Lengkap
- **Home** (`/`): Landing page
- **About Us** (`/about`): Sejarah dan profil perusahaan
- **Services** (`/services`): Penjelasan detail semua layanan
- **Core Values** (`/core-values`): Nilai-nilai inti dengan animasi interaktif
- **Projects** (`/projects`): Portfolio proyek-proyek besar
- **Sustainability** (`/sustainability`): Komitmen keberlanjutan dan CSR

## 🛠️ Teknologi

- **Framework**: Next.js 16.2.6
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript 5
- **Runtime**: React 19.2.4

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Start production server
npm start
```

Server akan berjalan di `http://localhost:3000`

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── core-values/
│   │   └── page.tsx        # Core values page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   └── sustainability/
│       └── page.tsx        # Sustainability page
└── components/
    ├── Navigation.tsx              # Navigation bar
    ├── CoreValuesAnimation.tsx     # Animated core values circle
    ├── CoreValuesAnimation.module.css
    ├── Footer.tsx                 # Footer component
```

## 🎨 Core Values Animation

Fitur unggulan website ini adalah animasi 7 nilai inti yang berputar di halaman Core Values:

1. **Disiplin** (Ungu)
2. **Pantang Menyerah** (Merah)
3. **Keadilan** (Hijau)
4. **Kebersahaman** (Kuning)
5. **Bijaksana** (Biru)
6. **Kesatuan Sikap** (Cokelat)
7. **Dipercaya** (Oranye)

Setiap nilai ditampilkan dalam petal yang berputar mengelilingi logo pusat yang statis.

## 🚀 Deployment

Untuk deploy ke production:

```bash
npm run build
npm start
```

Atau deploy ke Vercel:
```bash
vercel deploy
```

## 📝 Konten

### Dalam Negara: Bahasa Indonesia
- Semua konten dan UI dalam bahasa Indonesia
- Konteks lokal Indonesia (Balikpapan, Kalimantan)
- Statistik dan pencapaian yang relevan dengan bisnis Indonesia

### Jenis Konten
- Company profile dan sejarah
- Deskripsi layanan detail
- Portfolio proyek
- Sustainability initiatives
- Contact information

## ✨ Fitur Responsif

Website fully responsive untuk:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔒 Best Practices

- ✅ TypeScript untuk type safety
- ✅ Modular component architecture
- ✅ SEO optimized metadata
- ✅ Accessible navigation
- ✅ Performance optimized
- ✅ Mobile-first design
- ✅ Dark mode ready foundation

## 📄 License

© 2026 Hasnur Group. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
