"use client";
import { Admin, Resource, ListGuesser } from "react-admin";
import MyLayout from "../layout/MyLayout";
import { dataProvider } from "@/providers/data-providers";
import authProviders from "@/providers/auth-providers";
import LoginPage from "@/app/login/login";

const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    authProvider={authProviders}
    loginPage={LoginPage}
    requireAuth
  >
    <Resource name="home" list={<p>hello from home</p>} />
    <Resource name="client" list={<p>not implemented</p>} />
    <Resource name="car" list={ListGuesser} />
    <Resource name="brand" list={ListGuesser} />
    <Resource name="reservation" list={<p>not implemented</p>} />
  </Admin>
);

export default AdminApp;
