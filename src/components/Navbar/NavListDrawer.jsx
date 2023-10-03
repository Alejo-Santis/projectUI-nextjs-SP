"use client";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

export default function NavListDrawer({ arrayNavLinks, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <CloseIcon
                sx={{ width: "40px", height: "40px", color: "gray" }}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {arrayNavLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                href={item.path}
                component={Link}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
