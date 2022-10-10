import type { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import Landing from "../assets/landing.svg";

const Home: NextPage = () => {
  return (
    <DefaultLayout
      title="Intellisys Coding Challenge"
      pageDescription="Intellisys Coding Challenge"
    >
      {/* Header */}
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", alignItems: "center", marginTop: 1}}
        className='fadeIn'
      >
        <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Typography color="primary" variant="h1" component="h1">
            Intellisys Coding Challenge
          </Typography>
          <br/>
          <Typography color="GrayText" variant="h3">
            Intellisys Coding Challenge (ICC) es una iniciativa que busca
            desarrollar habilidades de algoritmia, estructuras de datos,
            matemáticas, idioma inglés y resolución de problemas en miembros de
            la empresa Intellisys D Corp y del Instituto Cincinnatus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center'}}>
          <Image src={Landing} alt="Landing" />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Home;
