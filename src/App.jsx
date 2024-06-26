import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import Contact from "./Contact";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import { checkAuthentication } from "./utils";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/"
          element={
           // <PrivateRoute>
              <Main />

             // </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
