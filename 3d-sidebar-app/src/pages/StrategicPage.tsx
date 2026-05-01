import { strategicDecisions } from '../data';

export default function StrategicPage() {
  const statusColors: Record<string, { bg: string; color: string }> = {
    'NORMAL': { bg: 'var(--green-bg)', color: 'var(--green)' },
    'WASPADA': { bg: 'var(--yellow-bg)', color: 'var(--yellow)' },
    'OPTIMAL': { bg: 'var(--blue-bg)', color: 'var(--blue)' },
    'ACTION': { bg: 'var(--red-bg)', color: 'var(--red)' },
  };

  return (
    <div>
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">🎯</span>
            Matriks Keputusan Strategis — Dewan Direksi & Komisaris
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {strategicDecisions.map((item, i) => {
            const colors = statusColors[item.status];
            return (
              <div key={i} style={{
                padding: '1.25rem',
                background: 'rgba(0,0,0,0.02)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${colors.color}`,
                transition: 'all 0.2s ease',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {item.area}
                  </span>
                  <span className="status-pill" style={{ background: colors.bg, color: colors.color }}>
                    {item.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Kondisi: {item.condition}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.decision}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decisions for Komisaris/Pemilik */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">👑</span>
            Keputusan Wajib Komisaris/Pemilik
          </div>
        </div>
        {[
          { icon: '✅', title: 'KONFIRMASI DIVIDEND POLICY', desc: 'Sebelum distribusi dividen, pastikan CAR pasca-dividen tetap ≥ 12%. CFO wajib sajikan simulasi CAR post-dividen ke Rapat Komisaris. Dasar: POJK Permodalan Pasal 12.' },
          { icon: '⚠️', title: 'SETUJUI ROADMAP ESG 18 BULAN', desc: 'Green financing 9.5% masih jauh dari target SFAP 15%. Komisaris diminta menetapkan target kuartalan yang mengikat Direksi.' },
          { icon: '✅', title: 'REVIEW RKAP vs KAPASITAS MODAL', desc: 'Pastikan target pertumbuhan pembiayaan tidak akan membawa CAR < 12%. CFO dan CRO wajib sajikan stress test modal vs target RKAP.' },
          { icon: '✅', title: 'EVALUASI KEPATUHAN FIT & PROPER', desc: 'Semua Direksi, Komisaris, DPS, dan Pejabat Eksekutif harus terdaftar OJK. Review renewal jadwal Fit & Proper sebelum jatuh tempo.' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            marginBottom: '0.5rem',
            background: item.icon === '⚠️' ? 'rgba(245,158,11,0.04)' : 'rgba(255,255,255,0.02)',
            borderRadius: 'var(--radius-sm)',
            borderLeft: `3px solid ${item.icon === '⚠️' ? 'var(--yellow)' : 'var(--green)'}`,
          }}>
            <span style={{ fontSize: '1.2rem', marginTop: '0.1rem' }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
