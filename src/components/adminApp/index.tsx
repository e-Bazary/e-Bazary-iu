"use client";
import { Admin, Resource, ListGuesser } from "react-admin";
import MyLayout from "../layout/MyLayout";
import { dataProvider } from "@/providers/data-providers";

const AdminApp = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource name="home" list={<p>hello from home</p>} />
    <Resource name="client" list={<p>not implemented</p>} />
    <Resource name="car" list={ListGuesser} />
    <Resource name="agency" list={<p>not implemented</p>} />
    <Resource name="reservation" list={<p>not implemented</p>} />
  </Admin>
);

export default AdminApp;
