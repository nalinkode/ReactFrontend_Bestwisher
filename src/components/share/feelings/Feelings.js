import React, { useEffect } from "react";
import { EMOJI_DATA } from "../../../constants/EmojiData";
import "./Feelings.css";
import { useDispatch } from "react-redux";
import { CLEAR_FEELING, SET_FEELING } from "../../../constants/Type";

export default function Feelings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CLEAR_FEELING,
    });
  }, []);

  const handleClick = (data) => {
    dispatch({
      type: SET_FEELING,
      payload: data,
    });
  };

  return (
    <div>
      <div
        className="modal"
        id="feelingsModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">
                How are you feeling ?
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row emojiRow">
                  {EMOJI_DATA.map((emoji) => (
                    <div
                      onClick={handleClick.bind(null, emoji)}
                      className="col-lg-6 col-md-6 emojiCol"
                      data-bs-dismiss="modal"
                      key={emoji.name}
                    >
                      <img src={emoji.image} alt="emoji" /> {emoji.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
