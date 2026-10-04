# Pathology Report Generator

A web-based pathology report generation system built with **React.js** and **Spring Boot**.

The application allows users to select a pathology report type, enter patient and report information, preview the report, and generate a formatted Microsoft Word document.

## Features

* Multiple pathology report types/templates
* Predefined content based on selected report type
* Editable report fields
* Patient information entry
* Doctor and designation selection
* Report preview
* Automatic Word (`.docx`) report generation
* Consistent report formatting
* No patient/report data is stored in a database
* React production build integrated with Spring Boot
* Can be packaged as a standalone Windows application

## Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Java 17+
* Spring Boot 3
* Maven
* Apache POI

### Document Generation

* Microsoft Word `.docx`
* Word template with placeholders

## Project Structure

```text
pathology-report-generator/
│
├── pathology-report-app/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── pathology-report-api/
│   ├── src/
│   │   └── main/
│   │       └── resources/
│   │           ├── static/
│   │           └── templates/
│   │               └── Histopathology-report.docx
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── .gitignore
└── README.md
```

## How It Works

```text
User
 │
 ▼
React Application
 │
 │ Select report type
 │ Enter/edit report details
 ▼
Report Preview
 │
 ▼
Spring Boot REST API
 │
 ▼
Word Report Generation
 │
 ▼
Histopathology-report.docx
 │
 ▼
Download Report
```

## Report Templates

The application currently supports multiple report types, including:

* Histopathology Report
* Appendix
* Bone Marrow Biopsy
* Endometrial Biopsy
* Bilateral Fallopian Tubes
* Fibroadenoma
* Lipoma
* Pericardial Fluid
* Tonsil
* Uterus with Cervix
* Uterus with Cervix and Bilateral Adnexae

The report format remains consistent while the predefined content changes according to the selected report type.

## Running the Application in Development

### Backend

Navigate to:

```text
pathology-report-api
```

Run:

```bash
mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Frontend

Navigate to:

```text
pathology-report-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend is normally available at:

```text
http://localhost:5173
```

## Production Build

Build the React application:

```bash
npm run build
```

The generated frontend files can be copied into the Spring Boot static resources directory:

```text
pathology-report-api/src/main/resources/static/
```

Then build the Spring Boot application:

```bash
mvnw.cmd clean package
```

The generated JAR will be available under:

```text
pathology-report-api/target/
```

## Standalone Windows Application

The application can be packaged as a Windows installer using Java `jpackage`.

The packaged application includes its own Java runtime, allowing it to run on a Windows system without requiring a separate Java installation.

## Data Privacy

The application is designed without persistent patient/report data storage.

Report information is entered by the user and used to generate the Word document.

> Do not commit real patient information, confidential documents, passwords, API keys, or other sensitive information to this repository.

## Future Improvements

* Automatic browser launch when the application starts
* Additional pathology report templates
* Improved report preview
* Customizable doctor/signatory configuration
* Windows installer improvements
* Application configuration options

## Author

Nikhil Kakade

Java Developer | Spring Boot | Microservices | React.js
