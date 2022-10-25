import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Competitor } from "../../interfaces/ranking";
import { useStyles } from "./style";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";
import { RakingGlobal } from "../../interfaces/seasonResponse";


interface Props {
  ranking: RakingGlobal;
  index: number;
}

export default function RankingSecondaryCard({
  ranking,
  index = 4,
}: Props
) {
  const classes = useStyles();
  return (
    <Card className={classes.secondCardContainer}>
      <Container className={classes.secondaryContainer}>
        <Box className={classes.secondaryLeftContainer}>
          <Typography color="GrayText" sx={{ marginRight: 1 }} >{index}th</Typography>
          <CardMedia
            component="img"
            height="42"
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              marginRight: 3,
              marginLeft: 3
            }}
            image="/profile.png"
            alt="Profile"
          />
          <Typography variant="h6">
            {ranking.competitor.userName}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box className={classes.secondaryRightContainer}>
          <Box sx={{ marginRight: '2vw' }} className={classes.infoContent}>
            <StarsIcon color="primary" />
            <Typography variant="h6">{ranking.score}</Typography>
          </Box>
          <Box sx={{ marginRight: '2vw' }} className={classes.infoContent}>
            <CancelIcon color="primary" />
            <Typography variant="h6">{ranking.score}</Typography>

          </Box>
        </Box>
      </Container>
    </Card>
  );
}
