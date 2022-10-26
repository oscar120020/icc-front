import { Drawer, Box, Typography } from "@mui/material";
import { SidebarLink } from "./SidebarLink";
import { SidebarSection } from "./SidebarSection";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

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
      <SidebarSection title="Seasons" iconSidebar={<ArchiveIcon />} to="/admin/seasons" />
      <SidebarSection title="Rankings" iconSidebar={<EmojiEventsOutlinedIcon />} to="/admin/rankings" />
      <SidebarSection title="Events" iconSidebar={<CalendarMonthOutlinedIcon />} to="/admin/events" />
      <SidebarSection title="Users" iconSidebar={<GroupOutlinedIcon />}>
        <SidebarLink label="Participantes" to="/admin/contestants" />
        <SidebarLink label="Administradores" to="/admin/admin-users" />
      </SidebarSection>
      <Box sx={{ marginTop: 5 }} />
    </Drawer>
  );
};
