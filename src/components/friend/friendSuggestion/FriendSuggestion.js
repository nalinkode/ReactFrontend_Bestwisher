import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FriendSuggestion.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FRIEND_REQUEST_ACTION } from "../../../redux/actions/UserFriendAction";
import { GET_ALL_USER_PROFILE_ACTION } from "../../../redux/actions/UserProfileAction";

export default function FriendSuggestion() {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state.UserProfileReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  useEffect(() => {
    dispatch(GET_ALL_USER_PROFILE_ACTION(currentUser.id));
  }, [dispatch]);

  const addRequest = (data) => {
    const friendRequest = {
      requestFromUser: currentUser.id,
      requestToUser: data.userId,
    };
    dispatch(ADD_FRIEND_REQUEST_ACTION(friendRequest)).then(() => {
      dispatch(GET_ALL_USER_PROFILE_ACTION(currentUser.id));
      toast.success("Friend Request sent " + data.userName);
    });
  };

  return (
    <div>
      <span className="span-text-center">People You may know </span>
      <div className="container-fluid mt-3 friend-suggestion">
        {profiles.length > 0 &&
          profiles.map((eachProfile) => {
            return (
              <div
                className="row align-items-center px-2 py-2 mt-2 suggestion-row "
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
                        "/home/profile/view/" + eachProfile.userId + "/timeline"
                      }
                    >
                      {eachProfile.userName}
                    </Link>
                  </h5>
                  <p className="text-muted">{eachProfile.currentDesignation}</p>
                </div>

                <div
                  className="col-md-3 col-sm-3"
                  onClick={() => addRequest(eachProfile)}
                >
                  <button className="btn btn-primary pull-right btn-sm">
                    + Add Friend
                  </button>
                </div>
              </div>
            );
          })}

        {profiles.length === 0 && (
          <div
            className="row align-items-center px-2 py-2 mt-2 suggestion-row "
            key="No-data"
          >
            <div className="col-md-12 col-sm-12">
              <h5 className="text-center">No Friend suggesstion have now</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
