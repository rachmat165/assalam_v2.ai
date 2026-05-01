// ========================================
// Islamic Banking ERP — Data Layer
// Extracted from ExecSummary POJK
// ========================================

export interface RatioItem {
  id: number;
  name: string;
  category: string;
  limit: string;
  value: string;
  numericValue: number;
  numericLimit: number;
  unit: string;
  status: 'aman' | 'waspada' | 'kritis';
  source: string;
  buffer?: string;
  interpretation?: string;
  direction: 'min' | 'max' | 'range';
}

export interface StrategicDecision {
  area: string;
  condition: string;
  decision: string;
  status: 'NORMAL' | 'WASPADA' | 'OPTIMAL' | 'ACTION';
}

export interface ReportItem {
  name: string;
  deadline: string;
  status: string;
  penalty: string;
}

export interface BMPKItem {
  category: string;
  limitPOJK: string;
  actual: string;
  numericActual: number;
  numericLimit: number;
  remaining: string;
}

export interface RBBRItem {
  dimension: string;
  weight: string;
  score: string;
  condition: string;
}

export interface EWSItem {
  ratio: string;
  safe: string;
  warning: string;
  critical: string;
}

// Snapshot KPIs
export const snapshotKPIs = [
  { label: 'CAR', value: '14.8%', numValue: 14.8, limit: '≥ 12%', status: 'aman' as const, icon: 'shield' },
  { label: 'NPF', value: '2.8%', numValue: 2.8, limit: '< 5%', status: 'aman' as const, icon: 'activity' },
  { label: 'LCR', value: '128%', numValue: 128, limit: '≥ 100%', status: 'aman' as const, icon: 'droplets' },
  { label: 'BOPO', value: '78.2%', numValue: 78.2, limit: '≤ 85%', status: 'aman' as const, icon: 'trending-down' },
  { label: 'ROA', value: '2.1%', numValue: 2.1, limit: '≥ 1.5%', status: 'aman' as const, icon: 'bar-chart' },
  { label: 'RBBR', value: 'PK-2', numValue: 2, limit: '≤ PK-2', status: 'aman' as const, icon: 'award' },
];

