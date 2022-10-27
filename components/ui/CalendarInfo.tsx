import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useRef } from "react";
import { IsDateHigherThanNow } from "../../helpers/dateHelpers";
import { getFullDate } from "../../helpers/getDateFormat";
import { EventResponse } from "../../interfaces/eventResponse";

interface Props {
  selectedDate: EventResponse;
}

export const CalendarInfo = ({ selectedDate }: Props) => {
  const router = useRouter();
  const isHigher = useMemo(() => IsDateHigherThanNow(selectedDate.date), [selectedDate.date])

  const handleClick = () => {
    router.push(`seasons/ranking/${selectedDate.rankingId}`)
  }

  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row", lg: "column" },
      }}
    >
      <Box>
        <Typography variant="h2" color="primary">{selectedDate.name}</Typography>
        <Typography variant="h6">{getFullDate(selectedDate.date)}</Typography>
        <Typography variant="h6" color={isHigher ? "green" : "red"}>
          {isHigher ? "Proximamente" : "Finalizado"}
        </Typography>
        <Button
          fullWidth
          sx={{ bgcolor: "#0ba7ce", color: "white", margin: '15px 0' }}
          size="large"
          color="primary"
          disabled={isHigher}
          onClick={handleClick}
        >
          Ver resultados
        </Button>
      </Box>
      <Box sx={{ margin: { xs: "30px auto", sm: "0 30px", lg: "30px 0" } }}>
        <Image
          src={selectedDate.imageUrl || "/Asset 5@2x.png"}
          alt="event image"
          width={250}
          height={250}
        />
      </Box>
    </Box>
  );
};
