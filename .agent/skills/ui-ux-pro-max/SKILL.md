---
name: ui-ux-pro-max
description: Design Intelligence & Rule Engine untuk WIKA CCMS Monitoring Dashboard. Menjaga konsistensi palet warna korporat WIKA, skala hierarki tipografi Plus Jakarta Sans, dan standar visualisasi data WCAG AA.
---

# UI/UX Pro Max — Design Intelligence (WIKA CCMS)

Skill ini berfungsi sebagai basis aturan sistem desain (*design tokens & rules*) untuk seluruh komponen dashboard WIKA CCMS Monitoring.

## 1. Palet Warna Resmi WIKA
- **Primary Blue**: `#003B70` (WIKA Primary Blue - Dominan Header & Card Highlights)
- **Deep Navy**: `#0A4285` (WIKA Dark Accent)
- **Cyan Accent**: `#38BDF8` / `#00A3E0` (Interactive Highlights & Hover states)
- **Slate Background**:
  - Light mode: `#F8FAFC` (Canvas), `#FFFFFF` (Card surfaces), `#E2E8F0` (Borders)
  - Dark mode: `#0B1329` (Canvas), `#132042` (Card surfaces), `#1E3264` (Borders)

## 2. Palet Status Kepatuhan Dokumen (WCAG AA Compliant)
- **Lengkap 100% (Hijau)**: `#10B981` (Teks/Badge: `#059669` / bg `#ECFDF5`)
- **Perlu Tindak Lanjut (Oranye/Kuning)**: `#F59E0B` (Teks/Badge: `#D97706` / bg `#FFFBEB`)
- **Kritis < 50% (Merah)**: `#EF4444` (Teks/Badge: `#DC2626` / bg `#FEF2F2`)
- **Kritis 0% / Nihil (Merah Tua/Abu)**: `#991B1B` (Badge solid dengan pulse warning)

## 3. Tipografi
- **Font Utama**: `Plus Jakarta Sans`, sans-serif (Google Fonts)
- **Font Monospace**: `JetBrains Mono` (untuk angka skor dokumen, ID proyek, kode tanggal)
- **Skala Ukuran**:
  - H1 / Dashboard Title: 20px - 24px (Bold 700)
  - Section Header: 15px - 16px (Semi-Bold 600)
  - Body Text / Table Data: 12px - 13px (Regular 400 & Medium 500)
  - Micro-labels / Badges: 11px - 12px (Semi-Bold 600)

## 4. Standar Visualisasi Data
- **Chart.js Configuration**:
  - Donut Chart: Ketebalan cutout 75%, legend interaktif dengan persentase.
  - Bar Chart: Rounded corners (border radius 6px pada bar teratas), gridline transparan tipis.
