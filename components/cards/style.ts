import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    contentContainer: {
        width: '100%',
        height: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0'

    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px'
    },
    text: {
        fontSize: '18px',
        paddingTop: '12px',
        textAlign: 'center',
        
        
    },
    downContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(0, 0, 0,0.2)',  
    },
    secondaryContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    secondaryLeftContainer: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '3px'
     
    },
    secondaryRightContainer: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    
    })