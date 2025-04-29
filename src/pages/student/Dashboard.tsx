
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScheduleCalendar } from "@/components/schedule-calendar";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user || JSON.parse(user).role !== "student") {
      navigate("/");
      return;
    }
    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  if (!currentUser) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome, {currentUser.name}</CardTitle>
            <CardDescription>
              Roll No: {currentUser.rollNo}
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Class Schedule</CardTitle>
            <CardDescription>
              View the current class schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScheduleCalendar editable={false} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;
