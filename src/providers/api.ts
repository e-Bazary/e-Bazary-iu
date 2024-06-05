import axios from "axios";

const createUrl = (path: string) => {
  return `${process.env.API_URL}${path}`;
};

export const get = async <T>(path: string) => {
  return await axios.get<T>(createUrl(path));
};

export const post = async <T>(path: string, data: any) => {
  return await axios.post<T>(createUrl(path), data);
};

export const put = async <T>(path: string, data: any) => {
  return await axios.put<T>(createUrl(path), data);
};

export const deleteApi = async <T>(path: string) => {
  return await axios.delete<T>(createUrl(path));
};