// Full 21 Ratios
export const complianceRatios: RatioItem[] = [
  { id: 1, name: 'CAR / KPMM', category: 'Permodalan', limit: '≥ 12%', value: '14.8%', numericValue: 14.8, numericLimit: 12, unit: '%', status: 'aman', source: 'POJK 3/2022', buffer: '+2.8%', interpretation: 'Buffer kuat. Bank aman mendukung ekspansi kredit hingga +30%.', direction: 'min' },
  { id: 2, name: 'Modal Inti', category: 'Permodalan', limit: '≥ Rp 1T', value: 'Rp 1.45T', numericValue: 1.45, numericLimit: 1, unit: 'T', status: 'aman', source: 'POJK KPMM', buffer: '+Rp 0.45T', direction: 'min' },
  { id: 3, name: 'NPF Gross', category: 'Kualitas Aset', limit: '< 5%', value: '2.8%', numericValue: 2.8, numericLimit: 5, unit: '%', status: 'aman', source: 'POJK 40/2019', buffer: '+2.2%', interpretation: 'Jika NPF mendekati 4%, wajib rapat Komite Risiko.', direction: 'max' },
  { id: 4, name: 'NPF Net', category: 'Kualitas Aset', limit: '< 2%', value: '1.4%', numericValue: 1.4, numericLimit: 2, unit: '%', status: 'aman', source: 'POJK 40/2019', buffer: '+0.6%', direction: 'max' },
  { id: 5, name: 'PPAP Coverage', category: 'Kualitas Aset', limit: '≥ 80%', value: '92%', numericValue: 92, numericLimit: 80, unit: '%', status: 'aman', source: 'PSAK 71', buffer: '+12%', direction: 'min' },
  { id: 6, name: 'BMPK Pihak Terkait', category: 'Kualitas Aset', limit: '≤ 10%', value: '4.3%', numericValue: 4.3, numericLimit: 10, unit: '%', status: 'aman', source: 'POJK 47/2020', buffer: '+5.7%', direction: 'max' },
  { id: 7, name: 'BMPK Tidak Terkait', category: 'Kualitas Aset', limit: '≤ 25%', value: '18.5%', numericValue: 18.5, numericLimit: 25, unit: '%', status: 'aman', source: 'POJK 47/2020', buffer: '+6.5%', direction: 'max' },
  { id: 8, name: 'LCR', category: 'Likuiditas', limit: '≥ 100%', value: '128%', numericValue: 128, numericLimit: 100, unit: '%', status: 'aman', source: 'PBI GWM 2021', buffer: '+28%', interpretation: 'Bank tahan withdrawal DPK hingga 28% dalam 30 hari.', direction: 'min' },
  { id: 9, name: 'NSFR', category: 'Likuiditas', limit: '≥ 100%', value: '112%', numericValue: 112, numericLimit: 100, unit: '%', status: 'aman', source: 'PBI NSFR', buffer: '+12%', direction: 'min' },
  { id: 10, name: 'FDR', category: 'Likuiditas', limit: '85% – 94%', value: '88.5%', numericValue: 88.5, numericLimit: 94, unit: '%', status: 'aman', source: 'RBBR Internal', direction: 'range' },
  { id: 11, name: 'GWM Primer', category: 'Likuiditas', limit: '≥ 5%', value: '7.2%', numericValue: 7.2, numericLimit: 5, unit: '%', status: 'aman', source: 'PBI GWM 2021', buffer: '+2.2%', interpretation: 'Breach GWM = DENDA BI OTOMATIS.', direction: 'min' },
  { id: 12, name: 'Cash Ratio', category: 'Likuiditas', limit: '≥ 5%', value: '9.4%', numericValue: 9.4, numericLimit: 5, unit: '%', status: 'aman', source: 'POJK 3/2022', buffer: '+4.4%', direction: 'min' },
  { id: 13, name: 'ROA', category: 'Rentabilitas', limit: '≥ 1.5%', value: '2.1%', numericValue: 2.1, numericLimit: 1.5, unit: '%', status: 'aman', source: 'POJK RBBR', buffer: '+0.6%', direction: 'min' },
  { id: 14, name: 'ROE', category: 'Rentabilitas', limit: '≥ 12%', value: '14.3%', numericValue: 14.3, numericLimit: 12, unit: '%', status: 'aman', source: 'Internal RBBR', buffer: '+2.3%', direction: 'min' },
  { id: 15, name: 'NIM', category: 'Rentabilitas', limit: '≥ 4%', value: '4.8%', numericValue: 4.8, numericLimit: 4, unit: '%', status: 'aman', source: 'Best Practice', buffer: '+0.8%', direction: 'min' },
  { id: 16, name: 'BOPO', category: 'Rentabilitas', limit: '≤ 85%', value: '78.2%', numericValue: 78.2, numericLimit: 85, unit: '%', status: 'aman', source: 'POJK RBBR', buffer: '+6.8%', interpretation: 'Masih ada ruang investasi strategis.', direction: 'max' },
  { id: 17, name: 'RBBR Komposit', category: 'GCG & Kepatuhan', limit: '≤ PK-2', value: 'PK-2', numericValue: 2, numericLimit: 2, unit: 'PK', status: 'aman', source: 'POJK 3/2022', direction: 'max' },
  { id: 18, name: 'LBPRS Tepat Waktu', category: 'GCG & Kepatuhan', limit: '100%', value: '100%', numericValue: 100, numericLimit: 100, unit: '%', status: 'aman', source: 'POJK Pelaporan', direction: 'min' },
  { id: 19, name: 'Dana Diklat SDM', category: 'GCG & Kepatuhan', limit: '≥ 5%', value: '6.2%', numericValue: 6.2, numericLimit: 5, unit: '%', status: 'aman', source: 'POJK 47/2017', buffer: '+1.2%', direction: 'min' },
  { id: 20, name: 'ESG / Green Finance', category: 'GCG & Kepatuhan', limit: '≥ 5% (target 15%)', value: '9.5%', numericValue: 9.5, numericLimit: 15, unit: '%', status: 'waspada', source: 'POJK 51/2017', interpretation: 'Perlu akselerasi 5.5 ppt dalam 18 bulan.', direction: 'min' },
  { id: 21, name: 'BMPK Grup Terkait', category: 'GCG & Kepatuhan', limit: '≤ 20%', value: '10.0%', numericValue: 10, numericLimit: 20, unit: '%', status: 'aman', source: 'POJK 47/2020', buffer: '+10%', direction: 'max' },
];

