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
    justifyContent: "space-between",
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
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  container: {
    width: 345,
    height: 250,
    position: "relative",
    display: "flex",
    marginLeft: "2px",
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
    paddingTop: '10px',
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
  seasonBox: {
    boxShadow: '1px 1px 3px', 
    width: '80%', 
    borderRadius: '10px', 
    position: 'relative', 
    overflow: 'hidden' 

  },
  triangleBox: {
    width: '100%', 
    borderRight: '90px solid transparent', 
    borderTop: '220px solid transparent', 
    borderLeft: '350px solid #1985A1', 
    transform: 'rotateX(180deg)' 
  },
  cardTitleBox: {
    position: 'absolute', 
    top: '20px', 
    width: '80%', 
    margin: '11px' 
  },
  titleStyles: {
    color: '#FFFFFF', 
    fontSize: '24px', 
    textAlign: 'left' 
  },
  cardContentBox: {
    width: '100%', 
    height: '210px', 
    position: 'absolute', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-end', 
    bottom: '20px', 
    right: '30px', 
    justifyContent: 'space-between' 
  },
  typographyContent:{
    display: 'flex', 
    flexDirection: 'row' 

  },
  seasonText: {
    fontSize: '17.9px', 
    color: '#3C5777', 
    fontWeight: 'bold'
  },
  buttonBox: {
    marginTop: '30px', 
    width: '50%', 
    paddingBottom: '10px' 
  },
  buttonStyles: {
    color: '#FFFFFF', 
    background: '#1985A1', 
    width: '100%', 
    height: '30px', 
    fontSize: '16px' 
  }
});
