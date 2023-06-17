import axios from "axios";
import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.freelancerProfile;

const get = async (filter: FreelancerFilter) => {

   let url = `${baseUrl}?`
   if (filter.priceFrom !== 0) {
      url += `&$filter=Price ge ${filter.priceFrom}`
   }

   if (filter.priceTo !== 0) {
      url += `${!url.includes('filter') ? '&$filter=' : ' and '}Price le ${filter.priceTo}`
   }

   if (filter.categories.length > 0) {
      url += `${!url.includes('filter') ? '&$filter=' : ' and '}Categories/any(item:item eq ${filter.categories[0]}`;
      for (let i = 1; i < filter.categories.length; i++) {
         url += ` or item eq ${filter.categories[i]}`
      }
      url += ")"
   }

   url += `&$skip=${filter.skip}&$count=true`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const getCount = async () => {
   const url = `${baseUrl}/$count`;
   const response = await axiosInstance.get(url);
   return response.data;
}

export interface FreelancerFilter {
   skip: number,
   priceFrom?: number,
   priceTo?: number,
   categories: number[]
}

const getDetail = async (id: number) => {
   const url = `${baseUrl}/${id}`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const getThisUserFreelancerProfile = async (id: number) => {
   const url = `${baseUrl}?$filter=AppUserId eq ${id}`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const getByJob = async (id: number) => {
   const url = `${baseUrl}/byJob/${id}`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const edit = async (id: number, data: any) => {
   const url = `${baseUrl}`;
   if (id === 0) {
      console.log("posting")
      const response = await axiosInstance.post(url, data);
      return response.data;
   }
   else {
      console.log("putting")
      const response = await axiosInstance.put(url + `/${id}`, data);
      return response.data;
   }
}

const applyToJob = async (jobId: number) => {
   const url = `${baseUrl}/${jobId}/apply`;
   const response = await axiosInstance.post(url);
   return response.data;
}

const exportObject = {
   get,
   getCount,
   getDetail,
   getByJob,
   applyToJob,
   getThisUserFreelancerProfile,
   edit
};

export default exportObject;