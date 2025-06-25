import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MoreHorizontal,
  UserRound,
  Scissors,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Appointment {
  id: string;
  customerName: string;
  serviceType: string;
  time: string;
  staffMember: string;
  status: "upcoming" | "in-progress" | "completed";
}

interface AppointmentsListProps {
  appointments?: Appointment[];
  date?: Date;
  onCheckIn?: (appointmentId: string) => void;
  onReschedule?: (appointmentId: string) => void;
  onCancel?: (appointmentId: string) => void;
}

const AppointmentsList = ({
  appointments = [
    {
      id: "1",
      customerName: "Jane Smith",
      serviceType: "Acrylics - Full Set",
      time: "10:00 AM",
      staffMember: "Mary Johnson",
      status: "upcoming",
    },
    {
      id: "2",
      customerName: "Emily Davis",
      serviceType: "Manicure - Regular",
      time: "11:30 AM",
      staffMember: "Sarah Williams",
      status: "in-progress",
    },
    {
      id: "3",
      customerName: "Lisa Brown",
      serviceType: "Gum Gel - French Tips",
      time: "1:00 PM",
      staffMember: "Mary Johnson",
      status: "upcoming",
    },
    {
      id: "4",
      customerName: "Michelle Lee",
      serviceType: "Stick-ons - Custom Design",
      time: "2:30 PM",
      staffMember: "Sarah Williams",
      status: "upcoming",
    },
    {
      id: "5",
      customerName: "Karen Wilson",
      serviceType: "Pedicure - Deluxe",
      time: "9:30 AM",
      staffMember: "Mary Johnson",
      status: "completed",
    },
  ],
  date = new Date(),
  onCheckIn = () => {},
  onReschedule = () => {},
  onCancel = () => {},
}: AppointmentsListProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Upcoming
          </Badge>
        );
      case "in-progress":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            In Progress
          </Badge>
        );
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Completed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-semibold">
              Today's Appointments
            </CardTitle>
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </Button>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCheckIn={onCheckIn}
                onReschedule={onReschedule}
                onCancel={onCancel}
              />
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {appointments
              .filter((app) => app.status === "upcoming")
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onCheckIn={onCheckIn}
                  onReschedule={onReschedule}
                  onCancel={onCancel}
                />
              ))}
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            {appointments
              .filter((app) => app.status === "in-progress")
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onCheckIn={onCheckIn}
                  onReschedule={onReschedule}
                  onCancel={onCancel}
                />
              ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {appointments
              .filter((app) => app.status === "completed")
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onCheckIn={onCheckIn}
                  onReschedule={onReschedule}
                  onCancel={onCancel}
                />
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface AppointmentCardProps {
  appointment: Appointment;
  onCheckIn: (appointmentId: string) => void;
  onReschedule: (appointmentId: string) => void;
  onCancel: (appointmentId: string) => void;
}

const AppointmentCard = ({
  appointment,
  onCheckIn,
  onReschedule,
  onCancel,
}: AppointmentCardProps) => {
  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Upcoming
          </Badge>
        );
      case "in-progress":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            In Progress
          </Badge>
        );
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Completed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 border rounded-lg flex justify-between items-center bg-white hover:bg-gray-50">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
          {appointment.customerName.charAt(0)}
        </div>
        <div>
          <h3 className="font-medium">{appointment.customerName}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Scissors className="h-3 w-3" />
            <span>{appointment.serviceType}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{appointment.time}</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <UserRound className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{appointment.staffMember}</span>
        </div>

        <div>{getStatusBadge(appointment.status)}</div>

        <div className="flex items-center gap-2">
          {appointment.status === "upcoming" && (
            <Button
              size="sm"
              variant="default"
              className="bg-pink-600 hover:bg-pink-700"
              onClick={() => onCheckIn(appointment.id)}
            >
              Check In
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {appointment.status !== "completed" && (
                <>
                  <DropdownMenuItem
                    onClick={() => onReschedule(appointment.id)}
                  >
                    Reschedule
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onCancel(appointment.id)}
                    className="text-red-600"
                  >
                    Cancel
                  </DropdownMenuItem>
                </>
              )}
              {appointment.status === "completed" && (
                <DropdownMenuItem>View Details</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsList;
