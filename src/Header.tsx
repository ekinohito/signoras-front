import React from 'react'
import {AppBar, Box, Button, Container, IconButton, Link, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import logo from "../public/assets/logo.png"
import Image from "next/image"
import NextLink from "next/link"

export default function Header() {
    return <AppBar position="sticky">
        <Container sx={{px: "0 !important"}}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{flexGrow: 1, textTransform: "uppercase", fontWeight: "700"}}>
                    Signoras
                </Typography>
                <NextLink href="/" passHref><Link sx={{mx: 2, textDecoration: "none", display: {xs: "none", sm: "unset"}}} variant="h6" color="secondary">Главная</Link></NextLink>
                <NextLink href="/eco" passHref><Link sx={{mr: 2, textDecoration: "none", display: {xs: "none", sm: "unset"}}} variant="h6" color="secondary">Экология</Link></NextLink>
                <Image src={logo} alt="logo" width="50" height="50"/>
            </Toolbar>
        </Container>
    </AppBar>
}
