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
  ArticleTwoTone,
  BatchPredictionTwoTone,
  CableTwoTone,
  FeaturedPlayListTwoTone,
  IntegrationInstructionsTwoTone,
  Launch,
  LightbulbTwoTone,
  MonitorHeartTwoTone
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  ListItemIcon,
  ListItemSecondaryAction,
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

export default function Landing() {
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
            Welcome to Credo AI!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              bgcolor: "#51118D",
              color: "white",
              backgroundColor: "#7C02CA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%238002d1' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%238403d8' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%238803de' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%238c04e5' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%239004EC' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23a308e0' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23b20cd5' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23bf10ca' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23bf13b7' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23B5169B' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "scroll",
              backgroundSize: "cover"
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  mb: 1
                }}
              >
                <Box mr={1}>
                  <LightbulbTwoTone />
                </Box>
                <Box>
                  <Typography fontWeight="bold">
                    Get started by adding an AI Use Case
                  </Typography>
                </Box>
              </Box>
              <Typography
                gutterBottom
                sx={{ height: 70, overflow: "auto" }}
                variant="body2"
              >
                Kick off the governance process by adding an AI Use Case to
                provide context, identify risks, and collaborate with
                stakeholders on requirements.
              </Typography>
              <Box color="secondary.main">
                <Button
                  component="a"
                  href="https://3imxg.csb.app/configuration"
                  target="_blank"
                  size="small"
                  variant="contained"
                  color="inherit"
                  sx={{ borderRadius: 2 }}
                >
                  Create Use Case
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              bgcolor: "#51118D",
              color: "white",
              backgroundColor: "#7C02CA",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%238002d1' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%238403d8' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%238803de' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%238c04e5' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%239004EC' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23a308e0' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23b20cd5' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23bf10ca' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23bf13b7' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23B5169B' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "scroll",
              backgroundSize: "cover"
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  mb: 1
                }}
              >
                <Box mr={1}>
                  <CableTwoTone />
                </Box>
                <Box>
                  <Typography fontWeight="bold">
                    Register ML Models with Credo AI Lens
                  </Typography>
                </Box>
              </Box>
              <Typography
                gutterBottom
                sx={{ height: 70, overflow: "auto" }}
                variant="body2"
              >
                Data Scientists &amp; AI Engineers can easily register existing
                models and associate them with AI Use Cases to prepare for risk
                assessments like fairness.
              </Typography>
              <Box color="secondary.main">
                <Button
                  component="a"
                  href="https://credoai-lens.readthedocs.io/en/latest/notebooks/governance_integration.html#Registering-a-Project-and-Model"
                  target="_blank"
                  size="small"
                  variant="contained"
                  color="inherit"
                  sx={{ borderRadius: 2 }}
                >
                  View Documentation
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Card sx={{ width: "50%" }}>
              <CardContent>
                <Typography color="text.secondary">
                  Getting Started with Credo AI Lens
                </Typography>
              </CardContent>
              <Divider />
              <List dense disablePadding>
                <ListItem>
                  <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                    <FeaturedPlayListTwoTone />
                  </ListItemIcon>
                  <ListItemText
                    primary="What are AI Use Cases?"
                    secondary="Context and collaboration are key for identifying and properly measuring AI risk with ML models."
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="small">
                      <Launch fontSize="small" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                    <ArticleTwoTone />
                  </ListItemIcon>
                  <ListItemText
                    primary="Where do assessment requirements come from?"
                    secondary="After your team has aligned on a use case risks and policies, an assessment spec is generated."
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="small">
                      <Launch fontSize="small" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                    <MonitorHeartTwoTone />
                  </ListItemIcon>
                  <ListItemText
                    primary="How do I continously monitor AI risks?"
                    secondary="Risk &amp; compliance reports are generated on demand or on a recurring schedule to stay on top of potential issues."
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="small">
                      <Launch fontSize="small" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Card>
            <Card sx={{ flexGrow: 1, maxWidth: "50%" }}>
              <iframe
                width="500"
                height="300"
                src={`https://www.loom.com/embed/5caf8b2189214016bbb7a4fab5e0d65b`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </Card>
          </Stack>
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
