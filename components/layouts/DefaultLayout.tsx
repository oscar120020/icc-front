import { Box } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar, SideMenu } from "../ui";

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
  const { pathname } = useRouter();

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

      <SideMenu/>

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main
          style={{
            margin: "70px auto",
            maxWidth: 1440,
            padding: "0px 30px",
          }}
        >
          {children}
        </main>
        <Box sx={{ flex: 1 }} />
        <footer style={{display: pathname === '/admin' ? 'none' : ''}} >
          <Box
            sx={{ backgroundColor: "#1985A1", width: "100%", height: 150 }}
          ></Box>
        </footer>
      </Box>
    </>
  );
};
