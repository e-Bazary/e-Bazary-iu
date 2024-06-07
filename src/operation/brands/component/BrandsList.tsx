import * as React from "react";
import BList from "@/components/ui/Blist/BList";
import {
  DeleteButton,
  EditButton,
  FunctionField,
  TextField,
} from "react-admin";
import { MdAdd, MdDelete } from "react-icons/md";
import { Box, Button, Modal } from "@mui/material";
import { AddBrand } from "./AddBrand";
import { Brand } from "@/providers/types";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";

export default function BrandsList() {
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
        <h5 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Brands list</h5>
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
        title="Brands"
        resource="brand"
        datagridProps={{
          rowClick: "show",
        }}
      >
        <TextField source="id" />
        <TextField source="name" />
        <FunctionField
          render={(brand: Brand) => (
            <Image
              src={brand.image}
              alt={brand.name}
              width={55}
              height={55}
              style={{ objectFit: "contain" }}
            />
          )}
        />
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
          <AddBrand onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
