import React, {MouseEventHandler} from 'react'
import {AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
import logo from "../public/assets/logo.png"
import Image from "next/image"
import NextLink from "next/link"

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    const handleClick: MouseEventHandler = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <AppBar position="sticky">
        <Container sx={{px: "0 !important"}}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{flexGrow: 1, textTransform: "uppercase", fontWeight: "700"}}>
                    Signoras
                </Typography>
                <NextLink href="/" passHref><Link sx={{mx: 2, textDecoration: "none", display: {xs: "none", sm: "initial"}}} variant="h6" color="secondary">Главная</Link></NextLink>
                <NextLink href="/eco" passHref><Link sx={{mr: 2, textDecoration: "none", display: {xs: "none", sm: "initial"}}} variant="h6" color="secondary">Экология</Link></NextLink>
                <IconButton onClick={handleClick} sx={{ width: "51px", height: "51px", my: "auto", display: {xs: "initial", sm: "none"}}}><MenuIcon color="secondary" fontSize="large"/></IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <NextLink href="/" passHref><Link sx={{mx: 2, textDecoration: "none"}} variant="h6">Главная</Link></NextLink></MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NextLink href="/eco" passHref><Link sx={{mx: 2, textDecoration: "none"}} variant="h6">Экология</Link></NextLink></MenuItem>
                </Menu>
                <Image src={logo} alt="logo" width="50" height="50"/>
            </Toolbar>
        </Container>
    </AppBar>
}
