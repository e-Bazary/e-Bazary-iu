import { Box } from "@mui/material";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import UserInfo from "./UserInfo";
function Appbar() {
  return (
    <Box
      sx={{
        bgcolor: "red",
        height: "16vh",
        width: "100%",
        position: "fixed",
        zIndex: "5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "1.5vh 2vw",
        backgroundColor: "#4B1A9E",
        color: "white",
      }}
    >
      <h1>E-Bazary</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <Box
          sx={{
            bgcolor: "whitesmoke",
            height: "5vh",
            width: "20vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "8px",
            padding: "0 1vw",
          }}
        >
          <IoSearch style={{ cursor: "pointer", color: "black" }} />
          <input
            type="search"
            placeholder="Search"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              color: "black",
              fontSize: "0.9rem",
              padding: "0 1vw",
            }}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "whitesmoke",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5vh",
            width: "5vh",
            borderRadius: "10%",
            cursor: "pointer",
          }}
        >
          <IoNotificationsOutline
            style={{ fontSize: "1.4rem", color: "black" }}
          />
        </Box>
        <UserInfo />
      </Box>
    </Box>
  );
}

export default Appbar;
