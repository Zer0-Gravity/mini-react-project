# Weather App

A lightweight weather application featuring a **favorite city** collection. Built to explore REST API integration and complex data handling

### Purpose

The primary goal of this project was to implement the [Open-Meteo API](https://open-meteo.com/) and manage asynchronous data fetching for multiple locations simultaneously

### Core Feature
- Global Search : Find current weather data from any city worldwide 
- Favorite Collection: Save specific city to the favorite collection
- Multi location sync: Display the weather situation of the collection in one view

### Challenge

One of the most significant challenge was efficiently fetching weather data for a list of favorite cities without making redundant API calls.

  ##### Solution
  Instead just saving city name, i created custom data structure to store the exact city coordinate. This bypasses the need for geocoding api call every time the favorite list is loaded

  ##### Custom Data Structure**
  `
    {
      "name": "Tokyo",
      "latitude": 35.6764,
      "longitude": 139.6500`
    }
  `
  ##### Implementation**
  I utilize multi data call from open meteo and the processed to save the coordinate using `.map` and `.join(',')`. to format them into single API request. Pulling the `latitude` and `longitude` from the each favorite array then join team into a string (e.g, latitudes="35.67, 45,89") then pass the join string into api request to retrieve all the weather data

### Tech Used
- **Framework**: React 19 with compiler 
- **Styling**: Tailwind CSS
- **Language**: Typescript

### Library Used
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)

### Preview
![Demo Gif](./src/Demo/Weather%20Demo.gif)

### Quick Start
1. `git clone https://github.com/Zer0-Gravity/mini-react-project`
2. `cd mini-react-project/note-taking-app`
3. `npm install`
4. `npm run dev`