import { reportCalendar } from '../data';

export default function ReportsPage() {
  return (
    <div>
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-blue">📅</span>
            Kalender Pelaporan Wajib OJK/BI
          </div>
          <span className="section-badge badge-green">100% On-Time</span>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Laporan</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Sanksi Telat</th>
            </tr>
          </thead>
          <tbody>
            {reportCalendar.map((row, i) => (
              <tr key={i}>
                <td className="val-cell">{row.name}</td>
                <td>{row.deadline}</td>
                <td>
                  <span className="report-status-ai">
                    {row.status}
                  </span>
                </td>
                <td>
                  <span style={{
                    fontSize: '0.78rem',
                    color: row.penalty.includes('PIDANA') ? 'var(--red)' : 'var(--text-muted)',
                    fontWeight: row.penalty.includes('PIDANA') ? 700 : 400,
                  }}>
                    {row.penalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Review Frequency */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">⏰</span>
            Frekuensi Review yang Disarankan
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {[
            { role: '👑 Pemilik / PSP', freq: 'Bulanan (via Rapat PSP/RUPS)' },
            { role: '🏛️ Dewan Komisaris', freq: 'Bulanan + Real-time access' },
            { role: '💼 Dewan Direksi', freq: 'Mingguan + Real-time alert' },
            { role: '🎯 Senior EVP / GM', freq: 'Harian + Email digest' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '1rem',
              background: 'rgba(0,0,0,0.02)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>{item.role}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.freq}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
