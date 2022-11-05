import Image from "next/image";
import { Grid, Box } from "@mui/material";

interface Props {
  imageUrl?: string;
  children: JSX.Element[];
  color?: string;
}

export const ContestantCard = ({ imageUrl, children, color }: Props) => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      lg={2.5}
      sx={{
        width: "15vw",
        maxWidth: "280px",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "280px",
          height: "100%",
          borderRadius: "5px",
          boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* background */}
        <Box
          sx={{
            bgcolor: color || "#0ba7ce",
            width: "100%",
            height: "110px",
            position: "absolute",
          }}
        />

        {/* Image */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "110px",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              position: "absolute",
              bottom: -23,
              border: "2px solid #fff",
              outline: `2px solid ${color || '#0ba7ce'}`,
              width: 85,
              height: 85,
            }}
          >
            <Image
              src={imageUrl || "/profile.png"}
              alt="perfil"
              width={85}
              height={85}
            />
          </Box>
        </Box>
        <Box
          sx={{padding: "0 10px"}}
        >
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