export const strategicDecisions: StrategicDecision[] = [
  { area: 'Permodalan', condition: 'CAR 14.8% — buffer 2.8% di atas min 12%', decision: 'Pertahankan. Hitung dampak dividen ke CAR sebelum distribusi. Siapkan capital plan jika kredit tumbuh > 30%.', status: 'NORMAL' },
  { area: 'NPF', condition: '2.8% — aman, pantau tren', decision: 'Intensifkan EWS. Jika tren naik 0.5%/bulan → rapat Komite Risiko darurat.', status: 'WASPADA' },
  { area: 'BMPK', condition: 'Terkait 4.3%, Tidak Terkait 18.5%', decision: 'Aman. WAJIB cek BMPK sebelum setuju pembiayaan > Rp 50M.', status: 'NORMAL' },
  { area: 'Likuiditas', condition: 'LCR 128%, FDR 88.5% — optimal', decision: 'Sangat sehat. Aktifkan Contingency Plan jika withdrawal DPK > 15% dalam 7 hari.', status: 'NORMAL' },
  { area: 'GWM', condition: '7.2% — buffer 2.2% di atas 5%', decision: 'Aman. Breach GWM = denda BI otomatis. Alert ketika GWM < 6%.', status: 'NORMAL' },
  { area: 'Rentabilitas', condition: 'ROA 2.1%, BOPO 78.2%, NIM 4.8%', decision: 'Kinerja sangat baik. BOPO 78.2% memberi ruang investasi strategis.', status: 'OPTIMAL' },
  { area: 'RBBR', condition: 'PK-2 (SEHAT)', decision: 'Pertahankan PK 1-2. Jika indikator mendorong ke PK-3 → Action plan ke OJK.', status: 'NORMAL' },
  { area: 'ESG', condition: 'Green 9.5% — di bawah target 15%', decision: 'Perlu akselerasi. Tentukan roadmap green portfolio 18 bulan.', status: 'ACTION' },
  { area: 'Dana Diklat', condition: '6.2% — di atas 5% POJK', decision: 'Compliant. Prioritaskan AI Banking, BSMR, syariah.', status: 'NORMAL' },
  { area: 'Laporan OJK/BI', condition: '100% on-time via AI auto-submit', decision: 'Zero keterlambatan. SyCore-AI menjamin auto-submit.', status: 'NORMAL' },
];

export const rbbrData: RBBRItem[] = [
  { dimension: 'Profil Risiko (8 Jenis)', weight: '50%', score: '2.1 — Rendah', condition: 'Semua risiko dalam batas aman' },
  { dimension: 'GCG (Tata Kelola)', weight: '15%', score: '2 — Baik', condition: 'Direksi, Komisaris, DPS aktif' },
  { dimension: 'Rentabilitas', weight: '15%', score: '1.8 — Sangat Memadai', condition: 'ROA 2.1%, BOPO 78.2%' },
  { dimension: 'Permodalan', weight: '20%', score: '1.5 — Sangat Memadai', condition: 'CAR 14.8%, Modal Inti Rp 1.45T' },
];

export const reportCalendar: ReportItem[] = [
  { name: 'LBPRS/LBUS Bulanan', deadline: 'Tgl 10 bulan berikutnya', status: 'Auto-Submit AI', penalty: 'Denda Rp 5 juta' },
  { name: 'LKP Triwulanan', deadline: 'Akhir bulan berikutnya', status: 'Auto-Submit AI', penalty: 'Teguran OJK' },
  { name: 'LKP Desember (Tahunan)', deadline: 'Akhir bulan ke-4', status: 'Auto-Submit AI', penalty: 'Sanksi administratif' },
  { name: 'LBU Bank Indonesia', deadline: 'Tgl 10 bulan berikutnya', status: 'Auto-Submit AI', penalty: 'Denda BI' },
  { name: 'SLIK OJK', deadline: 'Tgl 15 bulan berikutnya', status: 'Auto-Submit AI', penalty: 'Sanksi OJK' },
  { name: 'Laporan Tahunan (Audited)', deadline: 'Akhir bulan ke-4 tahun buku', status: 'AI-Assisted', penalty: 'Teguran tertulis' },
  { name: 'RBB (Rencana Bisnis Bank)', deadline: 'September tahun berjalan', status: 'AI-Assisted', penalty: 'Teguran OJK' },
  { name: 'PPATK (STR/LTKM)', deadline: '< 3 hari kerja', status: 'Auto Real-time', penalty: 'PIDANA UU TPPU' },
  { name: 'PPh Badan Tahunan', deadline: '31 April tahun berikutnya', status: 'Auto (DIR 4)', penalty: 'Denda + bunga' },
  { name: 'BPJS TK & Kesehatan', deadline: 'Tgl 10-15 bulan berjalan', status: 'Auto (DIR 8)', penalty: 'Denda 2%/bulan' },
];

