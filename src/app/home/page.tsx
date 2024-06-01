import { FC } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/ui/navbar/Navbar";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import Filter from "@/components/filter/Filter";
import About from "@/components/ui/about/About";
import TopCar from "@/components/ui/topCar/TopCar";

const Landing: FC = () => {
  return (
    <Box sx={{ position: "relative", backgroundColor: "background.default" }}>
      <Navbar />
      <HeroSection />
      <About />
      <TopCar />
    </Box>
  );
};

export default Landing;
