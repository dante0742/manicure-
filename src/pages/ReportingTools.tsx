import React, { useState } from "react";

const ReportingTools = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Dummy data
  const reports = [
    { id: 1, date: "2024-06-01", type: "Payment", amount: 1500 },
    { id: 2, date: "2024-06-02", type: "Payment", amount: 2000 },
    { id: 3, date: "2024-06-03", type: "Refund", amount: -500 },
  ];

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#e0e0e0', border: '1px solid #888', padding: 24, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Reporting Tools</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <div>
          <label>From</label>
          <input type="date" value={from} onChange={e => setFrom(e.target.value)} style={{ marginLeft: 4, border: '1px solid #888', borderRadius: 0, background: '#fff', padding: 4 }} />
        </div>
        <div>
          <label>To</label>
          <input type="date" value={to} onChange={e => setTo(e.target.value)} style={{ marginLeft: 4, border: '1px solid #888', borderRadius: 0, background: '#fff', padding: 4 }} />
        </div>
        <button style={{ background: '#c0c0c0', border: '1px solid #888', borderRadius: 0, padding: '4px 12px', fontWeight: 'bold', cursor: 'pointer', marginTop: 18 }}>Filter</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#c0c0c0' }}>
            <th style={{ border: '1px solid #888', padding: 8 }}>Date</th>
            <th style={{ border: '1px solid #888', padding: 8 }}>Type</th>
            <th style={{ border: '1px solid #888', padding: 8 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}>
              <td style={{ border: '1px solid #888', padding: 8 }}>{r.date}</td>
              <td style={{ border: '1px solid #888', padding: 8 }}>{r.type}</td>
              <td style={{ border: '1px solid #888', padding: 8 }}>{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportingTools; 