import { FC } from "react";
import { Box, MenuItem, Link, Button } from "@mui/material";
import Image from "next/image";

const linkStyle = {
  textDecoration: "none",
  color: "black ",
  fontSize: "1.1rem",
};
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  height: "12vh",
  alignItems: "center",
  paddingInline: "1vw",
  position: "absolute" as "absolute",
  top: 0,
  zIndex: 10,
  width: "100%",
  color: "black",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
};
const menuItemStyle = {
  "&:hover": {
    borderBottom: "2px solid #ff0000",
    transition: "transform 0.3s ease-in-out",
  },
};
const Navbar: FC = () => {
  return (
    <nav style={navStyle}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src="/assets/Logo.png" alt="E-bazary" width={120} height={120} />
        <h1
          style={{
            color: "#ff0000",
            fontSize: "1.5rem",
            marginLeft: "1rem",
          }}
        >
          E-bazary
        </h1>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MenuItem sx={menuItemStyle}>
          <Link style={linkStyle}>Home</Link>
        </MenuItem>
        <MenuItem sx={menuItemStyle}>
          <Link style={linkStyle}>About us</Link>
        </MenuItem>
        <MenuItem sx={menuItemStyle}>
          <Link style={linkStyle}>Top car</Link>
        </MenuItem>
        <MenuItem sx={menuItemStyle}>
          <Link style={linkStyle}>Team</Link>
        </MenuItem>
        <MenuItem sx={menuItemStyle}>
          <Link style={linkStyle}>Contact us</Link>
        </MenuItem>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            "borderColor": "red",
            "color": "red",
            "backgroundColor": "white",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              borderColor: "red",
            },
            "marginLeft": "2rem",
          }}
        >
          Booking
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
