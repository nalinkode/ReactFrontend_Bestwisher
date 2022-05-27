import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  UPDATE_WORK_ACTION,
  ADD_WORK_ACTION,
  GET_WORK_ACTION,
} from "../../../../../redux/actions/WorkActions";

export default function EditWork() {
  let { workId } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [yearArray, setYearArray] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formType, setFormType] = useState("Add Work");
  const [formErrors, setFormErrors] = useState({});

  const [formValues, setFormValues] = useState({
    id: Number,
    workPlaceName: "",
    designation: "",
    fromDate: new Date().getFullYear(),
    toDate: new Date().getFullYear(),
    userId: "",
    hide: Boolean,
    currentDesignation: Boolean,
  });
  const { workList } = useSelector((state) => state.WorkReducer);
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);

  const createYearArray = (startYear) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1995;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    setYearArray(years);
  };

  useEffect(() => {
    createYearArray();
  }, []);

  useEffect(() => {
    setFormValues({ ...formValues, userId: currentUser.id });
  }, [currentUser]);

  useEffect(() => {
    if (workList && workId) {
      const foundWork = workList.find((work) => work.id === parseInt(workId));
      setFormValues(foundWork);
      setFormType("Update work");
    }
  }, [workList, workId]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setIsFormSubmitted(true);
    }
  }, [formErrors]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateForm(formValues));
  };

  const onCancel = () => {
    navigate("/home/profile/user/" + currentUser.id);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (Object.keys(formErrors).length === 0 && isFormSubmitted) {
      if (formType === "Update work") {
        dispatch(UPDATE_WORK_ACTION(formValues)).then(() => {
          dispatch(GET_WORK_ACTION(currentUser.id)).then(() => {
            navigate("/home/profile/user/" + currentUser.id);
          });
        });
      } else {
        dispatch(ADD_WORK_ACTION(formValues)).then(() => {
          dispatch(GET_WORK_ACTION(currentUser.id)).then(() => {
            navigate("/home/profile/user/" + currentUser.id);
          });
        });
      }
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.workPlaceName) {
      errors.workPlaceName = "Work place required";
    }
    if (!values.designation) {
      errors.designation = "Designation required";
    }
    return errors;
  };

  return (
    <div>
      <h5>{formType}</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${
                  formErrors.workPlaceName ? "is-invalid" : ""
                }`}
                placeholder="Work Place"
                name="workPlaceName"
                value={formValues.workPlaceName}
                onChange={handleFormChange}
              />
              <div className="invalid-feedback">
                {formErrors?.workPlaceName}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${
                  formErrors.designation ? "is-invalid" : ""
                }`}
                placeholder="Designation"
                name="designation"
                value={formValues.designation}
                onChange={handleFormChange}
              />
              <div className="invalid-feedback">{formErrors?.designation}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <label>Since From</label>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={formValues.fromDate}
              name="fromDate"
              onChange={handleFormChange}
            >
              {yearArray.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-4">
            <label>To</label>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={formValues.toDate}
              name="toDate"
              onChange={handleFormChange}
            >
              {yearArray.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <input
              type="checkbox"
              id="hide"
              name="hide"
              value={formValues.hide}
              onChange={() =>
                setFormValues({ ...formValues, hide: !formValues.hide })
              }
              checked={formValues.hide}
            />
            <label htmlFor="hide">&nbsp;Hide</label>
            <br />
          </div>
          <div className="col-lg-4">
            <input
              type="checkbox"
              id="currentDesignation"
              name="currentDesignation"
              value={formValues.currentDesignation}
              checked={formValues.currentDesignation}
              onChange={() =>
                setFormValues({
                  ...formValues,
                  currentDesignation: !formValues.currentDesignation,
                })
              }
            />
            <label htmlFor="currentDesignation">
              &nbsp;Current Designation
            </label>
            <br />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-1">
            <button
              type="submit"
              value="Submit"
              className="btn create_account_btn"
            >
              Submit
            </button>
          </div>
          <div className="col-lg-1 mx-4">
            <button
              type="button"
              value="Submit"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
