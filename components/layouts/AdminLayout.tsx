import Head from "next/head";
import { Box } from "@mui/material";
import React from "react";
import { Navbar, SideMenu } from "../ui";
import { SidebarAdmin } from "../ui/sidebar-admin/SidebarAdmin";

const drawerWidth = "300px";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: JSX.Element | JSX.Element[];
}

export const AdminLayout = ({
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
        <Navbar noDinamicElevation />
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
        <main style={{ marginTop: "70px" }}>
          <SidebarAdmin />
          <Box
            sx={{
              width: `calc(100% - ${drawerWidth})`,
              marginLeft: drawerWidth,
              padding: 5,
            }}
          >
            {children}
          </Box>
        </main>
      </Box>
    </>
  );
};
