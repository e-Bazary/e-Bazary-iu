import { Box } from "@mui/material";
import { Datagrid, DatagridProps, List, ListProps } from "react-admin";

export type BListProps = ListProps & {
  datagridProps: DatagridProps;
};

export default function BList({
  children,
  datagridProps,
  ...listProps
}: BListProps) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <List
        actions={false}
        empty={false}
        sx={{
          "& .MuiPaper-root": { boxShadow: "none" },
          "& td": { border: "none" },
        }}
        {...listProps}
      >
        <Datagrid {...datagridProps}>{children}</Datagrid>
      </List>
    </Box>
  );
}
