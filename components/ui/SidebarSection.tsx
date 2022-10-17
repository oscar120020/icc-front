import { useState } from "react";
import { Box, Collapse, Link, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NextLink from "next/link";

interface Props {
  title: string;
  iconSidebar: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  to?: string;
}

export const SidebarSection = ({
  title,
  children,
  iconSidebar,
  to = "",
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{mt: 1}}>
      {!children && !!to ? (
        <NextLink href={to} passHref style={{ textDecoration: "none" }}>
          <Link>
            <Box display={"flex"} alignItems="center">
              {iconSidebar}
              <Typography variant="body1" color="black">
                {title}
              </Typography>
            </Box>
          </Link>
        </NextLink>
      ) : (
        <>
          <Box
            className="touchable"
            display={"flex"}
            justifyContent="space-between"
            onClick={handleOpen}
          >
            <Box display={"flex"} alignItems="center">
              {iconSidebar}
              <Typography variant="body1">{title}</Typography>
            </Box>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {children}
          </Collapse>
        </>
      )}
    </Box>
  );
};
