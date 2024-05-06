# Job Search Platform

## Overview

This is a web application that allows users to search for job listings based on various criteria. It provides filtering options for users to refine their search results according to their preferences.

## Features

- Search for job listings based on company name, location, remote/on-site, tech stack, job role, minimum base pay, and minimum experience required.
- Infinite scrolling for loading more job listings as the user scrolls down the page.
- Responsive design for optimal viewing experience across different devices.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Material-UI**: React components for implementing a Material Design-based user interface.
- **Hooks**: Utilized custom hooks such as `useDebounce` and `useThrottle` for performance optimization.
- **Fetch API**: Used for making HTTP requests to fetch job listings from the backend API.

## Getting Started

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Subhrajitag/candidate-application-form.git
   ```
2. Navigate to the project directory:
   cd candidate-application-form
3. Install dependencies:
   npm install

### Running the Application

1. Start the development server:
   npm start
2. Open your web browser and go to http://localhost:3000 to view the application.

Additional Information

- The backend API used for fetching job listings is hosted at https://api.weekday.technology/adhoc/getSampleJdJSON.


## Credits

This project was created by Subhrajita Garnayak .
