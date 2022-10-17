import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  contentContainer: {
    width: "100%",
    display: "flex",
    height: '244px',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "50px",
  },
  downContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "1px solid rgba(0, 0, 0,0.2)",
  },
  secondaryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  secondaryLeftContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3px",
  },
  secondaryRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    width: '20vw',
    height: 250,
    minWidth: '200px',
    position: "relative",
    display: "flex",
    margin: '10px 20px'
  },

  insigniaContainer: {
    position: "absolute",
    left: "-40px",
    top: "-14px",
    zIndex: "1000",
  },
    
  cardContainer: {
    background: "#FFFFF",
    width: "95%",
    borderRadius: "15px",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },

  secondCardContainer: {
    background: "#FFFFF",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    marginTop: "20px",
  },

  infoContent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreInfo: {
    display: 'flex',
    flexDirection: "row",
  },
  text: {
    fontSize: '14px',
  }
});
