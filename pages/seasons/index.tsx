import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { useQuery, UseQueryResult } from "react-query";
import { getSeasons } from "../../api";
import { DefaultLayout } from "../../components/layouts";
import { Loading } from "../../components/ui";
import { ErrorPage } from "../../components/ui/ErrorPage";
import { SeasonResponse } from "../../interfaces/seasonResponse";

const SeasonCard = dynamic(() => import("../../components/cards/SeasonCard"), {
  ssr: false,
});

const Seasons = () => {
  const { data, error, isLoading }: UseQueryResult<SeasonResponse[]> = useQuery(
    ["seasons"],
    getSeasons,
    {
      retry: 1,
    }
  );

  if (error) {
    return (
      <DefaultLayout
        title={"Temporadas | Intellisys Coding Challenge"}
        pageDescription={"Todas las temporadas del Intellisys Coding Challenge"}
      >
        <ErrorPage />
      </DefaultLayout>
    );
  }

  if (isLoading) {
    return (
      <DefaultLayout
        title={"Temporadas | Intellisys Coding Challenge"}
        pageDescription={"Todas las temporadas del Intellisys Coding Challenge"}
      >
        <Loading />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout
      title={"Temporadas | Intellisys Coding Challenge"}
      pageDescription={"Todas las temporadas del Intellisys Coding Challenge"}
    >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0 30px",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data!.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Seasons;
