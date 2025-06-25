import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2, Star, Palette } from "lucide-react";

const Categories = () => {
  const serviceCategories = {
    acrylics: {
      name: "Acrylics",
      color: "bg-pink-100 text-pink-800",
      services: [
        {
          name: "Full Set",
          price: "KSh 1,500",
          duration: "90 min",
          popular: true,
        },
        {
          name: "Fill-in",
          price: "KSh 800",
          duration: "60 min",
          popular: false,
        },
        {
          name: "Removal",
          price: "KSh 300",
          duration: "30 min",
          popular: false,
        },
        {
          name: "Repair",
          price: "KSh 200",
          duration: "20 min",
          popular: false,
        },
      ],
    },
    gumgel: {
      name: "Gum Gel",
      color: "bg-purple-100 text-purple-800",
      services: [
        {
          name: "Overlay",
          price: "KSh 1,800",
          duration: "75 min",
          popular: true,
        },
        {
          name: "Extension",
          price: "KSh 2,000",
          duration: "90 min",
          popular: true,
        },
        {
          name: "Repair",
          price: "KSh 400",
          duration: "30 min",
          popular: false,
        },
        {
          name: "Removal",
          price: "KSh 500",
          duration: "45 min",
          popular: false,
        },
      ],
    },
    manicure: {
      name: "Manicure/Pedicure",
      color: "bg-blue-100 text-blue-800",
      services: [
        {
          name: "Classic Manicure",
          price: "KSh 800",
          duration: "45 min",
          popular: true,
        },
        {
          name: "Classic Pedicure",
          price: "KSh 1,000",
          duration: "60 min",
          popular: true,
        },
        {
          name: "Mani-Pedi Combo",
          price: "KSh 1,600",
          duration: "90 min",
          popular: true,
        },
        {
          name: "Gel Polish Add-on",
          price: "KSh 400",
          duration: "15 min",
          popular: false,
        },
      ],
    },
    stickons: {
      name: "Stick-ons",
      color: "bg-green-100 text-green-800",
      services: [
        {
          name: "Press-on Nails",
          price: "KSh 600",
          duration: "30 min",
          popular: true,
        },
        {
          name: "Nail Stickers",
          price: "KSh 300",
          duration: "20 min",
          popular: false,
        },
        {
          name: "Gems & Stones",
          price: "KSh 500",
          duration: "25 min",
          popular: false,
        },
        {
          name: "Custom Design",
          price: "KSh 800",
          duration: "45 min",
          popular: false,
        },
      ],
    },
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
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Service Categories</h2>
            </div>
            <button style={{ border: '1px solid #888', background: '#e0e0e0', color: '#333', padding: '6px 16px', fontWeight: 'bold', fontFamily: 'inherit', borderRadius: 0, cursor: 'pointer' }}>
              + Add Category
            </button>
          </div>
        </header>
        <div style={{ padding: 24 }}>
          {/* Example of a classic VB6-style table for categories */}
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #888' }}>
            <thead>
              <tr style={{ background: '#e0e0e0' }}>
                <th style={{ border: '1px solid #888', padding: 8 }}>Category</th>
                <th style={{ border: '1px solid #888', padding: 8 }}>Services</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(serviceCategories).map((cat: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{cat.name}</td>
                  <td style={{ border: '1px solid #888', padding: 8 }}>{cat.services.map((s: any) => s.name).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
