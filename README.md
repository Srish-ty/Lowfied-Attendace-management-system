#  Attendance Management System with Image Capture

Objective:
Develop a web application that allows a manager to create a roster for staff. Staff members should be able to mark their attendance by capturing their image using the webcam on a site-available laptop.

Backend Requirements:
1. Authentication & Authorization:
Implement roles: Manager and Staff.
Only authenticated managers can create/edit/view the roster.
Only authenticated staff can mark their attendance.
2. Roster Management:
Managers should be able to:
Add new staff members to the roster.
Set working days and shifts for each staff member.
View the complete roster.
Edit the details of any staff member in the roster.

3. Attendance Management:
Staff members should be able to:
View their assigned shifts.
Mark their attendance by capturing an image using the webcam.
The system should store the attendance data, timestamp, and the captured image.


Frontend Requirements:
1. Manager's Dashboard:
Authentication portal.
A panel to create/edit/view the roster.
A view to see attendance records, along with the captured images.

2. Staff's Portal:
Authentication portal.
A view to see their assigned shifts.
A button or mechanism to capture an image using the webcam and mark attendance.

3. Design & Responsiveness:
Ensure the design is user-friendly.
The application should be responsive and usable on both desktop and mobile devices, keeping in mind the primary access will be via a laptop on site.


Technical Specifications:
Use any backend framework of your choice (e.g., Flask, Django, Express, Spring Boot).
Use any frontend framework/library of your choice (e.g., React, Angular, Vue).
Use any database of your choice (e.g., PostgreSQL, MySQL, MongoDB).

Deliverables:
Source code for the backend and frontend.
A README file containing:
Steps to set up and run the application.
Any assumptions you made while building the application.
Bonus (if any): Additional features or improvements you added or would like to add.

Evaluation Criteria:
Functionality: Does the application perform all the specified requirements?

Code Quality: Is the code organized, clean, and maintainable?

Design: Is the user interface intuitive and responsive?

Documentation: Is the provided README clear and comprehensive?
