import Container from "@mui/material/Container";
import { useUser } from "../../context/user";
import withProtected from "../../hoc/withProtected";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
/* import { useUser } from "../../../context/user"; */
import Head from "next/head";
import AuthLayout from "../../components/Layout/Authenticated";

const Dashboard = () => {
  const user = useUser();
  const { email, uid } = user;

  return (
    <>
      <AuthLayout title="Dashboard" />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
          )`,
          },
        }}
      >
        <Image
          priority
          src="/__images/backdrop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Backdrop Netflix"
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000 }}>
          <Typography
            variant="h1"
            component="h1"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            DASHBOARD
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Welcome to your dashboard
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            {user?.email}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default withProtected(Dashboard);
