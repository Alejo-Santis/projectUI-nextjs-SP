"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CloseIcon from "@mui/icons-material/Close";

const ButtonCheck = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        endIcon={<SearchIcon />}
        size="small"
      >
        Details
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <InfoIcon onClose={() => setIsOpen(false)} />
            Details
            <IconButton
              aria-label="close"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <AirportShuttleIcon />
                Available: {row.availableBuses}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <MapIcon />
                {row.depLocation} <TrendingFlatIcon /> {row.arrLocation}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <QueryBuilderIcon />
                Times: {row.depDate} <TrendingFlatIcon /> {row.arrDate}
              </Typography>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default ButtonCheck;
