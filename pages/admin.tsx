import { Box } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { SidebarAdmin } from "../components/ui/SidebarAdmin";

const admin = () => {
  return (
    <AdminLayout title={"Administration | ICC"} pageDescription={"Panel de administración"} >
      
    </AdminLayout>
  )
}

export default admin;