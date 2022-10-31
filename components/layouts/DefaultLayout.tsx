import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar, SideMenu } from "../ui";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
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
        <main
          style={{ marginTop: '70px' }}
        >
          {children}
        </main>
        <Box sx={{ flex: 1 }} />
        <footer>
          <Box className="curved" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 1440, height: '200px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '25px' }}>Contacto</Typography>
                <Typography sx={{ color: 'white', fontSize: '19px' }}>icc@intellisys.com.do</Typography>
                <Typography sx={{ fontSize: '19px', fontWeight: 'bold' }}>Calle H, No 2, Cerros de Gurabo, Santiago, Republica Dominicana</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '34%' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '23px' }}>Redes Sociales</Typography>
                <Box sx={{ display: 'flex', width: '55%', justifyContent: 'center' }}>
                  <a href="https://www.instagram.com/intellisysdcorp" className="url"><InstagramIcon sx={{ fontSize: '35px' }} /></a>
                  <a href="https://twitter.com/intellisys" className="url"><TwitterIcon sx={{ fontSize: '35px' }} /></a>
                  <a href="https://www.facebook.com/intellisys" className="url"><FacebookIcon sx={{ fontSize: '35px' }} /></a>
                </Box>
              </Box>
            </Box>
          </Box>
        </footer>
      </Box>
    </>
  );
};
