import { Box, Typography, Button } from "@mui/material";
import { IoLogoModelS } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { TbBrandAppleArcade } from "react-icons/tb";

const filterColors = {
  color: "#f04f4f",
  fontSize: "1rem",
};
const icon = {
  color: filterColors.color,
  fontSize: filterColors.fontSize,
};
const Filter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "95%",
        height: "12vh",
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
          <TbBrandAppleArcade style={icon} />
          <Typography variant="caption" sx={filterColors}>
            Brand
          </Typography>
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
          <IoLogoModelS style={icon} />
          <Typography variant="caption" sx={filterColors}>
            Model
          </Typography>
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
          <IoColorPalette style={icon} />
          <Typography variant="caption" sx={filterColors}>
            Color
          </Typography>
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
          <MdAirlineSeatReclineExtra style={icon} />
          <Typography variant="caption" sx={filterColors}>
            placeNumber
          </Typography>
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
        <Button
          variant="contained"
          sx={{
            "textTransform": "none",
            "backgroundColor": "#f04f4f",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Find car
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
