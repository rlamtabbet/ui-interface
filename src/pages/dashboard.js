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
import ReactEcharts from "echarts-for-react";

import {
  Close,
  ErrorTwoTone,
  FilterListTwoTone,
  LightbulbTwoTone,
  RefreshTwoTone,
  SecurityTwoTone,
  WarningTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  CircularProgress,
  LinearProgress,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListSubheader,
  Tooltip,
  Typography
} from "@mui/material";
import Define from "./tasks/define";
import Alignment from "./tasks/alignment";
import Finalize from "./tasks/finalize";
import Assessment from "./tasks/assessment";
import Policy from "./tasks/policy";
import Report from "./tasks/report";
import Tasks from "./tasks/tasks";

// Start steps
const tasks = [
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

export default function Dashboard() {
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
  const [filters, setFilters] = React.useState(false);
  const handleFilters = () => {
    setFilters(!filters);
  };
  // End toggle

  // Start checkboxes

  const [valueRisk, setValueRisk] = React.useState(["vendors"]);

  const handleRiskChange = (event) => {
    var updatedList = [...valueRisk];
    if (event.target.checked) {
      updatedList = [...valueRisk, event.target.value];
    } else {
      updatedList.splice(valueRisk.indexOf(event.target.value), 1);
    }
    setValueRisk(updatedList);
  };
  const risks = [
    {
      name: "Vendors",
      state: "vendors",
      description:
        "Risk that your AI systems disproportionately advantage certain groups above others."
    },
    {
      name: "Recruiting",
      state: "recruiting",
      description:
        "Risk that end users do not understand AI system outcomes because your AI systems is not explainable/transparent enough."
    },
    {
      name: "Security",
      state: "security",
      description:
        "Risk that your Al systems violate an individual's or group's right to privacy."
    },
    {
      name: "AI Labs",
      state: "ailabs",
      description:
        "Risk that your AI systems (and its associated data) are vulnerable to cybersecurity or other security breach."
    }
  ];

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Dashboard</Box>
        <Box mr={1}>
          <Tooltip title="View Filters">
            <IconButton onClick={handleFilters}>
              <FilterListTwoTone />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          height: "calc(100vh - 50px)",
          position: "relative"
        }}
      >
        <Grid
          item
          xs={filters ? 9 : 12}
          sx={{
            height: "calc(100vh - 50px)",
            paddingBottom: 15,
            overflow: "auto"
          }}
        >
          <Item p={3}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Card
                  variant="outlined"
                  sx={{
                    p: 1,
                    textAlign: "center",
                    width: "33%"
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box display="flex" mx="auto">
                      <Box display="flex" height="60px" justifyContent="center">
                        <Box fontSize="50px" color="secondary.dark" mr={2}>
                          <LightbulbTwoTone fontSize="inherit" />
                        </Box>
                      </Box>
                      <Box textAlign="left">
                        <Box
                          fontSize="h5.fontSize"
                          fontWeight="bold"
                          color="text.secondary"
                        >
                          13
                        </Box>
                        <Box
                          fontSize="subtitle2.fontSize"
                          color="text.secondary"
                        >
                          AI Use Cases
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
                    width: "33%"
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box display="flex" mx="auto">
                      <Box display="flex" height="60px" justifyContent="center">
                        <Box fontSize="50px" color="lightSeaGreen" mr={2}>
                          <SecurityTwoTone fontSize="inherit" />
                        </Box>
                      </Box>
                      <Box textAlign="left">
                        <Box
                          fontSize="h5.fontSize"
                          fontWeight="bold"
                          color="text.secondary"
                        >
                          5
                        </Box>
                        <Box
                          fontSize="subtitle2.fontSize"
                          color="text.secondary"
                        >
                          Policy Packs in Use
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
                    width: "33%"
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box display="flex" mx="auto">
                      <Box display="flex" height="60px" justifyContent="center">
                        <Box fontSize="50px" color="secondary.light" mr={2}>
                          <WidgetsTwoTone fontSize="inherit" />
                        </Box>
                      </Box>
                      <Box textAlign="left">
                        <Box
                          fontSize="h5.fontSize"
                          fontWeight="bold"
                          color="text.secondary"
                        >
                          26
                        </Box>
                        <Box
                          fontSize="subtitle2.fontSize"
                          color="text.secondary"
                        >
                          ML Models
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Card
                  variant="outlined"
                  sx={{
                    p: 1,
                    width: "33%"
                  }}
                >
                  <Box px={1}>
                    <Typography gutterBottom>AI Use Case Risk</Typography>
                  </Box>
                  <Box>
                    <ReactEcharts
                      style={{ height: 75, width: "100%" }}
                      option={{
                        grid: {
                          left: 5,
                          top: 5,
                          right: 5,
                          bottom: 20
                        },
                        xAxis: {
                          type: "category",
                          data: ["High", "Moderate", "Low"]
                        },
                        yAxis: {
                          type: "value",
                          max: 10
                        },
                        series: [
                          {
                            data: [
                              {
                                value: 2,
                                itemStyle: {
                                  color: "#C62829"
                                }
                              },
                              {
                                value: 8,
                                itemStyle: {
                                  color: "#FF8100"
                                }
                              },
                              {
                                value: 3,
                                itemStyle: {
                                  color: "#4CAF50"
                                }
                              }
                            ],
                            type: "bar"
                          }
                        ]
                      }}
                    />
                  </Box>
                  <ListSubheader
                    sx={{
                      bgcolor: "action.hover",
                      lineHeight: 2,
                      mx: -2,
                      mt: 1,
                      px: 3
                    }}
                  >
                    Use Cases
                  </ListSubheader>
                  <List dense disablePadding>
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="AI Recruiting Software" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Chip
                          sx={{ height: 20 }}
                          label="5 Issues"
                          variant="contained"
                          color="error"
                        />
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Credit Card Loan Default" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Chip
                          sx={{ height: 20 }}
                          label="3 Issues"
                          variant="contained"
                          color="error"
                        />
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="New Store Location" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Chip
                          sx={{ height: 20 }}
                          label="2 Issues"
                          variant="contained"
                          color="warning"
                        />
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Product Recommendation Tool" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Chip
                          sx={{ height: 20 }}
                          label="2 Issues"
                          variant="contained"
                          color="warning"
                        />
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Sales Support Chatbot" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Chip
                          sx={{ height: 20 }}
                          label="1 Issue"
                          variant="contained"
                          color="warning"
                        />
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <Divider />
                  <Box pt={1}>
                    <Button color="secondary">View more</Button>
                  </Box>
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    p: 1,
                    width: "33%"
                  }}
                >
                  <Box px={1}>
                    <Typography gutterBottom>Compliance Progress</Typography>
                  </Box>
                  <Divider />
                  <List dense disablePadding>
                    <ListItemButton
                      href="https://3imxg.csb.app/report/compliance-status"
                      target="_blank"
                      component="a"
                    >
                      <ListItem disablePadding>
                        <ListItemText
                          primary="New Store Location"
                          secondary="Credo AI RAI Pack: 91%"
                        />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box
                            height="30px"
                            sx={{
                              position: "relative",
                              display: "inline-flex"
                            }}
                            mr={2}
                            color="success.light"
                          >
                            <CircularProgress
                              variant="determinate"
                              value="91"
                              color="inherit"
                              thickness={6}
                              size={30}
                            />
                            <Box
                              color="action.focus"
                              position="absolute"
                              left={0}
                            >
                              <CircularProgress
                                variant="determinate"
                                color="inherit"
                                thickness={6}
                                size={30}
                                value={100}
                              />
                            </Box>
                            <Box
                              color="text.secondary"
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <Typography fontSize="9px">91%</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/report/compliance-status"
                      target="_blank"
                      component="a"
                    >
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Credit Card Loan Default"
                          secondary="FED AI Best Practices: 82%"
                        />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box
                            height="30px"
                            sx={{
                              position: "relative",
                              display: "inline-flex"
                            }}
                            mr={2}
                            color="success.light"
                          >
                            <CircularProgress
                              variant="determinate"
                              value="82"
                              color="inherit"
                              thickness={6}
                              size={30}
                            />
                            <Box
                              color="action.focus"
                              position="absolute"
                              left={0}
                            >
                              <CircularProgress
                                variant="determinate"
                                color="inherit"
                                thickness={6}
                                size={30}
                                value={100}
                              />
                            </Box>
                            <Box
                              color="text.secondary"
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <Typography fontSize="9px">82%</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/report/compliance-status"
                      target="_blank"
                      component="a"
                    >
                      <ListItem disablePadding>
                        <ListItemText
                          primary="AI Recruiting Software"
                          secondary="NYC AEDT Pack: 71%"
                        />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box
                            height="30px"
                            sx={{
                              position: "relative",
                              display: "inline-flex"
                            }}
                            mr={2}
                            color="warning.light"
                          >
                            <CircularProgress
                              variant="determinate"
                              value="71"
                              color="inherit"
                              thickness={6}
                              size={30}
                            />
                            <Box
                              color="action.focus"
                              position="absolute"
                              left={0}
                            >
                              <CircularProgress
                                variant="determinate"
                                color="inherit"
                                thickness={6}
                                size={30}
                                value={100}
                              />
                            </Box>
                            <Box
                              color="text.secondary"
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <Typography fontSize="9px">71%</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/report/compliance-status"
                      target="_blank"
                      component="a"
                    >
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Product Recommendation Tool"
                          secondary="EEOC AI Guidelines: 67%"
                        />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box
                            height="30px"
                            sx={{
                              position: "relative",
                              display: "inline-flex"
                            }}
                            mr={2}
                            color="error.light"
                          >
                            <CircularProgress
                              variant="determinate"
                              value="67"
                              color="inherit"
                              thickness={6}
                              size={30}
                            />
                            <Box
                              color="action.focus"
                              position="absolute"
                              left={0}
                            >
                              <CircularProgress
                                variant="determinate"
                                color="inherit"
                                thickness={6}
                                size={30}
                                value={100}
                              />
                            </Box>
                            <Box
                              color="text.secondary"
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <Typography fontSize="9px">67%</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/report/compliance-status"
                      target="_blank"
                      component="a"
                    >
                      <ListItem disablePadding>
                        <ListItemText
                          primary="Sales Support Chatbot"
                          secondary="Credo AI Fairness Pack: 52%"
                        />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box
                            height="30px"
                            sx={{
                              position: "relative",
                              display: "inline-flex"
                            }}
                            mr={2}
                            color="error.light"
                          >
                            <CircularProgress
                              variant="determinate"
                              value="52"
                              color="inherit"
                              thickness={6}
                              size={30}
                            />
                            <Box
                              color="action.focus"
                              position="absolute"
                              left={0}
                            >
                              <CircularProgress
                                variant="determinate"
                                color="inherit"
                                thickness={6}
                                size={30}
                                value={100}
                              />
                            </Box>
                            <Box
                              color="text.secondary"
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            >
                              <Typography fontSize="9px">52%</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <Divider />
                  <Box pt={1}>
                    <Button color="secondary">View more</Button>
                  </Box>
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    p: 1,
                    width: "33%"
                  }}
                >
                  <Box px={1}>
                    <Typography gutterBottom>Model Risk Issues</Typography>
                  </Box>
                  <Box>
                    <ReactEcharts
                      style={{ height: 75, width: "100%" }}
                      option={{
                        grid: {
                          left: 5,
                          top: 5,
                          right: 5,
                          bottom: 20
                        },
                        legend: {
                          data: [
                            { name: "Issues", icon: "circle" },
                            { name: "Missing", icon: "triangle" },
                            { name: "Ok", icon: "roundRect" }
                          ],
                          bottom: -5
                        },

                        yAxis: [
                          {
                            type: "category",
                            show: false,
                            data: ["Status"]
                          }
                        ],
                        xAxis: [
                          {
                            type: "value",
                            show: false
                          }
                        ],
                        series: [
                          {
                            name: "Issues",
                            type: "bar",
                            barGap: 0.25,
                            data: [2],
                            itemStyle: {
                              color: "#C62829"
                            }
                          },
                          {
                            name: "Missing",
                            type: "bar",
                            emphasis: {
                              focus: "series"
                            },
                            data: [8],
                            itemStyle: {
                              color: "#FF8100"
                            }
                          },
                          {
                            name: "Ok",
                            type: "bar",
                            emphasis: {
                              focus: "series"
                            },
                            data: [3],
                            itemStyle: {
                              color: "#4CAF50"
                            }
                          }
                        ]
                      }}
                    />
                  </Box>
                  <ListSubheader
                    sx={{
                      bgcolor: "action.hover",
                      lineHeight: 2,
                      mx: -2,
                      mt: 1,
                      px: 3
                    }}
                  >
                    Models
                  </ListSubheader>
                  <List dense disablePadding>
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Resume Screener" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Tooltip title="1 issue in AI Recruiting Software, 2 issues in HR Hiring Suite">
                          <Chip
                            sx={{
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="3"
                            color="error"
                            icon={<ErrorTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                        <Tooltip title="1 missing metric in AI Recruiting Software, 1 missing metric in HR Hiring Suite">
                          <Chip
                            sx={{
                              ml: 1,
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="2"
                            color="warning"
                            icon={<WarningTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Product Classifier" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Tooltip title="1 issue in Product Recommendation Tool">
                          <Chip
                            sx={{
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="1"
                            color="error"
                            icon={<ErrorTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                        <Tooltip title="1 missing metric in Product Recommendation Tool, 2 missing metrics in New Store Location">
                          <Chip
                            sx={{
                              ml: 1,
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="3"
                            color="warning"
                            icon={<WarningTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Salary Prediction" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Tooltip title="3 missing metrics in Credit Card Loan Default">
                          <Chip
                            sx={{
                              ml: 1,
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="3"
                            color="warning"
                            icon={<WarningTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Loan Classifier" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Tooltip title="2 missing metrics in Credit Card Loan Default">
                          <Chip
                            sx={{
                              ml: 1,
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="2"
                            color="warning"
                            icon={<WarningTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItem disablePadding>
                        <ListItemText primary="Movie Recommender" />
                      </ListItem>
                      <ListItemSecondaryAction>
                        <Tooltip title="2 missing metrics in Product Recommendation Tool">
                          <Chip
                            sx={{
                              ml: 1,
                              height: 24,
                              "& .MuiChip-label": {
                                pl: 1,
                                pr: 1
                              }
                            }}
                            variant="outlined"
                            label="2"
                            color="warning"
                            icon={<WarningTwoTone fontSize="small" />}
                          />
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <Divider />
                  <Box pt={1}>
                    <Button color="secondary">View more</Button>
                  </Box>
                </Card>
              </Stack>
            </Stack>
          </Item>
        </Grid>
        {filters ? (
          <Grid
            item
            xs={3}
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
                    <Box flexGrow={1}>Filters</Box>
                    <Box>
                      <IconButton size="small" onClick={handleFilters}>
                        <Close fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
                <Item px={2}>
                  <List dense disablePadding>
                    {risks.map((risk, index) => {
                      const labelId = `checkbox-${risk}`;

                      return (
                        <>
                          <ListItem key={labelId} disablePadding>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={valueRisk.includes(risk.state)}
                                onChange={handleRiskChange}
                                value={risk.state}
                                name={risk.state}
                                tabIndex={-1}
                                disableRipple
                              />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={risk.name} />
                          </ListItem>
                          <Divider />
                        </>
                      );
                    })}
                  </List>
                </Item>
              </Stack>
            </Item>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
