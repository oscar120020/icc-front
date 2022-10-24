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
import Cookies from "js-cookie";
import { useState } from "react";
import * as Yup from "yup";
import { updateCompetitor } from "../../api";
import { ContestantFormValues } from "./formInterfaces";



const validationSchema = Yup.object().shape({
  imageUrl: Yup.string()
    .min(6, "La contraseña debe tener por lo menos 8 carácteres")
    .required("Ingrese la contraseña"),
  fullName: Yup.string().nullable().notRequired(),
  socialLink: Yup.string().nullable().notRequired(),
});

interface Props {
  initialValues: ContestantFormValues;
  handleClose: () => void;
  revalidate: () => void;
}

export const ContestantForm = ({ handleClose, initialValues, revalidate }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      update(values)
    },
  });

  const update = (values: ContestantFormValues) => {
    console.log('adasdsadsadsadsa');
    
    const { id, ...rest } = values;
    const token = Cookies.get('token') || '';
    updateCompetitor(id!, rest, token)
    .then(res => {
      setLoading(false);
      revalidate();
      handleClose();
    })
    .catch(err => {
      setLoading(false);
      setError(err.message);
    })
  }

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ px: 3, py: 2, backgroundColor: "#0ba7ce", color: "white" }}
      >
        {initialValues.id ? "Editar" : "Crear"} participante
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
          name="imageUrl"
          label="Url de la imagen*"
          value={values.imageUrl}
          onChange={handleChange}
          error={touched.imageUrl && !!errors.imageUrl}
          helperText={touched.imageUrl && errors.imageUrl}
        />

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="fullName"
          label="Nombre completo"
          value={values.fullName}
          onChange={handleChange}
          error={touched.fullName && !!errors.fullName}
          helperText={touched.fullName && errors.fullName}
        />

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="socialLink"
          label="Url de la red social"
          value={values.socialLink}
          onChange={handleChange}
          error={touched.socialLink && !!errors.socialLink}
          helperText={touched.socialLink && errors.socialLink}
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
