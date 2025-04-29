# 📘 ERP Scheduling System

This system provides role-based dashboards for **Admin**, **Professors**, **Guest Professors**, and **Students** to manage and view class schedules within a college ERP platform.

---

## 🧑‍🏫 Guest Professor Login

### 🔐 Login Fields:
- Name  
- Role  
- Department  
- Email  
- Password  

### 📥 Seeded Guest Professor Credentials:

| Name               | Role            | Department       | Email                       | Password      |
|--------------------|------------------|------------------|-----------------------------|----------------|
| Guest Prof Suresh  | Guest Professor  | Computer Science | erpguestsuresh@gmail.com    | password123    |
| Guest Prof Gourav  | Guest Professor  | AIML             | erpguestgourav@gmail.com    | password123    |
| Guest Prof Narayan | Guest Professor  | Data Science     | erpguest@gmail.com          | password123    |

### 🎛️ Dashboard Features:
- View the calendar scheduled by Admin.
- Schedule or update classes **linked to their name**.

---

## 👨‍🏫 Full-Time Professor Login

### 🔐 Login Fields:
- Name of Professor  
- Role  
- Department  
- Email  
- Password  

### 📥 Seeded Professor Credentials:

| Name         | Role       | Department       | Email               | Password      |
|--------------|------------|------------------|----------------------|----------------|
| Prof. Amit   | Professor  | Computer Science | amiterp@gmail.com    | password123    |
| Prof. Rohit  | Professor  | AIML             | rohiterp@gmail.com   | password123    |
| Prof. Virat  | Professor  | Data Science     | amiterp@gmail.com    | password123    |

### 🎛️ Dashboard Features:
- View the calendar scheduled by Admin.
- Modify or clear schedules linked to their name.
- Save changes to the database.

---

## 🛡️ Admin Login

### 🔐 Login Fields:
- Name  
- Email  
- Password  

### 📥 Seeded Admin Credential:

| Name  | Email                | Password      |
|--------|----------------------|----------------|
| Admin | erpadmin@gmail.com   | password123    |

### 🧰 Dashboard Features:

> **⏰ School Timings:** 8 AM – 12 PM  
> **🕒 Period Duration:** 1 hour each

#### 📚 1. Course Management:
- Add new courses using the following fields:
  - `Course Name`
  - `Department` (enum: `Computer Science`, `AIML`, `Data Science`)
  - Button: **Add Course**

#### 📅 2. Scheduling Classes:
- Schedule for:
  - **Current Day**
  - **Current Week**
- Input Fields:
  - Course Name (dynamic enum including newly added courses)
  - Department (enum)
  - Professor (from both full-time and guest lists)
  - Room Number (enum: `101`, `102`, `103`, `104`, `105`)
- Click on a specific day using a calendar component (e.g. in Next.js):
  - Choose time slots:  
    - 8 AM – 9 AM  
    - 9 AM – 10 AM  
    - 10 AM – 11 AM  
    - 11 AM – 12 PM
  - Button: **Schedule**

---

## 🏫 Departments and Courses

> Seed this data into the database.

### 1️⃣ Computer Science  
**Linked Professors:** Prof. Amit, Guest Prof Suresh  
- Operating Systems  
- Computer Networks  
- Database Management Systems  

### 2️⃣ AIML (Artificial Intelligence & ML)  
**Linked Professors:** Prof. Rohit, Guest Prof Gourav  
- Machine Learning Fundamentals  
- Deep Learning Techniques  
- Natural Language Processing  

### 3️⃣ Data Science  
**Linked Professors:** Prof. Virat, Guest Prof Narayan  
- Statistics for Data Science  
- Big Data Analytics  
- Data Mining and Warehousing  

> ✅ Any new course added via Admin is linked to its respective department and saved to the department-course data file.

---

## 🎓 Student Login

### 🔐 Login Fields:
- Name  
- Roll Number  
- Email  
- Password  

### 📥 Seeded Student Credentials:

| Name         | Roll No | Email                 | Password      |
|--------------|----------|------------------------|----------------|
| Aditya Pawar | 01       | adityaerp@gmail.com    | password123    |
| Kiran Sharma | 02       | kiranaerp@gmail.com    | password123    |
| Rahul Rajput | 03       | rahulerp@gmail.com     | password123    |
| Vivek Tiwari | 04       | vivekerp@gmail.com     | password123    |
| Dhruv Dixit  | 05       | dhruverp@gmail.com     | password123    |

### 🎛️ Dashboard Features:
- View the **saved calendar** with daily and weekly class schedules.

---

## ✅ Notes

- Admin-created courses and schedules are dynamically reflected across all user dashboards.
- Use a feature-rich calendar library in **Next.js** for dynamic scheduling.
- Each department links professors, courses, and room scheduling in a clean, manageable interface.


