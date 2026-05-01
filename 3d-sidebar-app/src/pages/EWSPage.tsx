import { ewsThresholds } from '../data';

const escalationProtocol = [
  { condition: 'Rasio masuk 🟡 WASPADA', action: 'Rapat Komite terkait (Risiko/ALCO/Pembiayaan)', timeline: '< 3 hari kerja' },
  { condition: 'Rasio masuk 🔴 KRITIS', action: 'Rapat Direksi darurat + Komisaris diinformasikan', timeline: '< 24 jam' },
  { condition: 'Breach POJK (rasio merah)', action: 'Rapat Direksi + Action Plan tertulis ke OJK', timeline: '< 30 hari' },
  { condition: 'Breach GWM', action: 'Segera perbaiki T+1', timeline: 'TIDAK ADA TOLERANSI' },
  { condition: 'RBBR PK-3 (3 periode)', action: 'Otomatis Pengawasan Intensif OJK', timeline: 'Per POJK 3/2022' },
  { condition: 'BMPK breach', action: 'Stop pencairan segera + lapor OJK', timeline: 'Hari yang sama' },
];

export default function EWSPage() {
  return (
    <div>
      {/* Traffic Light Matrix */}
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-red">🚦</span>
            Traffic Light Threshold
          </div>
        </div>
        <div className="ews-grid">
          <div className="ews-cell header">Rasio</div>
          <div className="ews-cell header" style={{ color: 'var(--green)' }}>🟢 Aman</div>
          <div className="ews-cell header" style={{ color: 'var(--yellow)' }}>🟡 Waspada</div>
          <div className="ews-cell header" style={{ color: 'var(--red)' }}>🔴 Kritis</div>
          {ewsThresholds.map((row, i) => (
            <div key={`row-${i}`} style={{ display: 'contents' }}>
              <div className="ews-cell" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{row.ratio}</div>
              <div className="ews-cell safe">{row.safe}</div>
              <div className="ews-cell warn">{row.warning}</div>
              <div className="ews-cell crit">{row.critical}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Escalation Protocol */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-red">⚡</span>
            Protokol Eskalasi Wajib
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Kondisi</th>
              <th>Tindakan Wajib</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {escalationProtocol.map((row, i) => (
              <tr key={i}>
                <td className="val-cell">{row.condition}</td>
                <td>{row.action}</td>
                <td>
                  <span className="status-pill kritis" style={
                    row.timeline.includes('TIDAK') ? {} : { background: 'var(--yellow-bg)', color: 'var(--yellow)' }
                  }>
                    {row.timeline}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
