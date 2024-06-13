import React from "react";
import { Box } from "@mui/material";
import { MdDelete } from "react-icons/md";
import BList from "@/components/ui/Blist/BList";
import { DateField, DeleteButton, EditButton, TextField } from "react-admin";
import { FaRegEdit } from "react-icons/fa";

export default function AppointementList() {
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
      </Box>
      <BList
        title="Appointement"
        resource="appointment"
        datagridProps={{
          rowClick: "show",
        }}
        sx={{
          "& .MuiTableCell-root": {
            width: "fit-content !important",
            padding: "0.5rem 0",
          },
        }}
      >
        <TextField source="id" label="Id" />
        <TextField source="username" label="Name" />
        <TextField source="firstname" label="First Name" />
        <TextField source="email" label="Email" />
        <TextField source="contact" label="Phone" />
        <DateField source="appointmentDate" label="Date" />
        <TextField source="status" label="Status" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <EditButton color="info" label="Edit" icon={<FaRegEdit />} />
          <DeleteButton color="warning" label="Delete" icon={<MdDelete />} />
        </Box>
      </BList>
    </>
  );
}
