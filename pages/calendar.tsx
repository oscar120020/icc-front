import { Scheduler, DayView, Appointments, WeekView, MonthView, ViewSwitcher, Toolbar, DateNavigator } from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Box, Paper } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { useState } from "react";

const events = [
  {
    id: 0,
    title: "Board meeting",
    startDate: new Date(),
    endDate: new Date('2022-10-29'),
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

const Calendar = () => {

  const [currentDate, setCurrentDate] = useState(new Date())

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
        <Paper>
          <Scheduler data={events} height={500}>
            <ViewState currentDate={currentDate} onCurrentDateChange={setCurrentDate} />
            <DayView/>
            <WeekView/>
            <MonthView />
            <Toolbar/>
            <DateNavigator />
            <ViewSwitcher />
            <Appointments />
          </Scheduler>
        </Paper>
      </Box>
    </DefaultLayout>
  );
};

export default Calendar;
