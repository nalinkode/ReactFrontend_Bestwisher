import React, { useEffect } from "react";
import "@reach/dialog/styles.css";
import Gallery from "../gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER_PROFILE_IMAGES_ACTION } from "../../../../redux/actions/UserProfileAction";
import { useParams } from "react-router";

export default function ProfileImages() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { imageList } = useSelector((state) => state.UserProfileReducer);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(GET_ALL_USER_PROFILE_IMAGES_ACTION(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <Gallery photoList={imageList} type={"p"} />
    </div>
  );
}
