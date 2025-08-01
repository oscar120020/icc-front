import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Resources,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Box, Paper, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllRanking } from "../api";
import {
  IsDateBetweenEvent,
  IsDateHigherThanNow,
} from "../helpers/dateHelpers";
import { CalendarData, CalendarInfo } from "../components/ui/CalendarInfo";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { RankingResponse } from "../interfaces/rankingsResponse";
import { useRouter } from "next/router";

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "#f44336" },
      { id: "work", text: "Work", color: "#0ba7ce" },
      { id: "now", text: "now", color: "#2ab109" },
    ],
  },
];

interface EventClick {
  target: EventTarget;
  data: CalendarData;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<CalendarData>();
  const router = useRouter();
  const { data, error, isLoading } = useQuery(["rankings"], getAllRanking, {
    retry: 1,
  });

  useEffect(() => {
    if (!!router.query.id) {
      const queryEvent = data?.find((rank) => rank.id === router.query.id);
      if (!!queryEvent) {
        setSelectedDate({
          title: queryEvent.name,
          startDate: new Date(queryEvent.beginning),
          endDate: new Date(queryEvent.end),
          type: eventType(queryEvent),
          rank: queryEvent,
        });
      }
    }
  }, [router, data]);

  const handleEventClick = ({ data }: EventClick) => {
    setSelectedDate(data);
    window.scrollTo(0, 0);
  };

  const eventType = (event: RankingResponse) => {
    if (IsDateBetweenEvent(event.beginning, event.end)) {
      return "now";
    }
    if (IsDateHigherThanNow(event.beginning)) {
      return "work";
    }
    return "private";
  };

  return (
    <DefaultLayout
      title={"Calendario | Intellisys Coding Challenge"}
      pageDescription={
        !!selectedDate
          ? `${selectedDate.title}, desde ${new Date(
              selectedDate.startDate
            ).toLocaleString()} hasta ${new Date(
              selectedDate.endDate
            ).toLocaleString()}`
          : "Calendario de eventos"
      }
      imageFullUrl={`${process.env.NEXT_PUBLIC_HOST_NAME}/Asset 5@2x.png`}
    >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0 30px",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", lg: "20%" },
          }}
        >
          {!!selectedDate ? (
            <CalendarInfo selectedDate={selectedDate} />
          ) : (
            <Box
              sx={{
                height: "100%",
                padding: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CalendarMonthOutlinedIcon
                color="primary"
                sx={{ fontSize: 60 }}
              />
              <Typography textAlign="center" variant="h6">
                Seleccione un evento en el calendario
              </Typography>
            </Box>
          )}
        </Paper>
        <Paper sx={{ flex: 1 }}>
          <Scheduler
            locale="es-ES"
            data={data?.map((event, i) => ({
              title: event.name,
              startDate: event.beginning,
              endDate: event.end,
              type: eventType(event),
              rank: event,
            }))}
          >
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
            />
            <Toolbar />
            <MonthView />
            <Appointments
              appointmentComponent={({ ...restProps }) => (
                <Appointments.Appointment
                  {...restProps}
                  onClick={handleEventClick}
                />
              )}
            />
            <DateNavigator />
            <AppointmentTooltip />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </Box>
    </DefaultLayout>
  );
};

export default Calendar;
