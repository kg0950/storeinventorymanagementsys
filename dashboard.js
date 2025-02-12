import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Inventory from "./components/Inventory";
import Billing from "./components/Billing";
import Customers from "./components/Customers";
import EmployeeManagement from "./components/EmployeeManagement";
import Navbar from "./components/Navbar";
import Reports from "./components/Reports";
import InventoryTracking from "./components/InventoryTracking";
import OrderManagement from "./components/OrderManagement";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/tracking" element={<InventoryTracking />} />
          <Route path="/orders" element={<OrderManagement />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

// components/ProtectedRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/tracking">Tracking</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
