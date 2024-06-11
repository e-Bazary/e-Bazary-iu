import BList from "@/components/ui/Blist/BList";
import { Admin } from "@/providers/types";
import { Box, Button, Modal } from "@mui/material";
import React from "react";
import {
  DeleteButton,
  EditButton,
  FunctionField,
  TextField,
} from "react-admin";
import { MdAdd, MdDelete } from "react-icons/md";
import { AddAdmin } from "./AddAdmin";
import { FaRegEdit } from "react-icons/fa";

export default function AdminList() {
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
        <h5 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Admin list</h5>
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
        title="Admin list"
        resource="admin"
        datagridProps={{
          rowClick: "show",
        }}
      >
        <TextField source="id" />
        <FunctionField
          render={(admin: Admin) => (
            <img
              src={admin.urlImage}
              alt={admin.name}
              style={{
                width: "3.5rem",
                height: "3.5rem",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
          )}
        />
        <TextField source="email" />
        <TextField source="name" />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <EditButton color="success" label="Edit" icon={<FaRegEdit />} />
          <DeleteButton color="warning" label="Delete" icon={<MdDelete />} />
        </Box>
      </BList>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <AddAdmin onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
