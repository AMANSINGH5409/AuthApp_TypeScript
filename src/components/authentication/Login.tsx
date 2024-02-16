import React, { useState } from "react";
import FeatureButton from "../Common/FeatureButton";
import GoogleIcon from "../../assets/GoogleIcon.png";
import RenderInput from "../Common/RenderInput";
import EmailIcon from "../../assets/EmailIcon.png";
import PasswordIcon from "../../assets/PasswordIcon.png";
import MainButton from "../Common/MainButton";
import LinkButton from "../Common/LinkButton";
import { RouteUrl } from "../../utils/constants";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="card">
        <h1 className="heading">Login</h1>

        <div className="flex items-center gap-2">
          <FeatureButton icon={GoogleIcon} title="Login with Google" />
        </div>

        <div className="flex items-center gap-1">
          <p className="text-xs font-medium text-[var(--textLight)]">
            or login with email and password
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

          <RenderInput
            type="checkbox"
            label="Remember Me"
            message="You don't have to login the next time you come here."
            onchange={() => {}}
          />

          <MainButton type="submit" title="Login" onclick={() => {}} />

          <LinkButton
            url={RouteUrl.forgotPassword}
            text="Forgot Password"
            type="block"
          />

          <div className="w-full h-[2px] bg-[var(--bgColor)]"></div>

          <p className="text-sm text-[color:var(--textLight)] text-center">
            Don't have an account?{" "}
            <LinkButton url={RouteUrl.signUp} text="Sign Up" type="inline" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
