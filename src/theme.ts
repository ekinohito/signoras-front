import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#50b848",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#fff32a"
        },
    },
    typography: {
        fontFamily: "Montserrat",
    }
})