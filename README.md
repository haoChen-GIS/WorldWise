# 🌍 WorldWise

A travel tracking application built with React. WorldWise allows users to mark cities they've visited on a map, add notes, and view travel history. Built as part of Jonas Schmedtmann’s advanced React course.

## ✨ Features

- 🗺️ Interactive map using Leaflet
- 📍 Add visited cities with coordinates, dates, and notes
- 🗃️ View a list of all visited cities
- 📝 Detailed view for each city
- 💾 Data persisted using localStorage
- 🚦 Client-side routing with React Router v6
- ⚛️ Global state management using `useReducer` + `useContext`
- 🌐 Custom hooks for geolocation, fetch, and more
- 📱 Fully responsive UI

## 🧰 Tech Stack

- **React** (with functional components & hooks)
- **React Router v6**
- **useReducer + useContext**
- **Leaflet** (interactive maps)
- **LocalStorage API**
- **CSS Modules** / Plain CSS (based on your styling)

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/haoChen-GIS/worldwise.git
cd worldwise
```
### 2. Install dependencies
```bash
npm install
```

### 3.Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```


### 📂 Folder Structure
src/
├── components/        # Reusable UI components
├── context/           # Global context and reducer
├── hooks/             # Custom React hooks
├── pages/             # App pages (e.g., Home, Cities)
├── App.jsx            # Main app component with routing
├── index.js           # Entry point

### 🧠 What I Learned
Advanced usage of React Router v6 (nested routing, URL params)

Building and sharing context-based global state

Structuring a medium-sized app with clean and modular architecture

Using Leaflet for geospatial interaction

Creating a smooth and responsive user experience


### 📜 License
MIT License


