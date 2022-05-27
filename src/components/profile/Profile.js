import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewProfile from "./view-detail-profile/ViewDetailProfile";
import Timeline from "./timeline/Timeline";
import About from "./about/About";
import Friend from "./friend/Friend";
import Photo from "./photo/Photo";
import ProfileImages from "./photo/profile_images/ProfileImages";
import CoverImages from "./photo/cover_images/CoverImages";
import ImageViewModel from "../../shared-component/imageViewModel/ImageViewModel";

export default function Profile() {
  return (
    <>
      <Routes>
        <Route path=":userId" element={<ViewProfile />}>
          <Route path="timeline" element={<Timeline />} />
          <Route path="about" element={<About />} />
          <Route path="friend" element={<Friend />} />
          <Route path="photo/*" element={<Photo />}>
            <Route path="" element={<ProfileImages />}></Route>
            <Route exact path="cover" element={<CoverImages />}></Route>
          </Route>
          <Route path="img/:imageId" element={<ImageViewModel />} />
        </Route>
      </Routes>
    </>
  );
}
