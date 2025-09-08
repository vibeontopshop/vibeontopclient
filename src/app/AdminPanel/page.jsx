"use client";
import React, { useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import DashboardCards from "./AdminDashBoard";
import ActiveOrders from "./ActiveOrders";
// TODO: create these
import Products from "./Products";
import Analytics from "./Analytics";
import Settings from "./Settings";

const AdminPanel = () => {
  const [view, setView] = useState("Dashboard");

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fdfaf3]">
      <AdminNavbar activeItem={view} setActiveItem={setView} />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-[#1b2d2a] uppercase tracking-wide">
          Welcome to VOT Admin Panel
        </h1>

        {view === "Dashboard" && (
          <DashboardCards onActiveOrdersClick={() => setView("ActiveOrders")} />
        )}
        {view === "ActiveOrders" && <ActiveOrders onBack={() => setView("Dashboard")} />}
        {view === "Products" && <Products />}
        {view === "Users" && <Users />}
        {view === "Analytics" && <Analytics />}
        {view === "Settings" && <Settings />}
      </main>
    </div>
  );
};

export default AdminPanel;
