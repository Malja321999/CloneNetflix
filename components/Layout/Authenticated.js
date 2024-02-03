import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import SignOutIcon from "@mui/icons-material/Logout";
import { SignOut } from "../../services/firebase";
import Link from "next/link";

const Authenticated = ({ children, title }) => {
  const defaultTitle = "Netflix";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Link href="/" passHref>
            <Typography sx={{ flex: 1, cursor: "pointer" }}>Netflix</Typography>
          </Link>
          <ButtonBase onClick={SignOut}>
            <SignOutIcon />
            <Typography sx={{ ml: 1 }}>Sign out</Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Authenticated;
