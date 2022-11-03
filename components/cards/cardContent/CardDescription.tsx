import { Box  } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";
import { StatsItem } from "../StatsItem";
import { ContestantResponse } from "../../../interfaces/contestansResponse";
import HowToRegIcon from '@mui/icons-material/HowToReg';

interface Props {
  competitor: ContestantResponse;
}

export default function CardDescription({ competitor }: Props) {
  return (
    <>
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          width: "100%",
          mt: 2,
          mb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <StatsItem
          label={`${competitor?.contests}`}
          icon={<HowToRegIcon color="primary" />}
          iconMeaning="Participaciones totales"
        />
        <Box sx={{ width: "1px", height: "20px", backgroundColor: "gray" }} />
        <StatsItem
          label={`${competitor?.fullScore}`}
          icon={<StarsIcon color="primary" />}
          iconMeaning="Puntos totales"
        />
        <Box sx={{ width: "1px", height: "20px", backgroundColor: "gray" }} />
        <StatsItem
          label={`${competitor?.fullPenalty}`}
          icon={<CancelIcon color="primary" />}
          iconMeaning="Penalidad total"
        />
      </Box>
    </>
  );
}
