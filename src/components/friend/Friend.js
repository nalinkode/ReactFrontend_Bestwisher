import React from "react";
import FriendSuggestion from "./friendSuggestion/FriendSuggestion";
import { Routes, Route } from "react-router-dom";
// import PendingRequest from "./pendingRequest/PendingRequest";

export default function Friend() {
  const PendingRequest = React.lazy(() =>
    import("./pendingRequest/PendingRequest")
  );

  return (
    <div>
      <Routes>
        <Route path="" element={<FriendSuggestion />} />
        <Route
          path="pending_request"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <PendingRequest />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}
