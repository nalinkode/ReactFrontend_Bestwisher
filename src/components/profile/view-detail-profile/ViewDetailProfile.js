import React, { useEffect, useState } from "react";
import "./ViewDetailProfile.css";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router";
import DetailProfile from "../../../shared-component/detail-profile/DetailProfile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ViewProfile() {
  const { userId } = useParams();
  const [isEditOption, setEditOption] = useState(false);
  const [isAddFriendOption, setAddFriendOption] = useState(false);
  const [isReqPending, setReqPending] = useState(false);
  const [isFriend, setFriend] = useState(false);

  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { friendList } = useSelector((state) => state.UserFriendReducer);
  const { pendingRequest } = useSelector((state) => state.UserFriendReducer);

  useEffect(() => {
    const friend = friendList.find((f) => f.requestToUser === parseInt(userId));
    const pending = pendingRequest.find(
      (f) => f.requestToUser === parseInt(userId)
    );

    if (currentUser.id === parseInt(userId)) {
      setEditOption(true);
      setAddFriendOption(false);
      setFriend(false);
    } else {
      setEditOption(false);
      setAddFriendOption(true);
    }

    if (friend && friend.friend) {
      setAddFriendOption(false);
      setFriend(true);
    } else if (pending && !pending.requestAccepted) {
      setAddFriendOption(false);
      setReqPending(true);
    }
  }, [currentUser, userId, friendList, pendingRequest]);

  return (
    <main>
      <div className="card social-prof">
        <div className="card-body">
          <div className="wrapper">
            <DetailProfile
              showFriend={isFriend}
              showPending={isReqPending}
              showEditOption={isEditOption}
              userId={userId}
              showAddFriendOption={isAddFriendOption}
            />
          </div>
          <div className="row mt-4">
            <div className="col-lg-8">
              <ul className="nav nav-tabs justify-content-center s-nav">
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="timeline"
                  >
                    Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="friend"
                  >
                    Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="photo"
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </div>
            {isEditOption && (
              <div className="col-lg-4">
                <Link
                  className="btn btn-secondary btn-sm"
                  to={"/home/profile/user/" + userId}
                >
                  <i className="bi bi-pencil-square"></i>&nbsp;Edit Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mt-3 view-detail-border">
        <Outlet />
      </div>
    </main>
  );
}
