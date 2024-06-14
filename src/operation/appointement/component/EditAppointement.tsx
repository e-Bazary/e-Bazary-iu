import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export default function EditAppointement() {
  const choices = [
    { id: "PENDING", name: "PENDING" },
    { id: "REJECTED", name: "REJECTED" },
    { id: "VALIDATE", name: "VALIDATE" },
  ];
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" readOnly />
        <TextInput source="username" readOnly />
        <TextInput source="firstname" readOnly />
        <TextInput source="email" readOnly />
        <TextInput source="contact" readOnly />
        <TextInput source="appointmentDate" readOnly />
        <SelectInput source="status" choices={choices} />
      </SimpleForm>
    </Edit>
  );
}
