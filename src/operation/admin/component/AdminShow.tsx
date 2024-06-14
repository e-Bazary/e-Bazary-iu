import {
  DeleteButton,
  EditButton,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Box } from "@mui/material";
export default function AdminShow() {
  return (
    <Show
      actions={false}
      sx={{
        "position": "relative",
        "& .css-bhp9pd-MuiPaper-root-MuiCard-root": {
          boxShadow: "none !important",
          backgroundColor: "transparent !important",
          width: "fit-content",
        },
        "backgroundColor": "white",
        "boxShadow": "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        "height": "fit-content",
        "padding": "2vh 2vw",
        "& .MuiCard-root": {
          display: "flex",
          flexDirection: "row !important",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        },
      }}
    >
      <ImageField
        source="urlImage"
        label="Image"
        sx={{
          "height": "6rem",
          "width": "6rem",
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "objectFit": "cover !important",
          "& img": {
            height: "100%",
            width: "100%",
            objectFit: "cover !important",
            borderRadius: "0.5rem",
          },
        }}
      />
      <Box display="flex" flexDirection="column" gap="1vh" marginLeft="2vw">
        <TextField source="id" label="Id" sx={{ fontSize: "1rem" }} />
        <TextField
          source="name"
          label="Name"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
        />
        <TextField source="email" label="Email" sx={{ fontSize: "1rem" }} />
        <TextField source="password" sx={{ fontSize: "1rem" }} />
      </Box>
      <Box
        position="absolute"
        right="0"
        bottom="0"
        padding="1vh 1vw"
        display="flex"
        gap="1vw"
      >
        <EditButton
          sx={{
            "backgroundColor": "success.main",
            "color": "white",
            "&:hover": { backgroundColor: "success.main" },
          }}
        />
        <DeleteButton
          sx={{
            "backgroundColor": "error.main",
            "color": "white",
            "&:hover": { backgroundColor: "error.main" },
          }}
        />
      </Box>
    </Show>
  );
}
