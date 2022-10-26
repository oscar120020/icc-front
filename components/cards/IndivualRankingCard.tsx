import {
    Box,
    Button,
    Card,
    CardActionArea,
    Grid,
    Typography,
} from "@mui/material";
import { useStyles } from "./style";
import router from 'next/router'
import { IndividualRanking } from "../../interfaces/seasonResponse";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useRef } from "react";
import { getDateFormat } from "../../helpers/getDateFormat";
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';


export default function IndivualRankingCard({ individualRanking, index }: IndividualRanking) {
    const classes = useStyles();
    const date = useRef(getDateFormat(individualRanking.created_at));
    const handleClick = (id: string) => {
        router.push(`ranking/${id}`)
    }

    return (
        <Grid
            className={classes.seasonContainer}
            item
            xs={12}
            sm={5}
            lg={3}
            sx={{ margin: { xs: '15px auto', sm: '15px' } }}
        >
            <Card className={classes.seasonBox} sx={{ height: '90px' }} onClick={()=>handleClick(individualRanking.id)}>
                <CardActionArea sx={{ width: "100%" }}>
                    <Box className={classes.cardRankingBox}>
                        <Box className={classes.cardIndividual}>
                            <StarOutlineTwoToneIcon color="primary" sx={{ fontSize: '28px' }} />
                            <Typography sx={{ fontSize: '18px' }}>
                                Ranking {index}
                            </Typography>
                        </Box>
                        <Box className={classes.cardIndividual}>
                            <CalendarMonthOutlinedIcon sx={{ marginRight: "50px", fontSize: "28px" }} color="primary" />
                            <Typography
                                sx={{ whiteSpace: "nowrap", marginLeft: "-45px", fontSize: '18px' }}

                            >
                                {date.current}
                            </Typography>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
