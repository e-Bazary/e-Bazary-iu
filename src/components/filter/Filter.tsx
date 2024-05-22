import { Box, Typography, Button } from "@mui/material";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoPersonOutline,
} from "react-icons/io5";
function Filter() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "95%",
        height: "12vh",
        position: "fixed",
        top: "11.5vh",
        left: "2.5vw",
        borderRadius: "8px",
        padding: "1vh 2vw",
        zIndex: "10",
        boxShadow: "1px 1px 10px grey",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1vw",
      }}
    >
      <Box sx={{ borderRight: "2px solid #e2e2e2", padding: "1vh 2vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#4b1a9e",
          }}
        >
          <IoLocationOutline />
          <Typography variant="caption">filtre 1</Typography>
        </Box>
        <Box>
          <select
            name="destination"
            id="select-destination"
            style={{
              border: "none",
              outline: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
            }}
          >
            <option value="destination">option 1</option>
            <option value="destination2">option 1</option>
            <option value="destination3">option 1</option>
          </select>
        </Box>
      </Box>
      <Box sx={{ borderRight: "2px solid #e2e2e2", padding: "1vh 2vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#4b1a9e",
          }}
        >
          <IoCalendarOutline />
          <Typography variant="caption">Filtre 2</Typography>
        </Box>
        <Box>
          <select
            name="destination"
            id="select-destination"
            style={{
              border: "none",
              outline: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
            }}
          >
            <option value="destination">option 2</option>
            <option value="destination2">option 2</option>
            <option value="destination3">option 2</option>
          </select>
        </Box>
      </Box>
      <Box sx={{ borderRight: "2px solid #e2e2e2", padding: "1vh 2vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#4b1a9e",
          }}
        >
          <IoCalendarOutline />
          <Typography variant="caption">Filtre 3</Typography>
        </Box>
        <Box>
          <select
            name="destination"
            id="select-destination"
            style={{
              border: "none",
              outline: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
            }}
          >
            <option value="destination">option 3</option>
            <option value="destination2">option 3</option>
            <option value="destination3">option 3</option>
          </select>
        </Box>
      </Box>
      <Box sx={{ borderRight: "2px solid #e2e2e2", padding: "1vh 2vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#4b1a9e",
          }}
        >
          <IoPersonOutline />
          <Typography variant="caption">Filtre 4</Typography>
        </Box>
        <Box>
          <select
            name="destination"
            id="select-destination"
            style={{
              border: "none",
              outline: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
            }}
          >
            <option value="destination">option 4</option>
            <option value="destination2">option 4</option>
            <option value="destination3">option 4</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" sx={{ textTransform: "none" }}>
          Find car
        </Button>
      </Box>
    </Box>
  );
}

export default Filter;
