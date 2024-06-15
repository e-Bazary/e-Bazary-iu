import { TextField } from "@mui/material";
import React from "react";

interface CarTextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CarTextField: React.FC<CarTextFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      sx={{ margin: "8px 0" }} // Ajoute un peu d'espace autour du champ pour une meilleure présentation
    />
  );
};

export default CarTextField;
