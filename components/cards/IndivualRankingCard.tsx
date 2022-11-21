import {
  Box,
  Button,
  Card,
  CardActionArea,
  Grid,
  Typography,
} from "@mui/material";
import { useStyles } from "./style";
import router from "next/router";
import { IndividualRanking } from "../../interfaces/seasonResponse";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useRef } from "react";
import { getDateFormat } from "../../helpers/getDateFormat";
import StarOutlineTwoToneIcon from "@mui/icons-material/StarOutlineTwoTone";

export default function IndivualRankingCard({
  individualRanking,
  index,
}: IndividualRanking) {
  const classes = useStyles();
  const date = useRef(getDateFormat(individualRanking.beginning));
  const handleClick = (id: string) => {
    router.push(`ranking/${id}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={5}
      lg={3}
      sx={{ margin: 2 }}
    >
      <Card
        className={classes.seasonBox}
        onClick={() => handleClick(individualRanking.id)}
      >
        <CardActionArea sx={{ width: "100%" }}>
          <Box className={classes.cardRankingBox} sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
            <Box className={classes.cardIndividual}>
              <StarOutlineTwoToneIcon
                color="primary"
                sx={{ fontSize: "28px" }}
              />
              <Typography sx={{ fontSize: "18px" }}>Competencia º{index}</Typography>
            </Box>
            <Box className={classes.cardIndividual}>
              <CalendarMonthOutlinedIcon
                sx={{ fontSize: "28px" }}
                color="primary"
              />
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  fontSize: "18px",
                }}
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
