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
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 'bold', color: '#333' }}>ManiPay</h1>
              <span style={{ fontSize: 22, fontWeight: 'bold', color: '#888', margin: '0 8px' }}>|</span>
              <h2 style={{ fontSize: 22, fontWeight: 'bold' }}>Service Categories</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button style={{ borderRadius: 0, background: '#e0e0e0', border: '1px solid #888', color: '#333' }}>
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
              <Button style={{ borderRadius: 0, background: '#e0e0e0', border: '1px solid #888', color: '#333' }}>
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Category Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ background: category.color, padding: '2px 8px', borderRadius: 4 }}>
                      {category.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.services.length} services
                    </span>
                  </div>
                  <div className="text-2xl font-bold">
                    {category.services.filter((s) => s.popular).length}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Popular Services
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Categories Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Manage Services</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="acrylics">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="acrylics">Acrylics</TabsTrigger>
                  <TabsTrigger value="gumgel">Gum Gel</TabsTrigger>
                  <TabsTrigger value="manicure">Manicure/Pedicure</TabsTrigger>
                  <TabsTrigger value="stickons">Stick-ons</TabsTrigger>
                </TabsList>

                {Object.entries(serviceCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {category.name} Services
                        </h3>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add {category.name} Service
                        </Button>
                      </div>

                      <div className="grid gap-4">
                        {category.services.map((service, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">
                                        {service.name}
                                      </h4>
                                      {service.popular && (
                                        <span style={{ background: '#e0e0e0', padding: '2px 8px', borderRadius: 4 }}>
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                      <span>Price: {service.price}</span>
                                      <span>Duration: {service.duration}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Plus className="h-6 w-6" />
                  <span>Add New Service</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Edit className="h-6 w-6" />
                  <span>Bulk Edit Prices</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Star className="h-6 w-6" />
                  <span>Manage Popular Services</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;
