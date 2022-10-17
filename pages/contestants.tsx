import dynamic from "next/dynamic";
import { DefaultLayout } from "../components/layouts";
import { Competitor } from "../interfaces/ranking";
const SeasonCard = dynamic(() => import('../components/cards/SeasonCard'), { ssr: false });


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


const data1 ={
  name: 'Intellisys Coding Chanllenge 1-2',
  chanllenges: 25,
  beginning: 'Jan, 2022',
  end: 'Jun, 2022'
}

const contestants = () => {
  return (
    <DefaultLayout title={"Participantes | ICC"} pageDescription={"Todos los participantes"}>
      <h1>Participarntes</h1>
      <SeasonCard season={data1}/>

    </DefaultLayout>
  )
}

export default contestants;