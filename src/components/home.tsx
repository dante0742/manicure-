import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Palette } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AppointmentsList from "./dashboard/AppointmentsList";
import RevenueStats from "./dashboard/RevenueStats";

const Home = () => {
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
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>
              Today
            </button>
          </div>
        </header>
        <div style={{ padding: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Dashboard</h2>
          {/* Example: Flat summary cards */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <div style={{ flex: 1, background: '#e0e0e0', border: '1px solid #888', padding: 16, borderRadius: 0 }}>
              <div style={{ fontWeight: 'bold', fontSize: 16 }}>Appointments</div>
              <div style={{ fontSize: 24 }}>12</div>
            </div>
            <div style={{ flex: 1, background: '#e0e0e0', border: '1px solid #888', padding: 16, borderRadius: 0 }}>
              <div style={{ fontWeight: 'bold', fontSize: 16 }}>Revenue</div>
              <div style={{ fontSize: 24 }}>KSh 25,000</div>
            </div>
            <div style={{ flex: 1, background: '#e0e0e0', border: '1px solid #888', padding: 16, borderRadius: 0 }}>
              <div style={{ fontWeight: 'bold', fontSize: 16 }}>Customers</div>
              <div style={{ fontSize: 24 }}>8</div>
            </div>
          </div>
          {/* Example: Flat table for appointments */}
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #888' }}>
            <thead>
              <tr style={{ background: '#e0e0e0' }}>
                <th style={{ border: '1px solid #888', padding: 8 }}>Time</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Customer</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Service</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Staff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #888', padding: 8 }}>10:00 AM</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Sarah Johnson</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Full Set</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Alice Wanjiru</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #888', padding: 8 }}>11:30 AM</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Mary Wanjiku</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Overlay</td>
                <td style={{ border: '1px solid #888', padding: 8 }}>Betty Muthoni</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
