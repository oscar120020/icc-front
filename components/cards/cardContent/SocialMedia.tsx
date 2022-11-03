import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LinkedInLogo from "../../../assets/LinkedIn.svg";

export default function SocialMedia({ socialLink }: { socialLink?: string }) {
  return (
    <Box
      sx={{
        width: "60%",
        margin: "10px auto",
        display: "flex",
        justifyContent: "center",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "25px",
        bgcolor: "#08cbfc78",
      }}
      className={!socialLink ? "disabled" : "competitor-card"}
    >
      <a
        style={{ textDecoration: "none", display: "flex" }}
        href={socialLink}
        target="_blanck"
      >
        <Image src={LinkedInLogo} alt="Linkedin logo" width={25} height={20} />
        <Typography color="InfoText" sx={{ ml: 1 }}>
          LinkedIn
        </Typography>
      </a>
    </Box>
  );
}
