import { rbbrData } from '../data';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { subject: 'Profil Risiko', A: 78, fullMark: 100 },
  { subject: 'GCG', A: 80, fullMark: 100 },
  { subject: 'Rentabilitas', A: 90, fullMark: 100 },
  { subject: 'Permodalan', A: 92, fullMark: 100 },
];

export default function RBBRPage() {
  return (
    <div>
      {/* RBBR Visual */}
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">🏥</span>
            RBBR — Tingkat Kesehatan Bank (POJK 3/2022)
          </div>
          <span className="section-badge badge-green">PK-2 SEHAT</span>
        </div>

        {/* PK Bar */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Peringkat Komposit (PK) — Skala 1-5
          </div>
          <div className="rbbr-bar">
            {[
              { label: 'PK-1', sublabel: 'Sangat Sehat', color: '#059669' },
              { label: 'PK-2', sublabel: 'Sehat', color: '#10b981' },
              { label: 'PK-3', sublabel: 'Cukup Sehat', color: '#fbbf24' },
              { label: 'PK-4', sublabel: 'Kurang Sehat', color: '#f97316' },
              { label: 'PK-5', sublabel: 'Tidak Sehat', color: '#ef4444' },
            ].map((pk) => (
              <div
                key={pk.label}
                className={`rbbr-segment ${pk.label === 'PK-2' ? 'active' : ''}`}
                style={{ width: '20%', background: pk.color, flexDirection: 'column', lineHeight: 1.2 }}
              >
                <span>{pk.label}</span>
                {pk.label === 'PK-2' && <span style={{ fontSize: '0.55rem' }}>← POSISI</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Dimension Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>Dimensi RBBR</th>
              <th>Bobot</th>
              <th>Skor</th>
              <th>Kondisi</th>
            </tr>
          </thead>
          <tbody>
            {rbbrData.map((row, i) => (
              <tr key={i}>
                <td className="val-cell">{row.dimension}</td>
                <td>{row.weight}</td>
                <td className="val-cell">{row.score}</td>
                <td><span className="status-pill aman">🟢 {row.condition}</span></td>
              </tr>
            ))}
            <tr style={{ borderTop: '2px solid rgba(5,150,105,0.3)' }}>
              <td className="val-cell" style={{ color: '#059669' }}>PERINGKAT KOMPOSIT</td>
              <td style={{ color: '#059669', fontWeight: 700 }}>100%</td>
              <td className="val-cell" style={{ color: '#059669' }}>PK-2 — SEHAT</td>
              <td><span className="status-pill aman">🟢 Status Normal OJK</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Radar */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-blue">📡</span>
            RBBR Dimension Radar
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="72%">
            <PolarGrid stroke="rgba(0,0,0,0.08)" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#475569' }} />
            <PolarRadiusAxis tick={{ fontSize: 9, fill: '#94a3b8' }} domain={[0, 100]} />
            <Radar name="Skor" dataKey="A" stroke="#059669" fill="#059669" fillOpacity={0.15} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Bank Status Summary */}
      <div className="section-card section-full animate-in delay-3" style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(212,168,67,0.04))',
        border: '1px solid rgba(16,185,129,0.15)',
      }}>
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-green">✅</span>
            Ringkasan — Apakah Bank Aman?
          </div>
          <span className="section-badge badge-green">YA — SANGAT AMAN</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
          {[
            { label: 'STATUS OJK', value: 'PENGAWASAN NORMAL (Terbaik)', status: '🟢' },
            { label: 'RBBR', value: 'PERINGKAT KOMPOSIT 2 — SEHAT', status: '🟢' },
            { label: 'PERMODALAN', value: 'KUAT — CAR 14.8% (min 12%)', status: '🟢' },
            { label: 'KUALITAS ASET', value: 'BAIK — NPF 2.8% (max 5%)', status: '🟢' },
            { label: 'LIKUIDITAS', value: 'SANGAT SEHAT — LCR 128% (min 100%)', status: '🟢' },
            { label: 'RENTABILITAS', value: 'EFISIEN — BOPO 78.2% (max 85%)', status: '🟢' },
            { label: 'KEPATUHAN', value: '100% LAPORAN ON-TIME', status: '🟢' },
            { label: 'ESG', value: 'PERLU AKSELERASI — 9.5% (target 15%)', status: '🟡' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.6rem 0.75rem',
              background: 'rgba(5,150,105,0.04)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              alignItems: 'flex-start',
            }}>
              <span>{item.status}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.label}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
