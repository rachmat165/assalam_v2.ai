import { useState } from 'react';
import { categories } from './data';
import Background3D from './Background3D';
import OverviewPage from './pages/OverviewPage';
import CategoryPage from './pages/CategoryPage';
import RBBRPage from './pages/RBBRPage';
import EWSPage from './pages/EWSPage';
import BMPKPage from './pages/BMPKPage';
import ESGPage from './pages/ESGPage';
import ReportsPage from './pages/ReportsPage';
import StrategicPage from './pages/StrategicPage';
import './index.css';

// Icon SVGs (simple inline)
const icons: Record<string, JSX.Element> = {
  'layout-dashboard': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  'shield-check': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  'bar-chart-3': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
  'droplets': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.06c1.74 0 3.14-1.44 3.14-3.17 0-.92-.44-1.78-1.33-2.5-.89-.73-1.47-1.6-1.81-2.59-.34 1-1 1.86-1.81 2.59-.89.72-1.33 1.58-1.33 2.5 0 1.73 1.4 3.17 3.14 3.17z"/></svg>,
  'trending-up': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  'check-circle': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  'heart-pulse': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572"/><path d="M12 6l1 4h2l-3 4.5V12h-2l2-6z"/></svg>,
  'alert-triangle': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  'lock': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  'leaf': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  'calendar': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  'target': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
};

const pageHeaders: Record<string, { title: string; subtitle: string }> = {
  'overview': { title: 'Dashboard Overview', subtitle: 'Executive Summary — Seluruh POJK Perbankan Syariah' },
  'permodalan': { title: 'Permodalan', subtitle: 'POJK 3/2022 + POJK KPMM' },
  'kualitas-aset': { title: 'Kualitas Aset Produktif', subtitle: 'POJK 40/2019 + RBBR' },
  'likuiditas': { title: 'Likuiditas', subtitle: 'PBI GWM/LCR/NSFR + POJK 3/2022' },
  'rentabilitas': { title: 'Rentabilitas', subtitle: 'POJK RBBR + Internal' },
  'gcg': { title: 'GCG & Kepatuhan', subtitle: 'POJK 12/2021 + POJK 47/2017' },
  'rbbr': { title: 'RBBR — Kesehatan Bank', subtitle: 'POJK 3/2022 — Peringkat Komposit' },
  'ews': { title: 'Early Warning System', subtitle: 'Threshold & Protokol Eskalasi Wajib' },
  'bmpk': { title: 'BMPK', subtitle: 'POJK 47/2020 — Batas Maksimum Pemberian Kredit' },
  'esg': { title: 'ESG & Sustainable Finance', subtitle: 'POJK 51/2017 — Green Portfolio' },
  'reports': { title: 'Kalender Pelaporan', subtitle: 'Laporan Wajib OJK/BI — Status Otomasi' },
  'strategic': { title: 'Keputusan Strategis', subtitle: 'Matriks Keputusan — Dewan Direksi & Komisaris' },
};

const categoryMapping: Record<string, string> = {
  'permodalan': 'Permodalan',
  'kualitas-aset': 'Kualitas Aset',
  'likuiditas': 'Likuiditas',
  'rentabilitas': 'Rentabilitas',
  'gcg': 'GCG & Kepatuhan',
};

const categoryIcons: Record<string, string> = {
  'permodalan': '🛡️',
  'kualitas-aset': '📊',
  'likuiditas': '💧',
  'rentabilitas': '📈',
  'gcg': '✅',
};

function App() {
  const [activePage, setActivePage] = useState('overview');
  const header = pageHeaders[activePage];

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <OverviewPage />;
      case 'rbbr': return <RBBRPage />;
      case 'ews': return <EWSPage />;
      case 'bmpk': return <BMPKPage />;
      case 'esg': return <ESGPage />;
      case 'reports': return <ReportsPage />;
      case 'strategic': return <StrategicPage />;
      default:
        if (categoryMapping[activePage]) {
          return (
            <CategoryPage
              categoryFilter={categoryMapping[activePage]}
              title={pageHeaders[activePage].title}
              icon={categoryIcons[activePage] || '📊'}
            />
          );
        }
        return <OverviewPage />;
    }
  };

  return (
    <div className="app-layout">
      <Background3D />

      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">☪</div>
          <div className="brand-text">
            <h2>Assalam.ai</h2>
            <span>SyCore-AI v1.0</span>
          </div>
        </div>

        <div className="sidebar-nav">
          <div className="nav-section-label">Dashboard</div>
          {categories.slice(0, 1).map(cat => (
            <div
              key={cat.id}
              className={`nav-item ${activePage === cat.id ? 'active' : ''}`}
              onClick={() => setActivePage(cat.id)}
            >
              <span className="nav-icon">{icons[cat.icon]}</span>
              {cat.label}
            </div>
          ))}

          <div className="nav-section-label">Rasio & Kepatuhan</div>
          {categories.slice(1, 6).map(cat => (
            <div
              key={cat.id}
              className={`nav-item ${activePage === cat.id ? 'active' : ''}`}
              onClick={() => setActivePage(cat.id)}
            >
              <span className="nav-icon">{icons[cat.icon]}</span>
              {cat.label}
            </div>
          ))}

          <div className="nav-section-label">Analisis & Risiko</div>
          {categories.slice(6).map(cat => (
            <div
              key={cat.id}
              className={`nav-item ${activePage === cat.id ? 'active' : ''}`}
              onClick={() => setActivePage(cat.id)}
            >
              <span className="nav-icon">{icons[cat.icon]}</span>
              {cat.label}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer-info">
            <div className="status-dot" />
            <span>Real-Time AI Dashboard</span>
          </div>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            🔒 CONFIDENTIAL — Board & C-Suite
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-area">
        <header className="top-header">
          <div className="header-left">
            <h1>{header.title}</h1>
            <span>{header.subtitle}</span>
          </div>
          <div className="header-right">
            <div className="header-badge badge-green">
              <div className="status-dot" style={{ width: 6, height: 6 }} />
              Pengawasan Normal OJK
            </div>
            <div className="header-badge badge-gold">
              ☪ Bank Syariah KBMI 1
            </div>
          </div>
        </header>

        <div className="content-scroll" key={activePage}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
