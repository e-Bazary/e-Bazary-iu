import { FC } from "react";
import { Box, MenuItem, Link, Button } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.1rem",
};
const Navbar: FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        height: "12vh",
        alignItems: "center",
        paddingInline: "1vw",
        position: "absolute",
        top: 0,
        zIndex: 10,
        width: "100%",
      }}
    >
      <h1>E-bazary</h1>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MenuItem>
          <Link style={linkStyle}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link style={linkStyle}>About us</Link>
        </MenuItem>
        <MenuItem>
          <Link style={linkStyle}>Top car</Link>
        </MenuItem>
        <MenuItem>
          <Link style={linkStyle}>Team</Link>
        </MenuItem>
        <MenuItem>
          <Link style={linkStyle}>Contact us</Link>
        </MenuItem>
        <Button
          variant="contained"
          size="medium"
          sx={{
            "color": "blue",
            "backgroundColor": "white",
            "&:hover": { backgroundColor: "whiteSmoke", color: "blue" },
          }}
        >
          Booking
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
