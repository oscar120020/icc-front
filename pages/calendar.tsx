import {
  Scheduler,
  ConfirmationDialog,
  Appointments,
  WeekView,
  MonthView,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Resources,
  EditRecurrenceMenu,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import { Box, Paper } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSeasons } from "../api";

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

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data, error, isLoading } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });

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
        }}
      >
        <Paper sx={{ flex: 1 }}>
          <Scheduler
            data={data?.map((season) => ({
              title: season.name,
              startDate: season.beginning,
              endDate: season.end,
              // type: 'private'
            }))}
          >
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
            />
            <Toolbar />
            <MonthView />
            <DateNavigator />
            <Appointments />
            <AppointmentTooltip />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </Box>
    </DefaultLayout>
  );
};

export default Calendar;
