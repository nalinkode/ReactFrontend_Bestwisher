import React, { useEffect } from "react";
import "./PendingRequest.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PENDING_FRIEND_REQUEST_ACTION,
  DELETE_FRIEND_REQUEST_ACTION,
} from "../../../redux/actions/UserFriendAction";
import { toast } from "react-toastify";

export default function PendingRequest() {
  const dispatch = useDispatch();
  const { pendingRequest } = useSelector((state) => state.UserFriendReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  useEffect(() => {
    dispatch(GET_PENDING_FRIEND_REQUEST_ACTION(currentUser.id));
  }, [dispatch]);

  const cancelRequest = (data) => {
    dispatch(DELETE_FRIEND_REQUEST_ACTION(data.friendshipId)).then(() => {
      dispatch(GET_PENDING_FRIEND_REQUEST_ACTION(currentUser.id));
      toast.success("Friend request is cancel for " + data.userName);
    });
  };

  return (
    <div className="pending_request">
      <span className="span-text-center">Request Pending </span>
      <div className="container-fluid mt-3 friend-suggestion">
        {pendingRequest.length > 0 &&
          pendingRequest.map((eachProfile) => {
            return (
              <div
                className="row align-items-center px-2 py-2 mt-2 suggestion-row "
                key={eachProfile.requestToUser}
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
                        eachProfile.requestToUser +
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
                    className="btn btn-success pull-right btn-sm me-2"
                    disabled
                  >
                    Pending Request
                  </button>
                  <button
                    className="btn btn-primary pull-right btn-sm"
                    onClick={() => cancelRequest(eachProfile)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}

        {pendingRequest.length === 0 && (
          <div
            className="row align-items-center px-2 py-2 mt-2 suggestion-row "
            key="No-data"
          >
            <div className="col-md-12 col-sm-12">
              <h5 className="text-center">No Pending Request</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
