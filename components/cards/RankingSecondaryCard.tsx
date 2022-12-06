import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";
import { RakingGlobal } from "../../interfaces/seasonResponse";
import NumbersIcon from "@mui/icons-material/Numbers";

interface Props {
  ranking: RakingGlobal;
  index: number;
  isGlobal?: boolean;
}

export default function RankingSecondaryCard({
  ranking,
  index = 4,
  isGlobal,
}: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.secondCardContainer}>
      <Container className={classes.secondaryContainer}>
        <Box className={classes.secondaryLeftContainer}>
          <Typography color="GrayText" sx={{ marginRight: 1 }}>
            {index}th
          </Typography>
          <CardMedia
            component="img"
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              marginRight: { xs: 1, sm: 3 },
              marginLeft: { xs: 1, sm: 3 },
            }}
            src={ranking.competitor.imageUrl}
            alt="Profile"
          />
          <Typography variant="h6" sx={{ fontSize: { xs: 14, sm: 18 } }}>
            {ranking.competitor.userName}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              marginRight: { xs: "0", sm: "2.5vw" },
              width: {xs: 80, sm: 50},
            }}
            className={classes.infoContent}
          >
            <StarsIcon color="primary" />
            <Typography variant="h6">{ranking.score}</Typography>
          </Box>
          <Box
            sx={{
              marginRight: { xs: "0", sm: "2.5vw" },
              width: {xs: 80, sm: 50},
            }}
            className={classes.infoContent}
          >
            <CancelIcon color="primary" />
            <Typography variant="h6">{ranking.penalty}</Typography>
          </Box>
          {isGlobal && (
            <Box
              sx={{
                marginRight: { xs: "0", sm: "2.5vw" },
                width: {xs: 80, sm: 50},
              }}
              className={classes.infoContent}
            >
              <NumbersIcon color="primary" />
              <Typography variant="h6">{ranking.rank}</Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Card>
  );
}
