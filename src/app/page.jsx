"use client";

import CardService from "@/components/CardService/CardService";
import Filter from "@/components/Filter/Filter";
import Hero from "@/components/Hero/Hero";
import WaveBackground from "@/components/WaveBackground/WaveBackground";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Typography } from "@mui/material";
import TableSchedule from "@/components/TableSchedule/TableSchedule";
import CardWhyUs from "@/components/CardWhyUs/CardWhyUs";
import FooterPage from "@/components/Footer/FooterPage";

export default function Home() {
  return (
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
          variant="h3"
          align="center"
          mb="0.5rem"
          fontWeight="bold"
        >
          Services
        </Typography>
        <CardService />
        <CardWhyUs />
      </LocalizationProvider>
      <FooterPage />
    </main>
  );
}
