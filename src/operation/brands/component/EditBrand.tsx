import { brandProviders } from "@/providers/brand-provider";
import Image from "next/image";
import { useState } from "react";
import { Edit, SimpleForm, TextInput, useNotify } from "react-admin";
import { storageProvider } from "@/providers/storage-provider";

export default function EditBrand() {
  const notify = useNotify();
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const filePath = `brands/${file.name}`;
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

  const save = async (data: any) => {
    const updateData = {
      name: name || data.name,
      image: image || data.image,
    };

    try {
      await brandProviders.update(data.id.toString(), updateData);
      notify("Brand updated successfully");
    } catch (error) {
      notify("Error: could not update brand");
    }
  };

  return (
    <Edit>
      <SimpleForm onSubmit={save}>
        <TextInput source="id" readOnly />
        <TextInput
          source="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" onChange={handleImageUpload} />
        {image && <Image src={image} alt="Uploaded" width={200} height={200} />}
      </SimpleForm>
    </Edit>
  );
}
