import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import error from "next/error";

interface Props {
  message: string;
  confirmFunction: () => void;
  close: () => void;
}

export const ConfirmationAlert = ({
  message,
  confirmFunction,
  close,
}: Props) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Alert severity="warning" sx={{ width: "100%" }}>
        <AlertTitle>{message}</AlertTitle>
      </Alert>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          color="error"
          sx={{ bgcolor: "#f44336", color: "white", mr: 2 }}
          size="large"
          onClick={close}
        >
          Cancelar
        </Button>
        <Button
          sx={{ bgcolor: "#0ba7ce", color: "white" }}
          size="large"
          onClick={confirmFunction}
        >
          Eliminar
        </Button>
      </Box>
    </Box>
  );
};
