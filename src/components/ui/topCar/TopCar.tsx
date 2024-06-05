import { FC } from "react";
import { Box } from "@mui/material";
import CarList from "../carList/carList";
export const h5Style = {
  fontSize: "1.7rem",
};
export const pStyle = {
  fontSize: "1.1rem",
  width: "88%",
};
const TopCar: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2vh",
        backgroundColor: "whitesmoke",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h5 style={h5Style}>Find our Most Popular Car</h5>
      <p style={pStyle}>
        Explore the most popular car model we offer. This car has been a top
        choice among our customers due to its exceptional performance,
        reliability, and cutting-edge features. It combines innovative
        technology with comfort and style
      </p>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2vh",
          alignItems: "center",
          justifyContent: "center",
          marginBlock: "2.5vh",
          width: "100%",
        }}
      >
        <CarList />
        <CarList />
        <CarList />
        <CarList />
      </Box>
    </Box>
  );
};
export default TopCar;
