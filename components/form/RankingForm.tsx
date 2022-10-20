import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import * as Yup from "yup";
import { getSeasons } from "../../api/rankingApi";
import { RankingFormValues } from "./formInterfaces";

interface Props {
  initialValues: RankingFormValues;
}

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .required("Ingrese una url de Vjudge")
    .matches(
      /^https:\/\/vjudge\.net\/contest\/.*[\w\0,9]/,
      "Url no coincide con torneo de Vjudge"
    ),
  seasonId: Yup.string().required("Seleccione una temporada")
});

export const RankingForm = ({ initialValues }: Props) => {
  const { data } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log({ values });
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          {
            data?.map(season => (
              <MenuItem key={season.id} value={season.id}>
                {season.name}
              </MenuItem>
            ))
          }
        </TextField>

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
            Guardar
          </Button>
        </Box>
      </form>
    </Box>
  );
};
