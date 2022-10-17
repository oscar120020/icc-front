import { Grid, Typography } from "@mui/material";
import { LandingImage } from "../SVG/LandingIlustration";

export const HeaderSection = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        maxWidth: 1440,
        padding: "100px 30px 0 30px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography color="primary" variant="h1" component="h1">
          Intellisys Coding Challenge
        </Typography>
        <br />
        <Typography color="GrayText" variant="h3">
          Intellisys Coding Challenge (ICC) es una iniciativa que busca
          desarrollar habilidades de algoritmia, estructuras de datos,
          matemáticas, idioma inglés y resolución de problemas en miembros de la
          empresa Intellisys D Corp y del Instituto Cincinnatus.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <LandingImage />
      </Grid>
    </Grid>
  );
};
