# Admin Panel Guide - Hasnur Group

## Overview
Sistem admin Hasnur Group memungkinkan Anda untuk mengelola konten website seperti slider images, berita, dan artikel dengan mudah.

## Akses Admin Panel

### URL
```
http://localhost:3000/admin/login
```

### Default Credentials (untuk demo)
- **Username**: `admin`
- **Password**: `Admin@123456`

> ⚠️ **PENTING**: Ubah credentials ini di file `.env.local` sebelum production!

## Struktur Admin Panel

### 1. Dashboard (`/admin/dashboard`)
Halaman utama admin yang menampilkan:
- Jumlah slider images
- Jumlah berita
- Quick actions untuk menambah konten baru

### 2. Slider Images (`/admin/slider`)
Kelola image slider di halaman depan website.

**Features:**
- ✅ Tambah slider baru
- ✅ Edit slider yang sudah ada
- ✅ Hapus slider
- ✅ Set order/urutan tampilan
- ✅ Aktif/non-aktifkan slider
- ✅ Tambah deskripsi dan link

**Form Fields:**
| Field | Type | Required | Keterangan |
|-------|------|----------|-----------|
| Judul | Text | ✅ | Judul slider |
| Deskripsi | Text Area | ❌ | Deskripsi/caption slider |
| Image URL | URL | ✅ | Link gambar |
| Link | URL | ❌ | Link tombol CTA |
| Order | Number | ❌ | Urutan tampilan (0, 1, 2, ...) |
| Aktif | Checkbox | ❌ | Aktif di website |

**Contoh Image URL:**
```
https://example.com/image1.jpg
/Desain Hasnur (1).png  (local dari /public)
```

### 3. Berita & Artikel (`/admin/news`)
Kelola artikel dan berita website.

**Features:**
- ✅ Tulis berita baru
- ✅ Edit berita
- ✅ Hapus berita
- ✅ Publish/draft status
- ✅ Kelola kategori dan author

**Form Fields:**
| Field | Type | Required | Keterangan |
|-------|------|----------|-----------|
| Judul | Text | ✅ | Judul artikel |
| Konten | Text Area | ✅ | Isi artikel lengkap |
| Ringkasan | Text Area | ❌ | Excerpt/preview |
| Kategori | Text | ❌ | Kategori artikel |
| Author | Text | ❌ | Penulis artikel |
| Publish | Checkbox | ❌ | Publish sekarang |

## Setup & Configuration

### 1. Environment Variables
Buat file `.env.local` di root project:

```
# MongoDB (opsional, untuk production)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hasnurgroup?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_SECRET=your-secret-key-min-32-characters
NEXTAUTH_URL=http://localhost:3000

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=Your_Secure_Password_123
```

### 2. Menjalankan Project

**Development:**
```bash
npm run dev
# Akses: http://localhost:3000
```

**Production:**
```bash
npm run build
npm start
```

### 3. Database (MongoDB)
Saat ini sistem admin bisa berjalan tanpa database untuk demo. Untuk production dengan persistent storage:

1. Buat akun MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
2. Buat cluster
3. Dapatkan connection string
4. Masukkan ke `MONGODB_URI` di `.env.local`

## API Endpoints

### Slider Images
```
GET  /api/content/slider           - Dapatkan semua slider
POST   /api/content/slider           - Buat slider baru
PUT    /api/content/slider/[id]      - Update slider
DELETE /api/content/slider/[id]      - Hapus slider
```

### Berita
```
GET  /api/content/news             - Dapatkan semua berita
POST   /api/content/news             - Buat berita baru
PUT    /api/content/news/[id]        - Update berita
DELETE /api/content/news/[id]        - Hapus berita
```

### Authentication
```
POST   /api/auth/signin             - Login
POST   /api/auth/signout            - Logout
GET    /api/auth/session            - Get session info
```

## Tips & Best Practices

### Slider Images
1. **Optimasi ukuran gambar** - Gunakan gambar dengan ukuran yang sama (misal 1920x1080)
2. **Format recommended** - JPG untuk foto, PNG untuk desain
3. **Order** - Set order jika ingin mengontrol urutan tampilan
4. **Link** - Tinggalkan kosong jika tidak ingin tombol CTA

### Berita
1. **Slug otomatis** - Slug dibuat otomatis dari judul
2. **Kategori** - Gunakan kategori yang konsisten
3. **Draft vs Published** - Gunakan draft untuk artikel yang belum siap
4. **Author** - Default: Admin (bisa diubah)

## Security Notes

⚠️ **JANGAN LAKUKAN:**
- ❌ Commit `.env.local` ke repository
- ❌ Gunakan password default di production
- ❌ Share credentials dengan orang lain
- ❌ Expose `NEXTAUTH_SECRET`

✅ **LAKUKAN:**
- ✅ Ganti password & secret di production
- ✅ Gunakan HTTPS untuk production
- ✅ Backup database secara berkala
- ✅ Update dependencies secara rutin

## Troubleshooting

### Login tidak bisa?
- Periksa `.env.local` apakah sudah sesuai
- Pastikan `NEXTAUTH_SECRET` di-set
- Coba clear cookies dan refresh

### API error?
- Periksa browser console (F12 → Network tab)
- Lihat server logs untuk error detail
- Pastikan MongoDB connection jika pakai production

### Slider tidak muncul di homepage?
- Pastikan `isActive` di-check saat create/update
- Cek image URL apakah accessible
- Lihat browser console untuk image loading errors

## Development

### Folder Structure
```
src/app/admin/          - Admin pages & layouts
src/app/api/           - API routes
src/components/HeroSlider.tsx  - Slider component
lib/auth.ts            - NextAuth configuration
lib/mongodb.ts         - MongoDB connection
models/               - Database models
```

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Auth**: NextAuth.js
- **Database**: MongoDB + Mongoose
- **UI**: Tailwind CSS + Framer Motion
- **Slider**: Swiper.js

## Support & Updates

Untuk update atau bantuan:
1. Cek dokumentasi Next.js: https://nextjs.org/docs
2. NextAuth.js docs: https://next-auth.js.org
3. MongoDB docs: https://docs.mongodb.com

---

**Last Updated**: 13 Mei 2026
**Version**: 1.0
