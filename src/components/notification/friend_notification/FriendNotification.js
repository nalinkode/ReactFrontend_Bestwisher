import "./FriendNotification.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_FRIEND_REQUEST_ACTION,
  CONFIRMED_FRIEND_REQUEST_ACTION,
  DELETE_FRIEND_REQUEST_ACTION,
} from "../../../redux/actions/UserFriendAction";
import { toast } from "react-toastify";

export default function FriendNotification() {
  const dispatch = useDispatch();
  const { requestedProfiles } = useSelector((state) => state.UserFriendReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  const confirmedRequest = (data) => {
    dispatch(CONFIRMED_FRIEND_REQUEST_ACTION(data)).then(() => {
      dispatch(GET_ALL_FRIEND_REQUEST_ACTION(currentUser.id));
      toast.success("Your friend with " + data.userName);
    });
  };

  const deleteRequest = (data) => {
    dispatch(DELETE_FRIEND_REQUEST_ACTION(data.friendshipId)).then(() => {
      dispatch(GET_ALL_FRIEND_REQUEST_ACTION(currentUser.id));
      toast.success("Friend request is delete for " + data.userName);
    });
  };

  return (
    <div>
      <strong className="span-text-center">
        You have {requestedProfiles.length} friend request
      </strong>
      <div className="container-fluid mt-3 friend-notification">
        {requestedProfiles.length > 0 &&
          requestedProfiles.map((eachProfile) => {
            return (
              <div
                className="row align-items-center px-2 py-2 mt-2 notification-row"
                key={eachProfile.userId}
              >
                <div className="col-md-2 col-sm-2">
                  <img
                    src={eachProfile.profileImage}
                    alt="user"
                    className="profile-photo rounded-circle img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-5 col-sm-5">
                  <h5>
                    <Link
                      to={
                        "/home/profile/view/" +
                        eachProfile.requestFromUser +
                        "/timeline"
                      }
                    >
                      {eachProfile.userName}
                    </Link>
                  </h5>
                  <p className="text-muted">{eachProfile.currentDesignation}</p>
                </div>
                <div className="col-md-4 col-sm-4">
                  <button
                    key="confirmed-request"
                    className="btn btn-primary pull-right me-2 btn-sm"
                    onClick={() => confirmedRequest(eachProfile)}
                  >
                    Confirmed
                  </button>
                  <button
                    key="delete-request"
                    className="btn btn-secondary pull-right btn-sm"
                    onClick={() => deleteRequest(eachProfile)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
