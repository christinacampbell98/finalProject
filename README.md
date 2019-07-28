# Rubric-file-structure
File structure for iX Full stack Project 

## Project Setup

### Create Project Via CLI

Navigate to the project file

```bash
cd Rubric-file-structure
cd Admin Panel
```
Create project

```bash
ng new admin-panel
```
Do the same for projects:

Consumer Mobile App

```bash
ionic start consumer-mobile-app
```

Provider Mobile App

```bash
ionic start provider-mobile-app
```

API

Create file structure with server.js located in a folder called api

```bash
mkdir api
cd api 
npm init
```

### Project Structure 

Generate a mark down table similar to the one in root directory of this project. The following website can be used to do https://www.tablesgenerator.com/markdown_tables or edit the Project File Structure.txt file in the root directory

Only files included in this mark down table with be marked!

Ensure that the files included in the mark down table related the sections specified in the table.

Please include the mark down table in the README.md file in the root directory of the project.

### Example of Project Structure 

| PROJECT             | COMPONENT          | FILE NAMES                                                                                                                                                                              |
|---------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consumer mobile app | Login              | Rubric-file-structure/consumer-mobile-app/consumer-mobile-app/src/app/pages/home            |
| Consumer mobile app | Registration       | /Rubric-file-structure/consumer-mobile-app/consumer-mobile-app/src/app/pages/register  |
| Consumer mobile app | User Profile       |Rubric-file-structure/consumer-mobile-app/consumer-mobile-app/src/app/pages/profile                |
| Consumer mobile app | List of Properties |Rubric-file-structure/consumer-mobile-app/consumer-mobile-app/src/app/pages/explore   |
| Provider mobile app | Login              | Rubric-file-structure/provider-mobile-app/provider-mobile-app/src/app/pages/home  |
| Provider mobile app | Registration       |Rubric-file-structure/provider-mobile-app/provider-mobile-app/src/app/pages/register |
| Provider mobile app | User Profile       | Rubric-file-structure/provider-mobile-app/provider-mobile-app/src/app/pages/profile  |
| Provider mobile app | List of Properties |Rubric-file-structure/provider-mobile-app/provider-mobile-app/src/app/pages/explore   |
| Provider mobile app | List of Bookings   | Rubric-file-structure/provider-mobile-app/provider-mobile-app/src/app/pages/booking-request  |
| Admin Panel         | Users              | Rubric-file-structure/admin-panel/admin-panel/src/app/users |
| Admin Panel         | Bookings           | Rubric-file-structure/admin-panel/admin-panel/src/app/bookings  |
| API                 | Users              |Rubric-file-structure/API/api/src/api
| API                 | Bookings           | Rubric-file-structure/API/api/src/api/booking-routes.js                                               |

### Change Git Remote URL

Create new repository on GitHub.

Change the git URL associated with the project 

```bash
git remote set-url origin < new URL of your GitHub project (click 'Clone or download' button on GitHub site to see URL) >
```

Ensure that the git URL has been updated.

```bash
git remote -v
```

