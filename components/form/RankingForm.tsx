import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  LocalizationProvider,
  DesktopDatePicker,
  DateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useQuery } from "react-query";
import * as Yup from "yup";
import { createContest, getContestInfo, getSeasons, updateRanking } from "../../api";
import { RankingFormValues } from "./formInterfaces";

interface Props {
  initialValues: RankingFormValues;
  handleClose: () => void;
  revalidate: () => void;
}

const validationSchema = Yup.object().shape({
  seasonId: Yup.string().required("Seleccione una temporada"),
  rankingUrl: Yup.string()
    .required("Ingrese una url de Vjudge")
    .matches(
      /^https:\/\/vjudge\.net\/contest\/.*[\w\0,9]/,
      "Url no coincide con torneo de Vjudge"
    ),
  name: Yup.string()
    .required("Ingrese el nombre de la competencia")
    .min(5, "El nombre debe tener por lo menos 5 carácteres"),
  begin: Yup.date().nullable(true).required("Ingrese la fecha de inicio"),
  end: Yup.date().nullable(true).required("Ingrese la fecha de fin"),
});

export const RankingForm = ({
  initialValues,
  handleClose,
  revalidate,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [loadingScrapping, setLoadingScrapping] = useState(false);
  const [error, setError] = useState("");
  const { data: seasonsData } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });
  const { handleSubmit, handleChange, values, setFieldValue, touched, errors, validateField } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        if (!!initialValues.rankingUrl) {
          update(values);
        } else {
          create(values);
        }
      },
    });

  const create = (values: RankingFormValues) => {
    setLoading(true);
    setError("");
    const token = Cookies.get("token") || "";
    createContest(values, token)
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

  const update = (values: RankingFormValues) => {
    setLoading(true);
    setError("");
    const token = Cookies.get("token") || "";
    const body = {
      name: values.name,
      begin: new Date(values.begin),
      end: new Date(values.end),
    }
    updateRanking(values.id!, body, token)
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

  const firstScrapping = () => {
    touched.rankingUrl = true
    validateField("rankingUrl")
    if(errors.rankingUrl || !values.rankingUrl) return;
    setLoadingScrapping(true)
    getContestInfo(values.rankingUrl)
    .then(res => {
      const { name, begin, end } = res;
      setFieldValue('name', name)
      setFieldValue('begin', new Date(begin))
      setFieldValue('end', new Date(end))
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoadingScrapping(false)
    })
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ px: 3, py: 2, backgroundColor: "#0ba7ce", color: "white" }}
      >
        {initialValues.rankingUrl ? "Editar" : "Crear"} competencia
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
          name="seasonId"
          label="Temporada*"
          value={values.seasonId}
          select
          onChange={handleChange}
          error={touched.seasonId && !!errors.seasonId}
          helperText={touched.seasonId && errors.seasonId}
          disabled={!!initialValues.rankingUrl}
        >
          {seasonsData?.map((season) => (
            <MenuItem key={season.id} value={season.id}>
              {season.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "90%", mb: 2 }}
          name="rankingUrl"
          label="Url de Vjudge*"
          value={values.rankingUrl}
          onChange={handleChange}
          error={touched.rankingUrl && !!errors.rankingUrl}
          helperText={touched.rankingUrl && errors.rankingUrl}
          disabled={!!initialValues.rankingUrl}
        />

        <Box sx={{ width: "90%", mb: 2 }}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            sx={{ bgcolor: "#0ba7ce", color: "#fff" }}
            onClick={firstScrapping}
          >
            {loadingScrapping ? (
              <CircularProgress color="inherit" size={15} />
            ) : (
              "Scrapping"
            )}
          </Button>
        </Box>

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
          <Stack sx={{ width: "90%", mb: 2 }}>
            <DateTimePicker
              label="Fecha de inicio*"
              value={values.begin}
              onChange={(value) => setFieldValue("begin", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: "100%", margin: "0px 0px", mb: 2 }}
                  error={touched.begin && !!errors.begin}
                  helperText={touched.begin && `${errors.begin || ""}`}
                />
              )}
            />

            <DateTimePicker
              label="Fecha de fin*"
              value={values.end}
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
