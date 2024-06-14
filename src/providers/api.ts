import axios from "axios";

const API_URL = process.env.API_URL;

const createUrl = (path: string) => {
  return `${API_URL}${path}`;
};

export const get = async <T>(path: string) => {
  return await axios.get<T>(createUrl(path));
};

export const post = async <Payload, Response = Payload>(
  path: string,
  data: Payload
) => {
  return await axios.post<Response>(createUrl(path), data);
};

export const put = async <Payload, Response = Payload>(
  path: string,
  data: Payload
) => {
  return await axios.put<Response>(createUrl(path), data);
};

export const deleteApi = async <T>(path: string) => {
  return await axios.delete<T>(createUrl(path));
};
