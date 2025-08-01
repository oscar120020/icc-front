import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useStyles } from "./style";
import { getDateFormat } from "../../helpers/getDateFormat";
import { SeasonPrimaryProps } from "../../interfaces/seasonResponse";
import { useRouter } from 'next/router'

export default function SeasonCard({ season }: SeasonPrimaryProps) {
  const classes = useStyles();
  const firstmoth = useRef(getDateFormat(season.beginning));
  const secondMoth = useRef(getDateFormat(season.end));
  const router = useRouter()
  const handleClick = (id: string) => {
    router.push(`seasons/${id}`)
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
      <Box className={classes.seasonBox}>
        <Box className={classes.triangleBox} />
        <Box sx={{ width: "100%" }}>
          <Box className={classes.cardTitleBox}>
            <Typography className={classes.titleStyles}>
              {season.name}
            </Typography>
          </Box>
          <Box className={classes.cardContentBox}>
            <Box className={classes.typographyContent}>
              <EmojiEventsOutlinedIcon
                sx={{ marginRight: "7px", fontSize: "29px" }}
              />
              <Typography className={classes.seasonText}>
                {season.numberChanllenges} Challenges
              </Typography>
            </Box>
            <Box className={classes.typographyContent}>
              <Groups2OutlinedIcon
                sx={{ marginRight: "9px", fontSize: "29px" }}
              />
              <Typography className={classes.seasonText}>
                {season.numberCompetitors} Participantes
              </Typography>
            </Box>
            <Box className={classes.typographyContent}>
              <CalendarMonthOutlinedIcon
                sx={{ marginRight: "50px", fontSize: "29px" }}
              />
              <Typography
                sx={{ whiteSpace: "nowrap", marginLeft: "-45px" }}
                className={classes.seasonText}
              >
                {firstmoth.current} - {secondMoth.current}
              </Typography>
            </Box>
            <Box className={classes.buttonBox}>
              <Button className={classes.buttonStyles} onClick={() => handleClick(season.id)}>Ver detalles</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
