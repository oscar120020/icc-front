import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { orderScores, getNewerRanking } from "../../helpers/ranking";
import { RankingResponse } from "../../interfaces/rankingsResponse";
import RankingCard from "../cards/RankingCard";

interface Props {
  rankings: RankingResponse[];
}

export const PastContest = ({ rankings }: Props) => {
  const lastRanking = useRef(getNewerRanking(rankings)).current;
  
  return (
    <>
      <Typography
        textAlign="center"
        fontWeight="bold"
        variant="h2"
        color="primary"
        sx={{ mb: 5 }}
      >
        Podio del &nbsp;
        <a
          href={lastRanking.url}
          target="blank"
          style={{ textDecoration: "underline", color: "#0ba7ce" }}
        >
          <Typography 
            textAlign="center"
            fontWeight="bold"
            variant="h2"
            color="primary"
            sx={{ mb: 5, display: 'inline' }}>challenge más reciente</Typography>
        </a>
      </Typography>
      <Grid
        container
        sx={{ width: "100", display: "flex", justifyContent: "center" }}
      >
        {orderScores(lastRanking.scores).map((ranking, index) => {
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
    </>
  );
};
