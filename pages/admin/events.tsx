import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { deleteEvent, getEvents } from "../../api";
import { EventFormValues } from "../../components/form/formInterfaces";
import { CustomModal } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookies from "js-cookie";
import { EventForm } from "../../components/form/EventForm";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";

const initialValues: EventFormValues = {
  name: "",
  date: new Date(),
  imageUrl: "",
  rankingId: "",
};

const Events = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [currentValues, setCurrentValues] =
    useState<EventFormValues>(initialValues);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState('')
  const { data, error, isLoading, refetch } = useQuery(["events"], getEvents, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre del evento", width: 300 },
    { field: "date", headerName: "Fecha del evento", width: 300 },
    { field: "rankingId", headerName: "Id del ranking", width: 300 },
    { field: "imageUrl", headerName: "Url de imagen", width: 300 },
    {
      field: "editar",
      headerName: "Editar evento",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() =>
            openModalToEdit({
              id: params.row.id,
              name: params.row.name,
              date: params.row.date,
              imageUrl: params.row.imageUrl,
              rankingId: params.row.rankingId,
            })
          }
        >
          Editar evento
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Eliminar evento",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => preDeleteEvent(params.row.id)}
        >
          Eliminar evento
        </Button>
      ),
    },
  ];

  const rows = data?.map((event) => {
    return {
      id: event.id,
      name: event.name,
      date: event.date,
      imageUrl: event.imageUrl,
      rankingId: event.rankingId,
    };
  });

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
  };

  const preDeleteEvent = (id: string) => {
    setSelectedEventId(id)
    setOpenConfirm(true)
  }

  const removeEvent = () => {
    const token = Cookies.get("token") || "";
    deleteEvent(selectedEventId, token)
      .then((res) => {
        refetch();
        setOpenConfirm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModalToEdit = (values: EventFormValues) => {
    setCurrentValues(values);
    setOpen(true);
  };

  const openModalToCreate = () => {
    setCurrentValues(initialValues);
    setOpen(true);
  };

  return (
    <AdminLayout
      title={"Eventos | Admin"}
      pageDescription={"Panel de administración - Eventos"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Eventos - Admin
      </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
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
          Crear evento
        </Button>
      </Box>
      <CustomModal open={open} handleClose={handleCloseModal}>
        <EventForm
          initialValues={currentValues}
          handleClose={handleCloseModal}
          revalidate={refetch}
        />
      </CustomModal>
      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro que quiere eliminar este evento?"
          confirmFunction={removeEvent}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
    </AdminLayout>
  );
};

export default Events;
