import React from "react";
import { Routes, Route } from "react-router-dom";
import BirthdayNotification from "./birthday/BirthdayNotification";
// import FriendNotification from './friend_notification/FriendNotification';

export default function Notification() {
  const FriendNotification = React.lazy(() =>
    import("./friend_notification/FriendNotification")
  );

  return (
    <div>
      <Routes>
        <Route path="" element={<BirthdayNotification />} />
        <Route
          path="/friend_notification"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <FriendNotification />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}
