import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
  icon: JSX.Element;
}

export const AdminDashboardCard = ({ title, subTitle, icon }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardContent>{icon}</CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">{title}</Typography>
          <Typography variant="caption">{subTitle}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
