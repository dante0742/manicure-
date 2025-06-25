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
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 'bold', color: '#333' }}>ManiPay</h1>
              <span style={{ fontSize: 22, fontWeight: 'bold', color: '#888', margin: '0 8px' }}>|</span>
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Customer Management</h2>
            </div>
            <Button style={{ borderRadius: 0, background: '#e0e0e0', border: '1px solid #888', color: '#333' }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search customers by name, email, or phone..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Export</Button>
              </div>
            </CardContent>
          </Card>

          {/* Customer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">127</div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">23</div>
                <p className="text-sm text-muted-foreground">New This Month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">15</div>
                <p className="text-sm text-muted-foreground">VIP Customers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">KSh 45,200</div>
                <p className="text-sm text-muted-foreground">
                  Avg. Lifetime Value
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Customers Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={customer.avatar} />
                            <AvatarFallback>
                              {customer.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {customer.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3" />
                            {customer.phone}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            {customer.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {customer.lastVisit}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {customer.totalSpent}
                      </TableCell>
                      <TableCell>
                        <span style={{
                          backgroundColor: customer.status === "VIP" ? "#007bff" : customer.status === "New" ? "#6c757d" : "#f0f0f0",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "9999px",
                          color: customer.status === "VIP" ? "#fff" : customer.status === "New" ? "#fff" : "#333"
                        }}>
                          {customer.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Book
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Customers;
