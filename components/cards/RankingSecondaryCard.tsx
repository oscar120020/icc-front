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

export default function RankingSecondaryCard({
  competitor,
  index = 4,
}: {
  competitor: Competitor;
  index: number;
}) {
  const classes = useStyles();
  return (
    <Card className={classes.secondCardContainer}>
      <Box sx={{ paddingY: "5px" }}>
        <Container className={classes.secondaryContainer}>
          <Box className={classes.secondaryLeftContainer}>
            <Typography>{index}th</Typography>
            <CardMedia
              component="img"
              height="42"
              sx={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                margin: "2px",
              }}
              image="profile.png"
              alt="Paella dish"
            />
            <Typography sx={{ fontSize: 18.5 }}>
              {competitor.username}
            </Typography>
          </Box>
          <Box className={classes.secondaryRightContainer}>
            <Box className={classes.infoContent}>
              <StarsIcon sx={{ marginTop: '3.5px' }} />
              <Typography variant="h6">{competitor.score}</Typography>
            </Box>
            <Box className={classes.infoContent}>
              <CancelIcon sx={{ marginTop: '3.5px' }} />
              <Typography variant="h6">{competitor.score}</Typography>

            </Box>
          </Box>
        </Container>
      </Box>
    </Card>
  );
}
