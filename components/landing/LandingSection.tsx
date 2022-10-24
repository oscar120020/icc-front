import { Box, Typography } from "@mui/material";

interface Props {
    title: string;
    description?: string;
}

export const LandingSection = ({title, description}: Props) => {
  return (
    <Box>
      <Typography color="primary" fontWeight="bold" textAlign="center" variant="h2">
        {title}
      </Typography>
      <Box
        sx={{
          width: "150px",
          height: "2px",
          background:
            "linear-gradient(to left, transparent, #0ba7ce, transparent);",
          margin: "15px auto 0 auto",
        }}
      />
      <Typography
        color="#646262"
        textAlign="center"
        sx={{ maxWidth: "90%", margin: "15px auto 0 auto" }}
      >
        {description}
      </Typography>
    </Box>
  );
};
