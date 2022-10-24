import { Alert, AlertTitle, Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import * as Yup from "yup";
import { createSeason, updateSeason } from "../../api/rankingApi";
import { getDatePlusOneDay } from "../../helpers/dateHelpers";
import { SeasonFormValues } from "./formInterfaces";

interface Props {
  initialValues: SeasonFormValues;
  handleClose: () => void;
  revalidate: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ingrese el nombre de la temporada")
    .min(5, "El nombre debe tener por lo menos 5 carácteres"),
  beginning: Yup.date().nullable(true).required("Ingrese la fecha de inicio"),
  end: Yup.date()
    .nullable(true)
    .min(Yup.ref("beginning"), "La fecha de fin debe ser mayor a la de inicio")
    .required("Ingrese la fecha de fin"),
});

export const SeasonForm = ({ initialValues, handleClose, revalidate }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        if(!values.id){
          create(values)
        }else{
          update(values)
        }
      },
    });
  
  const create = (values: SeasonFormValues) => {
    setLoading(true);
    const token = Cookies.get('token') || ''
    createSeason(values, token)
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

  const update = (values: SeasonFormValues) => {
    setLoading(true);
    const token = Cookies.get('token') || ''
    const { id, ...rest } = values;
    updateSeason(id!, rest, token)
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
        {initialValues.name ? "Editar" : "Crear"} temporada
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
          name="name"
          label="Nombre*"
          value={values.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack display="flex" flexDirection="row" sx={{ width: "90%" }}>
            <DesktopDatePicker
              label="Fecha de inicio*"
              inputFormat="MM/DD/YYYY"
              value={values.beginning}
              onChange={(value) => setFieldValue("beginning", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: "100%", margin: "0px 0px", mr: 2 }}
                  error={touched.beginning && !!errors.beginning}
                  helperText={touched.beginning && `${errors.beginning || ""}`}
                />
              )}
            />
            <DesktopDatePicker
              label="Fecha de fin*"
              inputFormat="MM/DD/YYYY"
              value={values.end}
              minDate={getDatePlusOneDay(values.beginning)}
              onChange={(value) => setFieldValue("end", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: "100%", margin: "0px 0px" }}
                  error={touched.end && !!errors.end}
                  helperText={touched.end && `${errors.end || ""}`}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
        {!!error && (
          <Alert severity="error" sx={{ width: "90%", mt: 2 }}>
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
