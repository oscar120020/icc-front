import { Box, Typography } from "@mui/material";
import NumbersIcon from "@mui/icons-material/Numbers";
import StarsIcon from "@mui/icons-material/Stars";
import CancelIcon from "@mui/icons-material/Cancel";

export const InfoRanking = () => {
  return (
    <Box sx={{ padding: 3, position: "relative" }}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        sx={{ mb: 2, fontSize: 20 }}
      >
        Criterio de posicionamiento
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <StarsIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="body1">
          Cantidad total de problemas resueltos (mientras mayor sea, mejor).
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <CancelIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="body1">
          Sumatoria total de penalidad acumulada en cada competencia (mientras
          menor sea, mejor).
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <NumbersIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="body1">
          Suma de todas las posiciones en la que quedó el concursante (mientras
          menor sea, mejor).
        </Typography>
      </Box>
    </Box>
  );
};
