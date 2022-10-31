import { useState } from "react";
import { Alert, AlertTitle, Box, Button, CircularProgress } from "@mui/material";

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
  const [loading, setLoading] = useState(false);

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
          onClick={() => {
            setLoading(true);
            confirmFunction();
          }}
        >
          {loading ? <CircularProgress color="inherit" size={25} /> : "Eliminar"}
        </Button>
      </Box>
    </Box>
  );
};
