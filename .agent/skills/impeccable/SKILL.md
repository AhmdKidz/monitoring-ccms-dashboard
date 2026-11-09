---
name: impeccable
description: Visual Craft, Micro-Interactions, dan Production Polish. Mengatur efek glassmorphism, elevasi shadow, transisi tema dark/light sebaris, dan freeze sticky navigation.
---

# Impeccable — Visual Craft & Production Polish

Skill ini mengangkat tampilan dashboard ke standar estetika *executive grade* kelas dunia.

## Prinsip Desain:
1. **Sidebar Sticky Freeze**:
   - Navigasi sidebar kiri tetap terkunci di posisinya saat daftar 51 proyek di-scroll ke bawah.
   - Ilustrasi arsitektur gedung WIKA di bagian bawah sidebar tidak terpotong.
2. **Efek Elevasi & Kedalaman**:
   - Shadow lembut bertingkat: `box-shadow: 0 4px 20px -2px rgba(0, 59, 112, 0.08)`.
   - Border subtil `border border-slate-200/80` (light) dan `border border-slate-700/60` (dark).
3. **Kontinuitas Tema Light / Dark**:
   - Tombol toggle mode gelap/terang ditempatkan sebaris (*inline*) dengan tombol Reset Filter.
   - Seluruh warna chart (Chart.js) otomatis mengadaptasi gridline dan warna teks saat tema berganti tanpa perlu me-reload halaman.
4. **Micro-Interactions**:
   - Hover efek halus pada baris tabel proyek (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`).
   - Animasi indikator pulse pada proyek berstatus kritis/nihil.
