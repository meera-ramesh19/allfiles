
1. Find all active students

Create a simple SELECT query to display student information of all ACTIVE students.

TABLE STRUCTURE:

students
Id	FirstName	LastName	IsActive

Note: IsActive (true or false)
ALGORITHMS


select id,
FirstName,
LastName, IsActive from students
where IsActive
