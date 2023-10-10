"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const CardWhyUs = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          gap: "2",
          marginTop: "1rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography
            variant="h4"
            component="h1"
            mb={2}
          >
            Why choose Super Tours?
          </Typography>
          <Typography
            variant="body1"
            align="justify"
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
            >
              The Best Way To Book Ground Transportion
            </Typography>
            SuperTours.com makes it easy for you to find and book bus tickets in
            Orlando Florida. We save you the extra trip to the bus station. With
            several options available, Super Tours seeks to serve the bus
            traveler no matter where they are in Orlando. Super Tours partners
            with safe and reliable bus companies, so you can buy tickets without
            worries.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <img
            src="/img/byus.png"
            alt="Hero Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CardWhyUs;
