import {
  DeleteButton,
  EditButton,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { Box } from "@mui/material";
import Image from "next/image";

export default function ShowBrand() {
  return (
    <Show
      actions={false}
      sx={{
        "position": "relative",
        "padding": "1rem",
        "background": "white",
        "borderRadius": "0.5rem",
        "boxShadow":
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "& .MuiPaper-root": {
          background: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <SimpleShowLayout>
        <TextField
          source="id"
          sx={{
            background: "#f2f2f2",
            border: "1px dashed #f23e31",
            padding: "5px",
            height: "2rem",
            width: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <FunctionField
          render={(record: any) => (
            <Image
              src={record.image}
              alt={record.name}
              width={90}
              height={90}
              style={{ objectFit: "contain" }}
            />
          )}
        />
        <TextField source="name" />
      </SimpleShowLayout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <EditButton
          sx={{
            "background": "#36d946",
            "color": "snow",
            "&:hover": { background: "#10eb26" },
          }}
        />
        <DeleteButton
          sx={{
            "background": "red",
            "color": "snow",
            "&:hover": { background: "#f23e31" },
          }}
        />
      </Box>
    </Show>
  );
}
