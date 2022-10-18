import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Competitor } from "../../interfaces/ranking";
import { useStyles } from "./style";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  competitor: Competitor;
  index: number;
}

export default function RankingCard({ competitor, index }: Props) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      item
      xs={12}
      sm={5}
      lg={3}
      sx={{ width: { xs: "80vw", sm: "20vw" } }}
    >
      <Box className={classes.insigniaContainer}>
        <Image
          src={`/top${index}.png`}
          alt="Picture of the author"
          width={90}
          height={140}
        />
      </Box>
      <Card className={classes.cardContainer}>
        <CardContent sx={{ padding: "0" }}>
          <Box className={classes.contentContainer}>
            <Box className={classes.centerContainer}>
              <CardMedia
                component="img"
                height="70"
                sx={{ maxWidth: 81, borderRadius: "50%", marginBottom: 1 }}
                image="profile.png"
                alt="Paella dish"
              />
              <Typography sx={{ fontSize: 18.5 }}>
                {competitor.fullname || competitor.username}
              </Typography>
            </Box>
            <Container className={classes.downContainer}>
              <Box className={classes.infoContent}>
                <StarsIcon color="primary" />
                <Typography variant="h6">{competitor.score}</Typography>
              </Box>
              <Box
                className={classes.infoContent}
                sx={{ borderLeft: "1px solid #C6C6C6" }}
              >
                <CancelIcon color="primary" />
                <Typography variant="h6">{competitor.penalty}</Typography>
              </Box>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
