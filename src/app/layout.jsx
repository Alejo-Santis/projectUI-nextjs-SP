import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import InfoIcon from "@mui/icons-material/Info";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { CssBaseline } from "@mui/material";

export const metadata = {
  title: "Super Tours",
  description: "Tours to Orlando and miami",
  keywords: "booking, tours, buses, transport",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold"],
  subsets: ["latin"],
});

const arrayNavLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Services",
    path: "/services",
    icon: <AirlineSeatReclineExtraIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <PersonAdd />,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/img/icon.png"
        sizes="any"
      />
      <body className={roboto.className}>
        <CssBaseline />
        {/* <Navbar arrayNavLinks={arrayNavLinks} /> */}
        {children}
      </body>
    </html>
  );
}
