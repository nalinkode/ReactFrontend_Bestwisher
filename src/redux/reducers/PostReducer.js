import {
  GET_ALL_USER_POST_REQUEST,
  GET_ALL_USER_POST,
  GET_ALL_USER_POST_REQUEST_FAIL,
  SHARE_USER_POST_REQUEST,
  SHARE_USER_POST_FAILED,
  SHARE_USER_POST_SUCCESS,
  GET_POST_BY_USERID_REQUEST,
  GET_POST_BY_USERID,
  GET_POST_BY_USERID_REQUEST_FAIL,
} from "../../constants/Type";

const initialPostState = {
  allPosts: [],
  userIdPosts: [],
  postImage: {},
};

export default function (state = initialPostState, action) {
  const { type, payload } = action;

  switch (type) {
    //Get all user post
    case GET_ALL_USER_POST_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_USER_POST:
      const allposts = payload.allPosts.sort((a, b) => {
        var c = new Date(a.createdDate);
        var d = new Date(b.createdDate);
        return d - c;
      });
      return {
        ...state,
        allPosts: allposts,
      };

    case GET_ALL_USER_POST_REQUEST_FAIL:
      return {
        ...state,
      };

    // Saved Post in db
    case SHARE_USER_POST_REQUEST:
      return {
        ...state,
      };
    case SHARE_USER_POST_SUCCESS:
      return {
        ...state,
      };
    case SHARE_USER_POST_FAILED:
      return {
        ...state,
      };

    // Get Post by User Id
    case GET_POST_BY_USERID_REQUEST:
      return {
        ...state,
      };
    case GET_POST_BY_USERID:
      const postByUser = payload.userIdPosts.sort((a, b) => {
        var c = new Date(a.createdDate);
        var d = new Date(b.createdDate);
        return d - c;
      });
      return {
        ...state,
        userIdPosts: postByUser,
      };
    case GET_POST_BY_USERID_REQUEST_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
