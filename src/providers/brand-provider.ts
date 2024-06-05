import { deleteApi, get, post, put } from "./api";
import { BazaryProvider, Brand } from "./types";

export const brandProviders: BazaryProvider<Brand> = {
  save: async (payload) => {
    return post<Brand>("/brands", payload).then((res) => res.data);
  },
  update: async (id, payload) => {
    return put<Brand>(`/brands/${id}`, payload).then((res) => res.data);
  },
  getOne: async (id) => {
    return get<Brand>(`/brands/${id}`).then((res) => res.data);
  },
  getList: async () => {
    return get<Brand[]>("/brands").then((res) => res.data);
  },
  delete: async (id) => {
    return deleteApi<Brand>(`/brands/${id}`).then((res) => res.data);
  },
};
