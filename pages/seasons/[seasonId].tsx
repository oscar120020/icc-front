import { useRef, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { getGlobalRaking, getSeasonById } from "../../api";
import { DefaultLayout } from "../../components/layouts";
import { EmptySection } from "../../components/ui/EmptySection";
import { SeasonContent } from "../../components/season/SeasonContent";
import { getDateFormat } from "../../helpers/getDateFormat";
import { SeasonProps } from "../../interfaces/seasonResponse";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { InfoRanking } from "../../components/ui/InfoRanking";
import CloseIcon from "@mui/icons-material/Close";

const SeasonId = ({ individualRanking, globalRanking }: SeasonProps) => {
  const firstmoth = useRef(getDateFormat(individualRanking.beginning));
  const secondMoth = useRef(getDateFormat(individualRanking.end));
  const [infoClass, setInfoClass] = useState("");
  const [infoContent, setInfoContent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const inter = setInterval(() => {
      setInfoClass("info-ball");
      setTimeout(() => {
        setInfoClass("");
      }, 5000);
    }, 10000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  const handleOpen = () => {
    setInfoContent(true);
  };

  const handleClose = () => {
    setInfoContent(false);
  };

  return (
    <DefaultLayout
      title={`${individualRanking.name} | Intellisys Coding Challenge`}
      pageDescription={"Información de la temporada"}
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
            sx={{ textDecoration: "underline", cursor: "pointer", ml: 2 }}
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
      <Box
        sx={{
          position: "fixed",
          width: 80,
          height: 80,
          bgcolor: "#0ba7cec2",
          border: "1px solid white",
          borderRadius: 100,
          right: 20,
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
          transition: "all .3s",
          cursor: infoContent ? "" : "pointer"
        }}
        className={infoContent ? "info-content" : infoClass}
        onClick={handleOpen}
      >
        {infoContent ? (
          <InfoRanking />
        ) : (
          <PriorityHighIcon color="info" sx={{ fontSize: 50 }} />
        )}
      </Box>
      <Box
        sx={{
          display: infoContent ? "flex" : "none",
          position: "fixed",
          right: 25,
          bottom: 400 - 15,
          cursor: "pointer",
          zIndex: 1999,
        }}
        onClick={() => setInfoContent(false)}
      >
        <CloseIcon color="primary" fontSize="medium" />
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
