export type ResourceIdentifier = { id: number };
export type MUTATION_TYPE = "CREATE" | "UPDATE";

export type BazaryProvider<T extends ResourceIdentifier> = {
  getOne: (id: number, meta: any) => Promise<T>;
  save: (payload: T, meta: any) => Promise<T>;
  update: (payload: T, meta: any) => Promise<T>;
  delete: (id: number, meta: any) => Promise<T>;
  getList: (meta: any) => Promise<T[]>;
};

export type Car = {
  id: number;
  productName: string;
  description: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  motorType: string;
  power: string;
  placeNumber: number;
  status: boolean;
  type: string;
};

export type Brand = {
  id?: number;
  name: string;
  image: string;
};

export type Appointment = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
};

export type Admin = {
  id: number;
  name: string;
  email: string;
  password: string;
  urlImage: string;
};
