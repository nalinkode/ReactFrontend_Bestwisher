import React, { useEffect, useState } from "react";
import Posts from "../../feed/posts/Posts";
import { GET_POST_BY_USERID_ACTION } from "../../../redux/actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Timeline(props) {
  const dispatch = useDispatch();
  const { userIdPosts } = useSelector((state) => state.PostReducer);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(GET_POST_BY_USERID_ACTION(userId));
  }, [dispatch]);

  if (userIdPosts.length === 0) {
    return <h5 className="text-center my-3">No Posts</h5>;
  }

  return (
    <div>
      <div>
        {userIdPosts.length > 0 &&
          userIdPosts.map((post) => {
            return <Posts key={post.id} {...post} />;
          })}
      </div>
    </div>
  );
}
