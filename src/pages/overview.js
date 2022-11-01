import * as React from "react";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import {
  AddAlertTwoTone,
  BatchPredictionTwoTone,
  InboxTwoTone,
  IntegrationInstructionsTwoTone,
  LightbulbTwoTone,
  PeopleAltTwoTone
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  ListItemButton,
  ListItemSecondaryAction,
  Tooltip,
  Typography
} from "@mui/material";

import { AssessmentDocsIcon, ProductDocsIcon } from "../components/icons";

// Start steps
const tasks = [
  {
    title: "Requirements Input - Policies",
    from: "Fei Simmons",
    description: "Fairness Alignment",
    date: "Jan 18 9:34 AM",
    due: "Overdue",
    useCase: "AI Recruiting Software",
    link: "/inbox/task-alignment"
  },
  {
    title: "Assessment Requested",
    from: "Sam Mavis",
    description: "Fairness Assessment for Candidate Search Model",
    date: "Jan 20 11:15 AM",
    due: "tomorrow",
    useCase: "Credit Default Prediction",
    link: "/inbox/task-assessment"
  },
  {
    title: "Policy Assigned",
    from: "Fei Simmons",
    description: "FAIR.T2 (Evaluate the fairness of the model)",
    date: "Jan 21 9:34 AM",
    due: "",
    useCase: "AI Recruiting Software",
    link: "/inbox/task-policy"
  },
  {
    title: "Review Report",
    from: "Sam Mavis",
    description: "Risk Report",
    date: "Jan 21 12:03 PM",
    due: "",
    useCase: "Facial Recognition",
    link: "/inbox/task-report"
  },
  {
    title: "Requirements Input - Metrics",
    from: "Fei Simmons",
    description: "Hey can you help me select the proper metrics for...",
    date: "Jan 21 4:32 PM",
    due: "",
    useCase: "AI Recruiting Software",
    link: "/inbox/task-define"
  }
];

// Begin Use Cases
const useCases = [
  {
    name: "AI Recruiting Software",
    id: "BFK7yrJc35ChJZ9qXMAUuS",
    owner: "Fei Simmons",
    contributors: "Tyler Lee, Sam Mavis, Nina Sharpe",
    models: "Candidate Discovery, Resume Screener",
    description:
      "Predict whether a recent college grad will be a good fit for a job based on their performance and specialization in school, including their class percentile rank, degree specialization, and years of prior work experience."
  },
  {
    name: "Credit Default Prediction",
    id: "JPu9N2HtTiBK2an2Q7vTBS",
    models: "Risk Calculation, Loan Intent",
    owner: "Tyler Lee",
    contributors: "Fei Simmons, Sam Mavis, George Wallace",
    description:
      "Predicts credit card default in the following month using previous payment history, along with other factors. While this is useful to us in and of itself, the main model is also input to mitigation strategies, as one of the inputs to other financial models."
  },
  {
    name: "Facial Recognition",
    owner: "Jules Summers",
    contributors: "Fei Simmons, Tyler Lee, Sam Mavis",
    models: "Face Detection, Occlusion Detection",
    id: "Z9eqmpsrxSVX68rMpHQEtZ",
    description:
      "Provide us with intelligence on the demographic make-up of our customers in our retail stores. Facial recognition also makes it easy to identify VIP customers and to make them special offers in store and alert them on their mobile device."
  },
  {
    name: "HR Chatbot",
    owner: "Fei Simmons",
    id: "VS83DBp6ihQ65BzhmXYFV8",
    description:
      "Visitors coming to our HR can ask basic sales questions to our Sales Support Chatbot, which will search through a predefined set of documentation and sales collateral to provide answers"
  },
  {
    name: "Retail Traffic Analyzer",
    owner: "Fei Simmons",
    id: "kNvKphx2U9gZ8xUcvVkVbX",
    description:
      "Provide us with intelligence on the demographic make-up of our customers in our retail stores. Analyze video footage (more specifically, still images taken periodically from CCTV footage from inside our stores)"
  }
];
// End Use Cases

