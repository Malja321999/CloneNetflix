import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { SignIn, GetSignInErrorMessage } from "../services/firebase";
import withUnprotected from "../hoc/withUnprotected";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      await SignIn(email, password);
    } catch (error) {
      const message = GetSignInErrorMessage(error.code);
      console.log(error);
      console.log(message);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                type="email"
                name="email"
                label="Email atau nomor telepon"
                variant="filled"
                {...register("email", { required: true })}
              />
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
                {...register("password", { required: true, minLength: 8 })}
              />
            </FormControl>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1 }}
        >
          <Box>
            <Checkbox />
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Typography variant="caption" component="a" href="#">
            Need help ?
          </Typography>
        </Grid>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Image
            src="/__images/facebook.png"
            height={20}
            width={20}
            layout="fixed"
            alt="Facbook Login"
          />
          <Typography variant="caption" component="a" href="#" sx={{ ml: 1 }}>
            Login with Facebook
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" component="span">
            New to Netflix?
          </Typography>
          <Typography variant="body1" color="primary" component="a" href="#">
            &nbsp;Sign up now.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
          </Typography>
          <Typography variant="caption" color="primary" component="a" href="#">
            Learn more.
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default withUnprotected(Login);
