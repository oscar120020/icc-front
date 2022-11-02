import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { InfoItem } from "./InfoItem";
import { LandingSection } from "./LandingSection";
import discordIcon from "../../assets/landing/discord-liner3.png";
import vjudgedIcon from "../../assets/landing/vjudge-liner2.png";
import intellisysIcon from "../../assets/landing/intellisys-linear2.png";
import ArrowFirst from '../../assets/arrow-next.png';
import ArrowSecond from '../../assets/arrow-next2.png';


export const InstructionsSection = () => {
  return (
    <Box>
      <LandingSection
        title="Pasos para participar en la iniciativa"
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
            url: "https://discord.gg/TVAx7UpT7m",
          }}
        />
        <Box sx={{display: {xs: 'none', sm: 'flex'}, alignItems: 'center'}}>
          <Image
            src={ArrowFirst}
            alt="asda"
          />
        </Box>
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
        <Box sx={{display: {xs: 'none', sm: 'none', lg: 'flex'}, alignItems: 'center'}}>
          <Image
            src={ArrowSecond}
            alt="asda"
          />
        </Box>
        <InfoItem
          image={intellisysIcon}
          title="Unirse al grupo 'Intellisys'"
          description="Para poder entrar a los diferentes concursos es necesario unirse al grupo
              privado de Intellisys, donde se listan todos los integrantes y competencias."
          link={{
            label: "Unirse",
            url: "https://vjudge.net/group/intellisys?r=05od4RPUN5c99GzI27mY",
          }}
        />
        <Box sx={{display: {xs: 'none', sm: 'block', lg: 'none'}}}>
          <Box sx={{transform: 'rotate(130deg)', marginTop: 10}}>
            <Image
              src={ArrowFirst}
              alt="asda"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
