"use client";
import { Admin, Resource, ListGuesser } from "react-admin";
import MyLayout from "../layout/MyLayout";
import { dataProvider } from "@/providers/data-providers";
import authProviders from "@/providers/auth-providers";
import LoginPage from "@/app/login/login";
import brands from "@/operation/brands";
import car from "@/operation/car";
import admin from "@/operation/admin";
import appointement from "@/operation/appointement";

const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    authProvider={authProviders}
    loginPage={LoginPage}
    requireAuth
  >
    <Resource name="admin" {...admin} />
    <Resource name="home" list={<p>not implemented</p>} />
    <Resource name="car" {...car} />
    <Resource name="brand" {...brands} />
    <Resource name="appointment" {...appointement} />
  </Admin>
);

export default AdminApp;
