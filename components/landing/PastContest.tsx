import { Grid } from "@mui/material";
import React from "react";
import { orderScores, getNewerRanking } from "../../helpers/ranking";
import { RankingResponse } from "../../interfaces/rankingsResponse";
import RankingCard from "../cards/RankingCard";

interface Props {
  rankings: RankingResponse[];
}

export const PastContest = ({ rankings }: Props) => {
  return (
    <Grid
      container
      sx={{ width: "100", display: "flex", justifyContent: "center" }}
    >
      {orderScores(getNewerRanking(rankings).scores).map((ranking, index) => {
        if (index < 3) {
          return (
            <RankingCard
              key={ranking.competitor.userName}
              ranking={ranking}
              index={index + 1}
            />
          );
        }
      })}
    </Grid>
  );
};
