import BList from "@/components/ui/Blist/BList";
import {
  TextField,
  EditButton,
  DeleteButton,
  FunctionField,
} from "react-admin";
import { Box, Button, Modal } from "@mui/material";
import { MdAdd, MdDelete, MdEditNotifications } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { AddCar } from "./AddCar";
export default function CarList() {
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
        <h5 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Car list</h5>
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
        title="Car"
        resource="car"
        datagridProps={{
          rowClick: "show",
        }}
      >
        <TextField source="name" />
        <TextField source="model" />
        <FunctionField
          label="Brand"
          render={(record: any) => (
            <Image
              src={record.brand.image}
              alt="Brand"
              width={50}
              height={50}
            />
          )}
        />
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
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <AddCar onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
