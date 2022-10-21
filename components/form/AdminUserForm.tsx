import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { AdminUserFormValues } from "./formInterfaces";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Ingrese el nombre de la temporada")
    .min(2, "El username debe tener por lo menos 2 carácteres"),
  password: Yup.string()
    .min(6, "La contraseña debe tener por lo menos 8 carácteres")
    .required("Ingrese la contraseña"),
});

interface Props {
  handleClose: () => void;
  initialValues: AdminUserFormValues;
}

export const AdminUserForm = ({ handleClose, initialValues }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ px: 3, py: 2, backgroundColor: "#0ba7ce", color: "white" }}
      >
        Crear administrador
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0px",
        }}
      >
        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="username"
          label="Username*"
          type="text"
          value={values.username}
          onChange={handleChange}
          error={touched.username && !!errors.username}
          helperText={touched.username && errors.username}
        />

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="password"
          label="Contraseña*"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        {!!error && (
          <Alert severity="error" sx={{ width: "90%" }}>
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "flex-end",
            width: "90%",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#0ba7ce",
              color: "white",
              fontWeight: "bold",
              width: "150px",
            }}
          >
            {loading ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              "Guardar"
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
