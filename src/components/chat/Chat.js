import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatDashboard from "./chatDashboard/ChatDashboard";

export default function Chat() {
  return (
    <div>
      <Routes>
        <Route path="" element={<ChatDashboard />} />
      </Routes>
    </div>
  );
}
