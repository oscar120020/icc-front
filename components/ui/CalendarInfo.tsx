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
import { CalendarOptions, GoogleCalendar } from "datebook";
import ShareIcon from "@mui/icons-material/Share";
import { RankingResponse } from "../../interfaces/rankingsResponse";
import ICCLogo from "../../assets/icc/Asset 5@2x.png";
import { ordinal_suffix_of } from "../../helpers/ranking";

interface Props {
  selectedDate: CalendarData;
}

export interface CalendarData {
  title: string;
  startDate: Date;
  endDate: Date;
  type: string;
  rank: RankingResponse;
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

  const isMobile = useMemo(
    () =>
      /iPhone|iPad|iPod|Android|IEMobile|WPDesktop/i.test(navigator.userAgent),
    []
  );

  const handleClick = () => {
    router.push(`seasons/ranking/${selectedDate.rank.id}`);
  };

  useEffect(() => {
    const config: CalendarOptions = {
      title: selectedDate.title,
      location: "Santiago De Los Caballeros, República Dominicana",
      description: selectedDate.rank.url,
      start: new Date(selectedDate.startDate),
      end: new Date(selectedDate.endDate),
    };
    const googleCalendar = new GoogleCalendar(config);
    setGoogleCalendarUrl(googleCalendar.render());
  }, [selectedDate]);

  const openGoogleEvent = () => {
    window.open(
      !isEventNow ? googleCalendarUrl : selectedDate.rank.url,
      "_black"
    );
  };

  const handleShare = async () => {
    const { rank } = selectedDate;

    const shareData = {
      url: `${router.basePath}?id=${rank.id}`,
    };
    navigator.share(shareData);
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
        <Typography variant="h6">
          {getFullDate(selectedDate.startDate)}
        </Typography>
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
            disabled={!selectedDate.rank.scores.length || isHigher}
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
      {isMobile && (
        <Button
          fullWidth
          sx={{ bgcolor: "#0ba7ce", color: "white", margin: "5px 0 15px 0" }}
          size="large"
          color="primary"
          onClick={handleShare}
        >
          Compartir&nbsp;
          <ShareIcon fontSize="small" />
        </Button>
      )}
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
