import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getContestants } from "../api";
import { DefaultLayout } from "../components/layouts";
import { ContestantCard } from "../components/cards/ContestantCard";
import { ErrorPage, Loading } from "../components/ui";
import { EmptySection } from "../components/ui/EmptySection";
import {CardRole,SocialMedia,CardDescription} from '../components/cards/cardContent/index'

const Contestants = () => {
  const { data, error, isLoading } = useQuery(["contestants"], getContestants, {
    retry: 1,
  });

  if (error) {
    return (
      <DefaultLayout
        title={"Participantes | ICC"}
        pageDescription={"Todos los participantes"}
      >
        <ErrorPage />
      </DefaultLayout>
    );
  }

  if (isLoading) {
    return (
      <DefaultLayout
        title={"Participantes | ICC"}
        pageDescription={"Todos los participantes"}
      >
        <Loading />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout
      title={"Participantes | ICC"}
      pageDescription={"Todos los participantes"}
    >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0 30px",
        }}
      >
        <Typography fontWeight="bold" variant="h2" color="primary">
          Participantes
        </Typography>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!!data?.length ? (
            data?.map((comp) => (
              <ContestantCard imageUrl={comp.imageUrl} key={comp.id}>
                <CardRole description={"Competidor(a)"} userName={comp.userName} fullName={comp.fullName}/>
                <SocialMedia socialLink={comp.socialLink}/>
                <CardDescription competitor={comp}/>
              </ContestantCard>
            ))
          ) : (
            <EmptySection message="Todavía no hay participantes." />
          )}
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Contestants;
