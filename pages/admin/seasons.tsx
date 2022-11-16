import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Cookies from "js-cookie";
import { useState } from "react";
import { useQuery } from "react-query";
import { deleteSeason, getSeasons } from "../../api";
import { SeasonFormValues } from "../../components/form/formInterfaces";
import { CustomModal } from "../../components/form/CustomModal";
import { SeasonForm } from "../../components/form/SeasonForm";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import { getDatePlusOneDay } from "../../helpers/dateHelpers";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";

const initialValues: SeasonFormValues = {
  name: "",
  beginning: new Date(),
  end: getDatePlusOneDay(new Date(), 30),
};

const Seasons = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [currentValues, setCurrentValues] =
    useState<SeasonFormValues>(initialValues);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedSeasonId, setSelectedSeasonId] = useState('')
  const { data, error, isLoading, refetch } = useQuery(["seasons"], getSeasons, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Nombre", width: 270 },
    { field: "beginning", headerName: "Empieza en", width: 170 },
    { field: "end", headerName: "Termina en", width: 170 },
    {
      field: "edit",
      headerName: "Editar",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => openModalToEdit({
            name: params.row.name,
            beginning: params.row.beginning,
            end: params.row.end,
            id: params.row.id
          })}
        >
          Editar temporada
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => preRemoveSeason(params.row.id)}
        >
          Eliminar temporada
        </Button>
      ),
    },
  ];

  const rows = data?.map((season) => {
    return {
      id: season.id,
      name: season.name,
      beginning: season.beginning,
      end: season.end,
    };
  });

  const openModalToEdit = (values: SeasonFormValues) => {
    setCurrentValues(values);
    setOpen(true);
  };

  const openModalToCreate = () => {
    setCurrentValues(initialValues);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
  };

  const preRemoveSeason = (id: string) => {
    setSelectedSeasonId(id)
    setOpenConfirm(true)
  }

  const removeSeason = () => {
    const token = Cookies.get('token') || ''
    deleteSeason(selectedSeasonId, token)
    .then(res => {
      refetch();
      setOpenConfirm(false);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <AdminLayout
      title={"Temporadas | Admin"}
      pageDescription={"Panel de administración - Temporadas"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Temporadas - Admin
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear temporada
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
        <SeasonForm revalidate={refetch} handleClose={handleCloseModal} initialValues={currentValues} />
      </CustomModal>
      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro que quiere eliminar esta temporada? Con ella se borrarán los rankings relacionados"
          confirmFunction={removeSeason}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
    </AdminLayout>
  );
};

export default Seasons;
