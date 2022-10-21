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
    fontFamily: 'Georgia, serif'
  },
  //seasonStyles
  seasonContainer: {
    width: '20vw',
    minWidth: '200px',
    maxWidth: '350px',
    position: "relative",
    display: "flex",
  },
  seasonBox: {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', 
    width: '100%', 
    borderRadius: '10px', 
    position: 'relative', 
    overflow: 'hidden' 

  },
  triangleBox: {
    width: '100%', 
    borderTop: '220px solid transparent', 
    borderLeft: '350px solid #1985A1',
    position: 'absolute',
    transform: 'rotateX(180deg)',
    zIndex: -1
  },
  cardTitleBox: {
    padding: '25px 20px',
    width: '90%', 
  },
  titleStyles: {
    color: '#FFFFFF', 
    fontSize: '24px', 
    textAlign: 'left',
    fontWeight: 'bold' 
  },
  cardContentBox: {
    width: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-end',
    paddingRight: '15px'
  },
  typographyContent:{
    display: 'flex', 
    flexDirection: 'row', 
    marginTop: '20px',
    alignItems: 'center'
  },
  seasonText: {
    fontSize: '17px', 
    color: '#3C5777', 
    fontWeight: '600'
  },
  buttonBox: {
    marginTop: '30px', 
    width: '50%',
    paddingBottom: '30px'
  },
  buttonStyles: {
    color: '#FFFFFF', 
    background: '#1985A1', 
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'

  }
});
