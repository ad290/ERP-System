
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useData, ScheduleEntry } from "@/contexts/DataContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

// Time slots from 8am to 12pm
const timeSlots = ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00"];

// Days of the week
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type ScheduleCalendarProps = {
  editable?: boolean;
  professorFilter?: string;
};

export function ScheduleCalendar({ editable = false, professorFilter }: ScheduleCalendarProps) {
  const { schedule, departments, addScheduleEntry, updateScheduleEntry, removeScheduleEntry, getAllCourses } = useData();
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("101");
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);

  // Filter schedule entries if professorFilter is provided
  const filteredSchedule = useMemo(() => {
    if (!professorFilter) return schedule;
    return schedule.filter(entry => entry.professor === professorFilter);
  }, [schedule, professorFilter]);

  // Get available professors based on selected department
  const availableProfessors = useMemo(() => {
    if (!selectedDepartment) return [];
    const dept = departments.find(d => d.name === selectedDepartment);
    return dept?.professors || [];
  }, [departments, selectedDepartment]);

  const openAddDialog = (day: string, time: string) => {
    // Check if there's an existing entry
    const existingEntry = filteredSchedule.find(
      entry => entry.day === day && entry.time === time
    );

    if (existingEntry) {
      setEditingEntryId(existingEntry.id);
      setSelectedDay(existingEntry.day);
      setSelectedTime(existingEntry.time);
      setSelectedCourse(existingEntry.course);
      setSelectedDepartment(existingEntry.department);
      setSelectedProfessor(existingEntry.professor);
      setSelectedRoom(existingEntry.roomNo);
    } else {
      setEditingEntryId(null);
      setSelectedDay(day);
      setSelectedTime(time);
      setSelectedCourse("");
      setSelectedDepartment("");
      setSelectedProfessor("");
      setSelectedRoom("101");
    }
    
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!selectedCourse || !selectedDepartment || !selectedProfessor || !selectedRoom) {
      toast.error("Please fill all fields");
      return;
    }

    const entry = {
      day: selectedDay,
      time: selectedTime,
      course: selectedCourse,
      department: selectedDepartment,
      professor: selectedProfessor,
      roomNo: selectedRoom
    };

    if (editingEntryId) {
      updateScheduleEntry(editingEntryId, entry);
      toast.success("Schedule updated successfully");
    } else {
      addScheduleEntry(entry);
      toast.success("Schedule added successfully");
    }

    setIsOpen(false);
  };

  const handleDelete = () => {
    if (editingEntryId) {
      removeScheduleEntry(editingEntryId);
      toast.success("Schedule removed successfully");
      setIsOpen(false);
    }
  };

  // Get classes for a specific day and time slot
  const getScheduleForSlot = (day: string, time: string) => {
    return filteredSchedule.find(
      entry => entry.day === day && entry.time === time
    );
  };

  const availableCourses = useMemo(() => {
    if (!selectedDepartment) return [];
    const dept = departments.find(d => d.name === selectedDepartment);
    return dept?.courses || [];
  }, [departments, selectedDepartment]);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Class Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2"></th>
                  {weekDays.map(day => (
                    <th key={day} className="border p-2 font-medium text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(time => (
                  <tr key={time}>
                    <td className="border p-2 font-medium">{time}</td>
                    {weekDays.map(day => {
                      const entry = getScheduleForSlot(day, time);
                      return (
                        <td key={`${day}-${time}`} className="border p-2 h-24 align-top">
                          {entry ? (
                            <div 
                              className="bg-primary/10 p-2 rounded-md h-full flex flex-col justify-between"
                              onClick={() => editable && openAddDialog(day, time)}
                            >
                              <div>
                                <div className="font-medium">{entry.course}</div>
                                <div className="text-sm text-muted-foreground">{entry.department}</div>
                                <div className="text-sm">{entry.professor}</div>
                                <div className="text-xs">Room: {entry.roomNo}</div>
                              </div>
                              {editable && (
                                <Button variant="outline" size="sm" className="mt-2 w-full">
                                  Edit
                                </Button>
                              )}
                            </div>
                          ) : (
                            editable && (
                              <Button 
                                variant="ghost" 
                                className="w-full h-full flex items-center justify-center"
                                onClick={() => openAddDialog(day, time)}
                              >
                                +
                              </Button>
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingEntryId ? "Edit Schedule" : "Add Schedule"}
            </DialogTitle>
            <DialogDescription>
              {selectedDay} {selectedTime}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="department" className="text-right">
                Department
              </Label>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept.name} value={dept.name}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                Course
              </Label>
              <Select
                value={selectedCourse}
                onValueChange={setSelectedCourse}
                disabled={!selectedDepartment}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map(course => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="professor" className="text-right">
                Professor
              </Label>
              <Select
                value={selectedProfessor}
                onValueChange={setSelectedProfessor}
                disabled={!selectedDepartment}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select professor" />
                </SelectTrigger>
                <SelectContent>
                  {availableProfessors.map(prof => (
                    <SelectItem key={prof} value={prof}>
                      {prof}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="room" className="text-right">
                Room
              </Label>
              <Select
                value={selectedRoom}
                onValueChange={setSelectedRoom}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select room" />
                </SelectTrigger>
                <SelectContent>
                  {["101", "102", "103", "104", "105"].map(room => (
                    <SelectItem key={room} value={room}>
                      {room}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            {editingEntryId && (
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
