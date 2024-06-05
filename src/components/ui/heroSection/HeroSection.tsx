import { FC } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { MdDriveEta } from "react-icons/md";

const HeroSection: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/assets/background.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "50%",
          padding: "2rem",
          gap: "1.5rem",
        }}
      >
        <h3
          style={{
            fontSize: "2.2rem",
          }}
        >
          Discover Your Next Adventure with Our Exceptional Cars
        </h3>
        <p
          style={{
            width: "40vw",
            lineHeight: "1.7",
            fontSize: "1.1rem",
          }}
        >
          Explore the world of car culture with our vast collection of
          exceptional cars. From sports cars to luxury vehicles, we have
          something for everyone.
        </p>
        <Button
          variant="contained"
          startIcon={<MdDriveEta />}
          sx={{
            "backgroundColor": "#f53e31",
            "&:hover": { backgroundColor: "red" },
          }}
        >
          Explore Now
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          height: "100vh",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "85%",
            width: "95%",
            backgroundColor: "#f53e31",
            marginTop: "17%",
            position: "relative",
            borderRadius: "30% 70% 41% 59% / 64% 12% 88% 36% ",
          }}
        >
          <Image
            src="/assets/banner.png"
            alt="heroImage"
            width={720}
            height={500}
            style={{
              objectFit: "cover",
              position: "absolute",
              bottom: "-4vh",
              left: "-1vw",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
