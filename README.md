# React-Native-Intern-Assessment

## Introduction

This is a React Native weather app that allows users to search for locations and view their weather details. The app utilizes WeatherAPI for fetching weather data and Redux-Toolkit for state management. This application was written completely in typescript.

## Prerequisites

Make sure you have the following installed before running the project:

- Node.js
- npm or yarn
- Expo CLI
- API Key from https://www.weatherapi.com/

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EmekaManuel/React-Native-Intern-Assessment.git
   cd weather-app
   ```
  
2. **Install Dependencies & Run the Application:**
   ```bash
   npm install
   or
   yarn install
   
   expo start
   or
   yarn start
   ```
   
## Folder Structure
   ```bash
   /src: Contains the source code of the project.
      /api: Contains all calls made to the WeatherAPI
      /components: Reusable React components.
      /navigation: React Navigation setup and navigation-related components.
      /screens: Individual screens of the app.
      /modules: Redux setup, actions, reducers, and store configuration.
      /utils: Utility functions and localstorage files.
      /assets: Static assets such as images.
      /types: Contains exportable types and interfaces used throughout the project
      /constants: Contains the weather images 
```

## Additional Notes
   ```bash
   - The app uses AsyncStorage for storing bookmarks locally.
   - The default location is set to Lagos, Nigeria.
   - The styling is handled using shopify-restyle and css.   
   - Redux is employed for state management, allowing efficient data flow between components.
   - The app periodically fetches bookmarked locations' weather data in the background.
```

## Possible Improvements
```bash
- Implement user authentication to provide a personalized experience.
- Enhance the UI/UX for a more polished look.
- Implement more advanced weather features and forecasts.
```

- Feel free to contribute, report issues, or suggest improvements!

