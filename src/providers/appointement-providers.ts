import { deleteApi, get, post, put } from "./api";
import { BazaryProvider, Appointment, CreateAppointment } from "./types";

export const appointementProvider: BazaryProvider<Appointment> = {
  save: async (payload) => {
    return post<CreateAppointment, Appointment>(`/appointment`, payload).then(
      (res) => res.data
    );
  },
  update: async (payload) => {
    return put<Appointment>(`/appointment/${payload.id}`, payload).then(
      (res) => res.data
    );
  },
  getOne: async (id, meta) => {
    return get<Appointment>(`/appointment/${id}`).then((res) => res.data);
  },
  getList: async (_meta) => {
    return get<Appointment[]>("/appointment").then((res) => res.data);
  },
  delete: async (id, _meta) => {
    return deleteApi<Appointment>(`/appointment/${id}`).then((res) => res.data);
  },
};
