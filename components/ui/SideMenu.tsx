import {
  Box,
  Divider,
  Drawer,
  ImageListItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { useRouter } from "next/router";
import { UIContext } from "../../context";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BallotIcon from "@mui/icons-material/Ballot";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ContactsIcon from '@mui/icons-material/Contacts';
import GroupsIcon from '@mui/icons-material/Groups';
import { LogoImage } from "../SVG/Logo";

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, changeMenuState } = useContext(UIContext);

  const navigateTo = (url: string) => {
    router.push(url);
    changeMenuState();
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(2px)", transition: "all .5 ease-out" }}
      onClose={changeMenuState}
    >
      <Box sx={{ width: 250, paddingTop: 1 }}>
        <List>
          <ListItem sx={{paddingBotton: 3}}>
            <ImageListItem sx={{width: 90}} >
              <LogoImage />
            </ImageListItem>
          </ListItem>
          <Divider/>
          <ListItem button onClick={() => navigateTo("/seasons")}>
            <ListItemIcon>
              <BallotIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Temporadas"} />
          </ListItem>

          <ListItem button onClick={() => navigateTo("/contestants")}>
            <ListItemIcon>
              <AccessibilityNewIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Participantes"} />
          </ListItem>

          <ListItem button onClick={() => navigateTo("/calendar")}>
            <ListItemIcon>
              <CalendarMonthIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Calendario"} />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/team")}>
            <ListItemIcon>
              <GroupsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Organizadores"} />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/#footer")}>
            <ListItemIcon>
              <ContactsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Contacto"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
