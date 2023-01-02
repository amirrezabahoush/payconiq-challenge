import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import StyledAppBar from "./Header.styled";
import ActiveMenuLink from "components/ActiveMenu/ActiveMenu.styled";

const pages = [
  { title: "CURRENCY CONVERTER", pathname: "/" },
  { title: "VIEW CONVERSION HISTORY", pathname: "/conversion-history" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const { pathname } = useLocation();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static" color="default">
      <Container>
        <Toolbar disableGutters={true}>
          <Typography
            variant="h6"
            noWrap={true}
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "#404040",
              textDecoration: "none",
            }}
          >
            Currency<span className="font-weight-bold">Exchange</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted={true}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}>
                  <ActiveMenuLink
                    className={pathname === page.pathname ? "active" : ""}
                    to={page.pathname}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </ActiveMenuLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap={true}
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "#404040",
              textDecoration: "none",
            }}
          >
            Currency<span className="font-weight-bold">Exchange</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <ActiveMenuLink
                className={pathname === page.pathname ? "active" : ""}
                to={page.pathname}
                key={page.title}
              >
                <Button sx={{ my: 2 }}>
                  {page.title}
                </Button>
              </ActiveMenuLink>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap={true}
            component="a"
            href="/"
            sx={{
              fontSize: "16px",
              color: "#009688",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Logout
          </Typography>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Header;
