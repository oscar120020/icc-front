import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { getSeasons } from "../../api/rankingApi";
import { DefaultLayout } from "../../components/layouts";
import { Loading } from "../../components/ui";
import { ErrorPage } from "../../components/ui/ErrorPage";
const SeasonCard = dynamic(() => import('../../components/cards/SeasonCard'), { ssr: false });


const Seasons = () => {

  const { data, error, isLoading } = useQuery(['seasons'], getSeasons, {
    retry: 1
  });

  if (error) {
    return (
      <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
        <ErrorPage />
      </DefaultLayout>
    )
  }

  if (isLoading) {
    return (
      <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
        <Loading />
      </DefaultLayout>
    )
  }


  return (
    <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
      <Grid
        container
        sx={{
          width: '100%',
          padding: '50px 80px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >

        {data.map((season) => (
          <Box key={season.name} sx={{
            marginBottom: '40px', margin: "20px auto",
            maxWidth: 1440,
            padding: "0px 30px",
          }}>
            <SeasonCard season={season} />
          </Box>
        ))}
      </Grid>

    </DefaultLayout>
  )
}


export default Seasons;