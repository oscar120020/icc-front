import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { addRanking, getAllRanking, removeRanking } from "../../api";
import { RankingFormValues } from "../../components/form/formInterfaces";
import { RankingForm, CustomModal } from "../../components/form";
import { AdminLayout } from "../../components/layouts";
import { CustomToolbar } from "../../components/maretial-ui/CustomToolbar";
import Cookies from "js-cookie";
import { ConfirmationAlert } from "../../components/ui/ConfirmationAlert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { timestampFormater } from "../../helpers/dateHelpers";
import { GetRankingBox } from "../../components/ui/GetRankingBox";
import { RankingResponse } from "../../interfaces/rankingsResponse";
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const initialValues: RankingFormValues = {
  rankingUrl: "",
  seasonId: "",
  name: "",
  begin: new Date(),
  end: new Date(),
};

const Rankings = () => {
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [currentValues, setCurrentValues] =
    useState<RankingFormValues>(initialValues);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openAddRank, setOpenAddRank] = useState(false);
  const [selectedRankingId, setSelectedRankingId] = useState("");
  const { data, error, isLoading, refetch } = useQuery(
    ["rankings"],
    getAllRanking,
    {
      retry: 1,
    }
  );
  const [rank, setRank] = useState<RankingResponse>();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre de competencia", width: 230 },
    { field: "url", headerName: "Url de la competencia", width: 230 },
    {
      field: "begining",
      headerName: "Fecha de inicio",
      width: 230,
      renderCell: (params) => (params.row.begining as Date).toLocaleString(),
    },
    {
      field: "end",
      headerName: "Fecha de fin",
      width: 230,
      renderCell: (params) => (params.row.end as Date).toLocaleString(),
    },
    { field: "season", headerName: "Temporada", width: 250 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 170,
      renderCell: (params) => (
        <Stack direction="row" spacing={2} sx={{ margin: "0 auto" }}>
          <Tooltip title="Editar">
            <IconButton
              onClick={() => {
                openModalToEdit({
                  id: params.row.id,
                  rankingUrl: params.row.url,
                  name: params.row.name,
                  begin: params.row.begining,
                  end: params.row.end,
                  seasonId: params.row.actions.seasonId,
                });
              }}
            >
              <EditIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton onClick={() => preDeleteRanking(params.row.id)}>
              <DeleteIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cargar ranking">
            <IconButton onClick={() => openModalToGetRank(params.row.actions.rank)}>
              <ManageSearchIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  const rows = data?.map((ranking) => {
    return {
      id: ranking.id,
      name: ranking.name,
      url: ranking.url,
      begining: timestampFormater(ranking.beginning),
      end: timestampFormater(ranking.end),
      season: ranking.season.name,
      actions: {
        seasonId: ranking.season.id,
        rank: ranking
      },
    };
  });

  const openModalToGetRank = (rank: RankingResponse) => {
    setRank(rank);
    setOpenAddRank(true);
  };

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

  const handleCloseAddRankModal = () => {
    setOpenAddRank(false);
  };

  const preDeleteRanking = (id: string) => {
    setSelectedRankingId(id);
    setOpenConfirm(true);
  };

  const deleteRanking = () => {
    const token = Cookies.get("token") || "";
    removeRanking(selectedRankingId, token)
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
      title={"Competencias | Admin"}
      pageDescription={"Panel de administración - Competencias"}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Competencias - Admin
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#0ba7ce", color: "white" }}
          onClick={openModalToCreate}
        >
          Crear competencia
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
        <RankingForm
          revalidate={refetch}
          handleClose={handleCloseModal}
          initialValues={currentValues}
        />
      </CustomModal>
      <CustomModal open={openConfirm} handleClose={handleCloseConfirmModal}>
        <ConfirmationAlert
          message="¿Está seguro(a) que quiere eliminar esta competencia?"
          confirmFunction={deleteRanking}
          close={handleCloseConfirmModal}
        />
      </CustomModal>
      <CustomModal open={openAddRank} handleClose={handleCloseAddRankModal}>
        <GetRankingBox close={handleCloseAddRankModal} rank={rank} />
      </CustomModal>
    </AdminLayout>
  );
};

export default Rankings;
