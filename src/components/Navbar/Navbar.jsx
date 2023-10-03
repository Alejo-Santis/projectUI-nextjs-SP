"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ arrayNavLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              },
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
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {arrayNavLinks.map((item) => (
              <Link
                href={item.path}
                key={item.title}
              >
                <Button
                  variant=""
                  sx={{ color: "#fff", fontWeight: "bold", gap: "2px" }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
        }}
      >
        <NavListDrawer
          arrayNavLinks={arrayNavLinks}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
