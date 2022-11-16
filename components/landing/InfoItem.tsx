import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
    image: any;
    title: string;
    description: string;
    link?: Link
}

interface Link {
    label: string;
    url: string;
}

export const InfoItem = ({ image, title, description, link }: Props) => {
  return (
    <Grid item xs={12} sm={5} lg={3} sx={{padding: '20px', position: 'relative'}}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ width: "100px" }}>
          <Image src={image} alt={title} />
        </Box>
        <Typography textAlign="center" variant="h5">
          {title}
        </Typography>
        <Box
          sx={{
            width: "100px",
            height: "2px",
            background:
              "linear-gradient(to left, transparent, #0ba7ce, transparent);",
            margin: "15px auto 0 auto",
          }}
        />
        <Typography
          color="#646262"
          textAlign="center"
          sx={{ maxWidth: "90%", margin: "15px auto 0 auto" }}
          variant="h4"
        >
          {description}
        </Typography>
        <a style={{textDecoration: 'none'}} href={link?.url} target='_black'>
            <Typography color="primary" variant='h6' sx={{textDecoration: 'underline'}} >
                {link?.label}
            </Typography>
        </a>
      </Box>
    </Grid>
  );
};
