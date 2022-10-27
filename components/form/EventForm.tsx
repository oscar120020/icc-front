import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  Stack,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import * as Yup from "yup";
import { createEvent, updateEvent } from "../../api";
import { EventFormValues } from "./formInterfaces";

const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().nullable().notRequired(),
  rankingId: Yup.string().nullable().notRequired(),
  name: Yup.string().required("Ingrese un nombre"),
  date: Yup.date().nullable(true).required("Ingrese la fecha del evento"),
});

interface Props {
  initialValues: EventFormValues;
  handleClose: () => void;
  revalidate: () => void;
}

export const EventForm = ({
  handleClose,
  initialValues,
  revalidate,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, setFieldValue, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        if (!!initialValues.name) {
          update(values);
        } else {
          create(values);
        }
      },
    });

  const create = (values: EventFormValues) => {
    const { id, ...rest } = values;
    const token = Cookies.get("token") || "";
    createEvent(rest, token)
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

  const update = (values: EventFormValues) => {
    const { id, ...rest } = values;
    const token = Cookies.get("token") || "";
    updateEvent(id!, rest, token)
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
        {initialValues.id ? "Editar" : "Crear"} evento
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
          label="Nombre completo"
          value={values.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack
            display="flex"
            flexDirection="row"
            sx={{ width: "90%", mb: 2 }}
          >
            <DesktopDatePicker
              label="Fecha del evento*"
              inputFormat="MM/DD/YYYY"
              value={values.date}
              onChange={(value) => setFieldValue("date", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: "100%", margin: "0px 0px" }}
                  error={touched.date && !!errors.date}
                  helperText={touched.date && `${errors.date || ""}`}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="imageUrl"
          label="Url de la imagen"
          value={values.imageUrl || ""}
          onChange={handleChange}
          error={touched.imageUrl && !!errors.imageUrl}
          helperText={touched.imageUrl && errors.imageUrl}
        />

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="rankingId"
          label="Id del ranking"
          value={values.rankingId || ""}
          onChange={handleChange}
          error={touched.rankingId && !!errors.rankingId}
          helperText={touched.rankingId && errors.rankingId}
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
