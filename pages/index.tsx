import { useEffect } from "react";
import type { NextPage } from "next";
import { Box, CircularProgress } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import {
  HeaderSection,
  InstructionsSection,
  HowWorksSection,
} from "../components/landing";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { getAllRanking } from "../api";
import { PastContest } from "../components/landing/PastContest";

const Home: NextPage = () => {
  const router = useRouter();
  const { data } = useQuery(
    ["rankings"],
    getAllRanking,
    {
      retry: 1,
    }
  );

  useEffect(() => {
    if (!!router.query["invalid-token"]) {
      Cookies.remove("token");
    }
  }, [router.query]);

  return (
    <DefaultLayout
      title="Intellisys Coding Challenge"
      pageDescription="Intellisys Coding Challenge"
    >
      {/* Header */}
      <Box
        sx={{ minHeight: "100vh", width: "100%", marginTop: "-70px" }}
        className="fadeIn bg-landing"
      >
        <HeaderSection />
      </Box>

      {/* Instrucciones */}
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
      >
        <HowWorksSection />
      </Box>

      {/* Como funciona */}
      <Box
        sx={{
          mt: 15,
          padding: "80px 30px",
          backgroundColor: "#cddce26a",
        }}
      >
        <InstructionsSection />
      </Box>

      {/* Podio actual */}
      <Box
        sx={{
          margin: "50px auto 150px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
      >
        {!!data?.length ? (
          <PastContest rankings={data!} />
        ) : (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 10 }}>
            <CircularProgress size={80} />
          </Box>
        )}
      </Box>
    </DefaultLayout>
  );
};

export default Home;
