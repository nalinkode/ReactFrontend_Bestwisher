import React, { useEffect } from "react";
import "./DetailProfile.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_USER_COVER_IMAGES_ACTION,
  GET_ALL_USER_PROFILE_IMAGES_ACTION,
  GET_PROFILE_BY_USERID_ACTION,
  UPDATE_USER_PROFILE_ACTION,
} from "../../redux/actions/UserProfileAction";
import { toast } from "react-toastify";

export default function DetailProfile(props) {
  const {
    showEditOption,
    userId,
    showAddFriendOption,
    showPending,
    showFriend,
  } = props;
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.UserProfileReducer);

  useEffect(() => {
    dispatch(GET_PROFILE_BY_USERID_ACTION(userId));
  }, [dispatch, userId]);

  const onFileChangeHandler = (e) => {
    const { name, files } = e.target;
    const formData = new FormData();
    formData.append([name], files[0]);
    formData.append("userProfile", JSON.stringify({ userId: userId }));
    dispatch(UPDATE_USER_PROFILE_ACTION(formData))
      .then(() => {
        dispatch(GET_PROFILE_BY_USERID_ACTION(userId));
        if (name === "coverImage") {
          dispatch(GET_ALL_USER_COVER_IMAGES_ACTION(userId));
        } else {
          dispatch(GET_ALL_USER_PROFILE_IMAGES_ACTION(userId));
        }
        toast.success("Image updated successfully");
      })
      .catch(() => {
        toast.error("Failed to update profile. Please try again later");
      });
  };

  return (
    <>
      {profile && (
        <div className="detail-profile-section">
          <div className="cover-upload">
            <div
              className="img cover-image"
              style={{
                backgroundImage: `url(${profile.coverImage})`,
                height: "300px",
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
                boxShadow: "inset 0 0 20px rgb(0 0 0 / 30%)",
              }}
            >
              {showEditOption && (
                <form
                  className="cover-form-upload"
                  encType="multipart/form-data"
                >
                  <input
                    className="image-input"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="coverImage"
                    onChange={onFileChangeHandler}
                    id="coverImage"
                  />
                  <i className="fs-6 bi bi-camera-fill"></i>
                </form>
              )}
            </div>
          </div>
          <div className="card social-prof">
            <div className="card-body">
              <div className="wrapper">
                <div className="profile-upload">
                  <img
                    src={profile.profileImage}
                    alt=""
                    className="user-profile mb-2 rounded-circle"
                  />
                  {showEditOption && (
                    <form
                      className="profile-form-upload"
                      encType="multipart/form-data"
                    >
                      <input
                        className="image-input"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        name="profileImage"
                        onChange={onFileChangeHandler}
                        id="profileImage"
                      />
                      <i className="fs-6 bi bi-camera-fill"></i>
                    </form>
                  )}
                </div>
                <h4>{profile.userName}</h4>
                <p>{profile.currentDesignation}</p>
                {showAddFriendOption && (
                  <button className="btn btn-primary mb-2 btn-sm">
                    + Add Friend
                  </button>
                )}
                {showPending && (
                  <button className="btn btn-primary mb-2 btn-sm" disabled>
                    Request Pending
                  </button>
                )}
                {showFriend && (
                  <button className="btn btn-primary mb-2 btn-sm" disabled>
                    Friends
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
