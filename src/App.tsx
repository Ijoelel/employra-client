import "./App.css";
import Home from "./pages/Dashboard/Home";
import Login from "./pages/AuthPages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { DBInit } from "./utils/db";
import DefaultPage from "./pages/DefaultPage";
import AppLayout from "./layout/AppLayout";
import Employee from "./pages/Dashboard/Employee";
import Division from "./pages/Dashboard/Division";
import UserProfiles from "./pages/Dashboard/UserProfiles";

function App() {
    DBInit();

    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/divisions" element={<Division />} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/profiles" element={<UserProfiles />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </Router>
    );
}

export default App;
