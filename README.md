# PPB API - Penjualan Barang

Proyek ini adalah RESTful API untuk Sistem Penjualan Barang, dibangun menggunakan **Node.js**, **Express.js**, dan **Supabase** (PostgreSQL). Proyek ini merupakan bagian dari praktikum Pemrograman Perangkat Bergerak (PPB).

## Persyaratan Sistem
Pastikan perangkat Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- Git (opsional, untuk *cloning* repositori)
- [Postman](https://www.postman.com/) (untuk pengujian API)

## Struktur Basis Data (Supabase)
Pastikan Anda sudah menjalankan *query* berikut di SQL Editor Supabase Anda sebelum menjalankan program:

```sql
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

create table customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  address text
);

create table products (
  id uuid primary key default gen_random_uuid(),
  sku text unique,
  name text not null,
  description text,
  category_id uuid references categories(id),
  price numeric(12,2) default 0,
  stock integer default 0
);
```

## Cara Instalasi dan Menjalankan Program

1. **Clone Repositori (Jika menggunakan Git)**
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd PPB_API
   ```

2. **Instal Dependensi**
   Buka terminal di dalam folder proyek, lalu jalankan:
   ```bash
   npm install
   ```

3. **Konfigurasi *Environment Variables***
   - Buat sebuah file baru bernama `.env` di folder utama (sejajar dengan `package.json`).
   - Salin dan tempel format berikut ke dalam file `.env`:
     ```env
     SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
     SUPABASE_KEY=anon-public-key-anda
     PORT=3000
     ```
   - **Catatan:** Ganti `SUPABASE_URL` dan `SUPABASE_KEY` dengan kredensial yang bisa Anda dapatkan di menu **Project Settings -> API** di *dashboard* Supabase Anda.

4. **Jalankan Server API**
   Untuk mode *development* (otomatis me-*restart* server jika ada perubahan kode), jalankan:
   ```bash
   npm run dev
   ```
   Atau untuk mode *production*:
   ```bash
   npm start
   ```

5. **Server Berjalan**
   Jika berhasil, Anda akan melihat pesan berikut di terminal:
   ```text
   Server running on port 3000
   ```
   API Anda sekarang dapat diakses melalui `http://localhost:3000`

## Pengujian dengan Postman
Untuk cara menguji semua *endpoint* (GET, POST, PUT, DELETE), silakan lihat panduan JSON manual atau *import collection* yang telah disediakan pada saat praktikum.
