import { Box, Avatar, Typography } from "@mui/material";
function UserInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1vw",
        color: "white",
      }}
    >
      <Avatar
        sx={{ width: 40, height: 40, bgcolor: "blue", borderRadius: "10%" }}
      />
      <Box>
        <Typography variant="subtitle1" fontWeight="600">
          John Doe
        </Typography>
        <Typography variant="body1"> Admin</Typography>
      </Box>
    </Box>
  );
}

export default UserInfo;
