import { Box, MenuItem, Link } from "@mui/material";
import { useRedirect } from "react-admin";
import {
  FaFileInvoiceDollar,
  FaHome,
  FaHotel,
  FaCar,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { SiWikimediafoundation } from "react-icons/si";
function SideBar() {
  const redirect = useRedirect();
  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        position: "fixed",
        height: "72vh",
        bottom: "2vh",
        left: "2.5vw",
        width: "15vw",
        boxShadow: "1px 1px 5px grey",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "90%",
          paddingBlock: "1vh",
          display: "flex",
          flexDirection: "column",
          gap: "1.5vh",
          marginTop: "2vh",
        }}
      >
        <MenuItem
          className="menu-items"
          onClick={() => {
            redirect("list", "home");
          }}
        >
          <FaHome className="menu-icons" />
          <Link className="menu-link"> Home</Link>
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            redirect("list", "client");
          }}
        >
          <FaUser className="menu-icons" />
          <Link className="menu-link">Client</Link>
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            redirect("list", "car");
          }}
        >
          <FaCar className="menu-icons" />
          <Link className="menu-link">Car types</Link>
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            redirect("list", "brand");
          }}
        >
          <SiWikimediafoundation className="menu-icons" />
          <Link className="menu-link">Brand</Link>
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            redirect("list", "appointment");
          }}
        >
          <FaFileInvoiceDollar className="menu-icons" />
          <Link className="menu-link">Appointements</Link>
        </MenuItem>
      </Box>
      <Box sx={{ width: "90%", paddingBlock: "1vh" }}>
        <MenuItem className="menu-items">
          <FaSignOutAlt className="menu-icons" />
          <Link className="menu-link">Log Out</Link>
        </MenuItem>
      </Box>
    </Box>
  );
}

export default SideBar;
