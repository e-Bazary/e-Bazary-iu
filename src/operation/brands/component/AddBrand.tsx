import { brandProviders } from "@/providers/brand-provider";
import { Box, Button, TextField, Typography, Input } from "@mui/material";
import { FC, useState } from "react";
import { useNotify } from "react-admin";
import { IoCloseCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
export const AddBrand: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [image, setImage] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const notify = useNotify();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files;
    if (file && file[0]) {
      const files = file[0];
      const formData = new FormData();
      formData.append("file", files);
      formData.append("upload_preset", "w64kbms9");
      try {
        const response = await fetch(
          `${process.env.REACT_APP_CLOUDINARY_URL}`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) throw new Error("Failed to upload image");

        const data = await response.json();
        setImage(data.secure_url);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  const handleAddBrand = async () => {
    if (!brandName || !image) {
      notify("Brand name and image are required");
    }
    try {
      await brandProviders.save({ name: brandName, image: image }, {});
      notify("Brand added successfully");
      onClose();
    } catch (error) {
      console.error("Error adding brand: ", error);
      notify("Failed to add brand");
    }
  };
  return (
    <Box
      sx={{
        width: "30%",
        height: "50vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        position: "relative",
      }}
    >
      <Typography>Add Brand</Typography>
      <TextField
        label="Brand Name"
        variant="outlined"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        sx={{
          "width": "100%",
          "height": "8vh",
          "& .MuiInputBase-input": {
            height: "8vh",
          },
        }}
      />
      <Input
        type="file"
        onChange={handleImageUpload}
        sx={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<MdAdd />}
        sx={{
          width: "fit-content",
          height: "8vh",
          textTransform: "none",
          fontWeight: "bold",
        }}
        onClick={handleAddBrand}
      >
        Add Brand
      </Button>
      <IoCloseCircle
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        onClick={onClose}
      />
    </Box>
  );
};
