import React, { useState, useEffect } from "react";
import "./CheckIn.css";
import { useDispatch } from "react-redux";
import { CLEAR_LOCATION, SET_LOCATION } from "../../../constants/Type";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function CheckIn() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CLEAR_LOCATION,
    });
    setValue("");
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const registerRef = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter as "false"
      setValue(description, false);
      clearSuggestions();
      dispatch({
        type: SET_LOCATION,
        payload: description,
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion, index) => {
      const {
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      return (
        <li
          className="li-places-suggestion"
          data-bs-dismiss="modal"
          key={index}
          onClick={handleSelect(suggestion)}
        >
          <img src="./assets/google-maps.png" alt="" />
          &nbsp;
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div>
      <div
        className="modal"
        id="locationModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel">
                Add location
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
                <div ref={registerRef}>
                  <input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    className="form-control"
                    placeholder="Check in"
                  />
                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {status === "OK" && (
                    <ul className="mt-3">{renderSuggestions()}</ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
