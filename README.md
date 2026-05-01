# ☽ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ

# Assalam.ai — SyCore-AI v1.0
### Agentic Executive Dashboard for Islamic Banking (Bank Syariah KBMI 1)

> **Platform AI pertama di Indonesia untuk monitoring kepatuhan POJK Bank Syariah secara real-time, dirancang khusus untuk Board & C-Suite.**

---

## Tentang Assalam.ai

**Assalam.ai** adalah platform AI berbasis agen (*agentic AI*) yang dirancang untuk Bank Syariah Kelompok Modal Bank Indonesia (KBMI) 1. Platform ini mengintegrasikan seluruh regulasi POJK perbankan syariah yang berlaku ke dalam satu dashboard eksekutif yang cerdas, real-time, dan actionable.

Ditenagai oleh **SyCore-AI v1.0**, platform ini memungkinkan Dewan Direksi, Dewan Komisaris, dan C-Suite untuk memantau 21 rasio keuangan utama, mendapatkan peringatan dini (*Early Warning System*), dan mengambil keputusan strategis berbasis data — semuanya dalam satu tampilan.

---

## Fitur Utama

### 1. Dashboard 21 Rasio vs Batas POJK
Monitoring real-time seluruh rasio keuangan wajib dengan indikator tiga warna:
- **Hijau** — Aman, dalam batas POJK
- **Kuning** — Waspada, mendekati batas (< 10% buffer)
- **Merah** — Breach, melampaui batas POJK → tindakan wajib

Kategori rasio yang dipantau:

| Kategori | Rasio | Sumber Regulasi |
|---|---|---|
| Permodalan | CAR/KPMM, Modal Inti | POJK 3/2022, POJK KPMM |
| Kualitas Aset | NPF Gross, NPF Net, PPAP Coverage | POJK 40/2019, PSAK 71 |
| Likuiditas | LCR, NSFR, FDR, GWM, Cash Ratio | PBI GWM 2021, PBI NSFR |
| Rentabilitas | ROA, ROE, NIM, BOPO | POJK RBBR |
| GCG & Kepatuhan | RBBR, LBPRS, Dana Diklat, ESG, BMPK | POJK 3/2022, POJK 51/2017 |

### 2. Early Warning System (EWS)
Sistem peringatan dini otomatis dengan threshold tiga level untuk 10 rasio kritis. Memberikan alert sebelum breach terjadi sehingga manajemen dapat mengambil tindakan preventif.

### 3. RBBR — Penilaian Tingkat Kesehatan Bank
Monitoring komposit RBBR (Risk-Based Bank Rating) secara real-time meliputi:
- Profil Risiko (8 jenis) — bobot 50%
- GCG (Tata Kelola) — bobot 15%
- Rentabilitas — bobot 15%
- Permodalan — bobot 20%

**Status saat ini: PK-2 (SEHAT)**

### 4. BMPK — Batas Maksimum Penyaluran Dana
Monitoring otomatis BMPK untuk pihak terkait dan tidak terkait sesuai POJK 47/2020. Wajib dicek sebelum menyetujui pembiayaan > Rp 50M.

### 5. ESG & Green Finance
Tracking portofolio pembiayaan hijau (*green portfolio*) menuju target 15% sesuai POJK 51/2017. Dilengkapi roadmap akselerasi 18 bulan.

### 6. Auto-Submit Laporan Regulasi
SyCore-AI menjamin **zero keterlambatan** seluruh laporan wajib:

| Laporan | Deadline | Denda Keterlambatan |
|---|---|---|
| LBPRS/LBUS Bulanan | Tgl 10 bulan berikutnya | Rp 5 juta |
| LKP Triwulanan | Akhir bulan berikutnya | Teguran OJK |
| LBU Bank Indonesia | Tgl 10 bulan berikutnya | Denda BI |
| SLIK OJK | Tgl 15 bulan berikutnya | Sanksi OJK |
| PPATK (STR/LTKM) | < 3 hari kerja | PIDANA UU TPPU |

### 7. Keputusan Strategis Berbasis AI
Panel rekomendasi strategis untuk setiap area kunci — dari manajemen permodalan, likuiditas, hingga ESG — dengan status dan action item yang jelas.

---

## Snapshot Kinerja Saat Ini

| Rasio | Nilai | Batas POJK | Status |
|---|---|---|---|
| CAR / KPMM | **14.8%** | ≥ 12% | Aman |
| NPF Gross | **2.8%** | < 5% | Aman |
| LCR | **128%** | ≥ 100% | Aman |
| BOPO | **78.2%** | ≤ 85% | Aman |
| ROA | **2.1%** | ≥ 1.5% | Aman |
| RBBR | **PK-2** | ≤ PK-2 | Sehat |

> **Status OJK: Pengawasan Normal — Semua Rasio dalam Batas POJK**

---

## Stack Teknologi

```
Frontend   : React 18 + TypeScript + Vite
UI/UX      : 3D Sidebar, Tailwind CSS, Recharts
AI Engine  : SyCore-AI v1.0 (Agentic Banking Core)
Regulasi   : Seluruh POJK Perbankan Syariah yang berlaku
Target Bank: Bank Syariah KBMI 1
```

---

## Struktur Proyek

```
assalam_v2.ai/
├── 3d-sidebar-app/              # React frontend app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── OverviewPage.tsx    # Dashboard utama & KPI snapshot
│   │   │   ├── CategoryPage.tsx    # 21 rasio per kategori
│   │   │   ├── RBBRPage.tsx        # Tingkat kesehatan bank
│   │   │   ├── EWSPage.tsx         # Early Warning System
│   │   │   ├── BMPKPage.tsx        # Batas pembiayaan
│   │   │   ├── ESGPage.tsx         # Green finance tracking
│   │   │   ├── ReportsPage.tsx     # Kalender laporan regulasi
│   │   │   └── StrategicPage.tsx   # Keputusan strategis
│   │   ├── data.ts                 # Data layer & interface types
│   │   ├── App.tsx                 # Root app + routing
│   │   └── Background3D.tsx        # 3D visual layer
│   └── public/
│       └── ExecSummary_POJK_Dashboard_Assalam_AI.pdf
├── ExecSummary_POJK_Dashboard_Assalam_AI.md   # Dokumen eksekutif lengkap
└── ExecSummary_POJK_Dashboard_Assalam_AI.pdf  # Versi PDF
```

---

## Target Pengguna

Platform ini bersifat **CONFIDENTIAL — BOARD & C-SUITE ONLY**:

- Pemilik / PSP (Pemegang Saham Pengendali)
- Dewan Komisaris
- Dewan Direksi
- Senior EVP & General Manager

---

## Regulasi yang Dicakup

- POJK 3/2022 — Kualitas Aset Bank Syariah
- POJK 40/2019 — Penilaian Kualitas Aset BUS/UUS
- POJK 47/2020 — BMPK & Penyediaan Dana Besar
- POJK 51/2017 — Keuangan Berkelanjutan (ESG)
- POJK 47/2017 — Pengembangan SDM
- PBI GWM 2021 — Giro Wajib Minimum
- PBI NSFR — Net Stable Funding Ratio
- POJK RBBR — Risk-Based Bank Rating
- PSAK 71 — Instrumen Keuangan (CKPN/PPAP)

---

## Tentang Arunika Teknologi Global

Dikembangkan oleh **PT Arunika Teknologi Global** — perusahaan teknologi keuangan syariah yang berfokus pada solusi AI untuk industri perbankan syariah Indonesia.

---

*Assalam.ai — Teknologi AI untuk Perbankan Syariah yang Amanah dan Berkah.*
