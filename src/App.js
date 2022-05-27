import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./layout/home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "./components/feed/Feed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./shared-component/pageNotFound/PageNotFound";
import Chat from "./components/chat/Chat";

export default function App() {
  const UserProfile = React.lazy(() =>
    import("./components/user-profile/UserProfile")
  );
  const Friend = React.lazy(() => import("./components/friend/Friend"));
  const Notification = React.lazy(() =>
    import("./components/notification/Notification")
  );

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Feed />} />
          <Route
            path="profile/*"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <UserProfile />
              </React.Suspense>
            }
          />
          <Route
            path="friend/*"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Friend />
              </React.Suspense>
            }
          />
          <Route
            path="notification/*"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Notification />
              </React.Suspense>
            }
          />

          <Route
            path="chat/*"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Chat />
              </React.Suspense>
            }
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
