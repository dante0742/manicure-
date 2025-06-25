import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
} from "lucide-react";

const Account = () => {
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
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Account Settings</h2>
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>
              Preferences
            </button>
          </div>
        </header>
        <div style={{ padding: 24 }}>
          <form>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>Full Name</label>
              <input type="text" defaultValue="Jane Doe" style={{ width: '100%', border: '1px solid #888', background: '#fff', padding: 6, borderRadius: 0, fontFamily: 'inherit' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>Email</label>
              <input type="email" defaultValue="admin@manipay.com" style={{ width: '100%', border: '1px solid #888', background: '#fff', padding: 6, borderRadius: 0, fontFamily: 'inherit' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>Phone</label>
              <input type="text" defaultValue="+254 700 123 456" style={{ width: '100%', border: '1px solid #888', background: '#fff', padding: 6, borderRadius: 0, fontFamily: 'inherit' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>Role</label>
              <span style={{ background: '#e0e0e0', padding: '2px 8px', border: '1px solid #888', borderRadius: 0 }}>Admin</span>
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
