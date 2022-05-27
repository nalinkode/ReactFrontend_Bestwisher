import "./Posts.css";
import React from "react";
import Moment from "react-moment";
import { ReactPictureGrid } from "react-picture-grid";
import { MoreVert, ThumbUpAlt } from "@material-ui/icons";

export default function Posts(props) {
  return (
    <div className="mt-2 mb-2">
      <div className="d-flex justify-content-center row">
        <div className="col-md-12 col-lg-12 col-sm-12 col-sx-12">
          <div className="feed p-2">
            <div className="bg-white border mt-2">
              <div>
                <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                  <div className="d-flex flex-row align-items-center feed-text px-2">
                    <img
                      className="rounded-circle post-profile"
                      src={props.userProfileImg}
                      width="45"
                    />
                    <div className="d-flex flex-column flex-wrap mx-2">
                      <span className="font-weight-bold">
                        {props.userName}
                        {props.feeling !== null && props.feeling !== "" && (
                          <span className="text-muted">
                            &nbsp;is feeling {props.feeling}
                          </span>
                        )}
                        {props.location !== null && props.location !== "" && (
                          <span className="text-muted">
                            &nbsp;at {props.location?.split(",")[0]}
                          </span>
                        )}
                      </span>
                      <span className="text-black-50 time">
                        {new Date(props.updatedDate).toDateString() ===
                        new Date().toDateString() ? (
                          <Moment fromNow>{props.updatedDate}</Moment>
                        ) : (
                          <Moment format="ll">{props.updatedDate}</Moment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="feed-icon px-2">
                    <MoreVert />
                  </div>
                </div>
              </div>
              <div className="feed-image p-2 px-3">
                <span className="post-text"> {props.text}</span>
                {props.imageUrl !== null && (
                  <ReactPictureGrid
                    data={[
                      {
                        image: props.imageUrl,
                        title: props.userName,
                        description: "This picture is taken from unsplash.com",
                      },
                    ]}
                    showImageCount
                    showPreview
                    closeOnClick
                    gap={5}
                  />
                )}
              </div>
              <div className="d-flex justify-content-between socials p-2 py-3">
                <div className="postBtnLeft">
                  {/* <img
                    src="./assets/like.png"
                    alt=""
                    className="likeicon bubbly-button"
                  /> */}
                  <ThumbUpAlt className="likeicon bubbly-button" />
                  {/* <i className=" likeicon bubbly-button bi bi-hand-thumbs-up"></i> */}
                  <span className="postlikecounter">32 people like it</span>
                </div>
                <div className="postBtnRight">
                  <span className="postcomments">9 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
