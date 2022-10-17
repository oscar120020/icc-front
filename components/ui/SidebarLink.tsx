import { Box, Button, Link, Typography } from "@mui/material";
import NextLink from 'next/link'
import { useRouter } from "next/router";

interface Props {
  label: string;
  to: string;
  isMain?: boolean;
}

export const SidebarLink = ({ label, to }: Props) => {

  const { pathname } = useRouter();
  const currentColor = pathname === '/admin' ? '#0ba7ce' : 'black'

  return (
    <NextLink href={to} passHref style={{ textDecoration: "none" }}>
      <Link>
        <Box sx={{ml: 3, mt: 1, display: 'flex'}}>
          <Box sx={{width: '1px', height: '15px', backgroundColor: currentColor, marginRight: 3, marginY: 'auto'}} />
          <Typography color={currentColor}>
            {label}
          </Typography>
        </Box>
      </Link>
    </NextLink>
  );
};
