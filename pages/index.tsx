import type { NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { LandingImage } from "../components/SVG/LandingIlustration";
import { InfoItem } from "../components/landing/InfoItem";
import discordIcon from "../assets/discord-icon.svg";
import vjudgedIcon from "../assets/vjudge.png";
import intellisysIcon from "../assets/intellisys.png";

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
        sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
        className="fadeIn"
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
            matemáticas, idioma inglés y resolución de problemas en miembros de
            la empresa Intellisys D Corp y del Instituto Cincinnatus.
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
      {/* Instrucciones */}
      <Box sx={{ mt: 25 }}>
        <Box>
          <Typography fontWeight="500" textAlign="center" variant="h2">
            ¿Como Participar?
          </Typography>
          <Box
            sx={{
              width: "150px",
              height: "2px",
              background:
                "linear-gradient(to left, transparent, #0ba7ce, transparent);",
              margin: "15px auto 0 auto",
            }}
          />
          <Typography
            color="#646262"
            textAlign="center"
            sx={{ maxWidth: "90%", margin: "15px auto 0 auto" }}
          >
            Instrucciones para formar parte de los canales y grupos necesarios
            para poder participar
          </Typography>
        </Box>
        <Grid
          container
          sx={{ margin: "0", mt: 10, justifyContent: "center", width: "100%" }}
        >
          <InfoItem
            image={discordIcon}
            title="Unirse al discord"
            description="En el canal de discord es donde se maneja toda la información
            relacionada a los concursos."
            link={{
              label: "Unirse",
              url: "https://discord.gg/aSDvMjRe"
            }}
          />
          <InfoItem
            image={vjudgedIcon}
            title="Crear una cuenta en Vjudge"
            description="Es necesario crear una cuenta en Vjudge(la plataforma donde
            se realizan los concursos) para poder participar."
            link={{
              label: "Ir a Vjudge",
              url: "https://vjudge.net/"
            }}
          />
          <InfoItem
            image={intellisysIcon}
            title="Unirse al grupo 'Intellisys' en Vjudge"
            description="Para poder entrar a los diferentes concursos es necesario unirse al grupo
            privado de Intellisys, donde se listan todos los integrantes y competancias"
            link={{
              label: "Unirse",
              url: "https://vjudge.net/group/intellisys?r=05od4RPUN5c99GzI27mY"
            }}
          />
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
