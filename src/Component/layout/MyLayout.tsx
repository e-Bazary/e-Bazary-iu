import React from "react";
import { LayoutProps } from "react-admin";
import { Box } from "@mui/material";
import Appbar from "../Appbar/Appbar";
import SideBar from "../sideBar/SideBar";
import Filter from "../Filter/Filter";
function MyLayout({ children }: LayoutProps) {
  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <Appbar />
      <Filter />
      <SideBar />
    </Box>
  );
}

export default MyLayout;
