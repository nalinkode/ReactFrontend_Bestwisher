import React, { useEffect } from "react";
import Gallery from "../gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GET_ALL_USER_COVER_IMAGES_ACTION } from "../../../../redux/actions/UserProfileAction";

export default function CoverImages() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { coverImageList } = useSelector((state) => state.UserProfileReducer);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(GET_ALL_USER_COVER_IMAGES_ACTION(userId));
  }, [dispatch]);

  return (
    <div>
      <Gallery photoList={coverImageList} type={"c"} />
    </div>
  );
}
