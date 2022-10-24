import type { NextPage } from "next";
import { Box } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { HeaderSection, InstructionsSection, HowWorksSection } from "../components/landing";

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
        <HowWorksSection/>
      </Box>

      {/* Como funciona */}
      <Box sx={{ mt: 15, mb: 15, padding: '80px 30px', backgroundColor: "#cddce26a" }}>
        <InstructionsSection/>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
