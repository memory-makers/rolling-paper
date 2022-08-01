import React from "react";
import { test_API } from "../../api";
import { login_API } from "../../api/user";

const KakaoButton = () => {
  const test = async () => {
    const response = await test_API();
    console.log(response);
  };

  return (
    <img
      className="kakao"
      src={`./imgs/kakao-login.png`}
      onClick={() => test()}
    />
  );
};

export default KakaoButton;
