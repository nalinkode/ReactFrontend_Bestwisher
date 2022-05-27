import React from "react";
import { useDispatch, useSelector } from "react-redux";
import about from "./About.module.css"; // Import css modules stylesheet as styles

export default function About() {
  const { profile } = useSelector((state) => state.UserProfileReducer);

  if (profile !== undefined && Object.keys(profile).length > 0) {
    profile.workPlace = profile?.workPlace?.sort(
      (a, b) => parseInt(b.toDate) - parseInt(a.toDate)
    );
    profile.academic = profile?.academic?.sort(
      (a, b) => parseInt(b.toDate) - parseInt(a.toDate)
    );
  }

  return (
    <div className={(about.borderBox, "about row mt-3")}>
      {profile && (
        <>
          <div className="col-lg-12">
            <h5 className={about.aboutTitle}>Basic Info</h5>
            <ul className={about.aboutUl}>
              <li>
                <i className="fs-5 far fa-envelope"></i>
                <span className="text-muted">nalinkode35@gmail.com</span>
              </li>
              <li>
                <i className="fs-5 fas fa-phone"></i>
                <span className="text-muted">+91-72489 76756</span>
              </li>
              <li>
                <i className="fs-5 fas fa-venus-mars"></i>{" "}
                <span className="text-muted">Male</span>
              </li>
            </ul>

            <h5 className={about.aboutTitle}>Intro</h5>
            <ul className={about.aboutUl}>
              {profile?.workPlace?.map((work) => (
                <li key={work.id}>
                  <i className="fs-5 fas fa-building"></i>
                  {work.designation} at {work.workPlaceName} -{" "}
                  <small className="text-muted">
                    {work.fromDate} to {work.toDate}
                  </small>
                </li>
              ))}
              {profile?.academic?.map((academic) => (
                <li key={academic.id}>
                  <i className="fs-5 fas fa-university"></i>Studies at{" "}
                  {academic.schoolName} -{" "}
                  <small className="text-muted">
                    {academic.fromDate} to {academic.toDate}
                  </small>
                </li>
              ))}

              <li>
                <i className="fs-5 fas fa-home"></i>Lives {profile.currentCity}
              </li>
              <li>
                <i className="fs-5 fas fa-map-marker-alt"></i>From{" "}
                {profile.homeCity}
              </li>
              <li>
                <i className="fs-5 fas fa-heart"></i>Single
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
