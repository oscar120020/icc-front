import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getSeasons } from "../../api/rankingApi";
import { DefaultLayout } from "../../components/layouts";
import { Loading } from "../../components/ui";
import { ErrorPage } from "../../components/ui";


const Seasons = () => {
  const { data, error, isLoading } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });

  if (error) {
    return (
      <DefaultLayout
        title={"Seasons | ICC"}
        pageDescription={"Seasons details"}
      >
        <ErrorPage />
      </DefaultLayout>
    );
  }

  if (isLoading) {
    return (
      <DefaultLayout
        title={"Seasons | ICC"}
        pageDescription={"Seasons details"}
      >
        <Loading />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
          overflow: 'hidden'
        }}
        className="fadeIn"
      >
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </DefaultLayout>
  );
};

export default Seasons;
