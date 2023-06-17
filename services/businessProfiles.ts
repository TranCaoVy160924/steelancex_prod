import { QueryBuilder } from "odata-query-builder";
import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.businessProfile;

const get = async () => {
   const url = `${baseUrl}`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const getByUserId = async (id: number) => {
   const url = `${baseUrl}?filter=AppUserId eq ${id}`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const getOne = async (id: number) => {
   const url = `${baseUrl}(${id})`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const exportObject = {
   get,
   getByUserId
};

export default exportObject;