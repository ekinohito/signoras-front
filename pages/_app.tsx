import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/900.css"
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../src/theme";
import {Provider} from "react-redux";
import {store} from "../src/redux/store";

function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
}

export default MyApp
