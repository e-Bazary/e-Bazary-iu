import { FC } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

const styleBox = {
  width: "45% !important",
  border: "1px solid rgba(0, 0, 0, 0.2) !important  ",
  borderRadius: "0.3rem",
  padding: "0.3rem",
};
interface CarShowProps {
  onClose: () => void;
  name: string;
  model: string;
  price: number;
  color: string;
  power: string;
  placeNumber: number;
  motorType: string;
  status: boolean;
  type: string;
  imageurl: string;
  description: string;
}

const CarShow: FC<CarShowProps> = ({
  onClose,
  name,
  model,
  price,
  color,
  power,
  placeNumber,
  motorType,
  status,
  type,
  imageurl,
  description,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "65vh",
        width: "65%",
        padding: "0.7rem",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "40%",
          borderRadius: "0.7rem",
          position: "relative",
        }}
      >
        <Image
          src={imageurl}
          alt={name}
          width={1920}
          height={1080}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            borderRadius: "1rem",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingInline: "1rem",
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
            {type}
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
            {status}
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          height: "100%",
          width: "59%",
          padding: "0.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h5 style={{ fontSize: "1.5rem" }}>Car Details</h5>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
          <Box sx={styleBox}>
            <h5>Product Name</h5>
            <p>{name}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Model</h5>
            <p>{model}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Year</h5>
            <p>2020</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Color</h5>
            <p>{color}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Price</h5>
            <p>{price}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Brand</h5>
            <p>{model}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Power</h5>
            <p>{power}</p>
          </Box>
          <Box sx={styleBox}>
            <h5>Plate Number</h5>
            <p>{placeNumber}</p>
          </Box>
          <Box>
            <h5>Description</h5>
            <p>{description}</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          <Button
            sx={{
              "backgroundColor": "#3ce669",
              "color": "white",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            Appointement
          </Button>
          <Button
            sx={{
              "backgroundColor": "#f04f4f",
              "color": "white",
              "fontWeight": "bold",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={onClose}
          >
            exit
          </Button>
        </Box>
      </Box>
      <IoCloseCircle
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        onClick={onClose}
      />
    </Box>
  );
};

export default CarShow;
