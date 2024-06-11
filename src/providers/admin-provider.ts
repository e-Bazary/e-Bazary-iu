import { deleteApi, get, post, put } from "./api";
import { BazaryProvider, Admin } from "./types";

export const AdminProvider: BazaryProvider<Admin> = {
  save: async (payload) => {
    return post<Admin>("/admin", payload).then((res) => res.data);
  },
  update: async (id, payload) => {
    return put<Admin>(`/admin/${id}`, payload).then((res) => res.data);
  },
  getOne: async (id) => {
    return get<Admin>(`/admin/${id}`).then((res) => res.data);
  },
  getList: async () => {
    return get<Admin[]>("/admin").then((res) => res.data);
  },
  delete: async (id, meta) => {
    return deleteApi<Admin>(`/admin/${id}`).then((res) => res.data);
  },
};
