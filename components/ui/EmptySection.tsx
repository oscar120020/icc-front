import { Box, Typography } from "@mui/material";
import { EmptyImage } from "../SVG/Empty";

interface Props {
  message: string
}

export const EmptySection = ({message}: Props) => {
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
        {message}
      </Typography>
    </Box>
  );
};
