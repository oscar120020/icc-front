import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { AdminDashboardCard } from "../../components/cards/AdminDashboardCard";
import { AdminLayout } from "../../components/layouts";
import { useQuery } from "react-query";
import { getAllInformation } from "../../api";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArchiveIcon from '@mui/icons-material/Archive';


const Admin = () => {
  const [revalidateTimer, setRevalidateTimer] = useState(60);
  const { data } = useQuery(
    ["all-info"],
    getAllInformation,
    {
      retry: 1,
      refetchInterval: 60000
    }
  );

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (data) {
      interval = setInterval(() => {
        setRevalidateTimer((prev) => (prev > 0 ? prev - 1 : 60));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [data]);
  return (
    <AdminLayout
      title={"Administración | Intellisys Coding Challenge"}
      pageDescription={"Panel de administración"}
    >
      <Grid container spacing={2}>
        <AdminDashboardCard
          title={`${data?.seasons}`}
          subTitle={data?.seasons === 1 ? "Temporada" : "Temporadas"}
          icon={
            <ArchiveIcon color="warning" sx={{ fontSize: 50 }} />
          }
        />
        <AdminDashboardCard
          title={`${data?.rankings}`}
          subTitle={data?.rankings === 1 ? "Concurso" : "Concursos"}
          icon={
            <EmojiEventsOutlinedIcon color="success" sx={{ fontSize: 50 }} />
          }
        />
        <AdminDashboardCard
          title={`${data?.scores}`}
          subTitle={"Participaciones"}
          icon={
            <EmojiPeopleIcon color="primary" sx={{ fontSize: 50 }} />
          }
        />
        <AdminDashboardCard
          title={`${data?.competitors}`}
          subTitle={"Participantes"}
          icon={
            <AccountCircleIcon color="warning" sx={{ fontSize: 50 }} />
          }
        />
        <AdminDashboardCard
          title={`${data?.adminUsers}`}
          subTitle={data?.adminUsers === 1 ? "Administrador" : "Administradores"}
          icon={
            <AdminPanelSettingsIcon color="primary" sx={{ fontSize: 50 }} />
          }
        />
        <AdminDashboardCard
          title={`${revalidateTimer}`}
          subTitle={"Refrescar en:"}
          icon={
            <AccessTimeFilledIcon color="error" sx={{ fontSize: 50 }} />
          }
        />
      </Grid>
    </AdminLayout>
  );
};

export default Admin;
