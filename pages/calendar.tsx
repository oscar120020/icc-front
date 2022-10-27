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
import { Box, Paper } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { useState } from "react";
import { useQuery } from "react-query";
import { getEvents } from "../api";
import { getDatePlusOneDay, IsDateHigherThanNow } from "../helpers/dateHelpers";
import { EventResponse } from "../interfaces/eventResponse";
import { CalendarInfo } from "../components/ui/CalendarInfo";

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "red" },
      { id: "work", text: "Work", color: "#0ba7ce" },
    ],
  },
];

interface EventClick {
  target: EventTarget;
  data: EventData;
}

interface EventData {
  endDate: Date;
  startDate: Date;
  image: string;
  title: string;
  type: string;
  rankingId: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<EventResponse>();
  const { data, error, isLoading } = useQuery(["events"], getEvents, {
    retry: 1,
  });

  const handleEventClick = ({ data }: EventClick) => {
    setSelectedDate({
      date: data.startDate,
      name: data.title,
      imageUrl: data.image,
      rankingId: data.rankingId
    });
    window.scrollTo(0, 0)
  };

  return (
    <DefaultLayout
      title={"Calendario | ICC"}
      pageDescription={"Calendario de eventos"}
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
          {!!selectedDate && (
            <CalendarInfo selectedDate={selectedDate} />
          )}
        </Paper>
        <Paper sx={{ flex: 1 }}>
          <Scheduler
            data={data?.map((event) => ({
              title: event.name,
              startDate: event.date,
              endDate: getDatePlusOneDay(event.date, 1),
              type: IsDateHigherThanNow(event.date) ? "work" : "private",
              image: event.imageUrl,
              rankingId: event.rankingId
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
