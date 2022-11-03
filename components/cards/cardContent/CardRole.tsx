import { Box, Typography } from "@mui/material";



interface Props {
    description: string,
    userName?: string,
    fullName?: string
}


export default function CardRole({ description, fullName,userName}: Props) {
    return (

        <Box sx={{ mt: 5 }}>
            <Typography textAlign="center" variant="subtitle1">
                {fullName || userName}
            </Typography>
            <Typography textAlign="center" variant="body2" color="info">
            {description}
          </Typography>
        </Box>
    )
}