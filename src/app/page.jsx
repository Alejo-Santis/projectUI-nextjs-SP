"use client";

import CardService from "@/components/CardService/CardService";
import Filter from "@/components/Filter/Filter";
import Hero from "@/components/Hero/Hero";
import WaveBackground from "@/components/WaveBackground/WaveBackground";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RoomIcon from "@mui/icons-material/Room";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box, Divider, Typography } from "@mui/material";
import TableSchedule from "@/components/TableSchedule/TableSchedule";
import CardWhyUs from "@/components/CardWhyUs/CardWhyUs";
import FooterPage from "@/components/Footer/FooterPage";

export default function Home() {
  return (
    <>
      <main>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Hero />
          <Filter />
          <Box maxHeight="200px">
            <WaveBackground
              style={{
                position: "absolute",
                opacity: "0.4",
                bottom: "0",
                left: "0",
                width: "100%",
                zIndex: "-1",
              }}
            />
          </Box>
          <Typography
            variant="h4"
            align="center"
            mb="0.5rem"
            fontWeight="bold"
          >
            Services
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              xs: "column",
              sm: "row",
              md: "row",
            }}
            sx={{
              position: "relative",
              top: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <CardService
              icon={<RoomIcon />}
              text="GPS System"
            />
            <CardService
              icon={<WifiIcon />}
              text="WIFI Access"
            />
            <CardService
              icon={<LocalMoviesIcon />}
              text="Movies Board"
            />
            <CardService
              icon={<ElectricalServicesIcon />}
              text="Power Equipped"
            />
            <CardService
              icon={<AcUnitIcon />}
              text="Air Conditioner"
            />
          </Box>
          <CardWhyUs />
        </LocalizationProvider>
      </main>
      <FooterPage />
    </>
  );
}
