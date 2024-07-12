import { createTheme } from "@mui/material";

const MUITheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "black",
          border: "1px solid #3B53AD",
          borderRadius: "4px",
          margin: "0px",
          padding: "8px",
          boxShadow: "0px 0px 0px 0px",
          "&:before": {
            border: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            border: "none",
          },
          "&.Mui-focused:before": {
            border: "none",
          },
          "&.Mui-focused:after": {
            border: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "20px",
          width: "400px",
        },
      },
    },
    // define more themes here
  },
});

export default MUITheme;
