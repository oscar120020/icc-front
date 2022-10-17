import { Drawer, Box, Typography } from "@mui/material";
import { SidebarLink } from "./SidebarLink";
import { SidebarSection } from "./SidebarSection";

import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const drawerWidth = "300px";

export const SidebarAdmin = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": { width: drawerWidth, marginTop: '65px', padding: '15px' }
      }}
    >
      <Typography variant='h3' color="GrayText" sx={{marginBottom: 2}} >Panel de administración</Typography>
      <SidebarSection title="Seasons" iconSidebar={<EmojiEventsOutlinedIcon />} to="/admin/seasons" />
      <SidebarSection title="Rankings" iconSidebar={<GroupOutlinedIcon />} to="/admin/rankings" />
      <SidebarSection title="Users" iconSidebar={<GroupOutlinedIcon />}>
        <SidebarLink label="Home" to="/" />
        <SidebarLink label="Home" to="/" />
        <SidebarLink label="Home" to="/" />
        <SidebarLink label="Home" to="/" />
        <SidebarLink label="Home" to="/" />
        <SidebarLink label="Home" to="/" />
      </SidebarSection>
      <Box sx={{ marginTop: 5 }} />
    </Drawer>
  );
};
