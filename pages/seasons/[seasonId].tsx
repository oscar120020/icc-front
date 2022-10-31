import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { getGlobalRaking, getSeasonById } from "../../api";
import { DefaultLayout } from "../../components/layouts";
import { EmptySection } from "../../components/ui/EmptySection";
import { SeasonContent } from "../../components/season/SeasonContent";
import { EmptyImage } from "../../components/SVG/Empty";
import { getDateFormat } from "../../helpers/getDateFormat";
import { SeasonProps } from "../../interfaces/seasonResponse";
import { useRouter } from "next/router";

const SeasonId = ({ individualRanking, globalRanking }: SeasonProps) => {
  const firstmoth = useRef(getDateFormat(individualRanking.beginning));
  const secondMoth = useRef(getDateFormat(individualRanking.end));

  const router = useRouter();

  return (
    <DefaultLayout
      title={`${individualRanking.name} | ICC`}
      pageDescription={"Información de temporada"}
    >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
        className="fadeIn"
      >
        {/* Title */}
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="h2" color="primary" sx={{ fontSize: "34px" }}>
              {individualRanking.name}
            </Typography>
            <Typography color="GrayText" sx={{ whiteSpace: "nowrap" }}>
              {firstmoth.current} - {secondMoth.current}
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Typography
            variant="h6"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => router.back()}
          >
            Regresar
          </Typography>
        </Box>
        {!globalRanking.length ? (
          <EmptySection message="Esta temporada aún no tiene información." />
        ) : (
          <SeasonContent
            globalRanking={globalRanking}
            individualRanking={individualRanking}
          />
        )}
      </Box>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { seasonId } = params as { seasonId: string };
  try {
    const response = await getSeasonById(seasonId);
    const globalRanking = await getGlobalRaking(seasonId);
    return {
      props: {
        individualRanking: response,
        globalRanking,
      },
    };
  } catch (error) {
    return { redirect: { permanent: false, destination: "/seasons" } };
  }
};

export default SeasonId;
