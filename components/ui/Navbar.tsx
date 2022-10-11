import React, { useContext } from "react";
import NextLink from "next/link";
import { AppBar, Box, Button, Link, Toolbar, useScrollTrigger } from "@mui/material";
import { LogoImage } from "../SVG/Logo";
import { useRouter } from "next/router";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from "../../context";

interface Props {
  window: () => Window | undefined;
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
    sx: {
      height: trigger ? 70 : 60
    }
  });
}

const currentWindow = () => {
  if(typeof window !== 'undefined'){
    return window as Window
  }
}

export const Navbar = () => {
  const { pathname } = useRouter();
  const { changeMenuState } = useContext(UIContext)

  return (
    <ElevationScroll window={currentWindow}>
      <AppBar className="transition" >
        <Toolbar>
          <NextLink href={"/"} passHref>
            <Link>
              <LogoImage width={70} />
            </Link>
          </NextLink>

          <Box sx={{ flex: 1 }} />

          <Box sx={{ display: {xs: 'none', sm: 'flex'} }} className="fadeIn">
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

          <Box sx={{ display: {xs: 'none', sm: 'flex'} }}>
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
          </Box>

          <Box sx={{ display: {xs: 'flex', sm: 'none'}, alignItems: 'center', cursor: "pointer" }} onClick={changeMenuState} >
            <MenuIcon fontSize="large" color="primary" />
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
