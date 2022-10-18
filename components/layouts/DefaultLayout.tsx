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
          style={{marginTop: '70px'}}
        >
          {children}
        </main>
        <Box sx={{ flex: 1 }} />
        <footer style={{ display: pathname === "/admin" ? "none" : "" }}>
          <Box className="curved"></Box>
        </footer>
      </Box>
    </>
  );
};
