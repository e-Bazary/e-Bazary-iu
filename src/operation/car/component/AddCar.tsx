import { Box, Button, TextField, Typography, Input } from "@mui/material";
import { FC, useState } from "react";
import { useNotify } from "react-admin";
import { IoCloseCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { storageProvider } from "@/providers/storage-provider";
import { carsProviders } from "@/providers/car-providers";

export const AddCar: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [imageurl, setImageUrl] = useState<string>("");
  const [carDetails, setCarDetails] = useState({
    name: "",
    description: "",
    brandId: "",
    model: "",
    price: 0,
    color: "",
    motorType: "",
    power: "",
    placeNumber: 0,
    status: false,
    type: "",
  });
  const notify = useNotify();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const filePath = `cars/${file.name}`;
      try {
        const uploadResult = await storageProvider.uploadFiles({
          path: filePath,
          rawFile: file,
        });
        setImageUrl(uploadResult.url);
      } catch (error) {
        console.error("Error uploading image: ", error);
        notify("Failed to upload image");
      }
    }
  };

  const handleAddCar = async () => {
    if (!carDetails.name || !imageurl) {
      notify("Car name and image are required");
    } else {
      try {
        const updatedCarDetails = {
          ...carDetails,
          price: Number(carDetails.price), // Ensure price is a number if it's not already handled
          imageurl: imageurl,
        };
        await carsProviders.save(updatedCarDetails, {});
        notify("Car added successfully");
        onClose();
      } catch (error) {
        console.error("Error adding car: ", error);
        notify("Failed to add car");
      }
    }
  };

  const handleChange =
    (prop: keyof typeof carDetails) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCarDetails({ ...carDetails, [prop]: event.target.value });
    };

  return (
    <Box
      sx={{
        width: "70%",
        height: "auto",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        position: "relative",
      }}
    >
      <Typography>Add Car</Typography>
      {Object.keys(carDetails).map((key) => (
        <TextField
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          variant="outlined"
          value={carDetails[key as keyof typeof carDetails]}
          onChange={handleChange(key as keyof typeof carDetails)}
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />
      ))}
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
        onClick={handleAddCar}
      >
        Add Car
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
