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
import { useStyles } from "./style";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";
import { RakingGlobal } from "../../interfaces/seasonResponse";
import { StatsItem } from "./StatsItem";
import NumbersIcon from '@mui/icons-material/Numbers';

interface Props {
  ranking: RakingGlobal;
  index: number;
  isGlobal?: boolean;
}

export default function RankingCard({ ranking, index, isGlobal }: Props) {
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
                sx={{ maxWidth: 81, borderRadius: "50%", marginBottom: 1 }}
                src={ranking.competitor.imageUrl}
                alt="Profile"
              />
              <Typography sx={{ fontSize: 18.5 }}>
                {ranking.competitor.fullName || ranking.competitor.userName}
              </Typography>
            </Box>
            <Container className={classes.downContainer}>
              <StatsItem
                label={`${ranking.score}`}
                icon={<StarsIcon color="primary" />}
                iconMeaning="Problemas resueltos"
              />
              <Box
                sx={{
                  width: "1px",
                  height: "20px",
                  backgroundColor: "#00000033",
                }}
              />
              <StatsItem
                label={`${ranking.penalty}`}
                icon={<CancelIcon color="primary" />}
                iconMeaning="Penalidad"
              />
              {isGlobal && (
                <>
                  <Box
                    sx={{
                      width: "1px",
                      height: "20px",
                      backgroundColor: "#00000033",
                    }}
                  />
                  <StatsItem
                    label={`${ranking.rank}`}
                    icon={<NumbersIcon color="primary" />}
                    iconMeaning="Sumatoria de rankings"
                  />
                </>
              )}
            </Container>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
