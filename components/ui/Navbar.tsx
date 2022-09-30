import React from "react";
import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { LogoImage } from "../SVG/Logo";
import { useRouter } from "next/router";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link>
            <LogoImage width={70} />
          </Link>
        </NextLink>

        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: "flex" }} className="fadeIn">
          <NextLink href={"/seasons"} passHref>
            <Link display="flex" alignItems="center">
              <Button
                className={pathname === "/seasons" ? "btn-active" : "btn"}
                sx={{ marginX: 2 }}
              >
                Temporadas
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/contestants"} passHref>
            <Link display="flex" alignItems="center">
              <Button
                className={pathname === "/contestants" ? "btn-active" : "btn"}
                sx={{ marginX: 2 }}
              >
                Participantes
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/calendar"} passHref>
            <Link display="flex" alignItems="center">
              <Button
                className={pathname === "/calendar" ? "btn-active" : "btn"}
                sx={{ marginX: 2 }}
              >
                Calendario
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box sx={{ flex: 1 }} />

        <NextLink href={"/admin"} passHref>
          <Link>
            <Button
              className={pathname === "/admin" ? "btn-active-admin" : "btn"}
              startIcon={
              <AdminPanelSettingsIcon
                color={pathname === "/admin" ? 'inherit' : 'primary'}
                fontSize='large'
                sx={{fontSize: 30}} 
              />
              }
            >
              Admin
            </Button>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
