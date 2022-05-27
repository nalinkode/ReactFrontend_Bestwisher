import "./home.css";
import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";
import { Outlet } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";

export default function Home() {
  const { isLoading } = useSelector((state) => state.LoaderReducer);
  return (
    <div>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Loading..."
        styles={{
          overlay: (base) => ({
            ...base,
            position: "fixed",
          }),
        }}
      >
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9">
              <div className="row flex-nowrap">
                <Sidebar />
                <main className="col py-3 bg-light">
                  <Outlet />
                </main>
              </div>
            </div>
            <div className="col-sm-3 bg-light">
              <Rightbar />
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
}
