 MERN Bug Tracker Application

 Overview
The **Bug Tracker** is a MERN-stack web application that enables users to report, update, and track software issues within projects. It focuses on **testing, debugging, and reliability** practices across both backend and frontend environments.

Objectives
- Implement a full-stack MERN app with structured error handling.  
- Write **unit**, **integration**, and **component** tests for backend and frontend.  
- Apply debugging tools (console logs, Node Inspector, Chrome DevTools).  
- Demonstrate proper test coverage and documentation.


 Project Structure
Week 6/
│
├── client/                     
│   ├── src/
│   │   ├── components/                  
│   │   ├── api/             
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── jest.config.cjs
│   ├── setupTests.js
│   ├── styleMock.js
│   └── vite.config.js
│
└── server/                    
    ├── src/
    │   ├── server.js
    │   ├── routes/
    │   │   └── bugRoutes.js
    │   ├── controllers/
    │   │   └── bugController.js
    │   └── middleware/
    │       └── errorHandler.js
    ├── tests/
    │   └── bugRoutes.test.js
    └── .env
```

git clone https://github.com/https://github.com/PLP-MERN-Stack-Development/testing-and-debugging-ensuring-mern-app-reliability-paulinashikongo/upload/main/mern-bug-tracker.git
cd mern-bug-tracker
```
### 2. Backend Setup
```bash
cd server
npm install
npm run dev
```
> Server runs on **http://127.0.0.1:5001**
### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```
> Frontend runs on **http://localhost:5173**

## 🧪 Testing
### Backend Tests
```bash
cd server
npm test
```
Includes:
- Route integration tests
- Input validation and error response tests
- Mocked DB operations

### Frontend Tests
```bash
cd client
npm test
```
Includes:
- Form validation tests  
- UI rendering and state update tests  
- API mock integration tests

## 🪲 Debugging Techniques Used
| Area | Tool / Method | Purpose |
|------|---------------|----------|
| **Frontend** | Chrome DevTools | Inspect API calls & React state |
| | `console.log()` and React Error Boundaries | Trace props and crashes |
| **Backend** | Node.js Inspector | Step through Express routes |
| | `morgan` + custom error middleware | Log requests and exceptions |
| **Testing** | `jest --watchAll` | Observe real-time test results |
| **Vite Proxy** | Port 5001 API | Verify frontend ↔ backend link |

## ⚠️ Error Handling Implementation
### Backend
```js
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({ message: 'Server error' })
})
```
### Frontend
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    return this.state.hasError
      ? <div>Something went wrong.</div>
      : this.props.children
  }
}
```

## 🧩 Testing Coverage Summary
- **Unit Tests:** Validation & helper functions  
- **Integration Tests:** Express routes  
- **Component Tests:** BugForm renders and submits properly  
- **Mock Tests:** DB & API responses mocked using Jest mocks  

## 💡 Debugging Examples
- **Intentional bug:** Removed `return` in controller → tested via Jest to confirm failure.  
- **Console tracking:** `console.log(req.body)` in routes for payload inspection.  
- **Network failures:** Chrome DevTools → checked CORS and proxy settings.  
- **Node Inspector:** `node --inspect src/server.js` → breakpoints in VS Code.

## 📄 Key Endpoints
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/health` | Check server status |
| GET | `/api/bugs` | List all bugs |
| POST | `/api/bugs` | Create a new bug |
| PUT | `/api/bugs/:id` | Update bug details |
| DELETE | `/api/bugs/:id` | Delete a bug entry |

## 📘 How to Run Debug Mode
**Frontend:**
```bash
npm run dev
```
