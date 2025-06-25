import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', minHeight: '100vh', background: '#e0e0e0' }}>
    <Sidebar />
    <main style={{ flex: 1, padding: 24 }}>{children}</main>
  </div>
);

export default MainLayout; 