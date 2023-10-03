"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ButtonCheck from "./ButtonCheck";

function createData(
  id,
  availableBuses,
  depLocation,
  depDate,
  arrLocation,
  arrDate
) {
  return { id, availableBuses, depLocation, depDate, arrLocation, arrDate };
}

const rows = [
  createData(
    1,
    5,
    "Walt Disney Wordl",
    "6:00 AM",
    "Lake Worth/West Palm Beach",
    "9:40 AM"
  ),
  createData(
    2,
    10,
    "Universal Studios Florida",
    "6:30 AM",
    "Fort Laudedale/Pompano Beach",
    "10:00 AM"
  ),
  createData(
    3,
    8,
    "Orlando Terminal",
    "7:00 AM",
    "Hollywood/Ft.Lauderdale",
    "10:40 AM"
  ),
  createData(
    4,
    9,
    "Kissimmee, Walmart Parking",
    "7:15 AM",
    "North MIami Beach",
    "11:30 AM"
  ),
  createData(
    5,
    12,
    "Fort Pierce Plaza",
    "8:45 AM",
    "South Miami Beach",
    "11:50 AM"
  ),
];

const TableSchedule = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          maxWidth: 700,
          border: "1px solid #ccc",
          borderRadius: "10px",
          margin: "15px auto",

          alignContent: "center",
        }}
        aria-label="Schedule bus and routes Table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                  fontWeight: "bold",
                },
              }}
            >
              <DirectionsBusIcon />
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                  fontWeight: "bold",
                },
              }}
            >
              Departure Location
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                  fontWeight: "bold",
                },
              }}
            >
              Departure Date
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                  fontWeight: "bold",
                },
              }}
            >
              Arrival Location
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 14,
                  fontWeight: "bold",
                },
              }}
            >
              Arrival Date
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                align="center"
                sx={{
                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 14,
                  },
                }}
              >
                {row.availableBuses}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 14,
                  },
                }}
              >
                {row.depLocation}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 14,
                  },
                }}
              >
                {row.depDate}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 14,
                  },
                }}
              >
                {row.arrLocation}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 14,
                  },
                }}
              >
                {row.arrDate}
              </TableCell>
              <TableCell align="center">
                <ButtonCheck row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableSchedule;
