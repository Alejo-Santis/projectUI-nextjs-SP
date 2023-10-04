"use client";

import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        mt={{
          xs: "1rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          p={2}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
          >
            Where would you like to go?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            mt={2}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            reprehenderit pariatur numquam officiis temporibus iusto, architecto
            laboriosam, quibusdam natus quod in quasi animi qui accusamus saepe
            perspiciatis ut distinctio illum! Minus, reiciendis? Voluptas vitae
            temporibus voluptatem nihil pariatur dolor, dolores repellendus
            ducimus odit eligendi beatae facilis maiores, harum, cum illo.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <img
            src="/img/imageHero.jpg" // Asegúrate de que la ruta sea correcta
            alt="Hero Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Hero;
