import React, { useState } from "react";
import FeatureButton from "../Common/FeatureButton";
import GoogleIcon from "../../assets/GoogleIcon.png";
import RenderInput from "../Common/RenderInput";
import EmailIcon from "../../assets/EmailIcon.png";
import PasswordIcon from "../../assets/PasswordIcon.png";
import MainButton from "../Common/MainButton";
import LinkButton from "../Common/LinkButton";
import { RouteUrl } from "../../utils/constants";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="card">
        <h1 className="heading">Sign Up</h1>

        <div className="flex items-center gap-2">
          <FeatureButton icon={GoogleIcon} title="Sign Up with Google" />
        </div>

        <div className="flex items-center gap-1">
          <p className="text-xs font-medium text-[var(--textLight)]">
            or sign up with email and password
          </p>
          <div className={`w-full flex-1 h-[2px] bg-[var(--bgColor)]`}></div>
        </div>

        <form className="mt-3 flex flex-col gap-5">
          <RenderInput
            type="email"
            label="Email Address"
            placeholder="Enter Email"
            icon={EmailIcon}
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />

          <RenderInput
            type="password"
            label="Password"
            placeholder="Enter Password"
            icon={PasswordIcon}
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />

          <p className="text-xs text-[color:var(--textLight)]">
            By signing up, you confirm that you'ev read and completed our{" "}
            <LinkButton url="#" text="Terms of Service" type="inline" /> and{" "}
            <LinkButton url="#" text="Privacy Policy" type="inline" />.
          </p>

          <MainButton type="submit" title="Login" onclick={() => {}} />

          <p className="text-sm text-[color:var(--textLight)] text-center">
            Already have an account?{" "}
            <LinkButton url={RouteUrl.login} text="Login" type="inline" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
