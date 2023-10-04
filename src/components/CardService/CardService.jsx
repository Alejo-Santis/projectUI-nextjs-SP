"use client";

import { Card, CardContent, CardMedia, Icon, Typography } from "@mui/material";

const CardService = ({ text, icon }) => {
  return (
    <Card
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: "1rem",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 3 0 0px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 50,
          width: {
            xs: 250,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon>{icon}</Icon>
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          align="center"
          variant="h4"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1rem",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardService;
