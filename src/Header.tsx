import React from 'react'
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import logo from "../public/assets/logo.png"
import Image from "next/image"

export default function Header() {
    return <AppBar position="sticky">
        <Container sx={{px: "0 !important"}}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{flexGrow: 1, textTransform: "uppercase", fontWeight: "700"}}>
                    Signoras
                </Typography>
                <Image src={logo} alt="logo" width="50" height="50"/>
            </Toolbar>
        </Container>
    </AppBar>
}
