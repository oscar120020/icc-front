import { Box, Grid } from "@mui/material";
import { InfoItem } from "./InfoItem";
import { LandingSection } from "./LandingSection";
import discordIcon from "../../assets/landing/discord-liner3.png";
import vjudgedIcon from "../../assets/landing/vjudge-liner2.png";
import intellisysIcon from "../../assets/landing/intellisys-linear2.png";

export const InstructionsSection = () => {
  return (
    <Box>
      <LandingSection
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
  );
};
