import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/ui/navbar/Navbar";
import HeroSection from "@/components/ui/heroSection/HeroSection";

const Landing: FC = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
    </Box>
  );
};

export default Landing;