export const bmpkData: BMPKItem[] = [
  { category: 'Pihak Terkait (1 pihak)', limitPOJK: '≤ 10% Modal Inti', actual: '4.3%', numericActual: 4.3, numericLimit: 10, remaining: 'Rp 83M' },
  { category: 'Pihak Terkait (grup)', limitPOJK: '≤ 20% Modal Inti', actual: '10.0%', numericActual: 10, numericLimit: 20, remaining: 'Rp 145M' },
  { category: 'Tidak Terkait (1 pihak)', limitPOJK: '≤ 25% Modal', actual: '18.5%', numericActual: 18.5, numericLimit: 25, remaining: 'Rp 94M' },
  { category: 'Tidak Terkait (grup)', limitPOJK: '≤ 30% Modal', actual: '23.4%', numericActual: 23.4, numericLimit: 30, remaining: 'Rp 96M' },
];

export const ewsThresholds: EWSItem[] = [
  { ratio: 'CAR / KPMM', safe: '≥ 14%', warning: '12% – 14%', critical: '< 12% → POJK' },
  { ratio: 'NPF Gross', safe: '< 3%', warning: '3% – 4%', critical: '≥ 5% → POJK' },
  { ratio: 'BOPO', safe: '< 80%', warning: '80% – 83%', critical: '≥ 85% → POJK' },
  { ratio: 'LCR', safe: '≥ 115%', warning: '100% – 115%', critical: '< 100% → PBI' },
  { ratio: 'GWM Primer', safe: '≥ 6%', warning: '5% – 6%', critical: '< 5% → DENDA' },
  { ratio: 'Cash Ratio', safe: '≥ 7%', warning: '5% – 7%', critical: '< 5% → POJK' },
  { ratio: 'FDR', safe: '87% – 92%', warning: '< 86% / > 92%', critical: '< 85% / > 94%' },
  { ratio: 'ROA', safe: '≥ 2%', warning: '1.5% – 2%', critical: '< 1.5% → POJK' },
  { ratio: 'NPF Net', safe: '< 1%', warning: '1% – 1.8%', critical: '≥ 2% → POJK' },
  { ratio: 'BMPK Terkait', safe: '< 7%', warning: '7% – 9%', critical: '≥ 10% → POJK' },
];

// Category groupings for sidebar nav
export const categories = [
  { id: 'overview', label: 'Dashboard Overview', icon: 'layout-dashboard' },
  { id: 'permodalan', label: 'Permodalan', icon: 'shield-check' },
  { id: 'kualitas-aset', label: 'Kualitas Aset', icon: 'bar-chart-3' },
  { id: 'likuiditas', label: 'Likuiditas', icon: 'droplets' },
  { id: 'rentabilitas', label: 'Rentabilitas', icon: 'trending-up' },
  { id: 'gcg', label: 'GCG & Kepatuhan', icon: 'check-circle' },
  { id: 'rbbr', label: 'RBBR Kesehatan', icon: 'heart-pulse' },
  { id: 'ews', label: 'Early Warning', icon: 'alert-triangle' },
  { id: 'bmpk', label: 'BMPK', icon: 'lock' },
  { id: 'esg', label: 'ESG & Sustainable', icon: 'leaf' },
  { id: 'reports', label: 'Kalender Laporan', icon: 'calendar' },
  { id: 'strategic', label: 'Keputusan Strategis', icon: 'target' },
];

// Chart data for sparklines / bar charts
export const ratioChartData = [
  { name: 'CAR', value: 14.8, limit: 12, fill: '#10b981' },
  { name: 'NPF', value: 2.8, limit: 5, fill: '#10b981' },
  { name: 'LCR', value: 128, limit: 100, fill: '#10b981' },
  { name: 'BOPO', value: 78.2, limit: 85, fill: '#10b981' },
  { name: 'ROA', value: 2.1, limit: 1.5, fill: '#10b981' },
  { name: 'NIM', value: 4.8, limit: 4, fill: '#10b981' },
  { name: 'FDR', value: 88.5, limit: 94, fill: '#10b981' },
  { name: 'GWM', value: 7.2, limit: 5, fill: '#10b981' },
  { name: 'ESG', value: 9.5, limit: 15, fill: '#f59e0b' },
];
