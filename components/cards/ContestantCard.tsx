import Image from "next/image";
import { Grid, Box, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";
import { ContestantResponse } from "../../interfaces/contestansResponse";
import { StatsItem } from "./StatsItem";
import LinkedInLogo from '../../assets/LinkedIn.svg'
import HowToRegIcon from '@mui/icons-material/HowToReg';

interface Props {
  competitor: ContestantResponse;
}

export const ContestantCard = ({ competitor }: Props) => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      lg={2.5}
      sx={{
        width: "15vw",
        maxWidth: "280px",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "280px",
          height: "100%",
          borderRadius: "5px",
          boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* background */}
        <Box
          sx={{
            bgcolor: "#0ba7ce",
            width: "100%",
            height: "110px",
            position: "absolute",
          }}
        />

        {/* Image */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "110px",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              position: "absolute",
              bottom: -23,
              border: "2px solid #fff",
              outline: "2px solid #0ba7ce",
              width: 85,
              height: 85,
            }}
          >
            <Image
              src={competitor?.imageUrl}
              alt="perfil"
              width={85}
              height={85}
            />
          </Box>
        </Box>

        {/* Names */}
        <Box sx={{ mt: 5 }}>
          <Typography textAlign="center" variant="subtitle1">
            {competitor.fullName || competitor?.userName}
          </Typography>
          <Typography textAlign="center" variant="body2" color="info">
            {competitor.fullName ? competitor?.userName : "Competidor(a)"}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "60%",
            margin: "10px auto",
            display: "flex",
            justifyContent: "center",
            padding: '5px',
            cursor: 'pointer',
            borderRadius: '25px',
            bgcolor: '#08cbfc78'
          }}
          className={!competitor.socialLink ? "disabled" : "competitor-card"}
        >
          <a style={{ textDecoration: "none", display: 'flex' }} href={competitor.socialLink} target="_blanck">
            <Image
              src={LinkedInLogo}
              alt="Linkedin logo"
              width={25}
              height={20}
            />
            <Typography color="InfoText" sx={{ml: 1}}>
              LinkedIn
            </Typography>
          </a>
        </Box>

        {/* stasts */}

        <Box
          sx={{
            width: "100%",
            mt: 2,
            mb: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <StatsItem
            label={`${competitor?.contests}`}
            icon={<HowToRegIcon color="primary" />}
            iconMeaning="Participaciones totales"
          />
          <Box sx={{ width: "1px", height: "20px", backgroundColor: "gray" }} />
          <StatsItem
            label={`${competitor?.fullScore}`}
            icon={<StarsIcon color="primary" />}
            iconMeaning="Puntos totales"
          />
          <Box sx={{ width: "1px", height: "20px", backgroundColor: "gray" }} />
          <StatsItem
            label={`${competitor?.fullPenalty}`}
            icon={<CancelIcon color="primary" />}
            iconMeaning="Penalidad total"
          />
        </Box>
      </Box>
    </Grid>
  );
};
