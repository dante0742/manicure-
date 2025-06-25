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
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 'bold', color: '#333' }}>ManiPay</h1>
              <span style={{ fontSize: 22, fontWeight: 'bold', color: '#888', margin: '0 8px' }}>|</span>
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Staff Management</h2>
            </div>
            <Button style={{ borderRadius: 0, background: '#e0e0e0', border: '1px solid #888', color: '#333' }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Staff
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Staff Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">4</div>
                <p className="text-sm text-muted-foreground">Total Staff</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Available Now</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">4.7</div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">844</div>
                <p className="text-sm text-muted-foreground">Total Services</p>
              </CardContent>
            </Card>
          </div>

          {/* Staff Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staffMembers.map((staff) => (
              <Card key={staff.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={staff.avatar} />
                        <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{staff.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {staff.role}
                        </p>
                      </div>
                    </div>
                    <span style={getStatusColor(staff.status)}>
                      {staff.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{staff.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {staff.completedServices} services completed
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {staff.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {staff.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {staff.schedule}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex gap-2 flex-wrap">
                      {staff.specialties.map((specialty, index) => (
                        <span key={index} style={{ ...getStatusColor(specialty) }} className="px-2 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Schedule
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Staff Schedule Table */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Staff Member</TableHead>
                    <TableHead>Monday</TableHead>
                    <TableHead>Tuesday</TableHead>
                    <TableHead>Wednesday</TableHead>
                    <TableHead>Thursday</TableHead>
                    <TableHead>Friday</TableHead>
                    <TableHead>Saturday</TableHead>
                    <TableHead>Sunday</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={staff.avatar} />
                            <AvatarFallback>
                              {staff.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{staff.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[0]) }}>
                          {staff.schedule.split('-')[0]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[1]) }}>
                          {staff.schedule.split('-')[1]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[2]) }}>
                          {staff.schedule.split('-')[2]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[3]) }}>
                          {staff.schedule.split('-')[3]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[4]) }}>
                          {staff.schedule.split('-')[4]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[5]) }}>
                          {staff.schedule.split('-')[5]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ ...getStatusColor(staff.schedule.split('-')[6]) }}>
                          {staff.schedule.split('-')[6]}
                        </span>
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

export default Staff;
