import {
  Scheduler,
  ConfirmationDialog,
  WeekView,
  MonthView,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Resources,
  EditRecurrenceMenu,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Box, Paper, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { useState } from "react";
import { useQuery } from "react-query";
import { getEvents, getSeasons } from "../api";
import { getDatePlusOneDay, IsDateHigherThanNow } from "../helpers/dateHelpers";
import { EventResponse } from "../interfaces/eventResponse";
import { getFullDate } from "../helpers/getDateFormat";
import Image from "next/image";

const events = [
  {
    id: 0,
    title: "Board meeting",
    startDate: new Date(),
    endDate: new Date("2022-10-29"),
  },
  {
    id: 1,
    title: "MS training",
    startDate: new Date(2018, 0, 29, 14, 0, 0),
    endDate: new Date(2018, 0, 29, 16, 30, 0),
  },
  {
    id: 2,
    title: "Team lead meeting",
    startDate: new Date(2018, 0, 29, 8, 30, 0),
    endDate: new Date(2018, 0, 29, 12, 30, 0),
  },
  {
    id: 11,
    title: "Birthday Party",
    startDate: new Date(2018, 0, 30, 7, 0, 0),
    endDate: new Date(2018, 0, 30, 10, 30, 0),
  },
];

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "#EC407A" },
      { id: "work", text: "Work", color: "#7E57C2" },
    ],
  },
];

const resources2 = [
  {
    fieldName: "type",
    title: "Type",
    allowMultiple: false,
    isMain: false,
    id: 1,
    color: "#fff",
    text: "sadsa",
  },
];

// const TimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
//   return <MonthView.TimeTableCell onClick={(e) => console.log(e)} {...restProps} />;
// };

const CustomAppoiment = ({
  resources,
  data,
  onClick,
  draggable,
  ...restProps
}: any) => {
  return (
    <Appointments.Appointment
      {...restProps}
      resources={resources}
      data={data}
      onClick={(e) => console.log(e)}
      draggable={false}
    />
  );
};

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
    });
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
            bgcolor: "white",
            padding: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: 'column' },
          }}
        >
          {!!selectedDate && (
            <>
              <Box>
                <Typography variant="h2">{selectedDate.name}</Typography>
                <Typography variant="h6">
                  {getFullDate(selectedDate.date)}
                </Typography>
                <Typography
                  variant="h6"
                  color={
                    IsDateHigherThanNow(selectedDate.date) ? "green" : "red"
                  }
                >
                  {IsDateHigherThanNow(selectedDate.date)
                    ? "Próximo"
                    : "Finalizado"}
                </Typography>
              </Box>
              <Box sx={{margin: { xs: '30px 0', sm: "0 30px", lg: '30px 0' }}}>
                <Image
                  src={selectedDate.imageUrl || "/no-image.jpg"}
                  alt="event image"
                  width={250}
                  height={250}
                />
              </Box>
            </>
          )}
        </Paper>
        <Paper sx={{ flex: 1 }}>
          <Scheduler
            data={data?.map((event) => ({
              title: event.name,
              startDate: event.date,
              endDate: getDatePlusOneDay(event.date, 1),
              type: "private",
              image: event.imageUrl,
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
