import { AdminProvider } from "@/providers/admin-provider";
import { Box, Button, TextField, Typography, Input } from "@mui/material";
import { FC, useState } from "react";
import { useNotify } from "react-admin";
import { IoCloseCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
export const AddAdmin: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [image, setImage] = useState<string>("");
  const [UserName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
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

  const handleAddAdmin = async () => {
    if (!UserName || !email || !password) {
      console.error("User name and email and password are required");
      notify("User name and email and password are required");
      return;
    }
    try {
      await AdminProvider.save(
        {
          name: UserName,
          email: email,
          password: password,
          urlImage: image,
        },
        {}
      );
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
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
        sx={{
          "width": "100%",
          "height": "8vh",
          "& .MuiInputBase-input": {
            height: "8vh",
          },
        }}
      />
      <TextField
        label="email"
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
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
