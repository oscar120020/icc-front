import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAdminUsers, removeAdmin } from "../../api";
import {
  AdminUserFormValues
} from "../../components/form/formInterfaces";
import { CustomModal, AdminUserForm } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookie from "js-cookie";
import Cookies from "js-cookie";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";

const initialValues: AdminUserFormValues = {
  username: "",
  password: "",
};

const AdminUsers = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState('')
  const { data, error, isLoading, refetch } = useQuery(
    ["admin"],
    () => getAdminUsers(Cookie.get("token") || ""),
    {
      retry: 1,
    }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Nombre de usuario", width: 200 },
    {
      field: "delete",
      headerName: "Eliminar usuario",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => preDeleteAdmin(params.row.id)}
        >
          Eliminar usuario
        </Button>
      ),
    },
  ];

  const rows = data?.map((user) => {
    return {
      id: user.id,
      username: user.username,
    };
  });

  const openModalToCreate = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
  };

  const preDeleteAdmin = (id: string) => {
    setSelectedAdminId(id)
    setOpenConfirm(true)
  }

  const deleteAdmin = () => {
    const token = Cookies.get('token') || ''
    removeAdmin(selectedAdminId, token)
    .then(res => {
      refetch();
      setOpenConfirm(false);
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <AdminLayout
      title={"Admin Users | Admin"}
      pageDescription={"Panel de administración - Admin Users"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Admin Users - Admin
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows || []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          loading={isLoading}
          components={{ Toolbar: CustomToolbar }}
          pagination
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear usuario administrador
        </Button>
      </Box>
      <CustomModal open={open} handleClose={handleCloseModal}>
        <AdminUserForm
          handleClose={handleCloseModal}
          initialValues={initialValues}
          revalidate={refetch}
        />
      </CustomModal>

      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro que quiere eliminar este usuario?"
          confirmFunction={deleteAdmin}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
    </AdminLayout>
  );
};

export default AdminUsers;
