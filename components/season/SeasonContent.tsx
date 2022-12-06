import { Typography, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { RakingGlobal, SeasonByIdResponse } from "../../interfaces/seasonResponse";

const Ranking = dynamic(() => import("../../components/ranking/Ranking"), {
  ssr: false,
});
const IndivualRankingCard = dynamic(
  () => import("../../components/cards/IndivualRankingCard"),
  {
    ssr: false,
  }
);

interface Props {
    globalRanking: RakingGlobal[];
    individualRanking: SeasonByIdResponse;
}

export const SeasonContent = ({globalRanking, individualRanking}: Props) => {
  return (
    <>
      {/* Global Rankign */}
      <Typography
        textAlign="center"
        variant="h2"
        sx={{ fontSize: "24px", mt: 5, mb: 3 }}
      >
        Ranking Global
      </Typography>
      <Ranking isGlobal globalRanking={globalRanking} />

      {/* Individual Ranking */}
      <Typography variant="h2" color="info" sx={{ mt: 8, mb: 3 }}>
        Rankings individuales
      </Typography>
      <Grid container>
        {individualRanking.rankings.map((ranking, index) => {
          if(ranking.scores.length > 0){
            return (
              <IndivualRankingCard
                key={ranking.id}
                individualRanking={ranking}
                index={index + 1}
              />
            )
          }
        })}
      </Grid>
    </>
  );
};
