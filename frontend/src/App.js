import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PastContests from "./pages/PastContests";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import BookmarkedContests from "./pages/BookmarkedContests";


export default function App() {
  return (
    <ThemeProviderComponent>
      <Router>
        <Navbar/>
        <Routes>
        {/* <Route path="/" element={<Navigate to="/contests/upcoming" replace />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contests/past" element={<PastContests />} />
          <Route path="/bookmarks" element={<BookmarkedContests />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
}
