import React from "react";
import { Box, Button } from "@mui/material";
import { MdAdd, MdDelete, MdEditNotifications } from "react-icons/md";
import BList from "@/components/ui/Blist/BList";
import { DeleteButton, EditButton, TextField } from "react-admin";
export default function AppointementList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          alignItems: "center",
          margin: "0.3rem 0",
        }}
      >
        <h5 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Appointement list
        </h5>
        <Button
          variant="outlined"
          sx={{
            "borderRadius": "10px",
            "borderColor": "green",
            "color": "green",
            "textTransform": "none",
            "fontWeight": "bold",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
              borderColor: "green",
            },
          }}
          startIcon={<MdAdd />}
          onClick={handleOpen}
        >
          Add
        </Button>
      </Box>
      <BList
        title="Appointement"
        resource="appointment"
        datagridProps={{
          rowClick: "show",
        }}
      >
        <TextField source="id" label="Id" />
        <TextField source="username" label="Name" />
        <TextField source="firstname" label="First Name" />
        <TextField source="email" label="Email" />
        <TextField source="contact" label="Phone" />
        <TextField source="appointmentDate" label="Appointment Date" />
        <TextField source="status" label="Appointment Status" />
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
          <DeleteButton color="primary" label="Delete" icon={<MdDelete />} />
        </Box>
      </BList>
    </>
  );
}
