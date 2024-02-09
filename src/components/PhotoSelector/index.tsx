import React, { useState } from "react";
import user from "../../Pages/MainHomePage/StaffPage/assets/user.png";

const PhotoInput = ({ onChange, photo }: any) => {
  const handlePhotoChange = (event: any) => {
    const selectedPhoto = event.target.files;
    if (!selectedPhoto || !selectedPhoto.length) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(selectedPhoto[0]);
  };

  const handlePlusClick = () => {
    document.getElementById("photoInput")?.click();
  };

  return (
    <div className="image-container">
      <div className="photo" onClick={handlePlusClick}>
        {photo ? (
          <img alt="Profile photo" src={photo} />
        ) : (
          <div className="placeholder">
            <img src={user} alt="user" />
          </div>
        )}
      </div>
      <input
        id="photoInput"
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default PhotoInput;
