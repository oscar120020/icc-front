import React, { useContext, useState } from "react";
import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { LogoImage } from "../SVG/Logo";
import { useRouter } from "next/router";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "../../context";
import { ElevationScroll } from "../maretial-ui/ElevationScroll";
import { CustomModal, LoginForm } from "../form";
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
      <AppBar className="transition" elevation={1} >
        <Toolbar sx={{display: 'flex', justifyContent: 'center', overflow: 'hidden'}}>
          <Box sx={{width: '100%', display: 'flex', ...(!pathname.includes('admin') && {maxWidth: 1440 - 60})}} >
            <NextLink href={"/"} passHref>
              <Link sx={{display: 'flex'}}>
                <LogoImage width={70} height={40} />
              </Link>
            </NextLink>

            <Box sx={{ flex: 1}} />

            <Box sx={{ display: { xs: "none", sm: "flex" } }} className="fadeIn">
              <NextLink href={"/"} passHref>
                <Link display="flex" alignItems="center">
                  <Button
                    className={pathname === "/" ? "btn-active" : "btn"}
                    sx={{ marginX: 2, fontSize: 16 }}
                  >
                    Inicio
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
              <NextLink href={"/team"} passHref>
                <Link display="flex" alignItems="center">
                  <Button
                    className={pathname === "/team" ? "btn-active" : "btn"}
                    sx={{ marginX: 2, fontSize: 16 }}
                  >
                    Equipo
                  </Button>
                </Link>
              </NextLink>
              <NextLink  href={"/#footer"}  passHref>
                <Link display="flex" alignItems="center">
                  <Button
                    className={"btn"}
                    sx={{ marginX: 2, fontSize: 16 }}
                  >
                    Contacto
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
          </Box>
        </Toolbar>
        <CustomModal open={open} handleClose={handleCloseModal} >
          <LoginForm handleClose={handleCloseModal} />
        </CustomModal>
      </AppBar>
    </ElevationScroll>
  );
};
