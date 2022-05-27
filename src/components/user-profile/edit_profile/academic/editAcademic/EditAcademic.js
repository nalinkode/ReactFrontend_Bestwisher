import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ADD_ACADEMIC_ACTION,
  GET_ACADEMIC_ACTION,
  UPDATE_ACADEMIC_ACTION,
} from "../../../../../redux/actions/AcademicActions";

export default function EditAcademic() {
  let { academicId } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [yearArray, setYearArray] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formType, setFormType] = useState("Add Academic");
  const [formErrors, setFormErrors] = useState({});

  const [formValues, setFormValues] = useState({
    id: Number,
    schoolName: "",
    fromDate: new Date().getFullYear(),
    toDate: new Date().getFullYear(),
    userId: "",
    hide: Boolean,
  });
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { academicList } = useSelector((state) => state.AcademicReducer);

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
    if (academicId && academicList) {
      const foundAcademic = academicList.find(
        (academic) => academic.id === parseInt(academicId)
      );
      setFormValues(foundAcademic);
      setFormType("Update academic");
    }
  }, [academicId, academicList]);

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
      if (formType === "Update Academic") {
        dispatch(UPDATE_ACADEMIC_ACTION(formValues)).then(() => {
          dispatch(GET_ACADEMIC_ACTION(currentUser.id)).then(() => {
            navigate("/home/profile/user/" + currentUser.id);
          });
        });
      } else {
        dispatch(ADD_ACADEMIC_ACTION(formValues)).then(() => {
          dispatch(GET_ACADEMIC_ACTION(currentUser.id)).then(() => {
            navigate("/home/profile/user/" + currentUser.id);
          });
        });
      }
    }
  };

  const validateForm = (values) => {
    debugger;
    const errors = {};
    if (!values.schoolName) {
      errors.schoolName = "School name required";
    }
    // if (!(parseInt(values.fromDate) <= parseInt(values.toDate))) {
    //   errors.fromDate = "Please select valid since";
    // }
    return errors;
  };

  return (
    <div>
      <h5>{formType}</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${
                  formErrors.schoolName ? "is-invalid" : ""
                }`}
                placeholder="School"
                name="schoolName"
                value={formValues.schoolName}
                onChange={handleFormChange}
              />
              <div className="invalid-feedback">{formErrors?.schoolName}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <label>Since From</label>
            <select
              className="form-select form-select-sm"
              className={`form-control ${
                formErrors.fromDate ? "is-invalid" : ""
              }`}
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
            <div className="invalid-feedback">{formErrors?.fromDate}</div>
          </div>
          <div className="col-lg-4">
            <label>To</label>
            <select
              className="form-select form-select-sm"
              className={`form-control ${
                formErrors.toDate ? "is-invalid" : ""
              }`}
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
            <div className="invalid-feedback">{formErrors?.toDate}</div>
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
