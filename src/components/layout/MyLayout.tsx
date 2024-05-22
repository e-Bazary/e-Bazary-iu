import React from "react";
import { LayoutProps } from "react-admin";
import { Box } from "@mui/material";
import Appbar from "../appbar/Appbar";
import SideBar from "../sideBar/SideBar";
import Filter from "../filter/Filter";

function MyLayout({ children }: LayoutProps) {
  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <Appbar />
      <Filter />
      <SideBar />
      <Box
        sx={{ position: "absolute", width: "82vw", left: "17vw", top: "23vh" }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MyLayout;
