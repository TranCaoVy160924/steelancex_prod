import { QueryBuilder } from "odata-query-builder";
import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.category;

const get = async () => {
   const url = `${baseUrl}`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const exportObject = {
   get
};

export default exportObject;