import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  getTime,
  IsDateBetweenEvent,
  IsDateHigherThanNow,
} from "../../helpers/dateHelpers";
import { getFullDate } from "../../helpers/getDateFormat";
import { EventResponse } from "../../interfaces/eventResponse";
import { CalendarOptions, GoogleCalendar } from "datebook";
import { useQuery } from "react-query";
import { getRankingById } from "../../api";

interface Props {
  selectedDate: CalendarData;
}

export interface CalendarData {
  title: string;
  startDate: Date;
  endDate: Date;
  type: string;
  rankUrl: string;
  rankId: string;
  rankAvialable: boolean;
}


export const CalendarInfo = ({ selectedDate }: Props) => {
  const [googleCalendarUrl, setGoogleCalendarUrl] = useState("");
  const router = useRouter();
  const isHigher = useMemo(
    () => IsDateHigherThanNow(selectedDate.startDate),
    [selectedDate.startDate]
  );

  const isEventNow = useMemo(
    () => IsDateBetweenEvent(selectedDate.startDate, selectedDate.endDate),
    [selectedDate.startDate, selectedDate.endDate]
  );

  const startHour = useMemo(
    () => getTime(selectedDate.startDate),
    [selectedDate.startDate]
  );

  const endHour = useMemo(
    () => getTime(selectedDate.endDate),
    [selectedDate.endDate]
  );

  const handleClick = () => {
    router.push(`seasons/ranking/${selectedDate.rankId}`);
  };

  useEffect(() => {
    const config: CalendarOptions = {
      title: selectedDate.title,
      location: "Santiago De Los Caballeros, República Dominicana",
      description: selectedDate.rankUrl,
      start: new Date(selectedDate.startDate),
      end: new Date(selectedDate.endDate),
    };
    const googleCalendar = new GoogleCalendar(config);
    setGoogleCalendarUrl(googleCalendar.render());
  }, [selectedDate]);

  const openGoogleEvent = () => {
    window.open(
      !isEventNow ? googleCalendarUrl : selectedDate.rankUrl
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
          {selectedDate.title}
        </Typography>
        <Typography variant="h6">{getFullDate(selectedDate.startDate)}</Typography>
        <Typography color="GrayText" variant="body1">
          {startHour} - {endHour}
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
        {!isHigher && !isEventNow ? (
          <Button
            fullWidth
            sx={{ bgcolor: "#0ba7ce", color: "white", margin: "15px 0" }}
            size="large"
            color="primary"
            disabled={!selectedDate.rankAvialable || isHigher}
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
            // disabled={!data && isEventNow}
          >
            {isEventNow ? "Ver en directo" : "Agendar en mi calendar"}
          </Button>
        )}
      </Box>
      <Box sx={{ margin: { xs: "30px auto", sm: "0 30px", lg: "30px 0" } }}>
        <Image
          src="/Asset 5@2x.png"
          alt="event image"
          width={250}
          height={250}
        />
      </Box>
    </Box>
  );
};
