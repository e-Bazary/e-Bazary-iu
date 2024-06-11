import Image from "next/image";
import { useState } from "react";
import { Edit, SimpleForm, TextInput, useNotify } from "react-admin";

export default function EditAdmin() {
  const notify = useNotify();
  const [image, setImage] = useState<string>("");

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
          `https://api.cloudinary.com/v1_1/dgs1lyx4w/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) throw new Error("Failed to upload image");

        const data = await response.json();
        setImage(data.secure_url);
        console.log(data.secure_url);
      } catch (error) {
        notify("Error uploading image: " + error);
      }
    }
  };
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="email" readOnly />
        <TextInput source="name" />
        <TextInput source="password" />
        <input type="file" onChange={handleImageUpload} />
        {image && <Image src={image} alt="Uploaded" width={200} height={200} />}
      </SimpleForm>
    </Edit>
  );
}
