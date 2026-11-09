---
name: improve-ui
description: Audit dan Kontrol Kualitas Antarmuka (Anti-Drift). Memeriksa kontras warna, kerapian padding/spacing, responsivitas mobile-desktop, dan menghilangkan inkonsistensi elemen visual.
---

# Improve UI — Quality Audit & Anti-Drift

Skill ini memastikan tidak ada deviasi desain (*design drift*) antara kanvas FigCraft/Figma dan kode HTML/CSS di `index.html`.

## Checklist Audit:
1. **Pemeriksaan Kontras (Accessibility)**:
   - Pastikan teks di atas latar belakang gelap memiliki rasio kontras minimal 4.5:1.
   - Hindari teks abu-abu terang pada background putih (`text-slate-400` pada kartu putih dilarang; gunakan `text-slate-600` atau `text-slate-700`).
2. **Kerapian Spacing & Grid (No-Gap Rule)**:
   - Kartu statistik di baris ringkasan harus memiliki tinggi yang proporsional.
   - Padding container standar: `p-4` hingga `p-6` pada desktop, `p-3` pada mobile.
3. **Penyelarasan Aset Logo**:
   - Pastikan logo WIKA menggunakan format vektor SVG transparan (tanpa box putih kotor di sekeliling logo).
4. **Validasi State Komponen**:
   - Setiap tombol harus memiliki state `:hover`, `:active`, dan `:focus-visible`.
   - Form input pencarian harus memiliki ikon search dengan placeholder yang jelas.
