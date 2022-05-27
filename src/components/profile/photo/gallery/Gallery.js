import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./Gallery.css";

export default function Gallery({ photoList, type }) {
  const { userId } = useParams();

  if (!photoList) return <h5 className="text-center my-5">No User Images</h5>;

  return (
    <div style={{ padding: "0 24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "minmax(168px, max-content) repeat(auto-fill, 165px) 20%",
          gap: "3px",
        }}
      >
        {photoList.map((image) => (
          <Link
            key={image.photoId}
            to={
              "/home/profile/view/" +
              userId +
              "/img/" +
              type +
              "_" +
              image.photoId
            }
          >
            <div className="content">
              <div className="content-overlay"></div>
              <img
                width={150}
                height={150}
                style={{
                  // width: "70%",
                  aspectRatio: "1 / 1",
                  height: "auto",
                  borderRadius: "8px",
                }}
                src={image.imageUrl}
                alt={image.imageUrl}
              />
              <div className="content-details fadeIn-bottom">
                <small className="content-title">View {image.type}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
