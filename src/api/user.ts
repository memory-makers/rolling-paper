import { axiosClient } from ".";

const SIGNUP = "user/signup";
const LOGIN = "member/login";
const NICKNAME = "member";

export const login_API = async (username: string | null) => {
  try {
    if (!username) return;
    const data = { username };
    return await axiosClient.post(LOGIN, data);
  } catch (error) {
    console.log(error, "error");
  }
};

export const nickname_API = async (nickname: string | null) => {
  try {
    if (!nickname) return;
    const data = { nickname };
    return await axiosClient.put(NICKNAME, data);
  } catch (error) {
    console.log(error, "error");
  }
};

export const singup_API = async (userData: kakaoProfile | null) => {
  try {
    return await axiosClient.post(SIGNUP, userData);
  } catch (err: unknown) {
    console.log(err, "err");
  }
};

export interface kakaoToken {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface kakaoServerRes {
  id: number;
  kakao_account: {
    email: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
      is_default_image: boolean;
    };
    profile_image_needs_agreement: boolean;
    profile_nickname_needs_agreement: boolean;
  };
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
}

export interface kakaoProfile {
  id: number;
  profile: {
    nickname: string;
    thumbnail_image_url: string;
    profile_image_url: string;
    is_default_image: boolean;
  };
}
