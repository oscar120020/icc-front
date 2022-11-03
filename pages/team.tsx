import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { DefaultLayout } from "../components/layouts";
import { ErrorPage, Loading } from "../components/ui";
import { EmptySection } from "../components/ui/EmptySection";
import { getOrganizer } from "../api";
import { ContestantCard } from "../components/cards/ContestantCard";
import CardRole from "../components/cards/cardContent/CardRole";
import SocialMedia from "../components/cards/cardContent/SocialMedia";



const Team = () => {
  const { data, error, isLoading } = useQuery(["organizer"], getOrganizer, {
    retry: 1,
  });
  console.log(data)
 

  if (error) {
    return (
      <DefaultLayout
        title={"Organizadores | ICC"}
        pageDescription={"Todos los organizadores"}
      >
        <ErrorPage />
      </DefaultLayout>
    );
  }

  if (isLoading) {
    return (
      <DefaultLayout
        title={"Organizadores | ICC"}
        pageDescription={"Todos los Organizadores"}
      >
        <Loading />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout
      title={"Organizadores | ICC"}
      pageDescription={"Todos los Organizadores"}
    >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0 30px",
        }}
      >
        <Typography fontWeight="bold" variant="h2" color="primary">
          Organizadores
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
              <ContestantCard imageUrl={comp.imageUrl} key={comp.id} color={'#D3DC14'}>
                <CardRole description={comp.role} userName={comp.fullName} fullName={comp.fullName} />
                <SocialMedia socialLink={comp.socialLink} />
              </ContestantCard>
            ))
          ) : (
            <EmptySection message="Todavía no hay Organizadores." />
          )}
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Team;