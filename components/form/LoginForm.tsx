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
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import { loginToAdmin } from "../../api/rankingApi";
import { LoginFormValues } from "./formInterfaces";
import Cookie from "js-cookie";

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

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
}

export const LoginForm = ({handleClose}: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;
      login(username, password);
    },
  });

  const login = (username: string, password: string) => {
    setLoading(true);
    setError("");
    loginToAdmin({ password, username })
      .then(({ token }) => {
        setLoading(false);
        Cookie.set("token", token);
        router.push("/admin");
        handleClose()
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ px: 3, py: 2, backgroundColor: "#0ba7ce", color: "white" }}
      >
        Autorizarse
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
              "Acceder"
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
