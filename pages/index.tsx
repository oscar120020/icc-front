import type { NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { LandingImage } from "../components/SVG/LandingIlustration";
import { InfoItem } from "../components/landing/InfoItem";
import discordIcon from "../assets/landing/discord-liner3.png";
import vjudgedIcon from "../assets/landing/vjudge-liner2.png";
import intellisysIcon from "../assets/landing/intellisys-linear2.png";
import { SectionHeader } from "../components/landing/SectionHeader";
import { QuestionImage } from "../components/SVG/Question";
import CookieIcon from "@mui/icons-material/Cookie";

const Home: NextPage = () => {
  return (
    <DefaultLayout
      title="Intellisys Coding Challenge"
      pageDescription="Intellisys Coding Challenge"
      noApplySpacing
    >
      {/* Header */}
      <Box
        sx={{ height: "100vh", width: "100%" }}
        className="fadeIn bg-landing"
      >
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
              matemáticas, idioma inglés y resolución de problemas en miembros
              de la empresa Intellisys D Corp y del Instituto Cincinnatus.
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
      </Box>

      {/* Instrucciones */}
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
      >
        <Box>
          <SectionHeader
            title="¿Como Participar?"
            description="Instrucciones para formar parte de los canales y grupos necesarios para
            poder participar"
          />
          <Grid
            container
            sx={{
              mt: 10,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <InfoItem
              image={discordIcon}
              title="Unirse al discord"
              description="En el canal de discord es donde se maneja toda la información
              relacionada a los concursos."
              link={{
                label: "Unirse",
                url: "https://discord.gg/aSDvMjRe",
              }}
            />
            <InfoItem
              image={vjudgedIcon}
              title="Crear una cuenta en Vjudge"
              description="Es necesario crear una cuenta en Vjudge(la plataforma donde
              se realizan los concursos) para poder participar."
              link={{
                label: "Ir a Vjudge",
                url: "https://vjudge.net/",
              }}
            />
            <InfoItem
              image={intellisysIcon}
              title="Unirse al grupo 'Intellisys'"
              description="Para poder entrar a los diferentes concursos es necesario unirse al grupo
              privado de Intellisys, donde se listan todos los integrantes y competancias"
              link={{
                label: "Unirse",
                url: "https://vjudge.net/group/intellisys?r=05od4RPUN5c99GzI27mY",
              }}
            />
          </Grid>
        </Box>
      </Box>
      {/* Como funciona */}
      <Box sx={{ mt: 15, mb: 15, backgroundColor: "#cddce26a" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            maxWidth: 1440,
            padding: "80px 30px 80px 30px",
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
            <Typography sx={{ mb: 2 }} variant="h2">
              ¿Como funciona el concurso?
            </Typography>
            <Box sx={{ mb: 1 }} display="flex">
              <CookieIcon color="primary" fontSize="medium" />
              <Typography variant="subtitle1" fontWeight={300}>
                La participación es individual.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }} display="flex">
              <CookieIcon color="primary" fontSize="medium" />
              <Typography variant="subtitle1" fontWeight={300}>
                Sus challenges (competencias) se realizan el primer viernes de
                cada mes, de 3:00pm a 4:30pm en la plataforma online vjudge.net.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }} display="flex">
              <CookieIcon color="primary" fontSize="medium" />
              <Typography variant="subtitle1" fontWeight={300}>
                Lenguajes permitidos incluyen: C/C++, Java, Python, JavaScript, entre otros.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }} display="flex">
              <CookieIcon color="primary" fontSize="medium" />
              <Typography variant="subtitle1" fontWeight={300}>
                En cada challenge, al estilo ICPC, se proponen 3 ejercicios de
                variadas complejidades.
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }} display="flex">
              <CookieIcon color="primary" fontSize="medium" />
              <Typography variant="subtitle1" fontWeight={300}>
                En el ranking de posiciones se ubica primero quien resuelva la
                mayor cantidades de desafíos; en caso de empates, entonces se
                ubica primero el que acumule menor penalidad (penalty).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
