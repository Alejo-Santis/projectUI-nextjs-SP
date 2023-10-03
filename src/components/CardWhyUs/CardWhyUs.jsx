import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const CardWhyUs = () => {
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent={{
        xs: "space-evenly",
        sm: "space-between",
        md: "center",
      }}
      gap={{
        xs: "9rem",
        sm: "5rem",
      }}
      mt={4}
      mb={4}
    >
      <Grid
        item
        xs={12}
        sm={4}
      >
        <Image
          src="/img/byus.png"
          alt="why us"
          width={450}
          height={450}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Why choose Super Tours?
        </Typography>
        <Typography
          variant="body2"
          align="justify"
        >
          <b>The Best Way To Book Ground Transportion</b>
          SuperTours.com makes it easy for you to find and book bus tickets in
          Orlando Florida. We save you the extra trip to the bus station. With
          several options available, Super Tours seeks to serve the bus traveler
          no matter where they are in Orlando. Super Tours partners with safe
          and reliable bus companies, so you can buy tickets without worries.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default CardWhyUs;
