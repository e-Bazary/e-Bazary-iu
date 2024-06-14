import { deleteApi, get, post, put } from "./api";
import { BazaryProvider, Car, CreateCar } from "./types";

export const carsProviders: BazaryProvider<Car> = {
  save: async (payload) => {
    return post<CreateCar, Car>(`/car`, payload).then((res) => res.data);
  },
  update: async (payload) => {
    return put<Car>(`/car/${payload.id}`, payload).then((res) => res.data);
  },
  getOne: async (id, meta) => {
    return get<Car>(`/car/${id}`).then((res) => res.data);
  },
  getList: async (_meta) => {
    return get<Car[]>("/car").then((res) => res.data);
  },
  delete: async (id, _meta) => {
    return deleteApi<Car>(`/car/${id}`).then((res) => res.data);
  },
};
