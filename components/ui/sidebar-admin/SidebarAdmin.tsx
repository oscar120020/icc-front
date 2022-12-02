import { Drawer, Box, Typography, IconButton, Tooltip, Divider } from "@mui/material";
import { SidebarLink } from "./SidebarLink";
import { SidebarSection } from "./SidebarSection";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const drawerWidth = "300px";

export const SidebarAdmin = () => {

  const router = useRouter();

  const logout = () => {
    router.push("/")
    Cookies.remove('token')
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": { width: drawerWidth, marginTop: '65px', padding: '15px' }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant='h3' color="GrayText"  >Panel de administración</Typography>
          <Tooltip title="Cerrar sesión" >
            <IconButton onClick={logout} >
              <LogoutIcon color="primary" />
            </IconButton>
          </Tooltip>
      </Box>
      <Divider/>
      <SidebarSection title="Tablero" iconSidebar={<DashboardIcon />} to="/admin" />
      <SidebarSection title="Temporadas" iconSidebar={<ArchiveIcon />} to="/admin/seasons" />
      <SidebarSection title="Competencias" iconSidebar={<EmojiEventsOutlinedIcon />} to="/admin/contests" />
      <SidebarSection title="Usuarios" iconSidebar={<GroupOutlinedIcon />}>
        <SidebarLink label="Participantes" to="/admin/contestants" />
        <SidebarLink label="Administradores" to="/admin/admin-users" />
        <SidebarLink label="Organizadores" to="/admin/organizers" />
      </SidebarSection>
      <Box sx={{ marginTop: 5 }} />
    </Drawer>
  );
};
