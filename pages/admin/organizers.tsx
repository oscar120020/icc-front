import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  getOrganizer,
  removeOrganizer,
} from "../../api";
import {
  OrganizerFormValues,
} from "../../components/form/formInterfaces";
import { CustomModal } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookies from "js-cookie";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";
import { OrganizerUserForm } from "../../components/form/OrganizerUserForm";

const initialValues: OrganizerFormValues = {
  fullName: "",
  imageUrl: "",
  socialLink: "",
  role: "",
};

const Organizer = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState("");
  const [currentValues, setCurrentValues] =
    useState<OrganizerFormValues>(initialValues);
  const { data, error, isLoading, refetch } = useQuery(
    ["organizers"],
    getOrganizer,
    {
      retry: 1,
    }
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fullName", headerName: "Nombre del organizador", width: 200 },
    { field: "imgUrl", headerName: "Url de la imagen", width: 200 },
    { field: "socialLink", headerName: "Url de la red Social", width: 200 },
    { field: "role", headerName: "Rol", width: 200 },
    {
      field: "editar",
      headerName: "Editar organizador",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() =>
            openModalToEdit({
              id: params.row.id,
              fullName: params.row.fullName,
              imageUrl: params.row.imageUrl,
              role: params.row.role,
              socialLink: params.row.socialLink,
            })
          }
        >
          Editar organizador
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Eliminar Organizador",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => preDeleteAdmin(params.row.id)}
        >
          Eliminar Organizador
        </Button>
      ),
    },
  ];

  const rows = data?.map((user) => {
    return {
      ...user,
    };
  });

  const openModalToCreate = () => {
    setCurrentValues(initialValues);
    setOpen(true);
  };
  const openModalToEdit = (values: OrganizerFormValues) => {
    setCurrentValues(values);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
  };

  const preDeleteAdmin = (id: string) => {
    setSelectedAdminId(id);
    setOpenConfirm(true);
  };

  const deleteOrganizer = () => {
    const token = Cookies.get("token") || "";
    removeOrganizer(selectedAdminId, token)
      .then((res) => {
        refetch();
        setOpenConfirm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AdminLayout
      title={"Organizadores | Admin"}
      pageDescription={"Panel de administración - Organizers"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Organizadores
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear un Organizador
        </Button>
      </Box>
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
      <CustomModal open={open} handleClose={handleCloseModal}>
        <OrganizerUserForm
          handleClose={handleCloseModal}
          initialValues={currentValues}
          revalidate={refetch}
        />
      </CustomModal>

      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro que quiere eliminar este organizador?"
          confirmFunction={deleteOrganizer}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
    </AdminLayout>
  );
};

export default Organizer;
