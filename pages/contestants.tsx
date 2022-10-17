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
const start = new Date('August 19, 2022 23:15:30')
const end = new Date('october 19, 2022 23:15:30')

const data1 ={
  name: 'Intellisys Coding Chanllenge 1-2',
  numberchanllenges: 25,
  numberCompetitors: 10,
  beginning: start,
  end: end
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