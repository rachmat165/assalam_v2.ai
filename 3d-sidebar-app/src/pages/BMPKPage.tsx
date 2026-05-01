import { bmpkData } from '../data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

export default function BMPKPage() {
  const chartData = bmpkData.map(b => ({
    name: b.category.replace('Pihak ', 'P.').replace('Tidak ', 'T.').replace('(1 pihak)', '(1)').replace('(grup)', '(G)'),
    actual: b.numericActual,
    limit: b.numericLimit,
  }));

  return (
    <div>
      {/* Header info */}
      <div className="section-card section-full animate-in delay-1" style={{
        background: 'linear-gradient(135deg, rgba(220,38,38,0.04), rgba(184,134,11,0.04))',
        border: '1px solid rgba(220,38,38,0.12)',
      }}>
        <div className="section-card-header">
          <div className="section-card-title">
            <span className="icon-circle icon-red">🔒</span>
            BMPK — Batas Maksimum Pemberian Kredit
          </div>
          <span className="section-badge badge-green">POJK 47/2020</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          BMPK adalah <strong style={{ color: 'var(--red)' }}>LARANGAN KERAS</strong> — tidak boleh dilanggar dalam kondisi apapun.
          Setiap pembiayaan yang akan menyebabkan BMPK {'>'} 80% limit <strong>WAJIB</strong> dibawa ke Rapat Komite Pembiayaan level Direktur.
          SyCore-AI <strong>MENGUNCI sistem</strong> — tidak bisa diproses jika akan breach.
        </p>
      </div>

      {/* Chart */}
      <div className="section-grid">
        <div className="section-card animate-in delay-2">
          <div className="section-card-header">
            <div className="section-card-title">
              <span className="icon-circle icon-blue">📊</span>
              BMPK Aktual vs Batas
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} domain={[0, 35]} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, fontSize: 12, color: '#1e293b', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="actual" name="Aktual" radius={[4, 4, 0, 0]}>
                {chartData.map((_, index) => (
                  <Cell key={index} fill="#10b981" />
                ))}
              </Bar>
              <Bar dataKey="limit" name="Batas POJK" fill="rgba(239,68,68,0.3)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="section-card animate-in delay-3">
          <div className="section-card-header">
            <div className="section-card-title">
              <span className="icon-circle icon-gold">📋</span>
              Detail BMPK
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Batas POJK</th>
                <th>Aktual</th>
                <th>Sisa Ruang</th>
              </tr>
            </thead>
            <tbody>
              {bmpkData.map((row, i) => (
                <tr key={i}>
                  <td className="val-cell">{row.category}</td>
                  <td>{row.limitPOJK}</td>
                  <td className="val-cell">{row.actual}</td>
                  <td><span className="status-pill aman">{row.remaining}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
