import React from "react";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const lightTheme = createTheme({
  status: {
    danger: orange[500],
  },
});

export const darkTheme = createTheme({
  status: {
    danger: orange[500],
  },
});
