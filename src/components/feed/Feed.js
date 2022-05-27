import React, { useEffect, useState } from "react";
import "./Feed.css";
import Share from "../share/Share";
import Posts from "./posts/Posts";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER_POST_ACTION } from "../../redux/actions/PostActions";

export default function Feed() {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.PostReducer);

  useEffect(() => {
    dispatch(GET_ALL_USER_POST_ACTION())
      .then(() => {})
      .catch(() => {
        toast.error("Something went wrong !");
      });
  }, [dispatch]);

  return (
    <div>
      <Share />
      {allPosts.length > 0 &&
        allPosts.map((post) => {
          return <Posts key={post.id} {...post} />;
        })}
    </div>
  );
}
