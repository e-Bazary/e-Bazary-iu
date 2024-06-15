import { AdminProvider } from "@/providers/admin-provider";
import { Box, Button, TextField, Typography, Input } from "@mui/material";
import { FC, useState } from "react";
import { useNotify } from "react-admin";
import { IoCloseCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { storageProvider } from "@/providers/storage-provider";
import generatePassword from "generate-password";

export const AddAdmin: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const notify = useNotify();

  const password = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    strict: true,
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const filePath = `admins/${file.name}`;
      try {
        const uploadResult = await storageProvider.uploadFiles({
          path: filePath,
          rawFile: file,
        });
        setImage(uploadResult.url);
      } catch (error) {
        console.error("Error uploading image: ", error);
        notify("Failed to upload image");
      }
    }
  };

  const handleAddAdmin = async (data: any) => {
    const save = {
      name: name,
      email: email,
      password: password,
      urlImage: image,
    };
    try {
      await AdminProvider.save(save, {});
      notify("Admin added successfully");
      onClose();
    } catch (error) {
      console.error("Error adding Admin: ", error);
      notify("Failed to add Admin");
    }
  };

  return (
    <Box
      sx={{
        width: "30%",
        height: "fit-content",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        position: "relative",
        borderRadius: "1rem",
      }}
    >
      <Typography>Add Admin</Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "width": "100%",
          "height": "8vh",
          "& .MuiInputBase-input": {
            height: "8vh",
          },
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        onClick={handleAddAdmin}
      >
        Add Admin
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
