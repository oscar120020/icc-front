import { Container } from "@mui/material";
import RankingCard from "../components/cards/RankingCard";
import RankingSecondaryCard from "../components/cards/RankingSecondaryCard";
import { DefaultLayout } from "../components/layouts";

// const data: Competitor[] = [
//   {
//       username: 'Vladimir',
//       fullname: '',
//       score: 25,
//       penalty: 560
//   },
//   {
//       username: 'Juan',
//       fullname: '',
//       score: 25,
//       penalty: 560
//   },
//   {
//       username: 'Pedro',
//       fullname: '',
//       score: 25,
//       penalty: 560
//   },

// ]

const contestants = () => {
  return (
    <DefaultLayout title={"Participantes | ICC"} pageDescription={"Todos los participantes"}>
        <h1>Participarntes</h1>
        {/* <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <RankingCard competitor={data[0]} index={1}/>
          <RankingCard competitor={data[1]} index={2}/>
          <RankingCard competitor={data[2]} index={3}/>
        </Container>
        <RankingSecondaryCard competitor={data[0]} index={4} /> */}
        
    </DefaultLayout>
  )
}

export default contestants;