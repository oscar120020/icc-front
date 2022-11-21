import { useState } from "react";
import { Alert, AlertTitle, Box, Button, CircularProgress, Typography } from "@mui/material";
import { addRanking } from "../../api";
import Cookies from "js-cookie";

interface RankResponse {
  msg: string;
  isError: boolean;
}

interface Props {
  close: () => void;
  rankId: string;
}

export const GetRankingBox = ({
  close,
  rankId
}: Props) => {
  const [loading, setLoading] = useState(false);

  const [rankResponse, setRankResponse] = useState({
    msg: "",
    isError: false
  });

  const updateWithRanking = (rankingId: string) => {
    setLoading(true)
    const token = Cookies.get("token") || "";
    addRanking(rankingId, token)
      .then((res) => {
        setRankResponse({
          isError: false,
          msg: res.message
        });
      })
      .catch((err) => {
        setRankResponse({
          msg: "El ranking no se pudo agregar. Asegurese de que esté disponible",
          isError: true
        });
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const handleScrapping = () => {
    updateWithRanking(rankId)
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3">Este proceso puede tardar unos segundos, ya que se están recolectando muchos datos.</Typography>
      <br/>
      <Typography variant="body1">Asegurece de que la competencia haya finalizado antes de proceder.</Typography>
      {
        !!rankResponse.msg ? (
          <Alert severity={rankResponse.isError ? "error" : "success"} sx={{ width: "100%", mt: 2 }}>
            <AlertTitle>{rankResponse.msg}</AlertTitle>
          </Alert>
        ): <></>
      }
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          color="error"
          sx={{ bgcolor: "#f44336", color: "white", mr: 2 }}
          size="large"
          onClick={close}
        >
          Cancelar
        </Button>
        <Button
          sx={{ bgcolor: "#0ba7ce", color: "white" }}
          size="large"
          onClick={handleScrapping}
        >
          {loading ? <CircularProgress color="inherit" size={25} /> : "Scrapping"}
        </Button>
      </Box>
    </Box>
  );
};
