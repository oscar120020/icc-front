import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getContestants } from "../api";
import { DefaultLayout } from "../components/layouts";
import { ContestantCard } from "../components/cards/ContestantCard";

const Contestants = () => {
  const { data, error, isLoading } = useQuery(["contestants"], getContestants, {
    retry: 1,
  });

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
          {
            data?.map(comp => (
              <ContestantCard key={comp.id} competitor={comp} />
            ))
          }
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Contestants;
