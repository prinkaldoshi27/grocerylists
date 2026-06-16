# Grocery List

A simple and responsive grocery list application built with React and JSON Server. The application allows users to add, search, check off, and delete grocery items while persisting data through a mock REST API.

## 🚀 Features

- Add grocery items
- Delete grocery items
- Mark items as completed
- Search items instantly
- Persistent data storage using JSON Server
- Responsive and clean user interface
- Real-time updates without page refresh

## 🛠 Tech Stack

### Frontend

- React
- JavaScript
- CSS

### Backend

- JSON Server

### API Communication

- Fetch API / Custom API Requests

## 📁 Project Structure

```text
grocery-list/
│
├── data/
│   └── mydb.json             # Mock database
│
├── public/
│
├── src/
│   ├── AddItem.js
│   ├── AddItem.css
│   ├── apiRequests.js
│   ├── App.js
│   ├── App.css
│   ├── Content.js
│   ├── Content.css
│   ├── Footer.js
│   ├── Header.js
│   ├── Search.js
│   ├── index.js
│   └── logo.svg
│
├── package.json
└── README.md
```

## ⚙️ Prerequisites

Before running the project, make sure you have:

- Node.js (v18+ recommended)
- npm

Check your installation:

```bash
node -v
npm -v
```

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/prinkaldoshi27/grocery-list.git
```

Navigate to the project directory:

```bash
cd grocery-list
```

Install dependencies:

```bash
npm install
```

Install JSON Server:

```bash
npm install --save-dev json-server
```

## ▶️ Running the Backend

Start the mock API server:

```bash
npx json-server --watch data/mydb.json --port 3500
```

The backend API will be available at:

```text
http://localhost:3500
```

Example endpoint:

```text
http://localhost:3500/items
```

## ▶️ Running the Frontend

Open a second terminal and start the React application:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🏃 Running the Complete Application

### Terminal 1

Start the backend:

```bash
npx json-server --watch data/mydb.json --port 3500
```

### Terminal 2

Start the frontend:

```bash
npm start
```

### URLs

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:3500
```

## 🎯 How It Works

1. Users enter a grocery item.
2. The item is sent to the JSON Server API.
3. The item is stored in `mydb.json`.
4. Users can:
   - Add new items
   - Search existing items
   - Mark items as completed
   - Delete items
5. Changes are automatically synced with the backend.

## 📦 Production Build

Create a production build:

```bash
npm run build
```

The optimized files will be generated in the `build` folder.

## 📜 Available Scripts

Start development server:

```bash
npm start
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

Eject configuration:

```bash
npm run eject
```
<img width="1918" height="930" alt="image" src="https://github.com/user-attachments/assets/4be2665c-ab5a-4a33-b419-41d03d6fd36c" />
