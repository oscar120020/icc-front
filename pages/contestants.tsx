import { Container } from "@mui/material";
import dynamic from "next/dynamic";
import { DefaultLayout } from "../components/layouts";
import Ranking from "../components/ranking/Ranking";
import { Competitor } from "../interfaces/ranking";


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
    <DefaultLayout title={"Participantes | ICC"} pageDescription={"Todos los participantes"}>
        <h1>Participarntes</h1>
        <Ranking competitors={data}/>
        
    </DefaultLayout>
  )
}

export default contestants;