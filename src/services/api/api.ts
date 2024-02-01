import axios, { AxiosRequestConfig } from "axios";
import { HttpStatusCode } from "../api/types";

const baseRoot = import.meta.env.VITE_BASE_URL_API;

const baseURL = `${baseRoot}`;

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  responseType: "json",
  timeout: 600000,
});
const apiClientDownload = axios.create({
  baseURL,
  withCredentials: false,
});

const defaultHeaders = {
  "Content-Type": "application/json",
};

const defaultConfig = async (): Promise<AxiosRequestConfig> => {
  // tslint:disable-next-line: no-shadowed-variable
  const defaultConfig: AxiosRequestConfig = {
    headers: { ...defaultHeaders },
  };
  return defaultConfig;
};

/**
 * defaultConfigと引数で指定されたconfigをマージする。
 * @param config
 */
const mergeConfig = async (
  config?: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const _defaultConfig = await defaultConfig();
  let headers = _defaultConfig.headers;
  if (config && config.headers) {
    headers = { ...headers, ...config.headers };
  }
  return { ..._defaultConfig, ...config, headers };
};

const requestErrorHandler = (err?: any): Promise<any> | void => {
  const errorStatusCode = err?.response?.status;
  if (errorStatusCode == HttpStatusCode.FORBIDDEN) {
    // redirectLogin();
    return;
  }
  return Promise.reject(err);
};

export async function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config);
  return apiClient
    .get(`${url}`, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler);
}

export async function post(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config);
  return apiClient
    .post(`${url}`, data, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler);
}

export async function put(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config);
  return apiClient
    .put(`${url}`, data, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler);
}

export async function deleteRequest(
  url: string,
  config?: AxiosRequestConfig
): Promise<any> {
  const data = config && config.data ? config.data : "";
  const _config = await mergeConfig({ ...config, data });
  return apiClient
    .delete(`${url}`, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler);
}

/** 画像取得専用のGETリクエスト */
export async function downloadFile(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  const _config = await mergeConfig({
    ...config,
    responseType: "blob",
  });
  return apiClientDownload
    .get(`${url}`, _config)
    .then((res) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "file.zip"); // any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((err) => requestErrorHandler(err));
}

export function newTab(url: string, isBaseRoot: boolean = true) {
  window.open(`${isBaseRoot ? baseRoot : baseURL}/${url}`, "_blank");
  return;
}
export function currentTab(url: string, isBaseRoot: boolean = true) {
  window.location.href = `${isBaseRoot ? baseRoot : baseURL}/${url}`;
  return;
}
