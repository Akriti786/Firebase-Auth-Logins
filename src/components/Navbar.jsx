// src/components/Navbar.jsx
import { useAuth } from "../context/AuthContext";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          MyApp
        </Typography>

        <Stack direction="row" spacing={2}>
          {!user ? (
            <>
              <Button
                color="inherit"
                component={RouterLink}
                to="/login"
                variant="text"
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/signup"
                variant="text"
              >
                Signup
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={logout} variant="text">
              Logout
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
