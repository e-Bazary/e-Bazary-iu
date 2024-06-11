import BList from "@/components/ui/Blist/BList";
import { TextField, Button, EditButton, DeleteButton } from "react-admin";
import { Box } from "@mui/material";
import { MdDelete, MdEditNotifications } from "react-icons/md";
export default function CarList() {
  return (
    <>
      <BList
        title="Car"
        resource="car"
        datagridProps={{
          rowClick: "show",
        }}
      >
        <TextField source="name" />
        <TextField source="model" />
        <TextField source="brand" />
        <TextField source="color" />
        <TextField source="price" />
        <TextField source="description" />
        <TextField source="placeNumber" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <EditButton
            color="primary"
            label="Edit"
            icon={<MdEditNotifications />}
          />
          <DeleteButton color="warning" label="Delete" icon={<MdDelete />} />
        </Box>
      </BList>
    </>
  );
}
