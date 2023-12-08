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

## Application Features
   ```bash
      ✅ Use a weather API ( https://www.weatherapi.com/ ) to fetch weather data.
      ✅ Home Screen: Displays the current weather for a default location, such as the users current location or a predefined city.
      ✅ Search Screen: Allows users to search for weather information in different locations.
      ✅ Bookmarks Screen: Allows users to view weather information for saved locations.
      ✅ React Navigation: Implements navigation between the Home and Search screens using React Navigation.
      ✅ Error Handling and Loading States: Implements proper error handling and loading states during data fetching.
      ✅ Weather Information: Displays key weather information, including temperature, humidity, and weather conditions.
      ✅ Temperature Unit Toggle: Allows users to toggle between Celsius and Fahrenheit.
      ✅ State Management: Uses state management techniques, such as React Context or Redux, to manage the application state.
      ✅ 3-Day Forecast: Includes a 3-day forecast on the Home screen.
      ✅ Weather Icons: Adds icons or images to represent different weather conditions.
      ✅ Favorite Locations: Implements a feature to add favorite locations and view their weather information.
      ✅ TypeScript Support: Implements the app using TypeScript for enhanced code quality and developer experience.
      Dark Mode Toggle: Allows users to switch between light and dark modes.
      Analytics and Error Logging: Integrates Firebase analytics and Sentry error logging for enhanced tracking and issue identification.
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

