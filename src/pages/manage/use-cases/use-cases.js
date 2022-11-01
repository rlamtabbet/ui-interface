import * as React from "react";
import { Route, useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import {
  Close,
  Search,
  Speed,
  BalanceTwoTone,
  Sort,
  Add,
  Filter,
  FilterList
} from "@mui/icons-material";
import {
  Button,
  Card,
  Fab,
  FormControl,
  Icon,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";

// Start steps
const tasks = [
  {
    title: "AI Recruiting Product",
    from: "Fei Simmons",
    description:
      "HR will use the software to automate repetitive tasks in order to become more efficient, automate candidate assessment and remove human bias, coaching and engaging employees to enable personal growth.",
    date: "Mar 02 9:34 AM",
    due: "tomorrow",
    useCase: "AI Recruiting Software",
    link: "/use-cases/ai-recruiting-product",
    icon: "person_pin",
    fairness: "high",
    performance: "low"
  },
  {
    title: "Credit Risk Modeler",
    from: "Fei Simmons",
    description:
      "This AI use case predicts credit card default in the following month using previous payment history, along with other factors. While this is useful to us in and of itself, the main model is also input to mitigation strategies, as one of the inputs to other financial models.",
    date: "Jan 18 9:34 AM",
    due: "Overdue",
    useCase: "AI Recruiting Software",
    link: "/use-cases/credit-risk-modeler",
    icon: "credit_score",
    fairness: "moderate",
    performance: "high"
  },
  {
    title: "Content Moderation",
    from: "Sam Mavis",
    description:
      "Content moderation is the process of removing objectionable content. Moderators review flagged content, whether it is in the form of comments, posts or entire conversations. Today's social media tends to try and be as open as possible, but there are times when we want our platform to be a place where everyone feels safe. By removing abusive or harmful...",
    date: "Jan 20 11:15 AM",
    due: "tomorrow",
    useCase: "AI Recruiting Software",
    link: "/use-cases/content-moderation",
    icon: "lightbulb",
    fairness: "moderate",
    performance: "moderate"
  },
  {
    title: "Product Recommendations",
    from: "Fei Simmons",
    description:
      "Our Recommendation algorithms are developed to provide personalized and customized recommendations. These product recommendations give consumers the best options possible and help inform the purchasing decision. We have a refined process that allows us to quickly tailor the algorithm to our customer's needs, ensuring the process is tailored...",
    date: "Jan 21 9:34 AM",
    due: "",
    useCase: "Credit Default Prediction",
    link: "/use-cases/product-recommendations",
    icon: "lightbulb",
    fairness: "low",
    performance: "low"
  },
  {
    title: "Facial Detection Suite",
    from: "Sam Mavis",
    description:
      "Facial Detect Suite model is an integrated device that contains the following modules: Facial Detection System (FDS) with Advanced Anti-Spoofing module, Eye movement Detection Module (EDM), Eyelid Detection Module (ELD) and Tongue movement Detection Module (TDM)...",
    date: "Jan 21 12:03 PM",
    due: "",
    useCase: "AI Recruiting Software",
    link: "/use-cases/facial-detection-suite",
    icon: "lightbulb",
    fairness: "low",
    performance: "high"
  },
  {
    title: "Retail Demographics",
    from: "Fei Simmons",
    description:
      "The Retail Demographics model identifies and measures consumers' demographic profiles and attributes, including geographic location, age, income, gender, marital status, children living at home, race/ethnicity, education, occupation, etc. The data is captured each time the consumer buys a product or service from the retailer.",
    date: "Jan 21 4:32 PM",
    due: "",
    useCase: "Facial Recognition",
    link: "/use-cases/retail-demographics",
    icon: "lightbulb",
    fairness: "high",
    performance: "high"
  }
];

export default function ManageUsecases() {
  const location = useLocation();

  // Start more menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [anchorElSort, setAnchorElSort] = React.useState(null);
  const open = Boolean(anchorElSort);
  const handleClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElSort(null);
  };

  const [anchorElFilter, setAnchorElFilter] = React.useState(null);
  const openFilter = Boolean(anchorElFilter);
  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };
  // End more menu

  // Start toggle
  const [useCaseDetails, setUseCaseDetails] = React.useState(true);
  const handleUseCaseDetails = () => {
    setUseCaseDetails(!useCaseDetails);
  };
  // End toggle

  return (
    <Grid
      container
      sx={{
        bgcolor: "background.paper",
        height: "calc(100vh - 50px)",
        position: "relative"
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          height: "calc(100vh - 50px)",
          paddingBottom: 15,
          overflow: "auto"
        }}
      >
        <Stack spacing={1}>
          <Item
            sx={{
              px: 2,
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              zIndex: 3
            }}
          >
            <Box display="flex" alignItems="center" height={50}>
              <Box flexGrow={1}>Use Cases</Box>
              <Box>
                <Fab
                  size="small"
                  color="secondary"
                  sx={{
                    height: 32,
                    width: 32,
                    minHeight: 32,
                    boxShadow: "none"
                  }}
                >
                  <Add fontSize="small" />
                </Fab>
              </Box>
            </Box>
            <Divider sx={{ mx: -2 }} />
          </Item>
          <Item
            sx={{
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
              zIndex: 3
            }}
          >
            <Box display="flex" alignItems="center" p={1}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                size="small"
              />
              <IconButton size="small" onClick={handleClick} sx={{ ml: 1 }}>
                <Sort />
              </IconButton>
              <Menu anchorEl={anchorElSort} open={open} onClose={handleClose}>
                <ListSubheader>Sort Options</ListSubheader>
                <MenuItem onClick={handleClose}>Name</MenuItem>
                <MenuItem onClick={handleClose}>Risk</MenuItem>
                <MenuItem onClick={handleClose}>Create Date</MenuItem>
              </Menu>
              <IconButton
                size="small"
                onClick={handleClickFilter}
                sx={{ ml: 1 }}
              >
                <FilterList />
              </IconButton>
              <Menu
                anchorEl={anchorElFilter}
                open={openFilter}
                onClose={handleCloseFilter}
              >
                <ListSubheader>Filter Options</ListSubheader>
                <MenuItem onClick={handleCloseFilter}>Filter by Owner</MenuItem>
                <MenuItem onClick={handleCloseFilter}>
                  Filter by High Risk
                </MenuItem>
                <MenuItem onClick={handleCloseFilter}>
                  Filter by Moderate Risk
                </MenuItem>
                <MenuItem onClick={handleCloseFilter}>
                  Filter by Low Risk
                </MenuItem>
              </Menu>
            </Box>
            <Divider sx={{ mx: -2 }} />
          </Item>
          <Item p={1}>
            <List dense disablePadding sx={{ mt: -1 }}>
              {tasks.map((task) => (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={RouterLink}
                      sx={{
                        "&.Mui-selected": {
                          bgcolor: "primary.main",
                          color: "background.paper",
                          borderRadius: 2
                        },
                        "&.Mui-selected:hover": {
                          bgcolor: "primary.main",
                          color: "background.paper",
                          borderRadius: 2
                        }
                      }}
                      to={task.link}
                      selected={location.pathname === task.link}
                    >
                      <ListItemIcon sx={{ mr: -2 }}>
                        <Icon>{task.icon}</Icon>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box fontSize="body2.fontSize" fontWeight="bold">
                                {task.title}
                              </Box>
                            </Box>
                            <Box
                              fontSize="caption.fontSize"
                              color="text.secondary"
                            >
                              {task.date} - {task.from}
                            </Box>
                            <Box fontSize="caption.fontSize">
                              {task.description}
                            </Box>
                          </>
                        }
                      />
                      <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
                        <Card
                          variant="outlined"
                          sx={{
                            p: 1,
                            textAlign: "center",
                            flexGrow: 1,
                            width: 150
                          }}
                        >
                          <Box display="flex" justifyContent="center">
                            <Box
                              display="flex"
                              mx="auto"
                              sx={{
                                flexDirection: {
                                  xs: "column",
                                  lg: "row"
                                }
                              }}
                            >
                              <Box display="flex" justifyContent="center">
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 2,
                                    p: 0.5,
                                    mr: 1
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor:
                                        task.fairness === "low"
                                          ? "success.light"
                                          : task.fairness === "moderate"
                                          ? "warning.light"
                                          : task.fairness === "high"
                                          ? "error.dark"
                                          : null,
                                      borderRadius: 2,
                                      px: 1.5,
                                      py: 0.5
                                    }}
                                  >
                                    <BalanceTwoTone
                                      sx={{ mr: 0.5 }}
                                      fontSize="small"
                                    />
                                    <Typography
                                      variant="body2"
                                      sx={{ textTransform: "capitalize" }}
                                    >
                                      {task.fairness}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    lg: "left"
                                  }
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  fontWeight="bold"
                                  color="text.secondary"
                                >
                                  Fairness Risk
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                        <Card
                          variant="outlined"
                          sx={{
                            p: 1,
                            textAlign: "center",
                            flexGrow: 1,
                            width: 150
                          }}
                        >
                          <Box display="flex" justifyContent="center">
                            <Box
                              display="flex"
                              mx="auto"
                              sx={{
                                flexDirection: {
                                  xs: "column",
                                  lg: "row"
                                }
                              }}
                            >
                              <Box display="flex" justifyContent="center">
                                <Box
                                  sx={{
                                    display: "flex",

                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 2,
                                    p: 0.5,
                                    mr: 1
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      textAlign: "center",
                                      color: "white",
                                      backgroundColor:
                                        task.performance === "low"
                                          ? "success.light"
                                          : task.performance === "moderate"
                                          ? "warning.light"
                                          : task.performance === "high"
                                          ? "error.dark"
                                          : null,
                                      borderRadius: 2,
                                      px: 1.5,
                                      py: 0.5
                                    }}
                                  >
                                    <Speed sx={{ mr: 0.5 }} fontSize="small" />
                                    <Typography
                                      variant="body2"
                                      sx={{ textTransform: "capitalize" }}
                                    >
                                      {task.performance}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  textAlign: {
                                    xs: "center",
                                    lg: "left"
                                  }
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  fontWeight="bold"
                                  color="text.secondary"
                                >
                                  Performance Risk
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Stack>
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ mx: 2 }} />
                </>
              ))}
            </List>
          </Item>
        </Stack>
      </Grid>
    </Grid>
  );
}
