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

import { ArrowBack, ChevronRight, Close, Search } from "@mui/icons-material";
import {
  Icon,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  TextField,
  Link
} from "@mui/material";

import ManageUsecases from "./use-cases";
import AIRecruitingProduct from "./ai-recruiting-product";
import CreditRiskModeler from "./credit-risk-modeler";

// Start steps
const tasks = [
  {
    title: "AI Recruiting Product",
    from: "Fei Simmons",
    description:
      "HR will use the software to automate repetitive tasks in order to become more efficient, automate...",
    date: "Mar 02 9:34 AM",
    due: "tomorrow",
    useCase: "AI Recruiting Software",
    link: "/use-cases/ai-recruiting-product",
    icon: "person_pin"
  },
  {
    title: "Credit Risk Modeler",
    from: "Fei Simmons",
    description:
      "This AI use case predicts credit card default in the following month using previous payment history..",
    date: "Jan 18 9:34 AM",
    due: "Overdue",
    useCase: "AI Recruiting Software",
    link: "/use-cases/credit-risk-modeler",
    icon: "credit_score"
  },
  {
    title: "Content Moderation",
    from: "Sam Mavis",
    description:
      "Content moderation is the process of removing objectionable content. Moderators review flagged...",
    date: "Jan 20 11:15 AM",
    due: "tomorrow",
    useCase: "AI Recruiting Software",
    link: "/use-cases/content-moderation",
    icon: "lightbulb"
  },
  {
    title: "Product Recommendations",
    from: "Fei Simmons",
    description:
      "Our Recommendation algorithms are developed to provide personalized and customized recommendations...",
    date: "Jan 21 9:34 AM",
    due: "",
    useCase: "Credit Default Prediction",
    link: "/use-cases/product-recommendations",
    icon: "lightbulb"
  },
  {
    title: "Facial Detection Suite",
    from: "Sam Mavis",
    description:
      "Facial Detect Suite model is an integrated device that contains the following modules...",
    date: "Jan 21 12:03 PM",
    due: "",
    useCase: "AI Recruiting Software",
    link: "/use-cases/facial-detection-suite",
    icon: "lightbulb"
  },
  {
    title: "Retail Demographics",
    from: "Fei Simmons",
    description:
      "The Retail Demographics model identifies and measures consumers' demographic...",
    date: "Jan 21 4:32 PM",
    due: "",
    useCase: "Facial Recognition",
    link: "/use-cases/retail-demographics",
    icon: "lightbulb"
  }
];

export default function ManageUseCase() {
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
  // End more menu

  // Start toggle
  const [useCaseDetails, setUseCaseDetails] = React.useState(false);
  const handleUseCaseDetails = () => {
    setUseCaseDetails(!useCaseDetails);
  };
  // End toggle

  return (
    <Grid
      container
      sx={{
        height: "calc(100vh - 50px)",
        position: "relative"
      }}
    >
      {useCaseDetails ? (
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          sx={{
            bgcolor: "background.paper",
            borderRight: "1px solid rgba(0,0,0,0.1)",
            height: "calc(100vh - 50px)",
            overflow: "auto"
          }}
        >
          <Item>
            <Stack spacing={1} divider={<Divider />}>
              <Item
                sx={{
                  px: 2,
                  pt: 1,
                  position: "sticky",
                  top: 0,
                  bgcolor: "background.paper",
                  zIndex: 3
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box ml={-1}>
                    <IconButton
                      size="small"
                      component={RouterLink}
                      to="/use-cases"
                    >
                      <ArrowBack fontSize="inherit" />
                    </IconButton>
                  </Box>
                  <Box flexGrow={1}>Manage Use Cases</Box>
                  <Box>
                    <IconButton size="small" onClick={handleUseCaseDetails}>
                      <Close fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
              <Item
                sx={{
                  px: 1,
                  position: "sticky",
                  top: 0,
                  bgcolor: "background.paper",
                  zIndex: 3
                }}
              >
                <Box display="flex" alignItems="center">
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
                </Box>
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
                                  <Box
                                    fontSize="body2.fontSize"
                                    fontWeight="bold"
                                  >
                                    {task.title}
                                  </Box>
                                  <Box fontSize="caption.fontSize">
                                    {task.date}
                                  </Box>
                                </Box>
                                <Box fontSize="13px">
                                  requested by {task.from}
                                </Box>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Box fontSize="caption.fontSize">
                                    {task.description}
                                  </Box>
                                  {task.due === "Overdue" ? (
                                    <Box
                                      fontSize="caption.fontSize"
                                      color="rgba(255, 109, 109, 0.95)"
                                      fontWeight="bold"
                                    >
                                      Overdue
                                    </Box>
                                  ) : null}
                                </Box>
                              </>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider sx={{ mx: 2 }} />
                    </>
                  ))}
                </List>
              </Item>
            </Stack>
          </Item>
        </Grid>
      ) : null}
      <Grid
        item
        xs={useCaseDetails ? 8 : 12}
        sm={useCaseDetails ? 8 : 12}
        md={useCaseDetails ? 8 : 12}
        sx={{
          height: "calc(100vh - 50px)",
          paddingBottom: 15,
          overflow: "auto"
        }}
      >
        <Item
          sx={{
            px: 2,
            position: "sticky",
            top: 0,
            bgcolor: "background.paper",
            zIndex: 3,
            height: 50
          }}
        >
          <Box display="flex" flexGrow={1} alignItems="center">
            <Link
              color="text.primary"
              underline="hover"
              sx={{ cursor: "pointer" }}
              component={RouterLink}
              to="/use-cases"
            >
              Use Cases
            </Link>
            <Box color="text.secondary" mb={-1}>
              <ChevronRight />
            </Box>
            <Box color="text.secondary">AI Recruiting Product</Box>
          </Box>
          <Divider sx={{ mx: -2 }} />
        </Item>
        <Item p={3}>
          <Route
            exact
            path="/use-cases/ai-recruiting-product"
            component={AIRecruitingProduct}
          />
          <Route
            exact
            path="/use-cases/credit-risk-modeler"
            component={CreditRiskModeler}
          />
        </Item>
      </Grid>
    </Grid>
  );
}
