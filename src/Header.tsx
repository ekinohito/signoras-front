import React from 'react'
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

export default function Header() {
    return <AppBar position="sticky">
        <Container>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <Menu/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Signoras
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </Container>
    </AppBar>
}
