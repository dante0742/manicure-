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
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="w-full">
        {/* Header */}
        <header className="border-b p-4 bg-background">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-pink-600 rounded-full p-2">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-pink-600">ManiPay</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Today
              </Button>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=salon" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +2 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Today's Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">KSh 15,200</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +KSh 2,400 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground mt-1">
                  4 remaining today
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Appointments Section - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <AppointmentsList />
            </div>

            {/* Revenue Stats Section - Takes 1/3 of the space */}
            <div>
              <RevenueStats />
            </div>
          </div>

          {/* Popular Services Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Popular Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="acrylics">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="acrylics">Acrylics</TabsTrigger>
                    <TabsTrigger value="gumgel">Gum Gel</TabsTrigger>
                    <TabsTrigger value="manicure">
                      Manicure/Pedicure
                    </TabsTrigger>
                    <TabsTrigger value="stickons">Stick-ons</TabsTrigger>
                  </TabsList>
                  <TabsContent value="acrylics">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Full Set", "Fill-in", "Removal"].map((service) => (
                        <Card key={service}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <p className="font-medium">{service}</p>
                              <p className="text-sm text-muted-foreground">
                                KSh 1,500
                              </p>
                            </div>
                            <Button size="sm">Book</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="gumgel">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Overlay", "Extension", "Repair"].map((service) => (
                        <Card key={service}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <p className="font-medium">{service}</p>
                              <p className="text-sm text-muted-foreground">
                                KSh 1,800
                              </p>
                            </div>
                            <Button size="sm">Book</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="manicure">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Manicure", "Pedicure", "Mani-Pedi Combo"].map(
                        (service) => (
                          <Card key={service}>
                            <CardContent className="p-4 flex justify-between items-center">
                              <div>
                                <p className="font-medium">{service}</p>
                                <p className="text-sm text-muted-foreground">
                                  KSh 1,200
                                </p>
                              </div>
                              <Button size="sm">Book</Button>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="stickons">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Press-on Nails", "Nail Stickers", "Gems & Stones"].map(
                        (service) => (
                          <Card key={service}>
                            <CardContent className="p-4 flex justify-between items-center">
                              <div>
                                <p className="font-medium">{service}</p>
                                <p className="text-sm text-muted-foreground">
                                  KSh 800
                                </p>
                              </div>
                              <Button size="sm">Book</Button>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
