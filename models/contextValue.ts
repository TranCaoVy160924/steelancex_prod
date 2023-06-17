import { UserInfo } from "@/services/auth";
import { Dispatch, SetStateAction } from "react";
import FreelancerResponse from "./freelancerResponse";
import BusinessProfileResponse from "./businessProfileResponse";

export default interface ContextValue {
   currentUser: UserInfo, 
   setCurrentUser: any,
   currentFreelancer: FreelancerResponse,
   setCurrentFreelancer: any,
   currentBusiness: BusinessProfileResponse,
   setCurrentBusiness: any
}