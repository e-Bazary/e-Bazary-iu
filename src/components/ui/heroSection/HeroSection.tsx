import { FC } from "react";
import { Box, Button } from "@mui/material";
import "./HeroSection.css";

const HeroSection: FC = () => {
  return (
    <Box className="hero-section">
      <h3
        style={{
          fontSize: "2.5rem",
        }}
      >
        Discover Your Next Adventure with Our Exceptional Cars
      </h3>
      <p
        style={{
          width: "40vw",
          textAlign: "center",
          lineHeight: "1.7",
          fontSize: "1.2rem",
        }}
      >
        Explore the world of car culture with our vast collection of exceptional
        cars. From sports cars to luxury vehicles, we have something for
        everyone.
      </p>
      <Button>Explore Now</Button>
    </Box>
  );
};

export default HeroSection;
