import "./Share.css";
import React, { useState, useEffect } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import Feelings from "../share/feelings/Feelings";
import CheckIn from "./checkIn/CheckIn";
import Picker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import {
  SHARE_USER_POST_ACTION,
  GET_ALL_USER_POST_ACTION,
} from "../../redux/actions/PostActions";
import { toast } from "react-toastify";

export default function Share() {
  const initialFormValues = {
    userId: "",
    text: "",
    feeling: "",
    location: "",
    tag: "",
  };

  const dispatch = useDispatch();
  const [placeHolder, setPlaceHolder] = useState("What's in your mind ");
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [file, setFile] = useState("");

  // Getting from reducer and setting state
  const currentUser = useSelector(
    (state) => state.AuthenticationReducer.currentUser
  );

  const { profile } = useSelector((state) => state.UserProfileReducer);

  const feeling = useSelector((state) => state.FeelingReducer);
  const checkIn = useSelector((state) => state.CheckInReducer);

  useEffect(() => {
    if (Object.keys(feeling).length) {
      setFormValues({ ...formValues, feeling: feeling["feeling"]["name"] });
    }
  }, [feeling]);

  useEffect(() => {
    if (Object.keys(checkIn).length) {
      setFormValues({ ...formValues, location: checkIn["place"] });
    }
  }, [checkIn]);

  useEffect(() => {
    setFormValues({ ...formValues, text: inputStr });
  }, [inputStr]);

  useEffect(() => {
    if (currentUser) {
      setFormValues({ ...formValues, userId: currentUser.id });
      setPlaceHolder(
        (existedString) =>
          existedString + currentUser.firstName.toLowerCase() + " ?"
      );
    }
  }, [currentUser]);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr(inputStr + emojiObject.emoji);
    setShowPicker(false);
  };

  const onFileChangeHandler = (e) => {
    const { name, files } = e.target;
    setFile({ [name]: files[0] });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("file", file.file);
    formData.append("post", JSON.stringify(formValues));
    dispatch(SHARE_USER_POST_ACTION(formData))
      .then(() => {
        dispatch(GET_ALL_USER_POST_ACTION());
        setFormValues(initialFormValues);
        toast.success("Post shared successfully");
      })
      .catch(() => {
        toast.error("Failed to share post. Please try again later");
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <img className="share-profile-img" src={profile.profileImage} alt="" />
        <div className="picker-container">
          <input
            placeholder={placeHolder}
            className="share-input input-style"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />
          <img
            className="emoji-icon"
            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
            onClick={() => setShowPicker((val) => !val)}
          />
          {showPicker && (
            <Picker
              pickerStyle={{ width: "100%" }}
              onEmojiClick={onEmojiClick}
            />
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body d-flex">
          <div className="card-body-item">
            <span className="share-option-txt mx-1">
              <input
                type="file"
                className="file-input__input"
                name="file"
                onChange={onFileChangeHandler}
                id="file-input"
              />
              <label className="file-input__label" for="file-input">
                <span>
                  <PermMedia htmlColor="tomato" className="share-icon" />
                  &nbsp; Upload photo
                </span>
              </label>
            </span>
          </div>
          <div className="card-body-item mx-2">
            <Label htmlColor="blue" className="share-icon" />
            <span className="share-option-txt mx-1">Tag</span>
          </div>
          <div className="card-body-item mx-2">
            <Room htmlColor="green" className="share-icon" />
            <span
              className="share-option-txt mx-1"
              data-bs-toggle="modal"
              data-bs-target="#locationModal"
            >
              Check in
            </span>
            <CheckIn />
          </div>
          <div className="card-body-item mx-2">
            <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
            <span
              className="share-option-txt mx-1"
              data-bs-toggle="modal"
              data-bs-target="#feelingsModal"
            >
              Fellings
            </span>
            <Feelings />
          </div>
          <div className="card-body-item last-ele">
            <button
              className="btn btn-success shared-btn"
              type="submit"
              value="Submit"
            >
              Share
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
