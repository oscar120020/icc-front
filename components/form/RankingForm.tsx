import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useQuery } from "react-query";
import * as Yup from "yup";
import { addRankingToSeason, getSeasons } from "../../api";
import { RankingFormValues } from "./formInterfaces";

interface Props {
  initialValues: RankingFormValues;
  handleClose: () => void;
  revalidate: () => void;
}

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .required("Ingrese una url de Vjudge")
    .matches(
      /^https:\/\/vjudge\.net\/contest\/.*[\w\0,9]/,
      "Url no coincide con torneo de Vjudge"
    ),
  seasonId: Yup.string().required("Seleccione una temporada"),
});

export const RankingForm = ({
  initialValues,
  handleClose,
  revalidate,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: seasonsData } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      create(values)
    },
  });

  const create = (values: RankingFormValues) => {
    setLoading(true);
    setError('');
    const token = Cookies.get("token") || "";
    addRankingToSeason(values, token)
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
        {initialValues.url ? "Editar" : "Crear"} ranking
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
          name="url"
          label="Url de Vjudge*"
          value={values.url}
          onChange={handleChange}
          error={touched.url && !!errors.url}
          helperText={touched.url && errors.url}
        />

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="seasonId"
          label="Temporada*"
          value={values.seasonId}
          select
          onChange={handleChange}
          error={touched.seasonId && !!errors.seasonId}
          helperText={touched.seasonId && errors.seasonId}
        >
          {seasonsData?.map((season) => (
            <MenuItem key={season.id} value={season.id}>
              {season.name}
            </MenuItem>
          ))}
        </TextField>

        {!!error && (
          <Alert severity="error" sx={{ width: "90%", mt: 2 }}>
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}

        {!!loading && (
          <Alert severity="warning" sx={{ width: "90%", mt: 2 }}>
            <AlertTitle>Esta acción puede tardar unos segundos</AlertTitle>
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
