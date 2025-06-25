import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Wallet, TrendingUp } from "lucide-react";

interface RevenueStatsProps {
  dailyRevenue?: number;
  weeklyRevenue?: number;
  monthlyRevenue?: number;
  averageTransaction?: number;
  popularServices?: Array<{ name: string; count: number; revenue: number }>;
}

const RevenueStats: React.FC<RevenueStatsProps> = ({
  dailyRevenue = 12500,
  weeklyRevenue = 87500,
  monthlyRevenue = 350000,
  averageTransaction = 2500,
  popularServices = [
    { name: "Gum Gel", count: 24, revenue: 48000 },
    { name: "Acrylics", count: 18, revenue: 36000 },
    { name: "Manicure", count: 15, revenue: 22500 },
  ],
}) => {
  return (
    <Card className="w-full h-full bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-pink-500" />
          Revenue Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Today's Revenue</p>
                <h3 className="text-2xl font-bold">
                  KSh {dailyRevenue.toLocaleString()}
                </h3>
              </div>
              <div className="h-16 w-32 bg-pink-50 rounded-md flex items-center justify-center">
                <BarChart className="h-10 w-10 text-pink-500" />
              </div>
            </div>

            <div className="h-[180px] w-full bg-gradient-to-b from-pink-50 to-transparent rounded-md flex items-end p-2">
              {/* Placeholder for actual chart */}
              <div className="flex items-end justify-between w-full h-full">
                {[40, 65, 35, 85, 55, 60, 70].map((height, i) => (
                  <div key={i} className="w-8 mx-1">
                    <div
                      className="bg-pink-400 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                    <p className="text-xs text-center mt-1">{i + 8}h</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  This Week's Revenue
                </p>
                <h3 className="text-2xl font-bold">
                  KSh {weeklyRevenue.toLocaleString()}
                </h3>
              </div>
              <div className="h-16 w-32 bg-pink-50 rounded-md flex items-center justify-center">
                <LineChart className="h-10 w-10 text-pink-500" />
              </div>
            </div>

            <div className="h-[180px] w-full bg-gradient-to-b from-pink-50 to-transparent rounded-md flex items-end p-2">
              {/* Placeholder for actual chart */}
              <div className="flex items-end justify-between w-full h-full">
                {[50, 70, 60, 85, 75, 45, 65].map((height, i) => (
                  <div key={i} className="w-8 mx-1">
                    <div
                      className="bg-pink-400 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                    <p className="text-xs text-center mt-1">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  This Month's Revenue
                </p>
                <h3 className="text-2xl font-bold">
                  KSh {monthlyRevenue.toLocaleString()}
                </h3>
              </div>
              <div className="h-16 w-32 bg-pink-50 rounded-md flex items-center justify-center">
                <LineChart className="h-10 w-10 text-pink-500" />
              </div>
            </div>

            <div className="h-[180px] w-full bg-gradient-to-b from-pink-50 to-transparent rounded-md flex items-end p-2">
              {/* Placeholder for actual chart */}
              <div className="flex items-end justify-between w-full h-full">
                {[40, 55, 70, 65, 80, 75, 60].map((height, i) => (
                  <div key={i} className="w-8 mx-1">
                    <div
                      className="bg-pink-400 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                    <p className="text-xs text-center mt-1">W{i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Avg. Transaction</p>
              <p className="font-medium">
                KSh {averageTransaction.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <Wallet className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600 font-medium">
                +12% this week
              </span>
            </div>
          </div>

          <h4 className="font-medium mb-2">Most Popular Services</h4>
          <div className="space-y-2">
            {popularServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${index === 0 ? "bg-pink-500" : index === 1 ? "bg-purple-500" : "bg-blue-500"}`}
                  />
                  <span className="text-sm">{service.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">
                    ({service.count})
                  </span>
                </div>
                <span className="text-sm font-medium">
                  KSh {service.revenue.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueStats;
