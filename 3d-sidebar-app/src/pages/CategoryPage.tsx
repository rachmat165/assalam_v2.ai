import { complianceRatios } from '../data';

function GaugeBar({ name, value, limit, maxScale, status }: {
  name: string; value: number; limit: number; maxScale: number; status: string;
}) {
  const pct = Math.min((value / maxScale) * 100, 100);
  const limitPct = Math.min((limit / maxScale) * 100, 100);
  const colorClass = status === 'aman' ? 'green' : status === 'waspada' ? 'yellow' : 'red';

  return (
    <div className="gauge-item">
      <div className="gauge-header">
        <span className="gauge-name">{name}</span>
        <div className="gauge-values">
          <span>Batas: {limit}</span>
          <span className="gauge-val">{value}</span>
        </div>
      </div>
      <div className="gauge-track">
        <div className={`gauge-fill ${colorClass}`} style={{ width: `${pct}%` }} />
        <div className="gauge-marker" style={{ left: `${limitPct}%` }} />
      </div>
    </div>
  );
}

interface CategoryPageProps {
  categoryFilter: string;
  title: string;
  icon: string;
}

export default function CategoryPage({ categoryFilter, title, icon }: CategoryPageProps) {
  const filtered = complianceRatios.filter(r => r.category === categoryFilter);

  return (
    <div>
      <div className="section-card section-full animate-in delay-1">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-green">{icon}</span>
            {title}
          </div>
          <span className="section-badge badge-green">
            {filtered.filter(r => r.status === 'aman').length}/{filtered.length} Aman
          </span>
        </div>

        {/* Gauge bars */}
        {filtered.map(r => {
          let maxScale = 30;
          if (['LCR', 'NSFR', 'LBPRS Tepat Waktu', 'PPAP Coverage'].includes(r.name)) maxScale = 200;
          else if (['BOPO', 'FDR'].includes(r.name)) maxScale = 110;
          else if (r.name === 'ESG / Green Finance') maxScale = 20;
          else if (r.numericValue > 20) maxScale = r.numericValue * 1.5;
          return (
            <GaugeBar
              key={r.id}
              name={r.name}
              value={r.numericValue}
              limit={r.numericLimit}
              maxScale={maxScale}
              status={r.status}
            />
          );
        })}
      </div>

      {/* Detail Table */}
      <div className="section-card section-full animate-in delay-2">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-blue">📋</span>
            Detail Rasio
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Rasio</th>
              <th>Batas POJK</th>
              <th>Nilai Aktual</th>
              <th>Buffer</th>
              <th>Status</th>
              <th>Sumber</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td className="val-cell">{r.name}</td>
                <td>{r.limit}</td>
                <td className="val-cell">{r.value}</td>
                <td>{r.buffer || '—'}</td>
                <td>
                  <span className={`status-pill ${r.status}`}>
                    {r.status === 'aman' ? '🟢 Aman' : r.status === 'waspada' ? '🟡 Waspada' : '🔴 Kritis'}
                  </span>
                </td>
                <td style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interpretations */}
      {filtered.some(r => r.interpretation) && (
        <div className="section-card section-full animate-in delay-3">
          <div className="section-card-header">
            <div className="section-card-title">
              <span className="icon-circle icon-gold">💡</span>
              Interpretasi Board
            </div>
          </div>
          {filtered.filter(r => r.interpretation).map(r => (
            <div key={r.id} style={{
              padding: '0.75rem 1rem',
              marginBottom: '0.5rem',
              background: 'rgba(0,0,0,0.02)',
              borderRadius: 'var(--radius-sm)',
              borderLeft: `3px solid ${r.status === 'aman' ? 'var(--green)' : 'var(--yellow)'}`,
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>{r.name}:</strong>{' '}
              {r.interpretation}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
