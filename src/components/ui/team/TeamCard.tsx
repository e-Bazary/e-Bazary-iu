import { FC } from "react";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const socialIconStyle = {
  width: "1.5rem",
  height: "1.5rem",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const TeamCard: FC = () => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        width: "22%",
        height: "fit-content",
        padding: " 0.6rem",
        borderRadius: "0.5rem",
        boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        background: "white",
        color: "black !important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <h6 style={{ fontSize: "1.2rem", color: "blue" }}>John Doe</h6>
          <p style={{ fontSize: "0.8rem", textAlign: "left" }}>CEO</p>
        </Box>
        <Box sx={{ width: "8vw", height: "8vw", borderRadius: "1rem" }}>
          <Image
            src="/assets/team1.jpg"
            alt="ceo photo"
            width={300}
            height={300}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.4rem",
          background: "blue",
          justifyContent: "center",
          padding: "0.3rem",
          margin: "0.5rem 0",
          borderRadius: "0.2rem",
        }}
      >
        <FaFacebookF style={socialIconStyle} />
        <FaTwitter style={socialIconStyle} />
        <FaInstagram style={socialIconStyle} />
        <FaLinkedinIn style={socialIconStyle} />
      </Box>
      <Box sx={{ padding: "0.5rem" }}>
        <p style={{ fontSize: "0.8rem" }}>
          As CEO, I brings a wealth of experience in leading innovative projects
          and driving strategic growth.
        </p>
      </Box>
    </Box>
  );
};
export default TeamCard;
