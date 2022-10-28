import { Box, Alert, AlertTitle, Button } from "@mui/material";

interface Props {
  message: string;
  close: () => void;
}

export const ErrorMessage = ({ message, close }: Props) => {
  return (
    <Box sx={{ padding: 5 }}>
      <Alert severity="error">
        <AlertTitle>{message}</AlertTitle>
      </Alert>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          color="error"
          variant="outlined"
          size="large"
          onClick={close}
          fullWidth
        >
          Cerrar
        </Button>
      </Box>
    </Box>
  );
};
