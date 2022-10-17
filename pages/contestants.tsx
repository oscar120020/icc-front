import { Box, Container } from "@mui/material";
import dynamic from "next/dynamic";
import { DefaultLayout } from "../components/layouts";
import { Competitor } from "../interfaces/ranking";
const Ranking = dynamic(() => import('../components/ranking/Ranking'), { ssr: false });


const data: Competitor[] = [
  {
    username: 'Vladimir',
    fullname: '',
    score: 25,
    penalty: 560
  },
  {
    username: 'Juan',
    fullname: '',
    score: 25,
    penalty: 560
  },
  {
    username: 'Pedro',
    fullname: '',
    score: 25,
    penalty: 560
  },
  {
    username: 'Pedro',
    fullname: '',
    score: 25,
    penalty: 560
  },
  {
    username: 'Pedro',
    fullname: '',
    score: 25,
    penalty: 560
  },
  {
    username: 'Pedro',
    fullname: '',
    score: 25,
    penalty: 560
  },

]

const contestants = () => {
  return (
    <DefaultLayout title={"Participantes | ICC"} pageDescription={"Todos los participantes"} >
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
        className="fadeIn"
      >
        <Ranking competitors={data} />
      </Box>

    </DefaultLayout>
  )
}

export default contestants;