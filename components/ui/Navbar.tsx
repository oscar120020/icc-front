import React, { useContext, useState } from "react";
import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { LogoImage } from "../SVG/Logo";
import { useRouter } from "next/router";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "../../context";
import { ElevationScroll } from "../maretial-ui/ElevationScroll";
import { FormModal, LoginForm } from "../form";
import Cookie from 'js-cookie'

const currentWindow = () => {
  if (typeof window !== "undefined") {
    return window as Window;
  }
};

interface Props {
  noDinamicElevation?: boolean;
}

export const Navbar = ({ noDinamicElevation }: Props) => {
  const [open, setOpen] = useState(false);
  const { pathname, push: routerPush } = useRouter();
  const { changeMenuState } = useContext(UIContext);


  const handleCloseModal = () => {
    setOpen(false);
  };
  
  const openLoginModal = () => {
    const token = Cookie.get('token')
    if(!token){
      setOpen(true);
      return;
    }
    routerPush('/admin')
  }

  return (
    <ElevationScroll
      window={currentWindow}
      noDinamicElevation={noDinamicElevation}
    >
      <AppBar className="transition" elevation={1}>
        <Toolbar>
          <NextLink href={"/"} passHref>
            <Link>
              <LogoImage width={70} />
            </Link>
          </NextLink>

          <Box sx={{ flex: 1 }} />

          <Box sx={{ display: { xs: "none", sm: "flex" } }} className="fadeIn">
            <NextLink href={"/"} passHref>
              <Link display="flex" alignItems="center">
                <Button
                  className={pathname === "/" ? "btn-active" : "btn"}
                  sx={{ marginX: 2, fontSize: 16 }}
                >
                  Home
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/seasons"} passHref>
              <Link display="flex" alignItems="center">
                <Button
                  className={pathname === "/seasons" ? "btn-active" : "btn"}
                  sx={{ marginX: 2, fontSize: 16 }}
                >
                  Temporadas
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/contestants"} passHref>
              <Link display="flex" alignItems="center">
                <Button
                  className={pathname === "/contestants" ? "btn-active" : "btn"}
                  sx={{ marginX: 2, fontSize: 16 }}
                >
                  Participantes
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/calendar"} passHref>
              <Link display="flex" alignItems="center">
                <Button
                  className={pathname === "/calendar" ? "btn-active" : "btn"}
                  sx={{ marginX: 2, fontSize: 16 }}
                >
                  Calendario
                </Button>
              </Link>
            </NextLink>
          </Box>

          <Box sx={{ flex: 1 }} />

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              className={
                pathname.includes("/admin") ? "btn-active-admin" : "btn-admin"
              }
              sx={{ fontSize: 16 }}
              startIcon={
                <AdminPanelSettingsIcon
                  color={pathname.includes("/admin") ? "inherit" : "primary"}
                  fontSize="large"
                  sx={{ fontSize: 40 }}
                />
              }
              onClick={openLoginModal}
            >
              Admin
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={changeMenuState}
          >
            <MenuIcon fontSize="large" color="primary" />
          </Box>
        </Toolbar>
        <FormModal open={open} handleClose={handleCloseModal} >
          <LoginForm handleClose={handleCloseModal} />
        </FormModal>
      </AppBar>
    </ElevationScroll>
  );
};
