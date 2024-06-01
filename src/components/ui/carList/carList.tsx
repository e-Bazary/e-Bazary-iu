import { Box, Button } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { RiGasStationLine } from "react-icons/ri";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const iconStyle = {
  fontSize: "1.3rem",
};
const pStyle = {
  fontSize: "0.9rem",
};
const CarList = () => {
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "22%",
        boxShadow: "5px 5px 5px  rgba(0,0,0,0.3)",
        borderRadius: "10px",
        backgroundColor: "white",
        marginBlock: "1vh",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          height: "30vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/assets/mercedes-190-sl-3690957_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <p
          style={{
            color: "white",
            background: "black",
            height: "fit-content",
            fontSize: "0.9rem",
            padding: "4px 7px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          2024
        </p>
        <p
          style={{
            color: "white",
            background: "#3ce669",
            height: "fit-content",
            padding: "4px 7px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          Sedan
        </p>
      </Box>
      <Box>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            paddingBlock: "1vh",
          }}
        >
          mercedes 190 sl
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: "0.9rem",
              color: "red",
              alignItems: "center",
              paddingBlock: "1vh",
            }}
          >
            <FaDollarSign />
            <p style={{ fontWeight: "bolder" }}>4000</p>
          </Box>
          <Box
            sx={{ height: "3vh", width: "3vw", backgroundColor: "black" }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBlock: "1vh",
          }}
        >
          <Box sx={styles}>
            <LiaTachometerAltSolid style={iconStyle} />
            <p style={pStyle}>160 HP</p>
          </Box>
          <Box sx={styles}>
            <MdAirlineSeatReclineExtra style={iconStyle} />
            <p style={pStyle}>4 sites</p>
          </Box>
          <Box sx={styles}>
            <RiGasStationLine style={iconStyle} />
            <p style={pStyle}>Hybrid</p>
          </Box>
        </Box>
        <Button variant="contained" sx={{ margin: "1vh auto", width: "100%" }}>
          <p>Book Now</p>
        </Button>
      </Box>
    </Box>
  );
};

export default CarList;
