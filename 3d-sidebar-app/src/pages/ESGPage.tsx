export default function ESGPage() {
  const currentPct = 9.5;
  const targetPct = 15;
  const minPct = 5;
  
  // SVG ring
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const currentDash = (currentPct / 20) * circumference;
  const targetDash = (targetPct / 20) * circumference;

  const agendaItems = [
    { text: 'Rapat khusus ESG roadmap (Q3 ini)', done: false },
    { text: 'Alokasi anggaran green product development', done: false },
    { text: 'Launch sukuk hijau (link DIR 3 Treasury)', done: false },
    { text: 'Green UMKM financing program (link DIR 2 Pembiayaan)', done: false },
    { text: 'Laporan SFAP progress ke OJK semi-annual', done: false },
  ];

  return (
    <div>
      {/* ESG Ring + Info */}
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-green">🌱</span>
            ESG & Sustainable Finance (POJK 51/2017)
          </div>
          <span className="section-badge" style={{ background: 'var(--yellow-bg)', color: 'var(--yellow)', border: '1px solid rgba(245,158,11,0.2)' }}>
            ⚠️ Perlu Akselerasi
          </span>
        </div>

        <div className="esg-ring-container">
          <div className="esg-ring">
            <svg width="140" height="140">
              {/* Background track */}
              <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="10" />
              {/* Target arc */}
              <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="10"
                strokeDasharray={`${targetDash} ${circumference}`} />
              {/* Actual arc */}
              <circle cx="70" cy="70" r={radius} fill="none" stroke="#f59e0b" strokeWidth="10"
                strokeDasharray={`${currentDash} ${circumference}`}
                strokeLinecap="round" style={{ transition: 'stroke-dasharray 1.5s ease' }} />
            </svg>
            <div className="esg-ring-value">
              <div className="val">9.5%</div>
              <div className="lbl">Aktual</div>
            </div>
          </div>

          <div className="esg-legend">
            <div className="esg-legend-item">
              <div className="esg-legend-dot" style={{ background: '#f59e0b' }} />
              <span>Posisi Aktual: <strong>9.5%</strong></span>
            </div>
            <div className="esg-legend-item">
              <div className="esg-legend-dot" style={{ background: 'rgba(245,158,11,0.3)' }} />
              <span>Target SFAP: <strong>15%</strong></span>
            </div>
            <div className="esg-legend-item">
              <div className="esg-legend-dot" style={{ background: '#10b981' }} />
              <span>Minimum POJK: <strong>5.0%</strong> ✓</span>
            </div>
            <div style={{
              marginTop: '0.5rem',
              padding: '0.5rem 0.75rem',
              background: 'var(--yellow-bg)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              color: 'var(--yellow)',
              fontWeight: 600,
            }}>
              Gap: −5.5 ppt → Perlu akselerasi 18 bulan
            </div>
          </div>
        </div>
      </div>

      {/* Green portfolio progress */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">📋</span>
            Green Portfolio Tracker
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          {/* Target */}
          <div className="gauge-item">
            <div className="gauge-header">
              <span className="gauge-name">Target SFAP POJK 51/2017</span>
              <span className="gauge-val" style={{ fontSize: '0.78rem' }}>15%</span>
            </div>
            <div className="gauge-track">
              <div className="gauge-fill yellow" style={{ width: '75%' }} />
            </div>
          </div>
          {/* Actual */}
          <div className="gauge-item">
            <div className="gauge-header">
              <span className="gauge-name">Posisi Aktual</span>
              <span className="gauge-val" style={{ fontSize: '0.78rem' }}>9.5%</span>
            </div>
            <div className="gauge-track">
              <div className="gauge-fill yellow" style={{ width: '47.5%' }} />
            </div>
          </div>
          {/* Min */}
          <div className="gauge-item">
            <div className="gauge-header">
              <span className="gauge-name">Minimum POJK</span>
              <span className="gauge-val" style={{ fontSize: '0.78rem' }}>5.0% ✓</span>
            </div>
            <div className="gauge-track">
              <div className="gauge-fill green" style={{ width: '25%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Agenda Direksi */}
      <div className="section-card section-full animate-in delay-3">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-red">📌</span>
            Agenda Direksi ESG
          </div>
        </div>
        {agendaItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            marginBottom: '0.35rem',
            background: 'rgba(0,0,0,0.02)',
            borderRadius: 'var(--radius-sm)',
            borderLeft: '3px solid var(--yellow)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
          }}>
            <span style={{ color: 'var(--yellow)', fontSize: '1rem' }}>☐</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
