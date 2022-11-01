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

import { Close } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";

import ManageUsecases from "./use-cases";

// Start steps
const tasks = [
  {
    title: "Add Models to Use Case",
    from: "Fei Simmons",
    description: "Configuration",
    date: "Mar 02 9:34 AM",
    due: "tomorrow",
    useCase: "AI Recruiting Software",
    link: "/inbox/task-add-models"
  },
  {
    title: "Requirements Input - Policies",
    from: "Fei Simmons",
    description: "Fairness Alignment",
    date: "Jan 18 9:34 AM",
    due: "Overdue",
    link: "/inbox/task-alignment"
  },
  {
    title: "Assessment Requested",
    from: "Sam Mavis",
    description: "Fairness Assessment for Candidate Search Model",
    date: "Jan 20 11:15 AM",
    due: "tomorrow",
    link: "/inbox/task-assessment"
  },
  {
    title: "Policy Assigned",
    from: "Fei Simmons",
    description: "FAIR.T2 (Evaluate the fairness of the model)",
    date: "Jan 21 9:34 AM",
    due: "",
    link: "/inbox/task-policy"
  },
  {
    title: "Review Report",
    from: "Sam Mavis",
    description: "Risk Report",
    date: "Jan 21 12:03 PM",
    due: "",
    link: "/inbox/task-report"
  },
  {
    title: "Requirements Input - Metrics",
    from: "Fei Simmons",
    description: "Hey can you help me select the proper metrics for...",
    date: "Jan 21 4:32 PM",
    due: "",
    link: "/inbox/task-define"
  }
];

export default function Manage() {
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
  const [useCaseDetails, setUseCaseDetails] = React.useState(true);
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
                  <Box flexGrow={1}>Manage</Box>
                  <Box>
                    <IconButton size="small" onClick={handleUseCaseDetails}>
                      <Close fontSize="inherit" />
                    </IconButton>
                  </Box>
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
                          <ListItemText
                            primary={
                              <>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Box fontSize="body2.fontSize">
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
        <Item p={3}>
          <Route exact path="/manage/use-cases" component={ManageUsecases} />
        </Item>
      </Grid>
    </Grid>
  );
}
