import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar, SideMenu } from "../ui";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { WhiteLogoImage } from "../SVG/WhiteLogo";
interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: JSX.Element | JSX.Element[];
}

export const DefaultLayout = ({
  title,
  children,
  pageDescription,
  imageFullUrl,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main style={{ marginTop: "70px" }}>{children}</main>
        <Box sx={{ flex: 1 }} />
        <footer id="footer">
          <Box
            className="curved"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                maxWidth: 1440,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "50%", sm: "40%" },
                  padding: 2
                }}
              >
                <WhiteLogoImage
                  width={100}
                />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", padding: 3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {xs: "center", sm: "flex-start"},
                  }}
                >
                  <a
                    href="https://www.instagram.com/intellisysdcorp"
                    target='blank'
                    className="url"
                  >
                    <InstagramIcon sx={{ fontSize: "35px", color: "#fff" }} />
                  </a>
                  <a href="https://twitter.com/intellisys" target='blank' className="url">
                    <TwitterIcon sx={{ fontSize: "35px", color: "#fff" }} />
                  </a>
                  <a href="https://www.facebook.com/intellisys" target='blank' className="url">
                    <FacebookIcon sx={{ fontSize: "35px", color: "#fff" }} />
                  </a>
                </Box>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: "white", fontSize: "30px", textAlign: {xs: 'center', sm: 'left'} }}
                >
                  Contacto
                </Typography>
                <Typography sx={{ color: "white", fontSize: "19px", textAlign: {xs: 'center', sm: 'left'} }}>
                  icc@intellisys.com.do
                </Typography>
                <Typography sx={{ fontSize: "19px", color: "white", fontWeight: "bold", textAlign: {xs: 'center', sm: 'left'} }}>
                  Calle H, No 2, Cerros de Gurabo, Santiago, Republica
                  Dominicana
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ width: "70%", mt: 2 }} />
            <Typography sx={{ pb: 2, color: "white" }}>2022, Intellisys D. corp</Typography>
          </Box>
        </footer>
      </Box>
    </>
  );
};
