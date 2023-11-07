import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const Google = () => {
  const onSignIn = async (credentialResponse) => {
    const {credential, clientId} = credentialResponse;
    console.log(credentialResponse);
    console.log("Sign in successful");
    const response = await fetch("/api/verifyUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credential }),
    });

    const userData = await response.json();
    console.log(userData);
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        onSignIn(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Google;