export default function Overview() {
  const location = useLocation();

  return (
    <>
      <Box
        position="absolute"
        height={{ xs: 130, sm: 140, md: 165, lg: 180, xl: 220 }}
        width="100%"
        bgcolor="#7C02CA"
      ></Box>
      <Grid
        container
        spacing={2}
        sx={{
          height: "calc(100vh - 32px)",
          position: "relative",
          overflow: "auto",
          pt: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
            xl: 10
          },
          px: {
            xs: 4,
            sm: 6,
            md: 10,
            lg: 12,
            xl: 14
          },
          pb: 15
        }}
      >
        <Grid item xs={12}>
          <Typography sx={{ mb: -1 }} color="background.paper" variant="h6">
            Recently Visited Use Cases
          </Typography>
        </Grid>
        {useCases.slice(0, 3).map((useCase, index) => (
          <Grid item xs={4}>
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardActionArea
                component="a"
                href="https://3imxg.csb.app/"
                target="_blank"
              >
                <Box
                  sx={{
                    display: "flex",
                    color: "white",
                    pt: 2,
                    px: 2,
                    pb: 1,
                    bgcolor: "#51118D"
                  }}
                >
                  <Box mr={1}>
                    <LightbulbTwoTone />
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{useCase.name}</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ height: 76, overflow: "auto" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {useCase.description.substring(0, 220) + " ..."}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {/** 
           
        <Grid item xs={4}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex">
                <Box mr={1}>
                  <LightbulbTwoTone sx={{ color: "indigo" }} />
                </Box>
                <Box>
                  <Typography>Recent Use Cases</Typography>
                </Box>
              </Box>
            </CardContent>
            <List dense disablePadding sx={{ mt: -2 }}>
              {useCases.map((useCase) => (
                <>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      sx={{
                        "&:active": {
                          bgcolor: "primary.main",
                          color: "background.paper",
                          borderRadius: 2
                        }
                      }}
                      href="https://3imxg.csb.app/"
                      target="_blank"
                    >
                      <ListItemText
                        primary={
                          <>
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box fontSize="13px" fontWeight="bold">
                                {useCase.name}
                              </Box>
                            </Box>
                          </>
                        }
                        secondary={
                          <>
                            <Box fontSize="caption.fontSize">
                              {useCase.description.substring(0, 80) + " ..."}
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

            <CardActions sx={{ mx: 1 }}>
              <Button
                href="https://3imxg.csb.app/use-cases"
                target="_blank"
                size="small"
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
          **/}
        <Grid item xs={6}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex">
                <Box mr={1}>
                  <InboxTwoTone sx={{ color: "mediumBlue" }} />
                </Box>
                <Box>
                  <Typography>Tasks Assigned to Me</Typography>
                </Box>
              </Box>
            </CardContent>
            <List dense disablePadding sx={{ mt: -2 }}>
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
                              <Box fontSize="13px" fontWeight="bold">
                                {task.title}
                              </Box>
                            </Box>

                            <Box fontSize="caption.fontSize">
                              {task.description}
                            </Box>
                            <Box
                              fontSize="caption.fontSize"
                              color="text.secondary"
                            >
                              {task.useCase}
                            </Box>
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box
                                fontSize="caption.fontSize"
                                color={
                                  task.due === "Overdue"
                                    ? "error.main"
                                    : "text.secondary"
                                }
                              >
                                {task.due === "Overdue" ? "Overdue" : "Due"}:{" "}
                                {task.date}
                              </Box>
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

            <CardActions sx={{ mx: 1 }}>
              <Button component={RouterLink} to="/inbox" size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={4} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Box display="flex">
                <Box mr={1}>
                  <PeopleAltTwoTone sx={{ color: "darkCyan" }} />
                </Box>
                <Box>
                  <Typography>Tasks Assigned to Others</Typography>
                </Box>
              </Box>
            </CardContent>
            <List dense disablePadding sx={{ mt: -2 }}>
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
                            <Box fontSize="13px" fontWeight="bold">
                              Assigned: {task.from}
                            </Box>
                            <Box fontSize="caption.fontSize">{task.title}</Box>
                            <Box
                              fontSize="caption.fontSize"
                              color="text.secondary"
                            >
                              {task.useCase}
                            </Box>

                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box
                                fontSize="caption.fontSize"
                                color={
                                  task.due === "Overdue"
                                    ? "error.main"
                                    : "text.secondary"
                                }
                              >
                                {task.due === "Overdue" ? "Overdue" : "Due"}:{" "}
                                {task.date}
                              </Box>
                            </Box>
                          </>
                        }
                      />
                    </ListItemButton>
                    <ListItemSecondaryAction>
                      <IconButton edge="end">
                        <Tooltip title="Send reminder">
                          <AddAlertTwoTone />
                        </Tooltip>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider sx={{ mx: 2 }} />
                </>
              ))}
            </List>

            <CardActions sx={{ mx: 1 }}>
              <Button component={RouterLink} to="/inbox" size="small">
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack direction="row">
                <Box flexGrow={1} px={2} width={"40%"}>
                  <Box>
                    <ProductDocsIcon
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      sx={{ width: 60, height: 60 }}
                    />
                  </Box>
                  <Typography>Responsible AI User Guide</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Credo AI product documentation to setup a use case, invite
                    contributors, and ensure the AI systems are in compliance
                    with business and regulatory requirements.
                  </Typography>
                  <Button
                    startIcon={<BatchPredictionTwoTone />}
                    href="https://docs.google.com/document/d/1Ks-PzK4Yx3dfGdvv7q7p6CnKbsFBCHxxjmVYts5Ci4Q/edit?usp=sharing"
                    target="_blank"
                  >
                    Read documentation
                  </Button>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box flexGrow={1} px={2} width={"40%"}>
                  <Box>
                    <AssessmentDocsIcon
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      sx={{ width: 60, height: 60 }}
                    />
                  </Box>
                  <Typography>Setup your Data Science Environment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Setup your data science environment using the Credo AI Lens
                    assessment framework to begin technical assessments via
                    Python, Jupyter, or a CI/CD pipeline.
                  </Typography>
                  <Button
                    startIcon={<IntegrationInstructionsTwoTone />}
                    href="https://credoai-lens.readthedocs.io/en/latest/"
                    target="_blank"
                  >
                    Read documentation
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
