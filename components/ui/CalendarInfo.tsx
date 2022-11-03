import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  IsDateBetweenEvent,
  IsDateHigherThanNow,
} from "../../helpers/dateHelpers";
import { getFullDate } from "../../helpers/getDateFormat";
import { EventResponse } from "../../interfaces/eventResponse";
import { CalendarOptions, GoogleCalendar } from "datebook";
import { useQuery } from "react-query";
import { getRankingById } from "../../api";

interface Props {
  selectedDate: EventResponse;
}

const getRankng = async(id: string) => {
  if(!id) throw "No hay ranking relacionado"
  try {
    const data = await getRankingById(id);
    return data
  } catch (error) {
    
  }
}

export const CalendarInfo = ({ selectedDate }: Props) => {
  const { data } = useQuery(
    ["ranking", selectedDate.rankingId],
    () => getRankng(selectedDate.rankingId || ''),
    {
      retry: 1,
    }
  );
  const [googleCalendarUrl, setGoogleCalendarUrl] = useState("");
  const router = useRouter();
  const isHigher = useMemo(
    () => IsDateHigherThanNow(selectedDate.date),
    [selectedDate.date]
  );

  const isEventNow = useMemo(
    () => IsDateBetweenEvent(selectedDate.date),
    [selectedDate.date]
  );

  const handleClick = () => {
    router.push(`seasons/ranking/${selectedDate.rankingId}`);
  };

  useEffect(() => {
    const config: CalendarOptions = {
      title: selectedDate.name,
      location: "Santiago De Los Caballeros, República Dominicana",
      description: selectedDate.name,
      start: new Date(`${selectedDate.date} 15:00:00`),
      end: new Date(`${selectedDate.date} 16:30:00`),
    };
    const googleCalendar = new GoogleCalendar(config);
    setGoogleCalendarUrl(googleCalendar.render());
  }, [selectedDate]);

  const openGoogleEvent = () => {
    window.open(
      !data && !isEventNow ? googleCalendarUrl : data?.url
      , "_black");
  };

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
        <Typography variant="h2" color="primary">
          {selectedDate.name}
        </Typography>
        <Typography variant="h6">{getFullDate(selectedDate.date)}</Typography>
        <Typography color="GrayText" variant="body1">
          3:00PM - 4:30PM
        </Typography>
        {!isEventNow && (
          <Typography
            variant="h6"
            color={isHigher ? "green" : "red"}
            sx={{ mt: 1 }}
          >
            {isHigher ? "Próximamente" : "Finalizado"}
          </Typography>
        )}
        {!isHigher ? (
          <Button
            fullWidth
            sx={{ bgcolor: "#0ba7ce", color: "white", margin: "15px 0" }}
            size="large"
            color="primary"
            disabled={!selectedDate.rankingId || isHigher}
            onClick={handleClick}
          >
            Ver resultados
          </Button>
        ) : (
          <Button
            fullWidth
            sx={{ bgcolor: "#0ba7ce", color: "white", margin: "5px 0 15px 0" }}
            size="large"
            color="primary"
            onClick={openGoogleEvent}
            disabled={!data && isEventNow}
          >
            {isEventNow ? "Ver en directo" : "Agendar en mi calendar"}
          </Button>
        )}
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
