import React, { useState } from "react";

const PaymentEntry = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [method, setMethod] = useState("Cash");
  const [notes, setNotes] = useState("");

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#e0e0e0', border: '1px solid #888', padding: 24, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Payment Entry</h2>
      <form>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} style={{ width: '100%', padding: 6, border: '1px solid #888', borderRadius: 0, background: '#fff' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ width: '100%', padding: 6, border: '1px solid #888', borderRadius: 0, background: '#fff' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Method</label>
          <select value={method} onChange={e => setMethod(e.target.value)} style={{ width: '100%', padding: 6, border: '1px solid #888', borderRadius: 0, background: '#fff' }}>
            <option>Cash</option>
            <option>Card</option>
            <option>Mobile Money</option>
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>Notes</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} style={{ width: '100%', padding: 6, border: '1px solid #888', borderRadius: 0, background: '#fff' }} />
        </div>
        <button type="submit" style={{ background: '#c0c0c0', border: '1px solid #888', borderRadius: 0, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Save Payment</button>
      </form>
    </div>
  );
};

export default PaymentEntry; 