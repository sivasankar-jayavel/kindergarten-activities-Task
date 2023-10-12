
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./Login";
import Portal from "./Portal";
import Calendar from "./Calendar";
import { UserProvider } from "./UserContext";
import "./sb-admin-2.min.css";
import Register from './Register';
import Forgot from './Forgot';
import Scheduler from './Scheduler';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />

            <Route path="/portal" element={<Portal />}>
              <Route path='calendar' element={<Calendar />} />
              <Route path='scheduler' element={<Scheduler />} />
              
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
