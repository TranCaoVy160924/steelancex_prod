import { boolean } from "yup";
import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.auth;

// eslint-disable-next-line @typescript-eslint/ban-types
const authenticate = async (loginRequest: Object) => {
   const url = `${baseUrl}/token`;
   const response = await axiosInstance.post(url, loginRequest);
   return response.data;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const register = async (registerRequest: Object) => {
   const url = baseUrl;
   const response = await axiosInstance.post(url, registerRequest);
   return response.data;
}

const getUserProfile = async () => {
   const url = `${baseUrl}/user-profile`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const decodeJwtToken = () => {
   const token = localStorage.getItem('auth');
   if (token) {
      const base64Url = token.split('.')[1]; // Extract the payload part of the JWT token
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
      const decodedPayload = atob(base64); // Decode the base64-encoded payload
      const claims = JSON.parse(decodedPayload);

      console.log(claims)

      const user: UserInfo = {
         Id: claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
         Username: claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"],
         Email: claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
         Role: claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
         IsPremium: claims["IsPremium"] === "True"
      }

      localStorage.setItem("user", JSON.stringify(user));
   }
   else {
      throw new Error("No login");
   }
}

const getUserInfo = (): UserInfo => {
   const token = localStorage.getItem("user");
   if (token) {
      return JSON.parse(token);
   }
   else {
      throw new Error("No login");
   }
}

const logout = () => {
   localStorage.removeItem("auth");
   localStorage.removeItem("user");
   localStorage.removeItem("profile");
}

const exportObject = {
   authenticate,
   register,
   decodeJwtToken,
   getUserProfile,
   getUserInfo,
   logout
};

export interface UserInfo {
   Id: number,
   Username: string,
   Email: string,
   Role: string,
   IsPremium: Boolean
}

export default exportObject;
