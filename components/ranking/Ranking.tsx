import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { RankingProps } from "../../interfaces/ranking";
import { useStyles } from "./styles";
const RankingSecondaryCard = dynamic(
  () => import("../cards/RankingSecondaryCard"),
  { ssr: false }
);
const RankingCard = dynamic(() => import("../cards/RankingCard"), {
  ssr: false,
});

export default function Ranking({ globalRanking }: RankingProps) {
  const classes = useStyles();
  return (
    <>
      <Grid container sx={{ width: "100", display: "flex", justifyContent: 'center' }}>
        {globalRanking.map((ranking, index) => {
          {
            if (index < 3) {
              return <RankingCard key={ranking.competitor.userName} ranking={ranking} index={index + 1}/>;
            }
          }
        })}
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}>
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box className={classes.containerParams}>
            <Typography variant="body1" color="GrayText" >Puntos</Typography>
            <Box sx={{ width: "1px", height: "20px", backgroundColor: "#00000033", margin: '0 1.5vw' }} />
            <Typography variant="body1" color="GrayText" >Penalidad</Typography>
          </Box>
        </Container>
        <Divider sx={{marginBottom: -2}}/>
        {globalRanking.map((ranking, index) => {
          {
            if (index > 2) {
              return (
                <RankingSecondaryCard
                  ranking={ranking}
                  index={index + 1}
                  key={index}
                />
              );
            }
          }
        })}
      </Box>
    </>
  );
}
