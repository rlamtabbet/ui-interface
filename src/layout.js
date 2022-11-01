import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import {
  Apps,
  GridOnTwoTone,
  InboxTwoTone,
  LightbulbTwoTone,
  SecurityTwoTone,
  ViewQuiltTwoTone,
  WidgetsTwoTone,
  ExtensionTwoTone,
  PeopleAltTwoTone,
  DvrTwoTone,
  LocalOfferTwoTone,
  NotificationsOutlined,
  HelpOutline,
  AccountCircleOutlined,
  ViewColumnTwoTone,
  HomeTwoTone
} from "@mui/icons-material";
import CredoLogoIcon from "./components/credo-logo";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CredoLogoWhiteIcon from "./components/credo-logo-white";

const drawerWidth = 175;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const appBarTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C02CA"
    }
  }
});

export default function Layout(props) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Start menu
  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorUseCase, setAnchorUseCase] = React.useState(null);
  const openUseCase = Boolean(anchorUseCase);
  const handleUseCaseOpen = (event) => {
    setAnchorUseCase(event.currentTarget);
  };
  const handleUseCaseClose = () => {
    setAnchorUseCase(null);
  };
  // End menu

  return (
    <Box>
      <ThemeProvider theme={appBarTheme}>
        <AppBar
          position="fixed"
          elevation={
            location.pathname === "/" || location.pathname === "/home" ? 0 : 2
          }
          color={
            location.pathname === "/" || location.pathname === "/home"
              ? "primary"
              : "inherit"
          }
        >
          <Toolbar variant="dense">
            <Stack flexGrow={1} spacing={1} direction="row" alignItems="center">
              <Item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Item>
              <Item>
                <RouterLink to="/home">
                  {location.pathname === "/" ||
                  location.pathname === "/home" ? (
                    <CredoLogoWhiteIcon
                      id="icon-logo"
                      width="616"
                      height="105"
                      viewBox="0 0 616 105"
                      sx={{ width: 120, height: 30 }}
                    />
                  ) : (
                    <CredoLogoIcon
                      id="icon-logo"
                      width="616"
                      height="105"
                      viewBox="0 0 616 105"
                      sx={{ width: 120, height: 30 }}
                    />
                  )}
                </RouterLink>
              </Item>
              <Item flexGrow={1}></Item>

              <Item>
                <IconButton color="inherit" onClick={handleClick}>
                  <Apps />
                </IconButton>
                <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                  <Grid container spacing={1} width={400} p={1}>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          sx={{ backgroundColor: "action.selected" }}
                          color="inherit"
                          component={RouterLink}
                          to="/"
                          onClick={handleClose}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <HomeTwoTone sx={{ color: "darkBlue" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Home
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          component={RouterLink}
                          to="/inbox"
                          onClick={handleClose}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <InboxTwoTone sx={{ color: "mediumBlue" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Task Inbox
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          component={RouterLink}
                          to="/dashboard"
                          onClick={handleClose}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <ViewQuiltTwoTone sx={{ color: "dodgerBlue" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Dashboards
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          component={RouterLink}
                          to="/use-cases"
                          onClick={handleClose}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <LightbulbTwoTone sx={{ color: "indigo" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Use Cases
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/projects/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <WidgetsTwoTone sx={{ color: "darkViolet" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Model Projects
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/datasets/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <GridOnTwoTone sx={{ color: "mediumPurple" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Datasets
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/people/users/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <PeopleAltTwoTone sx={{ color: "darkCyan" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Users
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/policy-center/packs/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <SecurityTwoTone sx={{ color: "lightSeaGreen" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Policy Center
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <Box textAlign="center" py={0.5}>
                        Admin Settings
                      </Box>
                      <Divider />
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/admin/tags/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <LocalOfferTwoTone
                              sx={{ color: "mediumVioletRed" }}
                            />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Tags
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <Button
                          color="inherit"
                          href="https://app.credo.ai/admin/integrations/"
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <ExtensionTwoTone sx={{ color: "lightCoral" }} />
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                lineHeight: 1
                              }}
                            >
                              Integrations
                            </Box>
                          </Box>
                        </Button>
                      </Item>
                    </Grid>
                  </Grid>
                </Menu>
              </Item>
              <Item>
                <IconButton color="inherit">
                  <NotificationsOutlined />
                </IconButton>
              </Item>
              <Item>
                <IconButton color="inherit">
                  <HelpOutline />
                </IconButton>
              </Item>
              <Item>
                <IconButton color="inherit">
                  <AccountCircleOutlined />
                </IconButton>
              </Item>
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              top: 50,
              padding: 0,
              boxSizing: "border-box"
            }
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <List dense>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                sx={{
                  mr: 2,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  }
                }}
                to="/home"
                selected={location.pathname === "/home"}
              >
                <ListItemIcon sx={{ ml: -1, mr: -3, color: "inherit" }}>
                  <HomeTwoTone />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                sx={{
                  mr: 2,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  }
                }}
                to="/inbox"
                selected={location.pathname.substring(0, 6) === "/inbox"}
              >
                <ListItemIcon sx={{ ml: -1, mr: -3, color: "inherit" }}>
                  <InboxTwoTone />
                </ListItemIcon>
                <ListItemText primary="My Tasks" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                sx={{
                  mr: 2,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "primary.main",
                    color: "background.paper"
                  }
                }}
                to="/team"
                selected={location.pathname.substring(0, 6) === "/team"}
              >
                <ListItemIcon sx={{ ml: -1, mr: -3, color: "inherit" }}>
                  <PeopleAltTwoTone />
                </ListItemIcon>
                <ListItemText primary="Assigned Tasks" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main
          open={open}
          sx={{
            top: 48,
            height: "calc(100vh - 48px)",
            position: "relative",
            bgcolor: "action.hover",
            overflow: "hidden"
          }}
        >
          {props.children}
        </Main>
      </Box>
    </Box>
  );
}
