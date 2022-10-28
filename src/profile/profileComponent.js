import React from "react";
import profilePicture from "../assets/dpDefault.svg";
import "./profile.css";
import profilePictureHover from "../assets/dpHover.svg";
import shareButton from "../assets/ShareDesktopDefault.svg";
import shareButtonHover from "../assets/shareDesktopHover.svg";
import shareButtonMobile from "../assets/shareMobile.svg";

const profileComponent = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img id="profile__img" alt="profile" src={profilePicture} />
        <img
          id="profile__img_hover"
          alt="profile on hover"
          src={profilePictureHover}
        />
      </div>
      <h4 id="twitter">yorubatechbro</h4>
      {/*<h1 id='slack'> hamjad </h1> */}
      <div className="share-buttons">
        <img id="share-button" alt="share button" src={shareButton} />
        <img
          id="share-button-Hover"
          alt="share button"
          src={shareButtonHover}
        />
        <img
          id="share-button-mobile"
          alt="share button"
          src={shareButtonMobile}
        />
      </div>
    </div>
  );
};

export default profileComponent;
