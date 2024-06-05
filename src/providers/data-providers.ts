import { DataProvider } from "react-admin";
import { BazaryProvider } from "./types";
import { carsProviders } from "./car-providers";
import { brandProviders } from "./brand-provider";
export const getProvider = (resource: string): BazaryProvider<any> => {
  switch (resource) {
    case "car":
      return carsProviders;
    case "brand":
      return brandProviders;
    default:
      throw new Error("Unknown resource type");
  }
};

export const dataProvider: DataProvider = {
  create: async (resource, { meta, data: payload }) => {
    const response = await getProvider(resource).save(payload, { ...meta });
    return { data: response };
  },
  update: async (resource, { data: payload, meta }) => {
    const response = await getProvider(resource).update(payload, { ...meta });
    return { data: response };
  },
  getOne: async (resource, { id, meta }) => {
    const response = await getProvider(resource).getOne(id as number, {
      ...meta,
    });
    return { data: response };
  },
  getList: async (resource, { meta }) => {
    const response = await getProvider(resource).getList({ ...meta });
    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  },
  delete: async (resource, { id, meta }) => {
    const response = await getProvider(resource).delete(id as number, {
      ...meta,
    });
    return { data: response };
  },
  getManyReference: () => {
    throw new Error("Not Implemented");
  },
  deleteMany: () => {
    throw new Error("Not Implemented");
  },
  getMany: () => {
    throw new Error("Not Implemented");
  },
  updateMany: () => {
    throw new Error("Not Implemented");
  },
};
