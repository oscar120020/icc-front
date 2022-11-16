import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllRanking, removeRanking } from "../../api";
import { RankingFormValues } from "../../components/form/formInterfaces";
import { RankingForm, CustomModal } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookies from "js-cookie";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";

const initialValues: RankingFormValues = {
  url: "",
  seasonId: "",
  date: new Date()
};

const Rankings = () => {
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [currentValues, setCurrentValues] =
    useState<RankingFormValues>(initialValues);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedRankingId, setSelectedRankingId] = useState('')
  const { data, error, isLoading, refetch } = useQuery(["rankings"], getAllRanking, {
    retry: 1,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "url", headerName: "Url del ranking", width: 300 },
    { field: "date", headerName: "Fecha del ranking", width: 300 },
    { field: "season", headerName: "Temporada", width: 300 },
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
            id: params.row.id,
            date: params.row.date,
            url: params.row.url,
            seasonId: params.row.seasonId
          })}
        >
          Editar temporada
        </Button>
      ),
    },
    {
      field: "seasonId",
      headerName: "Eliminar ranking",
      width: 170,
      renderCell: (params) => (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => preDeleteRanking(params.row.id)}
        >
          Eliminar ranking
        </Button>
      ),
    },
  ];

  const rows = data?.map((ranking) => {
    return {
      id: ranking.id,
      url: ranking.url,
      date: ranking.date,
      season: ranking.season.name,
      seasonId: ranking.season.id,
    };
  });

  const openModalToEdit = (values: RankingFormValues) => {
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

  const preDeleteRanking = (id: string) => {
    setSelectedRankingId(id)
    setOpenConfirm(true)
  }

  const deleteRanking = () => {
    const token = Cookies.get('token') || ''
    removeRanking(selectedRankingId, token)
    .then(res => {
      refetch()
      setOpenConfirm(false);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <AdminLayout
      title={"Rankings | Admin"}
      pageDescription={"Panel de administración - rankings"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Rankings - Admin
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear ranking
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
        <RankingForm revalidate={refetch} handleClose={handleCloseModal} initialValues={currentValues} />
      </CustomModal>
      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro que quiere eliminar este ranking?"
          confirmFunction={deleteRanking}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
    </AdminLayout>
  );
};

export default Rankings;
