import React, { useEffect } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthenticationActions";
import { Link } from "react-router-dom";
import { GET_ALL_FRIEND_REQUEST_ACTION } from "../../redux/actions/UserFriendAction";

export default function Header() {
  const dispatch = useDispatch();
  const { requestedProfiles } = useSelector((state) => state.UserFriendReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(GET_ALL_FRIEND_REQUEST_ACTION(currentUser.id));
  }, [dispatch, currentUser]);

  return (
    <div>
      {requestedProfiles && (
        <nav className="navbar navbar-light bg-light navbar-shadow">
          <div className="container-fluid">
            <a className="navbar-brand logo">Best Wisher</a>
            <div
              className="d-flex align-items-center"
              className="navbar-text navbar-right"
            >
              <Link
                to="/home/notification/friend_notification"
                className="text-dark px-0 align-middle me-4 text-reset pe-auto"
              >
                <i className="fs-4 bi bi-people fa-badge">
                  <span className="badge-num">{requestedProfiles.length}</span>
                </i>
              </Link>

              <Link
                to="/home/notification"
                className="text-dark px-0 align-middle me-4 text-reset pe-auto"
              >
                <i className="fs-4 bi bi-bell fa-badge">
                  <span className="badge-num">5</span>
                </i>
              </Link>

              <a
                href="#"
                className="me-4 text-reset pe-auto text-decoration-none"
                onClick={logOut}
              >
                <i className="fs-5 bi bi-box-arrow-right"></i> Log out
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
