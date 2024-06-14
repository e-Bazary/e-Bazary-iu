import { AdminProvider } from "@/providers/admin-provider";
import Image from "next/image";
import { useState } from "react";
import { Edit, SimpleForm, TextInput, useNotify } from "react-admin";
import { storageProvider } from "@/providers/storage-provider";

interface EditAdminProps {
  data: {
    id: number;
    name: string;
    email: string;
  };
}

export default function EditAdmin() {
  const notify = useNotify();
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        notify("Error uploading image: " + error);
      }
    }
  };

  const handleEditAdmin = async (data: any) => {
    const updateData = {
      name: name,
      password: password,
      urlImage: image,
    };

    try {
      await AdminProvider.update(data.id.toString(), updateData);
      notify("Admin updated successfully");
    } catch (error) {
      notify("Error updating admin: " + error);
    }
  };

  return (
    <Edit>
      <SimpleForm onSubmit={handleEditAdmin}>
        <TextInput source="id" readOnly />
        <TextInput
          source="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          source="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="file" onChange={handleImageUpload} />
        {image && <Image src={image} alt="Uploaded" width={200} height={200} />}
      </SimpleForm>
    </Edit>
  );
}
