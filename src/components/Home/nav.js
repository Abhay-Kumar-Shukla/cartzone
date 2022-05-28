import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import plist from './data.json';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MenuAppBar() {
  const [auth1, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/profile')
  };

  const logout = () =>{
      signOut(auth)
      navigate('/')
      console.log("navigating to login")
  }

  return (
    <Box sx={{ flexGrow: 1, alignItems: "center", position: "relative", zIndex: "2000" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ borderRadius: "8px" }}
            onClick={() => window.location = "/"}
          >
            <img src="assets/logo.png" style={{ maxHeight: "50px" }} />
          </IconButton>

          <div style={{ width: "50%", display: "flex", flexFlow: "row nowrap", alignItems: "center" }}>
            <Autocomplete
              freeSolo
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
              options={plist.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Type to search" />}
            />
            <IconButton>
              <SearchIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </div>

          {auth1 && (
            <div>
              <Link href="#contact-socials" sx={{ color: "#eee" }}>Contact Us</Link>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                sx={{ zIndex: "5000" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>Log out</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
