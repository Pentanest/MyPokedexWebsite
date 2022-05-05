import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

import { CLIENT_ID } from "../../config";

export const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    console.log(`${response.Du.tf} logged in with Email ID: ${response.Du.tv}`);
    navigate("/pokedex");
  };
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      render={(renderProps) => (
        <button
          className="sign-in-btn"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="sign-in-btn-text">Google</span>
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
