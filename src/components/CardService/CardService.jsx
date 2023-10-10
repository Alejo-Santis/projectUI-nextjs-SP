"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import RoomIcon from "@mui/icons-material/Room";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const dataService = [
  {
    title: "GPS System",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi rem, non animi atque cumque.",
    icon: <RoomIcon />,
  },
  {
    title: "WIFI Access",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi rem, non animi atque cumque.",
    icon: <WifiIcon />,
  },
  {
    title: "Movies on Board",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi rem, non animi atque cumque.",
    icon: <LocalMoviesIcon />,
  },
  {
    title: "Power Equipped",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi rem, non animi atque cumque.",
    icon: <ElectricalServicesIcon />,
  },
  {
    title: "Air Conditioner",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sequi rem, non animi atque cumque.",
    icon: <AcUnitIcon />,
  },
];

const CardService = () => {
  return (
    <Container
      maxWidth="md"
      component="main"
    >
      <Grid
        container
        spacing={5}
      >
        {dataService.map((service) => (
          <Grid
            item
            key={service.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              display="flex"
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
              >
                {service.icon}
              </Box>
              <CardHeader
                component="h2"
                variant="h3"
                title={service.title}
                titleTypographyProps={{ align: "center" }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    align="center"
                  >
                    {service.body}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="outlined"
                >
                  Learn More...
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default CardService;
