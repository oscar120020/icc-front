import { Box, Typography } from "@mui/material";
import { EmptyImage } from "../SVG/Empty";

export const EmptySeason = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <EmptyImage width={200} />
      <Typography variant="h5" textAlign="center">
        Esta temporada aún no tiene información
      </Typography>
    </Box>
  );
};
