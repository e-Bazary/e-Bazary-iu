import { FC } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { FaCar, FaHandHoldingUsd, FaRegHandshake } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "0.5vw",
  alignItems: "center",
  width: "45%",
};
const iconStyle = {
  fontSize: "1.5rem",
};
const textStyle = {
  fontSize: "0.9rem",
  fontWeight: "bold",
};
const About: FC = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingRight: "1%",
        paddingBlock: "2vh",
        marginBlock: "5vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "30%",
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.8)), url(/assets/BMW.jpeg)`,
          backgroundSize: "200%",
          backgroundPosition: "bottom",
          position: "relative",
          padding: "5vh 1vw",
          color: "white",
        }}
      >
        <p style={{ fontSize: "0.9rem" }}>Litle thing about us</p>
        <h5
          style={{
            fontSize: "1.6rem",
            paddingBlock: "1.5vh",
            borderBottom: "2px solid white",
            width: "fit-content",
          }}
        >
          Who we are
        </h5>
        <p style={{ lineHeight: "1.5", fontSize: "0.9rem", marginTop: "2vh" }}>
          We are a team of 4 who are passionate about helping you find the best
          place to stay. We are always looking for ways to improve our product
          and we are always looking for ways to improve our product.
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5vw",
            flexWrap: "wrap",
            margin: "1vh 1vw ",
          }}
        >
          <Box sx={styles}>
            <FaRegHandshake style={iconStyle} />
            <p style={textStyle}>Personalized service</p>
          </Box>
          <Box sx={styles}>
            <Ri24HoursFill style={iconStyle} />
            <p style={textStyle}>Support 24/24</p>
          </Box>
          <Box sx={styles}>
            <FaHandHoldingUsd style={iconStyle} />
            <p style={textStyle}>Best prices</p>
          </Box>
          <Box sx={styles}>
            <FaCar style={iconStyle} />
            <p style={textStyle}>Trusted Company</p>
          </Box>
        </Box>
        <Image
          width={1710}
          height={1134}
          src={`/assets/Ford_Shelby_gt350.png`}
          alt="mustang"
          style={{
            position: "absolute",
            bottom: "-7vh",
            height: "25vh",
            width: "25vw",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "21%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/Ford_Mustang_Gt_Shelby.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Modern Cars
        </p>
      </Box>
      <Box
        sx={{
          width: "21%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/old_voiture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Old Cars
        </p>
      </Box>
      <Box
        sx={{
          width: "21%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/mini-cooper.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Mini Cooper
        </p>
      </Box>
    </Box>
  );
};

export default About;
