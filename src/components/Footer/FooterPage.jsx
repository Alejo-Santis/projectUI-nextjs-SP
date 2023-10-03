"use client";

import { Box, Divider, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Link from "next/link";
import Image from "next/image";

const FooterPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222", // Fondo oscuro
        color: "white", // Texto blanco
        padding: "2rem",
        textAlign: "center",
      }}
      display="flex"
      flexDirection={{
        xs: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
          <Typography
            variant="body1"
            fontWeight="bold"
          >
            Follow Us
          </Typography>
          <IconButton
            color="info"
            href="https://www.facebook.com/pg/busmiamiorlando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com/Supertours_Orl?lang=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="error"
            href="https://www.instagram.com/supertours/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              m: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: "1rem",
              }}
            >
              <ContactPhoneIcon />
              <Typography fontSize={12}>Orlando (407) 370 3001</Typography>
              <Typography fontSize={12}>Miami (305) 677 2676</Typography>
              <a
                href="mailto:reservations@supertours.com"
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  fontSize: "12px",
                }}
              >
                <AttachEmailIcon />
                reservations@supertours.com
              </a>
            </Box>
            <Box></Box>
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box>
        <Typography
          variant="body1"
          fontSize={12}
        >
          ©2023 Super Tours Inc. Copyright © 1989 - 2023 Super Tours Inc. All
          Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterPage;
