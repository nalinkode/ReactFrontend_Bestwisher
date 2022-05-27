import React, { useEffect, useState } from "react";
import "./Friend.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_USER_FRIENDS_ACTION,
  DELETE_FRIEND_REQUEST_ACTION,
} from "../../../redux/actions/UserFriendAction";
import { useParams } from "react-router";

export default function Friend() {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const { friendList } = useSelector((state) => state.UserFriendReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const [actions, setActions] = useState(true);

  useEffect(() => {
    dispatch(GET_ALL_USER_FRIENDS_ACTION(userId));
  }, [dispatch]);

  const unFriend = (data) => {
    dispatch(DELETE_FRIEND_REQUEST_ACTION(data.friendshipId)).then(() => {
      dispatch(GET_ALL_USER_FRIENDS_ACTION(userId));
    });
  };

  const unFollow = (data) => {
    dispatch(DELETE_FRIEND_REQUEST_ACTION(data.friendshipId)).then(() => {
      dispatch(GET_ALL_USER_FRIENDS_ACTION(userId));
    });
  };

  useEffect(() => {
    if (parseInt(userId) === currentUser.id) {
      setActions(true);
    } else {
      setActions(false);
    }
  }, [currentUser, userId]);

  return (
    <div className="mt-2">
      {friendList && (
        <div className="m-portlet m-portlet--full-height">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">
                  Total Friends ({friendList.length})
                </h3>
              </div>
            </div>
          </div>
          {friendList &&
            friendList.map((eachProfile) => {
              return (
                <div
                  className="m-portlet__body"
                  key={eachProfile.requestToUser}
                >
                  <div className="m-widget4 m-widget4--progress">
                    <div className="m-widget4__item">
                      <div className="m-widget4__img m-widget4__img--pic">
                        <img src={eachProfile.profileImage} alt="profile" />
                      </div>
                      <div className="m-widget4__info">
                        <span className="m-widget4__title">
                          <Link
                            to={
                              "/home/profile/view/" +
                              eachProfile.requestToUser +
                              "/timeline"
                            }
                          >
                            {eachProfile.userName}
                          </Link>
                        </span>
                        <br />
                        <span className="m-widget4__sub">
                          {eachProfile.currentDesignation}
                        </span>
                      </div>

                      {actions && (
                        <div className="m-widget4__ext">
                          <button
                            onClick={() => unFollow(eachProfile)}
                            className="m-btn m-btn--hover-brand m-btn--pill btn btn-sm btn-primary me-2"
                          >
                            Unfollow
                          </button>
                          <button
                            onClick={() => unFriend(eachProfile)}
                            className="m-btn m-btn--hover-brand m-btn--pill btn btn-sm btn-success"
                          >
                            Unfriend
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {friendList.length === 0 && (
        <div
          className="row align-items-center px-2 py-2 mt-2 suggestion-row "
          key="No-data"
        >
          <div className="col-md-12 col-sm-12">
            <h5 className="text-center">No Friends</h5>
          </div>
        </div>
      )}
    </div>
  );
}
