import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, Phone, Mail, Calendar, Palette } from "lucide-react";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+254 701 234 567",
      lastVisit: "2024-01-15",
      totalSpent: "KSh 12,500",
      status: "Regular",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary.w@email.com",
      phone: "+254 702 345 678",
      lastVisit: "2024-01-12",
      totalSpent: "KSh 8,200",
      status: "VIP",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mary",
    },
    {
      id: 3,
      name: "Grace Muthoni",
      email: "grace.m@email.com",
      phone: "+254 703 456 789",
      lastVisit: "2024-01-10",
      totalSpent: "KSh 15,800",
      status: "VIP",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
    },
    {
      id: 4,
      name: "Ann Kiprotich",
      email: "ann.k@email.com",
      phone: "+254 704 567 890",
      lastVisit: "2024-01-08",
      totalSpent: "KSh 6,400",
      status: "New",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ann",
    },
    {
      id: 5,
      name: "Linda Achieng",
      email: "linda.a@email.com",
      phone: "+254 705 678 901",
      lastVisit: "2024-01-05",
      totalSpent: "KSh 9,600",
      status: "Regular",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#c0c0c0', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ width: '100%' }}>
        <header style={{ borderBottom: '1px solid #888', padding: 12, background: '#e0e0e0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ background: '#888', borderRadius: 0, padding: 8 }}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>MP</span>
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 'bold', color: '#333' }}>ManiPay</h1>
              <span style={{ fontSize: 22, fontWeight: 'bold', color: '#888', margin: '0 8px' }}>|</span>
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Customer Management</h2>
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>
              + Add Customer
            </button>
          </div>
        </header>
        <div style={{ padding: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #888' }}>
            <thead>
              <tr style={{ background: '#e0e0e0' }}>
                <th style={{ border: '1px solid #888', padding: 8 }}>Customer</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Contact</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Last Visit</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Total Spent</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Status</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <span style={{ fontWeight: 'bold' }}>{customer.name}</span><br />
                    <span style={{ fontSize: 12, color: '#555' }}>{customer.email}</span>
                  </td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <div style={{ fontSize: 12 }}>{customer.phone}</div>
                    <div style={{ fontSize: 12 }}>{customer.email}</div>
                  </td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{customer.lastVisit}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{customer.totalSpent}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <span style={{ background: '#e0e0e0', padding: '2px 8px', border: '1px solid #888', borderRadius: 0 }}>{customer.status}</span>
                  </td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '4px 10px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, marginRight: 4, cursor: 'pointer' }}>View</button>
                    <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '4px 10px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
