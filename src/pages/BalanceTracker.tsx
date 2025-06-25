import React from "react";

const BalanceTracker = () => {
  // Dummy data
  const balance = 12000;
  const history = [
    { id: 1, date: "2024-06-01", desc: "Opening Balance", amount: 10000 },
    { id: 2, date: "2024-06-02", desc: "Payment Received", amount: 2000 },
    { id: 3, date: "2024-06-03", desc: "Refund Issued", amount: -500 },
  ];

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#e0e0e0', border: '1px solid #888', padding: 24, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Balance Tracker</h2>
      <div style={{ marginBottom: 16, fontSize: 18, fontWeight: 'bold', color: '#333' }}>
        Current Balance: <span style={{ color: '#007700' }}>KSh {balance.toLocaleString()}</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #888', padding: 12 }}>
        <h3 style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>History</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {history.map(h => (
            <li key={h.id} style={{ borderBottom: '1px solid #e0e0e0', padding: '6px 0' }}>
              <span style={{ marginRight: 8 }}>{h.date}</span>
              <span style={{ marginRight: 8 }}>{h.desc}</span>
              <span style={{ color: h.amount < 0 ? '#bb0000' : '#007700' }}>{h.amount > 0 ? '+' : ''}{h.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BalanceTracker; 