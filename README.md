THRIVE HEALTH HACKATHON

NAME : KIRUTHIKA V G
ROLL NO : 21PT10

PatientForm Component Documentation

STACK USED : PERN (POSTGRESQL, EXPRESS JS, REACT, NODE JS)

FRONT END : REACT

BACKEND : EXPRESS JS

Overview : 
The PatientForm component is a React component designed to create a patient enrollment form for the Ontario Ministry of Health. 
It allows users to input various patient information, validates the input data, and generates a PDF document based on the entered information.

Dependencies:

@react-pdf/renderer: This package is used for generating PDF documents in React applications.

Usage:
To use the PatientForm component, follow these steps:

Import the component into your React application.
Place the component within your application's component hierarchy.
Customize the component as needed by modifying its props, styling, or functionality.

State:
The component uses React's useState hook to manage its state. The state variables are as follows:

formData: An object containing patient information fields and their values.

Validation:
The component validates user input for various form fields such as name, date of birth, email, postal code, etc. Validation errors are displayed below the corresponding input fields.

PDF Generation:
Upon filling out the form and clicking the "Generate PDF" button, the component generates a PDF document using the entered data. 
The PDF document includes patient information, address information, contact information, and doctor information.

Styling:
The component uses inline styling with the StyleSheet.create method from @react-pdf/renderer for styling PDF elements.

NOTE : 
In Back-end, Routes are created for form to submit their details and generate pdf. Database hospital is created to store the patient details - tried

