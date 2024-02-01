import { post } from "@/services/api/api";
import ApiTop from "@/constants/api-top";

const API_KEY = "gJ0svyRbDtt0Onaa";
export function uploadImage(formData: any) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-api-key": API_KEY,
    },
  };
  return post(ApiTop.UploadImage, formData, config);
}

export function uploadDataLocation(data: any) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  };
  return post(ApiTop.StoreLocation, data, config);
}

export function imageCheck(formData: any) {
  const config = {
    headers: {
      "x-api-key": API_KEY,
    },
  };
  return post(ApiTop.ImageCheck, formData, config);
}
