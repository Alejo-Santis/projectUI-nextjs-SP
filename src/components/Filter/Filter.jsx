"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

const Filter = () => {
  const [value, setValue] = useState({
    value: new Date(),
    valueTo: new Date(),
    selected: -1,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [openPoppover, setOpenPopover] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenPopover(!openPoppover);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenPopover(false);
  };

  const handleIncrement = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else {
      setChildren(children + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 0) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "guest-picker-popover" : undefined;

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
        justifyContent="center"
        alignContent="center"
        marginY="0.2rem"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="origin"
            label="Origin"
            fullWidth
            placeholder="Leaving from..."
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton>
              <SwapHorizIcon />
            </IconButton>
          </Box>
          <TextField
            id="destination"
            fullWidth
            label="Destination"
            placeholder="Going to..."
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{
            xs: "row",
            md: "row",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              xs: "row",
              sm: "row",
              md: "row",
            }}
            gap="0.5rem"
          >
            <DatePicker
              label="Departure Date"
              views={["year", "month", "day"]}
              value={value.value}
              onChange={(newValue) => setValue({ ...value, newValue })}
              renderInput={(params) => <TextField {...params} />}
              required
            />
            <DatePicker
              label="Destination Date"
              views={["year", "month", "day"]}
              value={value.valueTo}
              onChange={(newValue) => setValue({ ...value, newValue })}
              renderInput={(params) => <TextField {...params} />}
              required
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={{
            xs: "0.2rem",
            sm: "0.3rem",
            md: "0.5rem",
          }}
        >
          <TextField
            fullWidth={{
              xs: true,
              sm: true,
              md: false,
            }}
            label="¨Passengers"
            variant="outlined"
            value={`${adults} Adults, ${children} Children`}
            onClick={handleClick}
            required
          />
          <Popover
            id={id}
            open={openPoppover}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Box
              sx={{
                p: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Adults</span>
                <IconButton
                  color="primary"
                  onClick={() => handleIncrement("adults")}
                >
                  <AddIcon />
                </IconButton>
                <span>{adults}</span>
                <IconButton
                  color="primary"
                  onClick={() => handleDecrement("adults")}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Children</span>
                <IconButton
                  color="primary"
                  onClick={() => handleIncrement("children")}
                >
                  <AddIcon />
                </IconButton>
                <span>{children}</span>
                <IconButton
                  color="primary"
                  onClick={() => handleDecrement("children")}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            </Box>
          </Popover>
          <Box>
            <Button
              variant="contained"
              color="error"
              fullWidth
              startIcon={<SearchIcon />}
              sx={{
                p: "1rem 0.8rem 1rem 0.8rem",
                m: "0 0.02rem",
              }}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Filter;
