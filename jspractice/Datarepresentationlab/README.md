# Data Representation with Code Lab

_Workly_ is a new application that makes it easier than ever to connect with employees that work at your company. They need your help structuring data for their upcoming application.

## Instructions

In the `index.js` file, you will need to build data structures that represent the different data below. When thinking about how to build these structures, consider the following:

1. What data types best represent particular properties?
1. Is there any variability present in the examples? How can you account for that in how you structure the data?

Underneath each comment, write out your example(s). For example, you should create two "employee" data structures, based off of the data below of Caleb and Summer.

## Example data

### Employees

Each employee has a first, middle, and last name. They also have a username that is unique among all employees. They also have a full street address including the street, a potential unit number or code, a city, state, and zip. Finally, each employee has a position and salary that must be recorded.

#### Employee examples

> Caleb William Murphy has the username `caleb.murphy` and lives at 37 E. Shirley St., Middletown, NY 10940. He is the Human Resources Director and has a salary of $146,000.

> Summer Louise Patel has the username `summer.patel` and lives at 939 S. Princeton Lane, Unit B11, Middletown, NY 10940. She is a Software Engineer with a salary of $128,000.

### Departments

Each department has a name and a number of roles. Each role has a title and a quantity associated with it, representing the number of people in that department with that title.

#### Department examples

> The Human Resources department currently has four different roles. There are 5 Coordinators, 2 Managers, 2 Recruiters, and 1 Director.

> The Engineering department currently has six different roles. There is 1 Chief Technology Officer, 1 Director of Software Engineering, 2 Lead Software Engineers, 3 Software Engineers, 3 Junior Software Engineers, and 2 Project Managers.

### Conversations

Part of the application is to allow employees to speak with each other. Each conversation can have multiple members and a number of messages that go between them. Each message is sent by an individual person and has message text that is associated with it.

#### Conversation example

> One conversation between `caleb.murphy` and `summer.patel` could have the following messages:
>
> - `caleb.murphy`: Hi Summer! I just wanted to confirm -- you're hiring for a Junior Software Engineer, not a Software Engineer. Correct?
> - `summer.patel`: Yes, that's right. Thank you!
