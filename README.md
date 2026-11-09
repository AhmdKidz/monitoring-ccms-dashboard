# 🏗️ Dashboard Monitoring ADKON & CCMS — PT Wijaya Karya (Persero) Tbk
### Divisi Infrastruktur 1 | Sub Divisi Contract Management

Dashboard pemantauan kepatuhan administrasi kontrak (20 parameter dokumen kontraktual) secara interaktif, *real-time*, dan berbasis data *live* Google Sheets untuk 51 proyek di wilayah Departemen Operasi 1, 2, dan 3.

---

## 📌 Daftar Isi
1. [Ringkasan Proyek & Output Deliverables](#-ringkasan-proyek--output-deliverables)
2. [Arsitektur & Komponen Utama](#-arsitektur--komponen-utama)
3. [Panduan Serah Terima (Handover Checklist)](#-panduan-serah-terima-handover-checklist)
4. [Cara Menjalankan & Memasang (Deployment Guide)](#-cara-menjalankan--memasang-deployment-guide)
   - [Opsi A: Google Apps Script Web App (Rekomendasi untuk Stakeholder)](#opsi-a-google-apps-script-web-app-rekomendasi)
   - [Opsi B: Hosting Mandiri / GitHub Pages / Intranet Web](#opsi-b-hosting-mandiri--github-pages)
   - [Opsi C: Menjalankan Secara Offline di Komputer Lokal](#opsi-c-menjalankan-secara-offline)
5. [Struktur Database Google Sheet & Cara Pemeliharaan](#-struktur-database-google-sheet--pemeliharaan)
6. [Struktur Folder & Berkas Proyek](#-struktur-folder--berkas-proyek)
7. [Kontak & Dukungan Teknis](#-kontak--dukungan-teknis)

---

## 📦 Ringkasan Proyek & Output Deliverables

Seluruh hasil kerja dalam proyek ini siap pakai dan terbagi dalam 5 kategori deliverables:

| No | Deliverable | Berkas / Lokasi | Deskripsi |
|:--:|:---|:---|:---|
| 1 | **Web Dashboard Utama** | `index.html` + folder `assets/` | File web frontend responsif dengan Tailwind CSS, Chart.js, Sidebar Freeze, Kalender Agenda Multi-tahun, Mode Light/Dark sebaris, dan auto-sync Google Sheet. |
| 2 | **Single-File Apps Script** | `appscript/Index.html` + `appscript/Code.gs` | Versi mandiri *(self-contained)* dengan semua logo dan vektor SVG di-embed langsung sebagai data URI Base64. Siap di-deploy langsung pada Google Apps Script. |
| 3 | **Database Spreadsheet** | [Google Sheets (CCMS Monitoring Data)](https://docs.google.com/spreadsheets/d/1XQ-IuSesAKrggw6w2sGTXox8W3LRNFzRnmc3vlZCX6Y/edit?usp=sharing) | Sumber data kebenaran (*single source of truth*) 51 proyek dengan 20 kolom parameter dokumen checklist. |
| 4 | **File Desain & Vektor UI** | `WIKA_CCMS_Monitoring.fig`<br>`WIKA_CCMS_Monitoring.figcraft`<br>`assets/*.svg` | Berkas mentahan Figma & FigCraft yang telah dirapikan sesuai standar Atomic Design System WIKA. |
| 5 | **Repositori Kode (Git)** | [GitHub Repository](https://github.com/AhmdKidz/monitoring-ccms-dashboard.git) | Repositori pusat version control untuk memudahkan pembaruan kode secara kolaboratif. |

---

## ⚙️ Arsitektur & Komponen Utama

- **Data Binding Otomatis**: Web membaca Google Sheet melalui **Google Visualization API (JSONP)** tanpa memerlukan server/database berbayar.
- **Auto-Polling 60 Detik**: Jika staf lapangan mengubah status centang di Google Sheet, dashboard otomatis memperbarui seluruh indikator, persentase, diagram pie, bar, matriks, dan daftar prioritas tanpa perlu refresh halaman.
- **Sidebar Freeze (Sticky)**: Sidebar kiri tetap mengunci di posisinya saat halaman digulir ke bawah, dengan ilustrasi skyline gedung tetap tampak utuh.
- **Mode Gelap / Terang Terintegrasi**: Tombol tema disatukan dalam satu grup dengan tombol Reset Filter sehingga hemat ruang dan tidak pecah ke baris baru.
- **Kalender Interaktif Multi-Tahun**: Mendukung penjelajahan bulan/tahun bebas (2025–2028) dan pencatatan agenda manual dengan 5 pilihan warna marker (tersimpan di `localStorage`).
- **Analisis 20 Parameter Dokumen**:
  - **14 Dokumen Contract Management (CM)**: CCMS, Dokumen Kontrak, SPP, SPMK, BASTL, Jaminan Uang Muka, Jaminan Pelaksanaan, Polis Asuransi CAR, TDK, RKP Bab 12, Checklist Progress, Executive Summary, EoT, MoM Eksternal.
  - **6 Dokumen Perubahan (VO)**: Input CCMS, Notis Klaim, Klaim Waktu, Proposal Perubahan, Berita Acara Kesepakatan (BAK), Amandemen Kontrak.

---

## 📋 Panduan Serah Terima (Handover Checklist)

Bila Anda ingin menyerahkan proyek ini kepada orang lain (rekan kerja, atasan, tim IT, atau klien), lakukan 5 langkah berikut:

### 1. Serahkan Hak Akses Google Sheet
1. Buka spreadsheet: [CCMS Monitoring Data (Google Sheets)](https://docs.google.com/spreadsheets/d/1XQ-IuSesAKrggw6w2sGTXox8W3LRNFzRnmc3vlZCX6Y/edit?usp=sharing).
2. Klik tombol **Share (Bagikan)** di pojok kanan atas.
3. Masukkan email orang yang dituju, pilih peran **Editor** (atau jadikan **Owner / Pemilik** jika pengalihan penuh).
4. Pastikan akses umum (*General Access*) minimal **"Anyone with the link can view"** agar API pembacaan dashboard tetap aktif.

### 2. Berikan URL Web App Google Apps Script Aktif
Agar penerima tidak perlu repot memasang aplikasi atau membuka terminal, berikan URL Web App yang sudah jadi (atau ikuti langkah deploy di bawah). Penerima cukup mengklik link tersebut di browser (Chrome, Edge, Safari, HP/Tablet).

### 3. Berikan Hak Akses ke Repositori GitHub
Jika penerima adalah seorang programmer / tim teknis:
1. Buka [GitHub AhmdKidz/monitoring-ccms-dashboard](https://github.com/AhmdKidz/monitoring-ccms-dashboard).
2. Masuk ke **Settings** > **Collaborators** > **Add people**.
3. Masukkan username/email GitHub penerima agar mereka memiliki akses push/pull.

### 4. Berikan Paket Berkas ZIP (Cadangan Offline)
Unduh paket arsip `monitoring-ccms-dashboard-release.zip` yang berisi seluruh kode sumber, file desain `.fig`, `.figcraft`, dan manual ini. Simpan sebagai arsip serah terima di Google Drive atau flashdisk.

### 5. Berikan Pelatihan / Panduan Pengoperasian Singkat
Jelaskan kepada staf administrasi cara memperbarui checklist:
- Menambahkan baris proyek baru di tab `Cheklist`.
- Mengisi tanda centang `✓` (atau huruf `v`) pada kolom dokumen.
- Memberikan catatan khusus ADKON di kolom keterangan.
- Dashboard akan otomatis sinkron dalam waktu < 1 menit.

---

## 🚀 Cara Menjalankan & Memasang (Deployment Guide)

### Opsi A: Google Apps Script Web App (Rekomendasi)
Ini adalah cara termudah untuk kalangan internal WIKA karena tidak memerlukan server hosting:
1. Buka file Google Sheet terkait.
2. Di menu atas, klik **Extensions (Ekstensi)** > **Apps Script**.
3. Di editor Apps Script:
   - Buat file script `Code.gs` dan salin seluruh isi dari file [`appscript/Code.gs`](appscript/Code.gs).
   - Buat file HTML bernama `Index.html` (perhatikan huruf I besar) dan salin seluruh isi dari file [`appscript/Index.html`](appscript/Index.html).
4. Klik tombol **Deploy** di pojok kanan atas > **New deployment**.
5. Pilih tipe **Web app**:
   - *Description*: `Monitoring CCMS WIKA Divisi 1`
   - *Execute as*: `Me (email Anda)`
   - *Who has access*: `Anyone` (atau `Anyone within WIKA` jika dalam Google Workspace perusahaan).
6. Klik **Deploy** dan salin **Web App URL** yang dihasilkan. Link ini bisa langsung dibagikan ke seluruh direksi, tim ADKON, dan kepala proyek.

### Opsi B: Hosting Mandiri / GitHub Pages
1. Aktifkan **GitHub Pages** pada repositori:
   - Masuk ke **Settings** repositori GitHub > **Pages**.
   - Pilih *Source*: `Deploy from a branch` (Branch: `main`, Folder: `/ (root)`).
   - Klik **Save**. Dalam 1-2 menit, dashboard dapat diakses publik melalui `https://ahmdkidz.github.io/monitoring-ccms-dashboard/`.
2. Atau salin seluruh folder proyek ke server web internal (Nginx / Apache / IIS) perusahaan Anda.

### Opsi C: Menjalankan Secara Offline
1. Buka berkas `index.html` langsung menggunakan peramban Google Chrome, Edge, atau Firefox.
2. Selama komputer terkoneksi ke internet, dashboard tetap dapat membaca data *live* Google Sheets secara otomatis.

---

## 📊 Struktur Database Google Sheet & Pemeliharaan

- **Spreadsheet ID**: `1XQ-IuSesAKrggw6w2sGTXox8W3LRNFzRnmc3vlZCX6Y`
- **Spreadsheet URL**: [https://docs.google.com/spreadsheets/d/1XQ-IuSesAKrggw6w2sGTXox8W3LRNFzRnmc3vlZCX6Y/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XQ-IuSesAKrggw6w2sGTXox8W3LRNFzRnmc3vlZCX6Y/edit?usp=sharing)
- **Tab Utama**: `Cheklist` (atau tab pertama / gid `0`)
- **Data Per**: Cut-Off September/Oktober 2026 (51 Proyek)

### Aturan Pengisian Kolom:
- **Kolom A (No)**: Nomor urut proyek (1, 2, 3...)
- **Kolom B (Nama Proyek)**: Nama resmi proyek konstruksi
- **Kolom C s/d P (14 Dokumen CM)**: Isi dengan karakter `✓`, `v`, atau `1` jika dokumen lengkap. Biarkan kosong jika belum ada.
- **Kolom T s/d Y (6 Dokumen VO)**: Isi dengan `✓`, `v`, atau `1` untuk dokumen perubahan kontrak / addendum.
- **Kolom AE (Catatan Khusus ADKON)**: Catatan evaluasi, seperti kebutuhan Addendum 1, MC-0, atau kelengkapan jaminan.

---

## 📁 Struktur Folder & Berkas Proyek

```text
monitoring-ccms-dashboard/
├── index.html                   # Dashboard web frontend utama (lengkap & interaktif)
├── design-system.html           # Dokumentasi Atomic Design System & palet warna
├── README.md                    # Dokumentasi & panduan serah terima lengkap
├── WIKA_CCMS_Monitoring.fig     # Berkas desain mentahan Figma UI/UX
├── WIKA_CCMS_Monitoring.figcraft# Berkas integrasi FigCraft
├── assets/                      # Aset gambar & ilustrasi vektor SVG
│   ├── wika-logo-white.svg      # Logo resmi WIKA transparan putih
│   ├── sidebar-skyline.svg      # Vektor siluet gedung & tower crane sidebar
│   ├── header-skyline.svg       # Vektor siluet gedung header atas
│   └── card3-crane.svg          # Vektor ilustrasi kartu Total Proyek
└── appscript/                   # Paket khusus Google Apps Script Web App
    ├── Code.gs                  # Kode server Google Apps Script (doGet & parser)
    └── Index.html               # File frontend mandiri (inlined Base64 SVG assets)
```

---

## 🤝 Berita Acara Serah Terima (Contoh Format Singkat)

Jika Anda memerlukan bukti administratif tertulis untuk serah terima pekerjaan, gunakan ringkasan berikut:

> **BERITA ACARA SERAH TERIMA HASIL PEKERJAAN**  
> Proyek: *Pembuatan Dashboard Monitoring ADKON & CCMS (WIKA Divisi Infrastruktur 1)*  
> Tanggal: 9 November 2026  
> Telah diserahkan kepada: _______________________ (Jabatan: _______________________)  
> Deliverables yang diserahkan:
> 1. Kode Sumber Web Dashboard (`index.html` dan aset terkait)
> 2. Paket Google Apps Script Web App (`Code.gs` dan `Index.html`)
> 3. Tautan Repositori GitHub: `https://github.com/AhmdKidz/monitoring-ccms-dashboard`
> 4. Database Spreadsheet: Google Sheet `051026 Cheklist Adkon Dashboard Rev`
> 5. Berkas Desain UI Figma (`.fig`) dan FigCraft (`.figcraft`)
> 
> *Seluruh fitur telah diuji dan berfungsi sesuai spesifikasi per tanggal 5 Oktober 2026.*

---
*PT Wijaya Karya (Persero) Tbk — Infrastruktur 1 Sub Division*
