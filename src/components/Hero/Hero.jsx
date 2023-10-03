import { Container, Grid, Paper } from "@mui/material";

const Hero = () => {
  return (
    <Paper
      sx={{
        height: {
          xs: "50vh",
          md: "70vh",
        },
        backgroundImage: "url(/img/hero-md.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.8",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100%",
            width: "0 auto",
            paddingTop: "4rem",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              width: "60%",
              height: "100",
            }}
            src="/img/logo.png"
            alt="logo"
          />
        </Grid>
      </Container>
    </Paper>
  );
};
export default Hero;
