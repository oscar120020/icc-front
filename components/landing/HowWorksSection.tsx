import { Grid, Typography, Box, Link } from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import { QuestionImage } from "../SVG/Question";
import { InlineLink } from "../ui";

export const HowWorksSection = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        maxWidth: 1440,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        sm={12}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: { xs: "absolute", sm: "absolute", lg: "relative" },
          pointerEvents: {xs: "none", sm: "none", lg: "all"},
          opacity: { xs: 0.1, sm: 0.1, lg: 1 },
        }}
      >
        <QuestionImage width={550} height={400} />
      </Grid>
      <Grid
        item
        sm={12}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ mb: 2 }}
          variant="h2"
          component="h2"
          color="primary"
          fontWeight="bold"
        >
          ¿Cómo funciona el ICC?
        </Typography>
        <Box sx={{ mb: 1 }} display="flex">
          <CookieIcon color="primary" fontSize="medium" />
          <Typography variant="h3" component="p" fontWeight={300}>
            La participación es individual.
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }} display="flex">
          <CookieIcon color="primary" fontSize="medium" />
          <Typography variant="h3" component="p" fontWeight={300}>
            Sus challenges (concursos) se realizan el primer viernes de cada
            mes, de 3:00pm a 4:30pm en la plataforma online vjudge.net.
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }} display="flex">
          <CookieIcon color="primary" fontSize="medium" />
          <Typography variant="h3" component="p" fontWeight={300}>
            Lenguajes permitidos incluyen: C/C++, Java, Python, JavaScript,
            entre otros.
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }} display="flex">
          <CookieIcon color="primary" fontSize="medium" />
          <Typography variant="h3" component="p" fontWeight={300}>
            En cada challenge, al estilo{" "}
            <InlineLink link="https://icpc.global/" label="ICPC" />
            (International Collegiate Programming Contest), se proponen 3
            ejercicios de variadas complejidades y áreas del conocimiento.
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }} display="flex">
          <CookieIcon color="primary" fontSize="medium" />
          <Typography variant="h3" component="p" fontWeight={300}>
            En el ranking de posiciones se ubica primero quien resuelva la mayor
            cantidad de desafíos (puntos); en caso de empates, entonces se ubica
            primero el que acumule menor penalidad (penalty).
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
