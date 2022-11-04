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
  import { createOrganizer, createUserAdmin, updateOrganizer } from "../../api";
  import { AdminUserFormValues, OrganizerFormValues } from "./formInterfaces";
  
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Ingrese el nombre completo del Organizador")
      .min(2, "El username debe tener por lo menos 2 carácteres"),
    role: Yup.string()
      .min(6, "La contraseña debe tener por lo menos 8 carácteres")
      .required("Ingrese el rol del organizador"),
    socialLink: Yup.string().min(10, "La url debe tener 10 carácteres"),
    imageUrl: Yup.string().min(10, "La url debe tener 10 carácteres"),
    
  });
  
  interface Props {
    handleClose: () => void;
    initialValues: OrganizerFormValues;
    revalidate: () => void;
  }
  
  export const OrganizerUserForm = ({ handleClose, initialValues, revalidate }: Props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const { handleSubmit, handleChange, values, touched, errors } = useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        if (!!initialValues.fullName) {
          update(values);
        } else {
          create(values);
        }
      },
    });
  
    const create = (values: OrganizerFormValues) => {
      setLoading(true);
      const token = Cookies.get('token') || '';
      createOrganizer(values, token)
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
    const update = (values: OrganizerFormValues) => {
      setLoading(true);
      const { id, ...rest } = values;
      const token = Cookies.get("token") || "";
      updateOrganizer(id!, rest, token)
        .then((res) => {
          setLoading(false);
          revalidate();
          handleClose();
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
          Crear Organizador
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
            name="fullName"
            label="Nombre completo*"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            error={touched.fullName && !!errors.fullName}
            helperText={touched.fullName && errors.fullName}
          />
  
          <TextField
            sx={{ width: "90%", mb: 2 }}
            name="role"
            label="Rol"
            type="text"
            value={values.role}
            onChange={handleChange}
            error={touched.role && !!errors.role}
            helperText={touched.role && errors.role}
          />
          <TextField
            sx={{ width: "90%", mb: 2 }}
            name="imageUrl"
            label="Url de la imagen"
            type="text"
            value={values.imageUrl}
            onChange={handleChange}
            error={touched.imageUrl && !!errors.imageUrl}
            helperText={touched.imageUrl && errors.imageUrl}
          />
          <TextField
            sx={{ width: "90%", mb: 2 }}
            name="socialLink"
            label="Url de la red Social"
            type="text"
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