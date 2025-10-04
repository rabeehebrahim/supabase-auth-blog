import "./App.css";
import Login from "./components/Login";
import EmailVerification from "./components/EmailVerification";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verify" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
