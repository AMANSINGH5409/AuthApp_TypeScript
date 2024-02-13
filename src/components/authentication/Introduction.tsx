import React from "react";
import AppLogo from "../../assets/logo.png";
import MainButton from "../Common/MainButton";
import { introductionScreenMsg } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Introduction: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/app/login");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="card items-center">
        <img src={AppLogo} alt="Logo of app" className="w-32" />
        <h1 className="heading">Introduction</h1>
        <p className="secondaryText">{introductionScreenMsg}</p>
        <MainButton
          type="button"
          title="Get Started"
          onclick={handleGetStarted}
        />
      </div>
    </div>
  );
};

export default Introduction;
