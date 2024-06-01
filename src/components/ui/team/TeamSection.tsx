import { FC } from "react";
import { Box } from "@mui/material";
import TeamCard from "./TeamCard";
import { h5Style, pStyle } from "../topCar/TopCar";
const TeamSection: FC = () => {
  return (
    <Box
      sx={{
        padding: "2vh 1vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,0,0,0.6), rgba(255,0,0,0.5)), url('/assets/mini-cooper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        textAlign: "center",
        color: "white",
      }}
    >
      <h5 style={h5Style}>Our best team</h5>
      <p style={pStyle}>
        Meet our dedicated team, driven by passion and excellence, committed to
        delivering outstanding results.
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "3vh 2vw",
        }}
      >
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Box>
    </Box>
  );
};
export default TeamSection;
