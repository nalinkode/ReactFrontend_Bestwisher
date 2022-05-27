import React, { useEffect, useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_USER_PHOTOS_ACTION,
  GET_PROFILE_BY_USERID_ACTION,
  DELETE_USER_PHOTO_ACTION,
} from "../../redux/actions/UserProfileAction";
import "./ImageViewModel.css";

export default function ImageViewModel() {
  const dispatch = useDispatch();
  const [image, setImageData] = useState({});
  let navigate = useNavigate();
  let { imageId } = useParams();
  const { userId } = useParams();
  const { imageList } = useSelector((state) => state.UserProfileReducer);
  const { coverImageList } = useSelector((state) => state.UserProfileReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  useEffect(() => {
    if (imageId.split("_")[0] === "p") {
      let profileImage = imageList?.find(
        (image) => image.photoId === parseInt(imageId.split("_")[1])
      );
      setImageData(profileImage);
    } else {
      let coverImage = coverImageList?.find(
        (image) => image.photoId === parseInt(imageId.split("_")[1])
      );
      setImageData(coverImage);
    }
  }, []);

  function onDismiss() {
    navigate(-1);
  }

  const updatePhoto = (imageData) => {
    dispatch(UPDATE_USER_PHOTOS_ACTION(imageData)).then(() => {
      dispatch(GET_PROFILE_BY_USERID_ACTION(currentUser.id));
      navigate(-1);
    });
  };

  const deletePhoto = (imageData) => {
    dispatch(
      DELETE_USER_PHOTO_ACTION(
        imageData.type,
        imageData.profileId,
        imageData.photoId
      )
    ).then(() => {
      dispatch(GET_PROFILE_BY_USERID_ACTION(currentUser.id));
      navigate(-1);
    });
  };

  if (!image) return null;

  return (
    <Dialog aria-labelledby="label" className="dialog" onDismiss={onDismiss}>
      <div className="imageView">
        <i
          className="bi bi-trash fs-5 mx-3 trash"
          onClick={() => deletePhoto(image)}
        ></i>
        <i className="bi bi-x-circle fs-5 cancel" onClick={onDismiss}></i>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "8px 8px",
        }}
      >
        <img
          style={{
            margin: "16px 0",
            borderRadius: "8px",
            width: "100%",
            height: "auto",
            // aspectRatio: "1 / 1",
          }}
          // width={400}
          // height={400}
          src={image.imageUrl}
          alt=""
        />
        {currentUser.id === parseInt(userId) && !image.profileImage && (
          <button
            className="btn btn-primary"
            style={{ display: "block", margin: "10px" }}
            onClick={() => updatePhoto(image)}
          >
            Set as {image.type}
          </button>
        )}
      </div>
    </Dialog>
  );
}
