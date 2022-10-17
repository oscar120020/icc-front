import type { NextPage } from "next";
import { Box } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { HeaderSection } from "../components/landing/HeaderSection";
import { InstructionsSection } from "../components/landing/InstructionsSection";
import { HowWorksSection } from "../components/landing/HowWorksSection";

const Home: NextPage = () => {
  return (
    <DefaultLayout
      title="Intellisys Coding Challenge"
      pageDescription="Intellisys Coding Challenge"
    >
      {/* Header */}
      <Box
        sx={{ height: "100vh", width: "100%", marginTop: '-70px' }}
        className="fadeIn bg-landing"
      >
        <HeaderSection/>
      </Box>

      {/* Instrucciones */}
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
      >
        <InstructionsSection/>
      </Box>

      {/* Como funciona */}
      <Box sx={{ mt: 15, mb: 15, backgroundColor: "#cddce26a" }}>
        <HowWorksSection/>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
