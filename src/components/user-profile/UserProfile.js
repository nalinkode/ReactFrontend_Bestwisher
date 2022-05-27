import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../profile/Profile";
import ListAcademic from "./edit_profile/academic/listAcademic/ListAcademic";
import EditAcademic from "./edit_profile/academic/editAcademic/EditAcademic";
import ListWork from "./edit_profile/work/listWork/ListWork";
import EditWork from "./edit_profile/work/editWork/EditWork";

export default function UserProfile() {
  return (
    <div>
      <Routes>
        <Route path="/view/*" element={<Profile />} />
        <Route
          path="/user/:userId"
          element={[<ListAcademic />, <ListWork />]}
        />
        <Route path="/academic/add" element={<EditAcademic />} />
        <Route path="/academic/edit/:academicId" element={<EditAcademic />} />
        <Route path="/work/add" element={<EditWork />} />
        <Route path="/work/edit/:workId" element={<EditWork />} />
      </Routes>
    </div>
  );
}
