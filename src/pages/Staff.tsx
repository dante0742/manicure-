import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Calendar,
  Clock,
  Star,
  Phone,
  Mail,
  Palette,
} from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Alice Wanjiru",
      role: "Senior Nail Technician",
      email: "alice.w@manipay.com",
      phone: "+254 710 123 456",
      specialties: ["Acrylics", "Gum Gel"],
      status: "Available",
      rating: 4.9,
      completedServices: 245,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      schedule: "Mon-Fri 9AM-6PM",
    },
    {
      id: 2,
      name: "Betty Muthoni",
      role: "Nail Technician",
      email: "betty.m@manipay.com",
      phone: "+254 711 234 567",
      specialties: ["Manicure", "Pedicure"],
      status: "Busy",
      rating: 4.7,
      completedServices: 189,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Betty",
      schedule: "Tue-Sat 10AM-7PM",
    },
    {
      id: 3,
      name: "Catherine Njeri",
      role: "Junior Nail Technician",
      email: "catherine.n@manipay.com",
      phone: "+254 712 345 678",
      specialties: ["Stick-ons", "Basic Manicure"],
      status: "Available",
      rating: 4.5,
      completedServices: 98,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Catherine",
      schedule: "Mon-Wed-Fri 11AM-5PM",
    },
    {
      id: 4,
      name: "Diana Akinyi",
      role: "Senior Nail Technician",
      email: "diana.a@manipay.com",
      phone: "+254 713 456 789",
      specialties: ["Gum Gel", "Nail Art"],
      status: "Off Duty",
      rating: 4.8,
      completedServices: 312,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
      schedule: "Thu-Sun 9AM-6PM",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Busy":
        return "bg-yellow-100 text-yellow-800";
      case "Off Duty":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Staff Management</h2>
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>
              + Add Staff
            </button>
          </div>
        </header>
        <div style={{ padding: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #888' }}>
            <thead>
              <tr style={{ background: '#e0e0e0' }}>
                <th style={{ border: '1px solid #888', padding: 8 }}>Name</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Role</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Email</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Phone</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Status</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff) => (
                <tr key={staff.id}>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{staff.name}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{staff.role}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{staff.email}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{staff.phone}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <span style={{ background: '#e0e0e0', padding: '2px 8px', border: '1px solid #888', borderRadius: 0 }}>{staff.status}</span>
                  </td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>
                    <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '4px 10px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, marginRight: 4, cursor: 'pointer' }}>View</button>
                    <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '4px 10px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>Edit</button>
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

export default Staff;
