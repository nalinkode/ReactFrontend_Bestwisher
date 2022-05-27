import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [active, setIsActive] = useState(false);
  const [iconClass, setIconClass] = useState("");

  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  useEffect(() => {
    if (active) {
      setIconClass("bi-arrow-up-short");
    } else {
      setIconClass("bi-arrow-down-short");
    }
  }, [active, iconClass]);

  return (
    <div className="col-auto col-md-3 col-xl-3 px-sm-2 px-0 bg-light siderbar-right-border">
      <div className="d-flex sidebarcontainer flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 my-3">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link to="" className="nav-link text-dark align-middle px-0">
              <i className="fs-4 bi-house"></i>
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to={"/home/profile/view/" + currentUser.id + "/timeline"}
              className="nav-link text-dark align-middle px-0"
            >
              <i className="fs-4 bi bi-person"></i>
              <span className="ms-1 d-none d-sm-inline">Self Profile</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to={"/home/chat"}
              className="nav-link text-dark align-middle px-0"
            >
              <i className="fs-4 bi bi-chat-dots"></i>
              <span className="ms-1 d-none d-sm-inline">Chat</span>
            </Link>
          </li>

          <li>
            <a
              href="#submenu2"
              onClick={() => setIsActive(!active)}
              data-bs-toggle="collapse"
              className="nav-link text-dark px-0 align-middle "
            >
              <i className="fs-4 bi bi-people"></i>
              <span className="ms-1 d-none d-sm-inline">
                Friend <i className={"bi fs-5 " + iconClass}></i>{" "}
              </span>
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <Link to="/home/friend" className="nav-link text-dark px-0">
                  <span className="d-none d-sm-inline">
                    <i className="bi bi-arrow-right-circle"></i> Suggestions
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/friend/pending_request"
                  className="nav-link text-dark px-0"
                >
                  <span className="d-none d-sm-inline">
                    <i className="bi bi-arrow-right-circle"></i> Pending Request
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
