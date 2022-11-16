import { Box, Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

interface Props {
    label: string;
    icon: JSX.Element;
    iconMeaning: string;
}

export const StatsItem = ({label, icon, iconMeaning}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Tooltip title={iconMeaning} >
        {icon}
      </Tooltip>
      <Typography variant="h6" component="label">{label}</Typography>
    </Box>
  );
};
