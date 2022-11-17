import { RankingResponse } from "../interfaces/rankingsResponse";
import { RakingGlobal } from "../interfaces/seasonResponse";

export const getNewerRanking = (ranking: RankingResponse[]) => {
  return ranking.sort(
    (a, b) => new Date(b.beginning).getTime() - new Date(a.beginning).getTime()
  )[0];
};

export const orderScores = (scores: RakingGlobal[]) => {
  return scores.sort(function (a, b) {
    return b.score - a.score || a.penalty - b.penalty || a.rank - b.rank;
  });
};
