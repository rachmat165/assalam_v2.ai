import { snapshotKPIs, complianceRatios, ratioChartData, rbbrData } from '../data';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

function GaugeBar({ name, value, limit, maxScale, direction, status }: {
  name: string; value: number; limit: number; maxScale: number; direction: string; status: string;
}) {
  const pct = Math.min((value / maxScale) * 100, 100);
  const limitPct = Math.min((limit / maxScale) * 100, 100);
  const colorClass = status === 'aman' ? 'green' : status === 'waspada' ? 'yellow' : 'red';

  return (
    <div className="gauge-item">
      <div className="gauge-header">
        <span className="gauge-name">{name}</span>
        <div className="gauge-values">
          <span>Batas: {limit}{direction === 'max' ? ' (max)' : ' (min)'}</span>
          <span className="gauge-val">{value}%</span>
        </div>
      </div>
      <div className="gauge-track">
        <div className={`gauge-fill ${colorClass}`} style={{ width: `${pct}%` }} />
        <div className="gauge-marker" style={{ left: `${limitPct}%` }} data-label={`${limit}%`} />
      </div>
    </div>
  );
}

const radarData = [
  { subject: 'Profil Risiko', A: 78, fullMark: 100 },
  { subject: 'GCG', A: 80, fullMark: 100 },
  { subject: 'Rentabilitas', A: 90, fullMark: 100 },
  { subject: 'Permodalan', A: 92, fullMark: 100 },
  { subject: 'Likuiditas', A: 88, fullMark: 100 },
  { subject: 'Kepatuhan', A: 95, fullMark: 100 },
];

export default function OverviewPage() {
  return (
    <div>
      {/* KPI Cards */}
      <div className="kpi-grid">
        {snapshotKPIs.map((kpi, i) => (
          <div key={kpi.label} className={`kpi-card animate-in delay-${i + 1} ${kpi.status === 'waspada' ? 'warning' : ''}`}>
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-limit">Batas POJK: {kpi.limit}</div>
            <div className={`kpi-status ${kpi.status}`}>
              {kpi.status === 'aman' ? '✓ Aman' : '⚠ Waspada'}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="section-grid">
        {/* Bar Chart */}
        <div className="section-card animate-in delay-2">
          <div className="section-card-header">
            <div className="section-card-title">
              <span className="icon-circle icon-green">📊</span>
              Rasio vs Batas POJK
            </div>
            <span className="section-badge badge-green">Real-time</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={ratioChartData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, fontSize: 12, color: '#1e293b', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                labelStyle={{ color: '#1e293b' }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Aktual">
                {ratioChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
              <Bar dataKey="limit" radius={[4, 4, 0, 0]} fill="rgba(0,0,0,0.08)" name="Batas POJK" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="section-card animate-in delay-3">
          <div className="section-card-header">
            <div className="section-card-title">
              <span className="icon-circle icon-gold">🎯</span>
              RBBR Health Radar
            </div>
            <span className="section-badge badge-gold">PK-2 Sehat</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="72%">
              <PolarGrid stroke="rgba(0,0,0,0.08)" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#475569' }} />
              <PolarRadiusAxis tick={{ fontSize: 9, fill: '#94a3b8' }} domain={[0, 100]} />
              <Radar name="Bank" dataKey="A" stroke="#059669" fill="#059669" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Gauges */}
      <div className="section-card section-full animate-in delay-4">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-blue">📈</span>
            Visual Gauge — Rasio Utama vs Batas POJK
          </div>
        </div>
        {complianceRatios
          .filter(r => ['CAR / KPMM', 'NPF Gross', 'LCR', 'BOPO', 'ROA', 'FDR', 'ESG / Green Finance'].includes(r.name))
          .map(r => {
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
                direction={r.direction}
                status={r.status}
              />
            );
          })}
      </div>

      {/* RBBR Summary */}
      <div className="section-card section-full animate-in delay-5">
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-gold">🏥</span>
            RBBR — Tingkat Kesehatan Bank (POJK 3/2022)
          </div>
          <span className="section-badge badge-green">PK-2 SEHAT</span>
        </div>

        {/* Visual bar */}
        <div className="rbbr-bar">
          {['PK-1', 'PK-2', 'PK-3', 'PK-4', 'PK-5'].map((pk, idx) => {
            const colors = ['#10b981', '#34d399', '#fbbf24', '#f97316', '#ef4444'];
            const widths = [20, 20, 20, 20, 20];
            return (
              <div
                key={pk}
                className={`rbbr-segment ${pk === 'PK-2' ? 'active' : ''}`}
                style={{ width: `${widths[idx]}%`, background: colors[idx] }}
              >
                {pk}
              </div>
            );
          })}
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Dimensi</th>
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

      {/* Islamic Quote */}
      <div className="quran-quote animate-in delay-6">
        <div className="arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div className="translation">"Hai orang-orang yang beriman, bertakwalah kepada Allah dan tinggalkan sisa riba (yang belum dipungut) jika kamu orang-orang yang beriman."</div>
        <div className="reference">QS. Al-Baqarah: 278</div>
      </div>
    </div>
  );
}
