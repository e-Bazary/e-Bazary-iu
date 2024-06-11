import {
  DeleteButton,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Box } from "@mui/material";
export default function AdminShow() {
  return (
    <Show sx={{ position: "relative" }}>
      <ImageField
        source="urlImage"
        label="Image"
        sx={{
          position: "absolute",
          left: "1vw",
          top: "2vh",
          height: "5rem",
          width: "5rem",
          border: "1px solid",
        }}
      />
      <Box>
        <TextField source="id" label="Id" sx={{ height: "3vh" }} />
        <TextField source="name" label="Name" />
        <TextField source="email" label="Email" />
        <TextField source="password" label="Password" />
      </Box>
      <DeleteButton
        sx={{
          "position": "absolute",
          "right": "0",
          "background": "#f23e31",
          "color": "white",
          "&:hover": { background: "red" },
        }}
      />
    </Show>
  );
}
