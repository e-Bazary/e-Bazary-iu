import { Box, Typography } from "@mui/material";
import Image from "next/image";
import {
  DeleteButton,
  EditButton,
  FunctionField,
  ImageField,
  Show,
  TextField,
  useShowContext,
} from "react-admin";

const styleBox = {
  width: "45% !important",
  border: "1px solid rgba(0, 0, 0, 0.2) !important  ",
  borderRadius: "0.3rem",
  padding: "0.3rem",
};

export default function CarShow() {
  return (
    <Show actions={false}>
      <Box display="flex" flexDirection="row" alignItems="center" gap="1rem">
        <Box
          sx={{
            backgroundColor: "blue",
            height: "100%",
            width: "40%",
            borderRadius: "0.7rem",
            position: "relative",
          }}
        >
          <FunctionField
            render={(record: any) => (
              <Image
                src={record.imageurl}
                alt="mini-cooper"
                width={1920}
                height={1080}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "1rem",
                }}
              />
            )}
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
            <TextField
              source="type"
              sx={{
                color: "white",
                background: "black",
                height: "fit-content",
                fontSize: "0.9rem",
                padding: "4px 7px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            />
            <TextField
              source="status"
              sx={{
                color: "white",
                background: "#3ce669",
                height: "fit-content",
                padding: "4px 7px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            />
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
              <TextField source="name" />
            </Box>
            <Box sx={styleBox}>
              <h5>Model</h5>
              <TextField source="model" />
            </Box>
            <Box sx={styleBox}>
              <h5>Year</h5>
              <TextField source="year" />
            </Box>
            <Box sx={styleBox}>
              <h5>Color</h5>
              <TextField source="color" />
            </Box>
            <Box sx={styleBox}>
              <h5>Price</h5>
              <TextField source="price" />
            </Box>
            <Box sx={styleBox}>
              <h5>Brand</h5>
              <ImageField source="brand.image" />
            </Box>
            <Box sx={styleBox}>
              <h5>Power</h5>
              <TextField source="power" />
            </Box>
            <Box sx={styleBox}>
              <h5>Plate Number</h5>
              <TextField source="placeNumber" />
            </Box>
            <Box>
              <h5>Description</h5>
              <TextField source="description" />
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
            <EditButton />
            <DeleteButton />
          </Box>
        </Box>
      </Box>
    </Show>
  );
}
